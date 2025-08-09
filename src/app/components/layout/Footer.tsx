import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5 py-5 md:py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* POS Features Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">POS</h3>
            <ul className="space-y-2">
              {[
                'Billing',
                'Inventory',
                'Reporting',
                'Online Ordering',
                'CRM',
                'Menu',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block">
                    {item}
                  </Link>
                </li>
              ))}
              <li className="pt-3 hidden md:block">
                <Link
                  href="#demo"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-center text-sm md:text-base w-auto">
                  Take a Free Demo
                </Link>
              </li>
              <li className="pt-3 md:hidden">
                <Link
                  href="#demo"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-center text-sm md:text-base w-auto">
                  Take a Free Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Add-ons Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">
              Add-ons
            </h3>
            <ul className="space-y-2">
              {['Marketplace', 'Integrations'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Outlet Types Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">
              Outlet types
            </h3>
            <ul className="space-y-2">
              {[
                'Fine Dine',
                'QSR',
                'Food Trucks',
                'Cafes & Bakeries',
                'Bars & Pubs',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Pricing', id: '#pricing' },
                // { name: 'Careers', id: '#careers' },
                // { name: 'Support', id: '#support' },
                { name: 'About Us', id: '#about-us' },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info Column */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold text-white">
                RH <span className="text-teal-600">POS</span>
              </h3>
            </div>
            <address className="not-italic text-slate-300 text-sm md:text-base leading-relaxed">
              4th Floor, Business Bay, Dubai, United Arab Emirates
            </address>

            <div></div>
          </div>
        </div>

        {/*Contact Section */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-y-6 md:gap-4">
            <div className="flex gap-4 justify-center">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-500 transition-colors duration-200"
                aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-gray-400 transition-colors duration-200"
                aria-label="X (Twitter)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-pink-500 transition-colors duration-200"
                aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/rhposs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-700 transition-colors duration-200"
                aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <div className="flex items-center gap-3 text-slate-300 text-sm md:text-base hover:text-white transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 7709988994</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm md:text-base hover:text-white transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>sarfarazdyp@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-6 mt-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-3">
            <p className="text-slate-400 text-xs md:text-sm">
              © 2025 RH POS. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-xs md:text-sm">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
