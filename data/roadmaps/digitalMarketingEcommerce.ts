import type { CareerRoadmap } from '@/types';

export const digitalMarketingEcommerceRoadmap: CareerRoadmap = {
  id: 'google-digital-marketing-ecommerce',
  title: 'How to Become a Digital Marketing & E-Commerce Specialist',
  tagline: 'Master online store management, Google Ads, SEO, and sales funnels.',
  category: 'marketing',
  curator: 'ndulamiso',
  timeToJobReady: '3–6 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A comprehensive career roadmap for entering digital marketing and e-commerce. Covers online store management (Shopify, WooCommerce), search engine optimization (SEO), Google Search & Display Ads, email marketing automation, and customer analytics.',
  overview:
    'E-commerce and digital marketing have transformed retail and commercial business models globally. Companies of all sizes need skilled professionals who can set up online storefronts, drive targeted traffic through Google Ads and social media, optimize conversion rates, and build customer loyalty.\n\nThe Google Digital Marketing & E-commerce path equips you with end-to-end skills across the digital customer journey. You do not need previous technical experience. By combining search marketing with hands-on store management, you prepare for high-growth roles in agency and in-house marketing teams.',
  jobTitles: [
    'Digital Marketing Specialist',
    'E-Commerce Coordinator',
    'Store Operations Specialist',
    'SEO & Paid Search Associate',
    'Email Marketing Specialist',
    'Digital Performance Assistant',
  ],
  technicalSkills: [
    'E-Commerce Platform Management (Shopify, WooCommerce)',
    'Search Engine Optimization (On-page, technical, keyword research)',
    'Search Engine Marketing & Google Ads (Search, Display, Shopping)',
    'Email Marketing & Automation (Klaviyo, Mailchimp)',
    'Web Analytics & Conversion Tracking (Google Analytics 4)',
    'Social Media Advertising & Content Strategy',
  ],
  softSkills: [
    'Data-driven decision making',
    'Customer empathy & user experience awareness',
    'Copywriting & visual presentation',
    'Campaign project management',
  ],
  stages: [
    {
      number: 1,
      title: 'Digital Marketing & Customer Journey Fundamentals',
      duration: '3–4 weeks',
      description:
        'Understand the core pillars of modern digital marketing: awareness, consideration, conversion, and retention. Learn how customers move through digital funnels, understand key performance metrics (CAC, LTV, ROAS, CTR), and study target audience segmentation.',
      courseIds: ['free-digital-marketing-courses'],
      milestone:
        'You can map a complete digital customer journey and define key KPIs for a marketing campaign.',
    },
    {
      number: 2,
      title: 'E-Commerce Store Setup & Catalog Management',
      duration: '4–5 weeks',
      description:
        'Master the operational mechanics of e-commerce storefronts using Shopify or WooCommerce. Learn how to structure product catalogs, write high-converting product titles and descriptions, configure payment gateways, manage inventory, and optimize checkout conversion flows.',
      courseIds: ['free-digital-marketing-courses'],
      milestone:
        'You can set up and configure a fully functional online store with products, categories, and checkout capability.',
    },
    {
      number: 3,
      title: 'Search Engine Optimization (SEO) & Content Strategy',
      duration: '4–5 weeks',
      description:
        'SEO is the engine of sustainable organic traffic. Learn keyword research, on-page optimization (title tags, meta descriptions, heading structure), technical SEO fundamentals, and local search optimization. Practice writing SEO-optimized content that ranks on Google.',
      courseIds: ['free-digital-marketing-courses'],
      milestone:
        'You can perform a full SEO audit on an e-commerce website and optimize product pages for high-intent search terms.',
    },
    {
      number: 4,
      title: 'Paid Search Ads & Performance Marketing',
      duration: '4–5 weeks',
      description:
        'Learn how to set up, manage, and optimize paid ad campaigns using Google Ads (Search, Display, and Performance Max). Master keyword match types, ad copy testing, bidding strategies, budget allocation, and negative keyword filtering to maximize return on ad spend (ROAS).',
      courseIds: ['free-digital-marketing-courses'],
      milestone:
        'You can build a structured Google Search ad campaign with target keywords, ad groups, extension assets, and tracking.',
    },
    {
      number: 5,
      title: 'Email Automation & GA4 Customer Analytics',
      duration: '3–4 weeks',
      description:
        'Email automation drives high-margin repeat revenue. Set up abandoned cart emails, welcome series, and re-engagement flows in Mailchimp or Klaviyo. Pair this with Google Analytics 4 (GA4) to track user behavior, traffic sources, and revenue attribution.',
      courseIds: ['portfolio-tasks'],
      milestone:
        'You have built a complete E-Commerce portfolio project featuring a test store, SEO audit, paid ad plan, and email flow.',
    },
  ],
  certifications: [
    {
      name: 'Google Digital Marketing & E-Commerce Certificate',
      provider: 'Grow with Google',
      free: true,
      why: 'Comprehensive professional credential covering Shopify, Google Ads, SEO, and email automation.',
    },
  ],
  portfolioProjects: [
    'Shopify E-Commerce Store Setup: Complete product catalog, collection structure, and conversion flow',
    'Google Search Ads Campaign Plan: Keyword research, ad group architecture, and ad copy variations',
    'Klaviyo Email Automation Flow: Welcome series & abandoned cart recovery emails',
  ],
  relatedRoadmapIds: ['seo-content-strategist', 'digital-marketing-specialist', 'data-analyst'],
  salaryBenchmarks: [
    { region: 'United States', range: '$50,000 – $85,000/year' },
    { region: 'United Kingdom', range: '£26,000 – £45,000/year' },
    { region: 'Canada', range: 'CA$48,000 – CA$75,000/year' },
    { region: 'Australia', range: 'A$60,000 – A$85,000/year' },
    { region: 'South Africa', range: 'R160,000 – R350,000/year' },
  ],
  remoteFriendly: 'Hybrid',
  difficulty: 'Beginner',
  faqs: [
    {
      q: 'Can I get a digital marketing job without a marketing degree?',
      a: 'Yes. Practical store proof, campaign portfolio work, and Google certifications are prioritized by agencies and brands.',
    },
  ],
  firstNinetyDays: [
    'Conduct an audit of existing paid ad campaigns and e-commerce conversion rates',
    'Optimize product listings for search traffic and set up abandoned cart email flows',
  ],
  commonMistakes: [
    {
      mistake: 'Running paid ads without conversion tracking',
      fix: 'Always install Google Analytics 4 and ad tracking tags before spending ad budget.',
    },
  ],
};
