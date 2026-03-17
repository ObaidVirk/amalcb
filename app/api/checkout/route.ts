import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    throw new Error('Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local.');
  }

  return new Stripe(stripeSecretKey);
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripeClient();
    const { planName, amount, interval } = await req.json();

    const origin = req.headers.get('origin') ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: interval ? 'subscription' : 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            recurring: interval ? { interval } : undefined,
            product_data: {
              name: planName,
              description: `AmalCB ${planName} banking plan`,
            },
            unit_amount: amount, // in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
