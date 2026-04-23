import type { PortfolioTask, PortfolioLevel } from '@/types';

export const portfolioTasks: PortfolioTask[] = [
  {
    id: 'social-media-audit-coffee-shop',
    categoryId: 'digital-marketing',
    topicId: 'social-media-audit',
    level: 'beginner',
    title: 'Social Media Audit for a Local Coffee Shop',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Audit a small business Instagram and recommend a 30-day fix.',
    scenario:
      'Bean & Brew is an independent coffee shop in Braamfontein, Johannesburg. They post on Instagram roughly twice a week but engagement has been flat for six months. The owner wants honest feedback and a simple plan she can execute herself.',
    brief:
      'Imagine you have been given access to Bean & Brew\'s Instagram analytics. You cannot see the real account, so use reasonable assumptions about a typical independent coffee shop with 1,200 followers, mixed content quality, and no posting schedule.',
    deliverables: [
      'A short audit (3 to 5 bullet points) covering content mix, posting cadence, visual identity, and caption quality',
      'A 30-day content calendar with at least 12 post ideas (caption angle, content type, suggested time)',
      'Three specific metrics the owner should track and a realistic target for each over 30 days',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Use Markdown headings. Be specific: do not say "post more engaging content". Say "Tuesday 8am, barista Q&A reel about their favourite drink to make, goal 40+ saves".',
    rubric: [
      { key: 'diagnosis', label: 'Diagnosis Quality', description: 'Did the audit identify specific, credible issues rather than generic advice?', weight: 25 },
      { key: 'calendar', label: 'Content Calendar', description: 'Are the 12 posts varied, realistic for a small business, and tied to business goals?', weight: 30 },
      { key: 'metrics', label: 'Metrics & Targets', description: 'Are the chosen metrics the right ones, and are the targets realistic?', weight: 20 },
      { key: 'clarity', label: 'Clarity & Presentation', description: 'Is the submission well structured, free of fluff, and actionable by a non-marketer?', weight: 25 },
    ],
    skillsProven: ['Social media strategy', 'Content planning', 'Marketing analytics', 'Small business marketing'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'email-subject-line-ab-test',
    categoryId: 'digital-marketing',
    topicId: 'email-experimentation',
    level: 'beginner',
    title: 'Email Subject Line A/B Test Plan',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design a rigorous A/B test for a cart abandonment email.',
    scenario:
      'A fictional online bookstore has a cart abandonment email that sees a 14% open rate. The marketing team wants to lift it to 20%+ but has only run one prior test and it was inconclusive because the sample size was too small.',
    brief:
      'Design a subject line A/B test that could actually be run and trusted. You can assume the list is 60,000 active subscribers and the email is triggered roughly 400 times per day.',
    deliverables: [
      'Two competing subject lines with a one-sentence hypothesis for each',
      'Sample size per variant and how many days the test needs to run, with your reasoning',
      'Primary metric, guardrail metrics, and the decision rule (what result would cause you to ship the winner vs. keep testing)',
      'One risk or confound you need to control for',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Show your working on sample size. A test plan without a stopping rule is not a test plan.',
    rubric: [
      { key: 'hypothesis', label: 'Hypothesis Quality', description: 'Are the two variants genuinely different and is each hypothesis testable?', weight: 25 },
      { key: 'sizing', label: 'Statistical Reasoning', description: 'Is the sample size and duration justified with clear reasoning?', weight: 30 },
      { key: 'decision', label: 'Decision Rule', description: 'Is the primary metric correct and the shipping rule unambiguous?', weight: 25 },
      { key: 'risks', label: 'Risk Awareness', description: 'Did the candidate spot a real confound (seasonality, time of day, etc.)?', weight: 20 },
    ],
    skillsProven: ['Email marketing', 'A/B testing', 'Marketing analytics', 'Experimentation design'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'social-media-competitive-benchmark',
    categoryId: 'digital-marketing',
    topicId: 'social-media-audit',
    level: 'intermediate',
    title: 'Competitive Benchmarking Report',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Audit 3 competing brands on the same platform and identify gaps to exploit.',
    scenario:
      'A mid-size South African athleisure brand wants to grow on TikTok. They have 8,000 followers. Three local competitors have between 25,000 and 90,000 followers. The marketing director wants to understand what the competitors are doing differently.',
    brief:
      'Audit 3 competing brands (you can invent them with plausible follower counts and content styles). Compare posting frequency, content formats, engagement rates, and audience interaction patterns. Identify gaps the client can exploit.',
    deliverables: [
      'A comparison table: Brand, Followers, Avg Posts/Week, Top Content Format, Avg Engagement Rate, Tone of Voice',
      'Three specific gaps or opportunities the competitors are missing (e.g., "none of them use user-generated content")',
      'A 3-point action plan for the client, prioritised by effort vs impact',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Invent plausible competitor data. The value is in the analysis pattern, not the specific numbers. Generic advice like "post more" will score poorly.',
    rubric: [
      { key: 'benchmarking', label: 'Benchmarking Rigour', description: 'Is the comparison structured with consistent metrics across all 3 competitors?', weight: 30 },
      { key: 'gaps', label: 'Gap Identification', description: 'Are the identified gaps specific, credible, and exploitable?', weight: 35 },
      { key: 'action', label: 'Action Plan', description: 'Is the action plan prioritised and realistic for a mid-size brand?', weight: 35 },
    ],
    skillsProven: ['Competitive analysis', 'Social media benchmarking', 'Strategic thinking', 'Marketing analytics'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'social-media-crisis-playbook',
    categoryId: 'digital-marketing',
    topicId: 'social-media-audit',
    level: 'advanced',
    title: 'Crisis Communication Playbook',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'A brand faces a viral complaint. Design the response strategy and 48-hour action plan.',
    scenario:
      'A popular South African fast-food chain served a customer a meal with a foreign object inside. The customer posted a video on X (Twitter) that has gone viral with 50,000 views in 4 hours. Journalists are starting to pick it up. The brand has not responded yet.',
    brief:
      'Design a complete crisis communication playbook. Cover the immediate response (first 2 hours), the next 48 hours, and the longer-term reputation recovery. You must draft the actual social media response.',
    deliverables: [
      'A triage decision tree: how severe is this? (cosmetic issue vs health risk vs legal exposure)',
      'The drafted social media response (tone, content, what NOT to say)',
      'A 48-hour action plan with specific steps, owners, and channels (social, PR, internal comms)',
      'A post-crisis review framework: what to measure 30 days later to assess reputational recovery',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The first response sets the tone for everything. A defensive or legalistic reply will make it worse. Show empathy first, accountability second, action third.',
    rubric: [
      { key: 'triage', label: 'Crisis Triage', description: 'Is the severity assessment structured and the escalation path clear?', weight: 25 },
      { key: 'response', label: 'Drafted Response', description: 'Is the response empathetic, specific, and free of corporate jargon?', weight: 30 },
      { key: 'plan', label: '48-Hour Plan', description: 'Is the action plan comprehensive with clear ownership across channels?', weight: 25 },
      { key: 'recovery', label: 'Recovery Framework', description: 'Are the 30-day metrics meaningful indicators of reputational recovery?', weight: 20 },
    ],
    skillsProven: ['Crisis communication', 'Reputation management', 'Social media strategy', 'Stakeholder management'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'email-multivariate-test',
    categoryId: 'digital-marketing',
    topicId: 'email-experimentation',
    level: 'intermediate',
    title: 'Full Email Campaign Optimisation',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a multivariate test across subject line, preview text, CTA, and send time.',
    scenario:
      'An online fashion retailer is launching a new summer collection. The email team wants to optimise not just the subject line, but the entire email — preview text, hero image, CTA button copy, and send time. They have a list of 120,000 subscribers.',
    brief:
      'Design a multivariate testing plan that goes beyond simple A/B. Decide which variables to test simultaneously vs sequentially, calculate the traffic allocation, and define the success criteria.',
    deliverables: [
      'A testing matrix showing which variables you are testing and which combinations you are comparing',
      'The traffic allocation plan: how many subscribers per cell, and why',
      'The testing sequence: what you test first, second, third (and why you cannot test everything at once)',
      'The decision framework: how you pick the winner when results are mixed (e.g., higher open rate but lower click rate)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A full factorial design with 4 variables × 2 variants = 16 cells. With 120K subscribers, each cell gets 7,500 — is that enough? Show your reasoning.',
    rubric: [
      { key: 'design', label: 'Test Design', description: 'Is the multivariate plan statistically sound with realistic cell sizes?', weight: 35 },
      { key: 'sequencing', label: 'Test Sequencing', description: 'Is the sequential vs simultaneous decision well-reasoned?', weight: 25 },
      { key: 'decision', label: 'Decision Framework', description: 'Does the framework handle conflicting metrics (open rate vs CTR vs conversion)?', weight: 25 },
      { key: 'practicality', label: 'Practical Execution', description: 'Could an email team actually execute this plan?', weight: 15 },
    ],
    skillsProven: ['Multivariate testing', 'Email marketing', 'Experimental design', 'Statistical reasoning'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'email-lifecycle-architecture',
    categoryId: 'digital-marketing',
    topicId: 'email-experimentation',
    level: 'advanced',
    title: 'Lifecycle Email Architecture',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a complete automated email programme from welcome to win-back.',
    scenario:
      'A South African online education platform has 80,000 registered users but only sends a single weekly newsletter. Most users sign up, take one free course, and never return. The CEO wants a proper lifecycle email programme.',
    brief:
      'Design the complete automated email architecture: Welcome Series → Nurture → Conversion → Post-Purchase → Win-Back. For each stage, define the trigger, timing, segmentation rules, content theme, and KPI.',
    deliverables: [
      'A lifecycle flow diagram showing all email stages, triggers, and branching logic',
      'For each stage: the trigger event, number of emails, timing between sends, and content theme',
      'Segmentation rules: how you split users (e.g., free vs paid, active vs dormant, course category interest)',
      'KPIs for each stage with realistic benchmarks (e.g., Welcome Series: 50% open rate, 15% click rate)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A lifecycle programme is only as good as its triggers. "Send email 3 days after signup" is a time-based trigger. "Send email when user completes 50% of a course" is a behaviour-based trigger. Use both.',
    rubric: [
      { key: 'architecture', label: 'Flow Architecture', description: 'Is the lifecycle flow comprehensive with logical stages and branching?', weight: 30 },
      { key: 'triggers', label: 'Trigger Design', description: 'Are the triggers behaviour-based (not just time-based) where appropriate?', weight: 25 },
      { key: 'segmentation', label: 'Segmentation', description: 'Are the segmentation rules specific and tied to user behaviour?', weight: 25 },
      { key: 'kpis', label: 'KPI Benchmarks', description: 'Are the KPIs realistic and tied to business outcomes (not just open rates)?', weight: 20 },
    ],
    skillsProven: ['Email automation', 'Lifecycle marketing', 'Segmentation', 'Marketing automation architecture'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 3: SEO & Organic Growth ---
  {
    id: 'seo-keyword-research',
    categoryId: 'digital-marketing',
    topicId: 'seo-organic-growth',
    level: 'beginner',
    title: 'Keyword Research for a Local Business',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Find 15 high-intent keywords for a Cape Town plumber and group them by search intent.',
    scenario:
      'A plumbing business in Cape Town wants to start ranking on Google. They currently have zero organic traffic. The owner asks: "What should we write about on our website?"',
    brief:
      'Conduct keyword research for this local plumbing business. Find 15 keywords, classify each by search intent (informational, navigational, transactional), and recommend the top 5 to target first.',
    deliverables: [
      'A table of 15 keywords with columns: Keyword, Estimated Monthly Volume (plausible range), Search Intent, Difficulty (Low/Med/High)',
      'Your top 5 priority keywords and a one-sentence justification for each',
      'One long-tail keyword opportunity the business is unlikely to find without research',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You may invent plausible search volumes. The key is showing you understand search intent — "plumber near me" (transactional) vs "how to fix a leaky tap" (informational) require different page types.',
    rubric: [
      { key: 'keywords', label: 'Keyword Selection', description: 'Are the 15 keywords realistic and relevant to a local plumber?', weight: 30 },
      { key: 'intent', label: 'Search Intent', description: 'Is each keyword correctly classified by intent?', weight: 35 },
      { key: 'prioritisation', label: 'Prioritisation', description: 'Are the top 5 chosen strategically (high intent, achievable difficulty)?', weight: 35 },
    ],
    skillsProven: ['Keyword research', 'Search intent', 'Local SEO', 'Content prioritisation'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'seo-onpage-audit',
    categoryId: 'digital-marketing',
    topicId: 'seo-organic-growth',
    level: 'intermediate',
    title: 'On-Page SEO Audit',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Audit a page\'s title tags, headings, internal links, and schema markup.',
    scenario:
      'A travel blog published a 2,000-word guide on "Best Hiking Trails in the Drakensberg" six months ago. Despite great content, it ranks on page 3 of Google. The editor suspects on-page SEO issues.',
    brief:
      'Conduct an on-page SEO audit of this hypothetical article. Identify issues in the title tag, meta description, heading hierarchy, image alt text, internal linking, URL structure, and schema markup.',
    deliverables: [
      'An audit checklist with at least 10 on-page elements, their current state (hypothetical), and your recommended fix',
      'A rewritten title tag and meta description optimised for both CTR and keyword targeting',
      'A recommended schema markup type for this content and why it would improve SERP appearance',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Invent the current page state (e.g., "title tag is 80 characters, keyword not in first 3 words"). The value is the audit methodology, not the specific page.',
    rubric: [
      { key: 'audit', label: 'Audit Completeness', description: 'Are at least 10 on-page elements covered with specific findings?', weight: 30 },
      { key: 'fixes', label: 'Fix Quality', description: 'Are the recommended fixes specific and correctly prioritised?', weight: 35 },
      { key: 'schema', label: 'Schema Knowledge', description: 'Is the schema markup recommendation appropriate for the content type?', weight: 35 },
    ],
    skillsProven: ['On-page SEO', 'Meta tag optimisation', 'Schema markup', 'SEO auditing'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'seo-technical-audit',
    categoryId: 'digital-marketing',
    topicId: 'seo-organic-growth',
    level: 'advanced',
    title: 'Technical SEO Site Audit',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Audit a 5,000-page e-commerce site for crawlability, Core Web Vitals, and indexation.',
    scenario:
      'A South African e-commerce site selling 3,000 products has seen organic traffic decline 25% over 3 months despite no content changes. The SEO manager suspects technical issues — possibly crawl budget waste, duplicate content from faceted navigation, or Core Web Vitals failures.',
    brief:
      'Design a comprehensive technical SEO audit. You do not need to crawl a real site — describe the audit methodology, the tools you would use, and the prioritised findings you would expect.',
    deliverables: [
      'An audit methodology covering: crawlability (robots.txt, sitemap, crawl budget), indexation (canonical tags, noindex, duplicate content), and performance (Core Web Vitals)',
      'A list of 5 hypothetical findings, prioritised by traffic impact, with remediation steps for each',
      'A recommendation on handling faceted navigation URLs (crawl, noindex, or canonical) with reasoning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'E-commerce sites generate thousands of URL variants from filters (colour, size, price). If Google crawls all of them, it wastes crawl budget. Show you understand this.',
    rubric: [
      { key: 'methodology', label: 'Audit Methodology', description: 'Is the audit structured across crawlability, indexation, and performance?', weight: 30 },
      { key: 'findings', label: 'Finding Quality', description: 'Are the hypothetical findings realistic for a large e-commerce site?', weight: 35 },
      { key: 'faceted', label: 'Faceted Navigation', description: 'Does the candidate understand the crawl budget implications of faceted URLs?', weight: 35 },
    ],
    skillsProven: ['Technical SEO', 'Crawl budget', 'Core Web Vitals', 'E-commerce SEO'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 4: Paid Media & PPC ---
  {
    id: 'ppc-campaign-structure',
    categoryId: 'digital-marketing',
    topicId: 'paid-media-ppc',
    level: 'beginner',
    title: 'Build a Google Ads Campaign Structure',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Set up campaigns, ad groups, keywords, and match types for an online tutoring company.',
    scenario:
      'An online tutoring company wants to run Google Search Ads for the first time. They offer Maths, English, and Science tutoring for high school students. Their monthly budget is R15,000.',
    brief:
      'Design the campaign structure. Define the campaigns, ad groups, keywords (with match types), and write one ad for each ad group. You do not need a Google Ads account — document everything in Markdown.',
    deliverables: [
      'The campaign structure: campaign names, ad group names, and 5-8 keywords per ad group with match types (broad, phrase, exact)',
      'One responsive search ad per ad group with 3 headlines and 2 descriptions',
      'A list of negative keywords to prevent wasted spend',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Match types matter enormously. Broad match for "maths tutor" will show your ad for "math games" and "tutor salary". Show you understand this.',
    rubric: [
      { key: 'structure', label: 'Campaign Structure', description: 'Are campaigns and ad groups logically organised by service or intent?', weight: 30 },
      { key: 'keywords', label: 'Keyword Strategy', description: 'Are match types chosen correctly and negative keywords included?', weight: 35 },
      { key: 'ads', label: 'Ad Copy', description: 'Are the ads compelling with clear CTAs and keyword relevance?', weight: 35 },
    ],
    skillsProven: ['Google Ads', 'Campaign structure', 'Keyword match types', 'Ad copywriting'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'ppc-diagnose-roas-drop',
    categoryId: 'digital-marketing',
    topicId: 'paid-media-ppc',
    level: 'intermediate',
    title: 'Diagnose a Declining ROAS',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'A Meta Ads campaign\'s ROAS dropped from 4.2× to 1.8×. Find the root cause.',
    scenario:
      'A DTC skincare brand runs Meta Ads. Over 6 weeks, ROAS dropped from 4.2× to 1.8×. The media buyer says "the algorithm is broken." The CMO wants a real diagnosis.',
    brief:
      'Conduct a systematic diagnosis. Decompose ROAS into its component parts (CPM, CTR, CPC, CVR, AOV), identify which lever(s) moved, and propose hypotheses for each.',
    deliverables: [
      'A ROAS decomposition: ROAS = Revenue / Spend = (Clicks × CVR × AOV) / (Impressions × CPM / 1000)',
      'A week-by-week trend table (invented but plausible) showing which metric deteriorated',
      'At least 4 hypotheses for the decline, with the data you would check to confirm each',
      'A recommended action plan to recover ROAS within 2 weeks',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A declining ROAS is a symptom, not a diagnosis. If CPM went up, that is a demand-side issue (competition, audience fatigue). If CVR went down, the problem is on the landing page. Show this thinking.',
    rubric: [
      { key: 'decomposition', label: 'ROAS Decomposition', description: 'Is the metric decomposition correct and complete?', weight: 30 },
      { key: 'diagnosis', label: 'Root Cause Diagnosis', description: 'Are the hypotheses specific and tied to individual metric movements?', weight: 35 },
      { key: 'action', label: 'Recovery Plan', description: 'Is the action plan tactical and executable within 2 weeks?', weight: 35 },
    ],
    skillsProven: ['Paid media analytics', 'ROAS optimisation', 'Root-cause analysis', 'Meta Ads'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'ppc-full-funnel-strategy',
    categoryId: 'digital-marketing',
    topicId: 'paid-media-ppc',
    level: 'advanced',
    title: 'Full-Funnel Paid Media Strategy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a paid media plan across Google, Meta, and LinkedIn for a B2B SaaS launch.',
    scenario:
      'A B2B SaaS company is launching a new HR software product. They have R500K/month for paid media. The target audience is HR managers at mid-size South African companies. The sales cycle is 45 days.',
    brief:
      'Design a full-funnel paid media strategy across Google Search, Meta, and LinkedIn. Allocate budget by channel and funnel stage (awareness, consideration, conversion), define the audience targeting for each, and set the KPIs.',
    deliverables: [
      'Budget allocation table: Channel × Funnel Stage × Monthly Spend × Primary KPI',
      'Audience targeting for each channel (LinkedIn job titles, Meta lookalikes, Google keywords)',
      'The retargeting strategy: how you move users from awareness to conversion across channels',
      'A measurement plan: how you attribute a R500K/month spend to actual pipeline and closed deals',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'B2B has a long sales cycle. You cannot optimise for immediate purchases. Show how you use micro-conversions (whitepaper downloads, demo requests) as proxy metrics.',
    rubric: [
      { key: 'allocation', label: 'Budget Allocation', description: 'Is the budget split defensible across channels and funnel stages?', weight: 25 },
      { key: 'targeting', label: 'Audience Targeting', description: 'Are the targeting strategies channel-appropriate and specific?', weight: 25 },
      { key: 'retargeting', label: 'Retargeting Strategy', description: 'Is the cross-channel retargeting flow logical and privacy-compliant?', weight: 25 },
      { key: 'measurement', label: 'Measurement Plan', description: 'Can the team actually attribute spend to revenue with this plan?', weight: 25 },
    ],
    skillsProven: ['Full-funnel marketing', 'B2B paid media', 'Budget allocation', 'Cross-channel strategy'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 5: Content Strategy & Marketing ---
  {
    id: 'content-blog-brief',
    categoryId: 'digital-marketing',
    topicId: 'content-strategy',
    level: 'beginner',
    title: 'Write a Blog Content Brief',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a detailed content brief for an SEO-targeted blog post.',
    scenario:
      'A fintech company publishes a blog but the posts are written without briefs. Writers guess what to cover, resulting in unfocused articles that rank for nothing. The content lead wants every post to start with a brief.',
    brief:
      'Write a comprehensive content brief for a blog post targeting the keyword "how to save money in South Africa". The brief should be detailed enough that any competent writer could produce the article without further input.',
    deliverables: [
      'The brief: target keyword, secondary keywords, search intent, target word count, and audience persona',
      'A detailed outline with H2/H3 headings, the key points to cover under each, and the CTA',
      'Three competitor articles you would analyse (invent titles and URLs) and the content gaps your article should fill',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A brief is not an outline. It also includes tone of voice, internal linking targets, and what NOT to cover. Show this level of detail.',
    rubric: [
      { key: 'brief', label: 'Brief Completeness', description: 'Does the brief include all necessary elements for a writer to execute without questions?', weight: 35 },
      { key: 'outline', label: 'Outline Quality', description: 'Is the outline logically structured with clear H2/H3 hierarchy?', weight: 30 },
      { key: 'gaps', label: 'Competitive Analysis', description: 'Are the content gaps specific and actionable?', weight: 35 },
    ],
    skillsProven: ['Content briefs', 'SEO content', 'Editorial planning', 'Content strategy'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'content-pillar-strategy',
    categoryId: 'digital-marketing',
    topicId: 'content-strategy',
    level: 'intermediate',
    title: 'Design a Content Pillar Strategy',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a topic cluster model with one pillar page and 8 supporting articles.',
    scenario:
      'A South African fintech company wants to own the search results for "personal finance South Africa". They need a topic cluster strategy that builds topical authority through a pillar page and supporting content.',
    brief:
      'Design a complete topic cluster. Define the pillar page, 8 supporting articles (cluster content), and the internal linking architecture that connects them.',
    deliverables: [
      'The pillar page: title, target keyword, scope (what it covers), and estimated word count',
      'A table of 8 cluster articles: title, target keyword, search intent, and how it links back to the pillar',
      'An internal linking map showing the hub-and-spoke architecture',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A pillar page is broad. Cluster articles are narrow. The pillar page for "personal finance" should NOT cover everything — it should link out to detailed articles on budgeting, saving, investing, debt, etc.',
    rubric: [
      { key: 'pillar', label: 'Pillar Page Design', description: 'Is the pillar page scoped correctly (broad enough to warrant clusters)?', weight: 30 },
      { key: 'clusters', label: 'Cluster Articles', description: 'Are the 8 articles genuinely distinct with non-overlapping keywords?', weight: 35 },
      { key: 'linking', label: 'Internal Linking', description: 'Is the hub-and-spoke linking architecture clearly defined?', weight: 35 },
    ],
    skillsProven: ['Topic clusters', 'Content architecture', 'SEO strategy', 'Internal linking'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'content-roi-framework',
    categoryId: 'digital-marketing',
    topicId: 'content-strategy',
    level: 'advanced',
    title: 'Content ROI Framework',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a measurement framework that ties content to pipeline and revenue.',
    scenario:
      'A B2B SaaS company spends R200K/month on content marketing (writers, designers, tools). The CFO asks: "What are we getting for this money?" The content team can only show traffic numbers. The CFO wants pipeline attribution.',
    brief:
      'Build a content ROI framework that connects content production to business outcomes. Move beyond traffic metrics to pipeline contribution, influenced revenue, and cost-per-lead by content type.',
    deliverables: [
      'A content attribution model: how you track a user from blog visit → lead → MQL → opportunity → closed deal',
      'KPIs by content type: blog (traffic, leads), case study (influence on deals), whitepaper (lead gen cost)',
      'A monthly content ROI report template showing investment vs return by content category',
      'One honest limitation of content attribution and how you work around it',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Content rarely drives last-touch conversions. It influences. Show that you understand multi-touch attribution and its messiness.',
    rubric: [
      { key: 'attribution', label: 'Attribution Model', description: 'Is the attribution model realistic about content\'s role in a multi-touch journey?', weight: 30 },
      { key: 'kpis', label: 'KPI Framework', description: 'Are the KPIs appropriate for each content type?', weight: 25 },
      { key: 'report', label: 'Report Design', description: 'Would the CFO find this report useful for investment decisions?', weight: 25 },
      { key: 'limitations', label: 'Honest Limitations', description: 'Does the candidate acknowledge attribution gaps without dismissing the effort?', weight: 20 },
    ],
    skillsProven: ['Content ROI', 'Marketing attribution', 'Pipeline analytics', 'Executive reporting'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 6: Marketing Analytics & Attribution ---
  {
    id: 'analytics-campaign-dashboard',
    categoryId: 'digital-marketing',
    topicId: 'marketing-analytics-attribution',
    level: 'beginner',
    title: 'Build a Campaign Dashboard',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Define the KPIs and layout for tracking a product launch across 3 channels.',
    scenario:
      'A beauty brand is launching a new product line across Instagram, Google Ads, and email. The marketing manager wants a single dashboard to track campaign performance in one view.',
    brief:
      'Design a campaign dashboard. Define the KPIs for each channel, the overall campaign KPIs, and the layout. You do not need to build it in a tool — a detailed wireframe description is sufficient.',
    deliverables: [
      'Channel-level KPIs: 3 metrics per channel (Instagram, Google Ads, Email) with definitions',
      'Campaign-level KPIs: 3 aggregate metrics that show overall launch success',
      'A dashboard layout description showing how the information is organised for a weekly review',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A dashboard with 20 metrics is not a dashboard — it is a spreadsheet. Choose the metrics that actually drive decisions.',
    rubric: [
      { key: 'kpis', label: 'KPI Selection', description: 'Are the chosen metrics actionable and appropriate for each channel?', weight: 35 },
      { key: 'aggregation', label: 'Campaign Aggregation', description: 'Do the aggregate metrics provide a genuine cross-channel view?', weight: 30 },
      { key: 'layout', label: 'Dashboard Layout', description: 'Is the layout organised for a weekly decision-making cadence?', weight: 35 },
    ],
    skillsProven: ['Marketing dashboards', 'Campaign analytics', 'KPI selection', 'Dashboard design'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'analytics-attribution-comparison',
    categoryId: 'digital-marketing',
    topicId: 'marketing-analytics-attribution',
    level: 'intermediate',
    title: 'Attribution Model Comparison',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Compare first-touch, last-touch, and multi-touch attribution for a real campaign.',
    scenario:
      'A subscription box company runs ads on Google, Instagram, and YouTube. A typical customer journey is: YouTube ad → Instagram retarget → Google brand search → purchase. The marketing team argues about which channel "deserves" the credit.',
    brief:
      'Apply three attribution models (first-touch, last-touch, and linear multi-touch) to this customer journey. Show how each model distributes credit differently and recommend the best model for this business.',
    deliverables: [
      'A credit distribution table: Channel × First Touch % × Last Touch % × Linear %',
      'An analysis of how each model biases decision-making (first-touch overvalues awareness, last-touch overvalues brand search)',
      'Your recommended model with a justification tied to the business\'s growth stage and goals',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'There is no "right" attribution model. The right model depends on what question you are trying to answer. Show this nuance.',
    rubric: [
      { key: 'models', label: 'Model Application', description: 'Are the three models correctly applied with accurate credit distribution?', weight: 30 },
      { key: 'analysis', label: 'Bias Analysis', description: 'Does the candidate understand how each model biases budget allocation?', weight: 35 },
      { key: 'recommendation', label: 'Recommendation', description: 'Is the recommended model justified by the business context?', weight: 35 },
    ],
    skillsProven: ['Attribution modelling', 'Marketing analytics', 'Multi-touch analysis', 'Strategic thinking'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'analytics-mmm-brief',
    categoryId: 'digital-marketing',
    topicId: 'marketing-analytics-attribution',
    level: 'advanced',
    title: 'Marketing Mix Modelling (MMM) Brief',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design the requirements for a Marketing Mix Model that guides budget allocation.',
    scenario:
      'A large South African retailer spends R5M/month across TV, radio, digital, outdoor, and in-store promotions. The CMO wants to know which channels are over- and under-invested. An analytics consultancy will build the MMM, but they need a clear brief from the marketing team.',
    brief:
      'Write the requirements brief for the MMM project. Specify the data inputs needed, the expected outputs, the business questions it must answer, and how the team will use the results.',
    deliverables: [
      'Data requirements: which datasets are needed (media spend by channel × week, sales data, pricing, weather, competitor activity, etc.)',
      'Business questions: the 3-5 specific questions the MMM must answer',
      'Expected outputs: what the model should produce (channel ROI curves, optimal budget allocation, saturation points)',
      'An implementation plan: how the marketing team will use MMM outputs in quarterly budget planning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'An MMM is only as good as its inputs. If you do not include external factors (seasonality, competitor promotions, economic conditions), the model will attribute their effects to your media spend.',
    rubric: [
      { key: 'data', label: 'Data Requirements', description: 'Are the data inputs comprehensive, including external factors?', weight: 30 },
      { key: 'questions', label: 'Business Questions', description: 'Are the questions specific enough to guide model design?', weight: 25 },
      { key: 'outputs', label: 'Expected Outputs', description: 'Are the outputs actionable (ROI curves, not just coefficients)?', weight: 25 },
      { key: 'implementation', label: 'Implementation Plan', description: 'Is there a credible plan for turning model outputs into budget decisions?', weight: 20 },
    ],
    skillsProven: ['Marketing mix modelling', 'Budget optimisation', 'Marketing analytics', 'Strategic planning'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 7: Conversion Rate Optimisation (CRO) ---
  {
    id: 'cro-landing-page-teardown',
    categoryId: 'digital-marketing',
    topicId: 'conversion-rate-optimisation',
    level: 'beginner',
    title: 'Landing Page Teardown',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Critique a landing page using CRO principles and propose 3 changes.',
    scenario:
      'A SaaS company\'s landing page converts at 2.1%, which is below the industry average of 3.5%. The marketing team suspects the page has friction points but cannot pinpoint them.',
    brief:
      'Invent a plausible SaaS landing page (headline, subhead, hero image, features section, testimonials, CTA button). Then critique it using CRO principles and propose 3 specific, testable changes.',
    deliverables: [
      'A description of the current landing page layout and copy (invented but realistic)',
      'A CRO critique covering: headline clarity, value proposition, social proof placement, CTA visibility, and friction points',
      'Three specific changes, each framed as a testable hypothesis (e.g., "Moving the CTA above the fold will increase clicks by 15% because...")',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Each change must be a testable hypothesis, not just "make the CTA bigger." Why do you think it will work? What evidence supports this?',
    rubric: [
      { key: 'critique', label: 'CRO Critique', description: 'Are the friction points correctly identified using CRO principles?', weight: 30 },
      { key: 'changes', label: 'Proposed Changes', description: 'Are the 3 changes specific, testable, and grounded in CRO best practices?', weight: 40 },
      { key: 'hypotheses', label: 'Hypothesis Quality', description: 'Is each change framed as a falsifiable hypothesis with reasoning?', weight: 30 },
    ],
    skillsProven: ['CRO', 'Landing page optimisation', 'Hypothesis formation', 'UX analysis'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'cro-testing-roadmap',
    categoryId: 'digital-marketing',
    topicId: 'conversion-rate-optimisation',
    level: 'intermediate',
    title: 'Design a CRO Testing Roadmap',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Prioritise 10 test ideas using ICE and design the top 3 experiments.',
    scenario:
      'An e-commerce site generates R8M/month in revenue. The CRO team has brainstormed 10 test ideas but cannot decide what to test first. They need a prioritisation framework and detailed experiment plans.',
    brief:
      'Invent 10 plausible CRO test ideas. Score each using the ICE framework (Impact, Confidence, Ease). Then design the top 3 experiments in detail with hypothesis, control, variant, sample size, and success criteria.',
    deliverables: [
      'A table of 10 test ideas scored by ICE (1-10 each) with a total score and priority rank',
      'For each of the top 3: the hypothesis, what changes in the variant, the primary metric, and the minimum detectable effect',
      'The testing sequence: why you run test #1 before #2 (dependencies, traffic requirements, etc.)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'ICE scoring is subjective. The value is not the exact scores but whether your reasoning is transparent and consistent.',
    rubric: [
      { key: 'prioritisation', label: 'ICE Prioritisation', description: 'Is the ICE scoring consistent and the reasoning transparent?', weight: 30 },
      { key: 'experiments', label: 'Experiment Design', description: 'Are the top 3 experiments well-designed with clear hypotheses and metrics?', weight: 40 },
      { key: 'sequencing', label: 'Test Sequencing', description: 'Is the testing order justified by dependencies and resource constraints?', weight: 30 },
    ],
    skillsProven: ['CRO strategy', 'ICE framework', 'Experiment design', 'Prioritisation'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'cro-full-funnel-audit',
    categoryId: 'digital-marketing',
    topicId: 'conversion-rate-optimisation',
    level: 'advanced',
    title: 'Full Funnel Conversion Audit',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Map a complete funnel, find the biggest drop-offs, and design experiments.',
    scenario:
      'An online insurance comparison site gets 200,000 visitors/month but only 400 completed quote requests (0.2% conversion). The funnel is: Landing Page → Quote Form Step 1 → Step 2 → Step 3 → Confirmation. The CEO wants to know where the biggest drop-off is and what to do about it.',
    brief:
      'Map the complete funnel with hypothetical but plausible drop-off rates at each stage. Identify the biggest leak, diagnose the likely cause, and design an experiment to fix it.',
    deliverables: [
      'A funnel map with conversion rates at each stage (invented but internally consistent)',
      'The biggest drop-off point identified with at least 3 hypotheses for why users abandon',
      'A detailed experiment design for the highest-impact fix',
      'A secondary optimisation opportunity at a different funnel stage',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A 50% drop-off from Step 1 to Step 2 is more impactful than a 20% drop-off from Step 2 to Step 3, even if the percentage is smaller. Show that you calculate absolute user loss, not just percentages.',
    rubric: [
      { key: 'funnel', label: 'Funnel Mapping', description: 'Are the drop-off rates plausible and internally consistent?', weight: 25 },
      { key: 'diagnosis', label: 'Drop-Off Diagnosis', description: 'Are the hypotheses for abandonment specific and testable?', weight: 30 },
      { key: 'experiment', label: 'Experiment Design', description: 'Is the proposed experiment well-designed with clear metrics?', weight: 30 },
      { key: 'impact', label: 'Impact Calculation', description: 'Does the candidate calculate the revenue impact of fixing the leak?', weight: 15 },
    ],
    skillsProven: ['Funnel analysis', 'CRO strategy', 'Experiment design', 'Revenue optimisation'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 8: Brand Strategy & Positioning ---
  {
    id: 'brand-positioning-statement',
    categoryId: 'digital-marketing',
    topicId: 'brand-strategy-positioning',
    level: 'beginner',
    title: 'Write a Brand Positioning Statement',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Define target audience, category, key benefit, and reason to believe.',
    scenario:
      'A new South African meal-kit delivery startup is about to launch. They deliver pre-portioned ingredients and recipes to working professionals in Johannesburg and Cape Town. They need to articulate who they are, who they serve, and why they are different.',
    brief:
      'Write a brand positioning statement using the classic framework: "For [target audience] who [need], [brand] is the [category] that [key benefit] because [reason to believe]." Then defend each element.',
    deliverables: [
      'The positioning statement in one sentence',
      'A defense of each element: why this target audience, why this category framing, why this benefit over alternatives',
      'One alternative positioning you considered and rejected, with your reasoning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A positioning statement is not a tagline. It is an internal strategic document. It should be precise, not catchy.',
    rubric: [
      { key: 'statement', label: 'Positioning Statement', description: 'Is the statement clear, specific, and following the classic framework?', weight: 35 },
      { key: 'defense', label: 'Element Defense', description: 'Is each element justified with market or customer insight?', weight: 35 },
      { key: 'alternative', label: 'Alternative Analysis', description: 'Does the rejected alternative show genuine strategic thinking?', weight: 30 },
    ],
    skillsProven: ['Brand positioning', 'Strategic thinking', 'Market analysis', 'Brand strategy'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'brand-competitive-positioning',
    categoryId: 'digital-marketing',
    topicId: 'brand-strategy-positioning',
    level: 'intermediate',
    title: 'Competitive Positioning Map',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Map 6 competitors on a 2×2 matrix and find the white space.',
    scenario:
      'A new South African online investment platform is entering a crowded market. Competitors include EasyEquities, Satrix, Allan Gray, Old Mutual, FNB Shares, and Franc. The founder needs to understand the competitive landscape and find a positioning that is not already taken.',
    brief:
      'Create a 2×2 competitive positioning map. Choose the two axes that best differentiate the market. Plot all 6 competitors and identify the white space where the new platform should position itself.',
    deliverables: [
      'Your chosen axes (e.g., "Simple ↔ Complex" and "Low Cost ↔ Premium") with a justification for why these two dimensions matter most',
      'A positioning map description showing where each competitor sits and why',
      'The identified white space and a positioning recommendation for the new platform',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The axes you choose define the strategic conversation. "Good ↔ Bad" is not a useful axis. Choose dimensions that represent genuine trade-offs.',
    rubric: [
      { key: 'axes', label: 'Axis Selection', description: 'Are the two axes strategically meaningful and genuinely differentiated?', weight: 30 },
      { key: 'mapping', label: 'Competitor Mapping', description: 'Are the competitors plausibly placed based on real market knowledge?', weight: 35 },
      { key: 'whitespace', label: 'White Space Identification', description: 'Is the identified opportunity credible and commercially viable?', weight: 35 },
    ],
    skillsProven: ['Competitive analysis', 'Positioning strategy', 'Market mapping', 'Strategic thinking'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'brand-architecture-multi-product',
    categoryId: 'digital-marketing',
    topicId: 'brand-strategy-positioning',
    level: 'advanced',
    title: 'Brand Architecture for a Multi-Product Company',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design the brand architecture for a company launching its 4th product.',
    scenario:
      'A South African fintech company started with a payment processing product. They then launched a lending product and an insurance product. Now they are launching a business banking product. Each product has its own brand identity, which is confusing customers and diluting marketing spend.',
    brief:
      'Recommend a brand architecture strategy: branded house (Google), house of brands (P&G), endorsed brands (Marriott), or hybrid. Justify your choice and design the naming, visual identity, and go-to-market implications.',
    deliverables: [
      'A comparison of at least 3 brand architecture models with pros and cons for this specific company',
      'Your recommended model with a justification tied to the company\'s growth stage, market, and customer base',
      'The naming convention for the 4 products under your chosen architecture',
      'Go-to-market implications: how the architecture affects advertising, SEO, and customer acquisition cost',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Brand architecture is not just a naming exercise. It affects marketing spend efficiency, cross-selling, and customer trust. Show you understand these business implications.',
    rubric: [
      { key: 'comparison', label: 'Model Comparison', description: 'Are the architecture models correctly explained with relevant pros/cons?', weight: 25 },
      { key: 'recommendation', label: 'Recommendation', description: 'Is the chosen model justified by the business context?', weight: 30 },
      { key: 'naming', label: 'Naming Convention', description: 'Is the naming system consistent and scalable?', weight: 20 },
      { key: 'gtm', label: 'GTM Implications', description: 'Does the candidate understand how architecture affects marketing efficiency?', weight: 25 },
    ],
    skillsProven: ['Brand architecture', 'Multi-product strategy', 'Naming strategy', 'Marketing efficiency'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 9: Influencer & Community Marketing ---
  {
    id: 'influencer-outreach-brief',
    categoryId: 'digital-marketing',
    topicId: 'influencer-community',
    level: 'beginner',
    title: 'Influencer Outreach Brief',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Identify 5 micro-influencers for a SA skincare brand and draft an outreach message.',
    scenario:
      'A South African natural skincare brand wants to work with micro-influencers (5K-50K followers) on Instagram. They have a R30,000 budget for influencer collaborations this quarter.',
    brief:
      'Identify 5 micro-influencer profiles (invent them with plausible names, follower counts, niches, and engagement rates). Justify each selection and draft a personalised outreach DM or email.',
    deliverables: [
      'A table of 5 influencers: Name, Platform, Follower Count, Niche, Avg Engagement Rate, Why They Fit',
      'A drafted outreach message that is personalised (not a template blast) and includes the value proposition for the influencer',
      'A proposed collaboration format for each (gifted product, paid post, affiliate code, etc.) with estimated cost',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Micro-influencers care about authenticity. A generic "Dear Influencer" message will get ignored. Show that you would research their content before reaching out.',
    rubric: [
      { key: 'selection', label: 'Influencer Selection', description: 'Are the 5 influencers plausible, diverse, and aligned with the brand?', weight: 30 },
      { key: 'outreach', label: 'Outreach Quality', description: 'Is the message personalised, professional, and value-focused?', weight: 35 },
      { key: 'collaboration', label: 'Collaboration Design', description: 'Are the proposed formats realistic for the budget and influencer size?', weight: 35 },
    ],
    skillsProven: ['Influencer marketing', 'Outreach writing', 'Partnership strategy', 'Budget allocation'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'community-launch-strategy',
    categoryId: 'digital-marketing',
    topicId: 'influencer-community',
    level: 'intermediate',
    title: 'Community Launch Strategy',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a plan to grow an online community from 0 to 500 engaged members.',
    scenario:
      'A South African fitness brand wants to launch a WhatsApp Community (or Discord server) for their customers. The goal is 500 engaged members in 90 days. They currently have an email list of 8,000 and Instagram following of 15,000.',
    brief:
      'Design a community launch strategy. Cover the platform choice, the seed member recruitment, the engagement model, and the moderation plan.',
    deliverables: [
      'Platform recommendation (WhatsApp, Discord, Facebook Group, etc.) with pros/cons for this specific brand',
      'A 90-day launch plan in 3 phases: Seed (Day 1-14), Grow (Day 15-45), Sustain (Day 46-90)',
      'An engagement model: what content the community produces, who posts, and how often',
      'A moderation framework: rules, moderator roles, and how to handle toxic behaviour',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A community is not a broadcast channel. If only the brand posts, it is a newsletter. Show how you get members to talk to each other.',
    rubric: [
      { key: 'platform', label: 'Platform Choice', description: 'Is the platform justified for this audience and use case?', weight: 20 },
      { key: 'launch', label: 'Launch Plan', description: 'Are the 3 phases realistic with specific tactics for each?', weight: 35 },
      { key: 'engagement', label: 'Engagement Model', description: 'Does the model create genuine member-to-member interaction?', weight: 25 },
      { key: 'moderation', label: 'Moderation Plan', description: 'Is the moderation framework practical and proportionate?', weight: 20 },
    ],
    skillsProven: ['Community building', 'Launch strategy', 'Engagement design', 'Community management'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'influencer-measurement-framework',
    categoryId: 'digital-marketing',
    topicId: 'influencer-community',
    level: 'advanced',
    title: 'Influencer Campaign Measurement Framework',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a system that tracks influencer ROI beyond vanity metrics.',
    scenario:
      'A fashion e-commerce brand spent R200,000 on influencer marketing last quarter. The campaign generated 500,000 impressions and 12,000 likes. The CFO asks: "How many sales did this actually drive?" Nobody knows.',
    brief:
      'Design a measurement framework that tracks influencer marketing from awareness to conversion. Go beyond reach and likes to actual sales attribution, customer acquisition cost, and lifetime value impact.',
    deliverables: [
      'A metrics framework across the funnel: Awareness (reach, impressions), Consideration (clicks, saves, shares), Conversion (sales, discount code usage, UTM tracking)',
      'The tracking infrastructure: how you set up UTMs, unique discount codes, and landing pages per influencer',
      'An ROI calculation template: total investment vs attributed revenue, CAC per influencer, and comparison to other channels',
      'One limitation of influencer attribution (e.g., dark social, screenshot sharing) and your workaround',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Most influencer impact is unmeasurable (people see a post, remember the brand, and Google it later). Acknowledge this but show how you measure what you can.',
    rubric: [
      { key: 'framework', label: 'Metrics Framework', description: 'Does the framework go beyond vanity metrics to business outcomes?', weight: 30 },
      { key: 'tracking', label: 'Tracking Infrastructure', description: 'Is the tracking setup practical and comprehensive?', weight: 25 },
      { key: 'roi', label: 'ROI Calculation', description: 'Is the ROI methodology sound and comparable to other channels?', weight: 25 },
      { key: 'limitations', label: 'Attribution Honesty', description: 'Does the candidate acknowledge measurement gaps honestly?', weight: 20 },
    ],
    skillsProven: ['Influencer ROI', 'Campaign measurement', 'Attribution', 'Marketing analytics'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  // --- Topic 10: Growth Strategy & Go-to-Market ---
  {
    id: 'growth-aarrr-funnel',
    categoryId: 'digital-marketing',
    topicId: 'growth-strategy-gtm',
    level: 'beginner',
    title: 'Map the AARRR Funnel',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Define the Pirate Metrics for a fictional food delivery app.',
    scenario:
      'A food delivery app in Durban has 50,000 downloads but only 8,000 monthly active users. The founder knows about the "pirate metrics" framework (AARRR) but has never applied it. She wants you to map her funnel.',
    brief:
      'Map the complete AARRR funnel (Acquisition, Activation, Retention, Referral, Revenue) for this food delivery app. For each stage, define the key metric, the current hypothetical rate, and one tactic to improve it.',
    deliverables: [
      'A table: Funnel Stage, Definition for this app, Key Metric, Current Rate (hypothetical), Target Rate',
      'One growth tactic per stage, specific to food delivery (not generic advice)',
      'The one stage you would prioritise first and why (hint: it is probably not Acquisition)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Most startups over-invest in Acquisition and under-invest in Activation and Retention. If 50,000 people downloaded but only 8,000 are active, the problem is not awareness.',
    rubric: [
      { key: 'mapping', label: 'Funnel Mapping', description: 'Is each AARRR stage correctly defined with an appropriate metric?', weight: 30 },
      { key: 'tactics', label: 'Growth Tactics', description: 'Are the tactics specific to food delivery and actionable?', weight: 35 },
      { key: 'prioritisation', label: 'Stage Prioritisation', description: 'Does the candidate correctly identify the leakiest funnel stage?', weight: 35 },
    ],
    skillsProven: ['AARRR framework', 'Growth marketing', 'Funnel analysis', 'Startup strategy'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'growth-referral-programme',
    categoryId: 'digital-marketing',
    topicId: 'growth-strategy-gtm',
    level: 'intermediate',
    title: 'Design a Referral Programme',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a two-sided referral programme and model the viral coefficient.',
    scenario:
      'A South African online banking app wants to reduce their customer acquisition cost (currently R180 per customer via paid ads). They believe a referral programme could acquire customers for under R80 each.',
    brief:
      'Design a complete referral programme. Define the incentive structure for both sides (referrer and referee), calculate the viral coefficient, and project the impact on monthly growth.',
    deliverables: [
      'The incentive structure: what the referrer gets, what the referee gets, and when each reward is triggered',
      'A viral coefficient calculation: invites per user × conversion rate = K-factor, with realistic assumptions',
      'A 6-month growth projection comparing organic growth vs organic + referral growth',
      'One anti-fraud mechanism to prevent referral abuse',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A K-factor above 1.0 means viral growth. Most referral programmes achieve 0.2-0.5. Be realistic about your assumptions.',
    rubric: [
      { key: 'incentives', label: 'Incentive Design', description: 'Are the incentives compelling for both sides without being unprofitable?', weight: 30 },
      { key: 'viral', label: 'Viral Coefficient', description: 'Is the K-factor calculation correct with realistic assumptions?', weight: 30 },
      { key: 'projection', label: 'Growth Projection', description: 'Is the 6-month model internally consistent and honest about uncertainty?', weight: 25 },
      { key: 'fraud', label: 'Anti-Fraud', description: 'Is the anti-fraud mechanism practical and proportionate?', weight: 15 },
    ],
    skillsProven: ['Referral programmes', 'Viral growth', 'Growth modelling', 'Product marketing'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },
  {
    id: 'growth-gtm-new-market',
    categoryId: 'digital-marketing',
    topicId: 'growth-strategy-gtm',
    level: 'advanced',
    title: 'Go-to-Market Plan for a New Market',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'A SA edtech company is expanding into Nigeria. Write the GTM strategy.',
    scenario:
      'A South African edtech company has 200,000 users domestically. They are expanding into Nigeria, a market with 100M+ internet users and a growing appetite for online learning. The board has approved a R1M budget for the first 90 days.',
    brief:
      'Write the go-to-market strategy for the Nigeria launch. Cover market entry channel selection, localisation requirements, pricing strategy, and the 90-day execution plan.',
    deliverables: [
      'A market assessment: Nigeria\'s edtech landscape, key competitors, and the opportunity size',
      'Channel strategy: the 2-3 acquisition channels for the first 90 days and why',
      'Localisation requirements: pricing in Naira, content adaptation, payment method integration, and cultural considerations',
      'A 90-day execution plan with milestones, budget allocation, and success metrics',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Nigeria is not South Africa. Data costs, payment infrastructure, and content preferences are different. Show that you would research the market, not just copy the SA playbook.',
    rubric: [
      { key: 'market', label: 'Market Assessment', description: 'Is the Nigeria market analysis specific and grounded in real dynamics?', weight: 25 },
      { key: 'channels', label: 'Channel Strategy', description: 'Are the chosen channels appropriate for Nigeria\'s digital landscape?', weight: 25 },
      { key: 'localisation', label: 'Localisation Depth', description: 'Does the candidate go beyond translation to genuine market adaptation?', weight: 25 },
      { key: 'execution', label: 'Execution Plan', description: 'Is the 90-day plan specific enough to execute and measure?', weight: 25 },
    ],
    skillsProven: ['Go-to-market strategy', 'Market expansion', 'Localisation', 'Growth strategy'],
    relatedRoadmapIds: ['digital-marketing-specialist'],
  },

  {
    id: 'bug-fix-todo-app',
    categoryId: 'software-development',
    topicId: 'debug-fix',
    level: 'beginner',
    title: 'Fix a Bug in a Sample To-Do App',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Diagnose and fix a state management bug in a React to-do app.',
    scenario:
      'A small React to-do app has a bug: when a user deletes a task, the wrong task is sometimes removed. The root cause is that list items use array index as a React key instead of a stable ID. A real junior developer fix would not just swap the key, it would also reason about why this bug appeared.',
    brief:
      'You do not need a real repo to complete this task. Work from the following snippet and write a fixed version plus an explanation.',
    deliverables: [
      'A corrected code snippet (paste as a Markdown code block)',
      'A 3 to 5 sentence explanation of the root cause, written so a non-technical stakeholder could follow',
      'One additional safeguard (a test, a lint rule, or a code review checklist item) that would prevent a similar bug in future',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Buggy code:\n```jsx\n{tasks.map((task, index) => (\n  <li key={index} onClick={() => deleteTask(index)}>{task.title}</li>\n))}\n```\nAssume `deleteTask(id)` exists and takes a task id.',
    rubric: [
      { key: 'correctness', label: 'Correctness', description: 'Does the fix actually resolve the bug, not just move it?', weight: 35 },
      { key: 'explanation', label: 'Root Cause Explanation', description: 'Is the explanation accurate and accessible to a non-technical reader?', weight: 30 },
      { key: 'safeguard', label: 'Prevention', description: 'Is the proposed safeguard practical and likely to catch the class of bug?', weight: 20 },
      { key: 'craft', label: 'Code Craft', description: 'Is the corrected code clean, idiomatic, and not over-engineered?', weight: 15 },
    ],
    skillsProven: ['React debugging', 'JavaScript fundamentals', 'Technical communication', 'Code quality'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'rest-api-spec-library',
    categoryId: 'software-development',
    topicId: 'api-design',
    level: 'intermediate',
    title: 'Design a REST API for a Local Library',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write a concise API spec for a library borrowing system.',
    scenario:
      'A public library wants a small internal system so staff can look up members, check out books, and see who currently holds which book. There are about 3,000 members and 12,000 books. The backend will be built by a single junior developer.',
    brief:
      'Produce a clear, minimal REST API spec. You do not need to write any implementation code. The goal is to demonstrate that you can scope an API, choose the right resources, and think about edge cases.',
    deliverables: [
      'A list of resources and the endpoints for each (method, path, one-line purpose)',
      'Request and response examples (JSON) for at least 3 key endpoints',
      'Two edge cases you deliberately designed around (for example, what happens if someone tries to check out a book that is already out)',
      'One thing you intentionally left out of v1 and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Over-specification is a failure mode here. Aim for crisp and minimal, not exhaustive.',
    rubric: [
      { key: 'modeling', label: 'Resource Modeling', description: 'Are the resources and endpoints well-chosen and minimal?', weight: 30 },
      { key: 'examples', label: 'Payload Examples', description: 'Are the JSON examples realistic and complete?', weight: 20 },
      { key: 'edge-cases', label: 'Edge Case Thinking', description: 'Are the edge cases meaningful and handled thoughtfully?', weight: 25 },
      { key: 'scoping', label: 'Scoping Judgment', description: 'Does the "left out of v1" item show good product judgment?', weight: 25 },
    ],
    skillsProven: ['API design', 'System thinking', 'Technical writing', 'Product scoping'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'debug-memory-leak',
    categoryId: 'software-development',
    topicId: 'debug-fix',
    level: 'intermediate',
    title: 'Memory Leak in an Event Listener',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Diagnose and fix a React memory leak caused by un-garbage-collected DOM nodes.',
    scenario:
      'A single-page application is slowing down heavily after users navigate back and forth between a specific dashboard view. The browser profiler shows a massive spike in detached DOM nodes and event listeners that are never garbage collected.',
    brief:
      'You are provided with a React component snippet containing a custom window event listener inside a `useEffect`. The cleanup function is missing. Write the corrected component, explain exactly why the memory leak occurred, and describe how to verify the fix using Chrome DevTools.',
    deliverables: [
      'The corrected React component snippet with proper cleanup',
      'A technical explanation of why detached event listeners cause memory leaks in SPAs',
      'A step-by-step guide on how to verify the leak is fixed using the Memory tab in Chrome DevTools',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on the `useEffect` lifecycle. A perfect fix ensures the listener is removed when the component unmounts.',
    rubric: [
      { key: 'correctness', label: 'Correct Fix', description: 'Is the `useEffect` cleanup function implemented correctly?', weight: 35 },
      { key: 'explanation', label: 'Root Cause Explanation', description: 'Is the explanation of the memory leak technically accurate?', weight: 35 },
      { key: 'devtools', label: 'DevTools Knowledge', description: 'Are the instructions for using the Chrome Profiler accurate and clear?', weight: 30 },
    ],
    skillsProven: ['React lifecycle', 'Memory management', 'Chrome DevTools', 'Performance debugging'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'debug-race-condition',
    categoryId: 'software-development',
    topicId: 'debug-fix',
    level: 'advanced',
    title: 'Race Condition in Async Data Fetching',
    difficulty: 'Advanced',
    estimatedHours: '3 to 4 hours',
    tagline: 'Fix a tricky race condition where stale network responses overwrite fresh data.',
    scenario:
      'A search input fetches autocomplete results as the user types. However, sometimes the results of an older, slower query overwrite the results of a newer, faster query, resulting in the UI showing the wrong suggestions.',
    brief:
      'Diagnose the async race condition in the provided autocomplete component. Fix it by implementing request cancellation using the `AbortController` API. Explain why boolean flags (like `isMounted`) are inferior to true request cancellation.',
    deliverables: [
      'The corrected component utilizing `AbortController`',
      'An explanation of the race condition mechanism (how slower requests overtake faster ones)',
      'A brief defense of `AbortController` versus simple boolean flag checks',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This tests your understanding of asynchronous JavaScript behavior. Simply debouncing the input is not a complete fix; the race condition must be fundamentally solved.',
    rubric: [
      { key: 'correctness', label: 'Implementation', description: 'Is `AbortController` implemented and wired to the `fetch` call correctly?', weight: 40 },
      { key: 'explanation', label: 'Root Cause', description: 'Is the sequence of async events causing the bug clearly explained?', weight: 30 },
      { key: 'architecture', label: 'Cancellation vs Boolean', description: 'Does the candidate understand the network benefits of actual request abortion?', weight: 30 },
    ],
    skillsProven: ['Asynchronous JavaScript', 'AbortController API', 'Race condition debugging', 'Network performance'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'api-design-blog',
    categoryId: 'software-development',
    topicId: 'api-design',
    level: 'beginner',
    title: 'Design a Simple REST API for a Blog',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Define basic CRUD endpoints for a standard blog application.',
    scenario:
      'A client wants a basic headless CMS for their new tech blog. The system needs to support managing `Posts` and user `Comments` on those posts.',
    brief:
      'Write a minimal REST API specification for managing Posts and Comments. Focus heavily on using the correct HTTP verbs (GET, POST, PUT, DELETE) and standard URL routing conventions.',
    deliverables: [
      'A list of the necessary endpoints including the HTTP method and route path (e.g., `GET /posts`)',
      'A brief description of what each endpoint does',
      'A JSON payload example of what a successful `POST /posts` request body would look like',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'We are looking for standard REST conventions. Pay attention to how you nest routes (e.g., how do you fetch comments for a specific post?).',
    rubric: [
      { key: 'routing', label: 'REST Routing', description: 'Are the route paths semantic and correctly pluralized?', weight: 35 },
      { key: 'verbs', label: 'HTTP Verbs', description: 'Are the correct HTTP verbs used for CRUD operations?', weight: 35 },
      { key: 'payload', label: 'JSON Payload', description: 'Is the POST payload example realistic and properly formatted?', weight: 30 },
    ],
    skillsProven: ['REST conventions', 'HTTP verbs', 'API routing'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'api-design-pagination',
    categoryId: 'software-development',
    topicId: 'api-design',
    level: 'advanced',
    title: 'Design a Scalable Pagination API',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Solve a performance bottleneck by migrating from OFFSET to Cursor pagination.',
    scenario:
      'An internal API endpoint (`GET /transactions`) returns millions of financial records. The current implementation uses standard OFFSET/LIMIT pagination, but queries for page 50,000 are timing out because the database has to scan and discard hundreds of thousands of rows.',
    brief:
      'Design a cursor-based pagination strategy for the `/transactions` endpoint. Explain the API request/response schema changes required, how the client will interact with the cursor, and the database index implications.',
    deliverables: [
      'The updated API response schema showing the cursor meta-data (next_cursor, has_more, etc.)',
      'The SQL query structure (or ORM equivalent) demonstrating how the cursor is used in the `WHERE` clause',
      'An explanation of the performance benefits over OFFSET/LIMIT',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on the architectural shift. How do you handle sorting when using cursors? What happens if the cursor column (like timestamp) is not unique?',
    rubric: [
      { key: 'schema', label: 'API Schema', description: 'Is the cursor token clearly defined in the API response?', weight: 35 },
      { key: 'database', label: 'Database Logic', description: 'Is the SQL logic utilizing the cursor correctly to avoid full table scans?', weight: 35 },
      { key: 'tradeoffs', label: 'Trade-off Analysis', description: 'Does the candidate understand the complexities of cursor pagination (e.g., sorting non-unique fields)?', weight: 30 },
    ],
    skillsProven: ['API Performance', 'Cursor-based Pagination', 'Database Indexing', 'System Design'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'arch-url-shortener',
    categoryId: 'software-development',
    topicId: 'system-architecture-design',
    level: 'beginner',
    title: 'Architect a Simple URL Shortener',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a system that converts long URLs into short, shareable links.',
    scenario:
      'A marketing team needs a branded URL shortener. They expect about 10,000 new links to be created per day, but those links might be clicked millions of times.',
    brief:
      'Design the architecture for a URL shortener (like bit.ly). Focus on the database schema, the hashing algorithm used to generate the short code, and the read vs. write scaling strategy.',
    deliverables: [
      'A system architecture diagram (e.g., using Mermaid.js or a simple drawn diagram)',
      'The database schema definition for the `Link` table',
      'A brief explanation of why this system is read-heavy and how you would cache the redirects',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need to write the application code. Focus on the data flow: what happens when a user creates a link, and what happens when someone clicks it?',
    rubric: [
      { key: 'hashing', label: 'Hashing Logic', description: 'Is the short-code generation logic mathematically sound (e.g., base62)?', weight: 35 },
      { key: 'schema', label: 'Database Schema', description: 'Are the database tables properly indexed for fast lookups?', weight: 35 },
      { key: 'caching', label: 'Caching Strategy', description: 'Does the candidate correctly identify the need for a read cache (e.g., Redis)?', weight: 30 },
    ],
    skillsProven: ['System Design', 'Hashing Algorithms', 'Database Indexing', 'Caching Strategy'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'arch-chat-app',
    categoryId: 'software-development',
    topicId: 'system-architecture-design',
    level: 'intermediate',
    title: 'Architect a Scalable Chat Application',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a real-time messaging system using WebSockets and Pub/Sub.',
    scenario:
      'You are tasked with designing the backend for a new team collaboration tool (similar to Slack). Users need to send messages in real-time, see who is online, and view chat history.',
    brief:
      'Design the architecture for a real-time chat application. You must explain how WebSockets are managed across multiple load-balanced servers so that User A on Server 1 can message User B on Server 2.',
    deliverables: [
      'A system architecture diagram highlighting the API servers, WebSocket servers, and the Pub/Sub broker',
      'An explanation of how messages are routed between different WebSocket server instances',
      'The database schema for storing users, channels, and messages',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The core challenge here is horizontal scaling. A single WebSocket server cannot hold all connections. Show how you use a message broker (like Redis Pub/Sub or Kafka) to distribute messages.',
    rubric: [
      { key: 'websockets', label: 'Connection Management', description: 'Is the role of WebSocket servers clearly defined?', weight: 35 },
      { key: 'pubsub', label: 'Pub/Sub Routing', description: 'Does the architecture correctly route messages across server boundaries?', weight: 35 },
      { key: 'storage', label: 'Message Storage', description: 'Is the database schema optimized for retrieving chat history quickly?', weight: 30 },
    ],
    skillsProven: ['Real-time Architecture', 'WebSockets', 'Pub/Sub Messaging', 'Horizontal Scaling'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'arch-global-ecommerce',
    categoryId: 'software-development',
    topicId: 'system-architecture-design',
    level: 'advanced',
    title: 'Architect a Global E-commerce Platform',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Design a high-availability microservices architecture for Black Friday traffic.',
    scenario:
      'A global fashion retailer is preparing for Black Friday. Last year, their monolithic application crashed under the load. They have asked you to redesign the system using microservices to ensure the site stays up, even if the payment provider is temporarily slow.',
    brief:
      'Design a resilient microservices architecture. Focus on decoupling the Order Service from the Inventory Service and Payment Service. Explain how you will handle high-traffic spikes, eventual consistency, and graceful degradation.',
    deliverables: [
      'A comprehensive system diagram showing the API Gateway, microservices, databases, and message queues',
      'An explanation of how an order is processed asynchronously (e.g., using the Saga pattern or an event bus)',
      'A strategy for gracefully degrading the UI (e.g., disabling the recommendation engine) if under extreme load',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on fault tolerance. What happens if the Inventory service goes down right as a user clicks "Buy"? Your architecture must not drop the order.',
    rubric: [
      { key: 'decoupling', label: 'Service Decoupling', description: 'Are the microservices logically separated with their own databases?', weight: 30 },
      { key: 'async', label: 'Asynchronous Processing', description: 'Is a message queue used correctly to handle order fulfillment?', weight: 35 },
      { key: 'resilience', label: 'Fault Tolerance', description: 'Are strategies like retries, circuit breakers, or graceful degradation present?', weight: 35 },
    ],
    skillsProven: ['Microservices', 'Event-Driven Architecture', 'Fault Tolerance', 'System Resilience'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'db-model-blog',
    categoryId: 'software-development',
    topicId: 'database-modeling',
    level: 'beginner',
    title: 'Model a Simple Blog Schema',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design a standard relational schema with basic foreign keys.',
    scenario:
      'A publisher needs a database to power their new multi-author blog. They need to track Users, Posts, and Tags. A post can have multiple tags, and a tag can belong to multiple posts.',
    brief:
      'Design the SQL schema (tables, columns, and foreign keys) for the blog. You must correctly implement the many-to-many relationship between Posts and Tags.',
    deliverables: [
      'An Entity-Relationship Diagram (ERD) or a set of `CREATE TABLE` SQL statements',
      'The definition of the junction/join table connecting Posts and Tags',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not forget foreign key constraints. Ensure you define primary keys for all tables.',
    rubric: [
      { key: 'tables', label: 'Table Structure', description: 'Are the Users, Posts, and Tags tables defined with appropriate columns?', weight: 35 },
      { key: 'relations', label: 'Foreign Keys', description: 'Is the User-to-Post 1-to-many relationship correct?', weight: 30 },
      { key: 'manytomany', label: 'Many-to-Many', description: 'Is the junction table for Posts-Tags correctly defined with composite keys?', weight: 35 },
    ],
    skillsProven: ['SQL DDL', 'Foreign Keys', 'Many-to-Many Relationships', 'Entity-Relationship Modeling'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'db-model-ecommerce',
    categoryId: 'software-development',
    topicId: 'database-modeling',
    level: 'intermediate',
    title: 'Model an E-commerce Cart & Order System',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Design a schema that safely handles immutable financial records.',
    scenario:
      'You are building the database for an online store. The business needs to track Products, Shopping Carts (active sessions), and Final Orders. The critical business rule: if a Product price changes tomorrow, historical Final Orders from yesterday must not change.',
    brief:
      'Design the SQL schema for Products, Carts, CartItems, Orders, and OrderLineItems. Explain how you structure the tables to preserve historical pricing integrity.',
    deliverables: [
      'The schema definition (`CREATE TABLE` statements or an ERD) for the e-commerce entities',
      'A short explanation of how the `OrderLineItem` table differs from the `CartItem` table regarding price tracking',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A common mistake is relating an Order directly to a Product ID to look up the price. If the product price updates, the past order total will incorrectly change. How do you prevent this?',
    rubric: [
      { key: 'schema', label: 'Schema Design', description: 'Are the tables logically separated (Carts vs Orders)?', weight: 30 },
      { key: 'integrity', label: 'Historical Integrity', description: 'Does the schema copy the price to the OrderLineItem at checkout?', weight: 40 },
      { key: 'normalization', label: 'Normalization', description: 'Are the tables normalized without unnecessary data duplication?', weight: 30 },
    ],
    skillsProven: ['Data Integrity', 'Financial Modeling', 'Schema Normalization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'db-model-social-feed',
    categoryId: 'software-development',
    topicId: 'database-modeling',
    level: 'advanced',
    title: 'Model a High-Traffic Social Media Feed',
    difficulty: 'Advanced',
    estimatedHours: '4 to 5 hours',
    tagline: 'Design a database schema optimized for massive, read-heavy fan-out operations.',
    scenario:
      'You are the database architect for a new Twitter clone. When a celebrity with 5 million followers posts a new message, those 5 million users need to see it in their timeline immediately. A standard SQL `JOIN` on the followers table is taking 30 seconds to run.',
    brief:
      'Design the schema and architectural strategy for the social feed. You must decide whether to use a Push model (Fan-out on write), a Pull model (Fan-out on read), or a hybrid approach. Explain your database choice (e.g., PostgreSQL, Cassandra, or a Graph DB).',
    deliverables: [
      'The schema design for Users, Follows, and Posts',
      'An architectural diagram or explanation of the "Feed Generation" process (Push vs. Pull)',
      'A defense of the chosen indexing strategy to make reads as fast as possible',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'There is no single correct answer here. The test is on your ability to articulate the trade-offs of Fan-out on Read versus Fan-out on Write.',
    rubric: [
      { key: 'schema', label: 'Relational Graph', description: 'Is the Follows (adjacency list) schema correctly designed?', weight: 30 },
      { key: 'fanout', label: 'Fan-out Strategy', description: 'Does the candidate understand the performance trade-offs of Push vs Pull feeds?', weight: 40 },
      { key: 'indexing', label: 'Indexing & Performance', description: 'Are appropriate indexes suggested for the read-heavy timeline queries?', weight: 30 },
    ],
    skillsProven: ['High-Performance Databases', 'Fan-out Patterns', 'Graph Modeling', 'Query Optimization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'cicd-basic-github-actions',
    categoryId: 'software-development',
    topicId: 'cicd-pipeline-setup',
    level: 'beginner',
    title: 'Create a Basic CI Workflow',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a GitHub Actions YAML file to automate testing and linting.',
    scenario:
      'A startup team is pushing broken code to the `main` branch because developers forget to run tests locally. They need a Continuous Integration (CI) pipeline that automatically checks every Pull Request.',
    brief:
      'Write a GitHub Actions workflow YAML file for a Node.js project. It should trigger on Pull Requests to `main`. It must install dependencies, run a linter, and run the test suite. If any step fails, the workflow must fail.',
    deliverables: [
      'The complete `.yml` workflow file',
      'An explanation of the difference between `npm install` and `npm ci` in a pipeline',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Ensure you are caching Node modules to speed up the workflow execution time. Speed matters in CI.',
    rubric: [
      { key: 'yaml', label: 'YAML Syntax', description: 'Is the workflow file correctly structured with triggers and steps?', weight: 40 },
      { key: 'npm-ci', label: 'Dependency Management', description: 'Does the candidate understand why `npm ci` is strictly better for CI environments?', weight: 30 },
      { key: 'caching', label: 'Pipeline Optimization', description: 'Is a dependency caching strategy implemented?', weight: 30 },
    ],
    skillsProven: ['GitHub Actions', 'Continuous Integration', 'YAML', 'Build Optimization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'cicd-multi-environment',
    categoryId: 'software-development',
    topicId: 'cicd-pipeline-setup',
    level: 'intermediate',
    title: 'Multi-Environment Deployment Pipeline',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Design a pipeline that deploys to Staging, then requires manual approval for Production.',
    scenario:
      'The company is maturing. They now have a `staging` environment and a `production` environment. Pushes to `main` should automatically deploy to staging, but deploying to production must require a manual click from the QA manager.',
    brief:
      'Design a multi-stage Continuous Deployment (CD) pipeline. Write the GitHub Actions (or GitLab CI) YAML that defines two deployment jobs. Explain how you manage environment-specific secrets (like database URLs).',
    deliverables: [
      'The multi-stage YAML file',
      'An explanation of how manual approval gates are configured in your chosen CI provider',
      'A description of how environment variables are securely injected into the build',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not hardcode secrets in your YAML. Show how you reference repository secrets based on the current environment.',
    rubric: [
      { key: 'stages', label: 'Multi-Stage YAML', description: 'Are the staging and production jobs correctly chained?', weight: 40 },
      { key: 'gates', label: 'Approval Gates', description: 'Is the manual approval process correctly implemented?', weight: 30 },
      { key: 'secrets', label: 'Secret Management', description: 'Are environment variables referenced securely?', weight: 30 },
    ],
    skillsProven: ['Continuous Deployment (CD)', 'Environment Management', 'Secret Handling', 'Release Gates'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'cicd-zero-downtime',
    categoryId: 'software-development',
    topicId: 'cicd-pipeline-setup',
    level: 'advanced',
    title: 'Zero-Downtime Deployment Strategy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Architect a deployment process where users never see a 502 Bad Gateway.',
    scenario:
      'The application serves hospitals 24/7. Currently, deploying a new version requires restarting the Node.js server, causing 10 seconds of downtime. This is unacceptable. The VP of Engineering wants a Zero-Downtime deployment strategy.',
    brief:
      'Architect a Zero-Downtime deployment process. You must choose between Blue-Green Deployment, Canary Releases, or Rolling Updates. Explain your choice, detail the infrastructure required (e.g., Load Balancers, container orchestration), and outline the rollback plan if the new version crashes immediately.',
    deliverables: [
      'An architectural diagram of the deployment strategy (e.g., showing the Load Balancer routing traffic between Blue and Green clusters)',
      'A defense of your chosen strategy over the alternatives',
      'A step-by-step description of the automated rollback trigger',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an architecture task. You do not need to write the specific bash scripts, but you must explain the conceptual flow of traffic during the switch-over.',
    rubric: [
      { key: 'strategy', label: 'Deployment Strategy', description: 'Is the chosen strategy (Blue-Green/Canary) logically sound for a high-availability app?', weight: 35 },
      { key: 'routing', label: 'Traffic Routing', description: 'Does the candidate understand how Load Balancers manage the switch-over?', weight: 35 },
      { key: 'rollback', label: 'Automated Rollback', description: 'Is there a clear mechanism for detecting failure and reverting traffic?', weight: 30 },
    ],
    skillsProven: ['Zero-Downtime Deployment', 'Blue-Green / Canary', 'Load Balancing', 'Site Reliability Engineering (SRE)'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'test-unit-utility',
    categoryId: 'software-development',
    topicId: 'testing-strategies',
    level: 'beginner',
    title: 'Write Unit Tests for Utility Functions',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a comprehensive test suite for a complex date-formatting utility.',
    scenario:
      'A teammate wrote a `formatRelativeDate(dateString)` function that returns "just now", "5 minutes ago", "yesterday", etc. However, it sometimes breaks on leap years and cross-timezone inputs. You need to write the tests to prove it.',
    brief:
      'Write a comprehensive Jest or Mocha test suite for the `formatRelativeDate` function. Focus on testing the edge cases (leap years, different timezones, invalid inputs) rather than just the happy path.',
    deliverables: [
      'The complete test suite code (e.g., `dateFormatter.test.js`)',
      'A short explanation of why it is important to mock the system clock (`Date.now()`) when testing time-relative functions',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume the function exists and you are just writing the tests. A good test suite should act as documentation for the function’s expected behavior.',
    rubric: [
      { key: 'coverage', label: 'Edge Case Coverage', description: 'Are edge cases like invalid strings and boundary dates tested?', weight: 40 },
      { key: 'mocking', label: 'Clock Mocking', description: 'Does the candidate correctly identify the need to mock the system clock?', weight: 30 },
      { key: 'readability', label: 'Test Readability', description: 'Are the `describe` and `it` blocks clearly written?', weight: 30 },
    ],
    skillsProven: ['Unit Testing', 'Jest / Mocha', 'Edge Case Analysis', 'Mocking'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'test-integration-api',
    categoryId: 'software-development',
    topicId: 'testing-strategies',
    level: 'intermediate',
    title: 'Integration Testing an API Endpoint',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write tests that verify the database and API routing layers work together.',
    scenario:
      'You are testing a `POST /users` endpoint. This endpoint receives JSON, hashes the password, saves the user to the database, and returns a 201 Created status.',
    brief:
      'Write the integration test suite for the `POST /users` endpoint using Supertest and Jest. You must demonstrate how you mock or spin up a test database so you are not writing to the production database during tests.',
    deliverables: [
      'The integration test code snippet',
      'An explanation of the setup and teardown process (`beforeAll`, `afterEach`, etc.) for managing the test database state',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Integration tests should test the whole request lifecycle. Make sure to test what happens when the database throws a duplicate email error (e.g., returning a 409 Conflict).',
    rubric: [
      { key: 'lifecycle', label: 'Request Lifecycle', description: 'Does the test verify the HTTP status code and response payload?', weight: 35 },
      { key: 'database', label: 'Database State', description: 'Is the test database properly seeded and cleaned up between tests?', weight: 35 },
      { key: 'errors', label: 'Error Handling', description: 'Are failure states (like 400 Bad Request or 409 Conflict) explicitly tested?', weight: 30 },
    ],
    skillsProven: ['Integration Testing', 'Supertest', 'Database Mocking', 'API Validation'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'test-e2e-playwright',
    categoryId: 'software-development',
    topicId: 'testing-strategies',
    level: 'advanced',
    title: 'End-to-End Testing with Playwright',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Automate a complex user journey using a headless browser.',
    scenario:
      'Your company’s checkout flow has broken twice this month because frontend changes unexpectedly broke backend API calls. You need to write an automated End-to-End (E2E) test to prevent this.',
    brief:
      'Write a Playwright (or Cypress) test script that navigates to an e-commerce site, adds a specific item to the cart, proceeds to checkout, fills out the shipping form, and verifies the final confirmation screen.',
    deliverables: [
      'The complete Playwright/Cypress test script',
      'An explanation of how to handle asynchronous flakiness (e.g., waiting for network requests or animations to finish before clicking)',
      'A brief strategy on how you would handle testing payment processing without charging real credit cards',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'E2E tests are notoriously flaky. Your test code should demonstrate best practices for waiting for elements to be actionable, rather than relying on arbitrary `sleep(5000)` commands.',
    rubric: [
      { key: 'script', label: 'Test Script Flow', description: 'Does the script logically progress through the checkout flow?', weight: 35 },
      { key: 'flakiness', label: 'Handling Flakiness', description: 'Are network/UI waits used correctly instead of arbitrary timeouts?', weight: 35 },
      { key: 'payments', label: 'Payment Strategy', description: 'Does the candidate understand how to use test/sandbox payment tokens?', weight: 30 },
    ],
    skillsProven: ['End-to-End (E2E) Testing', 'Playwright / Cypress', 'Automated QA', 'Flakiness Mitigation'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'refactor-massive-function',
    categoryId: 'software-development',
    topicId: 'code-refactoring',
    level: 'beginner',
    title: 'Refactor a Massive Function',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Break down a 500-line monster function into clean, testable pieces.',
    scenario:
      'You have inherited an `exportUserData()` function. It fetches data, formats dates, applies business logic, generates a CSV, and emails it. It is impossible to test the date formatting without actually sending an email.',
    brief:
      'Refactor the provided conceptual function. Apply the Single Responsibility Principle (SRP) to break it out into several pure helper functions. Show how the main function orchestrates these helpers.',
    deliverables: [
      'The refactored code (main orchestrator function + helper functions)',
      'A brief explanation of how this refactor makes unit testing easier',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need an actual running environment. Focus on the logical boundaries. A pure function (data in, data out) is much easier to test than a function with side effects.',
    rubric: [
      { key: 'srp', label: 'Single Responsibility', description: 'Are the helper functions strictly separated by concern?', weight: 40 },
      { key: 'pure', label: 'Pure Functions', description: 'Are the data-transformation functions free of side effects (like emailing)?', weight: 35 },
      { key: 'orchestration', label: 'Orchestration', description: 'Is the main function clean and easy to read?', weight: 25 },
    ],
    skillsProven: ['Single Responsibility Principle (SRP)', 'Pure Functions', 'Code Readability', 'Testing preparation'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'refactor-composition',
    categoryId: 'software-development',
    topicId: 'code-refactoring',
    level: 'intermediate',
    title: 'Replace Inheritance with Composition',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Fix a fragile class hierarchy that has grown out of control.',
    scenario:
      'A game backend uses deep Object-Oriented inheritance: `class FlyingSwimmingEnemy extends SwimmingEnemy extends Enemy`. Now, the designers want a `FlyingSwimmingShootingEnemy`. The inheritance tree is breaking down.',
    brief:
      'Refactor the class hierarchy to use Composition over Inheritance. Create separate behaviors (e.g., `canFly`, `canSwim`, `canShoot`) and compose them into the final entity.',
    deliverables: [
      'The refactored code showing the behaviors (traits/mixins/interfaces) and the composed entity',
      'An explanation of why the "Gorilla Banana" problem (fragile base class) makes deep inheritance dangerous',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Use modern syntax (e.g., JavaScript factory functions, or TypeScript interfaces/mixins). The goal is flat architecture, not deep trees.',
    rubric: [
      { key: 'composition', label: 'Composition Implementation', description: 'Is the code correctly using composition instead of `extends`?', weight: 40 },
      { key: 'flexibility', label: 'Code Flexibility', description: 'Is it easy to add a new behavior without rewriting base classes?', weight: 35 },
      { key: 'theory', label: 'Theory Comprehension', description: 'Does the candidate clearly explain the pitfalls of deep inheritance?', weight: 25 },
    ],
    skillsProven: ['Composition over Inheritance', 'Design Patterns', 'Object-Oriented Programming (OOP)', 'Code Architecture'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'refactor-monolith-microservice',
    categoryId: 'software-development',
    topicId: 'code-refactoring',
    level: 'advanced',
    title: 'Refactor a Legacy Monolith (Strangler Fig)',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a plan to safely extract a microservice from a running monolith.',
    scenario:
      'Your company has a massive 10-year-old Ruby on Rails monolith. The `Billing` module is slowing down the entire app. Management wants to extract `Billing` into its own Go microservice without taking the site offline.',
    brief:
      'Design a migration plan using the Strangler Fig pattern. Explain how you will route traffic, migrate the database safely, and handle the transition period where both systems must remain in sync.',
    deliverables: [
      'An architectural diagram showing the routing layer (API Gateway) intercepting traffic',
      'A step-by-step phased migration plan (Dark launch, Shadow traffic, Cut-over)',
      'A strategy for untangling the shared database (dual writes vs. eventual consistency)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The hardest part of microservice extraction is the data layer. You cannot just cut a table out of a shared database overnight. Focus on the database synchronization strategy.',
    rubric: [
      { key: 'pattern', label: 'Strangler Fig Pattern', description: 'Is the routing layer correctly designed to slowly siphon traffic?', weight: 35 },
      { key: 'database', label: 'Data Migration', description: 'Is the database untangling strategy safe and realistic?', weight: 40 },
      { key: 'safety', label: 'Rollback & Safety', description: 'Are shadow reads/writes used to verify the new service before cut-over?', weight: 25 },
    ],
    skillsProven: ['Strangler Fig Pattern', 'Microservices Extraction', 'Database Migration', 'Legacy System Modernization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'sec-patch-xss',
    categoryId: 'software-development',
    topicId: 'security-vulnerability-patching',
    level: 'beginner',
    title: 'Patch a Cross-Site Scripting (XSS) Vulnerability',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Fix a dangerous form that allows users to inject malicious scripts.',
    scenario:
      'A user profile page allows users to enter a "Bio". Currently, if a user enters `<script>alert("Hacked")</script>`, the browser executes it when anyone views their profile. This is a Stored XSS vulnerability.',
    brief:
      'You are provided with a vulnerable React component and an Express endpoint. Show how to patch this vulnerability on both the frontend (escaping HTML) and the backend (sanitizing input).',
    deliverables: [
      'The corrected React component code',
      'The corrected Express route code utilizing a sanitization library (like `dompurify` or `xss`)',
      'A brief explanation of why relying only on frontend validation is insecure',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Remember that React automatically escapes strings by default. To make this vulnerable, the original code used `dangerouslySetInnerHTML`. Explain why that was a bad idea and how to fix it.',
    rubric: [
      { key: 'frontend', label: 'Frontend Fix', description: 'Is `dangerouslySetInnerHTML` removed or safely handled?', weight: 35 },
      { key: 'backend', label: 'Backend Sanitization', description: 'Is the data sanitized before it is saved to the database?', weight: 35 },
      { key: 'theory', label: 'Security Theory', description: 'Does the candidate understand that the backend cannot trust the client?', weight: 30 },
    ],
    skillsProven: ['Cross-Site Scripting (XSS)', 'React Security', 'Backend Sanitization', 'OWASP'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'sec-patch-sql-injection',
    categoryId: 'software-development',
    topicId: 'security-vulnerability-patching',
    level: 'intermediate',
    title: 'Patch a SQL Injection Vulnerability',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Rewrite dangerous raw SQL queries using parameterized statements.',
    scenario:
      'A legacy Node.js application searches for users by username. The query is written as: `db.query("SELECT * FROM users WHERE username = \'" + req.body.username + "\'")`. A malicious user just dropped the users table using `\' OR 1=1; DROP TABLE users; --`.',
    brief:
      'Rewrite the vulnerable database interaction. You can either use parameterized queries with the raw driver (e.g., `pg` or `mysql2`), or implement an ORM (like Prisma or Sequelize) to handle escaping automatically.',
    deliverables: [
      'The patched code snippet showing the secure database query',
      'An explanation of exactly how the malicious payload (`\' OR 1=1; DROP TABLE users; --`) manipulated the original query string',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The goal is to prove you understand parameterized queries. Simply writing a regex to block semicolons is not an acceptable solution.',
    rubric: [
      { key: 'parameterization', label: 'Parameterized Query', description: 'Is the query correctly parameterized to prevent injection?', weight: 40 },
      { key: 'explanation', label: 'Attack Breakdown', description: 'Is the explanation of the attack payload accurate?', weight: 35 },
      { key: 'best-practice', label: 'Best Practices', description: 'Does the candidate rely on standard drivers/ORMs rather than custom regex?', weight: 25 },
    ],
    skillsProven: ['SQL Injection Prevention', 'Database Security', 'Parameterized Queries'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'sec-patch-csrf-rate-limit',
    categoryId: 'software-development',
    topicId: 'security-vulnerability-patching',
    level: 'advanced',
    title: 'Secure an App against CSRF & Rate Limiting Attacks',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Defend a critical API from automated brute-force attacks and cross-site forgery.',
    scenario:
      'Your banking application has two major flaws. First, attackers are brute-forcing the `/login` endpoint with thousands of requests per second. Second, the `/transfer-funds` endpoint is vulnerable to Cross-Site Request Forgery (CSRF) because it relies solely on session cookies.',
    brief:
      'Design the security architecture to fix both issues. Implement a Rate Limiter for the login endpoint (e.g., using Redis) and explain how you would implement Anti-CSRF tokens (or SameSite cookie attributes) for the transfer endpoint.',
    deliverables: [
      'A code snippet or pseudo-code showing a Redis-backed rate limiter middleware for the login route',
      'An explanation of how an Anti-CSRF token lifecycle works (generation, delivery, validation)',
      'A defense of using `SameSite=Strict` cookies versus traditional CSRF tokens',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an advanced architectural security task. You need to understand how session cookies are sent by the browser implicitly, and how to stop attackers from abusing that.',
    rubric: [
      { key: 'rate-limiting', label: 'Rate Limiting', description: 'Is the rate limiting logic (e.g., IP tracking in Redis) sound?', weight: 35 },
      { key: 'csrf-tokens', label: 'CSRF Protection', description: 'Is the Anti-CSRF token or SameSite cookie logic correctly explained?', weight: 35 },
      { key: 'architecture', label: 'Security Trade-offs', description: 'Does the candidate understand the UX trade-offs of aggressive rate limiting?', weight: 30 },
    ],
    skillsProven: ['CSRF Protection', 'Rate Limiting', 'Redis', 'Session Security', 'OWASP'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'perf-n-plus-one',
    categoryId: 'software-development',
    topicId: 'backend-performance',
    level: 'beginner',
    title: 'Fix an N+1 Query Problem',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Optimize a hidden loop that is crushing your database.',
    scenario:
      'An API endpoint `GET /articles` fetches the latest 50 articles. For each article, the ORM runs a separate query to fetch the author\'s name. This results in 51 database queries for a single API request.',
    brief:
      'Identify the N+1 query in the provided code snippet. Rewrite the database logic to use a SQL `JOIN` or your ORM\'s "eager loading" feature so that it only takes a maximum of 2 queries to fetch all the data.',
    deliverables: [
      'The optimized code snippet',
      'An explanation of why the N+1 problem causes severe performance degradation as traffic scales',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'If using Prisma, look into `include`. If using TypeORM, look into `relations`. If using raw SQL, write a `LEFT JOIN`.',
    rubric: [
      { key: 'solution', label: 'Eager Loading', description: 'Is the N+1 query successfully reduced to 1 or 2 queries?', weight: 40 },
      { key: 'theory', label: 'Performance Theory', description: 'Does the candidate understand the latency cost of network round-trips to the DB?', weight: 35 },
      { key: 'readability', label: 'Code Cleanliness', description: 'Is the optimized code still easy to read?', weight: 25 },
    ],
    skillsProven: ['N+1 Query Resolution', 'Database Joins', 'ORM Eager Loading', 'Latency Optimization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'perf-redis-cache',
    categoryId: 'software-development',
    topicId: 'backend-performance',
    level: 'intermediate',
    title: 'Implement Redis Caching',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Speed up a slow 3rd-party API response using an in-memory cache.',
    scenario:
      'Your app displays live stock prices fetched from an external API. The external API takes 2 seconds to respond and limits you to 100 requests per minute. Your app receives 500 requests per minute.',
    brief:
      'Implement a caching layer using Redis. If a stock price was fetched in the last 15 seconds, serve it from Redis. Otherwise, fetch it from the external API, save it to Redis with an expiration (TTL), and return it.',
    deliverables: [
      'The caching middleware/service code using a Redis client',
      'An explanation of how TTL (Time To Live) prevents stale data',
      'What happens if the Redis server crashes? Explain your fallback strategy.',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good cache implementation should be invisible to the end user (except that it is much faster). Make sure you handle cache misses correctly.',
    rubric: [
      { key: 'implementation', label: 'Cache Logic', description: 'Is the Check -> Miss -> Fetch -> Save flow implemented correctly?', weight: 40 },
      { key: 'ttl', label: 'Cache Invalidation', description: 'Is a TTL correctly set to ensure data freshness?', weight: 30 },
      { key: 'fallback', label: 'Resilience', description: 'Does the app gracefully fall back to the slow API if Redis is down?', weight: 30 },
    ],
    skillsProven: ['Redis', 'Caching Strategies', 'API Rate Limit Mitigation', 'Fault Tolerance'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'perf-memory-leak',
    categoryId: 'software-development',
    topicId: 'backend-performance',
    level: 'advanced',
    title: 'Profile and Fix a Memory Leak',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Stop a Node.js server from continuously crashing out of memory.',
    scenario:
      'A Node.js worker process processes CSV files. Every time a 100MB CSV file is processed, the server\'s RAM usage increases by 100MB and never goes down. Eventually, the container hits its 1GB limit and is killed by Kubernetes (OOMKilled).',
    brief:
      'Diagnose the conceptual memory leak. You are given a code snippet that reads the entire file into an array using `fs.readFileSync`. Rewrite the logic to use Node.js Streams so it can process a 10GB file using only 50MB of RAM.',
    deliverables: [
      'The refactored code using `fs.createReadStream` and a streaming CSV parser',
      'An explanation of how Garbage Collection in V8 works, and why the original code prevented it',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Streams are one of the most powerful but misunderstood features of Node.js. Your goal is to process the file chunk by chunk, without holding the whole thing in memory.',
    rubric: [
      { key: 'streams', label: 'Stream Implementation', description: 'Is the code correctly piping the read stream to a parser?', weight: 40 },
      { key: 'memory', label: 'Memory Complexity', description: 'Does the candidate prove the new solution has O(1) memory complexity?', weight: 35 },
      { key: 'gc', label: 'Garbage Collection', description: 'Is the explanation of V8 memory management accurate?', weight: 25 },
    ],
    skillsProven: ['Node.js Streams', 'Memory Profiling', 'Garbage Collection', 'Large Data Processing'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'async-promise-all',
    categoryId: 'software-development',
    topicId: 'async-processing',
    level: 'beginner',
    title: 'Optimize Sequential API Calls',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Fix a dashboard that takes 10 seconds to load because it fetches data one by one.',
    scenario:
      'A dashboard needs data from 3 different microservices: User Profile, Recent Orders, and Support Tickets. Currently, the code uses `await fetchProfile()`, then `await fetchOrders()`, then `await fetchTickets()`. Each takes 1 second, so the page takes 3 seconds to load.',
    brief:
      'Rewrite the code to fetch all 3 endpoints concurrently. Ensure that if the Support Tickets API fails, the User Profile and Recent Orders data are still returned to the frontend (with an error state for tickets).',
    deliverables: [
      'The optimized data-fetching code snippet',
      'An explanation of why `Promise.allSettled` is safer than `Promise.all` in this specific scenario',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The goal is to reduce the total network time from 3 seconds to roughly 1 second. Pay close attention to error handling.',
    rubric: [
      { key: 'concurrency', label: 'Concurrent Execution', description: 'Are the promises executed in parallel rather than sequentially?', weight: 40 },
      { key: 'resilience', label: 'Fault Tolerance', description: 'Does the code use `Promise.allSettled` (or catch blocks) to prevent total failure?', weight: 35 },
      { key: 'theory', label: 'Event Loop Knowledge', description: 'Can the candidate explain the difference between `all` and `allSettled`?', weight: 25 },
    ],
    skillsProven: ['Promises', 'Concurrency', 'Error Handling', 'API Orchestration'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'async-background-worker',
    categoryId: 'software-development',
    topicId: 'async-processing',
    level: 'intermediate',
    title: 'Offload a Heavy Task to a Background Worker',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Keep the main API thread unblocked when generating massive PDF reports.',
    scenario:
      'Users can click "Export Year-End Report". Generating the PDF takes 15 seconds of heavy CPU time. Currently, the API endpoint blocks the main thread, causing other users\' requests to time out.',
    brief:
      'Design a background job architecture to handle the PDF generation. Explain how the API will accept the request, delegate the work, and notify the user when the PDF is ready.',
    deliverables: [
      'An architectural diagram or explanation of the Job Queue (e.g., using Redis/BullMQ or AWS SQS)',
      'The code snippet for the API endpoint that enqueues the job and returns a `202 Accepted` status',
      'An explanation of how the frontend will know when the job is done (Polling vs. WebSockets)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not perform the PDF generation in the HTTP request handler. You must decouple the request from the processing.',
    rubric: [
      { key: 'decoupling', label: 'Task Decoupling', description: 'Is the heavy task successfully moved to a separate worker process?', weight: 35 },
      { key: 'queue', label: 'Message Queue', description: 'Is a robust queue system (Redis/SQS) utilized?', weight: 35 },
      { key: 'ux', label: 'Client Communication', description: 'Is a valid strategy proposed for notifying the client (polling, webhooks)?', weight: 30 },
    ],
    skillsProven: ['Background Jobs', 'Message Queues', 'Asynchronous APIs', 'Decoupling'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'async-event-driven',
    categoryId: 'software-development',
    topicId: 'async-processing',
    level: 'advanced',
    title: 'Design an Event-Driven Checkout Workflow',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Architect a distributed transaction using the Saga pattern.',
    scenario:
      'When a user clicks "Buy", 4 things must happen: 1. Deduct Inventory, 2. Charge Credit Card, 3. Generate Shipping Label, 4. Send Confirmation Email. If step 2 fails, step 1 must be reversed.',
    brief:
      'Design an Event-Driven Architecture (EDA) to handle this checkout flow across 4 independent microservices. Explain how you will handle failures and rollbacks using the Saga pattern (Choreography or Orchestration).',
    deliverables: [
      'An architectural diagram showing the event broker (e.g., Kafka or RabbitMQ) and the message topics',
      'A detailed explanation of the "Compensating Transaction" if the credit card is declined after inventory was deducted',
      'A defense of your choice between Event Choreography (decentralized) vs. Orchestration (central controller)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an advanced distributed systems problem. You cannot use a standard SQL database transaction (`BEGIN...COMMIT`) because the data lives in different microservices.',
    rubric: [
      { key: 'eda', label: 'Event-Driven Design', description: 'Are the microservices communicating asynchronously via events?', weight: 35 },
      { key: 'saga', label: 'Saga Pattern', description: 'Are compensating transactions clearly defined for failure states?', weight: 40 },
      { key: 'tradeoffs', label: 'Architecture Trade-offs', description: 'Is the defense of Choreography vs Orchestration sound?', weight: 25 },
    ],
    skillsProven: ['Event-Driven Architecture', 'Saga Pattern', 'Distributed Transactions', 'Kafka / RabbitMQ'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'auth-jwt-lifecycle',
    categoryId: 'software-development',
    topicId: 'auth-authorization',
    level: 'beginner',
    title: 'Implement a Secure JWT Lifecycle',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design a stateless authentication flow using Access and Refresh tokens.',
    scenario:
      'You are building the auth system for a Single Page Application (SPA). You have decided to use JSON Web Tokens (JWT). A common mistake is storing a long-lived JWT in `localStorage`, which is vulnerable to XSS attacks.',
    brief:
      'Design a secure token lifecycle. Explain the difference between an Access Token and a Refresh Token. Describe exactly where the frontend should store each token, and how the backend should validate them.',
    deliverables: [
      'An architectural explanation of the Access/Refresh token flow',
      'Code snippets for setting the Refresh Token as an `HttpOnly` cookie in Express/Node.js',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on the storage mechanisms. Why is `HttpOnly` critical for the Refresh Token, and why is it acceptable to keep a short-lived Access Token in JavaScript memory?',
    rubric: [
      { key: 'lifecycle', label: 'Token Lifecycle', description: 'Does the candidate correctly explain how Refresh Tokens generate new Access Tokens?', weight: 40 },
      { key: 'storage', label: 'Secure Storage', description: 'Is the `HttpOnly` cookie strategy correctly implemented for the Refresh Token?', weight: 35 },
      { key: 'xss', label: 'XSS Mitigation', description: 'Does the candidate understand why `localStorage` is dangerous for long-lived tokens?', weight: 25 },
    ],
    skillsProven: ['JWT (JSON Web Tokens)', 'Stateless Authentication', 'Cookie Security', 'XSS Mitigation'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'auth-rbac-middleware',
    categoryId: 'software-development',
    topicId: 'auth-authorization',
    level: 'intermediate',
    title: 'Build Role-Based Access Control (RBAC)',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write Express middleware to protect routes based on user roles.',
    scenario:
      'Your platform has 3 user roles: `USER`, `EDITOR`, and `ADMIN`. You need to ensure that only `EDITOR`s and `ADMIN`s can access the `POST /articles` route, but only an `ADMIN` can access the `DELETE /users` route.',
    brief:
      'Write a reusable authorization middleware function in Node.js/Express. It should accept an array of allowed roles and check it against the `req.user.role` property (which is populated by your authentication middleware).',
    deliverables: [
      'The `requireRoles` middleware code',
      'The Express router configuration showing how the middleware is applied to the protected routes',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The middleware must be generic. Do not hardcode the logic inside the route handler itself. Think about how you would scale this if a new `SUPER_ADMIN` role was added tomorrow.',
    rubric: [
      { key: 'middleware', label: 'Middleware Logic', description: 'Is the middleware correctly intercepting the request and returning a 403 Forbidden if unauthorized?', weight: 40 },
      { key: 'reusability', label: 'Reusability', description: 'Is the function generic enough to accept dynamic role arrays?', weight: 35 },
      { key: 'routing', label: 'Route Application', description: 'Is the middleware correctly chained in the Express route definition?', weight: 25 },
    ],
    skillsProven: ['Role-Based Access Control (RBAC)', 'Express Middleware', 'Authorization Logic'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'auth-oauth-flow',
    categoryId: 'software-development',
    topicId: 'auth-authorization',
    level: 'advanced',
    title: 'Architect an OAuth 2.0 Integration',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Implement "Login with Google" securely using the Authorization Code flow.',
    scenario:
      'Your users are tired of remembering passwords. Management wants to add a "Login with Google" button. You cannot use a pre-built library like Passport.js; you must orchestrate the raw OAuth 2.0 flow yourself to prove you understand it.',
    brief:
      'Architect the OAuth 2.0 Authorization Code flow. Document the exact HTTP requests that happen between the User, your Backend, and the Google Authorization Server. Pay special attention to the `state` parameter.',
    deliverables: [
      'A sequence diagram (or detailed step-by-step list) of the OAuth 2.0 flow',
      'An explanation of the `state` parameter and how it prevents CSRF attacks during the OAuth redirect',
      'A description of how you link the incoming Google Identity to an existing user in your database',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not confuse Authentication with Authorization. We are using OAuth 2.0 (specifically OpenID Connect) to authenticate the user. Explain how the short-lived Authorization Code is exchanged for tokens.',
    rubric: [
      { key: 'flow', label: 'OAuth Flow', description: 'Is the 3-legged Authorization Code flow (Redirect -> Code -> Token Exchange) correctly documented?', weight: 40 },
      { key: 'state', label: 'CSRF Protection', description: 'Does the candidate correctly explain the purpose of the `state` parameter?', weight: 30 },
      { key: 'linking', label: 'Account Linking', description: 'Is there a logical strategy for matching the Google email/ID to the internal database?', weight: 30 },
    ],
    skillsProven: ['OAuth 2.0', 'OpenID Connect', 'Third-Party Authentication', 'Security Architecture'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'docker-optimize-image',
    categoryId: 'software-development',
    topicId: 'container-orchestration',
    level: 'beginner',
    title: 'Optimize a Node.js Dockerfile',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Shrink a bloated 1GB Docker image down to under 150MB.',
    scenario:
      'A junior developer wrote a `Dockerfile` for a simple Node.js Express API. The resulting image is 1.2GB because they used the `node:latest` base image, copied the `node_modules` folder from their local machine, and ran as the `root` user.',
    brief:
      'Rewrite the Dockerfile. Use a smaller base image (e.g., Alpine), utilize multi-stage builds to exclude development dependencies (`devDependencies`), and ensure the container runs as a non-root user for security.',
    deliverables: [
      'The optimized `Dockerfile`',
      'An explanation of why multi-stage builds are critical for compiled languages (or for trimming `devDependencies` in Node)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good Dockerfile should cache the `package.json` install step separately from the source code copy step to speed up rebuilds.',
    rubric: [
      { key: 'base-image', label: 'Base Image Selection', description: 'Is a lightweight base image (like Alpine or Slim) used?', weight: 35 },
      { key: 'security', label: 'Least Privilege', description: 'Is the container running as a non-root `node` user?', weight: 35 },
      { key: 'caching', label: 'Layer Caching', description: 'Are the `COPY package.json` and `RUN npm ci` steps placed before copying the rest of the source code?', weight: 30 },
    ],
    skillsProven: ['Docker', 'Container Optimization', 'Security (Non-Root)', 'Layer Caching'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'docker-compose-stack',
    categoryId: 'software-development',
    topicId: 'container-orchestration',
    level: 'intermediate',
    title: 'Define a Multi-Container Architecture',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write a `docker-compose.yml` to spin up a Node API, Postgres database, and Redis cache.',
    scenario:
      'A new developer joins your team. Currently, they have to manually install Node, PostgreSQL, and Redis on their laptop just to run the app locally. It takes them 2 days to set up their environment.',
    brief:
      'Write a `docker-compose.yml` file that defines three services: `api`, `db` (PostgreSQL), and `cache` (Redis). Ensure the `api` service waits for the `db` to be ready before starting, and define persistent volumes for the database so data isn\'t lost on restart.',
    deliverables: [
      'The complete `docker-compose.yml` file',
      'An explanation of how Docker Compose networks allow the `api` service to connect to the database using the hostname `db`',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Make sure to map the API port to the host machine so you can hit `localhost:3000` in your browser. Do not hardcode passwords in the compose file; use environment variables.',
    rubric: [
      { key: 'services', label: 'Service Definition', description: 'Are the API, DB, and Cache services defined correctly?', weight: 35 },
      { key: 'volumes', label: 'Data Persistence', description: 'Is a named volume attached to the PostgreSQL data directory?', weight: 35 },
      { key: 'depends', label: 'Startup Order', description: 'Does the API service use `depends_on` (or a wait script) for the DB?', weight: 30 },
    ],
    skillsProven: ['Docker Compose', 'Local Environment Setup', 'Container Networking', 'Persistent Volumes'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'k8s-deployment-strategy',
    categoryId: 'software-development',
    topicId: 'container-orchestration',
    level: 'advanced',
    title: 'Design a Kubernetes Deployment',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Write the manifests to deploy a highly available service to a Kubernetes cluster.',
    scenario:
      'The company is moving to Kubernetes (K8s). They need to deploy the main `billing-api` container. It needs to have 3 replicas running at all times across different nodes, scale up if CPU usage hits 80%, and safely recover if a pod crashes.',
    brief:
      'Write the Kubernetes YAML manifests for the `billing-api`. You will need a `Deployment`, a `Service` (ClusterIP), and an `HorizontalPodAutoscaler` (HPA). Define Liveness and Readiness probes to handle crashes.',
    deliverables: [
      'The K8s YAML manifests (`deployment.yaml`, `service.yaml`, `hpa.yaml`)',
      'An explanation of the difference between a Liveness Probe and a Readiness Probe',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You don\'t need a running K8s cluster; focus on the declarative syntax. Ensure your deployment specifies CPU/Memory limits so the HPA can function.',
    rubric: [
      { key: 'manifests', label: 'K8s Syntax', description: 'Are the Deployment, Service, and HPA YAML files valid and correctly linked via labels/selectors?', weight: 35 },
      { key: 'probes', label: 'Health Checks', description: 'Are Liveness (restart) and Readiness (traffic routing) probes correctly distinguished?', weight: 35 },
      { key: 'limits', label: 'Resource Management', description: 'Are resource requests and limits defined for the container?', weight: 30 },
    ],
    skillsProven: ['Kubernetes (K8s)', 'Pod Scaling (HPA)', 'Health Probes', 'Infrastructure as Code (IaC)'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'data-cleaning-messy-csv',
    categoryId: 'data',
    topicId: 'data-cleaning',
    level: 'beginner',
    title: 'Clean a Messy CSV and Write an Insights Memo',
    difficulty: 'Beginner',
    estimatedHours: '2 hours',
    tagline: 'Turn a realistic messy dataset into three insights a manager can act on.',
    scenario:
      'A retailer has exported 12 months of sales data to a CSV. The file has the usual real-world problems: inconsistent date formats, a few negative prices (returns), product names in different capitalisation, and some duplicate rows from a failed export retry.',
    brief:
      'You do not need the real file. Describe the cleaning steps you would take (in order, and why) and then write an insights memo as if you had already cleaned it and explored the data.',
    deliverables: [
      'A numbered list of cleaning steps with a one-sentence justification for each',
      'A short memo (under 300 words) with exactly 3 insights, each backed by a plausible number',
      'One question the data cannot answer on its own, and what you would need to go further',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Insights should surprise or inform a retail manager. "Sales went up in December" is not an insight.',
    rubric: [
      { key: 'cleaning', label: 'Cleaning Rigour', description: 'Are the cleaning steps correct, in a sensible order, and justified?', weight: 30 },
      { key: 'insights', label: 'Insight Quality', description: 'Are the three insights non-obvious, specific, and actionable?', weight: 35 },
      { key: 'numeracy', label: 'Numerical Plausibility', description: 'Do the numbers cited pass a sanity check?', weight: 15 },
      { key: 'limits', label: 'Awareness of Limits', description: 'Does the candidate know what the data cannot tell them?', weight: 20 },
    ],
    skillsProven: ['Data cleaning', 'Exploratory data analysis', 'Business communication', 'Analytical thinking'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'one-chart-dashboard',
    categoryId: 'data',
    topicId: 'data-visualisation',
    level: 'intermediate',
    title: 'The One-Chart Dashboard',
    difficulty: 'Intermediate',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design the single chart you would put on a CEO\'s weekly email.',
    scenario:
      'A food delivery startup\'s CEO gets a Monday morning email with the company\'s key metric. The data team has been arguing about what that metric and chart should be. Your job is to settle it.',
    brief:
      'Choose the single most useful chart for this role and weekly cadence. Defend the choice. You cannot add a "second chart for context" and call it one chart.',
    deliverables: [
      'The chart type and exact metric (for example: "Weekly active restaurants, line chart, last 12 weeks")',
      'Three decisions you made (axis choice, what to exclude, comparison baseline) and why',
      'The one thing you would say out loud when showing this chart to the CEO',
      'One alternative you considered and rejected, with your reasoning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Sketches are welcome as Markdown descriptions or links to an external image. The reasoning matters more than the visual.',
    rubric: [
      { key: 'choice', label: 'Metric Choice', description: 'Is the chosen metric the right one for a CEO\'s weekly view?', weight: 35 },
      { key: 'design', label: 'Chart Design', description: 'Are the design decisions (baseline, scale, exclusions) defensible?', weight: 30 },
      { key: 'narrative', label: 'Narrative', description: 'Does the one-line summary genuinely help the CEO act?', weight: 20 },
      { key: 'tradeoff', label: 'Trade-off Thinking', description: 'Is the rejected alternative real, and is the rejection well reasoned?', weight: 15 },
    ],
    skillsProven: ['Data visualisation', 'Metric selection', 'Executive communication', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'data-cleaning-healthcare-imputation',
    categoryId: 'data',
    topicId: 'data-cleaning',
    level: 'intermediate',
    title: 'Handling Missing Data in a Healthcare Dataset',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Decide which imputation strategy to use for each column and defend every choice.',
    scenario:
      'A hospital exported 18 months of patient admission records. The dataset has missing values scattered across columns like Age (3%), Blood Pressure (12%), Diagnosis Code (8%), and Admission Date (0.5%). Each column demands a different imputation strategy because the data is missing for different reasons.',
    brief:
      'You do not have the real file. Describe the imputation strategy you would use for each column type, justify why, and explain the risks of getting it wrong in a healthcare context.',
    deliverables: [
      'A table listing each column, its missing rate, your chosen strategy (mean, mode, forward-fill, drop, flag, or model-based), and a one-sentence justification',
      'An explanation of the difference between MCAR, MAR, and MNAR and which category each column likely falls into',
      'One risk specific to healthcare data where a bad imputation could lead to a dangerous clinical decision',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not default to "drop all rows with nulls". In healthcare, every row is a patient. Show that you understand the cost of discarding data versus the cost of inventing it.',
    rubric: [
      { key: 'strategy', label: 'Strategy Selection', description: 'Is the imputation strategy appropriate for each column type and missingness pattern?', weight: 35 },
      { key: 'theory', label: 'Missing Data Theory', description: 'Does the candidate correctly distinguish MCAR, MAR, and MNAR?', weight: 30 },
      { key: 'risk', label: 'Domain Awareness', description: 'Is the healthcare-specific risk credible and well-articulated?', weight: 20 },
      { key: 'clarity', label: 'Clarity', description: 'Is the submission structured, jargon-free where possible, and defensible?', weight: 15 },
    ],
    skillsProven: ['Data imputation', 'Missing data theory', 'Healthcare analytics', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'data-cleaning-deduplication-at-scale',
    categoryId: 'data',
    topicId: 'data-cleaning',
    level: 'advanced',
    title: 'Deduplication at Scale',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a fuzzy-matching deduplication pipeline for a CRM with 500K records.',
    scenario:
      'A sales team has been entering customer data manually for 5 years. The CRM now has 500,000 contact records, but an estimated 15% are duplicates caused by typos, abbreviations ("Pty Ltd" vs "Proprietary Limited"), merged company names, and inconsistent phone formats.',
    brief:
      'Design a deduplication pipeline. You must choose blocking/indexing strategies to avoid comparing every pair (O(n²)), select similarity metrics (Levenshtein, Jaro-Winkler, phonetic), and define merge rules for when two records are "probably the same".',
    deliverables: [
      'A pipeline diagram showing the stages: standardisation → blocking → comparison → classification → merging',
      'Your blocking strategy and why it reduces comparisons from 125 billion to a manageable number',
      'The similarity metrics you would use for name, email, phone, and address fields, with thresholds',
      'A merge policy: which record becomes the "golden record" and how conflicting field values are resolved',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a systems-thinking task. You do not need to write production code, but your pipeline must be specific enough that a developer could implement it.',
    rubric: [
      { key: 'pipeline', label: 'Pipeline Design', description: 'Are the stages logically ordered and well-defined?', weight: 25 },
      { key: 'blocking', label: 'Blocking Strategy', description: 'Does the blocking approach credibly reduce the comparison space?', weight: 25 },
      { key: 'matching', label: 'Similarity Metrics', description: 'Are the chosen metrics appropriate for each field type?', weight: 25 },
      { key: 'merging', label: 'Merge Policy', description: 'Is the golden record strategy defensible and conflict-aware?', weight: 25 },
    ],
    skillsProven: ['Record linkage', 'Fuzzy matching', 'Data quality at scale', 'Pipeline design'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'data-viz-choose-the-right-chart',
    categoryId: 'data',
    topicId: 'data-visualisation',
    level: 'beginner',
    title: 'Choose the Right Chart',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Given 5 different datasets, pick the correct chart type and explain why the alternatives are wrong.',
    scenario:
      'A junior analyst keeps defaulting to bar charts for everything. Their manager asks them to prove they understand when to use lines, bars, scatter plots, pie charts, and histograms by completing a short exercise.',
    brief:
      'For each of the 5 datasets described below, choose the best chart type and write one sentence explaining why each of the other common chart types would be a worse choice.',
    deliverables: [
      'Dataset 1: Monthly revenue over 24 months — your chart choice and reasoning',
      'Dataset 2: Market share of 5 competitors — your chart choice and reasoning',
      'Dataset 3: Correlation between ad spend and conversions — your chart choice and reasoning',
      'Dataset 4: Distribution of employee salaries — your chart choice and reasoning',
      'Dataset 5: Sales by region (10 regions, single quarter) — your chart choice and reasoning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'For each dataset, name the chart type first, then explain why it is better than at least 2 alternatives. "It looks nice" is not a reason.',
    rubric: [
      { key: 'selection', label: 'Chart Selection', description: 'Are all 5 chart types correctly chosen for the data type?', weight: 40 },
      { key: 'reasoning', label: 'Reasoning Quality', description: 'Are the rejections of alternatives specific and data-literate?', weight: 35 },
      { key: 'communication', label: 'Communication', description: 'Is the reasoning clear enough for a non-technical stakeholder?', weight: 25 },
    ],
    skillsProven: ['Data visualisation', 'Chart selection', 'Analytical reasoning', 'Communication'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'data-viz-executive-dashboard',
    categoryId: 'data',
    topicId: 'data-visualisation',
    level: 'advanced',
    title: 'Build a Dashboard Narrative',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a 4-chart executive dashboard where every chart answers a specific stakeholder question.',
    scenario:
      'A logistics company moves 50,000 parcels per day across South Africa. The COO wants a single dashboard she checks every Monday morning. She cares about: delivery speed, cost per parcel, regional bottlenecks, and customer complaints. Your job is to design the dashboard.',
    brief:
      'Design a 4-chart executive dashboard. Each chart must answer one of the COO\'s four questions. You must justify every design decision: chart type, time range, comparison baseline, colour coding, and what you deliberately excluded.',
    deliverables: [
      'A wireframe or detailed description of the 4-chart layout with the information hierarchy',
      'For each chart: the exact metric, chart type, time range, and comparison baseline',
      'Three deliberate design decisions (what you excluded, simplified, or highlighted) and why',
      'One alert or threshold rule you would add to make the dashboard proactive rather than reactive',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good dashboard is not 4 random charts. It is a story that flows top-left to bottom-right. Show that your layout has a reading order.',
    rubric: [
      { key: 'metrics', label: 'Metric Selection', description: 'Does each chart directly answer one of the four stakeholder questions?', weight: 30 },
      { key: 'design', label: 'Dashboard Design', description: 'Is the layout logical with clear information hierarchy and reading order?', weight: 25 },
      { key: 'decisions', label: 'Design Decisions', description: 'Are the exclusions and simplifications well-reasoned?', weight: 25 },
      { key: 'proactive', label: 'Proactive Alerting', description: 'Is the alert rule practical and tied to a meaningful threshold?', weight: 20 },
    ],
    skillsProven: ['Dashboard design', 'Executive communication', 'Information hierarchy', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 3: SQL Querying & Analysis ---
  {
    id: 'sql-basic-aggregation',
    categoryId: 'data',
    topicId: 'sql-querying',
    level: 'beginner',
    title: 'Write Basic Aggregation Queries',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'GROUP BY, HAVING, and ORDER BY on a sales table.',
    scenario:
      'An online retailer has a `sales` table with columns: `order_id`, `product_category`, `sale_amount`, `sale_date`, and `region`. The marketing team wants three quick answers before their Monday meeting.',
    brief:
      'Write three SQL queries against the sales table. You do not need a live database — write the SQL in code blocks and explain what each query returns.',
    deliverables: [
      'Query 1: Total revenue by product category, sorted highest to lowest',
      'Query 2: All regions where total revenue exceeds R500,000, using HAVING',
      'Query 3: The top 5 highest-revenue days in the last 90 days',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Write standard SQL (PostgreSQL or MySQL syntax). Include column aliases for readability.',
    rubric: [
      { key: 'syntax', label: 'SQL Syntax', description: 'Are the queries syntactically correct and executable?', weight: 35 },
      { key: 'logic', label: 'Query Logic', description: 'Do the queries produce the correct results for the stated questions?', weight: 35 },
      { key: 'readability', label: 'Readability', description: 'Are aliases, formatting, and comments used to make the SQL clear?', weight: 30 },
    ],
    skillsProven: ['SQL', 'GROUP BY', 'HAVING', 'Data aggregation'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'sql-window-functions',
    categoryId: 'data',
    topicId: 'sql-querying',
    level: 'intermediate',
    title: 'Window Functions for Ranking & Trends',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'ROW_NUMBER, LAG, and running totals on a time-series dataset.',
    scenario:
      'A SaaS company tracks monthly recurring revenue (MRR) per customer. The finance team wants to rank customers, calculate month-over-month growth per customer, and see a running total of total MRR.',
    brief:
      'Write three SQL queries using window functions. Assume a table `monthly_mrr` with columns: `customer_id`, `month`, `mrr_amount`.',
    deliverables: [
      'Query 1: Rank customers by their latest month MRR using ROW_NUMBER or RANK, partitioned by month',
      'Query 2: Calculate month-over-month MRR change per customer using LAG',
      'Query 3: A running total of company-wide MRR ordered by month',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Explain the difference between ROW_NUMBER, RANK, and DENSE_RANK in one sentence each.',
    rubric: [
      { key: 'window', label: 'Window Function Usage', description: 'Are OVER(), PARTITION BY, and ORDER BY used correctly?', weight: 40 },
      { key: 'lag', label: 'LAG / Running Total', description: 'Are LAG and SUM OVER correctly applied for trend analysis?', weight: 35 },
      { key: 'explanation', label: 'Conceptual Understanding', description: 'Does the candidate understand the ranking function differences?', weight: 25 },
    ],
    skillsProven: ['Window functions', 'Time-series SQL', 'Analytical queries', 'MRR analysis'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'sql-optimize-slow-query',
    categoryId: 'data',
    topicId: 'sql-querying',
    level: 'advanced',
    title: 'Optimize a Slow Query on a 50M-Row Table',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Rewrite a query, add indexes, and explain the EXPLAIN plan.',
    scenario:
      'A 50-million-row `transactions` table powers a financial dashboard. A query that joins `transactions` with `accounts` and filters by date range is taking 45 seconds. The DBA has asked you to fix it.',
    brief:
      'You are given the slow query and the current table schema (no indexes beyond the primary key). Rewrite the query for performance, propose the indexes you would add, and walk through what an EXPLAIN ANALYZE output would look like before and after your changes.',
    deliverables: [
      'The original slow query and your rewritten version with an explanation of each change',
      'The indexes you would create and why each one helps this specific query',
      'A walkthrough of a hypothetical EXPLAIN plan: what "Seq Scan" means vs "Index Scan" and how you would read the cost estimates',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume PostgreSQL. Focus on covering indexes, composite index column order, and the impact of WHERE clause selectivity.',
    rubric: [
      { key: 'rewrite', label: 'Query Rewrite', description: 'Does the rewritten query avoid unnecessary work (subqueries, functions on indexed columns)?', weight: 35 },
      { key: 'indexes', label: 'Index Strategy', description: 'Are the proposed indexes well-chosen with correct column order?', weight: 35 },
      { key: 'explain', label: 'EXPLAIN Literacy', description: 'Can the candidate read and interpret a query execution plan?', weight: 30 },
    ],
    skillsProven: ['Query optimisation', 'Database indexing', 'EXPLAIN plans', 'PostgreSQL performance'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },

  // --- Topic 4: Statistical Thinking ---
  {
    id: 'stats-descriptive-memo',
    categoryId: 'data',
    topicId: 'statistical-thinking',
    level: 'beginner',
    title: 'Descriptive Statistics Memo',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Calculate and interpret mean, median, mode, and standard deviation for a salary dataset.',
    scenario:
      'An HR manager asks you to summarise the salary distribution for 200 employees. She does not want formulas — she wants to understand what the numbers mean for her hiring budget.',
    brief:
      'Invent a plausible salary dataset (you may describe it rather than list 200 rows). Calculate the four descriptive statistics, then write a short memo interpreting them for a non-technical HR manager.',
    deliverables: [
      'The four statistics (mean, median, mode, standard deviation) with your calculations shown',
      'A 150-word memo interpreting what these numbers tell the HR manager about salary distribution and equity',
      'One visualization you would recommend to accompany the memo and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'If the mean is much higher than the median, that tells a story. Make sure your memo tells it.',
    rubric: [
      { key: 'calculation', label: 'Calculation Accuracy', description: 'Are the four statistics correctly calculated and internally consistent?', weight: 30 },
      { key: 'interpretation', label: 'Interpretation', description: 'Does the memo explain what the numbers mean in business terms, not just math terms?', weight: 40 },
      { key: 'visualization', label: 'Visualization Choice', description: 'Is the recommended chart appropriate for showing distribution?', weight: 30 },
    ],
    skillsProven: ['Descriptive statistics', 'Business communication', 'Data interpretation', 'HR analytics'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'stats-ab-test-hypothesis',
    categoryId: 'data',
    topicId: 'statistical-thinking',
    level: 'intermediate',
    title: 'Hypothesis Testing (A/B Test)',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Determine if a website change actually improved conversion, or if it was just noise.',
    scenario:
      'An e-commerce site ran an A/B test on their checkout button colour. Control (blue) had 1,200 conversions out of 15,000 visitors. Variant (green) had 1,350 conversions out of 15,000 visitors. The product manager is celebrating, but is the difference statistically significant?',
    brief:
      'Conduct a hypothesis test. State your null and alternative hypotheses, choose the right test, calculate the result, and write your recommendation to the product manager.',
    deliverables: [
      'The null and alternative hypotheses stated formally',
      'The statistical test you chose (z-test for proportions, chi-square, etc.) and why',
      'The test statistic, p-value, and your conclusion at α = 0.05',
      'A one-paragraph recommendation to the product manager in plain English',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Show your working. A p-value without the calculation behind it is not convincing. If you would not ship this change, say so and explain why.',
    rubric: [
      { key: 'hypotheses', label: 'Hypothesis Formulation', description: 'Are H₀ and H₁ correctly and formally stated?', weight: 25 },
      { key: 'test', label: 'Test Selection', description: 'Is the chosen statistical test appropriate for comparing two proportions?', weight: 25 },
      { key: 'calculation', label: 'Calculation', description: 'Is the p-value calculation correct and the conclusion consistent with it?', weight: 25 },
      { key: 'recommendation', label: 'Business Recommendation', description: 'Is the recommendation practical and honest about uncertainty?', weight: 25 },
    ],
    skillsProven: ['Hypothesis testing', 'A/B testing', 'Statistical significance', 'Business communication'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'stats-correlation-causation',
    categoryId: 'data',
    topicId: 'statistical-thinking',
    level: 'advanced',
    title: 'Correlation vs. Causation Case Study',
    difficulty: 'Advanced',
    estimatedHours: '3 to 4 hours',
    tagline: 'Tear apart a misleading business report that confuses correlation with causation.',
    scenario:
      'A consulting firm presents a report to a retail CEO claiming: "Stores that play jazz music see 23% higher average basket size. Recommendation: play jazz in all stores." The data is real, but the conclusion is dangerously wrong.',
    brief:
      'Write a critique of this report. Identify the logical flaw, propose at least 3 confounding variables, and design a study that could actually establish (or disprove) a causal relationship between music genre and basket size.',
    deliverables: [
      'A clear explanation of why correlation ≠ causation, using this specific example',
      'At least 3 plausible confounding variables that could explain the 23% difference',
      'A proposed experimental design (randomised controlled trial) that could test the causal claim',
      'One paragraph written as if you were advising the CEO directly',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The CEO is not a statistician. Your critique must be rigorous but your advice must be plain English.',
    rubric: [
      { key: 'flaw', label: 'Logical Flaw Identification', description: 'Is the correlation-causation fallacy clearly and correctly identified?', weight: 25 },
      { key: 'confounders', label: 'Confounding Variables', description: 'Are the proposed confounders plausible and specific to this scenario?', weight: 25 },
      { key: 'experiment', label: 'Experimental Design', description: 'Would the proposed RCT actually test the causal claim?', weight: 30 },
      { key: 'communication', label: 'Executive Communication', description: 'Is the CEO advice clear, respectful, and actionable?', weight: 20 },
    ],
    skillsProven: ['Causal inference', 'Experimental design', 'Critical thinking', 'Executive communication'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 5: Excel / Spreadsheet Modelling ---
  {
    id: 'excel-pivot-tables',
    categoryId: 'data',
    topicId: 'spreadsheet-modelling',
    level: 'beginner',
    title: 'Build a Sales Summary with Pivot Tables',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create pivot tables and basic formulas from raw transaction data.',
    scenario:
      'A small clothing retailer has 6 months of transaction data in a single spreadsheet tab. The store manager wants a summary showing total revenue by product category, average order value by month, and the top 10 best-selling items.',
    brief:
      'Describe (step by step) how you would build three pivot tables and one summary formula section from this raw data. You do not need the actual spreadsheet — describe the row/column/value configuration for each pivot table.',
    deliverables: [
      'Pivot Table 1 config: Total revenue by product category (rows, values, any filters)',
      'Pivot Table 2 config: Average order value by month',
      'Pivot Table 3 config: Top 10 items by quantity sold',
      'Three SUMIFS or AVERAGEIFS formulas you would place in a summary section, with the formula written out',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Write the pivot table configurations as if teaching a colleague. Include the exact field names you would drag into Rows, Columns, and Values.',
    rubric: [
      { key: 'pivots', label: 'Pivot Table Design', description: 'Are the three pivot tables correctly configured with appropriate aggregations?', weight: 40 },
      { key: 'formulas', label: 'Formula Accuracy', description: 'Are the SUMIFS/AVERAGEIFS formulas syntactically correct?', weight: 30 },
      { key: 'communication', label: 'Instructional Clarity', description: 'Could a spreadsheet beginner follow these instructions?', weight: 30 },
    ],
    skillsProven: ['Pivot tables', 'Excel formulas', 'Data summarisation', 'Spreadsheet design'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'excel-dynamic-pricing',
    categoryId: 'data',
    topicId: 'spreadsheet-modelling',
    level: 'intermediate',
    title: 'Dynamic Pricing Model',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a what-if model with data validation dropdowns and conditional formatting.',
    scenario:
      'A SaaS startup wants to model how changing their subscription price affects revenue. They currently have 5,000 customers at R199/month. They believe a 10% price increase will cause 3-8% churn, but are unsure.',
    brief:
      'Design a spreadsheet model (describe it in detail) that lets the CEO pick a price change percentage from a dropdown and instantly see projected revenue, churn impact, and break-even month.',
    deliverables: [
      'The model layout: which cells are inputs, which are calculations, and which are outputs',
      'The key formulas including the churn sensitivity calculation',
      'How you would use Data Validation dropdowns and Conditional Formatting to make it user-friendly',
      'A sensitivity table showing revenue at 5%, 10%, 15%, and 20% price increases with low/mid/high churn assumptions',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The CEO is the user. The model must be impossible to break by entering wrong values. Explain your defensive design choices.',
    rubric: [
      { key: 'model', label: 'Model Logic', description: 'Are the pricing, churn, and revenue formulas internally consistent?', weight: 35 },
      { key: 'usability', label: 'User Experience', description: 'Are dropdowns, formatting, and layout designed for a non-technical user?', weight: 30 },
      { key: 'sensitivity', label: 'Sensitivity Analysis', description: 'Does the sensitivity table cover a meaningful range of scenarios?', weight: 35 },
    ],
    skillsProven: ['Financial modelling', 'What-if analysis', 'Data validation', 'Spreadsheet UX'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'excel-monte-carlo',
    categoryId: 'data',
    topicId: 'spreadsheet-modelling',
    level: 'advanced',
    title: 'Monte Carlo Simulation in a Spreadsheet',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Simulate 1,000 outcomes for a product launch decision using RAND() and data tables.',
    scenario:
      'A startup is deciding whether to launch a new product. The fixed cost is R2M. Unit price, unit cost, and demand are all uncertain. The CEO wants to know: "What is the probability we lose money?"',
    brief:
      'Design a Monte Carlo simulation in a spreadsheet. Use RAND() to generate random draws from assumed distributions for price, cost, and demand. Run 1,000 iterations using a data table and calculate the probability of a loss.',
    deliverables: [
      'The model structure: input assumptions (distributions for price, cost, demand), the profit formula, and the simulation output area',
      'The exact formulas using RAND(), NORMINV (or equivalent) for generating random variables',
      'How you would use a one-variable Data Table to run 1,000 iterations',
      'The final output: probability of loss, expected profit, and a histogram description of the profit distribution',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is advanced spreadsheet work. Show that you understand why a single-point estimate is dangerous for a high-stakes decision.',
    rubric: [
      { key: 'simulation', label: 'Simulation Design', description: 'Is the Monte Carlo framework correctly structured with random inputs and deterministic calculations?', weight: 30 },
      { key: 'distributions', label: 'Distribution Choice', description: 'Are the chosen distributions reasonable for each uncertain variable?', weight: 25 },
      { key: 'execution', label: 'Data Table Technique', description: 'Is the Data Table approach correctly explained for generating 1,000 iterations?', weight: 25 },
      { key: 'interpretation', label: 'Decision Support', description: 'Does the output actually help the CEO make a go/no-go decision?', weight: 20 },
    ],
    skillsProven: ['Monte Carlo simulation', 'Risk analysis', 'Advanced Excel', 'Decision modelling'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 6: Python for Data Analysis ---
  {
    id: 'python-explore-dataset',
    categoryId: 'data',
    topicId: 'python-data-analysis',
    level: 'beginner',
    title: 'Explore a Dataset with pandas',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Load, inspect, filter, and summarise a CSV using pandas fundamentals.',
    scenario:
      'You have been given a CSV file of 10,000 e-commerce orders. Your manager wants a quick exploration before the team decides what analysis to pursue.',
    brief:
      'Write a Python script using pandas that loads the CSV, inspects its shape and data types, handles any obvious issues, and produces a summary. You do not need the actual file — write the code as if the CSV exists at `orders.csv`.',
    deliverables: [
      'The Python script covering: loading, `.info()`, `.describe()`, null checks, and at least 3 filtered views',
      'A markdown summary of what you found (as if reporting to your manager)',
      'One follow-up question your exploration raised that requires deeper analysis',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Write production-quality pandas code. Use method chaining where it improves readability. Comments should explain *why*, not *what*.',
    rubric: [
      { key: 'code', label: 'pandas Fundamentals', description: 'Are read_csv, info, describe, filtering, and groupby used correctly?', weight: 35 },
      { key: 'exploration', label: 'Exploration Quality', description: 'Do the filtered views reveal something interesting rather than being arbitrary?', weight: 30 },
      { key: 'communication', label: 'Summary Communication', description: 'Is the summary actionable and honest about what the data does and does not show?', weight: 35 },
    ],
    skillsProven: ['pandas', 'Exploratory data analysis', 'Python scripting', 'Data communication'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'python-merge-reshape',
    categoryId: 'data',
    topicId: 'python-data-analysis',
    level: 'intermediate',
    title: 'Merge, Reshape, and Aggregate Multi-Source Data',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Combine 3 CSVs with different schemas into one clean analysis-ready DataFrame.',
    scenario:
      'A retail chain stores its data across three separate systems: `customers.csv` (customer demographics), `orders.csv` (order headers), and `order_items.csv` (line items with product and price). Your analyst needs a single, denormalized DataFrame to work from.',
    brief:
      'Write the pandas code to load, merge, reshape, and aggregate these three files into one clean DataFrame. Handle schema mismatches (different column names, date formats, missing keys).',
    deliverables: [
      'The complete Python script showing the merge strategy (inner, left, etc.) and join keys',
      'How you handled schema mismatches (column renames, type casting, date parsing)',
      'The final aggregated output: revenue per customer, with at least 2 derived columns',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Show that you understand the difference between inner, left, and outer joins. A wrong join type silently drops data.',
    rubric: [
      { key: 'merging', label: 'Merge Strategy', description: 'Are the join types and keys chosen correctly to avoid data loss?', weight: 35 },
      { key: 'cleaning', label: 'Schema Handling', description: 'Are column renames, type casts, and null handling done correctly?', weight: 30 },
      { key: 'aggregation', label: 'Aggregation Quality', description: 'Are the derived columns meaningful and the groupby operations correct?', weight: 35 },
    ],
    skillsProven: ['pandas merge', 'Data reshaping', 'Schema reconciliation', 'Data pipeline scripting'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'python-automate-report',
    categoryId: 'data',
    topicId: 'python-data-analysis',
    level: 'advanced',
    title: 'Automate a Weekly Report with Python',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a script that ingests data, generates statistics, and outputs a formatted HTML report.',
    scenario:
      'Every Monday, a data analyst manually opens 3 CSVs, calculates KPIs, pastes them into an email template, and sends it to 12 stakeholders. It takes 90 minutes. You need to automate this.',
    brief:
      'Write a Python script that reads the data, calculates the KPIs, generates an HTML report with inline CSS (suitable for email), and saves it to a file. The script should be idempotent and handle missing files gracefully.',
    deliverables: [
      'The complete Python script with clear function separation (load, calculate, render, save)',
      'The HTML template showing at least 3 KPIs with conditional formatting (green/red based on targets)',
      'Error handling for missing files, empty datasets, and data quality issues',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a software engineering task disguised as a data task. Clean function boundaries, error handling, and logging matter as much as the calculations.',
    rubric: [
      { key: 'architecture', label: 'Code Architecture', description: 'Is the script cleanly separated into load, calculate, render, and save functions?', weight: 30 },
      { key: 'output', label: 'Report Quality', description: 'Is the HTML output professional and suitable for email delivery?', weight: 30 },
      { key: 'robustness', label: 'Error Handling', description: 'Does the script handle missing files and bad data without crashing?', weight: 25 },
      { key: 'automation', label: 'Automation Readiness', description: 'Could this script be scheduled with cron/Task Scheduler without modification?', weight: 15 },
    ],
    skillsProven: ['Python automation', 'HTML templating', 'Error handling', 'Report generation'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },

  // --- Topic 7: Business Metrics & KPIs ---
  {
    id: 'kpi-startup-definition',
    categoryId: 'data',
    topicId: 'business-metrics-kpis',
    level: 'beginner',
    title: 'Define KPIs for a Startup',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Identify the 5 most important metrics for a food delivery startup.',
    scenario:
      'A food delivery startup in Johannesburg has just closed its seed round. The CEO asks you: "What 5 numbers should I look at every morning?" They currently track nothing.',
    brief:
      'Define the 5 most important KPIs for this startup. For each, explain what it measures, why it matters at this stage, how to calculate it, and what a healthy target looks like.',
    deliverables: [
      'A table of 5 KPIs with columns: Name, Formula, Why It Matters, Target Range',
      'A one-paragraph explanation of why you chose these 5 over other candidates you considered',
      'One "vanity metric" the CEO might be tempted to track and why it would be misleading',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The startup is pre-product-market-fit. Revenue is important but retention and unit economics matter more at this stage.',
    rubric: [
      { key: 'selection', label: 'KPI Selection', description: 'Are the 5 KPIs appropriate for an early-stage food delivery startup?', weight: 35 },
      { key: 'definition', label: 'KPI Definitions', description: 'Are the formulas precise and the targets realistic?', weight: 30 },
      { key: 'judgment', label: 'Business Judgment', description: 'Does the vanity metric choice show mature analytical thinking?', weight: 35 },
    ],
    skillsProven: ['KPI definition', 'Startup metrics', 'Business acumen', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'kpi-diagnose-metric-drop',
    categoryId: 'data',
    topicId: 'business-metrics-kpis',
    level: 'intermediate',
    title: 'Diagnose a Metric Drop',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Revenue dropped 15% month-over-month. Write a structured root-cause analysis.',
    scenario:
      'An online subscription box company saw revenue drop from R3.2M in March to R2.72M in April. The CEO is panicking. Your job is to calmly and systematically figure out why.',
    brief:
      'Write a structured root-cause analysis. Decompose revenue into its component parts, identify which lever moved, propose hypotheses, and describe what data you would pull to confirm each one.',
    deliverables: [
      'A revenue decomposition tree: Revenue = Subscribers × ARPU, broken down further',
      'At least 4 hypotheses for the drop, ordered by likelihood',
      'For each hypothesis: the data you would pull and the query or analysis that would confirm or reject it',
      'A one-paragraph summary you would present to the CEO before the deep-dive is complete',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not jump to a conclusion. The value of this task is the systematic decomposition, not the answer.',
    rubric: [
      { key: 'decomposition', label: 'Revenue Decomposition', description: 'Is the metric tree logically sound and mutually exclusive?', weight: 30 },
      { key: 'hypotheses', label: 'Hypothesis Quality', description: 'Are the hypotheses specific, testable, and ordered by likelihood?', weight: 30 },
      { key: 'investigation', label: 'Investigation Plan', description: 'Would the proposed queries actually confirm or reject each hypothesis?', weight: 25 },
      { key: 'communication', label: 'CEO Communication', description: 'Is the interim summary calm, honest, and actionable?', weight: 15 },
    ],
    skillsProven: ['Root-cause analysis', 'Metric decomposition', 'Hypothesis-driven analysis', 'Executive communication'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'kpi-north-star-framework',
    categoryId: 'data',
    topicId: 'business-metrics-kpis',
    level: 'advanced',
    title: 'Design a Metrics Framework (North Star)',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a full metrics tree from a North Star metric down to team-level leading indicators.',
    scenario:
      'A fintech company processing R500M/month in transactions wants to align all 8 teams around a single North Star metric. Currently, each team tracks different things and nobody agrees on what "growth" means.',
    brief:
      'Design a complete metrics framework. Choose the North Star metric, decompose it into team-level input metrics, define leading vs lagging indicators, and explain how each team\'s weekly actions connect to the company goal.',
    deliverables: [
      'The North Star metric with a clear definition and why you chose it over alternatives',
      'A metrics tree diagram showing how the North Star decomposes into 3-4 team-level input metrics',
      'For each team metric: whether it is leading or lagging, the responsible team, and the cadence of review',
      'One example of how a team could game their metric and how the framework prevents it',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good North Star is not revenue. It is the value-creating action that drives revenue. Think carefully about what action, done repeatedly, creates compounding value for this fintech.',
    rubric: [
      { key: 'north-star', label: 'North Star Selection', description: 'Is the chosen metric a genuine value-creating action, not just a revenue proxy?', weight: 25 },
      { key: 'decomposition', label: 'Metrics Tree', description: 'Does the tree logically connect team actions to the North Star?', weight: 30 },
      { key: 'leading-lagging', label: 'Leading vs Lagging', description: 'Are leading and lagging indicators correctly classified?', weight: 25 },
      { key: 'gaming', label: 'Anti-Gaming Design', description: 'Is the gaming example realistic and the mitigation thoughtful?', weight: 20 },
    ],
    skillsProven: ['North Star metrics', 'Metrics frameworks', 'Organisational alignment', 'Strategic thinking'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 8: Data Storytelling & Presentation ---
  {
    id: 'storytelling-table-to-narrative',
    categoryId: 'data',
    topicId: 'data-storytelling',
    level: 'beginner',
    title: 'Turn a Table into a Story',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Transform a raw data table into a 3-paragraph executive summary.',
    scenario:
      'Your manager drops a table on your desk showing quarterly sales by region for the last 2 years. She says: "I need to present this to the board in 30 minutes. Give me something I can read aloud."',
    brief:
      'Invent a plausible 8-quarter × 4-region sales table. Then write a 3-paragraph executive summary that tells a story: what happened, why it matters, and what the board should do about it.',
    deliverables: [
      'The raw data table (8 quarters × 4 regions)',
      'A 3-paragraph executive summary: (1) the headline insight, (2) the supporting evidence, (3) the recommended action',
      'One number you would highlight in bold if this were a slide, and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The board does not want to read a table. They want to hear a story. Your summary must be speakable — read it aloud before submitting.',
    rubric: [
      { key: 'data', label: 'Data Plausibility', description: 'Is the invented data internally consistent and realistic?', weight: 20 },
      { key: 'narrative', label: 'Narrative Quality', description: 'Does the summary tell a story with a clear beginning, middle, and end?', weight: 40 },
      { key: 'action', label: 'Actionable Recommendation', description: 'Is the recommended action specific and tied to the data?', weight: 25 },
      { key: 'highlight', label: 'Key Number Selection', description: 'Is the highlighted number the right one to anchor the story?', weight: 15 },
    ],
    skillsProven: ['Data storytelling', 'Executive communication', 'Business writing', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'storytelling-slide-deck',
    categoryId: 'data',
    topicId: 'data-storytelling',
    level: 'intermediate',
    title: 'Build a Slide Deck from Data',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a 5-slide presentation for a non-technical audience from a dataset.',
    scenario:
      'A non-profit helping unemployed graduates wants to present their impact data to corporate sponsors. They have 3 years of data on graduates placed, salaries achieved, and retention rates. The audience is CEOs who will decide whether to continue funding.',
    brief:
      'Design a 5-slide presentation outline. For each slide, specify the headline, the visual (chart or key number), and the talking point. You do not need to build the slides — a detailed outline in Markdown is sufficient.',
    deliverables: [
      'Slide 1: The opening hook (what grabs the sponsor\'s attention)',
      'Slides 2-4: The evidence (each slide makes one point with one visual)',
      'Slide 5: The ask (what the non-profit wants and why the data supports it)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Each slide should have exactly one point. If you need a second chart on a slide, you have two points — split it.',
    rubric: [
      { key: 'structure', label: 'Narrative Structure', description: 'Do the 5 slides tell a coherent story with a logical arc?', weight: 30 },
      { key: 'visuals', label: 'Visual Choices', description: 'Is each chart type appropriate for the data and audience?', weight: 25 },
      { key: 'audience', label: 'Audience Awareness', description: 'Is the language and framing appropriate for corporate CEOs?', weight: 25 },
      { key: 'ask', label: 'The Ask', description: 'Is the final ask specific, justified by the data, and compelling?', weight: 20 },
    ],
    skillsProven: ['Presentation design', 'Data storytelling', 'Stakeholder communication', 'Visual design'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'storytelling-conflicting-data',
    categoryId: 'data',
    topicId: 'data-storytelling',
    level: 'advanced',
    title: 'Present Conflicting Data to Stakeholders',
    difficulty: 'Advanced',
    estimatedHours: '3 to 4 hours',
    tagline: 'Two datasets tell opposite stories. Write the brief that acknowledges both.',
    scenario:
      'The marketing team says their new campaign increased website traffic by 40%. The sales team says revenue dropped 10% during the same period. Both are right. The CMO and CRO are in a heated argument, and the CEO has asked you to write a neutral brief that makes sense of both numbers.',
    brief:
      'Write a stakeholder brief that presents both datasets honestly, explains why they can both be true simultaneously, and recommends a path forward that neither team will reject.',
    deliverables: [
      'A summary of both datasets with the key numbers, presented without bias',
      'An explanation of how traffic can rise while revenue falls (at least 3 plausible mechanisms)',
      'A recommended next step that both teams can agree on, framed as a shared investigation rather than a blame assignment',
      'One metric you would propose tracking going forward to prevent this confusion in the future',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a political task as much as an analytical one. The brief must be diplomatically written — neither team should feel attacked.',
    rubric: [
      { key: 'neutrality', label: 'Neutrality', description: 'Is the brief genuinely unbiased between marketing and sales?', weight: 25 },
      { key: 'mechanisms', label: 'Explanatory Mechanisms', description: 'Are the proposed explanations analytically sound and specific?', weight: 30 },
      { key: 'recommendation', label: 'Path Forward', description: 'Is the recommendation constructive and politically viable?', weight: 25 },
      { key: 'prevention', label: 'Future Prevention', description: 'Would the proposed metric actually prevent this confusion?', weight: 20 },
    ],
    skillsProven: ['Stakeholder management', 'Conflicting data analysis', 'Diplomatic communication', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 9: ETL & Data Pipelines ---
  {
    id: 'etl-simple-flow',
    categoryId: 'data',
    topicId: 'etl-data-pipelines',
    level: 'beginner',
    title: 'Design a Simple ETL Flow',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Document the Extract, Transform, Load steps for moving CSV data into a database.',
    scenario:
      'A small business receives a daily CSV export from their point-of-sale system. They want to load this data into a PostgreSQL database so they can query it with SQL instead of opening Excel every morning.',
    brief:
      'Document the complete ETL flow. You do not need to write production code — describe each step clearly enough that a junior developer could implement it.',
    deliverables: [
      'Extract: Where the CSV comes from, how it is retrieved, and what validation you do before processing',
      'Transform: The specific cleaning and transformation steps (date parsing, null handling, type casting)',
      'Load: The database table schema and the insertion strategy (truncate-and-reload vs upsert)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Think about what happens when the CSV is missing, empty, or has a new column that was not there yesterday.',
    rubric: [
      { key: 'extract', label: 'Extract Step', description: 'Is the source validation thorough (file exists, not empty, expected columns)?', weight: 30 },
      { key: 'transform', label: 'Transform Step', description: 'Are the cleaning steps specific and appropriate for POS data?', weight: 35 },
      { key: 'load', label: 'Load Strategy', description: 'Is the insertion strategy chosen with awareness of idempotency and duplicates?', weight: 35 },
    ],
    skillsProven: ['ETL design', 'Data validation', 'Database loading', 'Pipeline documentation'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'etl-schema-evolution',
    categoryId: 'data',
    topicId: 'etl-data-pipelines',
    level: 'intermediate',
    title: 'Handle Schema Changes Gracefully',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a pipeline that does not break when a source API adds or removes a field.',
    scenario:
      'Your company ingests data from a third-party API every hour. Last week, the API provider added 3 new fields and renamed one existing field without warning. Your pipeline crashed, and the data warehouse was missing 6 hours of data before anyone noticed.',
    brief:
      'Redesign the pipeline to handle schema evolution gracefully. The pipeline must detect changes, adapt where possible, alert on breaking changes, and never silently drop data.',
    deliverables: [
      'A schema detection strategy: how the pipeline discovers new, renamed, or removed fields',
      'Handling rules for each type of change: new fields (add column), removed fields (nullable/default), renamed fields (mapping table)',
      'An alerting mechanism that notifies the team of breaking changes without stopping the pipeline',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The worst outcome is silent data loss. The second worst is a pipeline that crashes at 2am and nobody knows until Monday. Design for both.',
    rubric: [
      { key: 'detection', label: 'Schema Detection', description: 'Is the schema comparison mechanism robust (hash, diff, versioning)?', weight: 35 },
      { key: 'adaptation', label: 'Adaptation Rules', description: 'Are the handling rules for each change type sensible and safe?', weight: 35 },
      { key: 'alerting', label: 'Alerting & Recovery', description: 'Does the alerting strategy prevent both silent failures and unnecessary noise?', weight: 30 },
    ],
    skillsProven: ['Schema evolution', 'Pipeline resilience', 'Data engineering', 'Alerting design'],
    relatedRoadmapIds: ['data-engineer'],
  },
  {
    id: 'etl-streaming-pipeline',
    categoryId: 'data',
    topicId: 'etl-data-pipelines',
    level: 'advanced',
    title: 'Design a Real-Time Streaming Pipeline',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Architect a pipeline using Kafka/Spark Streaming for processing clickstream events.',
    scenario:
      'An e-commerce company wants real-time analytics on user behaviour. Currently, clickstream data is batch-loaded every 4 hours. Marketing wants to see what users are doing right now so they can trigger personalised push notifications within 60 seconds of a key event.',
    brief:
      'Design a real-time streaming pipeline. Choose the message broker (Kafka, Kinesis, Pub/Sub), the processing framework (Spark Streaming, Flink, or a simpler consumer), and the output sink (real-time dashboard, notification trigger, or both).',
    deliverables: [
      'An architecture diagram showing producers, broker, consumers, and output sinks',
      'Your technology choices with a defense of each (why Kafka over SQS, why Flink over Spark, etc.)',
      'How you handle late-arriving events, duplicate events, and consumer failures',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a senior data engineering task. Focus on exactly-once vs at-least-once semantics and how your architecture handles each.',
    rubric: [
      { key: 'architecture', label: 'Architecture Design', description: 'Is the pipeline logically sound with clear data flow from source to sink?', weight: 30 },
      { key: 'technology', label: 'Technology Choices', description: 'Are the chosen tools appropriate and the trade-offs well-articulated?', weight: 30 },
      { key: 'reliability', label: 'Reliability Guarantees', description: 'Are late events, duplicates, and failures handled with explicit strategies?', weight: 40 },
    ],
    skillsProven: ['Streaming architecture', 'Kafka', 'Event processing', 'Real-time analytics'],
    relatedRoadmapIds: ['data-engineer'],
  },

  // --- Topic 10: Machine Learning Fundamentals ---
  {
    id: 'ml-choose-algorithm',
    categoryId: 'data',
    topicId: 'ml-fundamentals',
    level: 'beginner',
    title: 'Choose the Right ML Algorithm',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Given 5 business problems, pick the right algorithm and explain why.',
    scenario:
      'A data team lead interviews candidates by giving them 5 real business problems and asking which machine learning approach (classification, regression, clustering, etc.) fits each one. The goal is not to code — it is to think.',
    brief:
      'For each of the 5 problems below, identify the ML task type, suggest a specific algorithm, and explain why it is a better fit than the alternatives.',
    deliverables: [
      'Problem 1: Predict whether a loan application will default (yes/no) — your approach',
      'Problem 2: Estimate the sale price of a house — your approach',
      'Problem 3: Group customers into segments based on purchasing behaviour — your approach',
      'Problem 4: Detect fraudulent credit card transactions in real-time — your approach',
      'Problem 5: Recommend products to users based on their browsing history — your approach',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'For each problem, state: (1) the ML task type, (2) a specific algorithm, (3) why you chose it over one alternative. "Use deep learning" is not a valid answer without justification.',
    rubric: [
      { key: 'classification', label: 'Task Classification', description: 'Is each problem correctly classified as regression, classification, clustering, etc.?', weight: 35 },
      { key: 'algorithm', label: 'Algorithm Selection', description: 'Are the chosen algorithms appropriate and practically useful?', weight: 35 },
      { key: 'reasoning', label: 'Reasoning Quality', description: 'Are the trade-off explanations specific rather than generic?', weight: 30 },
    ],
    skillsProven: ['ML fundamentals', 'Algorithm selection', 'Problem framing', 'Analytical reasoning'],
    relatedRoadmapIds: ['data-analyst', 'data-scientist'],
  },
  {
    id: 'ml-churn-prediction',
    categoryId: 'data',
    topicId: 'ml-fundamentals',
    level: 'intermediate',
    title: 'Build and Evaluate a Predictive Model',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Train a model to predict customer churn and explain the confusion matrix.',
    scenario:
      'A subscription company has 50,000 customers. 8% churned last quarter. The CEO wants a model that predicts who will churn next quarter so the retention team can intervene.',
    brief:
      'Describe (or code) how you would build a churn prediction model. Focus on feature selection, model choice, evaluation, and the business implications of false positives vs false negatives.',
    deliverables: [
      'Feature selection: 5-7 features you would use and why each predicts churn',
      'Model choice: the algorithm you would use and why (logistic regression, random forest, XGBoost, etc.)',
      'Evaluation: explain precision, recall, and the confusion matrix in the context of churn prediction',
      'Business impact: should the model optimize for precision or recall, and what is the cost of getting it wrong?',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A model with 92% accuracy sounds great until you realise 92% of customers do not churn anyway. Show you understand class imbalance.',
    rubric: [
      { key: 'features', label: 'Feature Engineering', description: 'Are the chosen features plausible predictors of churn?', weight: 25 },
      { key: 'model', label: 'Model Selection', description: 'Is the algorithm choice justified for a binary classification with imbalanced classes?', weight: 25 },
      { key: 'evaluation', label: 'Evaluation Metrics', description: 'Are precision, recall, and the confusion matrix correctly explained in context?', weight: 25 },
      { key: 'business', label: 'Business Framing', description: 'Does the candidate understand the cost trade-off between false positives and false negatives?', weight: 25 },
    ],
    skillsProven: ['Predictive modelling', 'Classification', 'Model evaluation', 'Business analytics'],
    relatedRoadmapIds: ['data-analyst', 'data-scientist'],
  },
  {
    id: 'ml-bias-audit',
    categoryId: 'data',
    topicId: 'ml-fundamentals',
    level: 'advanced',
    title: 'Detect and Mitigate Model Bias',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Audit a hiring algorithm for demographic bias and propose mitigation strategies.',
    scenario:
      'A recruitment platform uses a machine learning model to score CVs and rank candidates. An internal audit reveals that the model consistently scores male candidates 12% higher than female candidates with identical qualifications. The board wants a full audit and remediation plan.',
    brief:
      'Conduct a bias audit of the hypothetical model. Identify how bias could have entered the system, propose detection methods, and design mitigation strategies that do not simply remove protected attributes.',
    deliverables: [
      'A taxonomy of how bias enters ML systems (training data, feature selection, label bias, feedback loops)',
      'Detection methods: statistical tests and metrics you would use to measure demographic parity and equal opportunity',
      'Mitigation strategies: at least 3 approaches (pre-processing, in-processing, post-processing) with trade-offs',
      'An ethical framework for deciding how much accuracy you are willing to sacrifice for fairness',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Simply removing the gender column does not fix bias — proxy features (name, school, hobbies) still leak. Show you understand this.',
    rubric: [
      { key: 'sources', label: 'Bias Sources', description: 'Does the candidate identify multiple realistic sources of bias beyond just training data?', weight: 25 },
      { key: 'detection', label: 'Detection Methods', description: 'Are the proposed fairness metrics appropriate and correctly defined?', weight: 25 },
      { key: 'mitigation', label: 'Mitigation Strategies', description: 'Are the mitigation approaches technically sound with honest trade-offs?', weight: 30 },
      { key: 'ethics', label: 'Ethical Reasoning', description: 'Does the candidate engage seriously with the accuracy-fairness trade-off?', weight: 20 },
    ],
    skillsProven: ['AI ethics', 'Bias detection', 'Fairness metrics', 'Responsible AI'],
    relatedRoadmapIds: ['data-scientist'],
  },

  // --- Topic 11: Dashboard Design & BI Tools ---
  {
    id: 'bi-dashboard-wireframe',
    categoryId: 'data',
    topicId: 'dashboard-design-bi',
    level: 'beginner',
    title: 'Design a Dashboard Wireframe',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Sketch a dashboard layout for a retail store manager with clear information hierarchy.',
    scenario:
      'A retail chain with 15 stores wants a dashboard for store managers. Each manager checks it once a day on a tablet. They care about: today\'s sales vs target, top-selling products, staff on shift, and any stock alerts.',
    brief:
      'Design a dashboard wireframe (described in Markdown or as a simple layout sketch). Focus on information hierarchy: what is biggest, what is smallest, what is always visible vs what requires a click.',
    deliverables: [
      'A wireframe description showing the layout grid (e.g., "top bar: today\'s revenue KPI card; left column: product sales table; right: staff roster")',
      'An explanation of your information hierarchy: what is most prominent and why',
      'One design choice you made to optimise for a tablet-first, glance-based use case',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This manager checks the dashboard standing in a stockroom. It must be readable at a glance from 2 feet away on a 10-inch screen.',
    rubric: [
      { key: 'layout', label: 'Layout Design', description: 'Is the layout logical with appropriate sizing for the most important information?', weight: 35 },
      { key: 'hierarchy', label: 'Information Hierarchy', description: 'Is the hierarchy well-justified and appropriate for a daily check-in?', weight: 35 },
      { key: 'context', label: 'Contextual Design', description: 'Does the design account for the tablet-first, standing-in-stockroom context?', weight: 30 },
    ],
    skillsProven: ['Dashboard design', 'Information hierarchy', 'UX thinking', 'Retail analytics'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'bi-filters-drilldowns',
    categoryId: 'data',
    topicId: 'dashboard-design-bi',
    level: 'intermediate',
    title: 'Build Filters and Drill-Downs',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design interactive dashboard filters that let users slice data by region, product, and time.',
    scenario:
      'A national sales dashboard currently shows a single view of total company revenue. The regional managers want to filter by their region, drill into product categories, and compare this quarter to last quarter. The current dashboard has no interactivity.',
    brief:
      'Design the filter architecture for an interactive BI dashboard. Specify which filters exist, how they interact (cascading vs independent), and what happens when a user applies multiple filters simultaneously.',
    deliverables: [
      'A list of all filters: Region (multi-select), Product Category (cascading), Date Range (picker), and Comparison Period (toggle)',
      'The filter interaction model: which filters are independent and which cascade (e.g., selecting a region narrows the product list)',
      'The default state: what the dashboard shows when no filters are applied',
      'One edge case: what happens when a filter combination returns zero results',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A dashboard with 10 filters and no guidance is unusable. Think about progressive disclosure — show the most-used filters first.',
    rubric: [
      { key: 'filters', label: 'Filter Design', description: 'Are the filter types appropriate for each data dimension?', weight: 30 },
      { key: 'interaction', label: 'Interaction Model', description: 'Is the cascading vs independent logic clearly defined and user-friendly?', weight: 35 },
      { key: 'defaults', label: 'Default State', description: 'Is the default dashboard view useful without any filter changes?', weight: 20 },
      { key: 'edge-cases', label: 'Edge Case Handling', description: 'Is the zero-results state handled gracefully?', weight: 15 },
    ],
    skillsProven: ['Dashboard interactivity', 'Filter design', 'BI tools', 'UX design'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'bi-realtime-monitoring',
    categoryId: 'data',
    topicId: 'dashboard-design-bi',
    level: 'advanced',
    title: 'Real-Time Monitoring Dashboard',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a live operations dashboard with alert thresholds and anomaly detection.',
    scenario:
      'A logistics company operates 200 delivery vehicles across Gauteng. The operations centre needs a real-time dashboard showing vehicle locations, delivery progress, and automatic alerts when something goes wrong (late delivery, vehicle breakdown, route deviation).',
    brief:
      'Design a real-time monitoring dashboard for the operations centre. It will be displayed on a large wall-mounted screen and must be readable from 3 metres away. Focus on what triggers alerts, how alerts are escalated, and how the dashboard distinguishes "normal" from "needs attention".',
    deliverables: [
      'The dashboard layout for a wall-mounted 65-inch display: what is always visible vs what appears on alert',
      'At least 3 alert rules with thresholds (e.g., "delivery running >30 minutes late → amber alert")',
      'An escalation model: who gets notified at each severity level and via what channel (screen, SMS, call)',
      'How the dashboard detects anomalies: simple threshold rules vs statistical anomaly detection',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A dashboard that is always red is as useless as one that is always green. Design your thresholds so the normal state is visually calm.',
    rubric: [
      { key: 'layout', label: 'Wall Display Design', description: 'Is the layout optimised for a large screen viewed from 3 metres?', weight: 25 },
      { key: 'alerts', label: 'Alert Design', description: 'Are the alert rules specific, threshold-based, and actionable?', weight: 30 },
      { key: 'escalation', label: 'Escalation Model', description: 'Is the escalation hierarchy clear and proportionate?', weight: 25 },
      { key: 'anomaly', label: 'Anomaly Detection', description: 'Does the candidate understand the difference between simple thresholds and statistical anomaly detection?', weight: 20 },
    ],
    skillsProven: ['Real-time dashboards', 'Alert design', 'Operations analytics', 'Anomaly detection'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },

  // --- Topic 12: Data Governance & Quality ---
  {
    id: 'governance-data-dictionary',
    categoryId: 'data',
    topicId: 'data-governance-quality',
    level: 'beginner',
    title: 'Write a Data Dictionary',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Document 15 columns in a messy database table with clear definitions and business rules.',
    scenario:
      'A new analyst joins the team and asks: "What does the column `status_cd` mean? What are the valid values?" Nobody knows. The original developer left 3 years ago. You have been asked to write the data dictionary for the most important table.',
    brief:
      'Invent a plausible 15-column customer orders table. Write a comprehensive data dictionary that a new team member could use to understand every column without asking anyone.',
    deliverables: [
      'A table with columns: Column Name, Data Type, Description, Valid Values / Range, Nullable?, Business Rule',
      'At least 3 columns with non-obvious business rules (e.g., "status_cd can only transition from P → A → C, never backwards")',
      'One column that is commonly misunderstood and your note explaining the correct interpretation',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A data dictionary is not a schema dump. It is documentation that prevents incorrect analysis. Every description should answer: "What does this mean for the business?"',
    rubric: [
      { key: 'completeness', label: 'Completeness', description: 'Are all 15 columns documented with all required fields?', weight: 30 },
      { key: 'business-rules', label: 'Business Rules', description: 'Are the business rules realistic, specific, and analytically useful?', weight: 35 },
      { key: 'clarity', label: 'Clarity', description: 'Could a new analyst use this dictionary without any additional context?', weight: 35 },
    ],
    skillsProven: ['Data documentation', 'Data dictionaries', 'Business rules', 'Knowledge management'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'governance-quality-checks',
    categoryId: 'data',
    topicId: 'data-governance-quality',
    level: 'intermediate',
    title: 'Design Data Quality Checks',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a set of automated validation rules for a sales pipeline.',
    scenario:
      'A company discovered that 5% of their revenue reports were wrong last quarter because duplicates, nulls, and out-of-range values slipped through their data pipeline undetected. The CTO wants automated quality gates.',
    brief:
      'Design a comprehensive set of data quality checks for a sales data pipeline. The checks should run automatically after each data load and block bad data from reaching the reporting layer.',
    deliverables: [
      'A framework of check categories: completeness, accuracy, consistency, timeliness, and uniqueness',
      'At least 10 specific check rules with SQL or pseudo-code (e.g., "SELECT COUNT(*) FROM orders WHERE total < 0")',
      'A severity classification: which failures block the pipeline (critical) vs which generate warnings (non-critical)',
      'A reporting mechanism: how the data team is notified and what the quality dashboard looks like',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Quality checks that nobody looks at are worse than no checks (false sense of security). Design the alerting so it is impossible to ignore.',
    rubric: [
      { key: 'framework', label: 'Quality Framework', description: 'Are the check categories comprehensive and correctly defined?', weight: 25 },
      { key: 'rules', label: 'Check Rules', description: 'Are the 10 rules specific, correct, and covering different quality dimensions?', weight: 30 },
      { key: 'severity', label: 'Severity Classification', description: 'Is the critical vs warning distinction well-reasoned?', weight: 25 },
      { key: 'alerting', label: 'Alerting Design', description: 'Would the team actually see and act on quality failures?', weight: 20 },
    ],
    skillsProven: ['Data quality', 'Automated validation', 'Pipeline design', 'Data governance'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'governance-popia-audit',
    categoryId: 'data',
    topicId: 'data-governance-quality',
    level: 'advanced',
    title: 'POPIA/GDPR Compliance Audit',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Audit a fictional company\'s data practices and write a compliance gap report.',
    scenario:
      'A South African fintech startup has grown rapidly but has never done a formal data privacy audit. They store customer ID numbers, bank account details, and location data. A new enterprise client requires POPIA compliance certification before signing the contract.',
    brief:
      'Conduct a POPIA compliance audit of the fictional company. Identify gaps, classify them by risk level, and write a remediation plan that the CTO can execute in 90 days.',
    deliverables: [
      'A summary of POPIA\'s 8 conditions for lawful processing and how each applies to this fintech',
      'A gap analysis table: at least 5 specific gaps (e.g., "no consent mechanism for location tracking")',
      'A risk classification for each gap: Critical (legal exposure), High (reputational), Medium (operational)',
      'A 90-day remediation roadmap with specific actions, responsible parties, and milestones',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'POPIA is South African law, not a suggestion. Show that you understand the legal requirements, not just the IT implementation. Reference specific POPIA sections where relevant.',
    rubric: [
      { key: 'popia', label: 'POPIA Knowledge', description: 'Are the 8 conditions correctly summarised and applied to the fintech context?', weight: 25 },
      { key: 'gaps', label: 'Gap Identification', description: 'Are the gaps specific, realistic, and correctly classified by risk?', weight: 30 },
      { key: 'remediation', label: 'Remediation Plan', description: 'Is the 90-day roadmap actionable with clear ownership and milestones?', weight: 30 },
      { key: 'judgment', label: 'Legal Judgment', description: 'Does the candidate distinguish between technical compliance and genuine data protection?', weight: 15 },
    ],
    skillsProven: ['POPIA compliance', 'Data privacy', 'Risk assessment', 'Compliance auditing'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },

  {
    id: 'cash-flow-sme',
    categoryId: 'finance-accounting',
    topicId: 'cash-flow-forecasting',
    level: 'intermediate',
    title: '12-Month Cash Flow for a Fictional SME',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a defensible 12-month cash flow forecast for a small business.',
    scenario:
      'A Cape Town-based graphic design studio with three staff has been profitable on paper for two years but keeps running out of cash at month end. The owner needs a 12-month cash flow forecast she can actually use, not a generic template.',
    brief:
      'Build the forecast. You do not need a spreadsheet file, a Markdown table is fine. You do need to think carefully about timing: when cash actually comes in and goes out, not when invoices are raised.',
    deliverables: [
      'A month-by-month cash flow table (opening balance, inflows, outflows, closing balance) for 12 months',
      'Your assumptions (client payment terms, seasonality, tax timings) listed explicitly',
      'The months with the tightest cash position and one concrete action the owner could take in each',
      'One scenario variation (for example: what if the biggest client pays 30 days late) and its impact',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You can invent the numbers. They just need to be internally consistent and plausible for a 3-person design studio in South Africa.',
    rubric: [
      { key: 'structure', label: 'Model Structure', description: 'Does the forecast distinguish cash from accrual correctly?', weight: 25 },
      { key: 'assumptions', label: 'Assumption Quality', description: 'Are the assumptions explicit, realistic, and South-Africa appropriate?', weight: 25 },
      { key: 'insights', label: 'Actionable Output', description: 'Does the forecast actually help the owner spot and prevent a cash crunch?', weight: 30 },
      { key: 'scenario', label: 'Scenario Thinking', description: 'Is the stress scenario meaningful and its impact calculated properly?', weight: 20 },
    ],
    skillsProven: ['Cash flow modelling', 'Financial forecasting', 'SME finance', 'Financial storytelling'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'ratio-analysis-memo',
    categoryId: 'finance-accounting',
    topicId: 'ratio-analysis',
    level: 'beginner',
    title: 'Ratio Analysis from Sample Statements',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Turn two years of financials into a one-page investment memo.',
    scenario:
      'A small retail company has posted its financial statements for the last two years. A mentor asks you to write a one-page memo summarising what the numbers say about the business and whether you would lend it working capital.',
    brief:
      'You can invent plausible numbers for the two years as long as they are internally consistent. Calculate at least four ratios and interpret them in plain English.',
    deliverables: [
      'A table of at least 4 ratios for both years, with the formulas visible',
      'One paragraph interpreting the trends across the two years',
      'A clear yes, no, or conditional recommendation on lending working capital, with your reasoning',
      'One number you would want to see before finalising your recommendation',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Interpretation beats calculation. A correctly calculated ratio with no insight earns fewer marks than a rough estimate with sharp analysis.',
    rubric: [
      { key: 'ratios', label: 'Ratio Selection & Calc', description: 'Are the chosen ratios appropriate and the formulas correct?', weight: 30 },
      { key: 'interpretation', label: 'Interpretation', description: 'Does the memo explain what the ratios mean for this specific business?', weight: 35 },
      { key: 'decision', label: 'Recommendation', description: 'Is the recommendation clear and well supported by the analysis?', weight: 25 },
      { key: 'gap', label: 'Gap Awareness', description: 'Is the "what I still want to know" question a good one?', weight: 10 },
    ],
    skillsProven: ['Financial ratio analysis', 'Credit thinking', 'Business writing', 'Financial judgment'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'ux-teardown-sa-site',
    categoryId: 'design-ux',
    topicId: 'ux-teardown',
    level: 'beginner',
    title: 'UX Teardown of a South African Website',
    difficulty: 'Beginner',
    estimatedHours: '2 hours',
    tagline: 'Critique a real SA site\'s booking flow and propose three fixes.',
    scenario:
      'You have been asked to review the booking or checkout flow of any well-known South African website of your choice (examples: Takealot, Checkers Sixty60, Uber Eats, Discovery, SARS eFiling, Computicket). Pick one, complete a realistic task on it, and report back.',
    brief:
      'Complete the task with a screen recorder or just detailed notes. You do not need to share the recording. Document what you noticed and what you would change.',
    deliverables: [
      'The site and specific task you attempted (one line)',
      'Three specific UX issues you encountered, each with a concrete proposed fix',
      'One thing the site does well that you would keep',
      'Your method for deciding priority if the product team could only ship one of your fixes',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Vague issues like "confusing layout" do not count. Be specific: which screen, which button, what you expected, what happened.',
    rubric: [
      { key: 'observation', label: 'Observation Quality', description: 'Are the three issues specific, real, and well-described?', weight: 35 },
      { key: 'proposals', label: 'Proposed Fixes', description: 'Are the fixes practical, proportionate, and targeted at the root issue?', weight: 30 },
      { key: 'balance', label: 'Balanced View', description: 'Is the "keep" item thoughtful, not filler?', weight: 15 },
      { key: 'prioritisation', label: 'Prioritisation Logic', description: 'Is the prioritisation method defensible?', weight: 20 },
    ],
    skillsProven: ['UX analysis', 'Heuristic evaluation', 'Design critique', 'Product prioritisation'],
    relatedRoadmapIds: [],
  },
  {
    id: 'pricing-card-rebuild',
    categoryId: 'web-development',
    topicId: 'landing-page-rebuild',
    level: 'beginner',
    title: 'Build a Responsive Pricing Card',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write the HTML and CSS for a single pricing card from a short spec.',
    scenario:
      'A SaaS startup is refreshing its pricing page. Before trusting a junior with the whole page, the lead developer asks applicants to build a single pricing card in isolation. It is a small, self-contained component, but the details matter.',
    brief:
      'Build one pricing card for the "Pro" plan. The card should contain: a plan name, a one-line description, a price with a "/ month" suffix, a list of four features each with a small check icon, and a primary call-to-action button that says "Start free trial". The card should look clean on both a 360px mobile screen and a 1280px desktop screen. Pick sensible padding, font sizes, and a single accent colour.',
    deliverables: [
      'A complete HTML snippet for one pricing card',
      'A complete CSS (or Tailwind class) implementation',
      'A one-line note on the font size and spacing scale you chose and why',
      'One accessibility detail you deliberately got right (focus ring, contrast, semantic list, aria-label, etc.)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Paste the code in fenced code blocks. Plain HTML and CSS (or Tailwind classes) only, no frameworks. Do not overbuild: one card, not three.',
    rubric: [
      { key: 'structure', label: 'HTML Structure', description: 'Is the markup semantic (ul for features, button for CTA, heading hierarchy)?', weight: 30 },
      { key: 'visual', label: 'Visual Polish', description: 'Are spacing, type scale, and the accent colour used with restraint and consistency?', weight: 25 },
      { key: 'responsive', label: 'Responsive Behaviour', description: 'Does the card hold up at 360px and 1280px without awkward wrapping or overflow?', weight: 25 },
      { key: 'a11y', label: 'Accessibility Detail', description: 'Is the accessibility choice real, specific, and correctly implemented?', weight: 20 },
    ],
    skillsProven: ['HTML', 'CSS / Tailwind', 'Responsive design', 'Accessibility'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'landing-page-from-screenshot',
    categoryId: 'web-development',
    topicId: 'landing-page-rebuild',
    level: 'intermediate',
    title: 'Rebuild a Landing Page Section from a Screenshot',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write HTML and CSS that matches a screenshot pixel-close.',
    scenario:
      'A design agency gives junior front-end applicants a screenshot and asks them to rebuild the hero section. You will describe the screenshot in your own words and then produce the code.',
    brief:
      'Imagine a hero section with: a dark navy background, a white headline reading "Ship faster with fewer bugs", a shorter grey subheadline, a primary blue button and a secondary outlined button, and a product screenshot to the right that overlaps slightly outside the right edge of the content container. It is responsive: on mobile the image stacks below the text.',
    deliverables: [
      'A complete HTML snippet for the hero section',
      'A complete CSS (or Tailwind class) implementation',
      'Notes on any accessibility choices you made (focus states, colour contrast, alt text)',
      'One thing you would push back on the designer about and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Paste the code in fenced code blocks. Do not use any framework beyond plain HTML and CSS (or Tailwind classes).',
    rubric: [
      { key: 'accuracy', label: 'Visual Accuracy', description: 'Does the code plausibly render to match the described screenshot?', weight: 30 },
      { key: 'responsive', label: 'Responsive Behaviour', description: 'Is the responsive stacking handled cleanly?', weight: 20 },
      { key: 'a11y', label: 'Accessibility', description: 'Are the accessibility choices deliberate and correct?', weight: 25 },
      { key: 'pushback', label: 'Design Collaboration', description: 'Is the designer-pushback item substantive, not performative?', weight: 25 },
    ],
    skillsProven: ['HTML', 'CSS / Tailwind', 'Responsive design', 'Accessibility', 'Design collaboration'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'marketing-page-production-rebuild',
    categoryId: 'web-development',
    topicId: 'landing-page-rebuild',
    level: 'advanced',
    title: 'Production-Ready Marketing Page Rebuild',
    difficulty: 'Advanced',
    estimatedHours: '4 to 8 hours',
    tagline: 'Rebuild a full marketing page and defend your performance, accessibility, and SEO trade-offs.',
    scenario:
      'A Series A fintech is replacing its marketing site. The existing page loads a 2.4MB hero video on mobile, ships 180KB of render-blocking CSS, and scores 42 on Lighthouse Performance. The engineering lead wants the rebuild to cross 90 on Performance, 100 on Accessibility, and 100 on SEO - without losing the current visual direction. You are the candidate for the frontend role.',
    brief:
      'Plan and implement a rebuild of a four-section marketing page: hero with a product demo, a three-column feature grid, a customer logo strip with testimonials, and a final CTA with a signup form. You do not need to ship a live URL; a single HTML file plus CSS (vanilla or Tailwind) is enough. What you must show is the thinking behind production decisions, not just the code.',
    deliverables: [
      'Full HTML and CSS for the four sections (may be split across files or inline)',
      'A short architecture note: how you handle above-the-fold CSS, font loading, the hero media, and any JavaScript you add',
      'Accessibility audit of your own page: at least 3 specific choices (heading order, landmark regions, form labels, focus management, reduced-motion, colour contrast) with why each matters',
      'SEO plan: meta tags, structured data, semantic outline, and one on-page content decision you would push back on marketing about',
      'Performance budget you set for the page (total KB, LCP target, CLS target) and one trade-off you had to make to stay inside it',
      'What you would measure in production in the first 30 days to know the rebuild actually worked',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task rewards judgement, not volume. A sharp 800-word submission with tight code beats a sprawling 3,000-word one. Show the trade-offs you rejected, not only the ones you took.',
    rubric: [
      { key: 'architecture', label: 'Architecture & Trade-offs', description: 'Are the decisions on CSS delivery, fonts, media, and JS defensible for a production marketing page?', weight: 25 },
      { key: 'performance', label: 'Performance Thinking', description: 'Is the performance budget realistic, and is the LCP/CLS reasoning grounded rather than generic?', weight: 20 },
      { key: 'a11y', label: 'Accessibility Depth', description: 'Do the accessibility choices go beyond checklist items and reflect how real users navigate the page?', weight: 20 },
      { key: 'seo', label: 'SEO & Content Judgment', description: 'Is the SEO plan specific, and is the marketing pushback substantive?', weight: 15 },
      { key: 'measurement', label: 'Measurement Plan', description: 'Would the 30-day metrics actually tell you whether the rebuild succeeded?', weight: 10 },
      { key: 'craft', label: 'Code Craft', description: 'Is the code clean, semantic, and free of dead weight given the stated constraints?', weight: 10 },
    ],
    skillsProven: ['HTML', 'CSS / Tailwind', 'Web performance', 'Core Web Vitals', 'Accessibility', 'Technical SEO', 'Engineering judgment'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-fetch-movie-list',
    categoryId: 'web-development',
    topicId: 'api-data-fetching',
    level: 'beginner',
    title: 'Fetch and Display a Movie List',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Fetch data from a public API and render it as a responsive grid.',
    scenario:
      'A streaming startup wants to build a simple web client to display their top movies. Before building the full app, they want a prototype that fetches the top 20 movies from a public API and renders them nicely on the page.',
    brief:
      'Using React (or vanilla JS), make a GET request to a public movie API (e.g., TMDB or a mock JSON endpoint). Display the title, release year, and poster image for each movie in a responsive grid. Handle the loading state and display a simple error message if the fetch fails.',
    deliverables: [
      'A code snippet of the data fetching logic (e.g., a custom hook or useEffect block)',
      'The component code that renders the grid and handles loading/error states',
      'A brief explanation of how you handle the loading state while waiting for the API',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on clean async/await syntax and proper React state management. Do not over-engineer the CSS, but ensure it does not break on mobile.',
    rubric: [
      { key: 'fetching', label: 'Data Fetching', description: 'Is the API call correctly implemented using fetch or axios?', weight: 30 },
      { key: 'state', label: 'State Management', description: 'Are loading, error, and data states handled correctly?', weight: 30 },
      { key: 'ui', label: 'UI Rendering', description: 'Is the data mapped correctly into a responsive grid?', weight: 20 },
      { key: 'cleanliness', label: 'Code Cleanliness', description: 'Is the code readable and free of obvious memory leaks (e.g., missing dependency arrays)?', weight: 20 },
    ],
    skillsProven: ['REST APIs', 'Async/Await', 'React State', 'Basic CSS Grid'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-search-filter-pagination',
    categoryId: 'web-development',
    topicId: 'api-data-fetching',
    level: 'intermediate',
    title: 'Search, Filter, and Paginate API Data',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Add complex user interactions to a data-heavy dashboard.',
    scenario:
      'An internal tool for an e-commerce company displays thousands of customer orders. The basic list works, but customer support agents are complaining that they cannot find specific orders easily. You need to implement search, status filtering, and pagination without crashing the browser.',
    brief:
      'Extend a basic data fetching component. Add a text input for searching by ID, a dropdown to filter by status (Pending, Shipped, Delivered), and basic next/previous pagination buttons. You must debounce the search input to prevent spamming the API.',
    deliverables: [
      'The React component code managing the search, filter, and pagination state',
      'The debounced search implementation',
      'An explanation of how URL search parameters could be used to make the filters shareable',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume the API supports query parameters like `?search=xyz&status=shipped&page=2`. Show how you construct this URL dynamically based on state.',
    rubric: [
      { key: 'state', label: 'Complex State Management', description: 'Are the multiple filter states managed cleanly without conflicting?', weight: 30 },
      { key: 'debounce', label: 'Debouncing', description: 'Is the search input debounced correctly to limit API calls?', weight: 25 },
      { key: 'url', label: 'URL Sync Concept', description: 'Does the candidate understand how to sync state to the URL?', weight: 20 },
      { key: 'edge-cases', label: 'Edge Cases', description: 'Does the code handle empty states (e.g., "No results found") gracefully?', weight: 25 },
    ],
    skillsProven: ['Advanced React State', 'Debouncing', 'API Query Parameters', 'UX Edge Cases'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-optimistic-updates-caching',
    categoryId: 'web-development',
    topicId: 'api-data-fetching',
    level: 'advanced',
    title: 'Optimistic Updates & Local Caching',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Make an app feel instantly responsive by mastering client-side caching.',
    scenario:
      'You are building a real-time task management app (like Trello). Users are complaining that clicking "Complete Task" feels sluggish because it waits for the server response before updating the UI. The engineering lead wants you to implement optimistic UI updates and local caching to make the app feel instant.',
    brief:
      'Design the data fetching layer for a "Task Dashboard". You do not need to build the full UI. Write the logic (using React Query, SWR, or custom hooks) to: 1) Cache the initial fetch. 2) Optimistically update the cache when a user toggles a task. 3) Roll back the UI if the API request fails.',
    deliverables: [
      'The data fetching and mutation code (e.g., React Query hooks)',
      'The optimistic update and rollback logic',
      'A short architecture note explaining the trade-offs of optimistic updates (e.g., when NOT to use them)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You may use tools like TanStack Query (React Query) or SWR in your code snippet, as they are industry standard for this problem. Focus on the mutation logic.',
    rubric: [
      { key: 'caching', label: 'Caching Strategy', description: 'Is the data cached effectively to prevent redundant background fetches?', weight: 25 },
      { key: 'optimistic', label: 'Optimistic Update Logic', description: 'Does the UI update immediately before the network request finishes?', weight: 30 },
      { key: 'rollback', label: 'Error Handling & Rollback', description: 'Is the previous state correctly restored if the mutation fails?', weight: 25 },
      { key: 'trade-offs', label: 'Architectural Judgment', description: 'Does the candidate understand the risks of optimistic updates (e.g., payment processing)?', weight: 20 },
    ],
    skillsProven: ['Optimistic UI', 'Client-side Caching', 'Data Mutation', 'React Query / SWR', 'Error Recovery'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'auth-static-login-form',
    categoryId: 'web-development',
    topicId: 'auth-flow-implementation',
    level: 'beginner',
    title: 'Build a Secure Login & Signup UI',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Build a pixel-perfect, accessible login and signup form with robust validation.',
    scenario:
      'A new SaaS product needs its entry gates built. The backend is not ready yet, but the design team has handed off the Figma files for the Login and Create Account screens. Your job is to build the frontend forms and make sure users cannot submit invalid data.',
    brief:
      'Build a React (or vanilla HTML/JS) login and signup form. Implement client-side validation: the email must be valid, the password must be at least 8 characters with a number, and the "Confirm Password" field must match. Show clear, accessible error messages inline when validation fails.',
    deliverables: [
      'The component code for both the Login and Signup forms',
      'The validation logic (custom or using a library like Zod / Yup)',
      'A brief note on how you handled accessibility for screen readers (e.g., aria-invalid, aria-describedby)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not worry about submitting the data to a real API, just `console.log` the payload if validation passes. Focus heavily on UX: do errors show immediately or only on submit? Do they clear when the user starts typing?',
    rubric: [
      { key: 'validation', label: 'Validation Logic', description: 'Are the validation rules correct and secure?', weight: 30 },
      { key: 'ux', label: 'User Experience', description: 'Do errors appear and disappear at the right time (not too aggressively)?', weight: 30 },
      { key: 'a11y', label: 'Accessibility', description: 'Can a screen reader user easily understand what went wrong?', weight: 20 },
      { key: 'craft', label: 'Code Craft', description: 'Is the state managed cleanly without excessive boilerplate?', weight: 20 },
    ],
    skillsProven: ['Form Validation', 'React State', 'Accessibility (a11y)', 'UX Design'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'auth-jwt-global-state',
    categoryId: 'web-development',
    topicId: 'auth-flow-implementation',
    level: 'intermediate',
    title: 'Connect a Mock JWT API & Manage State',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Wire up a login form to an API and manage the user session globally.',
    scenario:
      'The backend team has just deployed the `/api/login` endpoint. It accepts an email and password and returns a mock JWT (JSON Web Token) along with the user profile data. You need to connect the login form, store the token securely, and make the user data available to the entire React app.',
    brief:
      'Write the logic to submit credentials to a mock API endpoint. If successful, parse the response, store the JWT (explain where and why), and set the global user state using the React Context API (or a lightweight store like Zustand) so that a "Navbar" component can display "Welcome, [Name]".',
    deliverables: [
      'The API fetch call and error handling logic (e.g., handling 401 Unauthorized)',
      'The React Context provider (or Zustand store) managing the global `user` state',
      'A paragraph defending your choice of where to store the JWT (LocalStorage vs. HttpOnly Cookie) for this specific scenario',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You can mock the API call using a `setTimeout` that resolves with a fake token. Focus on how the global state is updated and consumed.',
    rubric: [
      { key: 'api', label: 'API Integration', description: 'Are loading and error states handled gracefully during the request?', weight: 25 },
      { key: 'state', label: 'Global State', description: 'Is the Context/Store implemented cleanly without causing unnecessary re-renders?', weight: 35 },
      { key: 'security', label: 'Security Awareness', description: 'Does the candidate understand the risks of LocalStorage vs Cookies?', weight: 25 },
      { key: 'craft', label: 'Code Craft', description: 'Is the business logic separated from the UI components?', weight: 15 },
    ],
    skillsProven: ['React Context / Global State', 'API Integration', 'JWT Basics', 'Security Principles'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'auth-oauth-route-guards',
    categoryId: 'web-development',
    topicId: 'auth-flow-implementation',
    level: 'advanced',
    title: 'OAuth, Route Guards, & Token Refresh',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a robust authentication architecture that survives edge cases.',
    scenario:
      'You are the lead frontend engineer for a financial dashboard. Security is paramount. Users log in via an external OAuth provider. The access token expires every 15 minutes, and a silent refresh token must be used to keep them logged in. Furthermore, unauthenticated users must be redirected away from `/dashboard`.',
    brief:
      'Design the authentication architecture. You do not need to build the UI. Write the logic for three critical pieces: 1) A Higher-Order Component (HOC) or wrapper that protects private routes. 2) An Axios interceptor (or fetch wrapper) that automatically catches 401 errors, uses a refresh token to get a new access token, and retries the failed request. 3) The initialization logic that checks if a user is already logged in when they refresh the page.',
    deliverables: [
      'The Route Guard implementation (e.g., `ProtectedRoute.tsx`)',
      'The Axios interceptor or custom fetch wrapper handling the token refresh logic',
      'A short architecture note explaining how you prevent multiple failed requests from triggering multiple refresh calls simultaneously',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task tests your ability to handle complex asynchronous control flows. The interceptor logic is notoriously tricky - walk through your solution carefully.',
    rubric: [
      { key: 'guards', label: 'Route Guards', description: 'Is the routing logic secure and does it prevent flash-of-unauthenticated-content?', weight: 25 },
      { key: 'interceptor', label: 'Token Refresh Logic', description: 'Does the interceptor correctly pause, refresh, and retry failed requests?', weight: 35 },
      { key: 'race', label: 'Race Condition Handling', description: 'Does the architecture address the multiple-request refresh problem?', weight: 25 },
      { key: 'init', label: 'App Initialization', description: 'Is the initial session check robust on hard reloads?', weight: 15 },
    ],
    skillsProven: ['OAuth Flows', 'Axios Interceptors', 'Route Protection', 'Race Condition Management', 'Advanced Authentication'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'cart-basic-state',
    categoryId: 'web-development',
    topicId: 'ecommerce-shopping-cart',
    level: 'beginner',
    title: 'Build a Basic Shopping Cart UI',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create a static shopping cart that calculates totals using React state.',
    scenario:
      'A small boutique clothing brand is launching their first online store. The designer has created the cart slide-out UI, but it currently has hardcoded values. You need to bring it to life so users can see their items, update quantities, and see the correct total price.',
    brief:
      'Build a React cart component. It should accept an array of product objects (id, name, price, quantity, image). Render the list of items, allow the user to increase or decrease the quantity of each item, and automatically calculate the subtotal, a flat shipping fee, and the grand total.',
    deliverables: [
      'The React component code for the Cart and CartItem',
      'The state management logic for updating item quantities and removing items',
      'The math logic for calculating the grand total securely',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on clean, predictable state updates. Never mutate the state array directly - always return a new array when updating quantities.',
    rubric: [
      { key: 'state', label: 'State Updates', description: 'Are the quantity updates immutable and bug-free?', weight: 35 },
      { key: 'math', label: 'Calculations', description: 'Is the total calculated correctly based on the current state?', weight: 30 },
      { key: 'edge', label: 'Edge Cases', description: 'Does the quantity prevent going below 1 (or does it remove the item at 0)?', weight: 20 },
      { key: 'ui', label: 'Component Structure', description: 'Is the UI broken down into sensible sub-components?', weight: 15 },
    ],
    skillsProven: ['React State', 'Array Methods', 'Basic Math Logic', 'Component Design'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'cart-localstorage-persistence',
    categoryId: 'web-development',
    topicId: 'ecommerce-shopping-cart',
    level: 'intermediate',
    title: 'Persist Cart to LocalStorage',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Ensure users do not lose their cart when they refresh the page.',
    scenario:
      'The boutique store is live, but analytics show a huge drop-off. Users are adding items to their cart on their phone, getting distracted, and when they come back later or refresh the page, their cart is empty. You need to persist the cart data locally.',
    brief:
      'Extend a basic React shopping cart to sync with the browser localStorage. When the app loads, it should check for an existing cart and initialize the state. Whenever the cart changes (item added, removed, quantity updated), it must save the new state back to localStorage.',
    deliverables: [
      'The custom hook (e.g., `useCartStorage`) or Context provider managing the persistence logic',
      'The useEffect logic handling the synchronization',
      'A brief explanation of how you handle the Next.js/SSR hydration mismatch error (if applicable)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'If using Next.js or SSR, remember that localStorage is not available on the server. Show how you prevent hydration errors when the server renders an empty cart but the client has items saved.',
    rubric: [
      { key: 'persistence', label: 'Data Persistence', description: 'Does the cart accurately save and restore from LocalStorage?', weight: 35 },
      { key: 'hydration', label: 'SSR Hydration', description: 'Is the candidate aware of and handling SSR hydration mismatches?', weight: 25 },
      { key: 'performance', label: 'Performance', description: 'Is the stringification to LocalStorage optimized (not causing unnecessary lag)?', weight: 20 },
      { key: 'craft', label: 'Hook Design', description: 'Is the logic extracted cleanly into a reusable hook or context?', weight: 20 },
    ],
    skillsProven: ['LocalStorage', 'Custom Hooks', 'SSR Hydration Mismatch', 'State Synchronization'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'cart-backend-sync-stock',
    categoryId: 'web-development',
    topicId: 'ecommerce-shopping-cart',
    level: 'advanced',
    title: 'Backend Sync & Stock Validation',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a production-grade cart that handles server validation and race conditions.',
    scenario:
      'The store is booming, but a new problem has emerged. Users are adding limited-edition items to their cart, keeping them there for days, and trying to check out after the items are actually sold out. You need to sync the local cart with the backend to validate stock in real-time.',
    brief:
      'Design the logic for a cart that syncs with a backend API. When a user opens the cart, it must ping the server to verify that the items are still in stock and the prices have not changed. If an item is out of stock, the UI must alert the user and adjust the total. Write the logic for the validation check and the mock checkout submission.',
    deliverables: [
      'The API fetching logic that validates the cart against the server database',
      'The state reconciliation logic (updating the local cart if the server says an item is out of stock)',
      'The error handling UI states (e.g., "Only 2 left in stock" or "Price updated")',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You are not building the backend, just the frontend consumer of it. Focus on how you handle the asynchronous mismatch between what the user thinks they have and what the server knows is available.',
    rubric: [
      { key: 'validation', label: 'Server Validation', description: 'Does the code successfully ping the server to validate stock and prices?', weight: 30 },
      { key: 'reconciliation', label: 'State Reconciliation', description: 'Does the local state update gracefully when the server returns bad news?', weight: 30 },
      { key: 'ux', label: 'Error UX', description: 'Are the stock errors communicated clearly to the user without breaking the app?', weight: 25 },
      { key: 'race', label: 'Race Conditions', description: 'Is the checkout button disabled while stock validation is happening?', weight: 15 },
    ],
    skillsProven: ['Data Synchronization', 'Asynchronous Validation', 'Race Condition Handling', 'Advanced UX Error States'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'modal-basic-overlay',
    categoryId: 'web-development',
    topicId: 'accessible-modal-dialog',
    level: 'beginner',
    title: 'Build a Basic CSS/JS Modal Overlay',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create a simple, cleanly styled modal without relying on external UI libraries.',
    scenario:
      'A marketing team wants to add a "Subscribe to Newsletter" pop-up to their blog. The current implementation is just a harsh browser alert(). You need to replace it with a cleanly styled HTML/CSS modal that can be toggled open and closed.',
    brief:
      'Build a basic modal component. It should have a darkened backdrop overlay, a white content box centered on the screen, an "X" button to close it, and a trigger button to open it. Clicking the darkened backdrop should also close the modal.',
    deliverables: [
      'The HTML/JSX structure for the modal and its trigger',
      'The CSS (or Tailwind classes) to handle the fixed positioning, z-index, and centering',
      'The basic state logic (vanilla JS or React useState) to toggle visibility',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on getting the CSS right. The backdrop must cover the entire viewport even if the user scrolls, and the modal box must stay centered.',
    rubric: [
      { key: 'css', label: 'CSS Positioning', description: 'Is the backdrop fixed, covering the viewport, with the correct z-index?', weight: 40 },
      { key: 'state', label: 'State Toggling', description: 'Does the modal open and close reliably?', weight: 30 },
      { key: 'ux', label: 'UX Details', description: 'Does clicking the backdrop (outside the modal box) close it?', weight: 30 },
    ],
    skillsProven: ['CSS Positioning', 'Z-Index Management', 'Basic State Toggling', 'Event Bubbling'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'modal-wai-aria-focus',
    categoryId: 'web-development',
    topicId: 'accessible-modal-dialog',
    level: 'intermediate',
    title: 'WAI-ARIA & Keyboard Accessibility',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Make the modal fully usable for screen readers and keyboard-only users.',
    scenario:
      'The company has just failed an accessibility audit. The modal you built looks great to sighted mouse-users, but screen readers do not know it is open, and keyboard users can accidentally tab to hidden elements behind the modal.',
    brief:
      'Upgrade the modal to meet WAI-ARIA standards. You must: 1) Add the correct `role` and `aria-*` attributes. 2) Implement "Focus Trapping" so that pressing the Tab key cycles only through the modals interactive elements. 3) Ensure the Escape key closes the modal. 4) Return focus to the original trigger button when the modal closes.',
    deliverables: [
      'The updated modal code including all ARIA attributes',
      'The JavaScript logic for the focus trap',
      'The keyboard event listeners (Escape key handling)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus trapping is difficult. Do not use an external library like focus-trap for this exercise - write the logic yourself to prove you understand how the DOM handles focus.',
    rubric: [
      { key: 'aria', label: 'ARIA Attributes', description: 'Are role="dialog", aria-modal="true", and aria-labelledby used correctly?', weight: 25 },
      { key: 'trap', label: 'Focus Trapping', description: 'Does the Tab key correctly loop inside the modal without escaping to the background?', weight: 35 },
      { key: 'keyboard', label: 'Keyboard Navigation', description: 'Does the Escape key work? Is focus restored to the trigger on close?', weight: 25 },
      { key: 'craft', label: 'Code Craft', description: 'Are the event listeners cleaned up properly (e.g., removing the keydown listener when unmounted)?', weight: 15 },
    ],
    skillsProven: ['WAI-ARIA Standards', 'Keyboard Navigation', 'Focus Trapping', 'DOM Event Listeners'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'modal-headless-react-portals',
    categoryId: 'web-development',
    topicId: 'accessible-modal-dialog',
    level: 'advanced',
    title: 'Headless UI & React Portals',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a reusable, headless modal system for a large-scale React application.',
    scenario:
      'The application now has 40 different modals. Developers are copying and pasting the accessibility logic everywhere, leading to bugs. The lead engineer wants you to build a single, highly reusable "Headless" Modal component system that handles the accessibility and positioning, while letting developers inject any design they want.',
    brief:
      'Design a Compound Component API for the modal (e.g., `<Modal>`, `<Modal.Trigger>`, `<Modal.Content>`). Use React Portals to render the modal at the root of the DOM to avoid CSS overflow clipping issues. Manage the shared state between these sub-components using React Context.',
    deliverables: [
      'The complete React code for the Compound Component system (Modal, Trigger, Content, CloseButton)',
      'The React Context implementation linking them together',
      'The React Portal implementation',
      'A short example of how a developer would consume/use this API in a view',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Your goal is developer experience (DX). The API should be intuitive. Make sure to explain why React Portals are necessary for modals in complex DOM trees.',
    rubric: [
      { key: 'api', label: 'Compound Component API', description: 'Is the API intuitive and highly flexible for consuming developers?', weight: 30 },
      { key: 'context', label: 'React Context', description: 'Is the shared open/close state managed elegantly across the sub-components?', weight: 25 },
      { key: 'portals', label: 'React Portals', description: 'Is the modal successfully ported to the document body to escape stacking contexts?', weight: 25 },
      { key: 'dx', label: 'Developer Experience', description: 'Is the implementation abstracted cleanly, hiding the complex accessibility logic from the consumer?', weight: 20 },
    ],
    skillsProven: ['Compound Components', 'React Portals', 'React Context', 'Headless UI Design', 'Developer Experience (DX)'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'perf-image-lazy-loading',
    categoryId: 'web-development',
    topicId: 'performance-optimization',
    level: 'beginner',
    title: 'Optimize Images & Fix Layout Shifts',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Improve page load time and stop the page from jumping around as it loads.',
    scenario:
      'A photography portfolio website looks beautiful, but it takes 8 seconds to load on a 3G connection and the text jumps around as the massive image files finally render. The client is losing visitors. You need to fix the images without degrading their visual quality.',
    brief:
      'You are provided with a basic HTML page containing 20 high-resolution `<img>` tags. Your task is to refactor the HTML and CSS to: 1) Lazy load the images so only the visible ones load initially. 2) Set explicit dimensions or aspect ratios so the browser can reserve space before the images download (fixing Cumulative Layout Shift). 3) Briefly explain how you would compress and serve modern image formats (like WebP or AVIF).',
    deliverables: [
      'The refactored HTML code with `loading="lazy"` and proper width/height attributes',
      'The CSS (or Tailwind) used to maintain the aspect ratio',
      'A short paragraph explaining your strategy for image formats and compression',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not use any heavy JavaScript libraries for lazy loading; modern browsers support this natively. Focus on preventing Cumulative Layout Shift (CLS).',
    rubric: [
      { key: 'lazy', label: 'Native Lazy Loading', description: 'Is the loading="lazy" attribute used correctly on below-the-fold images?', weight: 30 },
      { key: 'cls', label: 'Preventing CLS', description: 'Are explicit dimensions or aspect-ratio CSS used to reserve space?', weight: 40 },
      { key: 'formats', label: 'Image Formats', description: 'Does the candidate understand modern formats like WebP or AVIF?', weight: 30 },
    ],
    skillsProven: ['HTML Optimization', 'Cumulative Layout Shift (CLS)', 'Native Lazy Loading', 'Responsive Images'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'perf-react-code-splitting',
    categoryId: 'web-development',
    topicId: 'performance-optimization',
    level: 'intermediate',
    title: 'Code-Split a Bloated React App',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Reduce the initial JavaScript bundle size by lazily loading non-critical components.',
    scenario:
      'The companys React dashboard takes forever to become interactive (poor Time to Interactive). A bundle analysis reveals that a massive charting library (Chart.js) and a heavy PDF-generation library are being downloaded immediately when the user hits the login screen, even though they are only used deep inside the app.',
    brief:
      'Refactor the provided React routing setup. You need to implement route-level code splitting using `React.lazy` and `Suspense`. Ensure that the Dashboard and Settings routes (which contain the heavy libraries) are separated into their own chunks and only downloaded when the user navigates to them.',
    deliverables: [
      'The refactored `App.jsx` showing the `React.lazy` imports and `Suspense` boundary',
      'A fallback UI component (e.g., a skeleton loader) to show while the chunk is downloading',
      'An explanation of how this improves the First Input Delay (FID) and Time to Interactive (TTI)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume a standard React app using React Router. Show exactly where the Suspense boundary goes to ensure a smooth user experience without flashing loading screens excessively.',
    rubric: [
      { key: 'lazy', label: 'React.lazy Implementation', description: 'Are the heavy routes correctly imported using React.lazy?', weight: 35 },
      { key: 'suspense', label: 'Suspense & Fallbacks', description: 'Is the Suspense boundary placed correctly with a sensible fallback UI?', weight: 35 },
      { key: 'metrics', label: 'Performance Knowledge', description: 'Does the candidate correctly explain the impact on FID and TTI?', weight: 30 },
    ],
    skillsProven: ['React Code Splitting', 'React.lazy & Suspense', 'Bundle Optimization', 'Web Performance Metrics'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'perf-ssr-ssg-migration',
    categoryId: 'web-development',
    topicId: 'performance-optimization',
    level: 'advanced',
    title: 'Migrate to SSR / SSG for LCP',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Architect a transition from a slow Single Page App to Next.js for maximum performance.',
    scenario:
      'A high-traffic e-commerce storefront was built as a traditional React Single Page Application (SPA). The marketing team is furious because SEO rankings are dropping, and the Largest Contentful Paint (LCP) is over 5 seconds because the browser has to download a massive JS bundle before it can even request the product data from the API.',
    brief:
      'Write a technical migration plan to move the critical pages (Home, Product Listing, Product Details) to a framework like Next.js. You must decide and justify the rendering strategy (Static Site Generation, Server-Side Rendering, or Incremental Static Regeneration) for each specific page type based on data freshness requirements vs. performance.',
    deliverables: [
      'The chosen rendering strategy for the 1) Home Page, 2) Product Details Page, and 3) User Cart/Checkout, with strong technical justifications',
      'A code snippet showing how the Product Details page would fetch its data (e.g., `getStaticProps` vs `getServerSideProps` or React Server Components)',
      'A strategy for handling the transition without breaking existing URLs (redirects/routing)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an architectural task. There is no single "right" answer for the Product Details page - your justification of the trade-offs between SSG/ISR (speed but stale data) and SSR (fresh data but slower TTFB) is what earns points.',
    rubric: [
      { key: 'strategy', label: 'Rendering Strategies', description: 'Are the chosen rendering methods appropriate for the specific needs of each page type?', weight: 35 },
      { key: 'tradeoffs', label: 'Architectural Trade-offs', description: 'Does the candidate deeply understand the trade-offs between TTFB, LCP, and data freshness?', weight: 35 },
      { key: 'code', label: 'Data Fetching Code', description: 'Is the Next.js data fetching syntax correctly applied to support the chosen strategy?', weight: 20 },
      { key: 'seo', label: 'SEO Awareness', description: 'Is the migration plan considerate of SEO impact and URL routing?', weight: 10 },
    ],
    skillsProven: ['Next.js Architecture', 'Server-Side Rendering (SSR)', 'Static Site Generation (SSG)', 'Largest Contentful Paint (LCP)', 'Technical Leadership'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'dashboard-static-layout',
    categoryId: 'web-development',
    topicId: 'interactive-dashboard-layout',
    level: 'beginner',
    title: 'Build a Responsive Dashboard Layout',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Use CSS Grid and Flexbox to build a clean, responsive admin layout.',
    scenario:
      'A local SaaS company is building a new admin portal for their merchants. The designer has provided a layout with a persistent sidebar on desktop, a top navigation bar, and a main content area containing a grid of summary cards and a recent orders table. You need to build the structure.',
    brief:
      'Write the HTML and CSS (or Tailwind) for the dashboard skeleton. On desktop, the sidebar should be fixed to the left. On mobile, the sidebar should disappear behind a hamburger menu toggle, and the summary cards should stack vertically instead of displaying side-by-side.',
    deliverables: [
      'The HTML/JSX structure for the layout (Sidebar, Header, Main Content)',
      'The CSS or Tailwind classes used for the responsive grid and flexbox alignment',
      'The mobile menu toggle logic',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not worry about making the data real or adding charts yet. Focus purely on the CSS layout. The table must scroll horizontally on mobile without breaking the page layout.',
    rubric: [
      { key: 'layout', label: 'CSS Grid/Flexbox', description: 'Are Grid and Flexbox used appropriately for the macro layout?', weight: 35 },
      { key: 'responsive', label: 'Mobile Responsiveness', description: 'Does the sidebar collapse cleanly and the grid stack on mobile?', weight: 30 },
      { key: 'table', label: 'Table Overflow', description: 'Is horizontal scrolling handled gracefully for the data table on small screens?', weight: 20 },
      { key: 'craft', label: 'Clean Code', description: 'Is the HTML semantic (e.g., `<aside>`, `<main>`, `<nav>`)?', weight: 15 },
    ],
    skillsProven: ['CSS Grid', 'CSS Flexbox', 'Responsive Design', 'Semantic HTML'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'dashboard-charts-theme',
    categoryId: 'web-development',
    topicId: 'interactive-dashboard-layout',
    level: 'intermediate',
    title: 'Integrate Charts & Dark Mode',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Bring the dashboard to life with data visualization and theming.',
    scenario:
      'The dashboard layout is approved, but the merchants want to visualize their sales data. They also requested a dark mode because many of them check their stats late at night. You need to integrate a charting library and implement a global theme toggle.',
    brief:
      '1) Integrate a charting library (like Recharts or Chart.js) to display a "Revenue Over Time" line chart and a "Sales by Category" pie chart. 2) Implement a robust Dark Mode toggle that saves the user preference to LocalStorage and respects their system OS preference by default.',
    deliverables: [
      'The React component code integrating the two charts with mock data',
      'The Dark Mode state logic and `useEffect` for system preference checking',
      'The CSS variables or Tailwind configuration used to support the dual themes',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The dark mode implementation is the primary test here. Do not just toggle a class on the body; show how you structured your CSS variables or Tailwind config to make theming scalable across the app.',
    rubric: [
      { key: 'charts', label: 'Chart Integration', description: 'Are the charts rendered correctly and do they resize responsively?', weight: 25 },
      { key: 'theme-logic', label: 'Dark Mode Logic', description: 'Does the theme toggle work, save to storage, and check system preferences?', weight: 35 },
      { key: 'theme-css', label: 'Scalable Theming', description: 'Are CSS variables or Tailwind classes used cleanly for the theme swap?', weight: 30 },
      { key: 'ux', label: 'Flash of Unstyled Content', description: 'Does the candidate mention or handle the "flash of light mode" on reload?', weight: 10 },
    ],
    skillsProven: ['Data Visualization (Charts)', 'Theme Toggling (Dark Mode)', 'CSS Variables', 'System Preferences API'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'dashboard-realtime-websockets',
    categoryId: 'web-development',
    topicId: 'interactive-dashboard-layout',
    level: 'advanced',
    title: 'Real-Time Updates via WebSockets',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Transform a static dashboard into a live, real-time monitoring tool.',
    scenario:
      'The SaaS product is pivoting to high-frequency trading analytics. The dashboard must now display a live feed of stock prices and recent transactions. Polling the API every 5 seconds is crashing the server. The backend team has exposed a WebSocket endpoint for a live data stream.',
    brief:
      'Write the frontend architecture to consume a WebSocket data stream. 1) Establish and manage the WebSocket connection securely. 2) Listen for incoming "transaction" events and update the chart data in real-time. 3) Implement a reconnection strategy (exponential backoff) if the socket drops. 4) Ensure you are not causing severe performance issues by re-rendering the entire dashboard 10 times a second.',
    deliverables: [
      'The custom hook (e.g., `useWebSocket`) managing the connection and exponential backoff retry logic',
      'The state management code that appends new data points to the chart without freezing the UI',
      'A short note on how you would throttle or batch incoming messages if they arrive too fast',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on connection stability and render performance. Appending to an array in React state 50 times a second will kill the browser - explain your mitigation strategy.',
    rubric: [
      { key: 'socket', label: 'WebSocket Management', description: 'Is the connection opened, closed, and cleaned up properly on unmount?', weight: 30 },
      { key: 'retry', label: 'Reconnection Strategy', description: 'Is there a robust exponential backoff retry mechanism?', weight: 30 },
      { key: 'perf', label: 'Render Performance', description: 'Is the state updated efficiently (e.g., using functional state updates or batching)?', weight: 25 },
      { key: 'throttle', label: 'Data Throttling', description: 'Does the candidate understand how to handle high-frequency event bursts?', weight: 15 },
    ],
    skillsProven: ['WebSockets', 'Real-time Data', 'Exponential Backoff', 'React Render Performance', 'Data Throttling'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'form-basic-multistep',
    categoryId: 'web-development',
    topicId: 'complex-multistep-form',
    level: 'beginner',
    title: 'Build a Basic 3-Step Wizard',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Split a long form into digestible steps with simple validation.',
    scenario:
      'An insurance company has a massive 20-field quote request form on a single page, and nobody is filling it out. They want you to break it down into a friendly 3-step wizard: 1) Personal Info, 2) Vehicle Details, 3) Review & Submit.',
    brief:
      'Build a React (or vanilla JS) multi-step form. You must manage the state to track which step the user is currently on. Do not allow the user to click "Next" until all required fields on the current step are filled out. Provide a "Back" button to return to previous steps without losing data.',
    deliverables: [
      'The component structure managing the steps (e.g., a switch statement or an array of components)',
      'The state management object holding the unified form data across all steps',
      'The simple validation logic preventing the user from advancing prematurely',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on state preservation. If a user goes from Step 2 back to Step 1, their data in Step 1 must still be there.',
    rubric: [
      { key: 'state', label: 'State Preservation', description: 'Does data persist when navigating backwards and forwards?', weight: 35 },
      { key: 'routing', label: 'Step Logic', description: 'Is the logic for moving between steps clean and bug-free?', weight: 30 },
      { key: 'validation', label: 'Basic Validation', description: 'Are required fields enforced before allowing progression?', weight: 20 },
      { key: 'ux', label: 'UX', description: 'Is there a clear indication of progress (e.g., "Step 1 of 3")?', weight: 15 },
    ],
    skillsProven: ['React State (Unified)', 'Conditional Rendering', 'Basic Form Validation', 'Wizard UX Patterns'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'form-dynamic-validation',
    categoryId: 'web-development',
    topicId: 'complex-multistep-form',
    level: 'intermediate',
    title: 'Dynamic Fields & Zod Validation',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Handle dynamic form fields and complex validation schemas.',
    scenario:
      'The basic wizard was a success, but the business logic has become much more complex. If the user selects "Married", a whole new section for "Spouse Details" must appear. Furthermore, the validation rules are getting out of hand (e.g., age must be > 18 but < 100, zip code must match the selected state).',
    brief:
      'Upgrade the form to use a dedicated validation library (like Zod or Yup) and a form state manager (like React Hook Form or Formik). Implement conditional rendering: fields should appear or disappear based on the answers to previous questions. Ensure the validation schema updates dynamically based on these conditions.',
    deliverables: [
      'The validation schema definition (e.g., the Zod object)',
      'The React component showing the conditional rendering logic',
      'A brief explanation of why integrating a library like React Hook Form improves performance over raw `useState`',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task tests your ability to use industry-standard tools. Do not write custom validation logic for complex rules; rely on the schema library to do the heavy lifting safely.',
    rubric: [
      { key: 'schema', label: 'Schema Design', description: 'Is the Zod/Yup schema robust and correctly structured?', weight: 35 },
      { key: 'dynamic', label: 'Conditional Logic', description: 'Do the dynamic fields render correctly without breaking the unified state?', weight: 30 },
      { key: 'perf', label: 'Form Performance', description: 'Does the candidate understand how React Hook Form prevents excessive re-renders?', weight: 20 },
      { key: 'errors', label: 'Error Handling', description: 'Are validation errors mapped cleanly to the UI?', weight: 15 },
    ],
    skillsProven: ['Zod / Yup', 'React Hook Form', 'Dynamic Validation Schemas', 'Conditional Rendering'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'form-auto-save-drafts',
    categoryId: 'web-development',
    topicId: 'complex-multistep-form',
    level: 'advanced',
    title: 'Auto-Save & Draft Recovery',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a bulletproof form that saves progress automatically.',
    scenario:
      'Users are complaining that their browser crashed on Step 3 and they lost all their work. The product manager wants the form to automatically save progress to the backend every time a field is blurred (loses focus), and to restore that draft if the user comes back later.',
    brief:
      'Implement an Auto-Save feature. 1) Write a `useDebounce` or `onBlur` logic to trigger an API save request without spamming the server. 2) Implement an initialization sequence that checks the server for a "draft" upon load and hydrates the form state. 3) Provide visual feedback to the user (e.g., "Saving..." -> "Saved at 10:42 AM").',
    deliverables: [
      'The React code managing the auto-save trigger (debounced or onBlur)',
      'The initialization logic (fetching the draft and hydrating the form library)',
      'The visual indicator logic (handling saving/error states gracefully without blocking the user)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The biggest risk here is a race condition: what if the user types fast and the save requests arrive out of order? Explain how you mitigate this.',
    rubric: [
      { key: 'trigger', label: 'Save Triggering', description: 'Is the save logic efficient (debounced or strictly on blur)?', weight: 30 },
      { key: 'hydration', label: 'Draft Hydration', description: 'Does the form reliably initialize with the saved draft data?', weight: 25 },
      { key: 'race', label: 'Race Conditions', description: 'Does the candidate address out-of-order save requests?', weight: 25 },
      { key: 'feedback', label: 'UX Feedback', description: 'Is the auto-save process transparent but non-blocking to the user?', weight: 20 },
    ],
    skillsProven: ['Debouncing', 'Form Hydration', 'Asynchronous State Sync', 'Race Condition Mitigation'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'crud-basic-api-routes',
    categoryId: 'web-development',
    topicId: 'fullstack-crud-app',
    level: 'beginner',
    title: 'Build a Basic Express/Next.js API',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Create the backend routes to Create, Read, Update, and Delete data.',
    scenario:
      'A local library wants to digitize their book inventory. They need a simple backend API to manage the catalog. For now, they just want to store the data in memory (an array) while they figure out their database strategy.',
    brief:
      'Build a basic REST API using Express.js or Next.js API Routes. Implement four endpoints for a "Book" resource: GET (list all books), POST (add a new book), PUT (update an existing book by ID), and DELETE (remove a book by ID). Keep the data in a simple JavaScript array.',
    deliverables: [
      'The API route files handling the GET, POST, PUT, and DELETE requests',
      'The basic validation logic (e.g., ensuring a POST request has a "title" and "author")',
      'A README snippet explaining how to test the endpoints using a tool like Postman or curl',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on returning the correct HTTP status codes (e.g., 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).',
    rubric: [
      { key: 'routes', label: 'HTTP Methods', description: 'Are the GET, POST, PUT, and DELETE methods implemented correctly?', weight: 35 },
      { key: 'status', label: 'Status Codes', description: 'Does the API return semantically correct HTTP status codes?', weight: 30 },
      { key: 'validation', label: 'Basic Validation', description: 'Does the API reject invalid or malformed requests?', weight: 20 },
      { key: 'postman', label: 'Testing Guidance', description: 'Are the testing instructions clear and reproducible?', weight: 15 },
    ],
    skillsProven: ['RESTful API Design', 'HTTP Status Codes', 'Basic Routing', 'Server-side Validation'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'crud-database-integration',
    categoryId: 'web-development',
    topicId: 'fullstack-crud-app',
    level: 'intermediate',
    title: 'Integrate a Database & ORM',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Connect the backend to a real database and write relational queries.',
    scenario:
      'The library approved your API, but now they need real data persistence. They also want to track "Authors" separately from "Books". You need to connect a database, define the schema, and update the API to perform relational queries.',
    brief:
      'Integrate a PostgreSQL or SQLite database using an ORM like Prisma or Drizzle (or raw SQL). 1) Define the schema for `Author` (1-to-many) `Book`. 2) Write the logic to fetch a list of all books, including the author name in the response (a JOIN operation). 3) Write the logic to create a new book associated with an existing author.',
    deliverables: [
      'The schema definition file (e.g., `schema.prisma` or SQL migration file)',
      'The updated GET route containing the relational query (JOIN)',
      'The updated POST route demonstrating how to insert relational data safely',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need to host the database. Submit the code for the schema and the specific ORM/SQL queries you use to satisfy the relational requirements.',
    rubric: [
      { key: 'schema', label: 'Database Schema', description: 'Is the 1-to-many relationship correctly defined with foreign keys?', weight: 30 },
      { key: 'queries', label: 'Relational Queries', description: 'Is the JOIN operation (or ORM equivalent) implemented efficiently?', weight: 35 },
      { key: 'safety', label: 'SQL Injection Prevention', description: 'If using raw SQL, are parameterized queries used? If ORM, is data validated?', weight: 20 },
      { key: 'craft', label: 'Error Handling', description: 'Does the API handle database connection errors gracefully?', weight: 15 },
    ],
    skillsProven: ['Database Schema Design', 'Relational Databases (SQL)', 'ORMs (Prisma / Drizzle)', 'Data Integrity'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'crud-frontend-integration-mutations',
    categoryId: 'web-development',
    topicId: 'fullstack-crud-app',
    level: 'advanced',
    title: 'Frontend Integration & Mutations',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Connect the React frontend to the API and manage asynchronous server state.',
    scenario:
      'The database is live, and the API is solid. Now you need to build the librarian dashboard. The librarians are fast typists, and they expect the UI to update instantly when they add or delete a book, even if the database is on a slow connection.',
    brief:
      'Build the React frontend to consume the API. You must implement a data-fetching library (like React Query or SWR) or use Next.js Server Actions. Build the UI to List, Add, and Delete books. Crucially, you must implement Optimistic UI Updates so the interface feels instantaneous, and gracefully roll back the UI if the API request fails.',
    deliverables: [
      'The React component(s) rendering the list and the add/delete buttons',
      'The data-fetching and mutation logic (e.g., the `useMutation` hook)',
      'The specific code handling the Optimistic Update and the error rollback',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task brings the whole stack together. The focus is on the "seam" between the frontend and the backend. How do you handle loading states, success toasts, and network failures?',
    rubric: [
      { key: 'integration', label: 'Full-Stack Integration', description: 'Does the frontend correctly communicate with the REST API / Server Actions?', weight: 30 },
      { key: 'optimistic', label: 'Optimistic Updates', description: 'Does the UI update immediately before the network confirms the success?', weight: 35 },
      { key: 'rollback', label: 'Error Rollbacks', description: 'Is the UI state correctly reverted if the network request fails?', weight: 20 },
      { key: 'ux', label: 'Loading & Error States', description: 'Are loading spinners and error toast notifications implemented well?', weight: 15 },
    ],
    skillsProven: ['Full-Stack Integration', 'React Query / SWR', 'Optimistic UI', 'Asynchronous Error Handling'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-embed-maps',
    categoryId: 'web-development',
    topicId: 'third-party-api-integration',
    level: 'beginner',
    title: 'Embed an Interactive Map',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Read external documentation to embed a third-party widget safely.',
    scenario:
      'A local coffee shop needs a "Find Us" page. They want an interactive map showing their three locations, rather than just a static image. You need to use the Google Maps (or Mapbox) API to render this.',
    brief:
      'Use a mapping API to render an interactive map centered on a specific city. Place three custom markers on the map representing the coffee shop locations. When a user clicks a marker, a small info window should pop up showing the address.',
    deliverables: [
      'The React component initializing the map and markers',
      'A brief explanation of how you secured your API key (e.g., using environment variables and HTTP referrer restrictions)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The hardest part of this task for beginners is often just getting the API key and reading the docs. Prove you can follow external documentation.',
    rubric: [
      { key: 'integration', label: 'API Integration', description: 'Is the map rendered and are the markers correctly placed using the SDK?', weight: 40 },
      { key: 'interaction', label: 'Interactivity', description: 'Do the info windows open when markers are clicked?', weight: 30 },
      { key: 'security', label: 'API Key Security', description: 'Does the candidate understand how to prevent API key theft?', weight: 30 },
    ],
    skillsProven: ['External SDKs', 'Documentation Parsing', 'API Key Security'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-stripe-checkout',
    categoryId: 'web-development',
    topicId: 'third-party-api-integration',
    level: 'intermediate',
    title: 'Implement Stripe Checkout',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a secure payment flow using the industry standard Stripe API.',
    scenario:
      'The coffee shop wants to sell bags of beans online. You need to build the checkout button. When clicked, it should redirect the user to a secure Stripe Checkout session, and then return them to a "Success" or "Cancel" page on your site.',
    brief:
      'Build a Next.js (or Express) backend route that creates a Stripe Checkout Session using the Stripe Node.js SDK. Then, build the frontend React button that calls this route and redirects the user to the Stripe hosted payment page. Handle the redirect back to your app.',
    deliverables: [
      'The Backend route code that initializes the `stripe.checkout.sessions.create` call',
      'The Frontend code handling the button click and the redirect',
      'An explanation of why prices should be calculated on the backend, not the frontend',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Security is paramount. Never pass the final price from the client to the server; the server must look up the price based on the product ID to prevent tampering.',
    rubric: [
      { key: 'backend', label: 'Backend Session Creation', description: 'Is the Stripe session created correctly with success/cancel URLs?', weight: 40 },
      { key: 'frontend', label: 'Frontend Redirect', description: 'Does the client successfully redirect to the Stripe URL?', weight: 30 },
      { key: 'security', label: 'Price Tampering Security', description: 'Is the candidate aware of the risks of client-side pricing?', weight: 30 },
    ],
    skillsProven: ['Stripe API', 'Payment Gateways', 'Backend/Frontend Handoff', 'E-commerce Security'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-stripe-webhooks',
    categoryId: 'web-development',
    topicId: 'third-party-api-integration',
    level: 'advanced',
    title: 'Handle Stripe Webhooks securely',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Process asynchronous events securely to fulfill digital orders.',
    scenario:
      'The store is now selling a digital e-book. When a user pays via Stripe, you cannot just fulfill the order on the "Success" page, because users can bookmark that page and visit it without paying. You must listen for Stripe to securely ping your server (a webhook) to confirm the payment before emailing the e-book.',
    brief:
      'Write a Node.js/Next.js backend webhook handler. It must receive the POST request from Stripe, verify the cryptographic signature to ensure the request is actually from Stripe, parse the `checkout.session.completed` event, and run the mock fulfillment logic.',
    deliverables: [
      'The webhook route code, including the raw body parsing and `stripe.webhooks.constructEvent` verification logic',
      'The switch statement handling the specific event type',
      'A short explanation of why webhooks require raw bodies instead of JSON parsed bodies',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Webhook signature verification is notoriously tricky because it requires the raw, unparsed HTTP request body. Show that you know how to configure your server to extract this.',
    rubric: [
      { key: 'verification', label: 'Signature Verification', description: 'Is the `constructEvent` method used correctly to prevent spoofing?', weight: 40 },
      { key: 'raw-body', label: 'Raw Body Parsing', description: 'Does the candidate understand how to capture the raw request body?', weight: 30 },
      { key: 'fulfillment', label: 'Event Handling', description: 'Is the specific success event parsed and handled correctly?', weight: 30 },
    ],
    skillsProven: ['Webhooks', 'Cryptographic Signatures', 'Asynchronous Fulfillment', 'Server Configuration'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'state-custom-audio-player',
    categoryId: 'web-development',
    topicId: 'state-machine-logic',
    level: 'beginner',
    title: 'Build a Custom Audio Player',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Manage the intersecting states of HTML5 media elements.',
    scenario:
      'A podcaster wants a custom audio player on their blog that matches their brand. The native browser `<audio>` tag controls are ugly and inconsistent across browsers. You need to build custom UI controls that tie into the underlying audio element.',
    brief:
      'Create a React component that wraps an `<audio>` tag. Build custom buttons for Play/Pause, a progress bar that updates as the audio plays, and a volume slider. You must manage React state (isPlaying, currentTime, duration) and sync it with the native HTMLMediaElement events.',
    deliverables: [
      'The React component code with the `useRef` pointing to the audio element',
      'The event listeners (`onTimeUpdate`, `onLoadedMetadata`) that sync the native API with React state',
      'The UI elements that trigger changes (e.g., clicking Play calls `audioRef.current.play()`)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The challenge here is two-way binding: The UI must update when the audio plays natively, and the audio must change when the user interacts with the UI (like dragging the progress bar).',
    rubric: [
      { key: 'sync', label: 'State Synchronization', description: 'Is React state kept cleanly in sync with the native DOM element?', weight: 35 },
      { key: 'controls', label: 'Playback Controls', description: 'Do the Play/Pause buttons work and toggle correctly?', weight: 30 },
      { key: 'progress', label: 'Progress Tracking', description: 'Does the progress bar update accurately based on `currentTime`?', weight: 35 },
    ],
    skillsProven: ['HTML5 Media API', 'React `useRef`', 'Two-way State Binding', 'Event Listeners'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'state-usereducer-wizard',
    categoryId: 'web-development',
    topicId: 'state-machine-logic',
    level: 'intermediate',
    title: 'Complex State with useReducer',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Upgrade a messy cluster of `useState` hooks into a clean reducer.',
    scenario:
      'You inherited a data-table component that has 8 different `useState` hooks (`data`, `isLoading`, `error`, `sortBy`, `sortDirection`, `filterText`, `page`, `selectedRows`). Updating one often requires updating three others, causing rendering bugs and impossible states (like `isLoading: true` but `error: "Failed"`).',
    brief:
      'Refactor the provided component state logic. Replace the multiple `useState` calls with a single `useReducer` (or Redux slice). Define clear action types (e.g., `FETCH_START`, `FETCH_SUCCESS`, `SET_SORT`) that update the state in a predictable, transactional way.',
    deliverables: [
      'The initial state object and the reducer function handling the actions',
      'A code snippet showing how the component dispatches these actions',
      'An explanation of how this approach prevents "impossible states"',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus heavily on the reducer function. Make sure that when `FETCH_START` is dispatched, previous errors are cleared and data is handled appropriately.',
    rubric: [
      { key: 'reducer', label: 'Reducer Logic', description: 'Is the reducer function pure and does it handle state transitions correctly?', weight: 40 },
      { key: 'actions', label: 'Action Design', description: 'Are the action types semantic and well-structured?', weight: 30 },
      { key: 'impossible', label: 'Preventing Impossible States', description: 'Does the refactor successfully prevent conflicting states?', weight: 30 },
    ],
    skillsProven: ['React `useReducer`', 'State Architecture', 'Action Dispatching', 'Bug Prevention'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'state-xstate-checkout',
    categoryId: 'web-development',
    topicId: 'state-machine-logic',
    level: 'advanced',
    title: 'Finite State Machines (XState)',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Use mathematical state machines to build bulletproof logic flows.',
    scenario:
      'An enterprise e-commerce company is losing millions of dollars because their custom checkout flow has hidden bugs. Users are somehow clicking "Submit Payment" twice, or navigating to the "Success" page while the payment is still processing. You need to rewrite the checkout logic using a strict Finite State Machine.',
    brief:
      'Design a Finite State Machine for a checkout flow. It must have states like `idle`, `validating_cart`, `processing_payment`, `success`, and `error`. You must define the exact events (transitions) that allow movement between these states. You can use a library like XState, or write a strict custom implementation.',
    deliverables: [
      'The state machine configuration (the states, events, and transitions)',
      'The logic that explicitly rejects invalid transitions (e.g., ignoring a "SUBMIT" event if currently in `processing_payment`)',
      'A short architectural defense of why Finite State Machines are better than boolean flags for critical flows',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need to build the UI, just the logic layer. Using XState syntax is highly recommended as it is the industry standard for this pattern.',
    rubric: [
      { key: 'machine', label: 'State Machine Design', description: 'Are the states and transitions logically sound and complete?', weight: 35 },
      { key: 'guards', label: 'Transition Guards', description: 'Does the machine successfully prevent invalid actions based on current state?', weight: 35 },
      { key: 'architecture', label: 'Architectural Judgment', description: 'Does the candidate articulate the value of FSMs over boolean flags?', weight: 30 },
    ],
    skillsProven: ['Finite State Machines (FSM)', 'XState', 'Enterprise Architecture', 'Deterministic Logic'],
    relatedRoadmapIds: ['web-developer'],
  },
];

export function getTaskById(id: string): PortfolioTask | undefined {
  return portfolioTasks.find((t) => t.id === id);
}

export function getTaskByLocation(
  categoryId: string,
  topicId: string,
  level: PortfolioLevel,
): PortfolioTask | undefined {
  return portfolioTasks.find(
    (t) => t.categoryId === categoryId && t.topicId === topicId && t.level === level,
  );
}

export function getTasksByCategory(categoryId: string): PortfolioTask[] {
  return portfolioTasks.filter((t) => t.categoryId === categoryId);
}

export function getTasksByTopic(categoryId: string, topicId: string): PortfolioTask[] {
  return portfolioTasks.filter((t) => t.categoryId === categoryId && t.topicId === topicId);
}

export function getTaskUrl(task: PortfolioTask): string {
  return `/portfolio/${task.categoryId}/${task.topicId}/${task.level}`;
}
