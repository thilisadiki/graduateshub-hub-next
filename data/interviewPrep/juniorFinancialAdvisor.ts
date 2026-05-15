import type { InterviewPrep } from '@/types';

export const juniorFinancialAdvisorPrep: InterviewPrep = {
  id: 'junior-financial-advisor',
  role: 'Junior Financial Advisor',
  category: 'accounting',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and interview questions for junior financial advisor and financial planning roles. Covers licensing awareness, KYC/AML, product knowledge, suitability, and trust-building skills.',
  salaryBenchmarks: [
    { region: 'United States', range: '$45,000 – $70,000/year plus commission' },
    { region: 'United Kingdom', range: '£25,000 – £40,000/year plus commission' },
    { region: 'Canada', range: 'CA$45,000 – CA$65,000/year plus commission' },
    { region: 'Australia', range: 'A$60,000 – A$85,000/year plus commission' },
    { region: 'South Africa', range: 'R120,000 – R280,000/year plus commission' },
  ],

  cvMustInclude: [
    'Your licensing or certification status for your region - passed, in progress, or planned',
    'Your recognised financial planning qualification or progress toward one',
    'Any CFP, diploma, certificate, or regulator-recognised training if applicable',
    'Specific financial products you have studied or worked with: life insurance, unit trusts, retirement annuities, medical aid, short-term insurance',
    'The financial services firm, broker-dealer, advisory practice, or insurance provider you worked or interned under, if applicable',
    'A clean conduct and compliance record where relevant; financial services employers take trust and integrity seriously',
  ],

  cvAvoid: [
    'Claiming licensing or certification you do not have - regulated qualifications are verifiable',
    'Overstating product knowledge. Financial services firms often conduct product knowledge tests in the interview process',
    'Omitting your study path toward licensing if you are still working toward it. Being clear about where you are is better than leaving it vague',
    'A purely academic CV with no mention of how you handle client interactions or trust-building',
    'An unprofessional email address - you are asking people to trust you with their life savings',
  ],

  cvTips: [
    {
      heading: 'Make your compliance status clear from the start',
      body: 'Financial advisors are regulated differently by country, but every market cares about licensing, suitability, disclosure, and client protection. List your status explicitly in your summary or a dedicated Certifications section: "licensing exam in progress," "CFP coursework underway," or "insurance licensing completed." Addressing this early removes a major objection before the interview.',
    },
    {
      heading: 'Lead with client outcomes, not product knowledge',
      body: 'Financial services firms want advisors who build long-term client relationships, not just salespeople who push products. Your CV summary should lead with client-centric language: "financial planning graduate focused on helping clients achieve long-term financial security through needs-based advice." This signals that you understand suitability, fiduciary responsibility, and the difference between advice and sales.',
    },
    {
      heading: 'Address your knowledge of needs analysis explicitly',
      body: 'The core workflow of a financial advisor is the needs analysis process: gathering information about a client\'s current situation, financial goals, risk tolerance, and existing cover, then making appropriate recommendations. Mention this in your CV if you have practised it through coursework, a simulation, or an internship. "Completed a comprehensive financial planning case study including risk profile assessment, gap analysis, and product recommendation for a mock client household" is a CV line that most entry-level candidates do not have.',
    },
    {
      heading: 'Mention KYC, AML, and data privacy awareness',
      body: 'Financial advisors must understand Know Your Customer (KYC), anti-money laundering (AML), and client data privacy requirements. Mentioning awareness of these areas in your education or summary section tells a compliance officer that you will not be a liability from day one. Entry-level candidates who mention compliance frameworks proactively are rare and memorable.',
    },
  ],

  keySkills: [
    'Licensing, suitability, and regulatory compliance basics',
    'Financial needs analysis and risk profiling',
    'Life and disability insurance product knowledge',
    'Retirement planning basics: employer plans, individual retirement accounts, annuities',
    'KYC, AML, and data privacy in client onboarding',
    'Client relationship building and trust development',
    'Financial planning software: XPlan, financial calculator tools',
  ],

  questions: [
    {
      question: 'Why do licensing and suitability rules matter for a financial advisor?',
      why: 'Regulatory compliance is non-negotiable in financial services. This is often one of the first topics in a junior financial advisor interview.',
      sampleAnswer: 'Licensing and suitability rules exist to protect clients from unqualified or inappropriate financial advice. They make sure an advisor has the right training, works under the correct authorisation, understands product risks, and recommends products that fit the client\'s needs rather than the advisor\'s commission. In practice, this means I should not advise on products I am not authorised or trained to discuss, I must document why a recommendation is suitable, and I must keep client information accurate and confidential. The exact rules differ by country, but the principle is the same: advice must be competent, documented, and client-centred.',
    },
    {
      question: 'Walk me through how you would conduct a needs analysis with a new client.',
      why: 'The needs analysis is the first step in every financial advisory relationship. This question tests whether you understand the process and its importance for compliance.',
      sampleAnswer: 'A needs analysis starts with building rapport and establishing trust - clients share very personal financial information, and they need to feel safe doing so. I would then gather comprehensive factual information: income, expenses, assets, liabilities, existing insurance and investment products, family situation, and dependents. Alongside the facts, I would assess the client\'s financial goals - short, medium, and long term - and their risk tolerance using a standardised risk profile questionnaire. Once I have a complete picture, I would analyse any gaps between their current position and their stated goals and obligations: underinsurance, inadequate retirement provision, or estate planning gaps. My product recommendations would be based on those gaps, not on what pays the highest commission. I would present a written record of advice (RONA) for the client to sign, documenting that my recommendations were based on their specific needs.',
    },
    {
      question: 'What is the difference between a retirement annuity and a pension fund?',
      why: 'Product knowledge is tested directly in financial advisor interviews. Confusing common retirement products is a significant red flag.',
      sampleAnswer: 'An employer-sponsored retirement plan is linked to employment: contributions may come from the employee, the employer, or both, and the plan rules usually govern access, transfers, and withdrawals. An individual retirement account or annuity is opened by the person independently and is not tied to a specific employer. The tax treatment, contribution limits, access age, and withdrawal rules differ by country, so an advisor must understand the local rules before making recommendations. The practical difference is control and portability: employer plans are workplace benefits, while individual products are chosen and maintained by the client.',
    },
    {
      question: 'How would you explain the concept of compound interest to a client who has no financial background?',
      why: 'Communicating complex concepts simply is a core competency of financial advisors. This question tests client communication skills, not just product knowledge.',
      sampleAnswer: 'I would use an analogy. "Imagine you plant a tree and it grows fruit every year. In the first year, you have one tree that grows ten apples. If you leave those apples to grow into new trees, in the second year you now have eleven trees each growing ten apples. In the third year, those apples all grow more trees. You never planted more seeds - you just let what was already growing, keep growing. Compound interest works the same way. The interest your investment earns in one year gets added to your original amount, and next year you earn interest on the bigger total. The longer you leave it, the more dramatic the growth becomes. This is why starting to save even a small amount early in your career makes such a significant difference compared to waiting until you earn more."',
    },
    {
      question: 'What does KYC require when onboarding a new client?',
      why: 'KYC and AML compliance are daily operational requirements in financial services. Not knowing this at entry level is a compliance risk for the firm.',
      sampleAnswer: 'Know Your Customer requirements mean a financial services firm must verify the client\'s identity before entering into a business relationship. For an individual client, this usually includes verifying their full legal name, date of birth, identity document or passport, address, and sometimes tax identification information. For a business client, the requirements extend to verifying directors, beneficial owners, and registration documents. KYC also supports anti-money laundering obligations: if something looks suspicious, the firm must escalate or report it according to local rules. The exact documents and retention periods differ by country, so I would follow the firm\'s compliance checklist carefully.',
    },
    {
      question: 'Why do you want a career as a financial advisor rather than another finance role like accounting or banking?',
      why: 'Financial services firms want advisors who are intrinsically motivated by helping clients, not just by income potential. Commission-heavy structures cause high turnover among candidates who are not genuinely motivated by the advisory work.',
      sampleAnswer: 'I want to work in a role where the quality of the advice I give has a direct and visible impact on a client\'s life. Accounting and banking are valuable careers, but the feedback loop is indirect - I would not often see the outcome of my work in the way that a financial advisor does when a client reaches retirement financially secure because of the plan we built together, or when a family is protected after losing a breadwinner because of the life cover that was in place. I also find the complexity of financial planning compelling - the interplay of regulation, tax, and investment strategy means there is always something to learn. I want to build a book of business over time based on trust and results, not transactions.',
    },
  ],

  relatedRoadmapId: 'junior-accountant',
  relatedPrepIds: ['junior-accountant', 'business-analyst', 'data-analyst'],
};
