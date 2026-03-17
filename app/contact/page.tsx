import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — AmalCB.com',
  description: 'Get in touch with Amal Commercial Bank. Find our branches, contact details, and support channels.',
};

const offices = [
  { city: 'Dubai HQ', address: 'AmalCB Tower, Sheikh Zayed Road, Dubai, UAE', phone: '+971 4 300 0000', hours: 'Mon–Fri: 8AM–6PM' },
  { city: 'Abu Dhabi', address: 'Corniche Road, Abu Dhabi Financial District, UAE', phone: '+971 2 300 0001', hours: 'Mon–Fri: 8AM–5PM' },
  { city: 'London', address: '25 Canary Wharf, London, E14 5LQ, UK', phone: '+44 20 7946 0000', hours: 'Mon–Fri: 9AM–5PM' },
  { city: 'New York', address: '1 Liberty Plaza, New York, NY 10006, USA', phone: '+1 212 555 0100', hours: 'Mon–Fri: 9AM–5PM EST' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black mb-3">Get in Touch</h1>
            <p className="text-red-200 text-lg max-w-xl mx-auto">We&apos;re here to help. Contact our team through any of the channels below.</p>
          </div>
        </section>

        {/* Quick contact options */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📞', label: '24/7 Hotline', value: '800 AMALCB (800 26252)', sub: 'Toll-free from UAE' },
                { icon: '💬', label: 'Live Chat', value: 'Start a conversation', sub: 'Average wait: <1 min' },
                { icon: '📧', label: 'Email Support', value: 'support@amalcb.com', sub: 'Reply within 24 hours' },
                { icon: '📍', label: 'Branches', value: '150+ Locations', sub: 'Find nearest branch' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                  <div className="text-3xl">{c.icon}</div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="font-bold text-gray-900 text-sm">{c.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form + info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-5 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input type="text" placeholder="Your full name" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+971 50 000 0000" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Enquiry Type</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>Select an option</option>
                      <option>Personal Banking</option>
                      <option>Business Banking</option>
                      <option>Loans</option>
                      <option>Cards</option>
                      <option>Digital Banking</option>
                      <option>Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea rows={5} placeholder="How can we help you?" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Office locations */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Our Offices</h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{office.city}</h3>
                          <p className="text-gray-500 text-sm">{office.address}</p>
                          <p className="text-red-600 text-sm font-medium mt-1">{office.phone}</p>
                          <p className="text-gray-400 text-xs mt-0.5">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
