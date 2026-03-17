import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cards — AmalCB.com',
  description: 'Credit and debit cards from Amal Commercial Bank. Earn rewards, cashback and travel benefits.',
};

const cards = [
  { name: 'AmalCB Classic Debit', network: 'Visa', color: 'from-gray-700 to-gray-900', textColor: 'text-white', fee: 'Free', cashback: 'N/A', limit: '$5,000/day', perks: ['Free ATM withdrawals', 'Contactless payments', 'Online banking', 'SMS alerts'] },
  { name: 'AmalCB Rewards Credit', network: 'Mastercard', color: 'from-red-600 to-red-900', textColor: 'text-white', fee: '$45/year', cashback: '1.5% on all spend', limit: '$15,000', perks: ['1.5% cashback', '0% foreign transaction fee', 'Travel insurance', 'Purchase protection'], popular: true },
  { name: 'AmalCB Platinum Credit', network: 'Visa Infinite', color: 'from-slate-800 to-slate-600', textColor: 'text-white', fee: '$199/year', cashback: '3% dining, 2% travel', limit: '$50,000', perks: ['Priority airport lounges', '3% dining cashback', 'Concierge service', 'Hotel upgrades'] },
  { name: 'AmalCB Business Card', network: 'Mastercard', color: 'from-blue-800 to-blue-600', textColor: 'text-white', fee: '$99/year', cashback: '2% business spend', limit: '$100,000', perks: ['Expense management', 'Employee cards', 'Monthly statements', 'Business rewards'] },
];

export default function CardsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">Cards</span>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Cards for Every Lifestyle</h1>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">Earn rewards, cashback and exclusive privileges wherever you go.</p>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {cards.map((card) => (
                <div key={card.name} className={`rounded-2xl overflow-hidden border-2 ${card.popular ? 'border-red-500' : 'border-gray-100'} bg-white hover:shadow-xl transition-all group relative`}>
                  {card.popular && <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Best Value</span>}
                  {/* Card visual */}
                  <div className={`bg-gradient-to-br ${card.color} p-6 relative overflow-hidden h-40`}>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-10 rounded-full" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white opacity-5 rounded-full" />
                    <div className="relative z-10">
                      <div className="text-white/70 text-xs mb-1">AmalCB</div>
                      <div className={`font-bold text-sm ${card.textColor} mb-4`}>{card.name}</div>
                      <div className="text-white/60 font-mono text-sm">**** **** **** 0000</div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/80 text-xs font-semibold">{card.network}</div>
                  </div>
                  {/* Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div><div className="text-xs text-gray-400">Annual Fee</div><div className="font-bold text-gray-900 text-sm">{card.fee}</div></div>
                      <div><div className="text-xs text-gray-400">Cashback</div><div className="font-bold text-red-600 text-sm">{card.cashback}</div></div>
                      <div className="col-span-2"><div className="text-xs text-gray-400">Credit Limit</div><div className="font-bold text-gray-900 text-sm">{card.limit}</div></div>
                    </div>
                    <ul className="space-y-1.5 mb-5">
                      {card.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2 text-xs text-gray-600">
                          <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <Link href="/signup" className={`block text-center text-sm font-semibold py-2.5 rounded-lg transition-colors ${card.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'border border-red-600 text-red-600 hover:bg-red-50'}`}>
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Card Benefits Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="px-5 py-4 text-left font-semibold">Feature</th>
                    <th className="px-5 py-4 text-center font-semibold">Classic</th>
                    <th className="px-5 py-4 text-center font-semibold">Rewards</th>
                    <th className="px-5 py-4 text-center font-semibold">Platinum</th>
                    <th className="px-5 py-4 text-center font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feat: 'Contactless Payments', vals: ['✅', '✅', '✅', '✅'] },
                    { feat: 'Cashback', vals: ['—', '1.5%', '3%', '2%'] },
                    { feat: 'Airport Lounge Access', vals: ['—', '—', '✅', '—'] },
                    { feat: 'Travel Insurance', vals: ['—', '✅', '✅', '✅'] },
                    { feat: 'Concierge Service', vals: ['—', '—', '✅', '—'] },
                    { feat: '0% Forex Fee', vals: ['—', '✅', '✅', '✅'] },
                    { feat: 'Employee Cards', vals: ['—', '—', '—', '✅'] },
                  ].map((row) => (
                    <tr key={row.feat} className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-medium text-gray-900">{row.feat}</td>
                      {row.vals.map((val, i) => (
                        <td key={i} className="px-5 py-3 text-center text-gray-600">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CTASection title="Get Your AmalCB Card Today" description="Apply online in minutes. Contactless card delivered to your door within 3 working days." primaryCta={{ label: 'Apply Now', href: '/signup' }} />
      </main>
      <Footer />
    </>
  );
}
