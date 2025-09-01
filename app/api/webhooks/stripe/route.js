// app/api/webhooks/stripe/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Create Stripe client at runtime, not build time
function getStripe() {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set');
    return new Stripe(key, { apiVersion: '2025-06-30.basil' });
}
// Create Supabase admin client at runtime, not build time
function getSupabaseAdmin() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceKey) throw new Error('Supabase admin envs not set');
    return createClient(url, serviceKey, { auth: { persistSession: false } });
}

function toRow(sub, userId) {
    const firstItem = sub.items?.data?.[0] || null;
    const priceId = firstItem?.price?.id || null;

    return {
        user_id: userId || null,
        stripe_cust_id: sub.customer || null,
        stripe_sub_id: sub.id || null,
        tier: priceId,
        status: sub.status,
        current_period_end: new Date(
            firstItem.current_period_end * 1000
        ).toISOString(),
        updated_at: new Date().toISOString(),
    };
}

export async function POST(req) {
    const stripe = getStripe();
    const supabaseAdmin = getSupabaseAdmin();

    console.log('WEBHOOK HIT', req.method, req.url);
    console.log('ENV sanity (webhook):', {
        sk: process.env.STRIPE_SECRET_KEY?.startsWith('sk_'),
        wh: process.env.STRIPE_WEBHOOK_SECRET?.startsWith('whsec_'),
        supaUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasServiceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    });

    const sig = req.headers.get('stripe-signature');
    const raw = Buffer.from(await req.arrayBuffer());

    let event;
    try {
        event = stripe.webhooks.constructEvent(
            raw,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error('❌ Signature verify failed:', err.message);
        return new NextResponse(`Webhook Error: ${err.message}`, {
            status: 400,
        });
    }

    console.log('▶︎ Stripe event:', event.type, event.id);

    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const s = event.data.object;
                console.log(
                    'session meta:',
                    s.metadata,
                    'client_ref:',
                    s.client_reference_id,
                    'sub:',
                    s.subscription,
                    'cust:',
                    s.customer
                );
                if (!s.subscription) break;
                const sub = await stripe.subscriptions.retrieve(s.subscription);
                const userId =
                    s.metadata?.supabase_user_id ||
                    s.client_reference_id ||
                    null;
                const row = toRow(sub, userId);
                console.log('UPSERT (checkout):', row);
                if (!row.user_id) {
                    console.warn('No user_id → skipping');
                    break;
                }
                const { error } = await supabaseAdmin
                    .from('subscriptions')
                    .upsert(row, { onConflict: 'user_id' });
                if (error) {
                    console.error('DB error (checkout):', error);
                } else {
                    console.log('DB upsert OK (checkout)');
                }
                break;
            }

            case 'customer.subscription.created':
            case 'customer.subscription.updated': {
                const sub = event.data.object;

                // If Stripe didn't include period end yet, fetch latest object
                if (!sub.current_period_end) {
                    try {
                        const fresh = await stripe.subscriptions.retrieve(sub.id);
                        if (fresh) sub = fresh;
                    } catch (e) {
                        console.warn('Retrieve fallback failed:', e.message);
                    }
                }

                let userId = sub.metadata?.supabase_user_id || null;
                // Fallback: map by customer if metadata missing
                if (!userId && sub.customer) {
                    const { data: existing, error } = await supabaseAdmin
                        .from('subscriptions')
                        .select('user_id')
                        .eq('stripe_cust_id', sub.customer)
                        .maybeSingle();
                    if (error)
                        console.error('Lookup by customer error:', error);
                    userId = existing?.user_id || null;
                }

                const row = toRow(sub, userId);
                console.log('UPSERT (sub.*):', row);
                if (!row.user_id) {
                    console.warn('No user_id → skipping');
                    break;
                }
                const { error } = await supabaseAdmin
                    .from('subscriptions')
                    .upsert(row, { onConflict: 'user_id' });
                if (error) {
                    console.error('DB error (sub.*):', error);
                } else {
                    console.log('DB upsert OK (sub.*)');
                }
                break;
            }

            case 'customer.subscription.deleted': {
                const sub = event.data.object;
                console.log('CANCEL update for', sub.id);
                const { error } = await supabaseAdmin
                    .from('subscriptions')
                    .update({
                        status: sub.status,
                        updated_at: new Date().toISOString(),
                    })
                    .eq('stripe_sub_id', sub.id);
                if (error) console.error('DB error (deleted):', error);
                break;
            }

            default:
                console.log('Ignoring event:', event.type);
        }
    } catch (err) {
        console.error('❌ Webhook handler crash:', err);
        // still ack so Stripe doesn’t spam retries while you debug
        return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json({ received: true }, { status: 200 });
}
