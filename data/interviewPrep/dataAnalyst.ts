import type { InterviewPrep } from '@/types';

export const dataAnalystPrep: InterviewPrep = {
  id: 'data-analyst',
  role: 'Data Analyst',
  category: 'it',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and interview questions for junior data analyst roles in South Africa. Covers Excel, SQL, Power BI, and the analytical thinking questions SA employers use to screen candidates.',
  salaryRange: 'R180,000 – R320,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'Specific tools with a competency indication: "Microsoft Excel (advanced: VLOOKUP, pivot tables, INDEX/MATCH, macros)" rather than just "Excel"',
    'SQL experience or coursework, with the specific flavour if known (T-SQL, MySQL, PostgreSQL)',
    'Any BI tool experience: Power BI, Tableau, or Looker Studio',
    'A portfolio link or GitHub repository showing actual projects with real datasets',
    'Python or R if you have used them, even at a basic level',
    'The types of analysis you have performed: reporting, forecasting, trend analysis, financial modelling',
  ],

  cvAvoid: [
    'Listing "data analysis" as a skill without supporting it with tools and project evidence',
    'Claiming Power BI or Tableau experience without a dashboard to show. Interviewers will ask to see it',
    'Burying technical skills in a generic skills section at the bottom. Put them prominently, near the top',
    'Ignoring soft skills entirely. Analysts who cannot communicate findings to non-technical stakeholders are a major pain point for SA hiring managers',
    'A CV longer than two pages for an entry-level role',
  ],

  cvTips: [
    {
      heading: 'Show a project, not just coursework',
      body: 'The difference between a data analyst CV that gets interviews and one that does not is usually a real project. Take a public dataset from Kaggle or Statistics South Africa, clean it, analyse it, and build a Power BI dashboard or write a short findings report. One well-documented project is worth more than five listed courses.',
    },
    {
      heading: 'Quantify everything',
      body: 'Data analysts are expected to think in numbers. A CV that contains no quantification of any kind is a red flag. "Analysed 3 months of sales data across 4 product lines to identify a 22% revenue concentration in one SKU" is the kind of language that gets attention. Even if the project was fictional, be specific.',
    },
    {
      heading: 'Highlight your SQL specifically',
      body: 'SQL is the most commonly tested skill in SA data analyst interviews. If you have completed SQL coursework, say so clearly and specify the type: "Completed T-SQL and SQL Server Data Manipulation coursework, comfortable with SELECT, JOIN, GROUP BY, subqueries." This one line will get your CV past more screening filters than almost anything else.',
    },
    {
      heading: 'Mention the SA data context where relevant',
      body: 'If you have worked with South African datasets, mention the source: Stats SA, National Treasury open data, or industry-specific SA data. Demonstrating familiarity with the local data landscape is a subtle but effective differentiator for SA roles.',
    },
  ],

  keySkills: [
    'Microsoft Excel (advanced functions, pivot tables, Power Query)',
    'SQL (SELECT, JOIN, GROUP BY, subqueries)',
    'Power BI (data modelling, DAX basics, dashboard design)',
    'Python or R for data cleaning (advantageous)',
    'Data visualisation principles',
    'Written and verbal communication of analytical findings',
    'Attention to detail and data quality awareness',
  ],

  questions: [
    {
      question: 'Write a SQL query to find the top 5 customers by total purchase value.',
      why: 'SQL is tested in almost every SA data analyst interview, often as a practical exercise. This is one of the most common prompts.',
      sampleAnswer: 'SELECT customer_id, SUM(purchase_value) AS total_value FROM orders GROUP BY customer_id ORDER BY total_value DESC LIMIT 5; I would also ask whether we want to include cancelled orders and whether "customer" means individual or account, since those assumptions affect the query.',
      redFlag: 'Writing the correct query but not considering edge cases or data quality questions. Good analysts question the data before querying it.',
    },
    {
      question: 'How would you explain a complex data finding to a non-technical manager?',
      why: 'Communication is the skill SA analysts are most frequently criticised for lacking. This question screens specifically for it.',
      sampleAnswer: 'I would start with the business implication, not the method. Instead of leading with "I ran a cohort analysis," I would say "Customers who make a second purchase within 14 days are three times more likely to become long-term customers." Then I would show a simple visual, ideally one chart that supports that single point. I avoid jargon and I invite questions rather than overwhelming them with all the supporting analysis upfront.',
    },
    {
      question: 'You receive a dataset and you notice there are missing values in several key columns. What do you do?',
      why: 'Data quality handling is a practical, daily skill. Interviewers want to see a methodical approach.',
      sampleAnswer: 'First I would quantify the extent of the missing data: how many rows are affected and which columns. Then I would try to understand why the data is missing. Is it a collection issue, a system error, or expected behaviour? Depending on the context and the volume, I might remove affected rows if the sample is large enough, impute with a mean or median for numeric fields where appropriate, or flag the rows and exclude them from specific calculations while keeping them in others. I would document every decision and disclose the limitation in any report I produce.',
    },
    {
      question: 'Tell me about a time you found something unexpected in a dataset.',
      why: 'Analytical curiosity is a differentiating trait. This question surfaces whether you go beyond the brief.',
      sampleAnswer: 'While analysing a fictional e-commerce sales dataset for a study project, I noticed that sales were consistently higher on Tuesdays than any other day, which was not intuitive. I investigated and found that the business sent its newsletter every Tuesday morning. That single insight suggested the newsletter was driving meaningful direct sales and warranted further analysis on its own. I flagged it in my report as a hypothesis worth testing with a controlled send-day experiment.',
    },
    {
      question: 'What is the difference between a measure and a dimension in Power BI?',
      why: 'Power BI is widely used in SA corporate environments. This basic data modelling question screens for genuine tool knowledge.',
      sampleAnswer: 'A dimension is a categorical field used to slice or filter data, such as product category, region, or date. A measure is a calculated value, typically a sum, average, count, or ratio, such as total sales, average order value, or month-on-month growth. In Power BI, measures are written in DAX and are evaluated in the context of the dimensions applied in a visual or filter.',
    },
  ],

  relatedRoadmapId: 'data-analyst',
  relatedPrepIds: ['it-support-specialist', 'business-analyst', 'web-developer'],
};
