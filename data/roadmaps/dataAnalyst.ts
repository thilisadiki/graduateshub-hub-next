import type { CareerRoadmap } from '@/types';

export const dataAnalystRoadmap: CareerRoadmap = {
  id: 'data-analyst',
  title: 'How to Become a Data Analyst',
  tagline: 'Turn raw numbers into business decisions — no degree required.',
  category: 'it',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '6–12 months',
  demandLevel: 'Very High',
  entryLevel: true,
  description:
    'A step-by-step career roadmap for becoming a data analyst. Covers Excel, SQL, Power BI, and Python — the four tools that appear on virtually every entry-level analyst job posting.',
  overview:
    'Data analysts sit at the intersection of numbers and decisions. Your core job is to take raw, messy data from spreadsheets, databases, and business systems, and turn it into clear insights that help managers and executives act. Every company that has customers, inventory, or finances generates data — which is why demand for analysts consistently outpaces supply across finance, healthcare, retail, logistics, and tech.\n\nThe good news is that the analyst learning path is one of the most accessible in tech. You do not need a computer science degree. The tools — Excel, SQL, Power BI, and Python — are all learnable through free courses, and the portfolio projects you will build along the way are concrete enough to demonstrate your skills to any hiring manager.',
  jobTitles: [
    'Junior Data Analyst',
    'Reporting Analyst',
    'Business Intelligence Analyst',
    'Operations Analyst',
    'Financial Analyst',
    'Data Assistant',
  ],
  technicalSkills: [
    'Microsoft Excel (VLOOKUP, pivot tables, macros)',
    'SQL (queries, joins, aggregations)',
    'Power BI (dashboards, DAX basics)',
    'Python (pandas, data cleaning)',
    'Data visualisation',
    'Database concepts & normalisation',
  ],
  softSkills: [
    'Attention to detail',
    'Structured problem-solving',
    'Clear written communication',
    'Stakeholder presentation',
  ],
  stages: [
    {
      number: 1,
      title: 'Master the Spreadsheet Foundation',
      duration: '4–6 weeks',
      description:
        'Excel is the lingua franca of data analysis. Before touching SQL or Python, you need to be genuinely fast and confident in a spreadsheet. Employers test Excel skills in almost every entry-level analyst interview — VLOOKUP, IF statements, pivot tables, and basic charting are non-negotiable. Pair this with an introduction to how databases work so you understand why SQL exists and what problem it solves.',
      courseIds: ['microsoft-excel-data-analysis', 'intro-database-concepts'],
      milestone:
        'You can clean, analyse, and present data in Excel. You understand the difference between flat files and relational databases.',
    },
    {
      number: 2,
      title: 'Learn SQL — The Language of Data',
      duration: '6–8 weeks',
      description:
        'SQL is the single most important technical skill for a data analyst. Almost every analyst role requires you to query a database directly, whether that\'s pulling a sales report, joining customer tables, or filtering records by date. This stage takes you from understanding database concepts to writing real queries using T-SQL and SQL Server — the flavour used most widely in corporate environments.',
      courseIds: ['diploma-databases-t-sql', 'databases-dml-sql-server'],
      milestone:
        'You can write SELECT, JOIN, GROUP BY, and WHERE queries to extract and aggregate data from multi-table databases.',
    },
    {
      number: 3,
      title: 'Build Dashboards with Power BI',
      duration: '4–5 weeks',
      description:
        'Knowing the numbers is only half the job. The other half is communicating them. Power BI is the most in-demand business intelligence tool in corporate South Africa and globally. After this stage you will be able to connect Power BI to a data source, transform raw data, and build the kind of interactive dashboards that companies use in boardroom presentations.',
      courseIds: ['intro-power-bi'],
      milestone:
        'You have built at least one end-to-end Power BI dashboard from a raw dataset and published it for stakeholder access.',
    },
    {
      number: 4,
      title: 'Add Python for Serious Data Work',
      duration: '8–10 weeks',
      description:
        'Python elevates you from junior to mid-level analyst. While Excel and SQL handle most day-to-day tasks, Python — specifically the pandas library — allows you to automate repetitive cleaning tasks, handle datasets that are too large for Excel, and run more complex analyses. This stage is what separates analysts who can only report on data from those who can transform and model it.',
      courseIds: ['python-for-beginners-data', 'diploma-python-programming'],
      milestone:
        'You can load, clean, filter, and summarise a CSV dataset using Python and pandas, and export the results for visualisation.',
    },
    {
      number: 5,
      title: 'Understand the Business Context',
      duration: '2–3 weeks',
      description:
        'Technical skills alone do not make a great analyst. Hiring managers consistently say they want analysts who understand how the business works — how financial statements are structured, how information systems support decisions, and how data flows through an organisation. This stage ensures you can speak the language of the stakeholders you will serve.',
      courseIds: ['mastering-financial-statement-analysis', 'management-information-systems'],
      milestone:
        'You can read a basic income statement and balance sheet, and explain how management information systems support organisational decision-making.',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Power BI Data Analyst (PL-300)',
      provider: 'Microsoft',
      free: false,
      why: 'The most employer-recognised BI certification for analysts. Exam costs roughly R2,500 but significantly differentiates your CV.',
    },
    {
      name: 'Google Data Analytics Certificate',
      provider: 'Google / Coursera',
      free: false,
      why: 'Well-recognised by non-technical hiring managers. Available via Coursera financial aid at no cost.',
    },
    {
      name: 'Alison Diploma in Data Analytics',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Useful as a visible credential while you work towards paid certifications.',
    },
  ],
  portfolioProjects: [
    'Sales performance dashboard in Power BI connected to a public retail dataset (e.g. Kaggle Superstore)',
    'SQL query library — 10 business questions answered against a public database (e.g. Northwind or Chinook)',
    'Python data cleaning script that takes a messy CSV and outputs a structured, analysis-ready dataset',
    'Excel financial model: build a 12-month budget vs actuals tracker with variance analysis',
    'End-to-end capstone: pick one public dataset, clean it in Python, query it in SQL, and visualise it in Power BI',
  ],
  relatedRoadmapIds: ['it-support-specialist', 'web-developer', 'business-analyst'],
};
