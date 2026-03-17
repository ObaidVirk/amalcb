'use client';

import Link from 'next/link';
import { useTranslation } from '@/context/TranslationContext';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge = 'Trusted by 2M+ customers',
}: HeroSectionProps) {
  const { t } = useTranslation();

  const resolvedTitle = title ?? t.hero.headline;
  const resolvedSubtitle = subtitle ?? t.hero.subheadline;
  const resolvedPrimaryCta = primaryCta ?? { label: t.hero.cta, href: '/signup' };
  const resolvedSecondaryCta = secondaryCta ?? { label: 'Explore Products', href: '/personal-banking' };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-red-800 flex items-center overflow-hidden pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-64 h-64 bg-orange-400 opacity-15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900 opacity-10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {badge}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 whitespace-pre-line">
              {resolvedTitle}
            </h1>
            <p className="text-lg text-red-100 leading-relaxed mb-8 max-w-lg">
              {resolvedSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={resolvedPrimaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-red-50 transition-colors shadow-lg"
              >
                {resolvedPrimaryCta.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={resolvedSecondaryCta.href}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                {resolvedSecondaryCta.label}
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              {[
                { value: '2M+', label: 'Customers' },
                { value: '$18B+', label: 'Assets Under Management' },
                { value: '150+', label: 'Branches Worldwide' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-red-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mock banking card UI */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-48 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl p-6 relative overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-400 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-xs text-gray-400">AmalCB</div>
                      <div className="text-sm font-semibold text-white">Premium Card</div>
                    </div>
                    <div className="w-10 h-7 bg-yellow-400 rounded opacity-90 flex items-center justify-center">
                      <div className="w-6 h-5 border-2 border-yellow-600 rounded-sm" />
                    </div>
                  </div>
                  <div className="text-lg tracking-widest text-white font-mono mb-4">
                    **** **** **** 4321
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-gray-400">Card Holder</div>
                      <div className="text-sm text-white font-medium">J. AHMED</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Expires</div>
                      <div className="text-sm text-white">09/28</div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full opacity-80" />
                      <div className="w-8 h-8 bg-orange-400 rounded-full opacity-80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -bottom-6 -left-12 bg-white rounded-xl shadow-xl p-4 w-56">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Payment Received</div>
                    <div className="text-sm font-bold text-green-600">+$4,500.00</div>
                    <div className="text-xs text-gray-400">Just now</div>
                  </div>
                </div>
              </div>

              {/* Balance card */}
              <div className="absolute -top-6 -right-10 bg-white rounded-xl shadow-xl p-4 w-44">
                <div className="text-xs text-gray-500 mb-1">Account Balance</div>
                <div className="text-xl font-black text-gray-900">$24,880</div>
                <div className="flex items-center gap-1 text-green-600 text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  +12.4% this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
