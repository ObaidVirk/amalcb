import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Banking — AmalCB.com',
  description: 'AmalCB digital banking — mobile app, online banking, USSD banking, and API solutions.',
};

const features = [
  { icon: '📱', title: 'AmalCB Mobile App', desc: 'Available on iOS and Android. Manage accounts, pay bills, transfer funds and invest — all from your phone.' },
  { icon: '💻', title: 'Online Banking Portal', desc: 'Full-featured browser-based banking with advanced dashboards, detailed statements, and bulk payment tools.' },
  { icon: '📟', title: 'USSD Banking', desc: 'No smartphone? No problem. Dial *222# to access core banking services from any mobile phone.' },
  { icon: '🔐', title: 'Biometric Login', desc: 'Secure your account with fingerprint and Face ID authentication. No more remembering passwords.' },
  { icon: '⚡', title: 'Instant Payments', desc: 'Send money locally and internationally in real-time. Available 24/7 including weekends and holidays.' },
  { icon: '📊', title: 'Spending Analytics', desc: 'Automatic transaction categorisation and real-time insights to help you manage your budget.' },
  { icon: '🤖', title: 'AI Financial Assistant', desc: 'Our smart AI helps you track goals, identify saving opportunities and alerts you to unusual activity.' },
  { icon: '🔗', title: 'Open Banking API', desc: 'Connect AmalCB accounts to third-party apps using our secure, PSD2-compliant API platform.' },
];

export default function DigitalBankingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm font-medium text-red-400 mb-6">Digital Banking</span>
                <h1 className="text-4xl sm:text-5xl font-black mb-4">Your Bank in Your Pocket</h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">Banking has never been more powerful, more accessible, or more secure. Experience the full AmalCB suite of digital tools.</p>
                <div className="flex gap-4">
                  <Link href="/signup" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Get Started</Link>
                  <a href="#features" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">See Features</a>
                </div>
                {/* App store badges */}
                <div className="flex gap-3 mt-8">
                  {['App Store', 'Google Play'].map((store) => (
                    <div key={store} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                      <span className="text-white text-xs font-medium">📲 {store}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 bg-gray-800 rounded-[2.5rem] border-4 border-gray-600 overflow-hidden shadow-2xl">
                    <div className="bg-red-600 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-white/70 text-xs">Good morning</div>
                          <div className="text-white font-bold text-sm">Amal Ahmed</div>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full" />
                      </div>
                      <div className="text-white/80 text-xs mb-1">Total Balance</div>
                      <div className="text-white font-black text-2xl">$24,880.50</div>
                    </div>
                    <div className="bg-gray-900 p-4 space-y-3">
                      {[
                        { label: 'Transfer', icon: '↑', color: 'bg-blue-500' },
                        { label: 'Pay Bills', icon: '📋', color: 'bg-green-500' },
                        { label: 'Invest', icon: '📈', color: 'bg-purple-500' },
                        { label: 'More', icon: '···', color: 'bg-gray-600' },
                      ].map((action) => (
                        <div key={action.label} className="flex items-center gap-3 p-2 rounded-lg bg-gray-800">
                          <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center text-white text-sm`}>{action.icon}</div>
                          <span className="text-white text-sm">{action.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Everything at Your Fingertips</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">A complete digital banking suite designed for today&apos;s connected lifestyle.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Your Security is Our Priority</h2>
            <p className="text-gray-500 text-lg mb-8">AmalCB digital banking is protected by military-grade encryption, real-time fraud monitoring, and zero-trust architecture.</p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { badge: '256-bit', label: 'SSL Encryption', desc: 'All data transmitted between you and AmalCB is secured with industry-leading 256-bit encryption.' },
                { badge: '2FA', label: 'Two-Factor Auth', desc: 'Every login and transaction is verified with a second layer of authentication via SMS or authenticator app.' },
                { badge: '24/7', label: 'Fraud Monitoring', desc: 'Our AI fraud detection system monitors every transaction around the clock and alerts you instantly.' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded mb-2">{item.badge}</span>
                  <h4 className="font-bold text-gray-900 mb-1">{item.label}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Start Banking Digitally Today" description="Download the AmalCB app or sign up online in minutes." primaryCta={{ label: 'Sign Up Free', href: '/signup' }} />
      </main>
      <Footer />
    </>
  );
}
