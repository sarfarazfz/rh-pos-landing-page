import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.psdstack.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
