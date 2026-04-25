import type { CareerRoadmap } from '@/types';

export const juniorQATesterRoadmap: CareerRoadmap = {
  id: 'junior-qa-tester',
  title: 'How to Become a Junior QA Tester',
  tagline: 'The most accessible entry point into a software career. No coding required to start.',
  category: 'software-engineering',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '4–8 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A practical roadmap for breaking into software quality assurance. Covers manual testing fundamentals, the software testing life cycle, Agile and Scrum, JIRA, and security testing basics. Built around the exact skills SA development teams test for in junior QA interviews.',
  overview:
    'QA testing is the most accessible path into a software career. Unlike development roles that require months of coding before you produce anything employable, you can write a competent bug report and design test cases after a few weeks of focused study. Every company that ships software, banks, retailers, fintechs, healthcare platforms, government systems, employs QA testers to make sure releases do not break in production.\n\nThe role rewards structured thinking and curiosity over coding ability. Junior QA testers in South Africa typically start with manual testing (designing test cases, executing them, and logging defects) before progressing into automation engineering. This roadmap is built around that progression: master the fundamentals first, build a credible portfolio of bug reports and test cases, then layer on tools like JIRA, Selenium, and security testing as you grow.',
  jobTitles: [
    'Junior QA Tester',
    'Software Tester',
    'QA Analyst',
    'Quality Assurance Engineer',
    'Manual Tester',
    'Junior Test Analyst',
  ],
  technicalSkills: [
    'Manual test case design and execution',
    'Bug reporting and defect lifecycle management',
    'Software testing life cycle (STLC) and SDLC',
    'Functional, regression, and integration testing',
    'JIRA and test management tools',
    'Agile Scrum testing practices',
    'Security testing fundamentals',
  ],
  softSkills: [
    'Attention to detail and structured thinking',
    'Curiosity and exploratory mindset',
    'Clear written bug reporting',
    'Constructive communication with developers',
  ],
  stages: [
    {
      number: 1,
      title: 'Build the Software Testing Foundation',
      duration: '4–6 weeks',
      description:
        'Before touching any tools, you need to understand what software testing is, why it exists, and the vocabulary the industry uses. Concepts like verification versus validation, the testing pyramid, defect severity versus priority, and the seven principles of testing all originate here. This is the same material the ISTQB Foundation Level certification covers, and almost every SA QA interview opens with questions from this body of knowledge.',
      courseIds: ['intro-software-testing', 'theory-software-testing'],
      milestone:
        'You can explain the testing principles, the difference between verification and validation, and the relationship between severity and priority in a bug report.',
    },
    {
      number: 2,
      title: 'Master Test Design and the Tester Mindset',
      duration: '6–8 weeks',
      description:
        'The diploma-level material in this stage takes you deep into how professional testers actually work: designing test cases from requirements, applying equivalence partitioning and boundary value analysis, writing exploratory test charters, and managing the full software testing life cycle (STLC). This is where you move from understanding theory to producing real artefacts that look like the work of a working QA tester.',
      courseIds: ['diploma-software-testing'],
      milestone:
        'You have designed and documented at least 30 test cases for a real application (a personal project, an open-source app, or a public website) using structured test design techniques.',
    },
    {
      number: 3,
      title: 'Learn Quality Management Beyond Testing',
      duration: '3–4 weeks',
      description:
        'Testing is one part of a wider quality discipline. Quality managers and senior QA leads think about defect prevention, process improvement, and quality metrics across the entire software development life cycle. Understanding this wider context, even at junior level, helps you frame your testing work in terms hiring managers care about: reducing risk, improving release confidence, and tracking quality trends over time.',
      courseIds: ['intro-software-quality-management'],
      milestone:
        'You can explain how QA fits within a broader software quality programme, and identify at least three metrics a QA team uses to measure release quality.',
    },
    {
      number: 4,
      title: 'Get Fluent in Agile and Scrum',
      duration: '4–5 weeks',
      description:
        'Almost every SA software team you join as a junior QA tester will operate in Agile, usually Scrum. You need to understand how testing happens within a sprint rather than at the end of a project, how QA contributes to story refinement and acceptance criteria, and what ceremonies like daily standup, sprint review, and retrospective look like in practice. This stage is what separates candidates who can talk about Agile from those who can actually function inside an Agile team.',
      courseIds: ['agile-essentials', 'scrum-developer-training', 'lean-agile-mindset'],
      milestone:
        'You can describe a complete Scrum sprint cycle, the role QA plays at each ceremony, and the difference between definition of ready and definition of done.',
    },
    {
      number: 5,
      title: 'Tools, Bug Tracking, and Security Testing',
      duration: '4–6 weeks',
      description:
        'JIRA is the issue and test management tool used by most SA development teams. Knowing your way around JIRA workflows, custom fields, and reporting is non-negotiable for a junior QA role. Pair this with security testing fundamentals (OWASP basics, common vulnerability classes, and security acceptance criteria) and you become a meaningfully more valuable hire than candidates with manual testing skills only.',
      courseIds: ['jira-architecture', 'secure-software-testing'],
      milestone:
        'You can navigate JIRA confidently, log a properly structured defect with all required fields, and identify at least five common security vulnerabilities that should be tested for in a web application.',
    },
  ],
  certifications: [
    {
      name: 'ISTQB Certified Tester Foundation Level (CTFL)',
      provider: 'ISTQB',
      free: false,
      why: 'The single most recognised QA credential globally and in South Africa. Almost every SA QA job advert mentions it. Exam costs roughly R3,000 to R5,000 and dramatically differentiates your CV.',
    },
    {
      name: 'Certified Scrum Master (CSM) or PSM I',
      provider: 'Scrum Alliance / Scrum.org',
      free: false,
      why: 'Optional but strong signal that you understand Agile delivery. PSM I from Scrum.org costs around R3,500 and is respected in SA tech.',
    },
    {
      name: 'Alison Diploma in Software Testing',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Useful as a visible credential while you study toward ISTQB.',
    },
  ],
  portfolioProjects: [
    'Bug report library: 10 real defects you have found in a public app or website, each with title, environment, steps to reproduce, expected vs actual, severity, and priority',
    'Test case suite: a documented set of 40 to 60 test cases covering positive, negative, and boundary conditions for a single application feature (e.g. a login or signup flow)',
    'Exploratory test charter and session report: pick a public app, run a 90 minute exploratory session, and document the charter, areas covered, defects found, and follow-up tests',
    'Regression test plan: write a regression strategy for a small project, identifying which test cases run on every release and why',
    'Manual to automated migration plan: pick five of your manual test cases and write a plan for how each would be automated using Selenium or Cypress, including the assertions and test data required',
  ],
  relatedRoadmapIds: ['web-developer', 'data-analyst', 'it-support-specialist'],
  salaryRange: 'R180,000 – R320,000 per year (entry level, SA)',
  remoteFriendly: 'Hybrid',
  difficulty: 'Beginner',
  faqs: [
    {
      q: 'Do I need to know how to code to become a QA tester?',
      a: 'Not at the start. Junior QA roles in SA are usually 80 percent manual testing where coding is not required. Once you progress toward automation engineering, basic Python, JavaScript, or Java becomes essential. Many testers grow into automation gradually over their first two years.',
    },
    {
      q: 'Is ISTQB Foundation Level really necessary?',
      a: 'For SA QA roles, effectively yes. Almost every job spec mentions it, recruiters filter on it, and interview questions are pulled directly from the syllabus. The exam costs roughly R3,000 to R5,000 and the study time is achievable in 4 to 6 weeks.',
    },
    {
      q: 'How is QA different from being a developer?',
      a: 'Developers build features; QA testers find risks before users do. QA mindset is exploratory, sceptical, and structured. The two roles complement each other in every Agile team but require different temperaments. If you enjoy spotting what could go wrong, QA suits you.',
    },
    {
      q: 'Will AI tools replace QA testers?',
      a: 'AI has automated some test data generation and basic regression scripts. It has not replaced exploratory testing, judgment about what to test, bug investigation, or user-centred quality thinking. Modern QA testers use AI as a tool rather than competing with it.',
    },
    {
      q: 'Manual testing or automation: which should I learn first?',
      a: 'Manual first, always. You cannot write good automated tests if you do not understand test design, equivalence partitioning, and risk-based testing manually. Most SA junior roles are explicitly manual or hybrid for the first 6 to 12 months.',
    },
    {
      q: 'What do I include in my QA portfolio without work experience?',
      a: 'Bug reports for public apps (Takealot, FNB app, government services) with full reproduction steps, a test case suite for any small app, and an exploratory test charter. Even a couple of well-documented bugs found in personal projects beats a CV claiming experience without artefacts.',
    },
  ],
  firstNinetyDays: [
    'Week one is product orientation: learning the application end to end as a user, reading the existing test cases and bug history, and getting access to JIRA, the test environment, and the test management tool',
    'By week three you should be executing existing regression test suites independently and logging clear, well-structured defects when you find them',
    'Month two: take ownership of testing for one feature area or one user story per sprint. Write your own test cases, execute them, and own the bug triage with the developer',
    'By month three expect to be participating in story refinement, contributing acceptance criteria, and starting to think about test automation candidates within your area',
    'Build a personal bug catalogue from your first day. Every defect you log is a learning artefact; the catalogue makes you faster at recognising patterns and writing better tests',
  ],
  commonMistakes: [
    {
      mistake: 'Treating QA as the easy entry path that does not need study',
      fix: 'QA is genuinely teachable but requires structured study. ISTQB Foundation level material is non-negotiable. Skipping it gets you screened out at the first interview question.',
    },
    {
      mistake: 'Logging bugs without proper reproduction steps',
      fix: 'Title, environment, preconditions, exact steps, expected vs actual, severity, priority. Every defect needs all of these. Sloppy bug reports are the fastest way to lose developer trust.',
    },
    {
      mistake: 'Jumping straight to Selenium before mastering manual testing',
      fix: 'You cannot automate what you cannot test manually. Spend at least the first six months on test design, equivalence partitioning, and exploratory testing before writing your first automated script.',
    },
    {
      mistake: 'Confusing severity and priority in interviews',
      fix: 'Severity is technical impact, priority is business urgency. They are independent. A typo on a public homepage is low severity but can be high priority. Get this right or expect a quick rejection.',
    },
    {
      mistake: 'Overpromising automation experience on the CV',
      fix: 'If you have written 5 Selenium scripts in a personal project, say that. Claiming "Selenium experience" without specifics gets you a live coding test you cannot pass. Be honest about your level and progression plan.',
    },
  ],
};
