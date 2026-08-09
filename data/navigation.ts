export interface FeaturedLink {
  href: string;
  label: string;
  badge: string;
  colors: {
    bg: string;
    hover: string;
    text: string;
    badge: string;
    mobileFocus: string;
  };
}

export interface GuideLink {
  href: string;
  title: string;
  desc: string;
  badge: string;
}

export const featuredLinks: FeaturedLink[] = [
  {
    href: '/career-roadmaps',
    label: 'Career Roadmaps',
    badge: 'New',
    colors: { bg: 'bg-blue-50', hover: 'hover:bg-blue-100', text: 'text-primary', badge: 'bg-primary', mobileFocus: 'text-primary hover:text-blue-800' },
  },
  {
    href: '/interview-prep',
    label: 'CV & Interview Prep',
    badge: 'New',
    colors: { bg: 'bg-emerald-50', hover: 'hover:bg-emerald-100', text: 'text-emerald-700', badge: 'bg-emerald-600', mobileFocus: 'text-emerald-700 hover:text-emerald-900' },
  },
  {
    href: '/cv-builder',
    label: 'Free CV Builder',
    badge: 'New',
    colors: { bg: 'bg-violet-50', hover: 'hover:bg-violet-100', text: 'text-violet-700', badge: 'bg-violet-600', mobileFocus: 'text-violet-700 hover:text-violet-900' },
  },
  {
    href: '/portfolio-tasks',
    label: 'Proof of Work Portfolio',
    badge: 'New',
    colors: { bg: 'bg-amber-50', hover: 'hover:bg-amber-100', text: 'text-amber-700', badge: 'bg-amber-600', mobileFocus: 'text-amber-700 hover:text-amber-900' },
  },
];

