'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/context/TranslationContext';

type TranslatedNavLink = {
  key: keyof ReturnType<typeof useTranslation>['t']['nav'];
  href: string;
};

type StaticNavLink = {
  label: string;
  href: string;
};

const navLinks: Array<TranslatedNavLink | StaticNavLink> = [
  { key: 'home' as const, href: '/' },
  { label: 'Personal Banking', href: '/personal-banking' },
  { label: 'Business Banking', href: '/business-banking' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Loans', href: '/loans' },
  { label: 'Cards', href: '/cards' },
  { key: 'about' as const, href: '/about' },
];

function isTranslatedNavLink(link: TranslatedNavLink | StaticNavLink): link is TranslatedNavLink {
  return 'key' in link;
}

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const checkAdmin = () => setIsAdmin(localStorage.getItem('adminLoggedIn') === 'true');
    checkAdmin();
    window.addEventListener('storage', checkAdmin);
    return () => window.removeEventListener('storage', checkAdmin);
  }, []);

  function handleLogout() {
    localStorage.removeItem('adminLoggedIn');
    setIsAdmin(false);
    router.push('/');
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      {/* Top bar */}
      <div className="bg-red-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Amal Commercial Bank — Trusted. Secure. Forward.</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:underline">Contact Us</Link>
            <Link href="/digital-banking" className="hover:underline">Online Banking</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Amal Commercial Bank home">
            <Image
              src="/amalCB.png"
              alt="Amal Commercial Bank"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                {isTranslatedNavLink(link) ? t.nav[link.key] : link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector />
            {isAdmin ? (
              <>
                <Link
                  href="/admin"
                  className="px-3 py-1.5 text-sm font-semibold text-red-700 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
                >
                  {t.nav.dashboard}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className="px-4 py-1.5 text-sm font-semibold text-red-700 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/login"
                  className="px-4 py-1.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-1.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                >
                  {t.nav.signup}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
              >
                {isTranslatedNavLink(link) ? t.nav[link.key] : link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 px-4 flex flex-col gap-2 border-t border-gray-200 mt-2">
              <LanguageSelector />
              {isAdmin ? (
                <>
                  <Link href="/admin" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-red-700 border border-red-200 rounded-md py-2 px-4 hover:bg-red-50 text-center">{t.nav.dashboard}</Link>
                  <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="text-sm font-semibold text-gray-700 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 text-center">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/pricing" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-red-700 border border-red-200 rounded-md py-2 px-4 hover:bg-red-50 text-center">Pricing</Link>
                  <Link href="/login" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-gray-700 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 text-center">{t.nav.login}</Link>
                  <Link href="/signup" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md py-2 px-4 text-center">{t.nav.signup}</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
