import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About AmalCB — Amal Commercial Bank',
  description: 'Learn about Amal Commercial Bank — our history, leadership, values and commitment to serving you.',
};

const leadership = [
  { name: 'Dr. Amal Al-Hussain', role: 'Chief Executive Officer', bio: 'Dr. Al-Hussain has over 30 years of experience in international banking and has led AmalCB through transformative growth across multiple markets.' },
  { name: 'Fatima Yusuf', role: 'Chief Financial Officer', bio: 'With expertise in capital markets and financial risk, Fatima oversees AmalCB\'s financial strategy and investor relations globally.' },
  { name: 'Omar Sheikh', role: 'Chief Technology Officer', bio: 'A pioneer in fintech, Omar drives AmalCB\'s digital transformation strategy, overseeing mobile banking and AI-driven financial products.' },
  { name: 'Sara Mansoor', role: 'Chief Risk Officer', bio: 'Sara leads enterprise risk management, compliance, and regulatory affairs, ensuring AmalCB meets the highest standards in governance.' },
];

const milestones = [
  { year: '1998', event: 'AmalCB founded in Dubai with a single branch and a vision to serve emerging markets.' },
  { year: '2004', event: 'Expanded to 10 countries across the Middle East and Africa, crossing $1B in assets.' },
  { year: '2011', event: 'Launched AmalCB Online — one of the first fully digital banking portals in the region.' },
  { year: '2016', event: 'Listed on the Dubai Financial Market (DFM). Received AAA credit rating.' },
  { year: '2020', event: 'Launched the award-winning AmalCB mobile app, reaching 1 million downloads in 6 months.' },
  { year: '2024', event: 'Crossed $18 billion in assets under management. Serving 2 million customers worldwide.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Building Trust. Enabling Growth.</h1>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">For over 28 years, Amal Commercial Bank has served individuals and businesses with integrity, innovation, and a deeply personal approach to banking.</p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="text-3xl font-black text-gray-900 mt-1 mb-4">Empowering Financial Lives</h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  At AmalCB, we believe that access to responsible and innovative banking is a right, not a privilege. Our mission is to empower individuals, families, and businesses to achieve financial freedom through secure, accessible and intelligent banking services.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Headquartered in Dubai with operations in 40+ countries, we combine deep local knowledge with global expertise to deliver financial solutions that truly make a difference.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🤝', label: 'Integrity', desc: 'We act with honesty and accountability in every decision.' },
                  { icon: '💡', label: 'Innovation', desc: 'We pioneer new ways to serve our customers better.' },
                  { icon: '🌍', label: 'Inclusion', desc: 'We make banking accessible to everyone, everywhere.' },
                  { icon: '⭐', label: 'Excellence', desc: 'We hold ourselves to the highest standards of service.' },
                ].map((v) => (
                  <div key={v.label} className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <div className="text-3xl mb-2">{v.icon}</div>
                    <div className="font-bold text-gray-900 mb-1">{v.label}</div>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '$18B+', label: 'Total Assets' },
                { value: '2M+', label: 'Customers Served' },
                { value: '150+', label: 'Branches Worldwide' },
                { value: '40+', label: 'Countries' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-black">{s.value}</div>
                  <div className="text-red-200 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
              <h2 className="text-3xl font-black text-gray-900 mt-1">The Team Behind AmalCB</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((leader) => (
                <div key={leader.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
                    {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-red-600 text-sm font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl font-black text-gray-900 mt-1">28 Years of Growth</h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-200" />
              <div className="space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6 items-start pl-2">
                    <div className="relative flex-shrink-0">
                      <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs z-10 relative">{m.year.slice(2)}</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 flex-1 border border-gray-100 shadow-sm">
                      <div className="text-red-600 font-bold text-lg">{m.year}</div>
                      <p className="text-gray-600 text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Partner With a Bank You Can Trust" description="With 28 years of experience and a clear vision forward, AmalCB is built to serve you." primaryCta={{ label: 'Open an Account', href: '/signup' }} secondaryCta={{ label: 'Contact Us', href: '/contact' }} />
      </main>
      <Footer />
    </>
  );
}
