import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loans — AmalCB.com',
  description: 'Personal loans, home loans, auto loans and business loans with competitive rates from Amal Commercial Bank.',
};

const loanProducts: { name: string; rate: string; max: string; term: string; icon: string; desc: string; features: string[]; popular?: boolean; badge?: string }[] = [
  { name: 'Personal Loan', rate: '4.9% p.a.', max: '$50,000', term: 'Up to 7 years', icon: '💰', desc: 'Flexible personal loans for any purpose — education, travel, renovation or emergencies. Fast approval within 24 hours.', features: ['No collateral needed', '24-hour approval', 'Flexible repayment', 'No early settlement fee'] },
  { name: 'Home Loan', rate: '3.5% p.a.', max: '$2,000,000', term: 'Up to 30 years', icon: '🏠', desc: 'Finance your dream property with our competitive mortgage rates and personalised repayment plans.', features: ['Fixed & variable rates', 'Offset account option', 'Up to 90% LTV', 'Free property valuation'], popular: true },
  { name: 'Auto Loan', rate: '4.2% p.a.', max: '$150,000', term: 'Up to 7 years', icon: '🚗', desc: 'Drive away in your new car today with our quick auto financing and competitive rates for new and used vehicles.', features: ['New & used vehicles', 'Balloon payment option', 'Insurance bundling', 'Quick pre-approval'] },
  { name: 'Business Loan', rate: '5.2% p.a.', max: '$10,000,000', term: 'Up to 15 years', icon: '🏢', desc: 'Fund your business growth, acquisition, or working capital needs with tailored business financing.', features: ['Secured & unsecured', 'Working capital lines', 'Invoice financing', 'Equipment loans'] },
  { name: 'Education Loan', rate: '3.8% p.a.', max: '$100,000', term: 'Up to 10 years', icon: '🎓', desc: 'Invest in your future with low-rate student loans covering tuition, accommodation and living expenses.', features: ['Deferred repayment', 'Low fixed rates', 'Covers all degrees', 'Grace period option'] },
  { name: 'Green Loan', rate: '3.2% p.a.', max: '$500,000', term: 'Up to 20 years', icon: '🌱', desc: 'Finance environmentally friendly projects — solar panels, EV purchases, or eco-friendly home renovations.', features: ['Lowest rate available', 'Solar & EV eligible', 'Carbon credit advisory', 'Priority processing'], badge: 'ESG' },
];

export default function LoansPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">Loan Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Finance That Works for You</h1>
            <p className="text-xl text-red-200 max-w-2xl mx-auto mb-8">Competitive rates, fast approvals, and flexible repayment options for every financial need.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-white text-red-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-red-50 transition-colors">Apply Now</Link>
              <Link href="#calculator" className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors">Loan Calculator</Link>
            </div>
          </div>
        </section>

        {/* Loan Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Our Loan Products</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanProducts.map((loan) => (
                <div key={loan.name} className={`bg-white rounded-2xl p-7 border-2 ${loan.popular ? 'border-red-500' : 'border-gray-100'} hover:shadow-xl transition-all relative`}>
                  {loan.popular && <span className="absolute -top-3 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                  {loan.badge && <span className="absolute top-5 right-5 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">{loan.badge}</span>}
                  <div className="text-4xl mb-3">{loan.icon}</div>
                  <h3 className="font-black text-xl text-gray-900 mb-1">{loan.name}</h3>
                  <div className="flex gap-4 mb-3">
                    <div><div className="text-xs text-gray-400">Rate from</div><div className="text-red-600 font-bold">{loan.rate}</div></div>
                    <div><div className="text-xs text-gray-400">Up to</div><div className="font-bold text-gray-900">{loan.max}</div></div>
                    <div><div className="text-xs text-gray-400">Term</div><div className="font-bold text-gray-900 text-sm">{loan.term}</div></div>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{loan.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {loan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup" className={`block text-center font-semibold py-2.5 rounded-lg transition-colors ${loan.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'border border-red-600 text-red-600 hover:bg-red-50'}`}>
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Calculator */}
        <section id="calculator" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900">Loan Calculator</h2>
              <p className="text-gray-500 mt-2">Estimate your repayments before you apply</p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { label: 'Loan Amount', min: '$1,000', max: '$2,000,000', default: '$50,000' },
                    { label: 'Interest Rate (p.a.)', min: '1%', max: '25%', default: '4.9%' },
                    { label: 'Loan Term (months)', min: '6', max: '360', default: '60' },
                  ].map((field) => (
                    <div key={field.label}>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">{field.label}</label>
                        <span className="text-sm font-bold text-red-600">{field.default}</span>
                      </div>
                      <input type="range" className="w-full accent-red-600" />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>{field.min}</span><span>{field.max}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-red-600 rounded-2xl p-6 text-white flex flex-col justify-center">
                  <div className="text-red-200 text-sm mb-1">Monthly Repayment</div>
                  <div className="text-5xl font-black mb-2">$943</div>
                  <div className="space-y-2 mt-4 text-sm">
                    <div className="flex justify-between"><span className="text-red-200">Total Interest</span><span>$6,582</span></div>
                    <div className="flex justify-between"><span className="text-red-200">Total Repaid</span><span>$56,582</span></div>
                    <div className="flex justify-between"><span className="text-red-200">Effective Rate</span><span>4.9% p.a.</span></div>
                  </div>
                  <Link href="/signup" className="mt-6 block text-center bg-white text-red-700 font-semibold py-3 rounded-xl hover:bg-red-50 transition-colors">
                    Apply for This Loan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Low Rates. Fast Approval." description="Apply online in minutes and get a decision within 24 hours." primaryCta={{ label: 'Apply Now', href: '/signup' }} />
      </main>
      <Footer />
    </>
  );
}
