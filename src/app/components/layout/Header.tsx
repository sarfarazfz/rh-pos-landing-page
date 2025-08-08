'use client';

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-600">RH POS</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Features
            </a>
            <a
              href="#partners"
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Outlet Type
            </a>
            <a
              href="#whyChooseUs"
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Why RH POS
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openContactModal'));
              }}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
              Contact Us
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
            className="hover:text-teal-600 transition-colors"
          >
            Outlet Types
          </a>
          <a
            href="#testimonials"
            className="hover:text-teal-600 transition-colors"
          >
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
          <a
            href="#contact"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
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
                onClick={closeMenu}
              >
                Features
              </a>
              <a
                href="#outlet-types"
                className="hover:text-teal-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Outlet Types
              </a>
              <a
                href="#testimonials"
                className="hover:text-teal-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Why RH POS
              </a>
              <a href="#faq" className="hover:text-teal-600 transition-colors">
                FAQs
              </a>
              <a
                href="#pricing"
                className="hover:text-teal-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-5 rounded-lg text-center shadow-md hover:shadow-lg transition-all"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
