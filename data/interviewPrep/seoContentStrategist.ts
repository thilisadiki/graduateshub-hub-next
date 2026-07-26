import type { InterviewPrep } from '@/types';

export const seoContentStrategistPrep: InterviewPrep = {
  id: 'seo-content-strategist',
  role: 'SEO & Content Strategist',
  category: 'marketing',
  curator: 'jason',
  description:
    'CV formatting guidance, technical interview questions, and case study advice for junior SEO and Content Strategists. Covers keyword intent, on-page E-E-A-T optimization, Google Analytics 4, Search Console audits, and JSON-LD schema.',
  salaryBenchmarks: [
    { region: 'United States', range: '$50,000 – $78,000/year' },
    { region: 'United Kingdom', range: '£25,000 – £42,000/year' },
    { region: 'Canada', range: 'CA$48,000 – CA$70,000/year' },
    { region: 'Australia', range: 'A$60,000 – A$88,000/year' },
    { region: 'South Africa', range: 'R180,000 – R350,000/year' },
  ],
  cvMustInclude: [
    'Verified SEO & Analytics Badges: HubSpot SEO, Google Analytics 4 (GA4), Semrush Academy',
    'Specific SEO tools: Google Search Console, GA4, Ahrefs, Semrush, Screaming Frog, Rank Math',
    'On-Page & Technical SEO skills: Keyword research, search intent mapping, internal linking, Schema.org JSON-LD',
    'Content Strategy: Writing SEO briefs, E-E-A-T optimization, competitor content gap analysis',
    'Quantifiable organic traffic gains (e.g. "Increased organic search impressions by 140% over 6 months")',
  ],
  cvAvoid: [
    'Claiming to be an "SEO Expert" without showing real Google Search Console performance graphs',
    'Mentioning obsolete SEO tactics like keyword stuffing, PBNs, or automated directory submissions',
    'Listing SEO tools without demonstrating data analysis skills',
  ],
  cvTips: [
    {
      heading: 'Include a 1-page organic traffic case study',
      body: 'Attach or link a 1-page case study showing how you audited an unranked page, updated its title tags, internal links, and headings, and tracked ranking gains in Google Search Console.',
    },
    {
      heading: 'Highlight Google Analytics 4 (GA4) certification',
      body: 'Having an official GA4 certificate proves you can track conversion events, organic traffic acquisition, and user engagement funnels.',
    },
  ],
  keySkills: [
    'Keyword Research & Search Intent Mapping',
    'On-Page E-E-A-T & Heading Optimization',
    'Technical SEO Auditing (Crawling, Indexation, Schema.org)',
    'Google Analytics 4 (GA4) & Google Search Console',
    'Link Building & Digital PR Outreach',
  ],
  questions: [
    {
      question: 'How do you determine the search intent behind a keyword, and why does it matter?',
      why: 'Evaluates your core SEO strategy and understanding of Google SERP formatting rules.',
      sampleAnswer: 'Search intent is the goal of a query: Informational, Transactional, Navigational, or Commercial Investigation. I determine intent by analyzing the top 5 ranking Google SERP results. If top results are long-form guides, the intent is informational; if they are product pages, the intent is transactional. Matching search intent is critical because Google will not rank even a perfectly optimized page if its format conflicts with user intent.',
      redFlag: 'Focusing exclusively on keyword search volume while ignoring search intent.',
    },
    {
      question: 'Walk me through how you would diagnose a sudden 30% drop in organic traffic in Google Search Console.',
      why: 'Tests analytical troubleshooting and technical SEO problem solving.',
      sampleAnswer: 'First, I check whether the drop is sitewide or isolated to specific pages or countries in Google Search Console. Second, I perform a technical check to confirm if pages were accidentally marked with `noindex`, if `robots.txt` blocked crawling, or if canonical tags broke. Third, I check for recent Google Core Algorithm Updates or manual actions. Finally, I inspect competitor SERP position movements.',
    },
    {
      question: 'What is JSON-LD Structured Data Schema, and how does it help SEO?',
      why: 'Tests technical SEO knowledge regarding structured data and rich snippets.',
      sampleAnswer: 'JSON-LD is a standardized script format that provides search engines with explicit metadata about content (Article, FAQPage, HowTo). It helps search bots understand entity relationships clearly and unlocks rich snippets on Google SERPs, which significantly boosts Click-Through Rates (CTR).',
    },
  ],
  relatedRoadmapId: 'seo-content-strategist',
  relatedPrepIds: ['digital-marketing-specialist', 'business-analyst', 'web-developer'],
};
