import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'articles.graduateshub.co.za' },
    ],
  },
};

export default nextConfig;
