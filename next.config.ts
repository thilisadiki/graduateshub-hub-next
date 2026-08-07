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
            value: 'max-age=31536000; includeSubDomains; preload',
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
        source: '/tools',
        destination: '/free-ai-career-tools',
        permanent: true,
      },
      {
        source: '/blog/artificial-intelligence-courses',
        destination: '/free-ai-courses-for-beginners',
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
        source: '/categories',
        destination: '/career-roadmaps',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/career-roadmaps',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/career-roadmaps',
        permanent: true,
      },
      {
        source: '/find-a-course',
        destination: '/career-roadmaps',
        permanent: true,
      },
      {
        source: '/course',
        destination: '/career-roadmaps',
        permanent: true,
      },
      {
        source: '/course/:path*',
        destination: '/career-roadmaps',
        permanent: true,
      },
      // Portfolio hub redirects
      {
        source: '/portfolio',
        destination: '/portfolio-tasks',
        permanent: true,
      },
      {
        source: '/portfolio/:path*',
        destination: '/portfolio-tasks/:path*',
        permanent: true,
      },
      {
        source: '/portfolio-tasks/it',
        destination: '/portfolio-tasks/information-technology',
        permanent: true,
      },
      {
        source: '/portfolio-tasks/it/:path*',
        destination: '/portfolio-tasks/information-technology/:path*',
        permanent: true,
      },
      {
        source: '/portfolio-tasks/data',
        destination: '/portfolio-tasks/data-analytics',
        permanent: true,
      },
      {
        source: '/portfolio-tasks/data/:path*',
        destination: '/portfolio-tasks/data-analytics/:path*',
        permanent: true,
      },
      {
        source: '/portfolio-tasks/data-analysis',
        destination: '/portfolio-tasks/data-analytics',
        permanent: true,
      },
      {
        source: '/portfolio-tasks/data-analysis/:path*',
        destination: '/portfolio-tasks/data-analytics/:path*',
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
