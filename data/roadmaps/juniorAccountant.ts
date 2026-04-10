import type { CareerRoadmap } from '@/types';

export const juniorAccountantRoadmap: CareerRoadmap = {
  id: 'junior-accountant',
  title: 'How to Become a Junior Accountant',
  tagline: 'One of the most stable, in-demand careers. Start with zero experience.',
  category: 'accounting',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '6–12 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A practical roadmap for entering the accounting profession. Covers bookkeeping fundamentals, financial accounting, payroll, and financial statement analysis — curated by Ndulamiso Mamburu, an Accounting Science graduate working at SARS.',
  overview:
    'Accounting is one of the most consistently in-demand professions across every industry. Every business — from a corner shop to a listed company — needs someone to track money, reconcile accounts, process payroll, and prepare financial statements. The junior accountant and bookkeeper roles are the entry points into this profession, and they are hiring constantly.\n\nThis roadmap was curated by Ndulamiso Mamburu, an Accounting Science graduate with direct professional experience at the South African Revenue Service. The course selection reflects what the accounting profession in South Africa and globally actually requires, not just what sounds good on paper. You will learn double-entry bookkeeping, financial statement construction, payroll processing, and the analytical skills that let you interpret the numbers you produce.',
  jobTitles: [
    'Junior Accountant',
    'Bookkeeper',
    'Accounts Payable Clerk',
    'Accounts Receivable Clerk',
    'Payroll Administrator',
    'Finance Assistant',
  ],
  technicalSkills: [
    'Double-entry bookkeeping',
    'Financial statement preparation (IS, BS, CF)',
    'Payroll processing & computation',
    'Accounts payable & receivable management',
    'Inventory accounting',
    'Financial statement analysis',
  ],
  softSkills: [
    'Numerical accuracy and attention to detail',
    'Ethical judgement and discretion',
    'Organised record-keeping',
    'Deadline management',
  ],
  stages: [
    {
      number: 1,
      title: 'Learn the Language of Accounting',
      duration: '3–4 weeks',
      description:
        'Accounting has its own precise vocabulary and logical system. Before learning how to do the work, you need to understand why accounting exists, what the fundamental equation is (Assets = Liabilities + Equity), and how the double-entry system keeps the books balanced. This stage gives you the mental framework that every subsequent skill builds on. Skipping this foundation is the most common mistake beginners make.',
      courseIds: ['fundamentals-of-accounting', 'introduction-bookkeeping-accounting'],
      milestone:
        'You can explain the accounting equation, record basic transactions using double-entry bookkeeping, and distinguish between assets, liabilities, and equity.',
    },
    {
      number: 2,
      title: 'Master Financial Accounting and the Three Statements',
      duration: '8–10 weeks',
      description:
        'The three financial statements — the Income Statement, the Balance Sheet, and the Cash Flow Statement — are the outputs that every accountant is ultimately responsible for producing. This stage teaches you how to construct all three from raw transaction data, how to apply accrual vs. cash accounting principles, and how to perform the end-of-period adjustments that ensure accuracy. This is the core of what a junior accountant is hired to do.',
      courseIds: ['financial-accounting', 'diploma-financial-accounting'],
      milestone:
        'You can prepare a complete set of financial statements from scratch, including all period-end adjustments and closing entries.',
    },
    {
      number: 3,
      title: 'Learn Payroll, Inventory, and Accounts Management',
      duration: '6–8 weeks',
      description:
        'Most entry-level accounting roles involve a mix of payroll processing, managing accounts payable and receivable, and tracking inventory. These are the daily operational tasks that keep a business\'s finances accurate and its staff paid. This stage gives you the practical skills that hiring managers specifically test for in junior accounting interviews.',
      courseIds: ['payroll-computation-bookkeeping', 'payroll-essentials-small-businesses', 'accounting-for-inventory', 'accounts-payable-management'],
      milestone:
        'You can process a basic payroll run, calculate PAYE deductions, manage a creditors ledger, and account for inventory using FIFO and weighted average methods.',
    },
    {
      number: 4,
      title: 'Analyse Financial Statements Like a Professional',
      duration: '3–4 weeks',
      description:
        'Producing financial statements is only half the job. Understanding what they mean is the other half — and it is what separates a data-entry bookkeeper from a valuable finance team member. This stage teaches you financial ratio analysis: how to calculate and interpret liquidity, profitability, and solvency ratios, and how to use them to assess the health of a business.',
      courseIds: ['mastering-financial-statement-analysis'],
      milestone:
        'You can calculate and interpret the key financial ratios from a set of published accounts and write a brief analytical commentary on the company\'s financial position.',
    },
  ],
  certifications: [
    {
      name: 'AAT Level 2 Certificate in Bookkeeping',
      provider: 'AAT (Association of Accounting Technicians)',
      free: false,
      why: 'Globally recognised bookkeeping qualification. Highly valued by South African employers, particularly in larger organisations and auditing firms.',
    },
    {
      name: 'ICB (Institute of Certified Bookkeepers) Certificate',
      provider: 'ICB South Africa',
      free: false,
      why: 'The most relevant South African bookkeeping qualification. Directly recognised by SARS and accounting firms across the country.',
    },
    {
      name: 'Alison Diploma in Accounting',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Useful as an immediate, visible credential while you work towards ICB or AAT qualification.',
    },
  ],
  portfolioProjects: [
    'Full bookkeeping cycle: take a fictional small business through three months of transactions — record, trial balance, adjusting entries, and complete financial statements',
    'Payroll run: process a fictional 10-employee payroll for one month, including PAYE, UIF, and SDL calculations',
    'Financial ratio analysis: take the published annual report of any JSE-listed company and produce a written ratio analysis covering liquidity, profitability, and solvency',
    'Accounts payable ledger: build a creditors ledger in Excel tracking invoices, payments, and outstanding balances for 15 suppliers',
    'Inventory costing: apply FIFO, LIFO, and weighted average to the same fictional dataset and compare the effect on gross profit under each method',
  ],
  relatedRoadmapIds: ['business-analyst', 'data-analyst', 'digital-marketing-specialist'],
};
