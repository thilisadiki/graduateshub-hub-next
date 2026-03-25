import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/articles/wp-json/:path*',
        destination: 'https://graduateshub.co.za/articles/wp-json/:path*',
      },
    ];
  },
};

export default nextConfig;
