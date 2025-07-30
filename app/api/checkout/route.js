import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Force route to run in Node.js (so `import Stripe` works)
export const runtime = 'nodejs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        // Pull priceId (and email if you want) from the JSON body
        const { email, priceId } = await req.json();

        // Create the Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            line_items: [{ price: priceId, quantity: 1 }],
            customer_email: email,
            metadata: {
                supabase_user_id: req.headers.get('x-supabase-user-id') || 'unknown'
            },
            success_url: `${process.env.NEXTAUTH_URL}/?subscribed=true`,
            cancel_url: `${process.env.NEXTAUTH_URL}/`,
        });

        // Return the URL for the client to redirect to
        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error('Stripe Checkout Error:', err);
        return NextResponse.json({
            error: 'Stripe session creation failed'
        }, { status: 500 });
    }
}
