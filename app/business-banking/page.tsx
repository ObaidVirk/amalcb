import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Banking — AmalCB.com',
  description: 'Comprehensive business banking solutions for SMEs and corporates. Accounts, trade finance, loans and more.',
};

const services = [
  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, title: 'Business Current Account', description: 'Powerful everyday banking for your business with multi-user access and real-time transaction tracking.', features: ['Multi-currency support', 'Bulk salary payments', 'API integration', 'Dedicated RM'], badge: 'SME Ready' },
  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-7-7 7M5 3l7 7 7-7" /></svg>, title: 'Trade Finance', description: 'Smooth cross-border transactions with letters of credit, import/export financing and FX hedging.', features: ['Letters of Credit', 'Documentary Collections', 'FX forward contracts', 'Trade guarantees'] },
  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Business Loans', description: 'Fast financing solutions for working capital, asset purchase, and expansion projects.', features: ['Up to $10M available', 'Flexible repayment', '24-hr pre-approval', 'No early repayment fee'], badge: 'Fast Approval' },
  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>, title: 'Merchant Services', description: 'Accept payments in-store and online with our scalable merchant payment solutions.', features: ['POS terminals', 'Online payment gateway', 'QR payments', 'Settlement next day'] },
  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Cash Management', description: 'Optimise your liquidity with real-time cash visibility, sweeping, and forecasting tools.', features: ['Notional pooling', 'Automated sweeping', 'Cash flow forecasting', 'Investment accounts'] },
  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Corporate Treasury', description: 'Sophisticated treasury management for corporates — FX, derivatives, and investment solutions.', features: ['FX trading desk', 'Interest rate swaps', 'Structured products', 'Portfolio reporting'], badge: 'Corporate' },
];

export default function BusinessBankingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          title={'Banking That\nMeans Business'}
          subtitle="From startups to large corporates, AmalCB delivers integrated financial solutions to help you operate, grow and compete globally."
          primaryCta={{ label: 'Open Business Account', href: '/signup' }}
          secondaryCta={{ label: 'Talk to a Specialist', href: '/contact' }}
          badge="Business Banking"
        />

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">Comprehensive Business Solutions</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">Everything your business needs to transact, borrow, manage cash and grow — in one place.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} features={s.features} badge={s.badge} />
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900">Choose Your Business Tier</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Starter', price: '$0/mo', desc: 'Perfect for new businesses and sole traders.', features: ['1 business account', 'Up to 200 transactions/mo', 'Online banking access', 'Basic reporting', 'Email support'] },
                { name: 'Growth', price: '$49/mo', desc: 'For growing SMEs needing more power.', features: ['3 sub-accounts', 'Unlimited transactions', 'Multi-user access (5)', 'Advanced analytics', 'Dedicated RM', 'Priority support'], popular: true },
                { name: 'Enterprise', price: 'Custom', desc: 'Tailored solutions for large corporations.', features: ['Unlimited accounts', 'API banking integration', 'Custom workflows', 'Treasury services', 'Trade finance', '24/7 dedicated team'] },
              ].map((tier) => (
                <div key={tier.name} className={`rounded-2xl p-8 border-2 ${tier.popular ? 'border-red-600 bg-red-50 relative' : 'border-gray-100 bg-white'}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
                  )}
                  <h3 className="font-black text-xl text-gray-900 mb-1">{tier.name}</h3>
                  <div className="text-3xl font-black text-red-600 mb-1">{tier.price}</div>
                  <p className="text-gray-500 text-sm mb-5">{tier.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/signup" className={`block text-center font-semibold py-3 rounded-lg transition-colors ${tier.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Ready to Grow Your Business?" description="Talk to one of our business banking specialists today." primaryCta={{ label: 'Contact a Specialist', href: '/contact' }} secondaryCta={{ label: 'Open Account', href: '/signup' }} />
      </main>
      <Footer />
    </>
  );
}
