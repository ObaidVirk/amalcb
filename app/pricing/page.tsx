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
      </main>
      <Footer />
    </>
  );
}
