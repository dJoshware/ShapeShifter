// app/api/webhooks/stripe/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { buffer } from 'micro';

export const runtime = 'nodejs';
export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } }
);

export default async function handler(req) {
    const sig = req.headers.get('stripe-signature');
    const buf = await buffer(req);
    let evt;
    try {
        evt = stripe.webhooks.constructEvent(
            buf,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    const sub = evt.data.object;
    const userId = sub.metadata.supabase_user_id; // see below

    if (
        [
            'customer.subscription.created',
            'customer.subscription.updated',
        ].includes(evt.type)
    ) {
        await supabaseAdmin.from('subscriptions').upsert(
            {
                user_id: userId,
                stripe_customer_id: sub.customer,
                stripe_subscription_id: sub.id,
                tier: sub.items.data[0].price.id,
                status: sub.status,
                current_period_end: new Date(
                    sub.current_period_end * 1000
                ).toISOString(),
                updated_at: new Date().toISOString(),
            },
            { onConflict: 'stripe_subscription_id' }
        );
    }

    if (evt.type === 'customer.subscription.deleted') {
        await supabaseAdmin
            .from('subscriptions')
            .update({
                status: sub.status,
                updated_at: new Date().toISOString(),
            })
            .eq('stripe_subscription_id', sub.id);
    }

    return NextResponse.json({ received: true });
}
