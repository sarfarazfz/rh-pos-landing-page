"use client";
//frontend-react meta cousera
import Link from "next/link";
import { useEffect } from "react";
export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-slate-800">
          RH<span className="text-teal-600">POS</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-medium">
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
        </div>
        <a
          href="#"
          className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          Contact Us
        </a>
        <button className="md:hidden text-slate-800">
          <i data-feather="menu"></i>
        </button>
      </nav>
    </header>
  );
}
