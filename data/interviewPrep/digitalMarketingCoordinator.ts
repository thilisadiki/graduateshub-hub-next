import type { InterviewPrep } from '@/types';

export const digitalMarketingCoordinatorPrep: InterviewPrep = {
  id: 'digital-marketing-coordinator',
  role: 'Digital Marketing Coordinator',
  category: 'marketing',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and interview questions for digital marketing coordinator and social media roles in South Africa. Curated by Jason Sadiki, a working Technical SEO Specialist who has reviewed and given feedback on many SA marketing CVs.',
  salaryRange: 'R130,000 – R210,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'A portfolio link or samples section. Hiring managers will not take a marketing CV seriously without evidence of actual work',
    'Specific platforms and tools you have used: Google Analytics, Meta Business Suite, Hootsuite, Mailchimp, Canva, SEMrush',
    'Metrics from any work you have done, even personal projects: "Grew Instagram account from 0 to 340 followers in 6 weeks using organic content strategy"',
    'Any certifications: Google Digital Marketing Certificate, Meta Social Media Marketing Certificate, HubSpot Inbound Marketing',
    'Content formats you have produced: blog posts, social captions, email campaigns, short-form video, graphics',
    'Industries or niches you have created content for, even if self-initiated',
  ],

  cvAvoid: [
    'Claiming SEO expertise without being able to explain what a meta description or a backlink is',
    'A CV with no portfolio link. In digital marketing, your CV is your worst piece of marketing if it has no supporting work',
    'Listing follower counts for personal accounts without context (a 200-follower personal page is not a marketing credential)',
    'Vague claims like "strong understanding of social media" without naming platforms, tools, or results',
    'An outdated or incomplete LinkedIn profile. Hiring managers will check it immediately',
  ],

  cvTips: [
    {
      heading: 'Your portfolio is your CV',
      body: 'In digital marketing, the CV gets you the interview and the portfolio gets you the job. If you do not have client work, build your own: start a niche social account, write SEO articles on a free blog, or run a small paid campaign with R200. Document everything. A candidate with a modest portfolio beats a candidate with a strong CV but no work to show.',
    },
    {
      heading: 'Lead with results, not responsibilities',
      body: 'South African marketing managers are tired of CVs that list tasks. Instead of "Managed social media accounts," write "Increased Instagram engagement rate from 1.2% to 4.7% over three months by shifting from product posts to educational content." One line like that is worth more than three bullets of responsibilities.',
    },
    {
      heading: 'Name the SA platforms and clients SA companies use',
      body: 'Many SA agencies and brands use specific tools: Meta Business Suite, Google Ads, Mailchimp, HubSpot, Hootsuite, and Canva are the most common. Knowing that SA audiences engage differently on Facebook vs. Instagram (Facebook is still dominant in many SA demographics) is the kind of local knowledge that signals you are SA-market ready.',
    },
    {
      heading: 'Keep formatting clean and on-brand',
      body: 'A digital marketing CV that is poorly designed sends a contradictory message. You do not need to be a graphic designer, but your CV should be clean, consistent, and visually intentional. Use a free Canva template if needed. Avoid Comic Sans, clashing colours, or inconsistent spacing.',
    },
  ],

  keySkills: [
    'Social media management (Meta, Instagram, LinkedIn, TikTok)',
    'Content creation and copywriting',
    'SEO fundamentals (on-page, keyword research)',
    'Google Analytics and reporting',
    'Email marketing (Mailchimp or similar)',
    'Paid social basics (Meta Ads Manager)',
    'Content calendar planning and scheduling',
  ],

  questions: [
    {
      question: 'Walk me through a piece of content you created and the result it achieved.',
      why: 'This is the most revealing question in a marketing interview. It tests whether you have actually done the work and whether you think about results.',
      sampleAnswer: 'I created a series of five educational Instagram posts for a fictional brand in the personal finance space as part of a self-study project. The goal was to test whether educational content outperformed promotional content. I used a consistent visual template, wrote captions with a clear value proposition in the first line, and used relevant hashtags. The educational posts averaged three times the saves and shares of the promotional posts. That reinforced for me that awareness-stage content needs to lead with value before it can ask for anything.',
      redFlag: 'Describing what you made without mentioning any metrics or outcome. If you cannot talk about results, you are describing activity, not marketing.',
    },
    {
      question: 'What is SEO and why does it matter?',
      why: 'Basic knowledge check. Most marketing coordinator roles in SA involve at least some SEO work, even if it is just writing blog content with keywords.',
      sampleAnswer: 'SEO stands for Search Engine Optimisation. It is the practice of improving a website\'s visibility in organic search results so that people searching for relevant terms find your business without you paying for the click. It matters because organic search traffic compounds over time: a well-written article can continue to bring in visitors for years. On-page SEO involves optimising the content and structure of individual pages, while off-page SEO involves building authority through backlinks from other sites.',
    },
    {
      question: 'How would you measure whether a social media campaign was successful?',
      why: 'Tests whether you understand marketing metrics beyond likes and follows. SA employers want coordinators who connect activity to business outcomes.',
      sampleAnswer: 'It depends on the campaign objective. If the goal was brand awareness, I would look at reach, impressions, and follower growth. If the goal was engagement, I would look at engagement rate (likes, comments, shares, saves divided by reach). If the goal was conversion, I would track link clicks, landing page visits, and the conversion rate on the destination page. The key is to define the metric before the campaign launches, not after, so you have a clear benchmark for success.',
    },
    {
      question: 'You are given a small budget of R2,000 for a paid Facebook campaign. What do you do?',
      why: 'SA agencies frequently give coordinators small budgets to manage. This question tests strategic thinking on a realistic SA budget.',
      sampleAnswer: 'First I would clarify the objective: awareness, leads, or sales. Then I would define the target audience based on demographics, interests, and location relevant to the brand. With R2,000 I would run two ad sets with one ad each, targeting slightly different audiences, so I can compare performance. I would run it for at least 7 days to get meaningful data before making optimisation decisions. I would monitor cost per result daily and pause the underperforming ad set after day 5 to concentrate budget on what is working.',
    },
    {
      question: 'How do you stay current with changes in digital marketing?',
      why: 'The field changes constantly. SA employers want to know you are self-directed about learning, especially at entry level.',
      sampleAnswer: 'I follow a mix of industry sources: Neil Patel, Search Engine Journal, and HubSpot\'s blog for SEO and content updates; Meta and Google\'s official blogs for platform changes; and I am active in a few local SA marketing communities on LinkedIn. I also try to test new formats myself. When Instagram Reels gained traction, I spent two weeks experimenting with short-form video on a personal account to understand the format before recommending it to anyone professionally.',
    },
  ],

  relatedRoadmapId: 'digital-marketing-specialist',
  relatedPrepIds: ['it-support-specialist', 'business-analyst', 'data-analyst'],
};
