import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getPlanById, type BillingCycle } from '@/lib/pricing';

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
    const { planId, billingCycle } = (await req.json()) as {
      planId?: string;
      billingCycle?: BillingCycle;
    };

    if (!planId || !billingCycle || !['monthly', 'yearly'].includes(billingCycle)) {
      return NextResponse.json({ error: 'Invalid plan selection.' }, { status: 400 });
    }

    const plan = getPlanById(planId);
    if (!plan) {
      return NextResponse.json({ error: 'Selected plan does not exist.' }, { status: 404 });
    }

    const selectedPrice = plan.prices[billingCycle];
    if (!selectedPrice || selectedPrice.amount <= 0 || !selectedPrice.interval) {
      return NextResponse.json({ error: 'This plan does not require Stripe checkout.' }, { status: 400 });
    }

    const origin = req.headers.get('origin') ?? 'http://localhost:3000';

    const envPriceId = selectedPrice.envPriceId
      ? process.env[selectedPrice.envPriceId]
      : undefined;

    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = envPriceId
      ? {
          price: envPriceId,
          quantity: 1,
        }
      : {
          price_data: {
            currency: 'usd',
            recurring: { interval: selectedPrice.interval },
            product_data: {
              name: plan.name,
              description: `AmalCB ${plan.name} banking plan`,
            },
            unit_amount: selectedPrice.amount,
          },
          quantity: 1,
        };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [lineItem],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
