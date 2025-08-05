import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.psdstack.com',
        pathname: '/**',
      },
      {
        // Add placehold.co to your allowed domains
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
