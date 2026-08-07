export interface PortfolioCategorySeo {
  id: string;
  seoTitle: string;
  seoDescription: string;
  whyBuildPortfolio: string;
  whatRecruitersLookFor: { title: string; desc: string }[];
  keySkillsTested: string[];
  faqs: { question: string; answer?: string; a?: string }[];
  relatedRoadmapHref?: string;
  relatedRoadmapLabel?: string;
}

export const portfolioCategorySeoData: Record<string, PortfolioCategorySeo> = {
  'information-technology': {
    id: 'information-technology',
    seoTitle: 'IT & Infrastructure Portfolio Tasks & Graded Briefs',
    seoDescription:
      'Build real-world IT proof of work: home lab setups, ITIL incident logs, Active Directory policy designs, network subnetting, and backup disaster recovery documentation.',
    whyBuildPortfolio:
      'Corporate IT departments and Managed Service Providers (MSPs) receive hundreds of CVs listing generic skills like "Active Directory" or "Troubleshooting". A documented IT portfolio containing home lab network diagrams, ITIL-aligned incident ticket logs, and M365 migration checklists immediately separates you from applicants who only possess theoretical certifications.',
    whatRecruitersLookFor: [
      {
        title: 'Structured Troubleshooting Methodologies',
        desc: 'Recruiters check whether you follow logical isolation steps when diagnosing network, server, or software issues rather than guessing.',
      },
      {
        title: 'Standard Operating Procedure (SOP) Clarity',
        desc: 'IT managers value technicians who write clean, repeatable documentation so team members can handle recurring tasks without escalation.',
      },
      {
        title: 'Security-First Configuration Principles',
        desc: 'Proof that you implement principle of least privilege, patch management, multi-factor authentication, and backup verification.',
      },
    ],
    keySkillsTested: [
      'ITIL Service Management & Incident Logging',
      'Active Directory & M365 User Provisioning',
      'Network Subnetting & Firewall Rules',
      'Backup & Disaster Recovery Strategy (3-2-1 rule)',
      'Hardware Lifecycle & Asset Management',
    ],
    faqs: [
      {
        question: 'Do IT support candidates really need a portfolio?',
        a: 'Yes. Demonstrating documented home labs, ticket runbooks, and SOP policy write-ups proves to IT managers that you have practical hands-on capability beyond passing a theoretical exam.',
      },
      {
        question: 'What is the best initial IT portfolio project for graduates?',
        a: 'Setting up a virtualized home lab (using VirtualBox or Hyper-V) with Windows Server, Active Directory, and logging your configuration steps in a clean markdown repository.',
      },
      {
        question: 'How are these IT tasks evaluated?',
        a: 'Each task includes a strict grading rubric evaluating technical accuracy, documentation clarity, security adherence, and business risk awareness.',
      },
      {
        question: 'Can I link my completed IT portfolio tasks on LinkedIn?',
        a: 'Absolutely. Upon completing and passing a task, you earn a verified Badge of Competence and shareable proof link ideal for LinkedIn and CVs.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/it-support-specialist',
    relatedRoadmapLabel: 'IT Support Specialist Roadmap',
  },

  'software-development': {
    id: 'software-development',
    seoTitle: 'Software Engineering Portfolio Tasks & Code Briefs',
    seoDescription:
      'Complete graded software engineering tasks: backend REST APIs, authentication flows, algorithm optimizations, database transactions, and clean architecture designs.',
    whyBuildPortfolio:
      'Writing code is demonstrable proof. Hiring managers evaluate software engineers on clean architecture, unit testing, error handling, and API design. A portfolio of practical engineering tasks proves you can write production-ready code rather than copy-pasted tutorial snippets.',
    whatRecruitersLookFor: [
      {
        title: 'Clean Code & Architectural Design',
        desc: 'Readable naming conventions, separation of concerns, and adherence to SOLID principles.',
      },
      {
        title: 'Defensive Error Handling',
        desc: 'Proper input validation, status codes, logging, and graceful degradation under failure.',
      },
      {
        title: 'Test Coverage & Quality',
        desc: 'Unit and integration tests demonstrating that code behaves correctly under edge cases.',
      },
    ],
    keySkillsTested: [
      'RESTful API Design & Open API Specifications',
      'JWT Authentication & Access Control',
      'Database Schema Modeling & Transactions',
      'Algorithmic Complexity & Data Structures',
      'Automated Testing Frameworks',
    ],
    faqs: [
      {
        question: 'What makes a software engineering portfolio stand out?',
        a: 'Focusing on robust backend logic, database schema design, unit tests, and well-documented API contracts rather than superficial UI styling.',
      },
      {
        question: 'Do I need to submit full GitHub repositories for these tasks?',
        a: 'You can submit markdown documentation or code links containing your solution architecture, code snippets, and test suite outputs.',
      },
      {
        question: 'Which programming language should I use for software development tasks?',
        a: 'You can use Python, TypeScript, Java, C#, or Go. Our rubrics evaluate architectural principles, logic, and test coverage regardless of language.',
      },
      {
        question: 'How do these tasks help in technical interviews?',
        a: 'The scenarios directly mirror take-home engineering assessments and system design questions asked by tech companies.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/software-engineer',
    relatedRoadmapLabel: 'Software Engineer Roadmap',
  },

  'web-development': {
    id: 'web-development',
    seoTitle: 'Web Development Portfolio Tasks & Frontend/Full-Stack Briefs',
    seoDescription:
      'Build responsive web development portfolio tasks: accessible UI components, state management wizards, full-stack CRUD apps, and performance audits.',
    whyBuildPortfolio:
      'Frontend and web engineering roles require visual and functional proof. Recruiters check responsive design across device viewports, DOM accessibility (WCAG), state management integrity, and fast page load metrics.',
    whatRecruitersLookFor: [
      {
        title: 'Semantic HTML & Accessibility (a11y)',
        desc: 'Proper ARIA attributes, keyboard navigation, and semantic HTML5 layout structures.',
      },
      {
        title: 'State Management & Async Data Fetching',
        desc: 'Clean React hooks, loading states, error boundaries, and optimistic UI updates.',
      },
      {
        title: 'Responsive & Performant Layouts',
        desc: 'CSS grid/flexbox layouts that scale flawlessly across mobile, tablet, and desktop viewports.',
      },
    ],
    keySkillsTested: [
      'HTML5, Modern CSS, & Tailwind',
      'React, Next.js, & TypeScript State Patterns',
      'API Data Fetching & Caching Strategies',
      'Web Performance & Core Web Vitals Optimization',
      'Form Validation & Dynamic Controls',
    ],
    faqs: [
      {
        question: 'Should web development portfolio projects be deployed live?',
        a: 'Yes. Live deployments on Vercel or Netlify alongside clean GitHub source code give recruiters immediate proof of functional work.',
      },
      {
        question: 'How do I prove accessibility knowledge on my web portfolio?',
        a: 'Include Lighthouse accessibility scores, keyboard focus states, and semantic HTML elements in your project documentation.',
      },
      {
        question: 'Are full-stack projects preferred over frontend-only UI clones?',
        a: 'Full-stack CRUD apps with real database persistence demonstrate much higher technical maturity than static UI clones.',
      },
      {
        question: 'Can I use Next.js and Tailwind for these tasks?',
        a: 'Yes. Modern frontend frameworks like Next.js, React, and Tailwind CSS are ideal for building clean, performant submissions.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/web-developer',
    relatedRoadmapLabel: 'Web Developer Roadmap',
  },

  'data-analysis': {
    id: 'data-analysis',
    seoTitle: 'Data & Analytics Portfolio Tasks & Data Science Briefs',
    seoDescription:
      'Complete graded data analyst tasks: SQL database queries, Power BI dashboards, Python data cleaning scripts, and business intelligence reporting.',
    whyBuildPortfolio:
      'Data analysts succeed by transforming raw, messy data into actionable business decisions. A portfolio featuring SQL query libraries, cleaned datasets, and Power BI dashboards demonstrates that you can answer real business questions.',
    whatRecruitersLookFor: [
      {
        title: 'SQL Proficiency & Query Efficiency',
        desc: 'Writing multi-table JOINs, subqueries, and window functions to extract metrics accurately.',
      },
      {
        title: 'Data Cleaning & Hygiene Logic',
        desc: 'Handling null values, duplicate records, outliers, and datatypes before running analysis.',
      },
      {
        title: 'Business Insight Storytelling',
        desc: 'Presenting dashboard findings with clear executive summaries and decision recommendations.',
      },
    ],
    keySkillsTested: [
      'SQL Querying (JOINs, GROUP BY, CTEs, Window Functions)',
      'Microsoft Excel (VLOOKUP, Pivot Tables, Macros)',
      'Power BI & Tableau Dashboard Design',
      'Python Data Manipulation (pandas, NumPy)',
      'Statistical Analysis & Trend Identification',
    ],
    faqs: [
      {
        question: 'What is the most important skill to showcase in a data analyst portfolio?',
        a: 'SQL querying capability combined with clear data visualization. Hiring managers want to see how you pull and present data to answer specific commercial questions.',
      },
      {
        question: 'Should I include Python or Excel in my data portfolio?',
        a: 'Both. Excel and SQL handle the vast majority of entry-level reporting, while Python demonstrates advanced data cleaning and automation skills.',
      },
      {
        question: 'Where can I find public datasets for these tasks?',
        a: 'Each task brief provides structured datasets or links to open-data sources like Kaggle and government data portals.',
      },
      {
        question: 'How long should a data analytics portfolio case study be?',
        a: 'Focus on quality over length: a clear business problem statement, 3 key visualizations, SQL query snippets, and a 3-bullet executive recommendation.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/data-analyst',
    relatedRoadmapLabel: 'Data Analyst Roadmap',
  },

  'digital-marketing': {
    id: 'digital-marketing',
    seoTitle: 'Digital Marketing & Growth Portfolio Tasks & Campaign Briefs',
    seoDescription:
      'Complete practical digital marketing tasks: Google Search Ad campaign plans, SEO technical audits, e-commerce conversion funnels, and email automation flows.',
    whyBuildPortfolio:
      'Digital marketing isn\'t just about creating content; it\'s about driving measurable return on ad spend (ROAS) and user acquisition. Building campaign blueprints, SEO audit documents, and email automation maps gives recruiters tangible proof of your strategic abilities.',
    whatRecruitersLookFor: [
      {
        title: 'Performance Metric Awareness',
        desc: 'Understanding key conversion metrics: Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and Click-Through Rate (CTR).',
      },
      {
        title: 'Search Intent & Keyword Strategy',
        desc: 'Structuring paid ad groups and organic content around commercial search intent.',
      },
      {
        title: 'Funnel Optimization Logic',
        desc: 'Mapping customer touchpoints from initial ad impression to checkout retention.',
      },
    ],
    keySkillsTested: [
      'Search Engine Optimization (SEO Audit & Keyword Mapping)',
      'Google Search & Performance Max Ads Strategy',
      'Email Marketing Automation (Klaviyo / Mailchimp)',
      'Google Analytics 4 (GA4) Conversion Tracking',
      'E-Commerce Conversion Rate Optimization (CRO)',
    ],
    faqs: [
      {
        question: 'How can a graduate build a marketing portfolio without ad budget?',
        a: 'By creating realistic campaign blueprints: detailed keyword research spreadsheets, written search ad copy, landing page wireframes, and GA4 tracking plans.',
      },
      {
        question: 'Are SEO audits good portfolio projects?',
        a: 'Yes. An on-page and technical SEO audit of a real business website is one of the strongest portfolio items for digital marketing roles.',
      },
      {
        question: 'What marketing software should I list in my portfolio documentation?',
        a: 'Google Analytics 4, Google Ads, Google Search Console, Ahrefs/SEMrush, and email tools like Mailchimp or Klaviyo.',
      },
      {
        question: 'How are marketing tasks evaluated?',
        a: 'Tasks are evaluated on audience targeting precision, KPI definition, copy relevance, and conversion logic.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/google-digital-marketing-ecommerce',
    relatedRoadmapLabel: 'Digital Marketing & E-Commerce Roadmap',
  },

  'finance-accounting': {
    id: 'finance-accounting',
    seoTitle: 'Finance & Accounting Portfolio Tasks & Financial Modeling Briefs',
    seoDescription:
      'Complete financial accounting tasks: budget variance analyses, 3-statement financial models, payroll reconciliation reports, and auditing checklists.',
    whyBuildPortfolio:
      'Finance and accounting roles demand precision, compliance, and analytical rigour. Demonstrating completed financial modeling spreadsheets, variance analysis templates, and audit documentation shows employers you possess practical corporate accounting capability.',
    whatRecruitersLookFor: [
      {
        title: 'Numerical Accuracy & Formula Integrity',
        desc: 'Clean, dynamic Excel formulas without hardcoded numbers in calculation cells.',
      },
      {
        title: 'Compliance & GAAP/IFRS Understanding',
        desc: 'Proper classification of assets, liabilities, revenue, and expenses according to accounting standards.',
      },
      {
        title: 'Financial Variance Insights',
        desc: 'Explaining the commercial causes behind budget variances rather than just calculating percentages.',
      },
    ],
    keySkillsTested: [
      'Financial Statement Modeling (Income Statement, Balance Sheet, Cash Flow)',
      'Budget vs Actual Variance Analysis',
      'Microsoft Excel Advanced Modeling (INDEX/MATCH, XLOOKUP, Pivot Tables)',
      'Payroll & Tax Reconciliation Worksheets',
      'Internal Controls & Audit Readiness',
    ],
    faqs: [
      {
        question: 'Why build an accounting portfolio if I have a degree?',
        a: 'Degrees teach accounting theory; portfolio tasks prove you can build financial models in Excel and navigate real corporate GL structures.',
      },
      {
        question: 'What Excel formulas are essential for finance portfolio tasks?',
        a: 'XLOOKUP/INDEX-MATCH, SUMIFS, IF/AND statements, PMT/NPV financial functions, and dynamic Pivot Tables.',
      },
      {
        question: 'Can I include financial analysis of public companies?',
        a: 'Yes. Analyzing audited financial reports of listed companies (e.g. JSE or S&P 500) makes excellent portfolio material.',
      },
      {
        question: 'How do these tasks help with SAICA or CIMA training contracts?',
        a: 'They prove practical Excel fluency and financial statement analysis skills during entry-level interview evaluations.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/financial-analyst',
    relatedRoadmapLabel: 'Financial Analyst Roadmap',
  },

  'design-ux': {
    id: 'design-ux',
    seoTitle: 'UI/UX & Product Design Portfolio Tasks & Case Studies',
    seoDescription:
      'Build UI/UX design case studies: wireframe prototypes, accessibility design audits, design system components, and usability testing documentation.',
    whyBuildPortfolio:
      'In product design, your portfolio is your primary resume. Design managers evaluate user research rationale, component consistency, interactive wireframes, and micro-interactions over superficial aesthetic renders.',
    whatRecruitersLookFor: [
      {
        title: 'User-Centered Problem Definition',
        desc: 'Documenting user friction and business context before jumping into visual Figma design.',
      },
      {
        title: 'Design System & Component Hygiene',
        desc: 'Using auto-layout, design tokens, responsive breakpoints, and reusable component variants.',
      },
      {
        title: 'Accessibility & Contrast Compliance',
        desc: 'Ensuring color contrast passes WCAG standards and interactive elements have clear focus states.',
      },
    ],
    keySkillsTested: [
      'Figma Wireframing & Interactive Prototyping',
      'User Research & Usability Testing Synthesis',
      'Design System Component Architecture',
      'WCAG Accessibility & Color Contrast Auditing',
      'Mobile-First & Responsive Layout Design',
    ],
    faqs: [
      {
        question: 'What makes a strong UX design case study?',
        a: 'A clear structure: Problem statement, user research insights, wireframe iterations, final interactive prototype, and usability test results.',
      },
      {
        question: 'Is Figma required for these UI/UX design tasks?',
        a: 'Figma is the industry standard tool used for these briefs, though Adobe XD or Penpot solutions are also acceptable.',
      },
      {
        question: 'Should design case studies include wireframe iterations?',
        a: 'Yes. Showing early sketches and iteration decisions proves your design process and problem-solving mindset.',
      },
      {
        question: 'How do I link Figma prototypes in my portfolio submission?',
        a: 'Include view-only Figma links alongside a clean summary markdown document in your submission.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/ui-ux-designer',
    relatedRoadmapLabel: 'UI/UX Designer Roadmap',
  },

  'business-analysis': {
    id: 'business-analysis',
    seoTitle: 'Business Analysis Portfolio Tasks & Process Mapping Briefs',
    seoDescription:
      'Complete graded business analyst tasks: BPMN process flow diagrams, functional specification documents, user story backlogs, and gap analyses.',
    whyBuildPortfolio:
      'Business analysts act as the bridge between business stakeholders and software development teams. Presenting documented process maps, functional specification documents (FSDs), and prioritized Jira-style user story backlogs provides concrete evidence of your analytical capabilities.',
    whatRecruitersLookFor: [
      {
        title: 'Requirement Clarity & Acceptance Criteria',
        desc: 'Writing unambiguous user stories with testable Given-When-Then acceptance criteria.',
      },
      {
        title: 'BPMN Process Modeling Standards',
        desc: 'Mapping current-state (AS-IS) and future-state (TO-BE) business workflows correctly.',
      },
      {
        title: 'Stakeholder & Traceability Alignment',
        desc: 'Linking business requirements directly to technical deliverables and test cases.',
      },
    ],
    keySkillsTested: [
      'BPMN 2.0 Business Process Flow Mapping',
      'Functional & Non-Functional Requirement Specification',
      'Agile User Story Writing & Acceptance Criteria (Gherkin)',
      'Gap Analysis & Feasibility Evaluation',
      'Data Dictionary & Entity Relationship Modeling',
    ],
    faqs: [
      {
        question: 'What documents should a business analyst portfolio include?',
        a: 'BPMN process diagrams, Functional Specification Documents (FSDs), user story backlogs with acceptance criteria, and feasibility matrix reports.',
      },
      {
        question: 'What diagramming tools are recommended for BA tasks?',
        a: 'Draw.io, Lucidchart, Miro, or Visio for BPMN process flow diagrams.',
      },
      {
        question: 'Can business analysts get hired without a computer science background?',
        a: 'Yes. Strong communication, structured documentation, and business domain knowledge are the core requirements.',
      },
      {
        question: 'How are business analysis tasks graded?',
        a: 'Rubrics evaluate requirement completeness, process flow logic, acceptance criteria rigor, and document clarity.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/business-analyst',
    relatedRoadmapLabel: 'Business Analyst Roadmap',
  },

  'customer-ops': {
    id: 'customer-ops',
    seoTitle: 'Customer Support & Operations Portfolio Tasks',
    seoDescription:
      'Complete practical customer operations tasks: support ticket escalation flows, SLA policy documentation, customer email templates, and feedback triage pipelines.',
    whyBuildPortfolio:
      'Customer support and operations roles are moving beyond basic phone handling to process automation, SLA tracking, and CRM management. Documenting standard operating procedures, macro email templates, and escalation flows proves you can run efficient operations.',
    whatRecruitersLookFor: [
      {
        title: 'De-escalation & Professional Empathy',
        desc: 'Writing calm, effective, and solution-focused responses to upset customers.',
      },
      {
        title: 'SLA Awareness & Triage Efficiency',
        desc: 'Categorizing support tickets by severity and prioritizing response times correctly.',
      },
      {
        title: 'Process Documentation Quality',
        desc: 'Creating internal knowledge base articles that enable team members to resolve issues faster.',
      },
    ],
    keySkillsTested: [
      'Customer Service SLA & Ticket Triage Management',
      'De-escalation Communication & Email Templates',
      'Standard Operating Procedure (SOP) Authoring',
      'CRM System Workflows (Zendesk, Freshdesk, HubSpot)',
      'Customer Satisfaction (CSAT) Analysis',
    ],
    faqs: [
      {
        question: 'Why build a portfolio for customer support roles?',
        a: 'Having documented macros, ticket escalation workflows, and knowledge base articles sets you apart from generic CV applicants.',
      },
      {
        question: 'What CRM tools should customer ops applicants understand?',
        a: 'Zendesk, Freshdesk, Salesforce Service Cloud, and HubSpot CRM.',
      },
      {
        question: 'How do customer ops tasks test problem-solving?',
        a: 'Scenarios present complex, multi-party customer issues requiring policy application, root cause identification, and clear communication.',
      },
      {
        question: 'Are these tasks suitable for remote support roles?',
        a: 'Yes. Written communication and clear documentation are the exact skills required for remote customer operations roles.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps',
    relatedRoadmapLabel: 'Explore All Career Roadmaps',
  },

  'ai-prompting': {
    id: 'ai-prompting',
    seoTitle: 'AI & Prompt Engineering Portfolio Tasks & Workflow Briefs',
    seoDescription:
      'Complete graded AI prompt engineering tasks: structured prompt templates, AI agent routing logic, RAG chunking strategies, and hallucination verification pipelines.',
    whyBuildPortfolio:
      'As companies adopt AI tools like Google Gemini, ChatGPT, and Claude, demand for prompt specialists and AI operations leads is surging. A portfolio showing structured prompt engineering libraries, AI evaluation rubrics, and guardrail tests proves you can deploy AI safely and effectively.',
    whatRecruitersLookFor: [
      {
        title: 'Structured Instruction Architecture',
        desc: 'Using clear persona, context, task, and formatting constraints to ensure deterministic output.',
      },
      {
        title: 'Output Quality & Hallucination Mitigation',
        desc: 'Implementing verification prompts and anti-hallucination guardrails.',
      },
      {
        title: 'Workplace Workflow Automation',
        desc: 'Designing multi-step prompt chains that automate complex document processing or research.',
      },
    ],
    keySkillsTested: [
      'Structured Prompt Engineering (Persona, 5 Ws, Few-shot)',
      'Google Gemini & ChatGPT Workplace Automation',
      'AI Output Evaluation & Hallucination Auditing',
      'AI Guardrails, Safety, & Data Confidentiality',
      'RAG Context Strategy & Automated Summarization',
    ],
    faqs: [
      {
        question: 'What is an AI prompt engineering portfolio?',
        a: 'A repository of reusable prompt templates, multi-step prompt workflows, and AI output evaluation rubrics demonstrating practical workplace automation.',
      },
      {
        question: 'Do I need coding skills to complete AI prompting tasks?',
        a: 'No. These tasks focus on natural language instruction design, workflow structuring, and output verification.',
      },
      {
        question: 'Which AI models are used for these portfolio briefs?',
        a: 'You can use Google Gemini, ChatGPT (GPT-4o), Claude, or any modern Large Language Model.',
      },
      {
        question: 'How do AI prompting credentials help in job applications?',
        a: 'They prove to employers that you can leverage AI to perform tasks 5x faster while maintaining corporate safety and data privacy standards.',
      },
    ],
    relatedRoadmapHref: '/career-roadmaps/google-ai-essentials',
    relatedRoadmapLabel: 'AI Productivity Specialist Roadmap',
  },
};

export function getPortfolioCategorySeo(id: string): PortfolioCategorySeo | undefined {
  return portfolioCategorySeoData[id];
}
