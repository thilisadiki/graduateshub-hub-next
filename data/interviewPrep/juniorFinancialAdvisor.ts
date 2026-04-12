import type { InterviewPrep } from '@/types';

export const juniorFinancialAdvisorPrep: InterviewPrep = {
  id: 'junior-financial-advisor',
  role: 'Junior Financial Advisor',
  category: 'accounting',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and interview questions for junior financial advisor and financial planning roles in South Africa. Covers FAIS compliance, FICA, RE5, product knowledge, and the trust-building skills SA financial services firms screen for.',
  salaryRange: 'R120,000 – R280,000 per year (entry level, South Africa; plus commission)',

  cvMustInclude: [
    'Your Regulatory Examination (RE5) status — passed, in progress, or planned. This is a legal requirement for financial advisors in SA and must be declared',
    'Your FSCA-recognised qualification or progress toward one (the FSCA approved qualification list includes many commerce and financial planning degrees)',
    'Any NQF 4 Financial Planning certificate or CFP progression if applicable',
    'Specific financial products you have studied or worked with: life insurance, unit trusts, retirement annuities, medical aid, short-term insurance',
    'The FSP (Financial Services Provider) you worked or interned under, if applicable',
    'Clean criminal and credit record declaration is implicit — any adverse credit history is a significant flag for SA financial services firms',
  ],

  cvAvoid: [
    'Claiming FAIS compliance or RE5 certification without having it — this is a regulated requirement and verifiable',
    'Overstating product knowledge. SA financial services firms conduct product knowledge tests in the interview process',
    'Omitting your study path toward FAIS compliance if you are still working toward it. Being clear about where you are is better than leaving it vague',
    'A purely academic CV with no mention of how you handle client interactions or trust-building',
    'An unprofessional email address — you are asking people to trust you with their life savings',
  ],

  cvTips: [
    {
      heading: 'Make your compliance status clear from the start',
      body: 'In South Africa, financial advisors are regulated under the Financial Advisory and Intermediary Services Act (FAIS). The most important regulatory milestone is the RE5 examination. List your RE5 status explicitly in your summary or a dedicated Certifications section: "RE5 completed (2025)" or "RE5 examination scheduled Q3 2026." Most FSPs will not place an advisor in front of clients without RE5, so addressing it early removes a major objection before the interview.',
    },
    {
      heading: 'Lead with client outcomes, not product knowledge',
      body: 'SA financial services firms want advisors who build long-term client relationships, not just salespeople who push products. Your CV summary should lead with client-centric language: "financial planning graduate focused on helping clients achieve long-term financial security through needs-based advice." This signals that you understand fiduciary responsibility and the difference between advice and sales — a distinction that matters deeply to FSCA-regulated firms.',
    },
    {
      heading: 'Address your knowledge of needs analysis explicitly',
      body: 'The core workflow of a financial advisor in SA is the needs analysis process: gathering information about a client\'s current situation, financial goals, risk tolerance, and existing cover, then making appropriate recommendations. Mention this in your CV if you have practised it through coursework, a simulation, or an internship. "Completed a comprehensive financial planning case study including risk profile assessment, gap analysis, and product recommendation for a mock client household" is a CV line that most entry-level candidates do not have.',
    },
    {
      heading: 'Mention FICA and POPIA awareness',
      body: 'The Financial Intelligence Centre Act (FICA) requires advisors to verify client identity and report suspicious transactions. The Protection of Personal Information Act (POPIA) governs how client data is stored and used. Mentioning awareness of both in your education or summary section tells a compliance officer at an FSP that you will not be a liability on these fronts from day one. Entry-level candidates who mention compliance frameworks proactively are rare and memorable.',
    },
  ],

  keySkills: [
    'FAIS Act and RE5 regulatory compliance',
    'Financial needs analysis and risk profiling',
    'Life and disability insurance product knowledge',
    'Retirement planning basics: RAs, pension funds, provident funds',
    'FICA and POPIA compliance in client onboarding',
    'Client relationship building and trust development',
    'Financial planning software: XPlan, financial calculator tools',
  ],

  questions: [
    {
      question: 'What is the FAIS Act and why does it matter for a financial advisor?',
      why: 'FAIS compliance is non-negotiable in South African financial services. This is almost always the first question in a junior financial advisor interview.',
      sampleAnswer: 'The Financial Advisory and Intermediary Services Act, or FAIS Act, regulates the activities of financial advisors and intermediaries in South Africa. It was introduced to protect consumers from unqualified or unethical financial advice. The Act requires anyone who gives financial advice or renders an intermediary service to be a Fit and Proper Person — meaning they must have the appropriate qualifications, pass the relevant Regulatory Examinations (RE1 for key individuals, RE5 for representatives), maintain Continuous Professional Development hours, and operate under a licensed Financial Services Provider. In practice, it means that as a financial advisor, I cannot advise a client on a product I am not authorised for, and I am legally accountable for the appropriateness of the advice I give.',
    },
    {
      question: 'Walk me through how you would conduct a needs analysis with a new client.',
      why: 'The needs analysis is the first step in every financial advisory relationship in SA. This question tests whether you understand the process and its importance for compliance.',
      sampleAnswer: 'A needs analysis starts with building rapport and establishing trust — clients share very personal financial information, and they need to feel safe doing so. I would then gather comprehensive factual information: income, expenses, assets, liabilities, existing insurance and investment products, family situation, and dependents. Alongside the facts, I would assess the client\'s financial goals — short, medium, and long term — and their risk tolerance using a standardised risk profile questionnaire. Once I have a complete picture, I would analyse any gaps between their current position and their stated goals and obligations: underinsurance, inadequate retirement provision, or estate planning gaps. My product recommendations would be based on those gaps, not on what pays the highest commission. I would present a written record of advice (RONA) for the client to sign, documenting that my recommendations were based on their specific needs.',
    },
    {
      question: 'What is the difference between a retirement annuity and a pension fund?',
      why: 'Product knowledge is tested directly and specifically in SA financial advisor interviews. Confusing these two common products is a significant red flag.',
      sampleAnswer: 'Both are retirement savings vehicles in South Africa, but they are structured very differently. A pension fund is an employer-sponsored retirement fund where both the employer and employee make contributions. It is tied to employment — when you leave a company, your accumulated benefit is either preserved in the fund, transferred to a preservation fund, or taken as a withdrawal (with tax implications). A retirement annuity is an individual product that you take out independently of your employer. Anyone can contribute to an RA, including self-employed people. RA contributions are tax-deductible up to 27.5% of taxable income (capped at R350,000 per year). Unlike a pension fund, the funds in an RA cannot be accessed before the age of 55 except in specific circumstances like emigration or terminal illness. At retirement, both allow a tax-free lump sum withdrawal up to the prescribed limit, with the balance used to purchase an annuity.',
    },
    {
      question: 'How would you explain the concept of compound interest to a client who has no financial background?',
      why: 'Communicating complex concepts simply is a core competency of SA financial advisors. This question tests client communication skills, not just product knowledge.',
      sampleAnswer: 'I would use an analogy. "Imagine you plant a tree and it grows fruit every year. In the first year, you have one tree that grows ten apples. If you leave those apples to grow into new trees, in the second year you now have eleven trees each growing ten apples. In the third year, those apples all grow more trees. You never planted more seeds — you just let what was already growing, keep growing. Compound interest works the same way. The interest your investment earns in one year gets added to your original amount, and next year you earn interest on the bigger total. The longer you leave it, the more dramatic the growth becomes. This is why starting to save even a small amount early in your career makes such a significant difference compared to waiting until you earn more."',
    },
    {
      question: 'What does FICA require a financial advisor to do when onboarding a new client?',
      why: 'FICA compliance is a daily operational requirement for SA financial services. Not knowing this at entry level is a compliance risk for the firm.',
      sampleAnswer: 'The Financial Intelligence Centre Act requires financial institutions and their advisors to verify the identity of clients before entering into a business relationship with them. This is known as Know Your Client (KYC). For an individual client, I must obtain and verify their full legal name using a valid ID document or passport, their date of birth, residential address supported by a utility bill or bank statement not older than three months, and their income tax number if applicable. For a business client, the requirements extend to verifying directors, beneficial owners with more than 25% ownership, and the entity\'s registration documents. FICA also requires me to report any suspicious transactions to the Financial Intelligence Centre and to maintain records of all verification documents for at least five years.',
    },
    {
      question: 'Why do you want a career as a financial advisor rather than another finance role like accounting or banking?',
      why: 'SA financial services firms want advisors who are intrinsically motivated by helping clients, not just by income potential. Commission-only structures cause high turnover among candidates who are not genuinely motivated by the advisory work.',
      sampleAnswer: 'I want to work in a role where the quality of the advice I give has a direct and visible impact on a client\'s life. Accounting and banking are valuable careers, but the feedback loop is indirect — I would not often see the outcome of my work in the way that a financial advisor does when a client reaches retirement financially secure because of the plan we built together, or when a family is protected after losing a breadwinner because of the life cover that was in place. I also find the complexity of the SA financial landscape compelling — the interplay of regulation, tax, and investment strategy means there is always something to learn. I want to build a book of business over time based on trust and results, not transactions.',
    },
  ],

  relatedRoadmapId: 'junior-accountant',
  relatedPrepIds: ['junior-accountant', 'business-analyst', 'data-analyst'],
};
