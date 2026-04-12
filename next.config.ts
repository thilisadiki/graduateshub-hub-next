import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=2592000; includeSubDomains',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // non-www → www (301). Fixes "canonical points to redirect" in Ahrefs.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'graduateshub.co.za' }],
        destination: 'https://www.graduateshub.co.za/:path*',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/affiliate-disclosure',
        destination: '/disclosure',
        permanent: true,
      },
    ];
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'articles.graduateshub.co.za' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
      { protocol: 'https', hostname: '*.gravatar.com' },
    ],
  },
};

export default nextConfig;
