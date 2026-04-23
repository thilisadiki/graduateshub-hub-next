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
