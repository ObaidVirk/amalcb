import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  'Personal Banking': [
    { label: 'Current Accounts', href: '/personal-banking' },
    { label: 'Savings Accounts', href: '/personal-banking' },
    { label: 'Personal Loans', href: '/loans' },
    { label: 'Home Loans', href: '/loans' },
    { label: 'Credit Cards', href: '/cards' },
    { label: 'Insurance', href: '/personal-banking' },
  ],
  'Business Banking': [
    { label: 'Business Accounts', href: '/business-banking' },
    { label: 'Business Loans', href: '/loans' },
    { label: 'Trade Finance', href: '/business-banking' },
    { label: 'Business Credit Cards', href: '/cards' },
    { label: 'Cash Management', href: '/business-banking' },
    { label: 'Merchant Services', href: '/business-banking' },
  ],
  'Digital Banking': [
    { label: 'Online Banking', href: '/digital-banking' },
    { label: 'Mobile App', href: '/digital-banking' },
    { label: 'USSD Banking', href: '/digital-banking' },
    { label: 'Digital Wallet', href: '/digital-banking' },
    { label: 'API Banking', href: '/digital-banking' },
  ],
  'Company': [
    { label: 'About AmalCB', href: '/about' },
    { label: 'Leadership', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Investor Relations', href: '/about' },
    { label: 'Newsroom', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4" aria-label="Amal Commercial Bank home">
              <Image
                src="/amalCB.png"
                alt="Amal Commercial Bank"
                width={120}
                height={30}
                className="h-[30px] w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Amalgamated Commercial Bank — your trusted partner for comprehensive banking and financial services.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-red-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Amal Commercial Bank (AmalCB.com). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">POPIA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