export const popularGuides: GuideLink[] = [
  {
    href: '/free-courses-for-beginners',
    title: 'Free Courses for Beginners',
    desc: 'Zero experience needed. Start building real skills from scratch.',
    badge: 'Beginner',
  },
  {
    href: '/free-courses-with-certificates',
    title: 'Free Courses with Certificates',
    desc: 'Top-rated courses across IT, Business, Marketing, and Finance.',
    badge: 'Popular',
  },
  {
    href: '/online-learning-platforms',
    title: 'Best Online Learning Platforms',
    desc: 'Compare top learning platforms, free audit tracks, and certified graduate courses.',
    badge: 'Platforms',
  },

  {
    href: '/free-courses-for-data-analysts',
    title: 'Free Courses for Data Analysts',
    desc: 'Excel, SQL, Python, and Power BI: the full analyst learning path.',
    badge: 'Data',
  },
  {
    href: '/free-ai-courses-for-beginners',
    title: 'Free AI Courses for Beginners',
    desc: 'Learn AI and Generative AI without any coding background.',
    badge: 'AI',
  },
  {
    href: '/free-digital-marketing-courses',
    title: 'Free Digital Marketing Courses',
    desc: 'SEO, content, growth hacking, and conversion. Build a marketing career from scratch.',
    badge: 'Marketing',
  },
  {
    href: '/free-courses-for-software-developers',
    title: 'Free Courses for Software Developers',
    desc: 'Web development, programming languages, DevOps, and software architecture. All free.',
    badge: 'Dev',
  },
  {
    href: '/free-courses-for-accounting-and-finance',
    title: 'Free Courses for Accounting & Finance',
    desc: 'Bookkeeping, financial management, payroll, and auditing. Curated by an accounting specialist.',
    badge: 'Finance',
  },
  {
    href: '/free-business-courses',
    title: 'Free Business Courses Online',
    desc: 'Project management, Lean Six Sigma, GDPR, and economic strategy. CPD-accredited and free.',
    badge: 'Business',
  },
  {
    href: '/free-cybersecurity-courses',
    title: 'Free Cybersecurity Courses',
    desc: 'Master security governance, network protocols, secure coding, and DORA.',
    badge: 'Security',
  },
  {
    href: '/free-cloud-computing-courses',
    title: 'Free Cloud Computing Courses',
    desc: 'AWS, Azure, GCP serverless database scaling, infrastructure, and DevOps pipelines.',
    badge: 'Cloud',
  },
  {
    href: '/free-ui-ux-design-courses',
    title: 'Free UI/UX Design Courses',
    desc: 'Figma wireframes, user research, conversion optimization, and product design.',
    badge: 'Design',
  },
  {
    href: '/free-excel-courses-with-certificates',
    title: 'Free Excel Courses',
    desc: 'VLOOKUP, Pivot Tables, charts, macros, and financial modeling spreadsheets.',
    badge: 'Excel',
  },
  {
    href: '/free-it-courses-with-certificates',
    title: 'Free IT Support Courses',
    desc: 'Computer networking, Active Directory DS, ITSM SLAs, and CompTIA A+ alignment.',
    badge: 'IT Support',
  },
  {
    href: '/free-customer-service-courses',
    title: 'Free Customer Service Courses',
    desc: 'CRM platforms, Zendesk, SLA ticket management, empathy, and CSAT / NPS metrics.',
    badge: 'Customer Ops',
  },
  {
    href: '/free-sql-courses-with-certificates',
    title: 'Free SQL & Database Courses',
    desc: 'PostgreSQL, MySQL, DDL/DML, multi-table JOINs, Window Functions, and CTEs.',
    badge: 'SQL & Data',
  },
  {
    href: '/free-agile-project-management-courses',
    title: 'Free Agile & Project Management Courses',
    desc: 'Scrum events, Kanban, Jira/Asana workflows, RACI matrices, and CAPM alignment.',
    badge: 'Agile & PM',
  },
  {
    href: '/google-ai-essentials-course-guide',
    title: 'Google AI Essentials Guide',
    desc: 'Master prompt engineering and Generative AI for workplace productivity with Google credentials.',
    badge: 'Google AI',
  },
  {
    href: '/google-digital-marketing-ecommerce-guide',
    title: 'Google Digital Marketing & E-Commerce Guide',
    desc: 'Learn Shopify store management, Google Search Ads, SEO, and sales funnels.',
    badge: 'Google Marketing',
  },
  {
    href: '/google-data-analytics-certificate-guide',
    title: 'Google Data Analytics Certificate Guide',
    desc: 'SQL, spreadsheets, R programming, and Tableau visualization breakdown.',
    badge: 'Google Data',
  },
  {
    href: '/google-cybersecurity-certificate-guide',
    title: 'Google Cybersecurity Certificate Guide',
    desc: 'SIEM tools, Splunk, Linux CLI, Python security automation, and Security+ mapping.',
    badge: 'Google Security',
  },
  {
    href: '/google-it-support-certificate-guide',
    title: 'Google IT Support Certificate Guide',
    desc: 'TCP/IP networking, Active Directory DS, system administration, and CompTIA A+.',
    badge: 'Google IT',
  },
  {
    href: '/google-project-management-certificate-guide',
    title: 'Google Project Management Certificate Guide',
    desc: 'Agile/Scrum, Jira workflows, project charters, risk management, and CAPM.',
    badge: 'Google PM',
  },
  {
    href: '/google-ux-design-certificate-guide',
    title: 'Google UX Design Certificate Guide',
    desc: 'Figma prototyping, user research, wireframing, WCAG accessibility, and UX portfolio.',
    badge: 'Google UX',
  },
  {
    href: '/microsoft-azure-fundamentals-course-guide',
    title: 'Microsoft Azure Fundamentals Guide',
    desc: 'AZ-900 cloud concepts, Azure VMs, Blob storage, VNets, and free sandbox labs.',
    badge: 'Microsoft Azure',
  },
  {
    href: '/microsoft-power-bi-data-analyst-guide',
    title: 'Microsoft Power BI Data Analyst Guide',
    desc: 'PL-300 Power Query ETL, STAR schema modeling, DAX measures, and RLS dashboards.',
    badge: 'Microsoft Power BI',
  },
  {
    href: '/microsoft-ai-fundamentals-course-guide',
    title: 'Microsoft Azure AI Fundamentals Guide',
    desc: 'AI-900 Generative AI, Azure OpenAI, Microsoft Copilot Studio, and Responsible AI.',
    badge: 'Microsoft AI',
  },
  {
    href: '/microsoft-365-fundamentals-course-guide',
    title: 'Microsoft 365 Fundamentals Guide',
    desc: 'MS-900 Entra ID provisioning, Exchange Online, SharePoint permissions, and MFA.',
    badge: 'Microsoft 365',
  },
  {
    href: '/us-government-free-online-courses-certificates',
    title: 'US Government Free Online Courses',
    desc: 'Free official certificates from FEMA, CISA, CDC, NIH, SBA, and YALI Network.',
    badge: 'US Gov Certs',
  },
  {
    href: '/sa-government-free-online-courses-certificates',
    title: 'SA Government Free Online Courses',
    desc: 'Free official certificates from NSG, NYDA, NEMISA, mLab, and SETA portals.',
    badge: 'SA Gov Certs',
  },
  {
    href: '/graduate-jobs-south-africa',
    title: 'Graduate Jobs in South Africa',
    desc: 'Entry-level jobs, hiring calendars, salary benchmarks, and ATS CV strategies.',
    badge: 'SA Grad Jobs',
  },
  {
    href: '/graduate-internships-south-africa',
    title: 'Graduate Internships in South Africa',
    desc: '12-month SETA internships, YES Youth placements, and stipend benchmarks.',
    badge: 'SA Internships',
  },
  {
    href: '/graduate-trainee-programmes-south-africa',
    title: 'Graduate Trainee Programmes in SA',
    desc: 'Corporate GDP rotational programs, assessment centers, and application windows.',
    badge: 'SA Trainee Programs',
  },
  {
    href: '/best-careers-in-south-africa',
    title: 'Best Careers in South Africa',
    desc: 'Top in-demand sectors, starting salary benchmarks, and free certified learning paths.',
    badge: 'Best SA Careers',
  },
  {
    href: '/highest-paying-careers-in-south-africa',
    title: 'Highest Paying Careers in SA',
    desc: 'Salary compensation bands from entry-level to senior executive roles across SA.',
    badge: 'High Pay SA',
  },
  {
    href: '/it-careers-without-a-degree',
    title: 'IT Careers Without a Degree',
    desc: 'Non-degree tech paths, vendor certifications, portfolios, and self-taught routes.',
    badge: 'No-Degree IT',
  },
];
