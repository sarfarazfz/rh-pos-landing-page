'use-client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* POS Features Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-teal-300">POS</h3>
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
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-ons Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-teal-300">
              Add-ons
            </h3>
            <ul className="space-y-2">
              {['Marketplace', 'Integrations'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Outlet Types Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-teal-300">
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
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-teal-300">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Pricing', id: '#pricing' },
                { name: 'About Us', id: '/about-us' },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info Column */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-teal-300">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-teal-400 flex-shrink-0" />
                <address className="not-italic text-slate-300 hover:text-white text-sm leading-relaxed">
                  4th Floor, Business Bay
                  <br />
                  Dubai, United Arab Emirates
                </address>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact@rhposs.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                  India +91 7709988994
                  <br />
                  UAE +971 585483786
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-6 mt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
            <p className="text-slate-400 text-xs md:text-sm">
              © 2025 RH POS. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
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
