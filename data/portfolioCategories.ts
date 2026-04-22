import type { PortfolioCategory } from '@/types';

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    tagline: 'Build, style, and polish real web pages.',
    description:
      'Practical front-end tasks: rebuilding layouts from a screenshot, improving accessibility, and handling responsive behaviour the way a junior front-end developer is expected to.',
    accentFrom: 'from-sky-500',
    accentTo: 'to-blue-500',
  },
  {
    id: 'software-development',
    name: 'Software Development',
    tagline: 'Debug, design, and reason about working software.',
    description:
      'Programming-focused tasks: finding and fixing bugs, designing small APIs, writing clean specs, and thinking about edge cases the way a working engineer does.',
    accentFrom: 'from-indigo-500',
    accentTo: 'to-violet-500',
  },
  {
    id: 'data',
    name: 'Data',
    tagline: 'Turn messy data into decisions.',
    description:
      'Analytics tasks: cleaning real-world data, choosing the right chart, writing insight memos, and defending your metric choices to a non-technical stakeholder.',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-500',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    tagline: 'Plan campaigns, experiments, and content that actually ship.',
    description:
      'Marketing briefs grounded in real businesses: social media audits, email A/B tests, content calendars, and ad copy experiments.',
    accentFrom: 'from-pink-500',
    accentTo: 'to-rose-500',
  },
  {
    id: 'finance-accounting',
    name: 'Finance & Accounting',
    tagline: 'Build financial thinking, not just formulas.',
    description:
      'Cash flow forecasts, ratio analysis, and financial memos tied to realistic South African SME scenarios. Interpretation and judgment matter more than calculation.',
    accentFrom: 'from-amber-500',
    accentTo: 'to-orange-500',
  },
  {
    id: 'design-ux',
    name: 'Design & UX',
    tagline: 'Critique, prototype, and defend your design decisions.',
    description:
      'Hands-on UX tasks: teardowns of real local sites, rebuilding design handoffs, and prioritising fixes with a product lens.',
    accentFrom: 'from-violet-500',
    accentTo: 'to-fuchsia-500',
  },
  {
    id: 'business-analysis',
    name: 'Business Analysis',
    tagline: 'Turn vague problems into crisp specs.',
    description:
      'Requirements documents, stakeholder maps, and process improvement briefs. How a BA translates ambiguity into something a team can actually build.',
    accentFrom: 'from-slate-500',
    accentTo: 'to-slate-700',
  },
  {
    id: 'customer-ops',
    name: 'Customer & Ops',
    tagline: 'Run the unglamorous things that keep a business alive.',
    description:
      'Support triage, standard operating procedure write-ups, and critiquing customer-facing policies. Roles that rarely have portfolios but should.',
    accentFrom: 'from-cyan-500',
    accentTo: 'to-teal-500',
  },
  {
    id: 'ai-prompting',
    name: 'AI & Prompting',
    tagline: 'Work with AI the way modern teams are starting to.',
    description:
      'Prompt rewrites, AI evaluation rubrics, and agent flow designs. The emerging skillset every role will touch in the next few years.',
    accentFrom: 'from-fuchsia-500',
    accentTo: 'to-purple-600',
  },
];

export function getCategoryById(id: string): PortfolioCategory | undefined {
  return portfolioCategories.find((c) => c.id === id);
}
