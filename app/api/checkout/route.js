import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// force this route to run in Node.js (so `import Stripe` works)
export const runtime = 'nodejs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    // Pull priceId (and email if you want) from the JSON body
    const { priceId, email } = await req.json();

    // Create the Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [{ price: priceId, quantity: 1 }],
        customer_email: email, // optional prefill
        metadata: {
            supabase_user_id: req.headers.get('x-supabase-user-id')
        },
        success_url: `${process.env.NEXTAUTH_URL}/?subscribed=true`,
        cancel_url: `${process.env.NEXTAUTH_URL}/`,
    });

    // Return the URL for the client to redirect to
    return NextResponse.json({ url: session.url });
}
