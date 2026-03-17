interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  badge?: string;
}

export default function ServiceCard({ icon, title, description, features, badge }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0 text-red-600 group-hover:from-red-100 group-hover:to-red-200 transition-colors">
          {icon}
        </div>
        <div>
          {badge && (
            <span className="inline-block text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-1">
              {badge}
            </span>
          )}
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{title}</h3>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {feat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
