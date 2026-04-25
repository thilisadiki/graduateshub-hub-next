import type { CareerRoadmap } from '@/types';

export const projectCoordinatorRoadmap: CareerRoadmap = {
  id: 'project-coordinator',
  title: 'How to Become a Project Coordinator',
  tagline: 'Run the meetings, the schedule, the risk register. The most teachable role in corporate.',
  category: 'business',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '4–8 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A structured roadmap for becoming a junior project coordinator. Covers the project lifecycle, Agile and Scrum, JIRA, stakeholder communication, and process improvement basics. Built around the exact skills SA corporate project teams hire for at entry level.',
  overview:
    'Project coordinators are the operational engine of every corporate project. They keep the schedule current, the risk register up to date, the stakeholders informed, and the meeting actions tracked. The role is one of the most teachable entry points into a business career because the work is structured, well documented, and built on frameworks (PMBOK, PRINCE2, Scrum) that you can learn through self-study.\n\nAlmost every large SA organisation, banks, telecoms, mining houses, retailers, government departments, runs projects continuously and needs coordinators to keep them on track. The role is also a launchpad: most project managers, programme managers, and Scrum Masters started in coordination roles. The knowledge you build here, how projects are initiated, planned, executed, and closed, applies directly to more senior roles you will grow into. This roadmap was curated by Ndulamiso Mamburu, who brings direct corporate experience navigating project environments in South African organisations.',
  jobTitles: [
    'Junior Project Coordinator',
    'Project Administrator',
    'PMO Analyst',
    'Junior Scrum Master',
    'Programme Coordinator',
    'Delivery Coordinator',
  ],
  technicalSkills: [
    'Project lifecycle management (initiation to closure)',
    'Agile, Scrum, and Waterfall methodologies',
    'JIRA, Asana, or Trello for task and issue tracking',
    'Risk and issue logging',
    'Stakeholder communication and status reporting',
    'Process improvement basics (Lean Six Sigma)',
    'MS Word, Excel, and project documentation',
  ],
  softSkills: [
    'Meeting facilitation and minute-taking',
    'Structured written and verbal communication',
    'Proactive follow-through on commitments',
    'Diplomatic stakeholder management',
  ],
  stages: [
    {
      number: 1,
      title: 'Master the Project Management Lifecycle',
      duration: '6–8 weeks',
      description:
        'Every project, regardless of industry, follows the same five phases: initiation, planning, execution, monitoring and control, and closure. This is the PMBOK framework that almost every large SA organisation uses, and it is the body of knowledge interviewers test you on. Before specialising in any methodology or tool, you need to know what a project charter is, what a Gantt chart looks like, how a risk register is maintained, and how a project formally closes.',
      courseIds: ['diploma-project-management'],
      milestone:
        'You can produce a basic project charter, a Gantt chart, and a risk register for a real or fictional project, and explain how each phase of the project lifecycle hands over to the next.',
    },
    {
      number: 2,
      title: 'Get Fluent in Agile and Scrum',
      duration: '4–5 weeks',
      description:
        'SA project environments are split between traditional Waterfall (used in construction, government, and large ERP rollouts) and Agile (used in technology, banking, and retail). Most modern coordinator roles expect Agile fluency: you should understand sprints, the role of the Scrum Master and Product Owner, daily standups, sprint review, and retrospectives, and how to facilitate them. This stage gives you the vocabulary and the practical mechanics of Agile delivery.',
      courseIds: ['agile-project-management', 'agile-essentials', 'scrum-developer-training'],
      milestone:
        'You can describe a complete Scrum sprint, write a clear User Story with acceptance criteria, and facilitate a daily standup or retrospective using a documented agenda.',
    },
    {
      number: 3,
      title: 'Learn the Tools and Documentation',
      duration: '3–4 weeks',
      description:
        'Tools alone do not make a project coordinator, but coordinators who cannot use the tools do not get hired. JIRA is the issue and project tracking system used across most SA corporate IT, banking, and tech teams. Pair this with strong written communication and document production skills (status reports, meeting minutes, scope documents, change requests) and you become immediately useful on any project from day one.',
      courseIds: ['jira-architecture', 'workplace-communication', 'microsoft-word-2021'],
      milestone:
        'You can navigate JIRA confidently, produce a professional weekly status report and a set of meeting minutes, and structure a project document with a clear hierarchy and version control.',
    },
    {
      number: 4,
      title: 'Add Process Improvement and Quality Awareness',
      duration: '3–4 weeks',
      description:
        'Project coordinators are often the first people to see inefficiencies in how projects are run. Lean Six Sigma gives you the structured language to articulate process problems and propose improvements: define the problem, measure its impact, analyse root causes, improve the process, and control the new state. ISO 9001 quality management context is useful for projects in regulated industries (manufacturing, healthcare, government). Together they signal that you think beyond execution to continuous improvement.',
      courseIds: ['lean-six-sigma-yellow-belt', 'effective-iso-9001'],
      milestone:
        'You can apply the DMAIC framework to a process problem and explain how an ISO 9001 quality management system relates to project delivery in a regulated industry.',
    },
    {
      number: 5,
      title: 'Specialise in Software and IT Project Context',
      duration: '3–4 weeks',
      description:
        'A large portion of SA project coordinator roles sit inside IT departments or at software consultancies. Understanding the specific dynamics of software project delivery (release management, deployment dependencies, technical debt, test environments) makes you a stronger candidate for these roles. This stage is optional if you intend to work in non-IT projects, but highly recommended given the volume of IT and digital project openings in South Africa.',
      courseIds: ['understanding-software-project-management', 'lean-agile-mindset'],
      milestone:
        'You can describe the unique characteristics of a software project versus a traditional engineering or construction project, and explain how Lean-Agile principles apply to a software delivery team.',
    },
  ],
  certifications: [
    {
      name: 'PMI Certified Associate in Project Management (CAPM)',
      provider: 'Project Management Institute',
      free: false,
      why: 'The most recognised entry-level project management certification globally. No work experience required. Exam costs roughly R5,000 to R7,000 and is widely respected in SA corporate environments.',
    },
    {
      name: 'PRINCE2 Foundation',
      provider: 'AXELOS',
      free: false,
      why: 'Particularly valued in SA government, financial services, and consulting firms. Exam plus training costs roughly R8,000 to R12,000 but is often paid for by employers once you are hired.',
    },
    {
      name: 'Google Project Management Certificate',
      provider: 'Google / Coursera',
      free: false,
      why: 'Practical, recognised by non-traditional employers, and available via Coursera financial aid at no cost. Strong CV addition for entry-level coordinators.',
    },
    {
      name: 'Alison Diploma in Project Management',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Useful as a visible credential while you prepare for CAPM or PRINCE2 Foundation.',
    },
  ],
  portfolioProjects: [
    'Project plan: a complete project plan for a real or fictional initiative including scope statement, Gantt chart, budget, and milestone schedule',
    'Risk register: an active risk register for a fictional project with at least 15 identified risks, each with probability, impact, mitigation, and owner',
    'RACI matrix: a complete responsibility assignment matrix for a multi-team project with at least 10 deliverables and 6 stakeholder groups',
    'Status report library: three weekly status reports for a fictional project at different phases (early planning, mid-execution, near closure), each formatted to a corporate standard',
    'Sprint facilitation pack: a set of agendas and templates for daily standup, sprint planning, sprint review, and retrospective, written so a new coordinator could use them on day one',
  ],
  relatedRoadmapIds: ['business-analyst', 'data-analyst', 'it-support-specialist'],
  salaryRange: 'R180,000 – R320,000 per year (entry level, SA)',
  remoteFriendly: 'Hybrid',
  difficulty: 'Beginner',
  faqs: [
    {
      q: 'What is the difference between a project coordinator and a project manager?',
      a: 'A coordinator runs the operational machinery: schedule updates, meeting minutes, risk register maintenance, stakeholder communication. A project manager owns delivery: scope decisions, budget control, escalation, and overall accountability. Coordinator to manager is one of the most natural progressions in corporate.',
    },
    {
      q: 'CAPM, PRINCE2, or Google Project Management Certificate first?',
      a: 'For SA corporate environments, PRINCE2 Foundation has the highest recognition in government and financial services. CAPM is more international. Google PM is the most accessible if you are entirely self-funded. Pick based on the industry you are targeting and your budget.',
    },
    {
      q: 'Do I need to know JIRA before applying?',
      a: 'Yes for any IT or tech-adjacent role. JIRA fluency is the most commonly listed tool requirement in SA project coordinator job specs. The Atlassian University free training plus a few hours of practice in a free JIRA Cloud account is enough to interview confidently.',
    },
    {
      q: 'Can a project coordinator work remotely?',
      a: 'Hybrid is the SA norm because the role often involves on-site meeting facilitation and informal corridor conversations that move projects forward. Fully remote PC roles exist at distributed tech companies but are less common at traditional corporates.',
    },
    {
      q: 'Is project coordination a good route into Scrum Master?',
      a: 'Yes, especially in tech and banking. Coordinators with Agile fluency are often the natural pool that Scrum Master roles get filled from. Pursuing PSM I or CSM while in a coordinator role signals readiness for the move.',
    },
    {
      q: 'How do I get coordinator experience without a project management role?',
      a: 'Reframe past responsibilities as projects with scope, timeline, stakeholders, and outcomes. Volunteering as a project lead at a community organisation, NGO, or church event produces real coordination artefacts (plans, status reports, post-mortems) you can show at interview.',
    },
  ],
  firstNinetyDays: [
    'Week one is mapping the project landscape: who the project sponsor is, who the stakeholders are, where the project plan lives, what the current risks and issues look like, and which ceremonies you are expected to attend',
    'By week three you should be running the recurring meetings: capturing minutes, logging actions, updating the schedule, and circulating status updates without being asked',
    'Month two: take ownership of the risk register, the action log, and one workstream of stakeholder communication. Start producing the weekly status report yourself for the project manager to review',
    'By month three expect to be facilitating ceremonies (standup, sprint review, retrospective) independently and chasing dependencies across teams without escalation',
    'Build a habit of "no surprise Fridays": every project meeting on Friday should contain zero updates a stakeholder has not already heard during the week. Coordinators who pre-empt surprises become trusted very quickly',
  ],
  commonMistakes: [
    {
      mistake: 'Using "manager" language without owning manager-level decisions',
      fix: 'A coordinator coordinates. Do not present yourself as having owned scope, budget, or escalation calls if a project manager actually owned them. Senior interviewers spot the inflation immediately.',
    },
    {
      mistake: 'Writing minutes nobody reads',
      fix: 'Minutes are useless if they document discussion but miss decisions and actions. Capture three things ruthlessly: decisions made, actions assigned, and items still open. The chronological narrative is optional.',
    },
    {
      mistake: 'Treating JIRA, Asana, and MS Project as interchangeable',
      fix: 'They have different mental models. Become genuinely fluent in one (whichever your target employers use most) rather than shallowly aware of all three. Most SA tech roles require JIRA specifically.',
    },
    {
      mistake: 'Avoiding hard conversations with late stakeholders',
      fix: 'A coordinator who silently absorbs slipping deadlines becomes the person blamed when the project misses. Document, escalate appropriately, and keep the conversation factual rather than emotional.',
    },
    {
      mistake: 'Treating Agile and Waterfall as opposing camps',
      fix: 'Most SA corporates use both, often in the same programme. Be fluent in the language of each, and adapt to the team you are joining rather than evangelising one approach.',
    },
  ],
};
