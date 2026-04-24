import type { PortfolioTask } from '@/types';

export const financeAccountingTasks: PortfolioTask[] = [

  {
    id: 'cash-flow-sme',
    categoryId: 'finance-accounting',
    topicId: 'cash-flow-forecasting',
    level: 'intermediate',
    title: '12-Month Cash Flow for a Fictional SME',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a defensible 12-month cash flow forecast for a small business.',
    scenario:
      'A Cape Town-based graphic design studio with three staff has been profitable on paper for two years but keeps running out of cash at month end. The owner needs a 12-month cash flow forecast she can actually use, not a generic template.',
    brief:
      'Build the forecast. You do not need a spreadsheet file, a Markdown table is fine. You do need to think carefully about timing: when cash actually comes in and goes out, not when invoices are raised.',
    deliverables: [
      'A month-by-month cash flow table (opening balance, inflows, outflows, closing balance) for 12 months',
      'Your assumptions (client payment terms, seasonality, tax timings) listed explicitly',
      'The months with the tightest cash position and one concrete action the owner could take in each',
      'One scenario variation (for example: what if the biggest client pays 30 days late) and its impact',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You can invent the numbers. They just need to be internally consistent and plausible for a 3-person design studio in South Africa.',
    rubric: [
      { key: 'structure', label: 'Model Structure', description: 'Does the forecast distinguish cash from accrual correctly?', weight: 25 },
      { key: 'assumptions', label: 'Assumption Quality', description: 'Are the assumptions explicit, realistic, and South-Africa appropriate?', weight: 25 },
      { key: 'insights', label: 'Actionable Output', description: 'Does the forecast actually help the owner spot and prevent a cash crunch?', weight: 30 },
      { key: 'scenario', label: 'Scenario Thinking', description: 'Is the stress scenario meaningful and its impact calculated properly?', weight: 20 },
    ],
    skillsProven: ['Cash flow modelling', 'Financial forecasting', 'SME finance', 'Financial storytelling'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'ratio-analysis-memo',
    categoryId: 'finance-accounting',
    topicId: 'ratio-analysis',
    level: 'beginner',
    title: 'Ratio Analysis from Sample Statements',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Turn two years of financials into a one-page investment memo.',
    scenario:
      'A small retail company has posted its financial statements for the last two years. A mentor asks you to write a one-page memo summarising what the numbers say about the business and whether you would lend it working capital.',
    brief:
      'You can invent plausible numbers for the two years as long as they are internally consistent. Calculate at least four ratios and interpret them in plain English.',
    deliverables: [
      'A table of at least 4 ratios for both years, with the formulas visible',
      'One paragraph interpreting the trends across the two years',
      'A clear yes, no, or conditional recommendation on lending working capital, with your reasoning',
      'One number you would want to see before finalising your recommendation',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Interpretation beats calculation. A correctly calculated ratio with no insight earns fewer marks than a rough estimate with sharp analysis.',
    rubric: [
      { key: 'ratios', label: 'Ratio Selection & Calc', description: 'Are the chosen ratios appropriate and the formulas correct?', weight: 30 },
      { key: 'interpretation', label: 'Interpretation', description: 'Does the memo explain what the ratios mean for this specific business?', weight: 35 },
      { key: 'decision', label: 'Recommendation', description: 'Is the recommendation clear and well supported by the analysis?', weight: 25 },
      { key: 'gap', label: 'Gap Awareness', description: 'Is the "what I still want to know" question a good one?', weight: 10 },
    ],
    skillsProven: ['Financial ratio analysis', 'Credit thinking', 'Business writing', 'Financial judgment'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Phase 1: Fill Cash Flow gaps ---
  {
    id: 'cash-flow-personal-budget',
    categoryId: 'finance-accounting',
    topicId: 'cash-flow-forecasting',
    level: 'beginner',
    title: 'Personal Cash Flow Budget',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Build a 3-month personal cash flow for a graduate earning R18,000/month.',
    scenario:
      'A recent graduate just started their first job at R18,000/month (before tax). They have R45,000 in student debt, rent of R4,500, and no savings. They want to know: "Will I make it through the first 3 months?"',
    brief:
      'Build a 3-month personal cash flow showing inflows (net salary after PAYE), outflows (rent, transport, food, debt repayment, etc.), and the closing balance each month.',
    deliverables: [
      'A 3-month cash flow table: Opening Balance, Net Salary, each expense category, Closing Balance',
      'A rough PAYE calculation showing how you arrived at the net salary figure',
      'One specific recommendation for the graduate to build a R5,000 emergency fund within 6 months',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Use realistic South African costs. Transport in Gauteng is not the same as Cape Town. Show that you have thought about real expenses, not textbook categories.',
    rubric: [
      { key: 'accuracy', label: 'Calculation Accuracy', description: 'Are the PAYE calculation and expense estimates realistic for SA?', weight: 30 },
      { key: 'completeness', label: 'Expense Completeness', description: 'Are common expenses included (transport, data, food, insurance)?', weight: 30 },
      { key: 'advice', label: 'Savings Recommendation', description: 'Is the emergency fund plan realistic and specific?', weight: 40 },
    ],
    skillsProven: ['Personal finance', 'Cash flow budgeting', 'PAYE basics', 'Financial planning'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'cash-flow-distress-modelling',
    categoryId: 'finance-accounting',
    topicId: 'cash-flow-forecasting',
    level: 'advanced',
    title: 'Cash Flow Under Distress',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Model cash flow for a business facing a 40% revenue drop and design a survival plan.',
    scenario:
      'A Johannesburg-based events company with 20 staff generates R800K/month in revenue. A major client (40% of revenue) has just cancelled their contract with 30 days notice. The owner needs to know: when does the cash run out, and what can we do?',
    brief:
      'Model the next 6 months of cash flow under the distressed scenario. Identify the month the business runs out of cash, then design a survival plan that extends the runway.',
    deliverables: [
      'A 6-month distressed cash flow showing the month-by-month burn and the "zero cash" month',
      'A survival plan with at least 5 specific actions (cost cuts, payment term renegotiation, revenue recovery)',
      'A revised cash flow showing the impact of your survival plan',
      'The break-even revenue level the business needs to reach and by when',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Cutting staff is the obvious answer but has legal implications in SA (CCMA, section 189). Show that you understand the cost AND complexity of retrenchment.',
    rubric: [
      { key: 'model', label: 'Distress Model', description: 'Is the distressed cash flow internally consistent with realistic cost assumptions?', weight: 25 },
      { key: 'survival', label: 'Survival Plan', description: 'Are the actions specific, costed, and achievable within the timeline?', weight: 30 },
      { key: 'revised', label: 'Revised Forecast', description: 'Does the revised cash flow show a credible path to survival?', weight: 25 },
      { key: 'legal', label: 'Legal Awareness', description: 'Does the candidate acknowledge SA labour law implications?', weight: 20 },
    ],
    skillsProven: ['Distressed cash flow', 'Business turnaround', 'Cost management', 'SA labour law awareness'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Phase 1: Fill Ratio Analysis gaps ---
  {
    id: 'ratio-competitor-comparison',
    categoryId: 'finance-accounting',
    topicId: 'ratio-analysis',
    level: 'intermediate',
    title: 'Competitor Ratio Comparison',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Compare 3 SA-listed retailers using financial ratios and write an investment note.',
    scenario:
      'An investment analyst is comparing three South African listed retailers (invent plausible companies). She needs a quick ratio comparison to decide which one to investigate further for a potential buy recommendation.',
    brief:
      'Calculate and compare at least 6 ratios across 3 companies. Invent plausible financial data that tells a story — one company should be clearly stronger, one weaker, and one interesting.',
    deliverables: [
      'A comparison table: 3 companies × 6 ratios (profitability, liquidity, leverage, efficiency)',
      'A one-page investment note identifying the strongest company and why',
      'One ratio where the "obvious winner" actually looks weak, and what it might mean',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Ratios mean nothing in isolation. The value is in comparison — across companies and across time. Show this comparative thinking.',
    rubric: [
      { key: 'ratios', label: 'Ratio Selection', description: 'Are the 6 ratios well-chosen to cover profitability, liquidity, leverage, and efficiency?', weight: 25 },
      { key: 'comparison', label: 'Comparative Analysis', description: 'Does the comparison tell a story rather than just listing numbers?', weight: 35 },
      { key: 'nuance', label: 'Analytical Nuance', description: 'Does the candidate spot the contradiction and explore it?', weight: 40 },
    ],
    skillsProven: ['Comparative ratio analysis', 'Investment analysis', 'Financial storytelling', 'Critical thinking'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'ratio-red-flag-detection',
    categoryId: 'finance-accounting',
    topicId: 'ratio-analysis',
    level: 'advanced',
    title: 'Red Flag Detection in Financial Statements',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Spot creative accounting and earnings manipulation in suspicious financials.',
    scenario:
      'A company\'s revenue has grown 30% per year for 3 years, but operating cash flow has been flat. Accounts receivable has doubled. The auditors signed off, but something does not smell right.',
    brief:
      'Analyse the hypothetical financial statements and identify the red flags. Explain the manipulation techniques that could produce these patterns and design 3 forensic checks an auditor should have performed.',
    deliverables: [
      'A list of at least 5 red flags with specific ratios or trends that support each',
      'An explanation of the most likely manipulation technique (channel stuffing, premature revenue recognition, etc.)',
      'Three forensic checks with the specific data or documents you would request',
      'A one-paragraph opinion on whether these financials should be trusted',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Revenue growing while cash flow stagnates is the classic red flag. But what specifically could cause it? Be precise about the mechanism.',
    rubric: [
      { key: 'flags', label: 'Red Flag Identification', description: 'Are the red flags specific and supported by ratio analysis?', weight: 30 },
      { key: 'mechanism', label: 'Manipulation Mechanism', description: 'Is the proposed manipulation technique credible and specific?', weight: 30 },
      { key: 'forensics', label: 'Forensic Checks', description: 'Would the proposed checks actually uncover the manipulation?', weight: 25 },
      { key: 'judgment', label: 'Professional Judgment', description: 'Is the opinion appropriately cautious and well-supported?', weight: 15 },
    ],
    skillsProven: ['Forensic accounting', 'Red flag analysis', 'Earnings quality', 'Professional skepticism'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 3: Budgeting & Variance Analysis ---
  {
    id: 'budget-department-build',
    categoryId: 'finance-accounting',
    topicId: 'budgeting-variance',
    level: 'beginner',
    title: 'Build a Department Budget',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create a 12-month operating budget for a 10-person marketing team.',
    scenario:
      'A marketing director has been told to submit next year\'s budget to the CFO by Friday. The team has 10 people, spends on advertising, software tools, events, and travel. Last year\'s total was R2.4M.',
    brief:
      'Build the 12-month budget. Break it down by expense category, allocate realistically across months (not just R200K × 12), and explain any seasonal patterns.',
    deliverables: [
      'A 12-month budget table with rows for each expense category and columns for each month',
      'Assumptions for each line item (e.g., "Ad spend peaks in Nov-Dec for Black Friday")',
      'The total budget with a comparison to last year and a justification for any increase or decrease',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A flat R200K/month budget is lazy. Real spending has seasonal peaks (events, campaigns, hiring). Show this variation.',
    rubric: [
      { key: 'structure', label: 'Budget Structure', description: 'Are the expense categories comprehensive and logically grouped?', weight: 30 },
      { key: 'seasonality', label: 'Seasonal Allocation', description: 'Does the monthly allocation reflect realistic business patterns?', weight: 35 },
      { key: 'assumptions', label: 'Assumption Quality', description: 'Are the assumptions explicit and defensible?', weight: 35 },
    ],
    skillsProven: ['Budget construction', 'Financial planning', 'Cost estimation', 'Business acumen'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'budget-variance-report',
    categoryId: 'finance-accounting',
    topicId: 'budgeting-variance',
    level: 'intermediate',
    title: 'Variance Analysis Report',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Explain why actual results differ from budget — controllable vs uncontrollable.',
    scenario:
      'Q1 is over. The marketing team spent R680K against a budget of R600K — 13% over. The CFO wants to know why and whether it will happen again.',
    brief:
      'Write a variance analysis report. Decompose the R80K overspend into specific line items, classify each as controllable or uncontrollable, and recommend corrective actions for Q2.',
    deliverables: [
      'A variance table: Line Item, Budget, Actual, Variance (R and %), Controllable/Uncontrollable',
      'An explanation for each significant variance (>5%) with root cause',
      'A recommendation for Q2: which spending to cut, which to maintain, and what approvals to tighten',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Not all overspends are bad. If the team overspent on a campaign that generated 3× ROI, that is a good overspend. Show this judgment.',
    rubric: [
      { key: 'decomposition', label: 'Variance Decomposition', description: 'Is the overspend broken into specific, meaningful line items?', weight: 30 },
      { key: 'classification', label: 'Controllable vs Uncontrollable', description: 'Is the classification correct and well-justified?', weight: 30 },
      { key: 'action', label: 'Corrective Actions', description: 'Are the Q2 recommendations specific and balanced?', weight: 40 },
    ],
    skillsProven: ['Variance analysis', 'Cost control', 'Financial reporting', 'Business judgment'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'budget-zero-based',
    categoryId: 'finance-accounting',
    topicId: 'budgeting-variance',
    level: 'advanced',
    title: 'Zero-Based Budgeting Exercise',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Rebuild a department budget from scratch, justifying every line from zero.',
    scenario:
      'The CEO has mandated zero-based budgeting (ZBB) for all departments. Instead of starting from last year\'s budget and adjusting, every team must justify every rand from zero. The IT department (R8M annual spend) must go through this exercise.',
    brief:
      'Conduct a ZBB exercise for the IT department. List every expense, rank them by business criticality, and identify which items you would cut if forced to reduce the budget by 20%.',
    deliverables: [
      'A complete expense inventory with each item justified from zero (not "we spent this last year")',
      'A priority ranking: Critical (business stops without it), Important (degraded service), Nice-to-Have (efficiency gains)',
      'A 20% cut scenario showing which items you would eliminate and the business impact of each cut',
      'One expense that looks like a cut candidate but should actually be increased, with justification',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'ZBB is not about cutting costs. It is about justifying costs. Some line items will be higher than last year if the justification is strong enough.',
    rubric: [
      { key: 'inventory', label: 'Expense Inventory', description: 'Is every expense justified with a business reason (not "historical spend")?', weight: 25 },
      { key: 'ranking', label: 'Priority Ranking', description: 'Is the critical/important/nice-to-have classification well-reasoned?', weight: 25 },
      { key: 'cut', label: 'Cut Scenario', description: 'Is the 20% cut achievable and are the impacts honestly assessed?', weight: 30 },
      { key: 'increase', label: 'Strategic Increase', description: 'Does the candidate identify a counter-intuitive investment opportunity?', weight: 20 },
    ],
    skillsProven: ['Zero-based budgeting', 'Cost justification', 'Strategic prioritisation', 'Financial discipline'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 4: Financial Statements & Reporting ---
  {
    id: 'fin-statements-income-interpret',
    categoryId: 'finance-accounting',
    topicId: 'financial-statements-reporting',
    level: 'beginner',
    title: 'Read and Interpret an Income Statement',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Extract key insights from a fictional income statement for a non-finance manager.',
    scenario:
      'The operations manager asks you: "I got this income statement from finance. Revenue went up but profit went down. How is that possible?" She needs a plain English explanation.',
    brief:
      'Invent a plausible 2-year income statement where revenue grows 15% but net profit declines 10%. Then write a memo explaining what happened to a non-finance manager.',
    deliverables: [
      'A 2-year income statement (Revenue, COGS, Gross Profit, Operating Expenses, EBIT, Interest, Tax, Net Profit)',
      'A memo (max 200 words) explaining in plain English why profit fell despite revenue growth',
      'The one line item you would investigate first and what question you would ask the finance team',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The income statement must be internally consistent. If COGS grew faster than revenue, that is a margin squeeze — explain it in terms the ops manager understands.',
    rubric: [
      { key: 'statement', label: 'Statement Construction', description: 'Is the income statement internally consistent and plausible?', weight: 25 },
      { key: 'explanation', label: 'Plain English Explanation', description: 'Would a non-finance manager actually understand this memo?', weight: 40 },
      { key: 'investigation', label: 'Follow-Up Question', description: 'Is the investigation question specific and analytically sound?', weight: 35 },
    ],
    skillsProven: ['Income statement interpretation', 'Financial communication', 'Business acumen', 'Analytical thinking'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'fin-statements-balance-sheet',
    categoryId: 'finance-accounting',
    topicId: 'financial-statements-reporting',
    level: 'intermediate',
    title: 'Prepare a Balance Sheet from Trial Balance',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Convert a trial balance into a properly classified balance sheet.',
    scenario:
      'The bookkeeper has produced a trial balance for year-end. The auditors need a properly classified balance sheet separating current vs non-current assets and liabilities. The bookkeeper does not know how to do the classification.',
    brief:
      'Invent a 20-line trial balance for a small manufacturing company. Then convert it into a classified balance sheet with proper groupings.',
    deliverables: [
      'A 20-line trial balance with debits and credits that balance',
      'A classified balance sheet: Current Assets, Non-Current Assets, Current Liabilities, Non-Current Liabilities, Equity',
      'Three journal entries for common year-end adjustments (depreciation, accruals, prepayments) and their impact on the balance sheet',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The trial balance must balance. The balance sheet must balance. If they do not, you have made an error. Check your work.',
    rubric: [
      { key: 'trial-balance', label: 'Trial Balance', description: 'Does the trial balance balance with plausible account names and amounts?', weight: 25 },
      { key: 'classification', label: 'Balance Sheet Classification', description: 'Are all items correctly classified as current/non-current?', weight: 35 },
      { key: 'adjustments', label: 'Year-End Adjustments', description: 'Are the 3 journal entries correct with proper double-entry?', weight: 40 },
    ],
    skillsProven: ['Balance sheet preparation', 'Trial balance', 'Year-end adjustments', 'Double-entry bookkeeping'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'fin-statements-consolidation',
    categoryId: 'finance-accounting',
    topicId: 'financial-statements-reporting',
    level: 'advanced',
    title: 'Simplified Group Consolidation',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Prepare a consolidated income statement for a parent with two subsidiaries.',
    scenario:
      'A holding company owns 100% of Subsidiary A and 80% of Subsidiary B. All three entities have submitted their individual income statements. The CFO needs a consolidated view that eliminates inter-company transactions.',
    brief:
      'Prepare a simplified consolidated income statement. Identify and eliminate inter-company revenue (Subsidiary A sells to Parent), calculate minority interest for Subsidiary B, and present the group result.',
    deliverables: [
      'Individual income statements for all 3 entities (invented but internally consistent)',
      'A consolidation worksheet showing: line-by-line addition, inter-company eliminations, and minority interest',
      'The final consolidated income statement with a note explaining the minority interest calculation',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Inter-company transactions inflate group revenue if not eliminated. Subsidiary A selling R500K to Parent means group revenue is overstated by R500K. Show the elimination.',
    rubric: [
      { key: 'individual', label: 'Individual Statements', description: 'Are the 3 income statements plausible with clear inter-company transactions?', weight: 20 },
      { key: 'elimination', label: 'Inter-Company Elimination', description: 'Are inter-company revenues and costs correctly identified and eliminated?', weight: 35 },
      { key: 'minority', label: 'Minority Interest', description: 'Is the 20% minority interest correctly calculated and presented?', weight: 30 },
      { key: 'presentation', label: 'Consolidated Presentation', description: 'Is the final statement properly formatted and reconcilable?', weight: 15 },
    ],
    skillsProven: ['Group consolidation', 'Inter-company eliminations', 'Minority interest', 'Financial reporting'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 5: Tax Compliance (South Africa) ---
  {
    id: 'tax-vat-return',
    categoryId: 'finance-accounting',
    topicId: 'tax-compliance-sa',
    level: 'beginner',
    title: 'VAT Calculation and Return',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Calculate VAT output, input, and net payable for a small business monthly return.',
    scenario:
      'A small IT consulting company is registered for VAT (standard rate 15%). In March, they invoiced R460,000 (incl. VAT) to clients and received R172,500 (incl. VAT) in supplier invoices. The owner needs to know how much to pay SARS.',
    brief:
      'Calculate the VAT output tax, VAT input tax, and net VAT payable. Show your working clearly.',
    deliverables: [
      'VAT output calculation: extracting VAT from the inclusive client invoices',
      'VAT input calculation: extracting VAT from the inclusive supplier invoices',
      'Net VAT payable to SARS with the formula clearly shown',
      'One common VAT error small businesses make and how to avoid it',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'R460,000 inclusive of VAT is not R460,000 × 15%. The VAT fraction is 15/115. Show that you understand this.',
    rubric: [
      { key: 'output', label: 'Output Tax', description: 'Is the VAT output correctly extracted from VAT-inclusive amounts?', weight: 30 },
      { key: 'input', label: 'Input Tax', description: 'Is the VAT input correctly calculated?', weight: 25 },
      { key: 'net', label: 'Net Payable', description: 'Is the net VAT payable correct?', weight: 25 },
      { key: 'error', label: 'Common Error', description: 'Is the identified error realistic and the prevention advice practical?', weight: 20 },
    ],
    skillsProven: ['VAT calculations', 'SARS compliance', 'Tax basics', 'Small business tax'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'tax-paye-payroll',
    categoryId: 'finance-accounting',
    topicId: 'tax-compliance-sa',
    level: 'intermediate',
    title: 'PAYE and Payroll Tax Compliance',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Calculate PAYE, UIF, and SDL for 5 employees at different salary levels.',
    scenario:
      'A small business has 5 employees with annual salaries of R120K, R250K, R420K, R650K, and R1.2M. The bookkeeper resigned and you need to calculate the monthly payroll tax obligations.',
    brief:
      'Calculate the monthly PAYE (using current SA tax tables), UIF (employee and employer contributions), and SDL for each employee. Show the total employer cost and total payable to SARS.',
    deliverables: [
      'A payroll summary table: Employee, Gross Monthly, PAYE, UIF (Employee), UIF (Employer), SDL, Net Pay',
      'The total monthly SARS payment (PAYE + UIF + SDL combined)',
      'A note explaining the difference between employee deductions and employer contributions',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Use the current SA tax brackets. UIF is 1% employee + 1% employer (capped). SDL is 1% of total payroll. Show you know these rates.',
    rubric: [
      { key: 'paye', label: 'PAYE Calculation', description: 'Is PAYE correctly calculated using the progressive tax table?', weight: 35 },
      { key: 'uif-sdl', label: 'UIF and SDL', description: 'Are UIF and SDL correctly calculated with the right rates and caps?', weight: 30 },
      { key: 'presentation', label: 'Payroll Presentation', description: 'Is the summary clear enough for the business owner to understand total cost?', weight: 20 },
      { key: 'distinction', label: 'Employee vs Employer', description: 'Is the distinction between deductions and contributions clear?', weight: 15 },
    ],
    skillsProven: ['PAYE', 'UIF', 'SDL', 'Payroll tax compliance'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'tax-provisional-strategy',
    categoryId: 'finance-accounting',
    topicId: 'tax-compliance-sa',
    level: 'advanced',
    title: 'Provisional Tax Strategy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Advise a business owner on provisional tax timing, penalties, and cash flow.',
    scenario:
      'A successful freelance consultant earns R1.8M annually. She has been paying provisional tax but consistently underestimates, resulting in penalties. She wants to understand the system properly and plan her cash flow around tax payments.',
    brief:
      'Write a comprehensive provisional tax advisory memo. Cover the IRP6 submission dates, the penalty regime for underestimation, and a cash flow strategy for setting aside tax monthly.',
    deliverables: [
      'A summary of the provisional tax system: who must register, the two payment periods, and the IRP6 deadlines',
      'A calculation of her estimated provisional tax payments (P1 and P2) based on R1.8M taxable income',
      'The penalty regime: what happens if she underestimates by more than the SARS tolerance',
      'A monthly cash flow set-aside plan showing how much to save each month to cover tax comfortably',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'SARS penalises underestimation if the estimate is less than 80% of actual taxable income (for income above a threshold). Show you know this rule.',
    rubric: [
      { key: 'system', label: 'System Knowledge', description: 'Are the provisional tax rules, deadlines, and thresholds correct?', weight: 25 },
      { key: 'calculation', label: 'Tax Calculation', description: 'Are the P1 and P2 payments correctly calculated?', weight: 30 },
      { key: 'penalties', label: 'Penalty Awareness', description: 'Is the penalty regime correctly explained with the 80% rule?', weight: 25 },
      { key: 'cashflow', label: 'Cash Flow Strategy', description: 'Is the monthly set-aside plan practical and conservative enough?', weight: 20 },
    ],
    skillsProven: ['Provisional tax', 'Tax planning', 'Cash flow management', 'SARS compliance'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 6: Management Accounting ---
  {
    id: 'mgmt-breakeven-analysis',
    categoryId: 'finance-accounting',
    topicId: 'management-accounting',
    level: 'beginner',
    title: 'Break-Even Analysis',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Calculate the break-even point and interpret it for pricing decisions.',
    scenario:
      'A Durban-based bakery is launching a new line of artisanal breads. Fixed costs (rent, equipment, salary) are R45,000/month. Each loaf costs R18 to produce and sells for R42. The owner wants to know how many loaves she needs to sell per month to break even.',
    brief:
      'Calculate the break-even point in units and in revenue. Then explore what happens if the selling price drops by R5 or if fixed costs increase by 20%.',
    deliverables: [
      'The break-even calculation: units and revenue, with the formula shown',
      'A sensitivity table showing break-even at 3 different price points and 3 different fixed cost levels',
      'A one-paragraph recommendation on pricing strategy based on the analysis',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Break-even = Fixed Costs / (Price - Variable Cost). But the insight is in the sensitivity — how fragile is this business model?',
    rubric: [
      { key: 'calculation', label: 'Break-Even Calculation', description: 'Is the break-even correctly calculated in both units and revenue?', weight: 30 },
      { key: 'sensitivity', label: 'Sensitivity Analysis', description: 'Does the sensitivity table explore meaningful price and cost variations?', weight: 35 },
      { key: 'recommendation', label: 'Pricing Recommendation', description: 'Is the recommendation grounded in the numbers, not guesswork?', weight: 35 },
    ],
    skillsProven: ['Break-even analysis', 'Cost-volume-profit', 'Pricing strategy', 'Financial decision-making'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'mgmt-cost-allocation',
    categoryId: 'finance-accounting',
    topicId: 'management-accounting',
    level: 'intermediate',
    title: 'Cost Allocation for Shared Services',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Allocate IT costs across 4 business units using activity-based costing.',
    scenario:
      'A company\'s IT department costs R3.6M/year to run. Four business units use IT services (Sales, Operations, Finance, HR). The CFO wants to allocate IT costs fairly so each unit sees its "true" operating cost. Currently costs are split equally (25% each), which Sales thinks is unfair because they use far less IT than Operations.',
    brief:
      'Design an activity-based cost allocation model. Identify the cost drivers (helpdesk tickets, server usage, headcount, etc.), gather hypothetical data, and allocate costs. Compare your allocation to the current 25/25/25/25 split.',
    deliverables: [
      'The cost drivers you chose and why each is appropriate',
      'A hypothetical data table: Business Unit × Cost Driver quantities',
      'The ABC allocation vs the current equal split, showing the difference for each unit',
      'A recommendation on which allocation method the company should adopt',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Equal allocation is easy but wrong. Activity-based allocation is accurate but complex. Show that you understand the trade-off.',
    rubric: [
      { key: 'drivers', label: 'Cost Driver Selection', description: 'Are the cost drivers causally related to IT consumption?', weight: 30 },
      { key: 'allocation', label: 'Allocation Accuracy', description: 'Is the ABC calculation correct and well-documented?', weight: 30 },
      { key: 'comparison', label: 'Method Comparison', description: 'Is the comparison between ABC and equal split clearly presented?', weight: 20 },
      { key: 'recommendation', label: 'Practical Recommendation', description: 'Does the recommendation balance accuracy with administrative simplicity?', weight: 20 },
    ],
    skillsProven: ['Activity-based costing', 'Cost allocation', 'Management accounting', 'Decision support'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'mgmt-make-vs-buy',
    categoryId: 'finance-accounting',
    topicId: 'management-accounting',
    level: 'advanced',
    title: 'Make vs Buy Decision',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Analyse whether a manufacturer should produce in-house or outsource.',
    scenario:
      'A Johannesburg electronics manufacturer currently produces a circuit board in-house at a total cost of R85 per unit (R35 variable, R50 allocated fixed). A Chinese supplier offers to produce the same board for R55 per unit, delivered. The production manager says "it is cheaper to outsource." The CFO is not so sure.',
    brief:
      'Conduct a make-vs-buy analysis. Consider relevant costs only (sunk costs and allocated overheads that will not change are irrelevant). Include qualitative factors like quality control, lead times, and supply chain risk.',
    deliverables: [
      'A relevant cost comparison: Make (variable cost only) vs Buy (supplier price + any additional costs)',
      'An analysis of which allocated fixed costs would actually be saved vs which would remain',
      'At least 4 qualitative factors that could override the financial analysis',
      'A recommendation with a clear decision rule (at what volume does the decision flip?)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The trap is comparing R85 (full cost) to R55 (supplier price). If R50 of the R85 is allocated overhead that does not go away, the real comparison is R35 vs R55. Show this.',
    rubric: [
      { key: 'relevant-cost', label: 'Relevant Cost Analysis', description: 'Does the candidate correctly identify which costs are relevant (avoid the full-cost trap)?', weight: 35 },
      { key: 'fixed-costs', label: 'Fixed Cost Treatment', description: 'Is the avoidable vs unavoidable fixed cost distinction correct?', weight: 25 },
      { key: 'qualitative', label: 'Qualitative Factors', description: 'Are the qualitative factors specific and commercially important?', weight: 20 },
      { key: 'decision', label: 'Decision Rule', description: 'Is the volume-based decision rule correct and actionable?', weight: 20 },
    ],
    skillsProven: ['Relevant costing', 'Make vs buy analysis', 'Decision analysis', 'Strategic sourcing'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 7: Audit & Internal Controls ---
  {
    id: 'audit-basic-controls',
    categoryId: 'finance-accounting',
    topicId: 'audit-internal-controls',
    level: 'beginner',
    title: 'Design Basic Internal Controls',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Identify control weaknesses in a small business and propose segregation of duties.',
    scenario:
      'A small retail business has one person who receives inventory, records it in the system, approves supplier payments, and reconciles the bank account. The owner suspects stock losses but cannot prove it.',
    brief:
      'Identify the control weaknesses in this setup. Propose a redesigned process with proper segregation of duties, even with a small team (you can propose splitting tasks, not necessarily hiring).',
    deliverables: [
      'A list of at least 5 control weaknesses with the risk each one creates',
      'A redesigned process showing which tasks should be separated and who should do what',
      'One compensating control for a situation where full segregation is not possible with a small team',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Segregation of duties means no single person should authorise, record, AND have custody of an asset. In small businesses, compensating controls (spot checks, management review) fill the gap.',
    rubric: [
      { key: 'weaknesses', label: 'Weakness Identification', description: 'Are the control weaknesses specific and the associated risks correctly stated?', weight: 35 },
      { key: 'redesign', label: 'Process Redesign', description: 'Is the proposed segregation practical for a small business?', weight: 35 },
      { key: 'compensating', label: 'Compensating Controls', description: 'Is the compensating control realistic and effective?', weight: 30 },
    ],
    skillsProven: ['Internal controls', 'Segregation of duties', 'Risk identification', 'Process design'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'audit-trail-walkthrough',
    categoryId: 'finance-accounting',
    topicId: 'audit-internal-controls',
    level: 'intermediate',
    title: 'Audit Trail Walkthrough',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Trace a transaction from source document to financial statement.',
    scenario:
      'An auditor asks you to demonstrate that a R125,000 payment to a supplier can be traced from the bank statement back to the original purchase order. You need to map the entire audit trail.',
    brief:
      'Map the complete audit trail for a purchase transaction: Purchase Requisition → Purchase Order → Goods Received Note → Supplier Invoice → Payment Authorisation → Bank Payment → General Ledger Entry → Financial Statement.',
    deliverables: [
      'A step-by-step audit trail showing each document, who creates it, and what it proves',
      'The control points at each stage (who approves, what limits apply, what matching checks occur)',
      'One missing document scenario and how it would show up as an exception in an audit',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Three-way matching (PO, GRN, Invoice) is the core control for purchases. If any of the three do not match, the payment should be held. Show this.',
    rubric: [
      { key: 'trail', label: 'Audit Trail Completeness', description: 'Are all documents in the purchase-to-pay cycle correctly mapped?', weight: 30 },
      { key: 'controls', label: 'Control Points', description: 'Are the control points at each stage correctly identified?', weight: 35 },
      { key: 'exception', label: 'Exception Handling', description: 'Is the missing document scenario realistic and the audit impact correctly described?', weight: 35 },
    ],
    skillsProven: ['Audit trails', 'Purchase-to-pay cycle', 'Three-way matching', 'Internal controls'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'audit-fraud-risk-assessment',
    categoryId: 'finance-accounting',
    topicId: 'audit-internal-controls',
    level: 'advanced',
    title: 'Fraud Risk Assessment',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Conduct a fraud risk assessment using the fraud triangle framework.',
    scenario:
      'A growing logistics company has tripled in size over 3 years but its internal controls have not kept pace. The CFO is worried about fraud risk but does not know where to start. She hires you to conduct a fraud risk assessment.',
    brief:
      'Conduct a structured fraud risk assessment using the fraud triangle (Opportunity, Pressure, Rationalisation). Identify the top fraud risks, assess their likelihood and impact, and recommend preventive controls.',
    deliverables: [
      'A fraud risk register: Risk Description, Fraud Triangle Element, Likelihood (L/M/H), Impact (L/M/H), Current Controls, Recommended Controls',
      'At least 6 fraud risks covering asset misappropriation, financial statement fraud, and corruption',
      'The top 3 risks ranked by residual risk (after current controls) with specific remediation actions',
      'A tone-at-the-top recommendation: how leadership behaviour can reduce fraud risk',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Fraud is not just theft. Financial statement fraud (inflating revenue) and corruption (kickbacks from suppliers) are often higher impact. Cover all three categories.',
    rubric: [
      { key: 'register', label: 'Risk Register', description: 'Is the fraud risk register structured with the fraud triangle applied correctly?', weight: 25 },
      { key: 'coverage', label: 'Risk Coverage', description: 'Are all three fraud categories covered (misappropriation, FS fraud, corruption)?', weight: 25 },
      { key: 'remediation', label: 'Remediation Quality', description: 'Are the recommended controls specific and proportionate?', weight: 30 },
      { key: 'tone', label: 'Tone at the Top', description: 'Does the candidate understand how leadership culture affects fraud risk?', weight: 20 },
    ],
    skillsProven: ['Fraud risk assessment', 'Fraud triangle', 'Internal controls', 'Risk management'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 8: Payroll & Statutory Returns ---
  {
    id: 'payroll-gross-to-net',
    categoryId: 'finance-accounting',
    topicId: 'payroll-statutory-returns',
    level: 'beginner',
    title: 'Process a Monthly Payroll',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Calculate gross-to-net pay for 5 employees including all SA deductions.',
    scenario:
      'You are the bookkeeper for a small business with 5 employees. It is month-end and you need to process payroll. Each employee has different salary levels and benefit structures (pension, medical aid).',
    brief:
      'Calculate the gross-to-net pay for each employee. Include PAYE, UIF, pension fund contributions, and medical aid deductions. Show the total cost to the employer.',
    deliverables: [
      'A payslip summary for each employee: Gross Pay, PAYE, UIF, Pension, Medical Aid, Net Pay',
      'The total employer cost per employee (gross + employer UIF + employer pension)',
      'The total amounts payable to SARS, the pension fund, and the medical aid scheme',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Pension contributions reduce taxable income. If an employee contributes R2,000 to pension, their taxable income is lower. Show this deduction-before-PAYE logic.',
    rubric: [
      { key: 'calculations', label: 'Payroll Calculations', description: 'Are gross-to-net calculations correct for all 5 employees?', weight: 40 },
      { key: 'employer-cost', label: 'Employer Cost', description: 'Is the total employer cost correctly calculated (including employer contributions)?', weight: 30 },
      { key: 'third-party', label: 'Third-Party Payments', description: 'Are the amounts payable to SARS, pension, and medical aid correctly totalled?', weight: 30 },
    ],
    skillsProven: ['Payroll processing', 'Gross-to-net calculations', 'Statutory deductions', 'Employee benefits'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'payroll-emp201-emp501',
    categoryId: 'finance-accounting',
    topicId: 'payroll-statutory-returns',
    level: 'intermediate',
    title: 'EMP201 and EMP501 Filing',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Prepare the monthly EMP201 and annual EMP501 reconciliation.',
    scenario:
      'The financial year has just ended. You need to prepare the monthly EMP201 (PAYE/UIF/SDL payment declaration) and reconcile it to the annual EMP501 submission. The previous preparer left no documentation.',
    brief:
      'Walk through the EMP201 and EMP501 process. Show the monthly declaration amounts, the annual reconciliation, and how to identify and resolve discrepancies.',
    deliverables: [
      'A 12-month EMP201 summary showing PAYE, UIF, and SDL declared and paid each month',
      'The EMP501 reconciliation: total declared vs total per IRP5 certificates issued',
      'Two common discrepancy scenarios (e.g., late payment, wrong tax period) and how to resolve each',
      'The key deadlines and penalties for late EMP501 submission',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The EMP501 must reconcile to the total of all IRP5s issued. If it does not, SARS will reject the submission. Show this reconciliation logic.',
    rubric: [
      { key: 'emp201', label: 'EMP201 Monthly Summary', description: 'Are the monthly declarations correctly structured with PAYE + UIF + SDL?', weight: 25 },
      { key: 'reconciliation', label: 'EMP501 Reconciliation', description: 'Is the annual reconciliation to IRP5 totals correctly demonstrated?', weight: 35 },
      { key: 'discrepancies', label: 'Discrepancy Resolution', description: 'Are the discrepancy scenarios realistic and resolutions correct?', weight: 25 },
      { key: 'deadlines', label: 'Compliance Awareness', description: 'Are the deadlines and penalties correctly stated?', weight: 15 },
    ],
    skillsProven: ['EMP201', 'EMP501', 'Payroll reconciliation', 'SARS compliance'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'payroll-system-migration',
    categoryId: 'finance-accounting',
    topicId: 'payroll-statutory-returns',
    level: 'advanced',
    title: 'Payroll System Migration Plan',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a migration from manual payroll to an automated system.',
    scenario:
      'A 50-person company has been running payroll on Excel spreadsheets. Errors are increasing, compliance is at risk, and the CFO wants to migrate to a cloud-based payroll system (e.g., SimplePay, Sage, PaySpace). The migration must happen without missing a single payroll run.',
    brief:
      'Design the complete migration plan. Cover system selection criteria, data migration, parallel running, testing, and the cutover strategy.',
    deliverables: [
      'System selection criteria: the 8-10 requirements the new system must meet (SA tax tables, medical aid integration, leave management, etc.)',
      'A data migration checklist: what employee data needs to be moved and validated',
      'A parallel running plan: how many months to run both systems side by side and the reconciliation process',
      'A cutover checklist: the specific steps for the final switch, including rollback procedures',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The biggest risk in payroll migration is paying employees incorrectly. Parallel running for 2-3 months with penny-for-penny reconciliation is essential. Show this.',
    rubric: [
      { key: 'criteria', label: 'Selection Criteria', description: 'Are the system requirements comprehensive and SA-specific?', weight: 25 },
      { key: 'migration', label: 'Data Migration', description: 'Is the data migration plan thorough with validation steps?', weight: 25 },
      { key: 'parallel', label: 'Parallel Running', description: 'Is the parallel running strategy practical with clear reconciliation rules?', weight: 30 },
      { key: 'cutover', label: 'Cutover Strategy', description: 'Does the cutover plan include rollback procedures?', weight: 20 },
    ],
    skillsProven: ['Payroll system migration', 'Change management', 'Risk management', 'System implementation'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 9: Investment Appraisal ---
  {
    id: 'invest-npv-irr-basic',
    categoryId: 'finance-accounting',
    topicId: 'investment-appraisal',
    level: 'beginner',
    title: 'NPV and IRR Calculation',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Calculate NPV and IRR for an equipment purchase and make a recommendation.',
    scenario:
      'A printing company is considering buying a new digital press for R850,000. It will generate additional net cash flows of R220,000 per year for 5 years. The company\'s cost of capital is 12%. Should they buy it?',
    brief:
      'Calculate the NPV and IRR. Show your working step by step. Make a clear recommendation based on the results.',
    deliverables: [
      'The NPV calculation with each year\'s discounted cash flow shown',
      'The IRR (you can estimate using interpolation or trial and error — show the method)',
      'The payback period (simple, not discounted)',
      'A one-paragraph recommendation: buy or not, and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'NPV > 0 means the project creates value. IRR > cost of capital means the same thing. They should agree. If they do not in your calculation, you have made an error.',
    rubric: [
      { key: 'npv', label: 'NPV Calculation', description: 'Is the NPV correctly calculated with proper discounting?', weight: 35 },
      { key: 'irr', label: 'IRR Estimation', description: 'Is the IRR estimated correctly with the method clearly shown?', weight: 30 },
      { key: 'payback', label: 'Payback Period', description: 'Is the payback period correctly calculated?', weight: 15 },
      { key: 'recommendation', label: 'Recommendation', description: 'Is the recommendation consistent with the NPV and IRR results?', weight: 20 },
    ],
    skillsProven: ['NPV', 'IRR', 'Payback period', 'Investment decision-making'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'invest-compare-three-projects',
    categoryId: 'finance-accounting',
    topicId: 'investment-appraisal',
    level: 'intermediate',
    title: 'Compare Three Capital Projects',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Rank 3 mutually exclusive projects and explain when NPV and IRR disagree.',
    scenario:
      'A manufacturing company has R2M to invest and three mutually exclusive options: (A) automate a production line, (B) open a second warehouse, (C) acquire a competitor\'s client book. Each has different investment sizes, cash flow profiles, and risk levels.',
    brief:
      'Evaluate all three projects using NPV, IRR, and payback period. Rank them. Then explain why the rankings might differ depending on which method you use.',
    deliverables: [
      'A comparison table: Project, Investment, NPV, IRR, Payback, Ranking by each method',
      'An explanation of why NPV and IRR can give different rankings (scale differences, timing differences)',
      'Your recommended project with a justification that goes beyond the numbers (risk, strategic fit)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'NPV and IRR often disagree when projects have different scales or cash flow timing. A small project can have a high IRR but low NPV. Show you understand this.',
    rubric: [
      { key: 'calculations', label: 'Appraisal Calculations', description: 'Are NPV, IRR, and payback correctly calculated for all 3 projects?', weight: 30 },
      { key: 'conflict', label: 'Method Conflict', description: 'Does the candidate correctly explain why methods can disagree?', weight: 35 },
      { key: 'recommendation', label: 'Strategic Recommendation', description: 'Does the recommendation consider qualitative factors beyond the numbers?', weight: 35 },
    ],
    skillsProven: ['Capital budgeting', 'NPV vs IRR', 'Investment ranking', 'Strategic thinking'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'invest-sensitivity-analysis',
    categoryId: 'finance-accounting',
    topicId: 'investment-appraisal',
    level: 'advanced',
    title: 'Sensitivity Analysis on a Major Investment',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Model NPV sensitivity to revenue, cost, and discount rate for a R10M expansion.',
    scenario:
      'A South African food manufacturer is considering a R10M factory expansion. Base case projections show NPV of R2.4M over 8 years. The board wants to know: "How wrong can we be before this investment destroys value?"',
    brief:
      'Conduct a sensitivity analysis on the base case NPV. Vary revenue (±20%), operating costs (±15%), and the discount rate (10%-16%). Identify the break-even value for each variable.',
    deliverables: [
      'The base case NPV calculation with all assumptions stated',
      'A sensitivity table: Variable, Base Case, -20%/-15%, +20%/+15%, NPV at each, Break-Even Value',
      'A tornado chart description ranking variables by impact on NPV (which variable matters most?)',
      'A scenario analysis: best case (all variables favourable) vs worst case (all variables adverse)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The break-even value tells the board "revenue can drop by X% before the NPV hits zero." This is far more useful than a single-point NPV estimate.',
    rubric: [
      { key: 'base-case', label: 'Base Case Model', description: 'Is the base case NPV correctly calculated with clear assumptions?', weight: 20 },
      { key: 'sensitivity', label: 'Sensitivity Table', description: 'Are the sensitivity calculations correct with meaningful break-even values?', weight: 30 },
      { key: 'tornado', label: 'Variable Ranking', description: 'Is the tornado chart correctly identifying the most impactful variable?', weight: 25 },
      { key: 'scenarios', label: 'Scenario Analysis', description: 'Are best/worst cases internally consistent and honestly presented?', weight: 25 },
    ],
    skillsProven: ['Sensitivity analysis', 'Financial modelling', 'Risk assessment', 'Investment appraisal'],
    relatedRoadmapIds: ['junior-accountant'],
  },

  // --- Topic 10: Financial Modelling & Valuation ---
  {
    id: 'model-revenue-forecast',
    categoryId: 'finance-accounting',
    topicId: 'financial-modelling-valuation',
    level: 'beginner',
    title: 'Build a Simple Revenue Model',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Forecast 12 months of revenue for a subscription business using drivers.',
    scenario:
      'A SaaS startup has 500 paying customers at R299/month. They add roughly 40 new customers per month and lose 15 (churn). The CEO wants a 12-month revenue forecast.',
    brief:
      'Build a driver-based revenue model. Use new customer additions, churn rate, and ARPU to forecast monthly revenue for 12 months.',
    deliverables: [
      'A 12-month table: Opening Customers, New, Churned, Closing Customers, ARPU, Monthly Revenue',
      'The implied monthly churn rate and annual churn rate',
      'One scenario: what if churn drops from 15 to 10 per month? Show the revenue impact by month 12',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Revenue = Customers × ARPU. But customers compound — losing fewer customers each month has a dramatic effect by month 12. Show this compounding.',
    rubric: [
      { key: 'model', label: 'Model Construction', description: 'Is the driver-based model correctly built with month-on-month logic?', weight: 35 },
      { key: 'churn', label: 'Churn Calculation', description: 'Is the churn rate correctly calculated as a percentage?', weight: 25 },
      { key: 'scenario', label: 'Scenario Impact', description: 'Does the reduced-churn scenario show the compounding effect?', weight: 40 },
    ],
    skillsProven: ['Revenue modelling', 'SaaS metrics', 'Financial forecasting', 'Driver-based modelling'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'model-three-statement-linkage',
    categoryId: 'finance-accounting',
    topicId: 'financial-modelling-valuation',
    level: 'intermediate',
    title: 'Three-Statement Model Linkage',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Explain and diagram how the three financial statements connect.',
    scenario:
      'A finance graduate is asked in an interview: "Walk me through how the three financial statements link together. If revenue increases by R1M, what happens on each statement?" She freezes. Do not be her.',
    brief:
      'Explain the linkages between the income statement, balance sheet, and cash flow statement. Use a concrete example (R1M revenue increase) to trace the impact through all three statements.',
    deliverables: [
      'A diagram showing the key linkages between the three statements (which line items feed where)',
      'A walkthrough of the R1M revenue increase: impact on IS → BS → CFS, assuming 30% tax and 60-day debtors',
      'Three common modelling errors that break the linkage (e.g., depreciation mismatch) and how to prevent each',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Revenue on the IS increases net income, which flows to retained earnings on the BS. But if the sale is on credit, cash does not increase until the debtor pays. The CFS bridges this gap. Show the full chain.',
    rubric: [
      { key: 'diagram', label: 'Linkage Diagram', description: 'Is the diagram accurate and showing the key connections?', weight: 25 },
      { key: 'walkthrough', label: 'Revenue Walkthrough', description: 'Is the R1M revenue traced correctly through all three statements?', weight: 40 },
      { key: 'errors', label: 'Modelling Errors', description: 'Are the 3 common errors realistic and the prevention advice practical?', weight: 35 },
    ],
    skillsProven: ['Three-statement models', 'Financial statement linkages', 'Financial modelling', 'Accounting logic'],
    relatedRoadmapIds: ['junior-accountant'],
  },
  {
    id: 'model-dcf-valuation',
    categoryId: 'finance-accounting',
    topicId: 'financial-modelling-valuation',
    level: 'advanced',
    title: 'DCF Valuation of a Small Business',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Value a fictional SA business using a discounted cash flow model.',
    scenario:
      'The owner of a successful Johannesburg-based logistics company (R40M annual revenue, R6M net profit) wants to sell and retire. A potential buyer asks: "What is this business worth?" A broker has quoted R30M. The buyer wants an independent valuation.',
    brief:
      'Build a DCF valuation model. Project free cash flows for 5 years, calculate a terminal value, and discount everything back to arrive at an enterprise value. Then bridge to equity value.',
    deliverables: [
      'A 5-year free cash flow projection with revenue growth, margins, capex, and working capital assumptions',
      'The terminal value calculation using the perpetuity growth method (with a justified growth rate)',
      'The WACC calculation with each component explained (cost of equity, cost of debt, capital structure)',
      'The enterprise value, net debt adjustment, and final equity value with a comparison to the R30M asking price',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A DCF is only as good as its assumptions. State every assumption explicitly. Terminal value typically represents 60-80% of total value — if yours does not, check your growth rate and discount rate.',
    rubric: [
      { key: 'projections', label: 'Cash Flow Projections', description: 'Are the 5-year projections realistic with defensible assumptions?', weight: 25 },
      { key: 'terminal', label: 'Terminal Value', description: 'Is the terminal value correctly calculated with a reasonable growth rate?', weight: 25 },
      { key: 'wacc', label: 'WACC Calculation', description: 'Is the WACC correctly computed with appropriate inputs for an SA SME?', weight: 25 },
      { key: 'conclusion', label: 'Valuation Conclusion', description: 'Is the final equity value reasonable and well-compared to the asking price?', weight: 25 },
    ],
    skillsProven: ['DCF valuation', 'WACC', 'Terminal value', 'Business valuation'],
    relatedRoadmapIds: ['junior-accountant'],
  },
];
