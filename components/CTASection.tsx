import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'red' | 'dark' | 'light';
}

export default function CTASection({
  title = 'Ready to Start Banking Smarter?',
  description = 'Join over 2 million customers who trust AmalCB for their personal and business banking needs.',
  primaryCta = { label: 'Open Free Account', href: '/signup' },
  secondaryCta = { label: 'Contact Us', href: '/contact' },
  variant = 'red',
}: CTASectionProps) {
  const bg =
    variant === 'red'
      ? 'bg-gradient-to-r from-red-700 to-red-600'
      : variant === 'dark'
      ? 'bg-gray-900'
      : 'bg-gray-50';

  const textColor = variant === 'light' ? 'text-gray-900' : 'text-white';
  const subColor = variant === 'light' ? 'text-gray-600' : 'text-red-100';

  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${textColor}`}>{title}</h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 ${subColor}`}>{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-lg transition-colors ${
              variant === 'light'
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-white text-red-700 hover:bg-red-50'
            }`}
          >
            {primaryCta.label}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-lg border-2 transition-colors ${
                variant === 'light'
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-white/40 text-white hover:bg-white/10'
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
