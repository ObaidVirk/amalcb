import Link from 'next/link';

interface BankingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  tag?: string;
  featured?: boolean;
}

export default function BankingCard({ icon, title, description, href, tag, featured }: BankingCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block rounded-2xl p-6 transition-all duration-300 border hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? 'bg-red-600 border-red-500 text-white hover:bg-red-700'
          : 'bg-white border-gray-100 hover:border-red-200 hover:shadow-red-50'
      }`}
    >
      {tag && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full ${
            featured ? 'bg-white/20 text-white' : 'bg-red-50 text-red-600'
          }`}
        >
          {tag}
        </span>
      )}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
          featured ? 'bg-white/20' : 'bg-red-50 group-hover:bg-red-100'
        }`}
      >
        <span className={featured ? 'text-white' : 'text-red-600'}>{icon}</span>
      </div>
      <h3
        className={`font-bold text-lg mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-4 ${featured ? 'text-red-100' : 'text-gray-500'}`}
      >
        {description}
      </p>
      <div
        className={`flex items-center gap-1 text-sm font-semibold ${
          featured ? 'text-white' : 'text-red-600'
        }`}
      >
        Learn more
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
