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
    'A practical roadmap for entering the accounting profession. Covers bookkeeping fundamentals, financial accounting, payroll, and financial statement analysis. Curated by Ndulamiso Mamburu, an Accounting Science graduate working at SARS.',
  overview:
    'Accounting is one of the most consistently in-demand professions across every industry. Every business, from a corner shop to a listed company, needs someone to track money, reconcile accounts, process payroll, and prepare financial statements. The junior accountant and bookkeeper roles are the entry points into this profession, and they are hiring constantly.\n\nThis roadmap was curated by Ndulamiso Mamburu, an Accounting Science graduate with direct professional experience at the South African Revenue Service. The course selection reflects what the accounting profession in South Africa and globally actually requires, not just what sounds good on paper. You will learn double-entry bookkeeping, financial statement construction, payroll processing, and the analytical skills that let you interpret the numbers you produce.',
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
        'The three financial statements (the Income Statement, the Balance Sheet, and the Cash Flow Statement) are the outputs that every accountant is ultimately responsible for producing. This stage teaches you how to construct all three from raw transaction data, how to apply accrual vs. cash accounting principles, and how to perform the end-of-period adjustments that ensure accuracy. This is the core of what a junior accountant is hired to do.',
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
        'Producing financial statements is only half the job. Understanding what they mean is the other half, and it is what separates a data-entry bookkeeper from a valuable finance team member. This stage teaches you financial ratio analysis: how to calculate and interpret liquidity, profitability, and solvency ratios, and how to use them to assess the health of a business.',
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
    'Full bookkeeping cycle: take a fictional small business through three months of transactions. Record entries, prepare a trial balance, make adjusting entries, and produce complete financial statements',
    'Payroll run: process a fictional 10-employee payroll for one month, including PAYE, UIF, and SDL calculations',
    'Financial ratio analysis: take the published annual report of any JSE-listed company and produce a written ratio analysis covering liquidity, profitability, and solvency',
    'Accounts payable ledger: build a creditors ledger in Excel tracking invoices, payments, and outstanding balances for 15 suppliers',
    'Inventory costing: apply FIFO, LIFO, and weighted average to the same fictional dataset and compare the effect on gross profit under each method',
  ],
  relatedRoadmapIds: ['business-analyst', 'data-analyst', 'digital-marketing-specialist'],
  salaryRange: 'R140,000 – R240,000 per year (entry level, SA)',
  remoteFriendly: 'Hybrid',
  difficulty: 'Intermediate',
  faqs: [
    {
      q: 'Do I need a BCom to work as a junior accountant?',
      a: 'Not necessarily. ICB qualifications, AAT, or a strong portfolio of practical bookkeeping work will get you into bookkeeper, accounts clerk, and junior accountant roles at SMEs. To progress to senior accountant or move into auditing, a BCom and SAICA articles become important.',
    },
    {
      q: 'Bookkeeper or junior accountant: where should I start?',
      a: 'Bookkeeper roles are easier to enter and a fast route to building practical SARS, payroll, and ledger experience. Many SA accountants started as bookkeepers and grew into the title. The work is similar at small companies and the credentials you build (ICB, Sage, Xero) transfer cleanly.',
    },
    {
      q: 'How important is SARS knowledge in my first job?',
      a: 'Critical. Almost every entry-level role in SA expects you to handle PAYE, UIF, VAT, and EMP201 submissions. Even if your degree did not cover SARS systems specifically, expect the technical interview to include questions on tax submission deadlines and basic compliance.',
    },
    {
      q: 'Should I learn Sage, Pastel, or Xero first?',
      a: 'Sage and Pastel dominate established SA SMEs. Xero is gaining ground in newer businesses and start-ups. Learn whichever your target employers use. If you are unsure, Xero has a free certification and is the easier learning curve, then add Sage or Pastel once you know which industry you are entering.',
    },
    {
      q: 'Is accounting being automated away?',
      a: 'Routine data capture is increasingly automated through tools like Dext and AI-assisted bookkeeping. The roles that remain and grow are those that interpret accounts, advise on tax, ensure compliance, and handle the judgment-heavy parts of the close cycle. Building toward those skills protects your career.',
    },
    {
      q: 'How do I get articles or articles-equivalent experience?',
      a: 'SAICA articles require a SAICA-accredited degree and matching with an audit firm. SAIPA, ICB, and AAT have their own structured training routes that are more accessible to non-degree candidates. Choose the body that matches your qualification and target career level.',
    },
  ],
  firstNinetyDays: [
    'Week one is dominated by induction: getting access to the accounting system (Sage, Pastel, or Xero), understanding the chart of accounts, and learning the company\'s month-end close calendar',
    'By week three you should be capturing supplier invoices and customer receipts independently, and reconciling at least one bank account under supervision',
    'Month two: take ownership of routine sub-ledgers (creditors, debtors, or petty cash), prepare your first VAT submission with a senior reviewing, and start understanding how journals affect the trial balance',
    'By month three you should be able to prepare a complete bank reconciliation, draft month-end accruals and prepayments, and have shadowed at least one EMP201 PAYE submission',
    'Build a personal close-cycle checklist from your first month onwards. Junior accountants who keep meticulous personal documentation get trusted with bigger reconciliations sooner',
  ],
  commonMistakes: [
    {
      mistake: 'Memorising accounting standards without practising bookkeeping entries',
      fix: 'Real entry-level work is debits, credits, and reconciliations. Spend more time in a real or simulated Sage or Xero file than in your IFRS textbook. The standards become meaningful once the bookkeeping is fluent.',
    },
    {
      mistake: 'Avoiding SARS in study because it feels intimidating',
      fix: 'PAYE, VAT, UIF, EMP201, and EMP501 are tested in nearly every SA accounting interview. Block one weekend to walk through a sample SARS eFiling submission for each. The mystery disappears fast.',
    },
    {
      mistake: 'Listing every accounting tool on the CV without depth in one',
      fix: 'Pick one accounting system (Sage, Pastel, or Xero), build a sample company file, and post screenshots or a portfolio entry. Hiring managers test claimed proficiency in the technical interview.',
    },
    {
      mistake: 'Treating bookkeeper roles as beneath a BCom graduate',
      fix: 'Bookkeeper-level work builds the practical fluency that distinguishes employable accountants from those who get stuck at trial-balance reviewer. Many top SA accountants started as bookkeepers. Take the work where you can find it.',
    },
    {
      mistake: 'Assuming articles are the only path to senior accounting',
      fix: 'SAICA articles are one route. SAIPA, AGA(SA), ICB, and AAT routes are equally valid for many SME and corporate roles. Choose the body that matches your qualifications and target employer; do not chase articles purely for the title.',
    },
  ],
};
