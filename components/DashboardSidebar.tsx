'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const sidebarItems = [
  {
    section: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin', icon: '📊' },
      { label: 'Analytics', href: '/admin#analytics', icon: '📈' },
    ],
  },
  {
    section: 'Management',
    items: [
      { label: 'Customers', href: '/admin#customers', icon: '👥' },
      { label: 'Accounts', href: '/admin#accounts', icon: '🏦' },
      { label: 'Transactions', href: '/admin#transactions', icon: '💳' },
      { label: 'Loans', href: '/admin#loans', icon: '💰' },
    ],
  },
  {
    section: 'Content',
    items: [
      { label: 'Content Manager', href: '/admin#content', icon: '📝' },
      { label: 'Notifications', href: '/admin#notifications', icon: '🔔' },
    ],
  },
  {
    section: 'System',
    items: [
      { label: 'Settings', href: '/admin#settings', icon: '⚙️' },
      { label: 'Security', href: '/admin#security', icon: '🔐' },
      { label: 'Audit Logs', href: '/admin#logs', icon: '📋' },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('adminLoggedIn');
    router.push('/');
  }

  return (
    <aside className="w-64 bg-gray-900 min-h-screen flex flex-col text-gray-300">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-800">
        <Link href="/" className="inline-flex items-center" aria-label="Admin dashboard home">
          <Image
            src="/adminpanel.png"
            alt="Admin Panel"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <p className="text-xs text-gray-500 mt-1">Admin Console</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {sidebarItems.map((group) => (
          <div key={group.section} className="mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              {group.section}
            </p>
            {group.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium mb-0.5 transition-colors ${
                  pathname === item.href
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      {/* Bottom user */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">Super Admin</div>
            <div className="text-xs text-gray-500 truncate">admin@amalcb.com</div>
          </div>
          <button onClick={handleLogout} className="text-gray-500 hover:text-red-400 transition-colors" title="Logout">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
