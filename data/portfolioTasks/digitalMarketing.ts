import type { PortfolioTask } from '@/types';

export const digitalMarketingTasks: PortfolioTask[] = [
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
];
