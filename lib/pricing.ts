export type BillingCycle = 'monthly' | 'yearly';

export interface PlanPrice {
  amount: number;
  interval: 'month' | 'year' | null;
  envPriceId?: string;
}

export interface PricingPlan {
  id: 'basic' | 'premium' | 'business';
  name: string;
  description: string;
  highlighted: boolean;
  tag?: string;
  features: string[];
  cta: string;
  prices: Record<BillingCycle, PlanPrice>;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Essential banking for individuals getting started.',
    highlighted: false,
    features: [
      'Free current account',
      'Debit card included',
      'Mobile and online banking',
      'Up to 5 free transfers/month',
      'Basic customer support',
    ],
    cta: 'Get Started Free',
    prices: {
      monthly: {
        amount: 0,
        interval: null,
      },
      yearly: {
        amount: 0,
        interval: null,
      },
    },
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'The full AmalCB experience for everyday banking.',
    highlighted: true,
    tag: 'Most Popular',
    features: [
      'Everything in Basic',
      'Unlimited transfers',
      'Priority support 24/7',
      'Free international transfers',
      'Cashback on purchases',
      'Dedicated relationship manager',
    ],
    cta: 'Choose Premium',
    prices: {
      monthly: {
        amount: 900,
        interval: 'month',
        envPriceId: 'STRIPE_PRICE_PREMIUM_MONTHLY',
      },
      yearly: {
        amount: 9000,
        interval: 'year',
        envPriceId: 'STRIPE_PRICE_PREMIUM_YEARLY',
      },
    },
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Advanced tools for teams and growing businesses.',
    highlighted: false,
    features: [
      'Everything in Premium',
      'Business current account',
      'Multi-user access',
      'Payroll management',
      'Advanced analytics and reports',
      'Dedicated business advisor',
    ],
    cta: 'Choose Business',
    prices: {
      monthly: {
        amount: 2900,
        interval: 'month',
        envPriceId: 'STRIPE_PRICE_BUSINESS_MONTHLY',
      },
      yearly: {
        amount: 29000,
        interval: 'year',
        envPriceId: 'STRIPE_PRICE_BUSINESS_YEARLY',
      },
    },
  },
];

export function getPlanById(planId: string) {
  return PRICING_PLANS.find((plan) => plan.id === planId);
}
