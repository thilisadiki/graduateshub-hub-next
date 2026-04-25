import type { CareerRoadmap } from '@/types';

export const businessAnalystRoadmap: CareerRoadmap = {
  id: 'business-analyst',
  title: 'How to Become a Business Analyst',
  tagline: 'Bridge the gap between business problems and technical solutions.',
  category: 'business',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '6–10 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A practical roadmap for entering business analysis. Covers project management, Agile, process improvement, information systems, and AI in business. Curated by Ndulamiso Mamburu, an Accounting Science graduate with corporate experience at SARS.',
  overview:
    'Business analysts are the translators of the corporate world. They sit between the people who have a business problem and the people who build the technical solution. A BA\'s job is to understand what a business needs, document it precisely, model the current and future state of processes, and communicate requirements in a way that development teams can act on.\n\nThe role is highly accessible to people with a mix of business and technical interest. You do not need to write code, but you do need to understand how systems work and how businesses operate. Graduates with backgrounds in accounting, finance, management, or IT are all natural candidates for business analysis. This roadmap was curated by Ndulamiso Mamburu, who brings direct corporate experience in navigating the intersection of business operations and technology.',
  jobTitles: [
    'Junior Business Analyst',
    'Business Systems Analyst',
    'Process Analyst',
    'Requirements Analyst',
    'Agile Business Analyst',
    'IT Business Analyst',
  ],
  technicalSkills: [
    'Requirements gathering & documentation',
    'Process modelling (as-is / to-be)',
    'Agile & Scrum methodology',
    'Project management fundamentals',
    'Management information systems',
    'AI and automation awareness',
  ],
  softSkills: [
    'Active listening and stakeholder interviewing',
    'Structured written communication',
    'Facilitation and workshop management',
    'Analytical thinking and problem decomposition',
  ],
  stages: [
    {
      number: 1,
      title: 'Understand How Organisations Use Information',
      duration: '3–4 weeks',
      description:
        'Business analysts work within organisations, and those organisations are powered by information systems. Before you can analyse business requirements, you need to understand how information flows through a company: how systems capture data, how decisions are made, and how technology either enables or constrains business strategy. This foundational stage gives you the conceptual framework that underpins every BA deliverable.',
      courseIds: ['management-information-systems', 'information-systems-technology-business-models'],
      milestone:
        'You can describe how management information systems support organisational strategy, and map how data flows through a typical business process.',
    },
    {
      number: 2,
      title: 'Master Project and Process Management',
      duration: '8–10 weeks',
      description:
        'Business analysts almost always work within project teams. Understanding how projects are initiated, planned, and delivered is not optional; it is the context in which all your BA work happens. This stage covers the full project lifecycle using both traditional and Agile frameworks, giving you the vocabulary and tools to function effectively on any type of project team.',
      courseIds: ['diploma-project-management', 'agile-project-management'],
      milestone:
        'You can create a project scope document, write User Stories, manage a Product Backlog, and describe the difference between Waterfall and Agile delivery approaches.',
    },
    {
      number: 3,
      title: 'Learn Process Improvement Methodologies',
      duration: '5–6 weeks',
      description:
        'A major part of a BA\'s work is identifying inefficiencies in current business processes and designing improvements. Lean Six Sigma provides the structured methodology for doing this: how to define a problem, measure its impact, analyse root causes, design a solution, and control the improvement. These frameworks are used in manufacturing, financial services, healthcare, and government across South Africa.',
      courseIds: ['lean-six-sigma-yellow-belt', 'lean-six-sigma-white-belt'],
      milestone:
        'You can apply the DMAIC framework to a real or fictional business process, identify waste and variation, and propose a measurable improvement.',
    },
    {
      number: 4,
      title: 'Add Compliance and AI Awareness',
      duration: '3–4 weeks',
      description:
        'Modern business analysts increasingly need to understand the regulatory environment their organisation operates in, and the impact of AI on business processes. GDPR and data protection frameworks affect how requirements are documented and how systems handle personal data. AI tools are reshaping how analysis, documentation, and reporting are done. This stage ensures you are current on both.',
      courseIds: ['gdpr-general-data-protection', 'intro-ai-business'],
      milestone:
        'You can identify GDPR-relevant requirements in a business case and describe three ways AI tools can augment business analysis work.',
    },
  ],
  certifications: [
    {
      name: 'IIBA Entry Certificate in Business Analysis (ECBA)',
      provider: 'IIBA (International Institute of Business Analysis)',
      free: false,
      why: 'The globally recognised entry-level BA certification. No work experience required. Highly valued in South African corporate environments.',
    },
    {
      name: 'PMI Professional in Business Analysis (PMI-PBA)',
      provider: 'Project Management Institute',
      free: false,
      why: 'Strong credential for BAs who work within project teams. Valued by project-driven organisations and consulting firms.',
    },
    {
      name: 'Alison Diploma in Project Management',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Provides a visible credential for your CV while you prepare for ECBA or PMI-PBA.',
    },
  ],
  portfolioProjects: [
    'Requirements document: produce a Business Requirements Document (BRD) for a fictional system change at a small company',
    'Process model: create an as-is and to-be process diagram for a fictional inefficient business process, with a gap analysis',
    'User stories: write a Product Backlog of 20 User Stories with acceptance criteria for a fictional mobile app',
    'DMAIC project: complete a full Lean Six Sigma DMAIC mini-project on a real inefficiency you have observed in any workplace or study environment',
    'Stakeholder map: for any fictional project, create a complete stakeholder register identifying all parties, their interests, influence level, and engagement strategy',
  ],
  relatedRoadmapIds: ['junior-accountant', 'data-analyst', 'it-support-specialist'],
  salaryRange: 'R200,000 – R340,000 per year (entry level, SA)',
  remoteFriendly: 'Hybrid',
  difficulty: 'Intermediate',
  faqs: [
    {
      q: 'What is the difference between a business analyst and a data analyst?',
      a: 'Data analysts answer "what happened" using data. Business analysts answer "what should change" using requirements, process models, and stakeholder input. There is overlap, but a BA spends most of their time interviewing stakeholders and writing requirements, while a DA spends most of theirs in SQL and BI tools.',
    },
    {
      q: 'Do I need to be technical to be a BA?',
      a: 'You do not need to code, but you do need to understand how systems work: APIs, databases, integrations, deployment cycles. BAs who cannot have a technical conversation with developers struggle. Aim for technical literacy, not technical mastery.',
    },
    {
      q: 'Is the IIBA ECBA worth getting?',
      a: 'For SA corporates (banks, insurers, telecoms) yes. ECBA is the entry-level IIBA cert with no work experience required, costs roughly R3,500, and removes the "no formal BA training" objection in screening. CBAP comes later once you have experience.',
    },
    {
      q: 'Agile BA or traditional BA?',
      a: 'Most modern SA roles, especially in tech and banking, are Agile. You will write user stories, attend ceremonies, and refine backlogs rather than producing thick BRDs upfront. Traditional waterfall BA roles still exist in government and large infrastructure projects but are shrinking.',
    },
    {
      q: 'Can I move from BA into product management?',
      a: 'Yes, this is one of the most common SA career progressions. Product managers own outcomes; BAs own requirements. Building product judgment (understanding users, prioritising features, owning a metric) while in a BA role is the bridge.',
    },
    {
      q: 'How important is SQL for a BA?',
      a: 'Increasingly important. Many SA BA job specs now list "basic SQL" as a requirement because BAs are expected to validate data themselves rather than always asking a DA. Aim for comfort with SELECT, JOIN, GROUP BY, and WHERE at minimum.',
    },
  ],
  firstNinetyDays: [
    'Week one focuses on stakeholder mapping: meeting business sponsors, product owners, technical leads, and end users to understand who you serve and how decisions are made',
    'By week three you should be sitting in on backlog refinement, sprint planning, and retrospectives, observing how requirements flow into delivery',
    'Month two: take ownership of small user stories, write acceptance criteria independently, and lead at least one stakeholder workshop with a senior BA shadowing',
    'By month three expect to own a feature or epic end-to-end: discovery, requirements documentation, story writing, supporting the development team during the sprint, and supporting UAT',
    'Build a personal stakeholder log from day one. Track who said what, what decisions were made, and what is still open. BAs who keep meticulous traceability are the ones senior leaders trust with bigger work',
  ],
  commonMistakes: [
    {
      mistake: 'Producing thick BRDs no one reads',
      fix: 'Modern BA work in SA is iterative. Lead with user stories, decision logs, and process diagrams. Reserve full BRDs for regulated or contractually required deliverables.',
    },
    {
      mistake: 'Documenting requirements without involving developers early',
      fix: 'Requirements written in isolation almost always miss technical constraints. Bring at least one developer into discovery sessions; the rework you save is worth the meeting time.',
    },
    {
      mistake: 'Treating "agile" as ceremony attendance',
      fix: 'Agile BA work is about continuous prioritisation, slicing stories small, and being responsive to change. If you are merely attending standups and writing the same scope documents you would write in waterfall, you are not yet doing agile BA.',
    },
    {
      mistake: 'Avoiding data analysis because "that is the data analyst\'s job"',
      fix: 'BAs who can validate their own assumptions in SQL or Excel are dramatically more credible. Spend a few weekends becoming comfortable with basic queries; it pays back permanently.',
    },
    {
      mistake: 'Modelling the as-is process and stopping there',
      fix: 'Documenting the current state is the easy half. The valuable half is modelling the to-be state with measurable improvements. Always pair as-is and to-be diagrams in your portfolio.',
    },
  ],
};
