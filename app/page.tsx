import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BankingCard from '@/components/BankingCard';
import ServiceCard from '@/components/ServiceCard';
import FeatureSection from '@/components/FeatureSection';
import CTASection from '@/components/CTASection';
import Link from 'next/link';

const personalProducts: { icon: React.ReactNode; title: string; description: string; href: string; tag?: string; featured?: boolean }[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Current Accounts',
    description: 'Everyday banking with zero maintenance fees, instant transfers, and global debit card access.',
    href: '/personal-banking',
    tag: 'Popular',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Savings Accounts',
    description: 'Grow your wealth with competitive interest rates and flexible saving plans.',
    href: '/personal-banking',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Personal Loans',
    description: 'Fast personal loans with low interest rates and flexible repayment up to 7 years.',
    href: '/loans',
    tag: 'New Rate',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Home Loans',
    description: 'Make your dream home a reality with competitive mortgage rates and tailored plans.',
    href: '/loans',
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Insurance',
    description: 'Comprehensive life, health, and property insurance packages tailored for you.',
    href: '/personal-banking',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Investments',
    description: 'Access mutual funds, stock markets, and structured products with expert advisory.',
    href: '/personal-banking',
    tag: 'ESG',
  },
];

const businessServices = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Business Accounts',
    description: 'Streamlined business current and savings accounts with dedicated relationship manager support.',
    features: ['Multi-currency support', 'Bulk payment processing', 'Dedicated RM', 'API banking integration'],
    badge: 'SME Friendly',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-7-7 7M5 3l7 7 7-7" />
      </svg>
    ),
    title: 'Trade Finance',
    description: 'Letters of credit, bank guarantees, and trade facilitation services for import/export businesses.',
    features: ['Letters of Credit', 'Bank Guarantees', 'Trade Insurance', 'FX solutions'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Business Loans',
    description: 'Working capital loans, term loans, and asset financing with competitive interest rates.',
    features: ['Up to $10M financing', 'Flexible repayment', 'Quick approval', 'Collateral options'],
    badge: 'Fast Approval',
  },
];

const digitalFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Banking App',
    description: 'Manage accounts, pay bills, and transfer money instantly from your smartphone.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Real-time Analytics',
    description: 'Gain insights into your spending patterns and financial health with detailed reports.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Biometric Security',
    description: 'Fingerprint and facial recognition authentication keeping your account safe at all times.',
  },
];

const trustStats = [
  { value: '150+', label: 'Branches & ATMs', sub: 'Worldwide network' },
  { value: 'AAA', label: 'Credit Rating', sub: 'All major agencies' },
  { value: '28 yrs', label: 'In Operation', sub: 'Founded 1998' },
  { value: '99.9%', label: 'Uptime SLA', sub: 'Digital banking' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Personal Banking Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Personal Banking</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">Products for Every Goal</h2>
              </div>
              <Link href="/personal-banking" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline">
                View all products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalProducts.map((p) => (
                <BankingCard key={p.title} icon={p.icon} title={p.title} description={p.description} href={p.href} tag={p.tag} featured={p.featured} />
              ))}
            </div>
          </div>
        </section>

        {/* Digital Banking Feature */}
        <FeatureSection
          eyebrow="Digital Banking"
          title="Bank Anytime, Anywhere"
          description="Our award-winning AmalCB app and online platform put complete control of your finances in your hands — 24/7, securely."
          features={digitalFeatures}
          cta={{ label: 'Explore Digital Banking', href: '/digital-banking' }}
          imageRight={true}
        />

        {/* Business Banking */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Business Banking</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">Power Your Business Forward</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                From startups to multinationals, AmalCB provides comprehensive banking solutions to help your business grow.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {businessServices.map((s) => (
                <Link key={s.title} href="/business-banking">
                  <ServiceCard icon={s.icon} title={s.title} description={s.description} features={s.features} badge={s.badge} />
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/business-banking" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors">
                Explore Business Banking
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Loans section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Loan Solutions</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1 mb-4">Finance That Fits Your Life</h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Whether you need a personal loan, home financing, or business credit, AmalCB offers competitive rates and fast approvals with minimal paperwork.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { type: 'Personal Loan', rate: 'From 4.9% p.a.', max: 'Up to $50,000' },
                    { type: 'Home Loan', rate: 'From 3.5% p.a.', max: 'Up to $2,000,000' },
                    { type: 'Business Loan', rate: 'From 5.2% p.a.', max: 'Up to $10,000,000' },
                    { type: 'Auto Loan', rate: 'From 4.2% p.a.', max: 'Up to $150,000' },
                  ].map((loan) => (
                    <div key={loan.type} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-colors">
                      <span className="font-semibold text-gray-900">{loan.type}</span>
                      <div className="text-right">
                        <div className="text-red-600 font-bold text-sm">{loan.rate}</div>
                        <div className="text-gray-400 text-xs">{loan.max}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/loans" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Apply for a Loan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Loan Calculator</h3>
                <p className="text-red-200 text-sm mb-6">Estimate your monthly repayments</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-red-100 mb-1 block">Loan Amount</label>
                    <input type="range" min="1000" max="100000" defaultValue="25000" className="w-full accent-white" />
                    <div className="flex justify-between text-xs text-red-200 mt-1"><span>$1,000</span><span>$100,000</span></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-red-100 mb-1 block">Loan Term</label>
                    <input type="range" min="1" max="84" defaultValue="36" className="w-full accent-white" />
                    <div className="flex justify-between text-xs text-red-200 mt-1"><span>1 month</span><span>84 months</span></div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5">
                    <div className="text-sm text-red-200 mb-1">Estimated Monthly Payment</div>
                    <div className="text-4xl font-black">$694</div>
                    <div className="text-red-200 text-xs mt-1">Based on 4.9% p.a. | 36 months</div>
                  </div>
                  <Link href="/loans" className="block w-full text-center bg-white text-red-700 font-semibold py-3 rounded-lg hover:bg-red-50 transition-colors">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="py-16 bg-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-black mb-1">{s.value}</div>
                  <div className="font-semibold text-lg">{s.label}</div>
                  <div className="text-red-200 text-sm">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Rania Al-Farsi', role: 'Small Business Owner', quote: 'AmalCB transformed how I manage business finances. The trade finance team is outstanding, and the online portal is very intuitive.', rating: 5 },
                { name: 'James Okonkwo', role: 'Personal Banking Customer', quote: 'Opening my home loan was easier than I ever imagined. Competitive rates and the team was supportive throughout.', rating: 5 },
                { name: 'Mei Lin', role: 'Investment Client', quote: 'The investment advisory service helped me diversify my portfolio intelligently. Returns have exceeded my initial expectations.', rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

