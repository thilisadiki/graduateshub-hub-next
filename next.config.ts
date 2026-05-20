import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
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
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
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
      // Career roadmap redirects
      {
        source: '/career-roadmaps/accounting',
        destination: '/career-roadmaps/junior-accountant',
        permanent: true,
      },
      {
        source: '/career-roadmaps/marketing',
        destination: '/career-roadmaps/digital-marketing-specialist',
        permanent: true,
      },
      {
        source: '/career-roadmaps/data-analytics',
        destination: '/career-roadmaps/data-analyst',
        permanent: true,
      },
      {
        source: '/career-roadmaps/software-engineering',
        destination: '/career-roadmaps',
        permanent: true,
      },
      // Category redirects
      {
        source: '/category/business-management',
        destination: '/category/business',
        permanent: true,
      },
      {
        source: '/category/data-analytics',
        destination: '/categories',
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
