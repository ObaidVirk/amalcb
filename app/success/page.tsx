import Link from 'next/link';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Successful — AmalCB.com',
  description: 'Your payment was processed successfully.',
};

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center px-4 pt-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full text-center px-8 py-12">
          {/* Check icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-black text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-500 text-sm mb-8">
            Thank you for subscribing to AmalCB. Your account has been activated and you&apos;re ready to get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/personal-banking"
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/"
              className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-8">
            A confirmation email has been sent to your registered address.
          </p>
        </div>
      </main>
    </>
  );
}
