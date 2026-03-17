import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BankingCard from '@/components/BankingCard';
import CTASection from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Banking — AmalCB.com',
  description: 'Personal banking products including accounts, loans, cards and insurance from Amal Commercial Bank.',
};

const products = [
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>, title: 'AmalCB Prime Account', description: 'Our flagship current account with zero fees, free international transfers and a premium Visa debit card.', href: '/personal-banking', tag: 'Best Seller', featured: true },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>, title: 'High-Yield Savings', description: 'Earn up to 5.2% p.a. on your savings with no lock-in period and instant access to your funds.', href: '/personal-banking', tag: '5.2% p.a.' },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Personal Loan', description: 'Borrow up to $50,000 at competitive rates. Quick online application with 24-hour approval.', href: '/loans' },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, title: 'Home Loan', description: 'Finance your dream home with rates from 3.5% p.a. and up to 30-year repayment terms.', href: '/loans', tag: 'From 3.5%' },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Life Insurance', description: 'Protect your loved ones with comprehensive life cover starting from $12/month.', href: '/personal-banking' },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, title: 'Wealth Management', description: 'Expert-guided investment portfolios with access to global markets and personalised strategies.', href: '/personal-banking', tag: 'ESG' },
];

export default function PersonalBankingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          title={'Banking Built\nAround You'}
          subtitle="AmalCB personal banking gives you the tools and support to manage, grow and protect your money with confidence."
          primaryCta={{ label: 'Open an Account', href: '/signup' }}
          secondaryCta={{ label: 'Learn More', href: '#products' }}
          badge="Personal Banking"
        />

        {/* Products */}
        <section id="products" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">Everything You Need</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <BankingCard key={p.title} icon={p.icon} title={p.title} description={p.description} href={p.href} tag={p.tag} featured={p.featured} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900">Why Choose AmalCB Personal Banking?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🔒', title: 'Bank-Grade Security', desc: '256-bit SSL encryption and biometric authentication on every login.' },
                { icon: '⚡', title: 'Instant Transfers', desc: 'Send money locally and internationally in seconds, 24/7.' },
                { icon: '💬', title: '24/7 Support', desc: 'Dedicated customer support via chat, call, or visit any branch.' },
                { icon: '🌍', title: 'Global Access', desc: 'Use your AmalCB card in 180+ countries with no hidden fees.' },
              ].map((b) => (
                <div key={b.title} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Ready to Open Your Account?" description="Join AmalCB today and experience banking designed around your life." />
      </main>
      <Footer />
    </>
  );
}
