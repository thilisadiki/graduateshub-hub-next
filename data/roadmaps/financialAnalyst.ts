import type { CareerRoadmap } from '@/types';

export const financialAnalystRoadmap: CareerRoadmap = {
  id: 'financial-analyst',
  title: 'How to Become a Financial Analyst',
  tagline: 'Build financial models, evaluate investments, and analyze corporate balance sheets. Master corporate finance & Excel.',
  category: 'business',
  curator: 'jason',
  timeToJobReady: '6–12 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A step-by-step career roadmap for becoming a Financial Analyst. Covers financial accounting, advanced Excel modeling (DCF, 3-Statement), company valuation, financial statement analysis, and FP&A budgeting.',
  overview:
    'Financial Analysts guide corporate investment decisions, evaluate business performance, and forecast future revenue growth. Unlike bookkeepers who log historical transactions, financial analysts analyze three-statement financial models (Income Statement, Balance Sheet, Cash Flow), run Discounted Cash Flow (DCF) valuations, and manage Corporate FP&A (Financial Planning & Analysis) budgets.\n\nThe financial analyst career path commands high starting salaries and offers clear progression into corporate finance, investment banking, and strategy consulting. Employers prioritize candidates who master financial accounting fundamentals, advanced Excel modeling (VLOOKUP, INDEX/MATCH, NPV, IRR), and corporate valuation methods over simple university prestige. Following this roadmap will prepare you for entry-level roles such as Junior Financial Analyst, FP&A Analyst, or Corporate Finance Associate.',
  jobTitles: [
    'Junior Financial Analyst',
    'FP&A (Financial Planning & Analysis) Analyst',
    'Corporate Finance Associate',
    'Investment Analyst (Junior)',
    'Financial Reporting Analyst',
    'Commercial Finance Analyst',
  ],
  technicalSkills: [
    'Financial Accounting (Income Statement, Balance Sheet, Cash Flow)',
    'Advanced Excel Financial Modeling (3-Statement, DCF, LBO basics)',
    'Company Valuation Methods (Assets-Based, Multiples, DCF)',
    'Financial Statement Ratio Analysis (Liquidity, Solvency, Profitability)',
    'Corporate Budgeting & Variance Analysis',
    'Power BI / Tableau Financial Reporting Dashboards',
  ],
  softSkills: [
    'Quantitative rigour & attention to detail',
    'Strategic business acumen',
    'Executive presentation skills',
    'Logical problem solving under deadlines',
  ],
  stages: [
    {
      number: 1,
      title: 'Master Financial Accounting & Statement Analysis',
      duration: '4–6 weeks',
      description:
        'Financial analysis begins with accounting. Stage 1 covers double-entry accounting, trial balances, and how the three core financial statements interlink: Income Statement, Balance Sheet, and Cash Flow Statement.',
      courseIds: ['financial-accounting', 'diploma-financial-accounting'],
      milestone:
        'You can read corporate annual reports and understand how net income flows into retained earnings and cash flows.',
    },
    {
      number: 2,
      title: 'Master Financial Ratios & Liquidity Analysis',
      duration: '4–5 weeks',
      description:
        'Stage 2 focuses on evaluating corporate health using financial ratios: Profitability (ROE, ROIC, Gross Margin), Liquidity (Current Ratio, Quick Ratio), Solvency (Debt-to-Equity), and Efficiency ratios.',
      courseIds: ['mastering-financial-statement-analysis'],
      milestone:
        'You can calculate and interpret 15 key financial ratios from a public company’s 10-K filing.',
    },
    {
      number: 3,
      title: 'Advanced Financial Modeling in Microsoft Excel',
      duration: '6–8 weeks',
      description:
        'Excel is the primary engine of corporate finance. Stage 3 covers advanced Excel functions (INDEX/MATCH, XLOOKUP, Dynamic Arrays, Data Tables), financial sensitivity analysis, and building 3-statement financial models from scratch.',
      courseIds: ['microsoft-excel-data-analysis'],
      milestone:
        'You can build a dynamic, fully linked 3-statement financial forecast model in Excel.',
    },
    {
      number: 4,
      title: 'Company Valuation & Investment Evaluation',
      duration: '6–8 weeks',
      description:
        'Stage 4 covers corporate valuation techniques: Assets-Based Valuation, Comparable Companies Analysis (EV/EBITDA, P/E multiples), and Discounted Cash Flow (DCF) modeling using Weighted Average Cost of Capital (WACC).',
      courseIds: ['assets-based-company-valuation'],
      milestone:
        'You can perform a Discounted Cash Flow (DCF) valuation model to calculate the intrinsic value of a company.',
    },
    {
      number: 5,
      title: 'FP&A Budgeting & Portfolio Valuation Deck',
      duration: '4–6 weeks',
      description:
        'The final stage covers Corporate FP&A: budget forecasting, variance analysis (Budget vs. Actuals), and building executive financial decks.',
      courseIds: ['intro-power-bi'],
      milestone:
        'You have published a complete Excel financial valuation model and investment presentation deck on your portfolio.',
    },
  ],
  certifications: [
    {
      name: 'Alison Diploma in Financial Accounting (CPD)',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma covering core financial accounting principles and reporting.',
    },
    {
      name: 'CFA Institute Investment Foundations / Level 1',
      provider: 'CFA Institute',
      free: false,
      why: 'The global benchmark credential for investment management and financial analysis.',
    },
    {
      name: 'FMVA (Financial Modeling & Valuation Analyst)',
      provider: 'CFI',
      free: false,
      why: 'Highly practical corporate finance certification focusing on 3-statement modeling and valuation.',
    },
  ],
  portfolioProjects: [
    '3-Statement Financial Forecast Model: build a fully dynamic 3-year financial forecast model in Excel for a public retail company',
    'Discounted Cash Flow (DCF) Valuation: calculate WACC and intrinsic share price for a target company with sensitivity tables',
    'Financial Health & Ratio Audit: produce a 5-page financial health audit comparing two competitors (e.g. Nike vs. Adidas)',
    'FP&A Budget Variance Dashboard: build an Excel & Power BI dashboard tracking monthly Budget vs. Actual revenue and expense variances',
  ],
  relatedRoadmapIds: ['junior-accountant', 'business-analyst', 'data-analyst'],
  salaryBenchmarks: [
    { region: 'United States', range: '$62,000 – $92,000/year' },
    { region: 'United Kingdom', range: '£30,000 – £52,000/year' },
    { region: 'Canada', range: 'CA$55,000 – CA$82,000/year' },
    { region: 'Australia', range: 'A$68,000 – A$102,000/year' },
    { region: 'South Africa', range: 'R220,000 – R450,000/year' },
  ],
  remoteFriendly: 'Hybrid',
  difficulty: 'Intermediate',
  faqs: [
    {
      q: 'Do I need a finance or economics degree to become a Financial Analyst?',
      a: 'While finance or accounting degrees are common, many companies hire candidates with STEM or quantitative backgrounds who master 3-statement financial modeling and corporate valuation tools.',
    },
    {
      q: 'What is the difference between a Junior Accountant and a Financial Analyst?',
      a: 'Junior Accountants focus on logging past transactions, reconciliations, and regulatory compliance. Financial Analysts focus on forecasting future financial performance, building valuation models, and guiding executive investment decisions.',
    },
    {
      q: 'What Excel skills are required for financial modeling?',
      a: 'Master INDEX/MATCH, XLOOKUP, SUMIFS, dynamic array formulas, financial functions (NPV, IRR, XIRR), and scenario Data Tables. Avoid relying on your computer mouse - fast keyboard shortcuts are expected in finance interviews.',
    },
  ],
  firstNinetyDays: [
    'Spend your first 30 days understanding the company’s chart of accounts, historical financial statements, and revenue drivers',
    'Shadow senior analysts during monthly FP&A budget closes and variance reporting',
    'By month two, take ownership of updating weekly revenue trackers and building monthly department variance reports',
    'By month three, assist in drafting financial forecasts for executive board presentations',
  ],
  commonMistakes: [
    {
      mistake: 'Building hard-coded financial models in Excel',
      fix: 'Never hard-code numbers inside formulas. Always separate Inputs, Calculations, and Outputs so models can update dynamically.',
    },
    {
      mistake: 'Focusing purely on accounting rules without understanding business operations',
      fix: 'Financial models reflect business realities. Always understand how operational changes (pricing, supply chain, hiring) drive financial numbers.',
    },
    {
      mistake: 'Failing to double-check balance sheet balance checks (Assets = Liabilities + Equity)',
      fix: 'Build automated error-check cells in Excel that flag red if the balance sheet does not balance to 0.',
    },
  ],
};
