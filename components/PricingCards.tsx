'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { PRICING_PLANS, type BillingCycle, type PricingPlan } from '@/lib/pricing';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

function formatPrice(plan: PricingPlan, billingCycle: BillingCycle) {
  const amount = plan.prices[billingCycle].amount;
  if (amount === 0) return 'Free';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount / 100);
}

export default function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function handleCheckout(plan: PricingPlan) {
    if (plan.prices[billingCycle].amount === 0) {
      window.location.href = '/signup';
      return;
    }

    setError('');
    setLoadingPlan(plan.id);

    try {
      if (!stripePromise) {
        setError('Stripe is not configured. Add your publishable key to .env.local.');
        return;
      }

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          billingCycle,
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
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-xl bg-white border border-gray-200 shadow-sm">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-red-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-colors ${
              billingCycle === 'yearly'
                ? 'bg-red-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Yearly
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
              Save 2 months
            </span>
          </button>
        </div>
      </div>

      {error && (
        <p className="text-center text-red-600 text-sm font-medium mb-6 bg-red-50 border border-red-200 rounded-lg py-3 px-4 max-w-md mx-auto">
          {error}
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
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
                  {formatPrice(plan, billingCycle)}
                </span>
                {plan.prices[billingCycle].amount > 0 && (
                  <span className={`text-sm mb-2 ${plan.highlighted ? 'text-red-200' : 'text-gray-400'}`}>
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
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
                disabled={loadingPlan === plan.id}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                  plan.highlighted
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-md'
                    : plan.prices[billingCycle].amount === 0
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {loadingPlan === plan.id
                  ? 'Redirecting to Stripe...'
                  : plan.prices[billingCycle].amount === 0
                  ? 'Get Started Free'
                  : `${plan.cta} - ${formatPrice(plan, billingCycle)}/${billingCycle === 'monthly' ? 'mo' : 'yr'}`}
              </button>
              {plan.prices[billingCycle].amount > 0 && (
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
