'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

import ContactModal from '../ContactModal';
import InquiryModal from '../InquiryModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Simple state for managing modals
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-slate-800">
            RH<span className="text-teal-600">POS</span>
          </div>

          <div className="hidden md:flex md:text-sm flex-1 justify-center items-center space-x-8 font-medium mx-4">
            {/* Nav Links remain the same */}
            <Link
              href="/#features"
              className="hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link
              href="/#outlet-types"
              className="hover:text-teal-600 transition-colors">
              Outlet Types
            </Link>
            <Link
              href="/#testimonials"
              className="hover:text-teal-600 transition-colors">
              Why RH POS
            </Link>
            <Link
              href="/#faq"
              className="hover:text-teal-600 transition-colors">
              FAQs
            </Link>
            <Link
              href="/#pricing"
              className="hover:text-teal-600 transition-colors">
              Pricing
            </Link>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-slate-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6 border-t border-slate-200">
              <div className="flex flex-col space-y-4 font-medium">
                {/* Mobile Nav Links remain the same */}
                <a
                  href="#features"
                  className="hover:text-teal-600 transition-colors py-2"
                  onClick={closeMenu}>
                  Features
                </a>
                <a
                  href="#outlet-types"
                  className="hover:text-teal-600 transition-colors py-2"
                  onClick={closeMenu}>
                  Outlet Types
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-teal-600 transition-colors py-2"
                  onClick={closeMenu}>
                  Why RH POS
                </a>
                <a
                  href="#faq"
                  className="hover:text-teal-600 transition-colors py-2"
                  onClick={closeMenu}>
                  FAQs
                </a>
                <a
                  href="#pricing"
                  className="hover:text-teal-600 transition-colors py-2"
                  onClick={closeMenu}>
                  Pricing
                </a>
                <button
                  onClick={() => {
                    setIsContactOpen(true);
                    closeMenu();
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Render modals with proper props */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <InquiryModal
        isOpen={isInquiryOpen}
        isContactModalOpen={isContactOpen}
        onOpen={() => setIsInquiryOpen(true)}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  );
}
