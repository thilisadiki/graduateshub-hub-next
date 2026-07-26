import type { CareerRoadmap } from '@/types';

export const uiUxDesignerRoadmap: CareerRoadmap = {
  id: 'ui-ux-designer',
  title: 'How to Become a UI/UX Designer',
  tagline: 'Design intuitive digital products, conduct user research, and build interactive Figma prototypes. No coding required.',
  category: 'it',
  curator: 'jason',
  timeToJobReady: '6–9 months',
  demandLevel: 'Very High',
  entryLevel: true,
  description:
    'A step-by-step career roadmap for becoming a UI/UX Designer. Covers user research, wireframing, Figma prototyping, design systems, usability testing, and portfolio creation.',
  overview:
    'UI/UX Designers shape how people experience digital products. User Experience (UX) design focuses on understanding user needs, mapping user flows, and conducting usability research to make products intuitive. User Interface (UI) design focuses on visual aesthetics, typography, color systems, component libraries, and interactive visual polish.\n\nThe UI/UX design path is one of the most accessible non-coding entry points into the tech industry. Employers prioritize human-centered problem-solving, structured design thinking, and practical Figma portfolio case studies over formal university degrees. By following this roadmap, you will learn how to turn raw business ideas into user-tested, developer-ready design prototypes.',
  jobTitles: [
    'Junior UI/UX Designer',
    'Product Designer (Associate)',
    'UX Researcher',
    'Visual Designer',
    'Interaction Designer',
    'Web & App Interface Designer',
  ],
  technicalSkills: [
    'Figma & FigJam (Components, Auto-Layout, Variants, Prototyping)',
    'User Research & Persona Synthesis',
    'Information Architecture & Wireframing',
    'Design Systems & UI Pattern Libraries',
    'Usability Testing & Iterative Design',
    'Responsive Web & Mobile Layout Principles',
  ],
  softSkills: [
    'Empathy & user advocacy',
    'Cross-functional communication (collaborating with developers)',
    'Design critique & feedback synthesis',
    'Problem solving & critical thinking',
  ],
  stages: [
    {
      number: 1,
      title: 'Master UX Fundamentals & Design Thinking',
      duration: '4–5 weeks',
      description:
        'UX begins with understanding human psychology and problem definition. In Stage 1, you will learn the 5-stage Design Thinking framework (Empathize, Define, Ideate, Prototype, Test). You will learn how to write user personas, map customer journeys, and structure clear information architecture.',
      courseIds: ['basic-concepts-of-digital-marketing'],
      milestone:
        'You can conduct user interviews, define problem statements, and create user personas and journey maps for a mobile app idea.',
    },
    {
      number: 2,
      title: 'Wireframing & Information Architecture',
      duration: '4–6 weeks',
      description:
        'Before adding colors or visual polish, great designers sketch low-fidelity wireframes to test layout hierarchy and navigation. Stage 2 focuses on low-fi wireframing, layout grids, visual hierarchy, and creating interactive user flows.',
      courseIds: ['digital-marketing-overview'],
      milestone:
        'You can create low-fidelity wireframe flows in Figma for a 5-screen mobile onboarding process.',
    },
    {
      number: 3,
      title: 'Master Figma, Auto-Layout & UI Design Systems',
      duration: '6–8 weeks',
      description:
        'Figma is the undisputed global industry standard for UI/UX design. In this stage, you will master Figma Auto-Layout, component variants, typography scales, color accessibility (WCAG contrast standards), and building reusable design tokens.',
      courseIds: ['content-creation-strategy'],
      milestone:
        'You can build a scalable mini design system in Figma with buttons, input fields, cards, and modal components using Auto-Layout.',
    },
    {
      number: 4,
      title: 'Interactive Prototyping & Usability Testing',
      duration: '5–6 weeks',
      description:
        'Static screens do not demonstrate how an app feels. Stage 4 covers high-fidelity interactive prototyping in Figma (micro-interactions, component state animations) and conducting moderated usability testing sessions to collect feedback.',
      courseIds: ['growth-hacking-techniques-for-digital-marketing'],
      milestone:
        'You have conducted 3 usability test sessions on an interactive prototype and documented key friction points and design iterations.',
    },
    {
      number: 5,
      title: 'Build a Portfolio of Case Studies',
      duration: '6–8 weeks',
      description:
        'Hiring managers hire UI/UX designers based on detailed portfolio case studies, not just pretty Dribbble shots. Stage 5 guides you through writing 2–3 end-to-end case studies detailing the problem statement, user research, wireframes, usability test iterations, and final Figma prototypes.',
      courseIds: ['diploma-social-media-strategy'],
      milestone:
        'You have published a live portfolio website (or Notion/Figma presentation) featuring 2 complete UI/UX case studies.',
    },
  ],
  certifications: [
    {
      name: 'Google UX Design Professional Certificate',
      provider: 'Google / Coursera',
      free: false,
      why: 'The most popular entry-level UX certification globally (available free via Coursera Financial Aid).',
    },
    {
      name: 'Figma Community Certifications & Tutorials',
      provider: 'Figma',
      free: true,
      why: 'Official free Figma badge and interactive playground tutorials for mastering components and auto-layout.',
    },
    {
      name: 'Alison Diploma in UI/UX Design & User Experience',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma covering core UX research and interface design principles.',
    },
  ],
  portfolioProjects: [
    'E-Commerce Mobile App Redesign: audit a clunky shopping app, conduct usability interviews, and publish a high-fi Figma redesign',
    'Local Service SaaS Portal: design a responsive web dashboard for small business scheduling with a complete Figma design system',
    'Accessibility & Micro-Interaction Spec: redesign a signup flow adhering strictly to WCAG 2.1 AA color contrast and screen-reader guidelines',
    'Design Handoff Spec: document component tokens, spacing variables, and interactive states ready for front-end developer implementation',
  ],
  relatedRoadmapIds: ['web-developer', 'junior-qa-tester', 'digital-marketing-specialist'],
  salaryBenchmarks: [
    { region: 'United States', range: '$65,000 – $95,000/year' },
    { region: 'United Kingdom', range: '£32,000 – £52,000/year' },
    { region: 'Canada', range: 'CA$60,000 – CA$88,000/year' },
    { region: 'Australia', range: 'A$72,000 – A$110,000/year' },
    { region: 'South Africa', range: 'R200,000 – R400,000/year' },
  ],
  remoteFriendly: 'Fully',
  difficulty: 'Beginner',
  faqs: [
    {
      q: 'Do I need to know how to code to be a UI/UX Designer?',
      a: 'No. While understanding basic HTML and CSS layout concepts helps when communicating with developers, UI/UX design is a non-coding discipline focused on human research, wireframing, visual architecture, and Figma prototyping.',
    },
    {
      q: 'What software should I learn first for UI/UX Design?',
      a: 'Figma. It is the dominant industry standard used by over 80% of product design teams globally. Master Figma components, Auto-Layout, variants, and prototyping before exploring other tools.',
    },
    {
      q: 'What is the difference between UI and UX Design?',
      a: 'UX (User Experience) is about how the product works and feels—user research, wireframes, usability testing, and information architecture. UI (User Interface) is about how the product looks—colors, typography, spacing, buttons, and visual aesthetic polish.',
    },
    {
      q: 'What actually gets you hired as a junior UI/UX designer?',
      a: 'A portfolio with 2 to 3 detailed case studies. Hiring managers care less about pretty final screens and more about your design process: how you framed the problem, what research you conducted, how wireframes evolved, and how user testing guided your final decisions.',
    },
  ],
  firstNinetyDays: [
    'Spend your first 30 days studying the company design system, auditing existing product component libraries, and meeting key front-end developers',
    'Take on small UI updates: fixing alignment inconsistencies, redesigning empty states, and updating modal dialog specs',
    'By month two, lead user research synthesis for minor feature updates and present Figma prototypes to product managers',
    'By month three, take ownership of a complete feature redesign from wireframe to developer handoff',
  ],
  commonMistakes: [
    {
      mistake: 'Focusing exclusively on pretty visual UI while ignoring user research and usability',
      fix: 'Always document the "Why" behind your design decisions. A beautiful screen that confuses real users will fail in design reviews.',
    },
    {
      mistake: 'Failing to master Figma Auto-Layout and components',
      fix: 'Developers will struggle to implement your designs if they are built with static positioning. Learn Auto-Layout and responsive constraints early.',
    },
    {
      mistake: 'Publishing Dribbble-style single screenshots instead of comprehensive case studies',
      fix: 'Structure your portfolio case studies as storytelling narratives: Problem -> Research -> Wireframing -> Usability Testing -> Final Figma Prototype.',
    },
  ],
};
