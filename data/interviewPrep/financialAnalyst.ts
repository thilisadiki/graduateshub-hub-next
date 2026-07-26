import type { InterviewPrep } from '@/types';

export const financialAnalystPrep: InterviewPrep = {
  id: 'financial-analyst',
  role: 'Financial Analyst',
  category: 'business',
  curator: 'jason',
  description:
    'CV formatting rules, technical Q&A, and financial modeling case study guidance for junior Financial Analyst and FP&A roles. Covers 3-statement modeling, DCF valuation, financial ratios, and corporate budgeting.',
  salaryBenchmarks: [
    { region: 'United States', range: '$62,000 – $92,000/year' },
    { region: 'United Kingdom', range: '£30,000 – £52,000/year' },
    { region: 'Canada', range: 'CA$55,000 – CA$82,000/year' },
    { region: 'Australia', range: 'A$68,000 – A$102,000/year' },
    { region: 'South Africa', range: 'R220,000 – R450,000/year' },
  ],
  cvMustInclude: [
    'Financial Accounting credentials: Alison Financial Accounting Diploma, CFA Level 1 candidate, FMVA',
    'Advanced Excel modeling skills: 3-statement dynamic models, DCF valuation, INDEX/MATCH, XLOOKUP, NPV/IRR, Data Tables',
    'Financial Statement Analysis: Liquidity ratios, Solvency ratios, ROE/ROIC profitability metrics',
    'FP&A & Corporate Budgeting: Variance analysis (Budget vs. Actuals), revenue forecasting',
    'BI & Financial Visualization tools: Power BI, Tableau',
  ],
  cvAvoid: [
    'Claiming advanced Excel skills without a dynamic financial model project link',
    'Hard-coding numbers inside Excel formulas in portfolio project files',
    'Listing accounting terminology without demonstrating corporate finance application',
  ],
  cvTips: [
    {
      heading: 'Include a dynamic Excel financial model project',
      body: 'Attach a link to a fully dynamic 3-statement model or DCF valuation model in Excel built from a public company’s 10-K filing. Ensure all calculation cells use dynamic formulas without hardcoded numbers.',
    },
    {
      heading: 'Quantify analytical impact',
      body: 'Highlight specific financial reporting tasks: e.g. "Built a 12-month FP&A variance model tracking revenue and opex across 4 business departments."',
    },
  ],
  keySkills: [
    'Financial Accounting (Income Statement, Balance Sheet, Cash Flow)',
    '3-Statement & DCF Financial Modeling in Excel',
    'Company Valuation & Financial Ratio Analysis',
    'Corporate FP&A Budgeting & Variance Analysis',
    'Power BI Financial Reporting & Executive Presentations',
  ],
  questions: [
    {
      question: 'How do the three core financial statements link together?',
      why: 'Fundamental accounting & corporate finance screening question used in almost every financial analyst interview.',
      sampleAnswer: 'Net Income from the Income Statement flows into Retained Earnings on the Balance Sheet (under Shareholders\' Equity) and serves as the starting line of Cash Flow from Operations on the Cash Flow Statement. Changes in Balance Sheet working capital items (Accounts Receivable, Inventory, Accounts Payable) impact Operating Cash Flow. The ending Cash Balance from the Cash Flow Statement flows into the Cash line on the Balance Sheet.',
      redFlag: 'Failing to explain how Net Income connects the Income Statement to Retained Earnings and Cash Flow from Operations.',
    },
    {
      question: 'Walk me through a Discounted Cash Flow (DCF) valuation model.',
      why: 'Tests corporate valuation theory and financial modeling mechanics.',
      sampleAnswer: 'A DCF estimates intrinsic company value based on future cash flows. First, forecast Unlevered Free Cash Flows (UFCF) over a 5-year period. Second, calculate a discount rate using Weighted Average Cost of Capital (WACC). Third, discount future cash flows to present value using WACC. Fourth, calculate Terminal Value and discount it to present value. Finally, sum present value cash flows and terminal value to get Enterprise Value.',
    },
    {
      question: 'If depreciation increases by $10, how does that impact the three financial statements (assuming a 20% tax rate)?',
      why: 'Classic financial interview test measuring accounting precision and tax effect modeling.',
      sampleAnswer: 'Income Statement: Operating Income decreases by $10. Tax expense decreases by $2 (20% of $10). Net Income decreases by $8. Cash Flow Statement: Net Income starts $8 lower, but $10 depreciation is added back as a non-cash expense, so Cash Flow from Operations increases by $2. Balance Sheet: Cash increases by $2, PP&E (net) decreases by $10 (total Assets decrease by $8). Net Income reduction causes Shareholders\' Equity to decrease by $8. Both sides balance!',
    },
  ],
  relatedRoadmapId: 'financial-analyst',
  relatedPrepIds: ['junior-accountant', 'business-analyst', 'data-analyst'],
};
