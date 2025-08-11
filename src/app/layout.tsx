import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RH POS | Best Restaurant & Retail POS System in Dubai, UAE & KSA',
  description:
    'RH POS offers the best Point of Sale systems in Dubai, across the UAE, and in Saudi Arabia (KSA). Our robust solutions are tailored for restaurants, cafes, and retail, featuring fast service, advanced inventory management, powerful analytics, and seamless integration. Get a free demo and transform your business today!',
  keywords:
    'POS system Dubai, point of sale UAE, restaurant POS Dubai, cafe POS system, retail POS, inventory management software Dubai, RH POS, POS system Saudi Arabia, point of sale KSA, restaurant POS KSA, cloud POS Dubai, POS solutions MENA, business management software UAE',
  openGraph: {
    title:
      'RH POS | The Leading POS System for Restaurants & Retail in the UAE & KSA',
    description:
      'RH POS delivers a powerful, cloud-based Point of Sale system with features like inventory management, real-time analytics, and secure payment processing. Perfect for businesses in Dubai, Abu Dhabi, and across Saudi Arabia. Get your free demo now!',
    url: 'https://rhposs.com',
    siteName: 'RH POS',
    images: [
      {
        url: 'https://rhposs.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RH POS System for Restaurants and Retail in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RH POS: The Ultimate POS System for UAE & Saudi Arabia',
    description:
      'Upgrade your business with RH POS. Fast, reliable, and secure point of sale solutions for restaurants and retail shops in Dubai, Abu Dhabi, and Saudi Arabia.',
    creator: '@yourtwitterhandle',
    images: ['https://rh-poss.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://rh-poss.com',
  },
  icons: {
    icon: [
      { url: '/og-image.svg', type: 'image/svg+xml' },
      { url: '/og-icon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
