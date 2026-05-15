import type { InterviewPrep } from '@/types';

export const juniorAccountantPrep: InterviewPrep = {
  id: 'junior-accountant',
  role: 'Junior Accountant',
  category: 'accounting',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  description: 'CV advice and interview questions for junior accountant and bookkeeper roles. Written from the perspective of someone who understands accounting hiring, tax compliance, and entry-level finance teams.',
  salaryBenchmarks: [
    { region: 'United States', range: '$45,000 – $60,000/year' },
    { region: 'United Kingdom', range: '£24,000 – £34,000/year' },
    { region: 'Canada', range: 'CA$45,000 – CA$60,000/year' },
    { region: 'Australia', range: 'A$55,000 – A$75,000/year' },
    { region: 'South Africa', range: 'R140,000 – R240,000/year' },
  ],

  cvMustInclude: [
    'Your highest qualification with institution name, field of study, and year completed',
    'Any accounting-specific certifications: ICB (Institute of Certified Bookkeepers), Alison Diploma in Accounting, AAT Level 2',
    'Software proficiency: Sage, Pastel, Xero, or at minimum Microsoft Excel with specific functions listed (VLOOKUP, pivot tables, IF statements)',
    'Any professional-body registration or student membership if applicable',
    'A clear summary of which accounting functions you have studied or practised (bookkeeping, payroll, accounts payable, financial statements)',
    'High school certificate and any relevant tertiary results, especially if your accounting grades were strong',
  ],

  cvAvoid: [
    'Claiming software experience you do not have. Interviewers will test you on Pastel or Sage in the first week',
    'Listing irrelevant work experience at length (e.g. retail cashier details) without connecting it to numeracy or accuracy',
    'Using accounting jargon incorrectly. If you are not sure of a term, leave it out',
    'Vague descriptions like "assisted with financial tasks." Be specific about what you actually did',
    'An unprofessional email address. Create a firstname.lastname@gmail.com if needed',
  ],

  cvTips: [
    {
      heading: 'Tailor for the software stack employers use',
      body: 'Accounting firms and finance teams frequently use tools like Sage, Xero, QuickBooks, NetSuite, or local payroll systems. If you have any experience with these, name them explicitly. A CV that says "Proficient in Sage and Xero" immediately signals practical readiness.',
    },
    {
      heading: 'Show accuracy, not just knowledge',
      body: 'Accounting employers care deeply about attention to detail. A CV with a single typo, inconsistent formatting, or incorrect figures is immediately disqualifying. Have at least two people proofread it before sending.',
    },
    {
      heading: 'Your projects count as experience',
      body: 'If you have completed a full bookkeeping cycle, prepared a set of financial statements, or processed a fictional payroll run as a study project, list it under a "Projects" or "Practical Experience" section. Smaller firms and SMEs respect self-initiative from candidates with no formal work history.',
    },
    {
      heading: 'Reference the tax and payroll context',
      body: 'Mentioning awareness of tax authority filings, payroll deductions, VAT/GST/sales tax, and employer reporting shows you understand that accounting work sits inside a compliance environment. Even one line in your summary, such as "familiar with payroll deductions, VAT/GST concepts, and monthly tax filing workflows," differentiates you from candidates who only studied theory.',
    },
  ],

  keySkills: [
    'Double-entry bookkeeping and trial balance preparation',
    'Financial statement preparation (IS, BS, Cash Flow)',
    'Payroll processing and statutory deduction basics',
    'Accounts payable and receivable management',
    'Microsoft Excel (VLOOKUP, IF, pivot tables)',
    'Pastel / Sage / Xero (advantageous)',
    'VAT/GST/sales tax return awareness',
  ],

  questions: [
    {
      question: 'Walk me through the double-entry bookkeeping principle.',
      why: 'The absolute foundation of every accounting interview. If you cannot explain this clearly and confidently, no other answer matters.',
      sampleAnswer: 'Double-entry bookkeeping is based on the principle that every financial transaction affects at least two accounts and that debits must always equal credits. For example, if a business purchases equipment for $500 cash, we debit the Equipment account (an asset increases) and credit the Bank account (an asset decreases). The total debits and credits remain equal, which keeps the accounting equation balanced: Assets = Liabilities + Equity.',
      redFlag: 'Describing only one side of a transaction, or confusing the direction of debits and credits for specific account types.',
    },
    {
      question: 'What are the three main financial statements and what does each one show?',
      why: 'Standard screening question for any accounting role. The answer reveals whether you understand the purpose of each statement, not just its name.',
      sampleAnswer: 'The Income Statement shows the revenues and expenses of a business over a specific period, resulting in a net profit or loss. The Balance Sheet is a snapshot of the business\'s financial position at a specific date, showing assets, liabilities, and equity. The Cash Flow Statement shows how cash moved into and out of the business during a period, split into operating, investing, and financing activities. Together, they give a complete picture of a business\'s financial health.',
    },
    {
      question: 'How would you approach a basic payroll tax calculation?',
      why: 'Payroll processing is a core junior accountant function. Employers expect candidates to understand the logic even when payroll software does the final calculation.',
      sampleAnswer: 'I would start with the employee\'s gross pay for the period, then identify taxable and non-taxable components according to the relevant country\'s rules. From there I would apply allowed deductions such as retirement contributions or benefits where applicable, then calculate the required withholding using the current tax tables or payroll system. I would also check employer-side contributions and any statutory deductions. Finally, I would reconcile the payroll report against the general ledger and make sure the filing and payment deadlines for the relevant tax authority are met.',
      redFlag: 'Saying "I would use software to calculate it" without being able to explain the underlying method. Software is a tool; the employer needs to know you understand the calculation.',
    },
    {
      question: 'What is the difference between accounts payable and accounts receivable?',
      why: 'Foundational vocabulary check. Many firms split these functions for entry-level hires.',
      sampleAnswer: 'Accounts payable represents money the business owes to its suppliers for goods or services received but not yet paid for. It is a liability on the balance sheet. Accounts receivable represents money owed to the business by its customers for goods or services delivered but not yet collected. It is an asset. Managing both accurately is critical to a business\'s cash flow position.',
    },
    {
      question: 'You find an error in last month\'s trial balance. How do you handle it?',
      why: 'Tests your approach to error detection and correction, which is a daily reality in accounting.',
      sampleAnswer: 'First I would identify which accounts are affected and by how much. I would trace the error back to its source, whether it is a transposition error, an incorrect account code, or a missing entry. I would not simply delete the wrong entry; I would prepare a correcting journal entry with a clear narration explaining what was corrected and why. I would then inform my supervisor, especially if the error affects a period that has already been reported. Accurate documentation of the correction is important for the audit trail.',
    },
    {
      question: 'Why do you want to work in accounting?',
      why: 'Accounting employers, especially smaller firms, hire for long-term fit. They want genuine interest, not just a foot in the door.',
      sampleAnswer: 'I am drawn to accounting because it is the language every business operates in, and I enjoy working with numbers in a structured way. What specifically interests me is the analytical side: being able to look at a set of financial statements and tell a story about the health of a business. I also appreciate that accounting has clear professional pathways and recognised qualifications, and I am working towards my ICB certification as a next step.',
    },
  ],

  relatedRoadmapId: 'junior-accountant',
  relatedPrepIds: ['business-analyst', 'data-analyst', 'digital-marketing-coordinator'],
};
