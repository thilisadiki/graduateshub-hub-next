import type { InterviewPrep } from '@/types';

export const uiUxDesignerPrep: InterviewPrep = {
  id: 'ui-ux-designer',
  role: 'UI/UX Designer',
  category: 'it',
  curator: 'jason',
  description:
    'CV rules, portfolio case study advice, and technical interview questions for junior UI/UX designers. Covers Figma Auto-Layout, design thinking, UX research, accessibility (WCAG), and developer handoffs.',
  salaryBenchmarks: [
    { region: 'United States', range: '$65,000 – $95,000/year' },
    { region: 'United Kingdom', range: '£32,000 – £52,000/year' },
    { region: 'Canada', range: 'CA$60,000 – CA$88,000/year' },
    { region: 'Australia', range: 'A$72,000 – A$110,000/year' },
    { region: 'South Africa', range: 'R200,000 – R400,000/year' },
  ],
  cvMustInclude: [
    'Link to a live Portfolio website or Notion/Figma presentation featuring 2–3 case studies',
    'Specific design tools: Figma, FigJam, Adobe CC, Principle, Maze',
    'UX methodologies: Usability testing, wireframing, user persona synthesis, journey mapping',
    'UI design systems: Auto-Layout, variants, design tokens, responsive layout grids',
    'Accessibility standards: WCAG 2.1 AA contrast ratio compliance',
  ],
  cvAvoid: [
    'Submitting a PDF CV without a link to an interactive portfolio case study',
    'Presenting single Dribbble-style UI mockups without explaining user research or problem statements',
    'Claiming to master 10 different tools without deep mastery of Figma',
  ],
  cvTips: [
    {
      heading: 'Structure your portfolio as storytelling case studies',
      body: 'Hiring managers hire UI/UX designers based on process narrative: Problem Statement -> User Research -> Low-Fi Wireframes -> Usability Test Iterations -> Final High-Fi Figma Prototype.',
    },
    {
      heading: 'Demonstrate developer collaboration',
      body: 'Highlighting how you annotate design tokens, spec spacing variables, and build reusable Figma Auto-Layout components makes you instantly attractive to engineering managers.',
    },
  ],
  keySkills: [
    'Figma & FigJam (Auto-Layout, Variants, Prototyping)',
    'User Research & Usability Testing',
    'Information Architecture & Wireframing',
    'Design Systems & UI Pattern Libraries',
    'WCAG Accessibility & Responsive Layouts',
  ],
  questions: [
    {
      question: 'Walk me through your design process from receiving a brief to final developer handoff.',
      why: 'Evaluates your structured design methodology and cross-functional collaboration skills.',
      sampleAnswer: 'I start by defining the problem through user interviews and competitor benchmarking. Next, I sketch low-fidelity wireframes to test layout flow. In Figma, I build high-fidelity interactive prototypes using Auto-Layout and design components. I conduct usability testing to refine friction points, and finally produce detailed developer handoff specs with annotated design tokens.',
      redFlag: 'Jumping straight to visual UI polish without mentioning user research or usability testing.',
    },
    {
      question: 'How do you ensure your UI designs meet WCAG 2.1 AA accessibility standards?',
      why: 'Tests essential inclusive design knowledge required by modern product teams.',
      sampleAnswer: 'I ensure text maintains a minimum 4.5:1 color contrast ratio for normal text. I design clear focus states for keyboard navigation, ensure touch targets are at least 44x44 pixels, and don\'t rely solely on color to convey state (adding icons and text labels alongside color changes).',
    },
    {
      question: 'How do you handle pushback from developers who say a feature design is too complex to build?',
      why: 'Assesses cross-functional communication and practical product trade-off reasoning.',
      sampleAnswer: 'I view developers as partners. I engage them early during wireframing to identify technical constraints before finalizing UI specs. If a feature is too complex for the sprint, I work with the engineering team to break the design down into an MVP release while retaining core UX usability.',
    },
  ],
  relatedRoadmapId: 'ui-ux-designer',
  relatedPrepIds: ['web-developer', 'junior-qa-tester'],
};
