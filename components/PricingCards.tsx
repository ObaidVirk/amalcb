'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

interface Plan {
  name: string;
  price: number; // USD per month
  amount: number; // cents
  interval: 'month' | 'year' | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  tag?: string;
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: 0,
    amount: 0,
    interval: null,
    description: 'Essential banking for individuals getting started.',
    features: [
      'Free current account',
      'Debit card included',
      'Mobile & online banking',
      'Up to 5 free transfers/month',
      'Basic customer support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 9,
    amount: 900,
    interval: 'month',
    description: 'The full AmalCB experience for everyday banking.',
    features: [
      'Everything in Basic',
      'Unlimited transfers',
      'Priority support 24/7',
      'Free international transfers',
      'Cashback on purchases',
      'Dedicated relationship manager',
    ],
    cta: 'Subscribe — $9/mo',
    highlighted: true,
    tag: 'Most Popular',
  },
  {
    name: 'Business',
    price: 29,
    amount: 2900,
    interval: 'month',
    description: 'Advanced tools for businesses and entrepreneurs.',
    features: [
      'Everything in Premium',
      'Business current account',
      'Multi-user access',
      'Payroll management',
      'Advanced analytics & reports',
      'Dedicated business advisor',
    ],
    cta: 'Subscribe — $29/mo',
    highlighted: false,
  },
];

export default function PricingCards() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function handleCheckout(plan: Plan) {
    if (plan.amount === 0) return; // free plan — no checkout
    setError('');
    setLoadingPlan(plan.name);

    try {
      if (!stripePromise) {
        setError('Stripe is not configured. Add your publishable key to .env.local.');
        return;
      }

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planName: plan.name,
          amount: plan.amount,
          interval: plan.interval,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error ?? 'Failed to start checkout. Please try again.');
        return;
      }

      const stripe = await stripePromise;
      if (stripe && data.url) {
        window.location.href = data.url;
        return;
      }

      setError('Stripe checkout is unavailable right now. Please try again later.');
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      {error && (
        <p className="text-center text-red-600 text-sm font-medium mb-6 bg-red-50 border border-red-200 rounded-lg py-3 px-4 max-w-md mx-auto">
          {error}
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col transition-shadow hover:shadow-xl ${
              plan.highlighted
                ? 'border-red-500 shadow-lg shadow-red-100 scale-105'
                : 'border-gray-200 shadow-md'
            }`}
          >
            {/* Popular tag */}
            {plan.tag && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-b-lg tracking-wide">
                {plan.tag}
              </div>
            )}

            {/* Header */}
            <div className={`px-8 pt-10 pb-6 ${plan.highlighted ? 'bg-gradient-to-br from-red-700 to-red-600 text-white' : ''}`}>
              <h2 className={`text-xl font-black mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h2>
              <p className={`text-sm mb-4 ${plan.highlighted ? 'text-red-200' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <div className="flex items-end gap-1">
                <span className={`text-5xl font-black ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className={`text-sm mb-2 ${plan.highlighted ? 'text-red-200' : 'text-gray-400'}`}>/month</span>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="px-8 py-6 flex-1">
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="px-8 pb-8">
              <button
                onClick={() => handleCheckout(plan)}
                disabled={loadingPlan === plan.name}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                  plan.highlighted
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-md'
                    : plan.price === 0
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {loadingPlan === plan.name ? 'Redirecting to Stripe…' : plan.cta}
              </button>
              {plan.price > 0 && (
                <p className="text-center text-xs text-gray-400 mt-2">
                  Secure payment via Stripe · Cancel anytime
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="mt-14 flex flex-wrap justify-center gap-6 text-xs text-gray-400">
        {['256-bit SSL encryption', 'Powered by Stripe', 'No hidden fees', 'Cancel anytime'].map((b) => (
          <span key={b} className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
