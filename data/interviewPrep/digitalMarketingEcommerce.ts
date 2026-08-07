import type { InterviewPrep } from '@/types';

export const digitalMarketingEcommercePrep: InterviewPrep = {
  id: 'google-digital-marketing-ecommerce',
  role: 'Digital Marketing & E-Commerce Specialist',
  category: 'marketing',
  curator: 'ndulamiso',
  description:
    'CV strategies and technical interview preparation for Digital Marketing & E-Commerce roles. Covers Shopify, Google Ads, SEO, email automation, GA4 analytics, and customer conversion funnels.',
  salaryBenchmarks: [
    { region: 'United States', range: '$50,000 – $85,000/year' },
    { region: 'United Kingdom', range: '£26,000 – £45,000/year' },
    { region: 'Canada', range: 'CA$48,000 – CA$75,000/year' },
    { region: 'Australia', range: 'A$60,000 – A$85,000/year' },
    { region: 'South Africa', range: 'R160,000 – R350,000/year' },
  ],

  cvMustInclude: [
    'Specific e-commerce platforms: Shopify, WooCommerce, or Magento',
    'Paid Search & Media tools: Google Ads (Search, Shopping, Display), Meta Ads Manager',
    'Analytics & SEO tools: Google Analytics 4 (GA4), Google Search Console, Ahrefs/SEMrush',
    'Email automation software: Klaviyo, Mailchimp, or ActiveCampaign',
    'Quantifiable metrics: ROAS (Return on Ad Spend), conversion rate improvements, CPA reductions, or organic traffic growth',
  ],

  cvAvoid: [
    'Listing "social media management" without detailing campaign objectives, budgets, or commercial outcomes',
    'Claiming expertise in Google Ads without knowing key metrics like CPC, CTR, Quality Score, and ROAS',
    'Ignoring technical e-commerce skills such as catalog management, payment gateway integration, and inventory flows',
  ],

  cvTips: [
    {
      heading: 'Focus on revenue and efficiency metrics',
      body: 'E-commerce managers want to see how your marketing impacts the bottom line. "Managed Google Search Ads achieving a 3.8x ROAS while reducing cost per acquisition by 18%" will stand out immediately.',
    },
    {
      heading: 'Include a link to a live store or demo project',
      body: 'If you have configured a Shopify test store or written SEO product listings for a portfolio task, link to it. Showing a clean, functional store layout proves operational readiness.',
    },
  ],

  keySkills: [
    'Shopify & WooCommerce store management',
    'Google Ads campaign creation & keyword targeting',
    'On-page & technical Search Engine Optimization (SEO)',
    'Email marketing automation (Klaviyo/Mailchimp abandoned cart flows)',
    'Google Analytics 4 (GA4) funnel tracking & event setup',
    'Conversion Rate Optimization (CRO)',
  ],

  questions: [
    {
      question: 'How do you structure a Google Search campaign for a new e-commerce product launch?',
      why: 'Evaluates search engine marketing knowledge, keyword grouping, and conversion setup.',
      sampleAnswer:
        'I start with intent-based keyword research: 1) High-intent transactional keywords (e.g. "buy X online", "best price for Y"); 2) Group keywords into tightly themed Ad Groups; 3) Write relevant ad copy matching the search query with clear CTAs and price extensions; 4) Set up conversion tracking in GA4/Google Ads; 5) Add negative keywords to prevent wasted ad spend.',
      redFlag: 'Recommending broad match keywords without negative keywords or conversion tracking.',
    },
    {
      question: 'What automated email flows are essential for an e-commerce website, and why?',
      why: 'Tests email automation strategy and retention marketing knowledge.',
      sampleAnswer:
        'Four core flows drive maximum revenue: 1) Welcome Series (introduces brand & offers first-order incentive); 2) Abandoned Cart Flow (recovers lost sales within 1 to 24 hours); 3) Post-Purchase Follow-up (requests reviews and suggests cross-sell products); 4) Win-Back Flow (re-engages inactive customers after 60-90 days).',
      redFlag: 'Suggesting manual blast emails instead of automated behavior-triggered flows.',
    },
  ],

  relatedRoadmapId: 'google-digital-marketing-ecommerce',
  relatedPrepIds: ['seo-content-strategist', 'digital-marketing-coordinator'],
};
