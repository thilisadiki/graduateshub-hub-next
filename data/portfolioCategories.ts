import type { PortfolioCategory } from '@/types';

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    tagline: 'Build, style, and polish real web pages.',
    description:
      'Practical front-end tasks: rebuilding layouts from a screenshot, improving accessibility, and handling responsive behaviour the way a junior front-end developer is expected to.',
    accentFrom: 'from-[#7A5900]',
    accentTo: 'to-[#FFDF9C]',
  },
  {
    id: 'software-development',
    name: 'Software Development',
    tagline: 'Debug, design, and reason about working software.',
    description:
      'Programming-focused tasks: finding and fixing bugs, designing small APIs, writing clean specs, and thinking about edge cases the way a working engineer does.',
    accentFrom: 'from-[#6C5D3F]',
    accentTo: 'to-[#F5E0BB]',
  },
  {
    id: 'data',
    name: 'Data',
    tagline: 'Turn messy data into decisions.',
    description:
      'Analytics tasks: cleaning real-world data, choosing the right chart, writing insight memos, and defending your metric choices to a non-technical stakeholder.',
    accentFrom: 'from-[#4B6649]',
    accentTo: 'to-[#CCECC8]',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    tagline: 'Plan campaigns, experiments, and content that actually ship.',
    description:
      'Marketing briefs grounded in real businesses: social media audits, email A/B tests, content calendars, and ad copy experiments.',
    accentFrom: 'from-[#7A5900]',
    accentTo: 'to-[#FFDF9C]',
  },
  {
    id: 'finance-accounting',
    name: 'Finance & Accounting',
    tagline: 'Build financial thinking, not just formulas.',
    description:
      'Cash flow forecasts, ratio analysis, and financial memos tied to realistic South African SME scenarios. Interpretation and judgment matter more than calculation.',
    accentFrom: 'from-[#6C5D3F]',
    accentTo: 'to-[#F5E0BB]',
  },
  {
    id: 'design-ux',
    name: 'Design & UX',
    tagline: 'Critique, prototype, and defend your design decisions.',
    description:
      'Hands-on UX tasks: teardowns of real local sites, rebuilding design handoffs, and prioritising fixes with a product lens.',
    accentFrom: 'from-[#4B6649]',
    accentTo: 'to-[#CCECC8]',
  },
  {
    id: 'business-analysis',
    name: 'Business Analysis',
    tagline: 'Turn vague problems into crisp specs.',
    description:
      'Requirements documents, stakeholder maps, and process improvement briefs. How a BA translates ambiguity into something a team can actually build.',
    accentFrom: 'from-[#7A5900]',
    accentTo: 'to-[#FFDF9C]',
  },
  {
    id: 'customer-ops',
    name: 'Customer & Ops',
    tagline: 'Run the unglamorous things that keep a business alive.',
    description:
      'Support triage, standard operating procedure write-ups, and critiquing customer-facing policies. Roles that rarely have portfolios but should.',
    accentFrom: 'from-[#4B6649]',
    accentTo: 'to-[#CCECC8]',
  },
  {
    id: 'it',
    name: 'IT & Infrastructure',
    tagline: 'Document the network, run the helpdesk, ship the policy.',
    description:
      'Practical IT support and service management tasks: home labs, ITIL-aligned ticket logs, troubleshooting flows, and the policy work that real corporate IT teams produce.',
    accentFrom: 'from-[#6C5D3F]',
    accentTo: 'to-[#F5E0BB]',
  },
  {
    id: 'ai-prompting',
    name: 'AI & Prompting',
    tagline: 'Work with AI the way modern teams are starting to.',
    description:
      'Prompt rewrites, AI evaluation rubrics, and agent flow designs. The emerging skillset every role will touch in the next few years.',
    accentFrom: 'from-[#7A5900]',
    accentTo: 'to-[#FFDF9C]',
  },
];

export function getCategoryById(id: string): PortfolioCategory | undefined {
  return portfolioCategories.find((c) => c.id === id);
}
