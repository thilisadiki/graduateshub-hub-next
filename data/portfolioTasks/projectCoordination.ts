import type { PortfolioTask } from '@/types';

export const projectCoordinationTasks: PortfolioTask[] = [
  {
    id: 'pc-project-plan-charter',
    categoryId: 'business-analysis',
    topicId: 'project-coordination',
    level: 'beginner',
    title: 'Project Plan with Charter and Gantt',
    difficulty: 'Beginner',
    estimatedHours: '3 to 4 hours',
    tagline: 'Produce a complete project plan for a real or fictional initiative, the way a junior coordinator does on day one.',
    scenario:
      'You have just joined a SA fintech as a junior project coordinator. Your project manager hands you a brief for a new internal initiative ("Migrate the customer onboarding form from PDF to a digital flow") and asks for a complete project plan by Friday.',
    brief:
      'Produce the artefacts a project manager would expect: a one-page project charter, a milestone schedule, a Gantt chart (sketched), and a budget summary. Make sensible assumptions about scope, team size, and timeline; document them.',
    deliverables: [
      'A one-page project charter covering: business case summary, objectives (SMART), in-scope and out-of-scope, key deliverables, stakeholders, success criteria, assumptions, and constraints',
      'A milestone schedule with at least eight milestones across initiation, planning, execution, and closure phases',
      'A Gantt chart description (text-based or linked sketch) showing dependencies and the critical path',
      'A budget summary with at least three cost categories (people, software, contingency) and a defended contingency percentage',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Real coordinators document assumptions because they do not know everything on day one. Where you make a guess, mark it as an assumption. Senior PMs respect that more than guessing confidently.',
    rubric: [
      { key: 'charter', label: 'Charter Quality', description: 'Does the charter contain all standard sections, with SMART objectives and clear scope boundaries?', weight: 30 },
      { key: 'schedule', label: 'Schedule Coherence', description: 'Are milestones logical, dependencies correct, and the critical path identified?', weight: 30 },
      { key: 'budget', label: 'Budget Realism', description: 'Is the budget reasonable for the project size, with a defended contingency?', weight: 20 },
      { key: 'assumptions', label: 'Assumption Discipline', description: 'Are assumptions and constraints called out explicitly rather than buried or guessed?', weight: 20 },
    ],
    skillsProven: ['Project planning', 'Charter writing', 'Schedule development', 'Budget estimation'],
    relatedRoadmapIds: ['project-coordinator', 'business-analyst'],
  },
  {
    id: 'pc-status-report-library',
    categoryId: 'business-analysis',
    topicId: 'project-coordination',
    level: 'intermediate',
    title: 'Status Report Library: Three Reports Across the Lifecycle',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Write three status reports for the same project at different phases. Show how communication shifts as a project matures.',
    scenario:
      'A weekly status report is the deliverable a junior coordinator produces most often. Hiring managers want to see whether your reports actually communicate progress and risk, or whether they read like padding. The same project at different phases needs different emphasis.',
    brief:
      'Pick a fictional 6-month project. Produce three weekly status reports: one in early planning (week 3), one in mid-execution (week 14), and one in pre-closure (week 24). Each report should reflect what genuinely matters at that phase.',
    deliverables: [
      'Three status reports, each one page, with consistent sections: RAG status (overall, scope, schedule, cost, quality, risk), highlights since last week, planned for next week, decisions needed, top risks, and key issues',
      'A short paragraph before the reports explaining what shifts in emphasis as the project moves through its lifecycle',
      'For at least one of the reports, explicitly model an "amber" or "red" status with a clear explanation of why and what is being done about it',
      'A reflection paragraph: which report was the hardest to write, and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A status report is not a meeting agenda or a list of activities. It is an executive answer to "are we on track, and if not, what are you doing about it?" If a stakeholder cannot answer that after reading 30 seconds of your report, the report has failed.',
    rubric: [
      { key: 'clarity', label: 'Executive Clarity', description: 'Could a busy executive answer "are we on track" within 30 seconds of opening each report?', weight: 30 },
      { key: 'progression', label: 'Phase-Appropriate Emphasis', description: 'Does the emphasis genuinely shift between planning, execution, and closure?', weight: 25 },
      { key: 'rag-honesty', label: 'RAG Honesty', description: 'Is at least one report honestly amber or red, with a credible recovery plan?', weight: 25 },
      { key: 'consistency', label: 'Consistency', description: 'Are the reports consistently structured, free of jargon, and free of padding?', weight: 20 },
    ],
    skillsProven: ['Status reporting', 'RAG status assessment', 'Executive communication', 'Project transparency'],
    relatedRoadmapIds: ['project-coordinator', 'business-analyst'],
  },
  {
    id: 'pc-sprint-facilitation-pack',
    categoryId: 'business-analysis',
    topicId: 'project-coordination',
    level: 'advanced',
    title: 'Sprint Facilitation Pack: Templates a New Coordinator Can Use Day One',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build the agendas and templates for a full Scrum cycle that a brand new coordinator could use without training.',
    scenario:
      'Your SA tech company just hired three new project coordinators in one quarter. The PMO lead asks you to produce a "facilitation pack" so each new joiner can run sprint ceremonies without learning by trial and error. The pack must work in your specific corporate context, not generic Scrum theory.',
    brief:
      'Produce facilitation templates for a complete sprint cycle: sprint planning, daily standup, sprint review, and retrospective. Each template must contain enough structure that a new coordinator can run the meeting without senior support.',
    deliverables: [
      'Four meeting templates, each with: purpose, attendees, time allocation, agenda with timing, facilitator scripts (what to say to open, redirect, and close), inputs required, outputs produced',
      'A "first-time coordinator" coaching note for each ceremony, identifying the three most common mistakes and how to avoid them',
      'A retrospective format library: at least three retrospective formats (e.g., Start-Stop-Continue, 4Ls, Sailboat) and guidance on when to use which',
      'A short policy on remote and hybrid facilitation, covering camera norms, async input, and how to keep distributed team members engaged',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The test of a good facilitation pack is not whether it sounds professional. It is whether a nervous new coordinator could open it five minutes before standup and confidently run the meeting. Aim for that bar.',
    rubric: [
      { key: 'usability', label: 'Day-One Usability', description: 'Could a new coordinator actually run these meetings using only this pack?', weight: 30 },
      { key: 'completeness', label: 'Coverage Completeness', description: 'Do all four ceremonies have agendas, scripts, inputs, and outputs?', weight: 25 },
      { key: 'coaching', label: 'Coaching Quality', description: 'Are the common mistakes real ones, not generic advice?', weight: 25 },
      { key: 'context', label: 'Hybrid Context', description: 'Does the pack reflect modern hybrid SA team realities, not pre-2020 in-person Scrum?', weight: 20 },
    ],
    skillsProven: ['Agile facilitation', 'Meeting design', 'Scrum ceremonies', 'Coaching new joiners'],
    relatedRoadmapIds: ['project-coordinator', 'business-analyst'],
  },
];
