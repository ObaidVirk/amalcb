import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCards from '@/components/PricingCards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — AmalCB.com',
  description: 'Choose the AmalCB banking plan that fits your needs.',
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 pt-24 pb-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-14">
          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Pricing Plans
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Simple, transparent <span className="text-red-600">pricing</span>
          </h1>
          <p className="text-lg text-gray-500">
            Pick the plan that works best for you — no hidden fees, no surprises.
          </p>
        </div>

        <PricingCards />

        <section className="max-w-4xl mx-auto px-4 mt-20">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Can I change plans later?</h3>
              <p className="text-sm text-gray-600">
                Yes. You can upgrade or downgrade any time, and billing updates on your next cycle.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Is there a contract?</h3>
              <p className="text-sm text-gray-600">
                No long-term contracts. Paid plans are subscription based and can be canceled anytime.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">How secure is payment?</h3>
              <p className="text-sm text-gray-600">
                All payments are handled by Stripe over secure, PCI-compliant checkout.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">What happens on the free plan?</h3>
              <p className="text-sm text-gray-600">
                The free plan skips payment and takes users directly to sign-up.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
