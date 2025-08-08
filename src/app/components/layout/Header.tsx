'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-3xl font-bold text-slate-800">
          RH<span className="text-teal-600">POS</span>
        </div>

        {/* Centered Navigation Items - Hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8 font-medium mx-4">
          <a href="#features" className="hover:text-teal-600 transition-colors">
            Features
          </a>
          <a
            href="#outlet-types"
            className="hover:text-teal-600 transition-colors">
            Outlet Types
          </a>
          <a
            href="#testimonials"
            className="hover:text-teal-600 transition-colors">
            Why RH POS
          </a>
          <a href="#faq" className="hover:text-teal-600 transition-colors">
            FAQs
          </a>
          <a href="#pricing" className="hover:text-teal-600 transition-colors">
            Pricing
          </a>
        </div>

        {/* Contact Button on the right - Hidden on mobile */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openContactModal'));
            }}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6 border-t border-slate-200">
            <div className="flex flex-col space-y-4 font-medium">
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
              <a href="#faq" className="hover:text-teal-600 transition-colors">
                FAQs
              </a>
              <a
                href="#pricing"
                className="hover:text-teal-600 transition-colors">
                Pricing
              </a>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openContactModal'));
                }}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
