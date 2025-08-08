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
