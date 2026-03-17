import Link from 'next/link';

interface FeatureSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  features: { icon: React.ReactNode; title: string; description: string }[];
  cta?: { label: string; href: string };
  imageRight?: boolean;
  dark?: boolean;
}

export default function FeatureSection({
  eyebrow,
  title,
  description,
  features,
  cta,
  imageRight = true,
  dark = false,
}: FeatureSectionProps) {
  return (
    <section className={`py-20 ${dark ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${!imageRight ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text content */}
          <div className={imageRight ? 'order-1' : 'order-2'}>
            {eyebrow && (
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                {eyebrow}
              </span>
            )}
            <h2 className={`text-3xl sm:text-4xl font-black mb-4 leading-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
              {description}
            </p>
            <div className="space-y-6">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{feat.title}</h4>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {cta && (
              <div className="mt-8">
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Visual side */}
          <div className={`${imageRight ? 'order-2' : 'order-1'} flex justify-center`}>
            <div className="relative w-full max-w-md">
              <div className={`rounded-3xl p-8 ${dark ? 'bg-gray-800' : 'bg-gradient-to-br from-red-50 to-red-100'}`}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Total Balance', value: '$48,920', up: true },
                    { label: 'Monthly Spend', value: '$3,240', up: false },
                    { label: 'Investments', value: '$12,500', up: true },
                    { label: 'Savings Goal', value: '74%', up: true },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-2xl p-4 ${dark ? 'bg-gray-700' : 'bg-white'} shadow-sm`}
                    >
                      <div className={`text-xs mb-1 ${dark ? 'text-gray-400' : 'text-gray-400'}`}>{item.label}</div>
                      <div className={`text-lg font-black ${dark ? 'text-white' : 'text-gray-900'}`}>{item.value}</div>
                      <div className={`flex items-center gap-0.5 text-xs font-medium ${item.up ? 'text-green-500' : 'text-red-500'}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.up ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                        </svg>
                        {item.up ? '+2.4%' : '-1.2%'}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mini chart placeholder */}
                <div className={`mt-4 h-24 rounded-xl flex items-end gap-1.5 px-3 pb-3 ${dark ? 'bg-gray-700' : 'bg-white'}`}>
                  {[40, 65, 45, 70, 55, 80, 60, 90, 75, 85, 95, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-red-500 rounded-t-sm opacity-70 hover:opacity-100 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
