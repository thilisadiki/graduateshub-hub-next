import type { PortfolioTask } from '@/types';

export const dataAnalysisTasks: PortfolioTask[] = [
  {
    id: 'data-cleaning-messy-csv',
    categoryId: 'data',
    topicId: 'data-cleaning',
    level: 'beginner',
    title: 'Clean a Messy CSV and Write an Insights Memo',
    difficulty: 'Beginner',
    estimatedHours: '2 hours',
    tagline: 'Turn a realistic messy dataset into three insights a manager can act on.',
    scenario:
      'A retailer has exported 12 months of sales data to a CSV. The file has the usual real-world problems: inconsistent date formats, a few negative prices (returns), product names in different capitalisation, and some duplicate rows from a failed export retry.',
    brief:
      'You do not need the real file. Describe the cleaning steps you would take (in order, and why) and then write an insights memo as if you had already cleaned it and explored the data.',
    deliverables: [
      'A numbered list of cleaning steps with a one-sentence justification for each',
      'A short memo (under 300 words) with exactly 3 insights, each backed by a plausible number',
      'One question the data cannot answer on its own, and what you would need to go further',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Insights should surprise or inform a retail manager. "Sales went up in December" is not an insight.',
    rubric: [
      { key: 'cleaning', label: 'Cleaning Rigour', description: 'Are the cleaning steps correct, in a sensible order, and justified?', weight: 30 },
      { key: 'insights', label: 'Insight Quality', description: 'Are the three insights non-obvious, specific, and actionable?', weight: 35 },
      { key: 'numeracy', label: 'Numerical Plausibility', description: 'Do the numbers cited pass a sanity check?', weight: 15 },
      { key: 'limits', label: 'Awareness of Limits', description: 'Does the candidate know what the data cannot tell them?', weight: 20 },
    ],
    skillsProven: ['Data cleaning', 'Exploratory data analysis', 'Business communication', 'Analytical thinking'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'one-chart-dashboard',
    categoryId: 'data',
    topicId: 'data-visualisation',
    level: 'intermediate',
    title: 'The One-Chart Dashboard',
    difficulty: 'Intermediate',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design the single chart you would put on a CEO\'s weekly email.',
    scenario:
      'A food delivery startup\'s CEO gets a Monday morning email with the company\'s key metric. The data team has been arguing about what that metric and chart should be. Your job is to settle it.',
    brief:
      'Choose the single most useful chart for this role and weekly cadence. Defend the choice. You cannot add a "second chart for context" and call it one chart.',
    deliverables: [
      'The chart type and exact metric (for example: "Weekly active restaurants, line chart, last 12 weeks")',
      'Three decisions you made (axis choice, what to exclude, comparison baseline) and why',
      'The one thing you would say out loud when showing this chart to the CEO',
      'One alternative you considered and rejected, with your reasoning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Sketches are welcome as Markdown descriptions or links to an external image. The reasoning matters more than the visual.',
    rubric: [
      { key: 'choice', label: 'Metric Choice', description: 'Is the chosen metric the right one for a CEO\'s weekly view?', weight: 35 },
      { key: 'design', label: 'Chart Design', description: 'Are the design decisions (baseline, scale, exclusions) defensible?', weight: 30 },
      { key: 'narrative', label: 'Narrative', description: 'Does the one-line summary genuinely help the CEO act?', weight: 20 },
      { key: 'tradeoff', label: 'Trade-off Thinking', description: 'Is the rejected alternative real, and is the rejection well reasoned?', weight: 15 },
    ],
    skillsProven: ['Data visualisation', 'Metric selection', 'Executive communication', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'data-cleaning-healthcare-imputation',
    categoryId: 'data',
    topicId: 'data-cleaning',
    level: 'intermediate',
    title: 'Handling Missing Data in a Healthcare Dataset',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Decide which imputation strategy to use for each column and defend every choice.',
    scenario:
      'A hospital exported 18 months of patient admission records. The dataset has missing values scattered across columns like Age (3%), Blood Pressure (12%), Diagnosis Code (8%), and Admission Date (0.5%). Each column demands a different imputation strategy because the data is missing for different reasons.',
    brief:
      'You do not have the real file. Describe the imputation strategy you would use for each column type, justify why, and explain the risks of getting it wrong in a healthcare context.',
    deliverables: [
      'A table listing each column, its missing rate, your chosen strategy (mean, mode, forward-fill, drop, flag, or model-based), and a one-sentence justification',
      'An explanation of the difference between MCAR, MAR, and MNAR and which category each column likely falls into',
      'One risk specific to healthcare data where a bad imputation could lead to a dangerous clinical decision',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not default to "drop all rows with nulls". In healthcare, every row is a patient. Show that you understand the cost of discarding data versus the cost of inventing it.',
    rubric: [
      { key: 'strategy', label: 'Strategy Selection', description: 'Is the imputation strategy appropriate for each column type and missingness pattern?', weight: 35 },
      { key: 'theory', label: 'Missing Data Theory', description: 'Does the candidate correctly distinguish MCAR, MAR, and MNAR?', weight: 30 },
      { key: 'risk', label: 'Domain Awareness', description: 'Is the healthcare-specific risk credible and well-articulated?', weight: 20 },
      { key: 'clarity', label: 'Clarity', description: 'Is the submission structured, jargon-free where possible, and defensible?', weight: 15 },
    ],
    skillsProven: ['Data imputation', 'Missing data theory', 'Healthcare analytics', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'data-cleaning-deduplication-at-scale',
    categoryId: 'data',
    topicId: 'data-cleaning',
    level: 'advanced',
    title: 'Deduplication at Scale',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a fuzzy-matching deduplication pipeline for a CRM with 500K records.',
    scenario:
      'A sales team has been entering customer data manually for 5 years. The CRM now has 500,000 contact records, but an estimated 15% are duplicates caused by typos, abbreviations ("Pty Ltd" vs "Proprietary Limited"), merged company names, and inconsistent phone formats.',
    brief:
      'Design a deduplication pipeline. You must choose blocking/indexing strategies to avoid comparing every pair (O(n²)), select similarity metrics (Levenshtein, Jaro-Winkler, phonetic), and define merge rules for when two records are "probably the same".',
    deliverables: [
      'A pipeline diagram showing the stages: standardisation → blocking → comparison → classification → merging',
      'Your blocking strategy and why it reduces comparisons from 125 billion to a manageable number',
      'The similarity metrics you would use for name, email, phone, and address fields, with thresholds',
      'A merge policy: which record becomes the "golden record" and how conflicting field values are resolved',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a systems-thinking task. You do not need to write production code, but your pipeline must be specific enough that a developer could implement it.',
    rubric: [
      { key: 'pipeline', label: 'Pipeline Design', description: 'Are the stages logically ordered and well-defined?', weight: 25 },
      { key: 'blocking', label: 'Blocking Strategy', description: 'Does the blocking approach credibly reduce the comparison space?', weight: 25 },
      { key: 'matching', label: 'Similarity Metrics', description: 'Are the chosen metrics appropriate for each field type?', weight: 25 },
      { key: 'merging', label: 'Merge Policy', description: 'Is the golden record strategy defensible and conflict-aware?', weight: 25 },
    ],
    skillsProven: ['Record linkage', 'Fuzzy matching', 'Data quality at scale', 'Pipeline design'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'data-viz-choose-the-right-chart',
    categoryId: 'data',
    topicId: 'data-visualisation',
    level: 'beginner',
    title: 'Choose the Right Chart',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Given 5 different datasets, pick the correct chart type and explain why the alternatives are wrong.',
    scenario:
      'A junior analyst keeps defaulting to bar charts for everything. Their manager asks them to prove they understand when to use lines, bars, scatter plots, pie charts, and histograms by completing a short exercise.',
    brief:
      'For each of the 5 datasets described below, choose the best chart type and write one sentence explaining why each of the other common chart types would be a worse choice.',
    deliverables: [
      'Dataset 1: Monthly revenue over 24 months — your chart choice and reasoning',
      'Dataset 2: Market share of 5 competitors — your chart choice and reasoning',
      'Dataset 3: Correlation between ad spend and conversions — your chart choice and reasoning',
      'Dataset 4: Distribution of employee salaries — your chart choice and reasoning',
      'Dataset 5: Sales by region (10 regions, single quarter) — your chart choice and reasoning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'For each dataset, name the chart type first, then explain why it is better than at least 2 alternatives. "It looks nice" is not a reason.',
    rubric: [
      { key: 'selection', label: 'Chart Selection', description: 'Are all 5 chart types correctly chosen for the data type?', weight: 40 },
      { key: 'reasoning', label: 'Reasoning Quality', description: 'Are the rejections of alternatives specific and data-literate?', weight: 35 },
      { key: 'communication', label: 'Communication', description: 'Is the reasoning clear enough for a non-technical stakeholder?', weight: 25 },
    ],
    skillsProven: ['Data visualisation', 'Chart selection', 'Analytical reasoning', 'Communication'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'data-viz-executive-dashboard',
    categoryId: 'data',
    topicId: 'data-visualisation',
    level: 'advanced',
    title: 'Build a Dashboard Narrative',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a 4-chart executive dashboard where every chart answers a specific stakeholder question.',
    scenario:
      'A logistics company moves 50,000 parcels per day across South Africa. The COO wants a single dashboard she checks every Monday morning. She cares about: delivery speed, cost per parcel, regional bottlenecks, and customer complaints. Your job is to design the dashboard.',
    brief:
      'Design a 4-chart executive dashboard. Each chart must answer one of the COO\'s four questions. You must justify every design decision: chart type, time range, comparison baseline, colour coding, and what you deliberately excluded.',
    deliverables: [
      'A wireframe or detailed description of the 4-chart layout with the information hierarchy',
      'For each chart: the exact metric, chart type, time range, and comparison baseline',
      'Three deliberate design decisions (what you excluded, simplified, or highlighted) and why',
      'One alert or threshold rule you would add to make the dashboard proactive rather than reactive',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good dashboard is not 4 random charts. It is a story that flows top-left to bottom-right. Show that your layout has a reading order.',
    rubric: [
      { key: 'metrics', label: 'Metric Selection', description: 'Does each chart directly answer one of the four stakeholder questions?', weight: 30 },
      { key: 'design', label: 'Dashboard Design', description: 'Is the layout logical with clear information hierarchy and reading order?', weight: 25 },
      { key: 'decisions', label: 'Design Decisions', description: 'Are the exclusions and simplifications well-reasoned?', weight: 25 },
      { key: 'proactive', label: 'Proactive Alerting', description: 'Is the alert rule practical and tied to a meaningful threshold?', weight: 20 },
    ],
    skillsProven: ['Dashboard design', 'Executive communication', 'Information hierarchy', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 3: SQL Querying & Analysis ---
  {
    id: 'sql-basic-aggregation',
    categoryId: 'data',
    topicId: 'sql-querying',
    level: 'beginner',
    title: 'Write Basic Aggregation Queries',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'GROUP BY, HAVING, and ORDER BY on a sales table.',
    scenario:
      'An online retailer has a `sales` table with columns: `order_id`, `product_category`, `sale_amount`, `sale_date`, and `region`. The marketing team wants three quick answers before their Monday meeting.',
    brief:
      'Write three SQL queries against the sales table. You do not need a live database — write the SQL in code blocks and explain what each query returns.',
    deliverables: [
      'Query 1: Total revenue by product category, sorted highest to lowest',
      'Query 2: All regions where total revenue exceeds R500,000, using HAVING',
      'Query 3: The top 5 highest-revenue days in the last 90 days',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Write standard SQL (PostgreSQL or MySQL syntax). Include column aliases for readability.',
    rubric: [
      { key: 'syntax', label: 'SQL Syntax', description: 'Are the queries syntactically correct and executable?', weight: 35 },
      { key: 'logic', label: 'Query Logic', description: 'Do the queries produce the correct results for the stated questions?', weight: 35 },
      { key: 'readability', label: 'Readability', description: 'Are aliases, formatting, and comments used to make the SQL clear?', weight: 30 },
    ],
    skillsProven: ['SQL', 'GROUP BY', 'HAVING', 'Data aggregation'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'sql-window-functions',
    categoryId: 'data',
    topicId: 'sql-querying',
    level: 'intermediate',
    title: 'Window Functions for Ranking & Trends',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'ROW_NUMBER, LAG, and running totals on a time-series dataset.',
    scenario:
      'A SaaS company tracks monthly recurring revenue (MRR) per customer. The finance team wants to rank customers, calculate month-over-month growth per customer, and see a running total of total MRR.',
    brief:
      'Write three SQL queries using window functions. Assume a table `monthly_mrr` with columns: `customer_id`, `month`, `mrr_amount`.',
    deliverables: [
      'Query 1: Rank customers by their latest month MRR using ROW_NUMBER or RANK, partitioned by month',
      'Query 2: Calculate month-over-month MRR change per customer using LAG',
      'Query 3: A running total of company-wide MRR ordered by month',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Explain the difference between ROW_NUMBER, RANK, and DENSE_RANK in one sentence each.',
    rubric: [
      { key: 'window', label: 'Window Function Usage', description: 'Are OVER(), PARTITION BY, and ORDER BY used correctly?', weight: 40 },
      { key: 'lag', label: 'LAG / Running Total', description: 'Are LAG and SUM OVER correctly applied for trend analysis?', weight: 35 },
      { key: 'explanation', label: 'Conceptual Understanding', description: 'Does the candidate understand the ranking function differences?', weight: 25 },
    ],
    skillsProven: ['Window functions', 'Time-series SQL', 'Analytical queries', 'MRR analysis'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'sql-optimize-slow-query',
    categoryId: 'data',
    topicId: 'sql-querying',
    level: 'advanced',
    title: 'Optimize a Slow Query on a 50M-Row Table',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Rewrite a query, add indexes, and explain the EXPLAIN plan.',
    scenario:
      'A 50-million-row `transactions` table powers a financial dashboard. A query that joins `transactions` with `accounts` and filters by date range is taking 45 seconds. The DBA has asked you to fix it.',
    brief:
      'You are given the slow query and the current table schema (no indexes beyond the primary key). Rewrite the query for performance, propose the indexes you would add, and walk through what an EXPLAIN ANALYZE output would look like before and after your changes.',
    deliverables: [
      'The original slow query and your rewritten version with an explanation of each change',
      'The indexes you would create and why each one helps this specific query',
      'A walkthrough of a hypothetical EXPLAIN plan: what "Seq Scan" means vs "Index Scan" and how you would read the cost estimates',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume PostgreSQL. Focus on covering indexes, composite index column order, and the impact of WHERE clause selectivity.',
    rubric: [
      { key: 'rewrite', label: 'Query Rewrite', description: 'Does the rewritten query avoid unnecessary work (subqueries, functions on indexed columns)?', weight: 35 },
      { key: 'indexes', label: 'Index Strategy', description: 'Are the proposed indexes well-chosen with correct column order?', weight: 35 },
      { key: 'explain', label: 'EXPLAIN Literacy', description: 'Can the candidate read and interpret a query execution plan?', weight: 30 },
    ],
    skillsProven: ['Query optimisation', 'Database indexing', 'EXPLAIN plans', 'PostgreSQL performance'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },

  // --- Topic 4: Statistical Thinking ---
  {
    id: 'stats-descriptive-memo',
    categoryId: 'data',
    topicId: 'statistical-thinking',
    level: 'beginner',
    title: 'Descriptive Statistics Memo',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Calculate and interpret mean, median, mode, and standard deviation for a salary dataset.',
    scenario:
      'An HR manager asks you to summarise the salary distribution for 200 employees. She does not want formulas — she wants to understand what the numbers mean for her hiring budget.',
    brief:
      'Invent a plausible salary dataset (you may describe it rather than list 200 rows). Calculate the four descriptive statistics, then write a short memo interpreting them for a non-technical HR manager.',
    deliverables: [
      'The four statistics (mean, median, mode, standard deviation) with your calculations shown',
      'A 150-word memo interpreting what these numbers tell the HR manager about salary distribution and equity',
      'One visualization you would recommend to accompany the memo and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'If the mean is much higher than the median, that tells a story. Make sure your memo tells it.',
    rubric: [
      { key: 'calculation', label: 'Calculation Accuracy', description: 'Are the four statistics correctly calculated and internally consistent?', weight: 30 },
      { key: 'interpretation', label: 'Interpretation', description: 'Does the memo explain what the numbers mean in business terms, not just math terms?', weight: 40 },
      { key: 'visualization', label: 'Visualization Choice', description: 'Is the recommended chart appropriate for showing distribution?', weight: 30 },
    ],
    skillsProven: ['Descriptive statistics', 'Business communication', 'Data interpretation', 'HR analytics'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'stats-ab-test-hypothesis',
    categoryId: 'data',
    topicId: 'statistical-thinking',
    level: 'intermediate',
    title: 'Hypothesis Testing (A/B Test)',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Determine if a website change actually improved conversion, or if it was just noise.',
    scenario:
      'An e-commerce site ran an A/B test on their checkout button colour. Control (blue) had 1,200 conversions out of 15,000 visitors. Variant (green) had 1,350 conversions out of 15,000 visitors. The product manager is celebrating, but is the difference statistically significant?',
    brief:
      'Conduct a hypothesis test. State your null and alternative hypotheses, choose the right test, calculate the result, and write your recommendation to the product manager.',
    deliverables: [
      'The null and alternative hypotheses stated formally',
      'The statistical test you chose (z-test for proportions, chi-square, etc.) and why',
      'The test statistic, p-value, and your conclusion at α = 0.05',
      'A one-paragraph recommendation to the product manager in plain English',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Show your working. A p-value without the calculation behind it is not convincing. If you would not ship this change, say so and explain why.',
    rubric: [
      { key: 'hypotheses', label: 'Hypothesis Formulation', description: 'Are H₀ and H₁ correctly and formally stated?', weight: 25 },
      { key: 'test', label: 'Test Selection', description: 'Is the chosen statistical test appropriate for comparing two proportions?', weight: 25 },
      { key: 'calculation', label: 'Calculation', description: 'Is the p-value calculation correct and the conclusion consistent with it?', weight: 25 },
      { key: 'recommendation', label: 'Business Recommendation', description: 'Is the recommendation practical and honest about uncertainty?', weight: 25 },
    ],
    skillsProven: ['Hypothesis testing', 'A/B testing', 'Statistical significance', 'Business communication'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'stats-correlation-causation',
    categoryId: 'data',
    topicId: 'statistical-thinking',
    level: 'advanced',
    title: 'Correlation vs. Causation Case Study',
    difficulty: 'Advanced',
    estimatedHours: '3 to 4 hours',
    tagline: 'Tear apart a misleading business report that confuses correlation with causation.',
    scenario:
      'A consulting firm presents a report to a retail CEO claiming: "Stores that play jazz music see 23% higher average basket size. Recommendation: play jazz in all stores." The data is real, but the conclusion is dangerously wrong.',
    brief:
      'Write a critique of this report. Identify the logical flaw, propose at least 3 confounding variables, and design a study that could actually establish (or disprove) a causal relationship between music genre and basket size.',
    deliverables: [
      'A clear explanation of why correlation ≠ causation, using this specific example',
      'At least 3 plausible confounding variables that could explain the 23% difference',
      'A proposed experimental design (randomised controlled trial) that could test the causal claim',
      'One paragraph written as if you were advising the CEO directly',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The CEO is not a statistician. Your critique must be rigorous but your advice must be plain English.',
    rubric: [
      { key: 'flaw', label: 'Logical Flaw Identification', description: 'Is the correlation-causation fallacy clearly and correctly identified?', weight: 25 },
      { key: 'confounders', label: 'Confounding Variables', description: 'Are the proposed confounders plausible and specific to this scenario?', weight: 25 },
      { key: 'experiment', label: 'Experimental Design', description: 'Would the proposed RCT actually test the causal claim?', weight: 30 },
      { key: 'communication', label: 'Executive Communication', description: 'Is the CEO advice clear, respectful, and actionable?', weight: 20 },
    ],
    skillsProven: ['Causal inference', 'Experimental design', 'Critical thinking', 'Executive communication'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 5: Excel / Spreadsheet Modelling ---
  {
    id: 'excel-pivot-tables',
    categoryId: 'data',
    topicId: 'spreadsheet-modelling',
    level: 'beginner',
    title: 'Build a Sales Summary with Pivot Tables',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create pivot tables and basic formulas from raw transaction data.',
    scenario:
      'A small clothing retailer has 6 months of transaction data in a single spreadsheet tab. The store manager wants a summary showing total revenue by product category, average order value by month, and the top 10 best-selling items.',
    brief:
      'Describe (step by step) how you would build three pivot tables and one summary formula section from this raw data. You do not need the actual spreadsheet — describe the row/column/value configuration for each pivot table.',
    deliverables: [
      'Pivot Table 1 config: Total revenue by product category (rows, values, any filters)',
      'Pivot Table 2 config: Average order value by month',
      'Pivot Table 3 config: Top 10 items by quantity sold',
      'Three SUMIFS or AVERAGEIFS formulas you would place in a summary section, with the formula written out',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Write the pivot table configurations as if teaching a colleague. Include the exact field names you would drag into Rows, Columns, and Values.',
    rubric: [
      { key: 'pivots', label: 'Pivot Table Design', description: 'Are the three pivot tables correctly configured with appropriate aggregations?', weight: 40 },
      { key: 'formulas', label: 'Formula Accuracy', description: 'Are the SUMIFS/AVERAGEIFS formulas syntactically correct?', weight: 30 },
      { key: 'communication', label: 'Instructional Clarity', description: 'Could a spreadsheet beginner follow these instructions?', weight: 30 },
    ],
    skillsProven: ['Pivot tables', 'Excel formulas', 'Data summarisation', 'Spreadsheet design'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'excel-dynamic-pricing',
    categoryId: 'data',
    topicId: 'spreadsheet-modelling',
    level: 'intermediate',
    title: 'Dynamic Pricing Model',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a what-if model with data validation dropdowns and conditional formatting.',
    scenario:
      'A SaaS startup wants to model how changing their subscription price affects revenue. They currently have 5,000 customers at R199/month. They believe a 10% price increase will cause 3-8% churn, but are unsure.',
    brief:
      'Design a spreadsheet model (describe it in detail) that lets the CEO pick a price change percentage from a dropdown and instantly see projected revenue, churn impact, and break-even month.',
    deliverables: [
      'The model layout: which cells are inputs, which are calculations, and which are outputs',
      'The key formulas including the churn sensitivity calculation',
      'How you would use Data Validation dropdowns and Conditional Formatting to make it user-friendly',
      'A sensitivity table showing revenue at 5%, 10%, 15%, and 20% price increases with low/mid/high churn assumptions',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The CEO is the user. The model must be impossible to break by entering wrong values. Explain your defensive design choices.',
    rubric: [
      { key: 'model', label: 'Model Logic', description: 'Are the pricing, churn, and revenue formulas internally consistent?', weight: 35 },
      { key: 'usability', label: 'User Experience', description: 'Are dropdowns, formatting, and layout designed for a non-technical user?', weight: 30 },
      { key: 'sensitivity', label: 'Sensitivity Analysis', description: 'Does the sensitivity table cover a meaningful range of scenarios?', weight: 35 },
    ],
    skillsProven: ['Financial modelling', 'What-if analysis', 'Data validation', 'Spreadsheet UX'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'excel-monte-carlo',
    categoryId: 'data',
    topicId: 'spreadsheet-modelling',
    level: 'advanced',
    title: 'Monte Carlo Simulation in a Spreadsheet',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Simulate 1,000 outcomes for a product launch decision using RAND() and data tables.',
    scenario:
      'A startup is deciding whether to launch a new product. The fixed cost is R2M. Unit price, unit cost, and demand are all uncertain. The CEO wants to know: "What is the probability we lose money?"',
    brief:
      'Design a Monte Carlo simulation in a spreadsheet. Use RAND() to generate random draws from assumed distributions for price, cost, and demand. Run 1,000 iterations using a data table and calculate the probability of a loss.',
    deliverables: [
      'The model structure: input assumptions (distributions for price, cost, demand), the profit formula, and the simulation output area',
      'The exact formulas using RAND(), NORMINV (or equivalent) for generating random variables',
      'How you would use a one-variable Data Table to run 1,000 iterations',
      'The final output: probability of loss, expected profit, and a histogram description of the profit distribution',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is advanced spreadsheet work. Show that you understand why a single-point estimate is dangerous for a high-stakes decision.',
    rubric: [
      { key: 'simulation', label: 'Simulation Design', description: 'Is the Monte Carlo framework correctly structured with random inputs and deterministic calculations?', weight: 30 },
      { key: 'distributions', label: 'Distribution Choice', description: 'Are the chosen distributions reasonable for each uncertain variable?', weight: 25 },
      { key: 'execution', label: 'Data Table Technique', description: 'Is the Data Table approach correctly explained for generating 1,000 iterations?', weight: 25 },
      { key: 'interpretation', label: 'Decision Support', description: 'Does the output actually help the CEO make a go/no-go decision?', weight: 20 },
    ],
    skillsProven: ['Monte Carlo simulation', 'Risk analysis', 'Advanced Excel', 'Decision modelling'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 6: Python for Data Analysis ---
  {
    id: 'python-explore-dataset',
    categoryId: 'data',
    topicId: 'python-data-analysis',
    level: 'beginner',
    title: 'Explore a Dataset with pandas',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Load, inspect, filter, and summarise a CSV using pandas fundamentals.',
    scenario:
      'You have been given a CSV file of 10,000 e-commerce orders. Your manager wants a quick exploration before the team decides what analysis to pursue.',
    brief:
      'Write a Python script using pandas that loads the CSV, inspects its shape and data types, handles any obvious issues, and produces a summary. You do not need the actual file — write the code as if the CSV exists at `orders.csv`.',
    deliverables: [
      'The Python script covering: loading, `.info()`, `.describe()`, null checks, and at least 3 filtered views',
      'A markdown summary of what you found (as if reporting to your manager)',
      'One follow-up question your exploration raised that requires deeper analysis',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Write production-quality pandas code. Use method chaining where it improves readability. Comments should explain *why*, not *what*.',
    rubric: [
      { key: 'code', label: 'pandas Fundamentals', description: 'Are read_csv, info, describe, filtering, and groupby used correctly?', weight: 35 },
      { key: 'exploration', label: 'Exploration Quality', description: 'Do the filtered views reveal something interesting rather than being arbitrary?', weight: 30 },
      { key: 'communication', label: 'Summary Communication', description: 'Is the summary actionable and honest about what the data does and does not show?', weight: 35 },
    ],
    skillsProven: ['pandas', 'Exploratory data analysis', 'Python scripting', 'Data communication'],
    relatedRoadmapIds: ['data-analyst'],
  },
  {
    id: 'python-merge-reshape',
    categoryId: 'data',
    topicId: 'python-data-analysis',
    level: 'intermediate',
    title: 'Merge, Reshape, and Aggregate Multi-Source Data',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Combine 3 CSVs with different schemas into one clean analysis-ready DataFrame.',
    scenario:
      'A retail chain stores its data across three separate systems: `customers.csv` (customer demographics), `orders.csv` (order headers), and `order_items.csv` (line items with product and price). Your analyst needs a single, denormalized DataFrame to work from.',
    brief:
      'Write the pandas code to load, merge, reshape, and aggregate these three files into one clean DataFrame. Handle schema mismatches (different column names, date formats, missing keys).',
    deliverables: [
      'The complete Python script showing the merge strategy (inner, left, etc.) and join keys',
      'How you handled schema mismatches (column renames, type casting, date parsing)',
      'The final aggregated output: revenue per customer, with at least 2 derived columns',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Show that you understand the difference between inner, left, and outer joins. A wrong join type silently drops data.',
    rubric: [
      { key: 'merging', label: 'Merge Strategy', description: 'Are the join types and keys chosen correctly to avoid data loss?', weight: 35 },
      { key: 'cleaning', label: 'Schema Handling', description: 'Are column renames, type casts, and null handling done correctly?', weight: 30 },
      { key: 'aggregation', label: 'Aggregation Quality', description: 'Are the derived columns meaningful and the groupby operations correct?', weight: 35 },
    ],
    skillsProven: ['pandas merge', 'Data reshaping', 'Schema reconciliation', 'Data pipeline scripting'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'python-automate-report',
    categoryId: 'data',
    topicId: 'python-data-analysis',
    level: 'advanced',
    title: 'Automate a Weekly Report with Python',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a script that ingests data, generates statistics, and outputs a formatted HTML report.',
    scenario:
      'Every Monday, a data analyst manually opens 3 CSVs, calculates KPIs, pastes them into an email template, and sends it to 12 stakeholders. It takes 90 minutes. You need to automate this.',
    brief:
      'Write a Python script that reads the data, calculates the KPIs, generates an HTML report with inline CSS (suitable for email), and saves it to a file. The script should be idempotent and handle missing files gracefully.',
    deliverables: [
      'The complete Python script with clear function separation (load, calculate, render, save)',
      'The HTML template showing at least 3 KPIs with conditional formatting (green/red based on targets)',
      'Error handling for missing files, empty datasets, and data quality issues',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a software engineering task disguised as a data task. Clean function boundaries, error handling, and logging matter as much as the calculations.',
    rubric: [
      { key: 'architecture', label: 'Code Architecture', description: 'Is the script cleanly separated into load, calculate, render, and save functions?', weight: 30 },
      { key: 'output', label: 'Report Quality', description: 'Is the HTML output professional and suitable for email delivery?', weight: 30 },
      { key: 'robustness', label: 'Error Handling', description: 'Does the script handle missing files and bad data without crashing?', weight: 25 },
      { key: 'automation', label: 'Automation Readiness', description: 'Could this script be scheduled with cron/Task Scheduler without modification?', weight: 15 },
    ],
    skillsProven: ['Python automation', 'HTML templating', 'Error handling', 'Report generation'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },

  // --- Topic 7: Business Metrics & KPIs ---
  {
    id: 'kpi-startup-definition',
    categoryId: 'data',
    topicId: 'business-metrics-kpis',
    level: 'beginner',
    title: 'Define KPIs for a Startup',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Identify the 5 most important metrics for a food delivery startup.',
    scenario:
      'A food delivery startup in Johannesburg has just closed its seed round. The CEO asks you: "What 5 numbers should I look at every morning?" They currently track nothing.',
    brief:
      'Define the 5 most important KPIs for this startup. For each, explain what it measures, why it matters at this stage, how to calculate it, and what a healthy target looks like.',
    deliverables: [
      'A table of 5 KPIs with columns: Name, Formula, Why It Matters, Target Range',
      'A one-paragraph explanation of why you chose these 5 over other candidates you considered',
      'One "vanity metric" the CEO might be tempted to track and why it would be misleading',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The startup is pre-product-market-fit. Revenue is important but retention and unit economics matter more at this stage.',
    rubric: [
      { key: 'selection', label: 'KPI Selection', description: 'Are the 5 KPIs appropriate for an early-stage food delivery startup?', weight: 35 },
      { key: 'definition', label: 'KPI Definitions', description: 'Are the formulas precise and the targets realistic?', weight: 30 },
      { key: 'judgment', label: 'Business Judgment', description: 'Does the vanity metric choice show mature analytical thinking?', weight: 35 },
    ],
    skillsProven: ['KPI definition', 'Startup metrics', 'Business acumen', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'kpi-diagnose-metric-drop',
    categoryId: 'data',
    topicId: 'business-metrics-kpis',
    level: 'intermediate',
    title: 'Diagnose a Metric Drop',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Revenue dropped 15% month-over-month. Write a structured root-cause analysis.',
    scenario:
      'An online subscription box company saw revenue drop from R3.2M in March to R2.72M in April. The CEO is panicking. Your job is to calmly and systematically figure out why.',
    brief:
      'Write a structured root-cause analysis. Decompose revenue into its component parts, identify which lever moved, propose hypotheses, and describe what data you would pull to confirm each one.',
    deliverables: [
      'A revenue decomposition tree: Revenue = Subscribers × ARPU, broken down further',
      'At least 4 hypotheses for the drop, ordered by likelihood',
      'For each hypothesis: the data you would pull and the query or analysis that would confirm or reject it',
      'A one-paragraph summary you would present to the CEO before the deep-dive is complete',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not jump to a conclusion. The value of this task is the systematic decomposition, not the answer.',
    rubric: [
      { key: 'decomposition', label: 'Revenue Decomposition', description: 'Is the metric tree logically sound and mutually exclusive?', weight: 30 },
      { key: 'hypotheses', label: 'Hypothesis Quality', description: 'Are the hypotheses specific, testable, and ordered by likelihood?', weight: 30 },
      { key: 'investigation', label: 'Investigation Plan', description: 'Would the proposed queries actually confirm or reject each hypothesis?', weight: 25 },
      { key: 'communication', label: 'CEO Communication', description: 'Is the interim summary calm, honest, and actionable?', weight: 15 },
    ],
    skillsProven: ['Root-cause analysis', 'Metric decomposition', 'Hypothesis-driven analysis', 'Executive communication'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'kpi-north-star-framework',
    categoryId: 'data',
    topicId: 'business-metrics-kpis',
    level: 'advanced',
    title: 'Design a Metrics Framework (North Star)',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a full metrics tree from a North Star metric down to team-level leading indicators.',
    scenario:
      'A fintech company processing R500M/month in transactions wants to align all 8 teams around a single North Star metric. Currently, each team tracks different things and nobody agrees on what "growth" means.',
    brief:
      'Design a complete metrics framework. Choose the North Star metric, decompose it into team-level input metrics, define leading vs lagging indicators, and explain how each team\'s weekly actions connect to the company goal.',
    deliverables: [
      'The North Star metric with a clear definition and why you chose it over alternatives',
      'A metrics tree diagram showing how the North Star decomposes into 3-4 team-level input metrics',
      'For each team metric: whether it is leading or lagging, the responsible team, and the cadence of review',
      'One example of how a team could game their metric and how the framework prevents it',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good North Star is not revenue. It is the value-creating action that drives revenue. Think carefully about what action, done repeatedly, creates compounding value for this fintech.',
    rubric: [
      { key: 'north-star', label: 'North Star Selection', description: 'Is the chosen metric a genuine value-creating action, not just a revenue proxy?', weight: 25 },
      { key: 'decomposition', label: 'Metrics Tree', description: 'Does the tree logically connect team actions to the North Star?', weight: 30 },
      { key: 'leading-lagging', label: 'Leading vs Lagging', description: 'Are leading and lagging indicators correctly classified?', weight: 25 },
      { key: 'gaming', label: 'Anti-Gaming Design', description: 'Is the gaming example realistic and the mitigation thoughtful?', weight: 20 },
    ],
    skillsProven: ['North Star metrics', 'Metrics frameworks', 'Organisational alignment', 'Strategic thinking'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 8: Data Storytelling & Presentation ---
  {
    id: 'storytelling-table-to-narrative',
    categoryId: 'data',
    topicId: 'data-storytelling',
    level: 'beginner',
    title: 'Turn a Table into a Story',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Transform a raw data table into a 3-paragraph executive summary.',
    scenario:
      'Your manager drops a table on your desk showing quarterly sales by region for the last 2 years. She says: "I need to present this to the board in 30 minutes. Give me something I can read aloud."',
    brief:
      'Invent a plausible 8-quarter × 4-region sales table. Then write a 3-paragraph executive summary that tells a story: what happened, why it matters, and what the board should do about it.',
    deliverables: [
      'The raw data table (8 quarters × 4 regions)',
      'A 3-paragraph executive summary: (1) the headline insight, (2) the supporting evidence, (3) the recommended action',
      'One number you would highlight in bold if this were a slide, and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The board does not want to read a table. They want to hear a story. Your summary must be speakable — read it aloud before submitting.',
    rubric: [
      { key: 'data', label: 'Data Plausibility', description: 'Is the invented data internally consistent and realistic?', weight: 20 },
      { key: 'narrative', label: 'Narrative Quality', description: 'Does the summary tell a story with a clear beginning, middle, and end?', weight: 40 },
      { key: 'action', label: 'Actionable Recommendation', description: 'Is the recommended action specific and tied to the data?', weight: 25 },
      { key: 'highlight', label: 'Key Number Selection', description: 'Is the highlighted number the right one to anchor the story?', weight: 15 },
    ],
    skillsProven: ['Data storytelling', 'Executive communication', 'Business writing', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'storytelling-slide-deck',
    categoryId: 'data',
    topicId: 'data-storytelling',
    level: 'intermediate',
    title: 'Build a Slide Deck from Data',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a 5-slide presentation for a non-technical audience from a dataset.',
    scenario:
      'A non-profit helping unemployed graduates wants to present their impact data to corporate sponsors. They have 3 years of data on graduates placed, salaries achieved, and retention rates. The audience is CEOs who will decide whether to continue funding.',
    brief:
      'Design a 5-slide presentation outline. For each slide, specify the headline, the visual (chart or key number), and the talking point. You do not need to build the slides — a detailed outline in Markdown is sufficient.',
    deliverables: [
      'Slide 1: The opening hook (what grabs the sponsor\'s attention)',
      'Slides 2-4: The evidence (each slide makes one point with one visual)',
      'Slide 5: The ask (what the non-profit wants and why the data supports it)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Each slide should have exactly one point. If you need a second chart on a slide, you have two points — split it.',
    rubric: [
      { key: 'structure', label: 'Narrative Structure', description: 'Do the 5 slides tell a coherent story with a logical arc?', weight: 30 },
      { key: 'visuals', label: 'Visual Choices', description: 'Is each chart type appropriate for the data and audience?', weight: 25 },
      { key: 'audience', label: 'Audience Awareness', description: 'Is the language and framing appropriate for corporate CEOs?', weight: 25 },
      { key: 'ask', label: 'The Ask', description: 'Is the final ask specific, justified by the data, and compelling?', weight: 20 },
    ],
    skillsProven: ['Presentation design', 'Data storytelling', 'Stakeholder communication', 'Visual design'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'storytelling-conflicting-data',
    categoryId: 'data',
    topicId: 'data-storytelling',
    level: 'advanced',
    title: 'Present Conflicting Data to Stakeholders',
    difficulty: 'Advanced',
    estimatedHours: '3 to 4 hours',
    tagline: 'Two datasets tell opposite stories. Write the brief that acknowledges both.',
    scenario:
      'The marketing team says their new campaign increased website traffic by 40%. The sales team says revenue dropped 10% during the same period. Both are right. The CMO and CRO are in a heated argument, and the CEO has asked you to write a neutral brief that makes sense of both numbers.',
    brief:
      'Write a stakeholder brief that presents both datasets honestly, explains why they can both be true simultaneously, and recommends a path forward that neither team will reject.',
    deliverables: [
      'A summary of both datasets with the key numbers, presented without bias',
      'An explanation of how traffic can rise while revenue falls (at least 3 plausible mechanisms)',
      'A recommended next step that both teams can agree on, framed as a shared investigation rather than a blame assignment',
      'One metric you would propose tracking going forward to prevent this confusion in the future',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a political task as much as an analytical one. The brief must be diplomatically written — neither team should feel attacked.',
    rubric: [
      { key: 'neutrality', label: 'Neutrality', description: 'Is the brief genuinely unbiased between marketing and sales?', weight: 25 },
      { key: 'mechanisms', label: 'Explanatory Mechanisms', description: 'Are the proposed explanations analytically sound and specific?', weight: 30 },
      { key: 'recommendation', label: 'Path Forward', description: 'Is the recommendation constructive and politically viable?', weight: 25 },
      { key: 'prevention', label: 'Future Prevention', description: 'Would the proposed metric actually prevent this confusion?', weight: 20 },
    ],
    skillsProven: ['Stakeholder management', 'Conflicting data analysis', 'Diplomatic communication', 'Analytical judgment'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },

  // --- Topic 9: ETL & Data Pipelines ---
  {
    id: 'etl-simple-flow',
    categoryId: 'data',
    topicId: 'etl-data-pipelines',
    level: 'beginner',
    title: 'Design a Simple ETL Flow',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Document the Extract, Transform, Load steps for moving CSV data into a database.',
    scenario:
      'A small business receives a daily CSV export from their point-of-sale system. They want to load this data into a PostgreSQL database so they can query it with SQL instead of opening Excel every morning.',
    brief:
      'Document the complete ETL flow. You do not need to write production code — describe each step clearly enough that a junior developer could implement it.',
    deliverables: [
      'Extract: Where the CSV comes from, how it is retrieved, and what validation you do before processing',
      'Transform: The specific cleaning and transformation steps (date parsing, null handling, type casting)',
      'Load: The database table schema and the insertion strategy (truncate-and-reload vs upsert)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Think about what happens when the CSV is missing, empty, or has a new column that was not there yesterday.',
    rubric: [
      { key: 'extract', label: 'Extract Step', description: 'Is the source validation thorough (file exists, not empty, expected columns)?', weight: 30 },
      { key: 'transform', label: 'Transform Step', description: 'Are the cleaning steps specific and appropriate for POS data?', weight: 35 },
      { key: 'load', label: 'Load Strategy', description: 'Is the insertion strategy chosen with awareness of idempotency and duplicates?', weight: 35 },
    ],
    skillsProven: ['ETL design', 'Data validation', 'Database loading', 'Pipeline documentation'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'etl-schema-evolution',
    categoryId: 'data',
    topicId: 'etl-data-pipelines',
    level: 'intermediate',
    title: 'Handle Schema Changes Gracefully',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a pipeline that does not break when a source API adds or removes a field.',
    scenario:
      'Your company ingests data from a third-party API every hour. Last week, the API provider added 3 new fields and renamed one existing field without warning. Your pipeline crashed, and the data warehouse was missing 6 hours of data before anyone noticed.',
    brief:
      'Redesign the pipeline to handle schema evolution gracefully. The pipeline must detect changes, adapt where possible, alert on breaking changes, and never silently drop data.',
    deliverables: [
      'A schema detection strategy: how the pipeline discovers new, renamed, or removed fields',
      'Handling rules for each type of change: new fields (add column), removed fields (nullable/default), renamed fields (mapping table)',
      'An alerting mechanism that notifies the team of breaking changes without stopping the pipeline',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The worst outcome is silent data loss. The second worst is a pipeline that crashes at 2am and nobody knows until Monday. Design for both.',
    rubric: [
      { key: 'detection', label: 'Schema Detection', description: 'Is the schema comparison mechanism robust (hash, diff, versioning)?', weight: 35 },
      { key: 'adaptation', label: 'Adaptation Rules', description: 'Are the handling rules for each change type sensible and safe?', weight: 35 },
      { key: 'alerting', label: 'Alerting & Recovery', description: 'Does the alerting strategy prevent both silent failures and unnecessary noise?', weight: 30 },
    ],
    skillsProven: ['Schema evolution', 'Pipeline resilience', 'Data engineering', 'Alerting design'],
    relatedRoadmapIds: ['data-engineer'],
  },
  {
    id: 'etl-streaming-pipeline',
    categoryId: 'data',
    topicId: 'etl-data-pipelines',
    level: 'advanced',
    title: 'Design a Real-Time Streaming Pipeline',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Architect a pipeline using Kafka/Spark Streaming for processing clickstream events.',
    scenario:
      'An e-commerce company wants real-time analytics on user behaviour. Currently, clickstream data is batch-loaded every 4 hours. Marketing wants to see what users are doing right now so they can trigger personalised push notifications within 60 seconds of a key event.',
    brief:
      'Design a real-time streaming pipeline. Choose the message broker (Kafka, Kinesis, Pub/Sub), the processing framework (Spark Streaming, Flink, or a simpler consumer), and the output sink (real-time dashboard, notification trigger, or both).',
    deliverables: [
      'An architecture diagram showing producers, broker, consumers, and output sinks',
      'Your technology choices with a defense of each (why Kafka over SQS, why Flink over Spark, etc.)',
      'How you handle late-arriving events, duplicate events, and consumer failures',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is a senior data engineering task. Focus on exactly-once vs at-least-once semantics and how your architecture handles each.',
    rubric: [
      { key: 'architecture', label: 'Architecture Design', description: 'Is the pipeline logically sound with clear data flow from source to sink?', weight: 30 },
      { key: 'technology', label: 'Technology Choices', description: 'Are the chosen tools appropriate and the trade-offs well-articulated?', weight: 30 },
      { key: 'reliability', label: 'Reliability Guarantees', description: 'Are late events, duplicates, and failures handled with explicit strategies?', weight: 40 },
    ],
    skillsProven: ['Streaming architecture', 'Kafka', 'Event processing', 'Real-time analytics'],
    relatedRoadmapIds: ['data-engineer'],
  },

  // --- Topic 10: Machine Learning Fundamentals ---
  {
    id: 'ml-choose-algorithm',
    categoryId: 'data',
    topicId: 'ml-fundamentals',
    level: 'beginner',
    title: 'Choose the Right ML Algorithm',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Given 5 business problems, pick the right algorithm and explain why.',
    scenario:
      'A data team lead interviews candidates by giving them 5 real business problems and asking which machine learning approach (classification, regression, clustering, etc.) fits each one. The goal is not to code — it is to think.',
    brief:
      'For each of the 5 problems below, identify the ML task type, suggest a specific algorithm, and explain why it is a better fit than the alternatives.',
    deliverables: [
      'Problem 1: Predict whether a loan application will default (yes/no) — your approach',
      'Problem 2: Estimate the sale price of a house — your approach',
      'Problem 3: Group customers into segments based on purchasing behaviour — your approach',
      'Problem 4: Detect fraudulent credit card transactions in real-time — your approach',
      'Problem 5: Recommend products to users based on their browsing history — your approach',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'For each problem, state: (1) the ML task type, (2) a specific algorithm, (3) why you chose it over one alternative. "Use deep learning" is not a valid answer without justification.',
    rubric: [
      { key: 'classification', label: 'Task Classification', description: 'Is each problem correctly classified as regression, classification, clustering, etc.?', weight: 35 },
      { key: 'algorithm', label: 'Algorithm Selection', description: 'Are the chosen algorithms appropriate and practically useful?', weight: 35 },
      { key: 'reasoning', label: 'Reasoning Quality', description: 'Are the trade-off explanations specific rather than generic?', weight: 30 },
    ],
    skillsProven: ['ML fundamentals', 'Algorithm selection', 'Problem framing', 'Analytical reasoning'],
    relatedRoadmapIds: ['data-analyst', 'data-scientist'],
  },
  {
    id: 'ml-churn-prediction',
    categoryId: 'data',
    topicId: 'ml-fundamentals',
    level: 'intermediate',
    title: 'Build and Evaluate a Predictive Model',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Train a model to predict customer churn and explain the confusion matrix.',
    scenario:
      'A subscription company has 50,000 customers. 8% churned last quarter. The CEO wants a model that predicts who will churn next quarter so the retention team can intervene.',
    brief:
      'Describe (or code) how you would build a churn prediction model. Focus on feature selection, model choice, evaluation, and the business implications of false positives vs false negatives.',
    deliverables: [
      'Feature selection: 5-7 features you would use and why each predicts churn',
      'Model choice: the algorithm you would use and why (logistic regression, random forest, XGBoost, etc.)',
      'Evaluation: explain precision, recall, and the confusion matrix in the context of churn prediction',
      'Business impact: should the model optimize for precision or recall, and what is the cost of getting it wrong?',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A model with 92% accuracy sounds great until you realise 92% of customers do not churn anyway. Show you understand class imbalance.',
    rubric: [
      { key: 'features', label: 'Feature Engineering', description: 'Are the chosen features plausible predictors of churn?', weight: 25 },
      { key: 'model', label: 'Model Selection', description: 'Is the algorithm choice justified for a binary classification with imbalanced classes?', weight: 25 },
      { key: 'evaluation', label: 'Evaluation Metrics', description: 'Are precision, recall, and the confusion matrix correctly explained in context?', weight: 25 },
      { key: 'business', label: 'Business Framing', description: 'Does the candidate understand the cost trade-off between false positives and false negatives?', weight: 25 },
    ],
    skillsProven: ['Predictive modelling', 'Classification', 'Model evaluation', 'Business analytics'],
    relatedRoadmapIds: ['data-analyst', 'data-scientist'],
  },
  {
    id: 'ml-bias-audit',
    categoryId: 'data',
    topicId: 'ml-fundamentals',
    level: 'advanced',
    title: 'Detect and Mitigate Model Bias',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Audit a hiring algorithm for demographic bias and propose mitigation strategies.',
    scenario:
      'A recruitment platform uses a machine learning model to score CVs and rank candidates. An internal audit reveals that the model consistently scores male candidates 12% higher than female candidates with identical qualifications. The board wants a full audit and remediation plan.',
    brief:
      'Conduct a bias audit of the hypothetical model. Identify how bias could have entered the system, propose detection methods, and design mitigation strategies that do not simply remove protected attributes.',
    deliverables: [
      'A taxonomy of how bias enters ML systems (training data, feature selection, label bias, feedback loops)',
      'Detection methods: statistical tests and metrics you would use to measure demographic parity and equal opportunity',
      'Mitigation strategies: at least 3 approaches (pre-processing, in-processing, post-processing) with trade-offs',
      'An ethical framework for deciding how much accuracy you are willing to sacrifice for fairness',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Simply removing the gender column does not fix bias — proxy features (name, school, hobbies) still leak. Show you understand this.',
    rubric: [
      { key: 'sources', label: 'Bias Sources', description: 'Does the candidate identify multiple realistic sources of bias beyond just training data?', weight: 25 },
      { key: 'detection', label: 'Detection Methods', description: 'Are the proposed fairness metrics appropriate and correctly defined?', weight: 25 },
      { key: 'mitigation', label: 'Mitigation Strategies', description: 'Are the mitigation approaches technically sound with honest trade-offs?', weight: 30 },
      { key: 'ethics', label: 'Ethical Reasoning', description: 'Does the candidate engage seriously with the accuracy-fairness trade-off?', weight: 20 },
    ],
    skillsProven: ['AI ethics', 'Bias detection', 'Fairness metrics', 'Responsible AI'],
    relatedRoadmapIds: ['data-scientist'],
  },

  // --- Topic 11: Dashboard Design & BI Tools ---
  {
    id: 'bi-dashboard-wireframe',
    categoryId: 'data',
    topicId: 'dashboard-design-bi',
    level: 'beginner',
    title: 'Design a Dashboard Wireframe',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Sketch a dashboard layout for a retail store manager with clear information hierarchy.',
    scenario:
      'A retail chain with 15 stores wants a dashboard for store managers. Each manager checks it once a day on a tablet. They care about: today\'s sales vs target, top-selling products, staff on shift, and any stock alerts.',
    brief:
      'Design a dashboard wireframe (described in Markdown or as a simple layout sketch). Focus on information hierarchy: what is biggest, what is smallest, what is always visible vs what requires a click.',
    deliverables: [
      'A wireframe description showing the layout grid (e.g., "top bar: today\'s revenue KPI card; left column: product sales table; right: staff roster")',
      'An explanation of your information hierarchy: what is most prominent and why',
      'One design choice you made to optimise for a tablet-first, glance-based use case',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This manager checks the dashboard standing in a stockroom. It must be readable at a glance from 2 feet away on a 10-inch screen.',
    rubric: [
      { key: 'layout', label: 'Layout Design', description: 'Is the layout logical with appropriate sizing for the most important information?', weight: 35 },
      { key: 'hierarchy', label: 'Information Hierarchy', description: 'Is the hierarchy well-justified and appropriate for a daily check-in?', weight: 35 },
      { key: 'context', label: 'Contextual Design', description: 'Does the design account for the tablet-first, standing-in-stockroom context?', weight: 30 },
    ],
    skillsProven: ['Dashboard design', 'Information hierarchy', 'UX thinking', 'Retail analytics'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'bi-filters-drilldowns',
    categoryId: 'data',
    topicId: 'dashboard-design-bi',
    level: 'intermediate',
    title: 'Build Filters and Drill-Downs',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design interactive dashboard filters that let users slice data by region, product, and time.',
    scenario:
      'A national sales dashboard currently shows a single view of total company revenue. The regional managers want to filter by their region, drill into product categories, and compare this quarter to last quarter. The current dashboard has no interactivity.',
    brief:
      'Design the filter architecture for an interactive BI dashboard. Specify which filters exist, how they interact (cascading vs independent), and what happens when a user applies multiple filters simultaneously.',
    deliverables: [
      'A list of all filters: Region (multi-select), Product Category (cascading), Date Range (picker), and Comparison Period (toggle)',
      'The filter interaction model: which filters are independent and which cascade (e.g., selecting a region narrows the product list)',
      'The default state: what the dashboard shows when no filters are applied',
      'One edge case: what happens when a filter combination returns zero results',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A dashboard with 10 filters and no guidance is unusable. Think about progressive disclosure — show the most-used filters first.',
    rubric: [
      { key: 'filters', label: 'Filter Design', description: 'Are the filter types appropriate for each data dimension?', weight: 30 },
      { key: 'interaction', label: 'Interaction Model', description: 'Is the cascading vs independent logic clearly defined and user-friendly?', weight: 35 },
      { key: 'defaults', label: 'Default State', description: 'Is the default dashboard view useful without any filter changes?', weight: 20 },
      { key: 'edge-cases', label: 'Edge Case Handling', description: 'Is the zero-results state handled gracefully?', weight: 15 },
    ],
    skillsProven: ['Dashboard interactivity', 'Filter design', 'BI tools', 'UX design'],
    relatedRoadmapIds: ['data-analyst', 'business-analyst'],
  },
  {
    id: 'bi-realtime-monitoring',
    categoryId: 'data',
    topicId: 'dashboard-design-bi',
    level: 'advanced',
    title: 'Real-Time Monitoring Dashboard',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a live operations dashboard with alert thresholds and anomaly detection.',
    scenario:
      'A logistics company operates 200 delivery vehicles across Gauteng. The operations centre needs a real-time dashboard showing vehicle locations, delivery progress, and automatic alerts when something goes wrong (late delivery, vehicle breakdown, route deviation).',
    brief:
      'Design a real-time monitoring dashboard for the operations centre. It will be displayed on a large wall-mounted screen and must be readable from 3 metres away. Focus on what triggers alerts, how alerts are escalated, and how the dashboard distinguishes "normal" from "needs attention".',
    deliverables: [
      'The dashboard layout for a wall-mounted 65-inch display: what is always visible vs what appears on alert',
      'At least 3 alert rules with thresholds (e.g., "delivery running >30 minutes late → amber alert")',
      'An escalation model: who gets notified at each severity level and via what channel (screen, SMS, call)',
      'How the dashboard detects anomalies: simple threshold rules vs statistical anomaly detection',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A dashboard that is always red is as useless as one that is always green. Design your thresholds so the normal state is visually calm.',
    rubric: [
      { key: 'layout', label: 'Wall Display Design', description: 'Is the layout optimised for a large screen viewed from 3 metres?', weight: 25 },
      { key: 'alerts', label: 'Alert Design', description: 'Are the alert rules specific, threshold-based, and actionable?', weight: 30 },
      { key: 'escalation', label: 'Escalation Model', description: 'Is the escalation hierarchy clear and proportionate?', weight: 25 },
      { key: 'anomaly', label: 'Anomaly Detection', description: 'Does the candidate understand the difference between simple thresholds and statistical anomaly detection?', weight: 20 },
    ],
    skillsProven: ['Real-time dashboards', 'Alert design', 'Operations analytics', 'Anomaly detection'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },

  // --- Topic 12: Data Governance & Quality ---
  {
    id: 'governance-data-dictionary',
    categoryId: 'data',
    topicId: 'data-governance-quality',
    level: 'beginner',
    title: 'Write a Data Dictionary',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Document 15 columns in a messy database table with clear definitions and business rules.',
    scenario:
      'A new analyst joins the team and asks: "What does the column `status_cd` mean? What are the valid values?" Nobody knows. The original developer left 3 years ago. You have been asked to write the data dictionary for the most important table.',
    brief:
      'Invent a plausible 15-column customer orders table. Write a comprehensive data dictionary that a new team member could use to understand every column without asking anyone.',
    deliverables: [
      'A table with columns: Column Name, Data Type, Description, Valid Values / Range, Nullable?, Business Rule',
      'At least 3 columns with non-obvious business rules (e.g., "status_cd can only transition from P → A → C, never backwards")',
      'One column that is commonly misunderstood and your note explaining the correct interpretation',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A data dictionary is not a schema dump. It is documentation that prevents incorrect analysis. Every description should answer: "What does this mean for the business?"',
    rubric: [
      { key: 'completeness', label: 'Completeness', description: 'Are all 15 columns documented with all required fields?', weight: 30 },
      { key: 'business-rules', label: 'Business Rules', description: 'Are the business rules realistic, specific, and analytically useful?', weight: 35 },
      { key: 'clarity', label: 'Clarity', description: 'Could a new analyst use this dictionary without any additional context?', weight: 35 },
    ],
    skillsProven: ['Data documentation', 'Data dictionaries', 'Business rules', 'Knowledge management'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'governance-quality-checks',
    categoryId: 'data',
    topicId: 'data-governance-quality',
    level: 'intermediate',
    title: 'Design Data Quality Checks',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a set of automated validation rules for a sales pipeline.',
    scenario:
      'A company discovered that 5% of their revenue reports were wrong last quarter because duplicates, nulls, and out-of-range values slipped through their data pipeline undetected. The CTO wants automated quality gates.',
    brief:
      'Design a comprehensive set of data quality checks for a sales data pipeline. The checks should run automatically after each data load and block bad data from reaching the reporting layer.',
    deliverables: [
      'A framework of check categories: completeness, accuracy, consistency, timeliness, and uniqueness',
      'At least 10 specific check rules with SQL or pseudo-code (e.g., "SELECT COUNT(*) FROM orders WHERE total < 0")',
      'A severity classification: which failures block the pipeline (critical) vs which generate warnings (non-critical)',
      'A reporting mechanism: how the data team is notified and what the quality dashboard looks like',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Quality checks that nobody looks at are worse than no checks (false sense of security). Design the alerting so it is impossible to ignore.',
    rubric: [
      { key: 'framework', label: 'Quality Framework', description: 'Are the check categories comprehensive and correctly defined?', weight: 25 },
      { key: 'rules', label: 'Check Rules', description: 'Are the 10 rules specific, correct, and covering different quality dimensions?', weight: 30 },
      { key: 'severity', label: 'Severity Classification', description: 'Is the critical vs warning distinction well-reasoned?', weight: 25 },
      { key: 'alerting', label: 'Alerting Design', description: 'Would the team actually see and act on quality failures?', weight: 20 },
    ],
    skillsProven: ['Data quality', 'Automated validation', 'Pipeline design', 'Data governance'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
  {
    id: 'governance-popia-audit',
    categoryId: 'data',
    topicId: 'data-governance-quality',
    level: 'advanced',
    title: 'POPIA/GDPR Compliance Audit',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Audit a fictional company\'s data practices and write a compliance gap report.',
    scenario:
      'A South African fintech startup has grown rapidly but has never done a formal data privacy audit. They store customer ID numbers, bank account details, and location data. A new enterprise client requires POPIA compliance certification before signing the contract.',
    brief:
      'Conduct a POPIA compliance audit of the fictional company. Identify gaps, classify them by risk level, and write a remediation plan that the CTO can execute in 90 days.',
    deliverables: [
      'A summary of POPIA\'s 8 conditions for lawful processing and how each applies to this fintech',
      'A gap analysis table: at least 5 specific gaps (e.g., "no consent mechanism for location tracking")',
      'A risk classification for each gap: Critical (legal exposure), High (reputational), Medium (operational)',
      'A 90-day remediation roadmap with specific actions, responsible parties, and milestones',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'POPIA is South African law, not a suggestion. Show that you understand the legal requirements, not just the IT implementation. Reference specific POPIA sections where relevant.',
    rubric: [
      { key: 'popia', label: 'POPIA Knowledge', description: 'Are the 8 conditions correctly summarised and applied to the fintech context?', weight: 25 },
      { key: 'gaps', label: 'Gap Identification', description: 'Are the gaps specific, realistic, and correctly classified by risk?', weight: 30 },
      { key: 'remediation', label: 'Remediation Plan', description: 'Is the 90-day roadmap actionable with clear ownership and milestones?', weight: 30 },
      { key: 'judgment', label: 'Legal Judgment', description: 'Does the candidate distinguish between technical compliance and genuine data protection?', weight: 15 },
    ],
    skillsProven: ['POPIA compliance', 'Data privacy', 'Risk assessment', 'Compliance auditing'],
    relatedRoadmapIds: ['data-analyst', 'data-engineer'],
  },
];
