import type { PortfolioTask } from '@/types';

export const qaTestingTasks: PortfolioTask[] = [
  {
    id: 'qa-bug-report-library',
    categoryId: 'software-development',
    topicId: 'quality-assurance-testing',
    level: 'beginner',
    title: 'Bug Report Library: Document 5 Real Defects',
    difficulty: 'Beginner',
    estimatedHours: '3 to 4 hours',
    tagline: 'Find and document five real bugs in a public South African app or website using a professional bug report template.',
    scenario:
      'You are applying for junior QA roles. Hiring managers want proof you can write a bug report that a developer can actually act on. Without work experience, your portfolio is the only evidence.',
    brief:
      'Pick a publicly accessible SA app or website (Takealot, FNB or Capitec banking app, MyGov, gov.za services, a local retailer). Use it the way a curious user would, looking for genuine defects. Document each bug as a structured report.',
    deliverables: [
      'Five bug reports, each containing: title, environment (browser, OS, app version), preconditions, steps to reproduce, expected result, actual result, severity, and priority',
      'For at least three of the bugs, include a screenshot or short screen recording link',
      'A short cover note explaining your overall approach: which areas you focused on, which test heuristics you used (boundary values, error handling, navigation), and what you would test next if you had more time',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Severity is technical impact (does it crash, lose data, look broken). Priority is business urgency (how soon must it be fixed). They are independent. Be ready to defend why you assigned each one separately.',
    rubric: [
      { key: 'reproduction', label: 'Reproduction Quality', description: 'Could a developer reproduce the bug from your steps without asking follow-up questions?', weight: 35 },
      { key: 'classification', label: 'Severity vs Priority', description: 'Are severity and priority assigned independently and defended with reasoning?', weight: 25 },
      { key: 'coverage', label: 'Test Coverage', description: 'Do the bugs reflect varied test heuristics, not just one type of issue?', weight: 25 },
      { key: 'professional', label: 'Professional Polish', description: 'Are the reports formatted consistently, free of vague language, and ready to paste into JIRA?', weight: 15 },
    ],
    skillsProven: ['Bug reporting', 'Test heuristics', 'Severity classification', 'Defect lifecycle'],
    relatedRoadmapIds: ['junior-qa-tester'],
  },
  {
    id: 'qa-exploratory-test-charter',
    categoryId: 'software-development',
    topicId: 'quality-assurance-testing',
    level: 'intermediate',
    title: 'Exploratory Test Charter & Session Report',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Run a 90-minute exploratory test session on a real app and document it like a working tester.',
    scenario:
      'Most SA QA teams now use a mix of scripted and exploratory testing. Hiring managers want testers who can find bugs that pre-written test cases miss. The deliverable here is the structured session note that proves you can do that.',
    brief:
      'Pick a SA web app or mobile app you have access to. Write a charter (a one-paragraph mission for the session), then run an actual 90-minute exploratory test session, then write up a session report.',
    deliverables: [
      'A test charter: a one-paragraph mission statement (what you are exploring, why, and what you are not exploring)',
      'A session report including: areas covered, areas skipped and why, test ideas you explored, defects found (with full bug report format), and questions raised for the team',
      'A timesheet breakdown: setup time, test design, execution, bug investigation, reporting (the standard "session-based test management" breakdown)',
      'A reflection paragraph: what surprised you, what you would charter next, and what you learned about the product',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Exploratory does not mean unstructured. The charter constrains what you focus on. The session report proves the work. If you cannot remember what you did 90 minutes after the session, it is not a useful artefact.',
    rubric: [
      { key: 'charter', label: 'Charter Discipline', description: 'Is the charter focused, specific, and an actual constraint on your testing?', weight: 25 },
      { key: 'session', label: 'Session Quality', description: 'Does the session report document real test ideas explored and not just bugs found?', weight: 30 },
      { key: 'defects', label: 'Defect Reporting', description: 'Are defects logged in proper bug report format, not vague observations?', weight: 25 },
      { key: 'reflection', label: 'Reflection', description: 'Does the reflection show genuine learning about the product and the testing approach?', weight: 20 },
    ],
    skillsProven: ['Exploratory testing', 'Session-based test management', 'Test charters', 'Investigative testing'],
    relatedRoadmapIds: ['junior-qa-tester'],
  },
  {
    id: 'qa-manual-to-automation-plan',
    categoryId: 'software-development',
    topicId: 'quality-assurance-testing',
    level: 'advanced',
    title: 'Manual to Automation Migration Plan',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Pick five manual test cases, plan their automation, and defend why these five.',
    scenario:
      'Your team has 100 manual test cases and limited automation engineering time. The QA lead asks you to recommend which five to automate first. The wrong answer is "all of them eventually". The right answer demonstrates the cost-versus-benefit thinking expected of a senior tester.',
    brief:
      'From a hypothetical login, search, checkout, and admin module suite, pick five test cases to automate first. Write the automation specification for each in a way that an automation engineer could implement.',
    deliverables: [
      'A prioritisation matrix scoring candidate test cases on: execution frequency, automation cost, stability, and risk-of-failure',
      'Five automation specs, each containing: test name, preconditions, automation framework recommendation (Selenium, Cypress, Playwright), test steps in pseudocode, key assertions, test data strategy, and expected runtime',
      'A short paragraph explaining what you deliberately did not automate and why (the "expensive to automate, low value" cases)',
      'A maintenance plan: how often these tests will need updating, who owns them, and what flake-rate is acceptable before they get muted',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Pseudocode is fine; you do not need to write real Selenium. The point is the thinking: which assertions matter, what test data setup is required, what flakiness risk you have introduced. A senior tester picks the boring repeatable cases first, not the exciting ones.',
    rubric: [
      { key: 'prioritisation', label: 'Prioritisation Logic', description: 'Are the five chosen cases the right candidates given the matrix? Is the scoring consistent?', weight: 30 },
      { key: 'specifications', label: 'Spec Quality', description: 'Could an automation engineer implement these without further clarification? Are the assertions correct?', weight: 30 },
      { key: 'tradeoffs', label: 'Trade-off Awareness', description: 'Is the "did not automate" list real and well reasoned, not a token afterthought?', weight: 20 },
      { key: 'maintenance', label: 'Maintenance Realism', description: 'Does the plan show awareness of test flakiness, ownership, and the cost of automated test maintenance?', weight: 20 },
    ],
    skillsProven: ['Test automation strategy', 'Cost-benefit analysis', 'Automation specification', 'Test maintenance planning'],
    relatedRoadmapIds: ['junior-qa-tester'],
  },
];
