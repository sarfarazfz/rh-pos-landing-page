import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RH POS - Best Point of Sale (POS) System in Dubai & UAE",
  description:
    "RH POS offers the best Point of Sale systems in Dubai and across the UAE. Our solutions are tailored for restaurants, cafes, and retail, featuring fast service, inventory management, and powerful analytics. Get a free demo today!",
  keywords:
    "POS system Dubai, point of sale UAE, restaurant POS Dubai, cafe POS system, retail POS, inventory management software Dubai, RH POS",
  openGraph: {
    title: "RH POS - Best Point of Sale (POS) System in Dubai & UAE",
    description:
      "RH POS offers the best Point of Sale systems in Dubai and across the UAE. Our solutions are tailored for restaurants, cafes, and retail, featuring fast service, inventory management, and powerful analytics. Get a free demo today!",
    url: "https://yourwebsite.com",
    siteName: "RH POS",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RH POS System for Restaurants and Retail in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RH POS - Best Point of Sale (POS) System in Dubai & UAE",
    description:
      "RH POS offers the best Point of Sale systems in Dubai and across the UAE. Our solutions are tailored for restaurants, cafes, and retail, featuring fast service, inventory management, and powerful analytics. Get a free demo today!",
    creator: "@yourtwitterhandle",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  icons: {
    icon: [
      { url: "/final updated.svg", type: "image/svg+xml" },
      { url: "/final updated.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: "/final updated.png",
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
