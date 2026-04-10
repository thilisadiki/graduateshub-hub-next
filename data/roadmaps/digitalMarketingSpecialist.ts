import type { CareerRoadmap } from '@/types';

export const digitalMarketingSpecialistRoadmap: CareerRoadmap = {
  id: 'digital-marketing-specialist',
  title: 'How to Become a Digital Marketing Specialist',
  tagline: 'Build campaigns that drive traffic, leads, and revenue. Work fully remotely.',
  category: 'marketing',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '4–8 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A structured career roadmap for becoming a digital marketing specialist. Covers the full marketing stack: strategy, SEO, content, social media, paid ads, and conversion. All skills Jason Sadiki applies professionally as a Technical SEO Specialist.',
  overview:
    'Digital marketing is one of the most accessible career paths in business. Every company with an online presence needs people who understand how to attract customers through search, social media, content, and email. Unlike many tech careers, you can build a credible digital marketing portfolio from day one without any special equipment, just a laptop and the willingness to create.\n\nThe field rewards specialists who can demonstrate results. A well-documented project showing how you grew a social account, improved a page\'s search ranking, or ran a conversion experiment is worth more to a hiring manager than a list of courses. This roadmap is built around that principle: learn the frameworks, apply them to real projects, and document everything.',
  jobTitles: [
    'Digital Marketing Coordinator',
    'Content Marketing Specialist',
    'SEO Specialist',
    'Social Media Manager',
    'Growth Marketing Analyst',
    'Email Marketing Specialist',
  ],
  technicalSkills: [
    'SEO (on-page, technical, keyword research)',
    'Content strategy & copywriting',
    'Social media management & advertising',
    'Google Analytics & reporting',
    'Growth hacking & conversion optimisation',
    'Email marketing fundamentals',
  ],
  softSkills: [
    'Data-driven decision making',
    'Creative thinking and ideation',
    'Clear written communication',
    'Campaign project management',
  ],
  stages: [
    {
      number: 1,
      title: 'Understand the Digital Marketing Landscape',
      duration: '2–3 weeks',
      description:
        'Before specialising, you need a clear map of the whole field. Digital marketing encompasses search, social, content, email, paid media, and analytics. A specialist who only knows one channel is far less valuable than one who understands how they work together. This stage gives you the strategic overview and foundational vocabulary you will use in every subsequent stage.',
      courseIds: ['basic-concepts-of-digital-marketing', 'digital-marketing-overview'],
      milestone:
        'You can describe the major digital marketing channels, explain how they support each other in a funnel, and identify which channels suit different business goals.',
    },
    {
      number: 2,
      title: 'Master the Core Channels: Search and Content',
      duration: '6–8 weeks',
      description:
        'The most durable digital marketing skills are those connected to search and content. SEO and content strategy generate compounding returns over time. A well-written article or optimised page continues to drive traffic for years. This stage covers comprehensive digital marketing practice with a strong focus on the organic channels that underpin long-term growth.',
      courseIds: ['digital-marketing'],
      milestone:
        'You can conduct keyword research, optimise a page for search intent, and produce a content calendar aligned to a business objective.',
    },
    {
      number: 3,
      title: 'Learn Growth Hacking and Conversion',
      duration: '4–5 weeks',
      description:
        'Growth marketing is about finding the fastest, most efficient path from traffic to revenue. This stage covers the frameworks and tactics used by high-growth companies: A/B testing, funnel analysis, referral loops, and conversion rate optimisation. Understanding how to turn visitors into customers is what separates marketers who generate activity from those who generate business results.',
      courseIds: ['growth-hacking-techniques-for-digital-marketing', 'using-digital-marketing-to-convert-customers'],
      milestone:
        'You can map a customer acquisition funnel, identify the biggest drop-off points, and propose specific tests to improve conversion at each stage.',
    },
    {
      number: 4,
      title: 'Build Your Social Media and Content Skills',
      duration: '5–6 weeks',
      description:
        'Social media is the most visible part of most marketing roles. Employers expect you to understand not just how to post, but how to build an audience, manage a content calendar, and use platform-specific tools for Facebook, Instagram, and YouTube. This stage also covers content creation strategy: how to plan, produce, and distribute content consistently across channels.',
      courseIds: ['diploma-social-media-strategy', 'content-creation-strategy', 'facebook-marketing-foundations'],
      milestone:
        'You have planned and executed a 30-day content calendar for a real or practice brand, with documented performance metrics at the end.',
    },
  ],
  certifications: [
    {
      name: 'Google Digital Marketing & E-commerce Certificate',
      provider: 'Google / Coursera',
      free: false,
      why: 'Highly recognised by non-technical hiring managers. Available via Coursera financial aid at no cost. Covers the full marketing funnel.',
    },
    {
      name: 'Meta Social Media Marketing Certificate',
      provider: 'Meta / Coursera',
      free: false,
      why: 'Strong signal for social media roles. Demonstrates platform-specific knowledge that generic certificates do not cover.',
    },
    {
      name: 'Alison Diploma in Digital Marketing',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Solid foundational credential while you work towards paid certifications.',
    },
  ],
  portfolioProjects: [
    'SEO content piece: write and publish a 1,500-word article targeting a specific keyword, then track its ranking over 60 days',
    'Social media growth project: grow a brand-new account in any niche to 200 followers in 30 days, documenting strategy and weekly performance',
    'Conversion audit: take any landing page and produce a written CRO report identifying 5 specific improvements with reasoning',
    'Content calendar: build a fully planned 90-day content calendar for a fictional small business including channels, formats, topics, and KPIs',
    'Campaign report: run a small-budget Facebook or Google Ads campaign (even R500), document the results, and write a lessons-learned analysis',
  ],
  relatedRoadmapIds: ['data-analyst', 'business-analyst', 'it-support-specialist'],
};
