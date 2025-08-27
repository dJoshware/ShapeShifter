import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createServClient } from '../../../lib/supabaseServerClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Optional allowlist so priceId cannot be tampered with from the client
const PRICE_MAP = {
    monthly: process.env.MONTHLY_PRICE_ID,
    yearly: process.env.YEARLY_PRICE_ID,
};

export async function POST(req) {
    try {
        const { email, plan } = await req.json();
        const priceId = PRICE_MAP[plan];

        if (!priceId) {
            return NextResponse.json(
                { error: 'Invalid price' },
                { status: 400 }
            );
        }

        // Get authenticated user server-side instead of trusting a header
        const supabase = await createServClient();
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error || !user) {
            return NextResponse.json(
                { error: 'Not signed in' },
                { status: 401 }
            );
        }

        // Try to reuse an existing Stripe customer for user
        let stripeCustomerId = null;
        const { data: existing } = await supabase
            .from('subscriptions')
            .select('stripe_cust_id')
            .eq('user_id', user.id)
            .not('stripe_cust_id', 'is', null)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle();
        
        stripeCustomerId = existing?.stripe_cust_id ?? null;
        
        // If none yet, create customer NOW or let Stripe create implicitly
        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: email || user.email || undefined,
                metadata: { supabase_user_id: user.id },
            });
            stripeCustomerId = customer.id;
        }

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            line_items: [{ price: priceId, quantity: 1 }],
            customer: stripeCustomerId,
            subscription_data: {
                metadata: { supabase_user_id: user.id },
            },
            client_reference_id: user.id,

            success_url: `${process.env.NEXTAUTH_URL}/?subscribed=true`,
            cancel_url: `${process.env.NEXTAUTH_URL}/`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error('Stripe Checkout Error:', err);
        return NextResponse.json(
            { error: 'Stripe session creation failed' },
            { status: 500 }
        );
    }
}
