import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/articles',
        destination: 'https://articles.graduateshub.co.za',
        permanent: true,
      },
    ];
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
