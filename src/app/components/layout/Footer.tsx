import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

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
                "Billing",
                "Inventory",
                "Reporting",
                "Online Ordering",
                "CRM",
                "Menu",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-ons Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">
              Add-ons
            </h3>
            <ul className="space-y-2">
              {["Marketplace", "Integrations"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block"
                  >
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
                "Fine Dine",
                "QSR",
                "Food Trucks",
                "Cafes & Bakeries",
                "Bars & Pubs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block"
                  >
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
                { name: "Pricing", id: "#pricing" },
                // { name: 'Careers', id: '#careers' },
                // { name: 'Support', id: '#support' },
                { name: "About Us", id: "/about-us" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info Column */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center">
              <h3 className="text-lg font-bold text-teal-300">Get In Touch</h3>
            </div>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-teal-400 flex-shrink-0" />
                <address className="not-italic text-slate-300 hover:text-white text-sm md:text-base leading-relaxed">
                  4th Floor, Business Bay
                  <br />
                  Dubai, United Arab Emirates
                </address>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base">
                  Contact@rhposs.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300 hover:text-white transition-colors duration-200 text-sm md:text-base">
                  India +91 7709988994
                  <br />
                  UAE +971 585483786
                </span>
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
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-xs md:text-sm"
                >
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
