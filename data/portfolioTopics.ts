import type { PortfolioTopic } from '@/types';

export const portfolioTopics: PortfolioTopic[] = [
  // Web Development
  {
    id: 'landing-page-rebuild',
    categoryId: 'web-development',
    title: 'Landing Page Rebuild',
    description:
      'Rebuild a marketing page section from a screenshot or spec. Tests HTML, CSS, responsive behaviour, and design collaboration.',
    skillsProven: ['HTML', 'CSS', 'Responsive design', 'Accessibility', 'Design collaboration'],
  },
  {
    id: 'api-data-fetching',
    categoryId: 'web-development',
    title: 'API Data Fetching',
    description:
      'Build a frontend that interacts with a REST API. Tests asynchronous JavaScript, React state management, error handling, and performance optimization.',
    skillsProven: ['API integration', 'React state', 'Error handling', 'Performance optimization'],
  },
  {
    id: 'auth-flow-implementation',
    categoryId: 'web-development',
    title: 'Authentication Flow',
    description:
      'Build secure login, signup, and session management. Tests form validation, global state handling, secure cookie management, and protected routes.',
    skillsProven: ['Form validation', 'Global state', 'Secure cookies', 'Route guards'],
  },
  {
    id: 'ecommerce-shopping-cart',
    categoryId: 'web-development',
    title: 'E-commerce Shopping Cart',
    description:
      'Build a functional shopping cart experience. Tests state management, data persistence, edge case handling, and complex UI interactions.',
    skillsProven: ['State management', 'Data persistence', 'UI interactions', 'Edge cases'],
  },
  {
    id: 'accessible-modal-dialog',
    categoryId: 'web-development',
    title: 'Accessible Modal Dialog',
    description:
      'Build a modal dialog system from scratch. Tests DOM manipulation, React Portals, WAI-ARIA accessibility standards, and reusable component design.',
    skillsProven: ['DOM manipulation', 'React Portals', 'Accessibility (WAI-ARIA)', 'Component design'],
  },
  {
    id: 'performance-optimization',
    categoryId: 'web-development',
    title: 'Performance Optimization',
    description:
      'Refactor an existing application to improve Core Web Vitals. Tests lazy loading, code-splitting, rendering strategies, and identifying performance bottlenecks.',
    skillsProven: ['Web performance', 'Core Web Vitals', 'Code splitting', 'Rendering strategies'],
  },
  {
    id: 'interactive-dashboard-layout',
    categoryId: 'web-development',
    title: 'Interactive Dashboard Layout',
    description:
      'Build a complex, data-rich interface. Tests modern CSS layouts, responsive design, charting libraries, and real-time data handling.',
    skillsProven: ['CSS Grid/Flexbox', 'Responsive data tables', 'Data visualization', 'Real-time updates'],
  },
  {
    id: 'complex-multistep-form',
    categoryId: 'web-development',
    title: 'Complex Multi-step Form',
    description:
      'Build a robust data collection flow. Tests state management across steps, complex validation rules, form accessibility, and UX patterns.',
    skillsProven: ['Form state management', 'Complex validation', 'UX patterns', 'Accessibility'],
  },
  {
    id: 'fullstack-crud-app',
    categoryId: 'web-development',
    title: 'Full-Stack CRUD Application',
    description:
      'Build a complete application from database to UI. Tests backend routing, database queries, API design, and frontend integration.',
    skillsProven: ['REST/GraphQL APIs', 'Database operations', 'Full-stack integration', 'Server-side logic'],
  },
  {
    id: 'third-party-api-integration',
    categoryId: 'web-development',
    title: 'Third-Party API Integration',
    description:
      'Integrate complex external services like Stripe or Google Maps. Tests SDK usage, webhook handling, and reading external documentation.',
    skillsProven: ['API SDKs', 'Webhooks', 'Security (API Keys)', 'Documentation parsing'],
  },
  {
    id: 'state-machine-logic',
    categoryId: 'web-development',
    title: 'Complex State Machines',
    description:
      'Build applications with many intersecting states, like a custom video player or a browser game. Tests reducer logic, XState, and avoiding impossible states.',
    skillsProven: ['useReducer / XState', 'Complex state logic', 'Media APIs', 'Event handling'],
  },










  // Software Development
  {
    id: 'debug-fix',
    categoryId: 'software-development',
    title: 'Debug & Fix',
    description:
      'Diagnose a real-looking bug, fix it, and explain the root cause in plain English. Tests debugging, code craft, and technical communication.',
    skillsProven: ['Debugging', 'JavaScript fundamentals', 'Code quality', 'Technical communication'],
  },
  {
    id: 'api-design',
    categoryId: 'software-development',
    title: 'API Design',
    description:
      'Design a small, minimal REST API for a real scenario. Tests resource modelling, scope judgment, and how you handle edge cases.',
    skillsProven: ['API design', 'System thinking', 'Technical writing', 'Product scoping'],
  },
  {
    id: 'system-architecture-design',
    categoryId: 'software-development',
    title: 'System Architecture Design',
    description:
      'Design robust backends from the ground up. Tests component diagramming, scalability thinking, and trade-off analysis.',
    skillsProven: ['System design', 'Scalability', 'Microservices', 'Trade-off analysis'],
  },
  {
    id: 'database-modeling',
    categoryId: 'software-development',
    title: 'Database Modeling',
    description:
      'Design robust relational schemas. Tests normalization, understanding of indexes, and planning for complex data relationships.',
    skillsProven: ['Schema design', 'Normalization', 'Relational databases', 'Data integrity'],
  },
  {
    id: 'cicd-pipeline-setup',
    categoryId: 'software-development',
    title: 'CI/CD Pipeline Setup',
    description:
      'Design automated deployment workflows. Tests DevOps fundamentals, multi-environment setups, and zero-downtime deployment strategies.',
    skillsProven: ['DevOps', 'GitHub Actions', 'Deployment pipelines', 'Automation'],
  },
  {
    id: 'testing-strategies',
    categoryId: 'software-development',
    title: 'Testing Strategies',
    description:
      'Write robust automated tests. Tests unit testing pure functions, mocking databases for integration tests, and orchestrating E2E test flows.',
    skillsProven: ['Unit testing', 'Integration testing', 'E2E testing', 'Mocking'],
  },
  {
    id: 'code-refactoring',
    categoryId: 'software-development',
    title: 'Code Refactoring',
    description:
      'Modernize and clean up legacy codebases. Tests SOLID principles, identifying code smells, and safely migrating logic.',
    skillsProven: ['Refactoring', 'Clean code', 'SOLID principles', 'Legacy migrations'],
  },
  {
    id: 'security-vulnerability-patching',
    categoryId: 'software-development',
    title: 'Security Vulnerability Patching',
    description:
      'Identify and fix critical security flaws. Tests OWASP Top 10 knowledge, sanitization, and preventing malicious injections.',
    skillsProven: ['Security', 'OWASP Top 10', 'Data Sanitization', 'Vulnerability Patching'],
  },
  {
    id: 'backend-performance',
    categoryId: 'software-development',
    title: 'Backend Performance Optimization',
    description:
      'Speed up slow applications. Tests profiling, caching strategies (Redis), and mitigating N+1 query problems.',
    skillsProven: ['Performance Tuning', 'Caching', 'Database Profiling', 'Algorithmic Optimization'],
  },
  {
    id: 'async-processing',
    categoryId: 'software-development',
    title: 'Asynchronous Processing',
    description:
      'Manage long-running tasks and message queues. Tests event loops, worker threads, and distributed task queues (like RabbitMQ or BullMQ).',
    skillsProven: ['Message Queues', 'Event Loop', 'Background Jobs', 'Distributed Systems'],
  },
  {
    id: 'auth-authorization',
    categoryId: 'software-development',
    title: 'Authentication & Authorization',
    description:
      'Secure user identities and permissions. Tests JWT lifecycles, OAuth flows, and Role-Based Access Control (RBAC).',
    skillsProven: ['Identity Management', 'JWT', 'OAuth 2.0', 'Access Control'],
  },
  {
    id: 'container-orchestration',
    categoryId: 'software-development',
    title: 'Containerization & Orchestration',
    description:
      'Deploy applications reliably at scale. Tests Docker best practices, multi-container Compose setups, and Kubernetes fundamentals.',
    skillsProven: ['Docker', 'Kubernetes', 'Infrastructure as Code', 'Microservices'],
  },

  // Data
  {
    id: 'data-cleaning',
    categoryId: 'data',
    title: 'Data Cleaning & Insights',
    description:
      'Clean a messy dataset and turn it into insights a manager can act on. Tests data handling, analytical thinking, and business communication.',
    skillsProven: ['Data cleaning', 'Exploratory data analysis', 'Business communication', 'Analytical thinking'],
  },
  {
    id: 'data-visualisation',
    categoryId: 'data',
    title: 'Data Visualisation',
    description:
      'Choose the right chart for a specific audience and cadence, and defend the choice. Tests metric selection, visual design, and executive communication.',
    skillsProven: ['Data visualisation', 'Metric selection', 'Executive communication', 'Analytical judgment'],
  },
  {
    id: 'sql-querying',
    categoryId: 'data',
    title: 'SQL Querying & Analysis',
    description:
      'Write, debug, and optimise SQL queries for real analytical work. Tests GROUP BY logic, window functions, joins, and query performance.',
    skillsProven: ['SQL', 'Aggregations', 'Window functions', 'Query optimisation'],
  },
  {
    id: 'statistical-thinking',
    categoryId: 'data',
    title: 'Statistical Thinking',
    description:
      'Interpret and communicate statistics honestly. Tests descriptive stats, hypothesis testing, and the ability to spot misleading analysis.',
    skillsProven: ['Descriptive statistics', 'Hypothesis testing', 'Statistical reasoning', 'Business communication'],
  },
  {
    id: 'spreadsheet-modelling',
    categoryId: 'data',
    title: 'Excel / Spreadsheet Modelling',
    description:
      'Build robust models in the most-used analytics tool in business. Tests pivot tables, what-if analysis, and simulation techniques.',
    skillsProven: ['Pivot tables', 'Excel formulas', 'What-if analysis', 'Data modelling'],
  },
  {
    id: 'python-data-analysis',
    categoryId: 'data',
    title: 'Python for Data Analysis',
    description:
      'Use pandas, numpy, and the Python data ecosystem for analysis and automation. Tests data wrangling, merging, and report generation.',
    skillsProven: ['pandas', 'numpy', 'Data wrangling', 'Report automation'],
  },
  {
    id: 'business-metrics-kpis',
    categoryId: 'data',
    title: 'Business Metrics & KPIs',
    description:
      'Understand what to measure and why. Tests metric definition, root-cause analysis, and building metrics frameworks that drive decisions.',
    skillsProven: ['KPI definition', 'Root-cause analysis', 'North Star metrics', 'Business acumen'],
  },
  {
    id: 'data-storytelling',
    categoryId: 'data',
    title: 'Data Storytelling & Presentation',
    description:
      'Turn data into narratives that move stakeholders to act. Tests executive communication, slide design, and handling conflicting data.',
    skillsProven: ['Executive communication', 'Slide design', 'Narrative structure', 'Stakeholder management'],
  },
  {
    id: 'etl-data-pipelines',
    categoryId: 'data',
    title: 'ETL & Data Pipelines',
    description:
      'Design reliable data flows from source to warehouse. Tests pipeline design, schema evolution, and real-time streaming architecture.',
    skillsProven: ['ETL design', 'Schema management', 'Data engineering', 'Streaming architecture'],
  },
  {
    id: 'ml-fundamentals',
    categoryId: 'data',
    title: 'Machine Learning Fundamentals',
    description:
      'Apply practical, applied machine learning thinking. Tests algorithm selection, model evaluation, and bias detection.',
    skillsProven: ['Algorithm selection', 'Model evaluation', 'Bias detection', 'Applied ML'],
  },
  {
    id: 'dashboard-design-bi',
    categoryId: 'data',
    title: 'Dashboard Design & BI Tools',
    description:
      'Design interactive, self-service analytics interfaces. Tests information hierarchy, filter design, and real-time monitoring.',
    skillsProven: ['Dashboard design', 'Information hierarchy', 'BI tools', 'Real-time monitoring'],
  },
  {
    id: 'data-governance-quality',
    categoryId: 'data',
    title: 'Data Governance & Quality',
    description:
      'Ensure data is trustworthy, compliant, and well-documented. Tests data dictionaries, quality checks, and privacy compliance.',
    skillsProven: ['Data dictionaries', 'Data quality', 'POPIA/GDPR compliance', 'Data documentation'],
  },

  // Digital Marketing
  {
    id: 'social-media-audit',
    categoryId: 'digital-marketing',
    title: 'Social Media Audit',
    description:
      'Audit a small business social presence and propose a 30-day plan. Tests content strategy, marketing analytics, and practical planning.',
    skillsProven: ['Social media strategy', 'Content planning', 'Marketing analytics', 'Small business marketing'],
  },
  {
    id: 'email-experimentation',
    categoryId: 'digital-marketing',
    title: 'Email Experimentation',
    description:
      'Design a rigorous email A/B test. Tests experimentation design, statistical reasoning, and marketing judgment.',
    skillsProven: ['Email marketing', 'A/B testing', 'Marketing analytics', 'Experimentation design'],
  },
  {
    id: 'seo-organic-growth',
    categoryId: 'digital-marketing',
    title: 'SEO & Organic Growth',
    description:
      'Understand how search engines work and how to earn organic traffic. Tests keyword research, on-page optimisation, technical SEO, and content-led growth.',
    skillsProven: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Search intent'],
  },
  {
    id: 'paid-media-ppc',
    categoryId: 'digital-marketing',
    title: 'Paid Media & PPC',
    description:
      'Run paid campaigns that generate measurable ROI. Tests campaign structure, budget allocation, audience targeting, and performance diagnosis.',
    skillsProven: ['Google Ads', 'Meta Ads', 'ROAS optimisation', 'Audience targeting'],
  },
  {
    id: 'content-strategy',
    categoryId: 'digital-marketing',
    title: 'Content Strategy & Marketing',
    description:
      'Plan, create, and distribute content that drives business outcomes. Tests content briefs, topic clusters, and content ROI measurement.',
    skillsProven: ['Content planning', 'Topic clusters', 'SEO content', 'Content ROI'],
  },
  {
    id: 'marketing-analytics-attribution',
    categoryId: 'digital-marketing',
    title: 'Marketing Analytics & Attribution',
    description:
      'Measure what works and make data-driven marketing decisions. Tests dashboard design, attribution modelling, and marketing mix analysis.',
    skillsProven: ['Campaign analytics', 'Attribution modelling', 'Marketing dashboards', 'Data-driven marketing'],
  },
  {
    id: 'conversion-rate-optimisation',
    categoryId: 'digital-marketing',
    title: 'Conversion Rate Optimisation (CRO)',
    description:
      'Turn traffic into customers through systematic testing. Tests landing page analysis, experiment design, and full-funnel conversion thinking.',
    skillsProven: ['CRO', 'Landing page optimisation', 'A/B testing', 'Funnel analysis'],
  },
  {
    id: 'brand-strategy-positioning',
    categoryId: 'digital-marketing',
    title: 'Brand Strategy & Positioning',
    description:
      'Build brands that stand for something in crowded markets. Tests positioning statements, competitive mapping, and brand architecture.',
    skillsProven: ['Brand positioning', 'Competitive analysis', 'Brand architecture', 'Strategic thinking'],
  },
  {
    id: 'influencer-community',
    categoryId: 'digital-marketing',
    title: 'Influencer & Community Marketing',
    description:
      'Leverage people and communities as marketing channels. Tests influencer selection, community building, and campaign measurement.',
    skillsProven: ['Influencer marketing', 'Community building', 'Partnership management', 'Campaign measurement'],
  },
  {
    id: 'growth-strategy-gtm',
    categoryId: 'digital-marketing',
    title: 'Growth Strategy & Go-to-Market',
    description:
      'Think like a growth marketer — acquisition, activation, retention. Tests AARRR funnels, referral design, and market expansion planning.',
    skillsProven: ['Growth marketing', 'AARRR framework', 'Referral programmes', 'Go-to-market strategy'],
  },

  // Finance & Accounting
  {
    id: 'cash-flow-forecasting',
    categoryId: 'finance-accounting',
    title: 'Cash Flow Forecasting',
    description:
      'Build a defensible cash flow forecast for a small business. Tests financial modelling, assumption quality, and financial storytelling.',
    skillsProven: ['Cash flow modelling', 'Financial forecasting', 'SME finance', 'Financial storytelling'],
  },
  {
    id: 'ratio-analysis',
    categoryId: 'finance-accounting',
    title: 'Ratio Analysis',
    description:
      'Interpret financial ratios and write a short credit memo. Tests financial analysis and the ability to explain numbers in plain English.',
    skillsProven: ['Financial ratio analysis', 'Credit thinking', 'Business writing', 'Financial judgment'],
  },
  {
    id: 'budgeting-variance',
    categoryId: 'finance-accounting',
    title: 'Budgeting & Variance Analysis',
    description:
      'Plan, track, and explain financial performance vs budget. Tests budget construction, variance decomposition, and zero-based thinking.',
    skillsProven: ['Budget construction', 'Variance analysis', 'Zero-based budgeting', 'Financial planning'],
  },
  {
    id: 'financial-statements-reporting',
    categoryId: 'finance-accounting',
    title: 'Financial Statements & Reporting',
    description:
      'Read, prepare, and interpret income statements, balance sheets, and cash flow statements. Tests financial literacy and reporting accuracy.',
    skillsProven: ['Income statements', 'Balance sheets', 'Financial reporting', 'Trial balance'],
  },
  {
    id: 'tax-compliance-sa',
    categoryId: 'finance-accounting',
    title: 'Tax Compliance (South Africa)',
    description:
      'Understand SARS obligations including VAT, PAYE, UIF, SDL, and provisional tax. Tests practical tax calculation and compliance awareness.',
    skillsProven: ['VAT', 'PAYE', 'Provisional tax', 'SARS compliance'],
  },
  {
    id: 'management-accounting',
    categoryId: 'finance-accounting',
    title: 'Management Accounting',
    description:
      'Internal reporting that drives operational decisions. Tests break-even analysis, cost allocation, and make-vs-buy decision-making.',
    skillsProven: ['Break-even analysis', 'Cost allocation', 'Activity-based costing', 'Decision analysis'],
  },
  {
    id: 'audit-internal-controls',
    categoryId: 'finance-accounting',
    title: 'Audit & Internal Controls',
    description:
      'Ensure financial accuracy and prevent fraud. Tests control design, audit trail tracing, and fraud risk assessment.',
    skillsProven: ['Internal controls', 'Segregation of duties', 'Audit trails', 'Fraud risk assessment'],
  },
  {
    id: 'payroll-statutory-returns',
    categoryId: 'finance-accounting',
    title: 'Payroll & Statutory Returns',
    description:
      'Process payroll and meet SARS filing obligations. Tests gross-to-net calculations, EMP201/501 preparation, and payroll system design.',
    skillsProven: ['Payroll processing', 'EMP201', 'EMP501', 'Statutory deductions'],
  },
  {
    id: 'investment-appraisal',
    categoryId: 'finance-accounting',
    title: 'Investment Appraisal',
    description:
      'Evaluate capital expenditure decisions using NPV, IRR, and payback period. Tests financial technique application and sensitivity analysis.',
    skillsProven: ['NPV', 'IRR', 'Payback period', 'Capital budgeting'],
  },
  {
    id: 'financial-modelling-valuation',
    categoryId: 'finance-accounting',
    title: 'Financial Modelling & Valuation',
    description:
      'Build financial models and value businesses. Tests revenue driver modelling, three-statement linkage, and DCF valuation.',
    skillsProven: ['Financial modelling', 'DCF valuation', 'Revenue forecasting', 'Three-statement models'],
  },

  // Design & UX
  {
    id: 'ux-teardown',
    categoryId: 'design-ux',
    title: 'UX Teardown',
    description:
      'Critique a real product flow and propose concrete fixes with priorities. Tests heuristic evaluation, design critique, and product prioritisation.',
    skillsProven: ['UX analysis', 'Heuristic evaluation', 'Design critique', 'Product prioritisation'],
  },
  {
    id: 'user-research-interviews',
    categoryId: 'design-ux',
    title: 'User Research & Interviews',
    description:
      'Understand users through qualitative and quantitative methods. Tests interview script writing, affinity mapping, and research programme design.',
    skillsProven: ['User interviews', 'Affinity mapping', 'Research synthesis', 'Research operations'],
  },
  {
    id: 'information-architecture',
    categoryId: 'design-ux',
    title: 'Information Architecture',
    description:
      'Organise and structure content so users can find what they need. Tests card sorting, sitemap design, navigation, and taxonomy.',
    skillsProven: ['Card sorting', 'Sitemap design', 'Navigation design', 'Taxonomy'],
  },
  {
    id: 'wireframing-prototyping',
    categoryId: 'design-ux',
    title: 'Wireframing & Prototyping',
    description:
      'Translate ideas into testable low- and mid-fidelity designs. Tests sketching, interactive prototyping, and complex interaction modelling.',
    skillsProven: ['Wireframing', 'Prototyping', 'Interaction flows', 'Lo-fi design'],
  },
  {
    id: 'ui-visual-design',
    categoryId: 'design-ux',
    title: 'UI Design & Visual Design',
    description:
      'Make interfaces beautiful, consistent, and functional. Tests visual hierarchy, layout, colour theory, and responsive design.',
    skillsProven: ['Visual design', 'UI layout', 'Colour theory', 'Responsive design'],
  },
  {
    id: 'design-systems',
    categoryId: 'design-ux',
    title: 'Design Systems',
    description:
      'Build reusable component libraries and design tokens. Tests component specification, token architecture, and library auditing.',
    skillsProven: ['Component design', 'Design tokens', 'Style guides', 'Consistency auditing'],
  },
  {
    id: 'usability-testing',
    categoryId: 'design-ux',
    title: 'Usability Testing',
    description:
      'Plan, run, and analyse usability tests. Tests test plan writing, result synthesis, and remote testing strategy.',
    skillsProven: ['Usability testing', 'Test planning', 'Result analysis', 'Task design'],
  },
  {
    id: 'interaction-design',
    categoryId: 'design-ux',
    title: 'Interaction Design & Micro-interactions',
    description:
      'Design how interfaces respond to user input. Tests form validation, notification systems, and gesture-based interactions.',
    skillsProven: ['Interaction design', 'Micro-interactions', 'Form design', 'Motion design'],
  },
  {
    id: 'accessibility-a11y',
    categoryId: 'design-ux',
    title: 'Accessibility (a11y)',
    description:
      'Design for all users, including those with disabilities. Tests WCAG auditing, keyboard navigation, and inclusive design strategy.',
    skillsProven: ['WCAG compliance', 'Keyboard navigation', 'Screen reader support', 'Inclusive design'],
  },
  {
    id: 'ux-writing-content-design',
    categoryId: 'design-ux',
    title: 'UX Writing & Content Design',
    description:
      'Write interface copy that helps users accomplish tasks. Tests error messages, onboarding copy, and content design systems.',
    skillsProven: ['UX writing', 'Microcopy', 'Voice & tone', 'Content design'],
  },
];

export function getTopicById(categoryId: string, topicId: string): PortfolioTopic | undefined {
  return portfolioTopics.find((t) => t.categoryId === categoryId && t.id === topicId);
}

export function getTopicsByCategory(categoryId: string): PortfolioTopic[] {
  return portfolioTopics.filter((t) => t.categoryId === categoryId);
}
