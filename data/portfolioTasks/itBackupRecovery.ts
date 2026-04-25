import type { PortfolioTask } from '@/types';

export const itBackupRecoveryTasks: PortfolioTask[] = [
  {
    id: 'it-bdr-321-strategy',
    categoryId: 'it',
    topicId: 'it-backup-disaster-recovery',
    level: 'beginner',
    title: '3-2-1 Backup Strategy Document',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a defensible backup strategy for an SA SME using the 3-2-1 rule.',
    scenario:
      'A 25-person SA design agency has been backing up project files to a single external hard drive that lives in the office. After watching a competitor lose six months of work to a fire, the directors want a proper backup strategy. They have heard of "3-2-1" and want it documented.',
    brief:
      'Produce a complete backup strategy document applying the 3-2-1 rule (3 copies, 2 different media, 1 offsite). Cover what gets backed up, the schedule, the retention, the testing cadence, and the cost.',
    deliverables: [
      'A scope statement listing what gets backed up (file shares, M365 mailboxes, design assets, accounting data) and what does not (reasoning required for any exclusion)',
      'A schedule table showing for each data type: backup frequency, retention period, primary location, secondary location, and offsite location',
      'A cost summary in rands covering the recommended tooling, storage, and licensing for the first three years',
      'A monthly testing cadence describing how restores are verified and what evidence is captured',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A backup that has never been restored is not a backup, it is a hope. Document the testing cadence with as much rigour as the backup schedule, and treat unverified backups as untested.',
    rubric: [
      { key: 'rule', label: '3-2-1 Application', description: 'Does the strategy genuinely meet the 3-2-1 rule across all critical data classes?', weight: 30 },
      { key: 'scope', label: 'Scope Discipline', description: 'Are inclusions and exclusions defended? Is M365 covered (since most SMEs forget it)?', weight: 25 },
      { key: 'cost', label: 'Cost Realism', description: 'Is the cost summary credible for a 25-person SA SME, and free of vendor sticker shock?', weight: 20 },
      { key: 'testing', label: 'Testing Discipline', description: 'Is the testing cadence specific, evidenced, and realistic to maintain?', weight: 25 },
    ],
    skillsProven: ['Backup strategy', '3-2-1 rule', 'Restore testing', 'Backup costing'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-bdr-tabletop-exercise',
    categoryId: 'it',
    topicId: 'it-backup-disaster-recovery',
    level: 'intermediate',
    title: 'Disaster Recovery Tabletop Exercise',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Design a tabletop exercise that surfaces the gaps in a SA SME\'s disaster recovery plan.',
    scenario:
      'A SA logistics company has a written DR plan but has never rehearsed it. The IT manager wants you to design and document a tabletop exercise: a simulated disaster scenario, the team that runs it, and the format for capturing findings.',
    brief:
      'Design a complete tabletop exercise. Pick a disaster scenario, write the injects, document the participant roles, and design the after-action review template.',
    deliverables: [
      'A scenario brief describing the simulated disaster (e.g., "Saturday 02:00 the primary server room is flooded"), the timeline, and the assumed business impact',
      'A series of at least 6 injects (events that get introduced during the exercise), each with timing, the team it targets, and the response expected',
      'Participant role cards for at least 5 roles (IT lead, Comms lead, Exec sponsor, Operations, External vendor) with each role\'s objectives and constraints',
      'An after-action review template covering: what worked, what failed, gaps in the plan, action items with owners and dates',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A tabletop is not a fire drill. The point is not to "win" but to find the gaps in the plan. Inject real frustrations: people on leave, vendors not answering, a misplaced offsite tape, a missed comms channel. The harder the exercise, the more it teaches.',
    rubric: [
      { key: 'scenario', label: 'Scenario Realism', description: 'Is the disaster plausible and does it stress real parts of the business?', weight: 25 },
      { key: 'injects', label: 'Inject Quality', description: 'Do the injects pressure-test the plan rather than just narrate the disaster?', weight: 30 },
      { key: 'roles', label: 'Role Design', description: 'Are roles distinct, with realistic constraints and decision authority?', weight: 20 },
      { key: 'review', label: 'After-Action Quality', description: 'Will the review template surface concrete improvements rather than vague feel-good notes?', weight: 25 },
    ],
    skillsProven: ['DR exercise design', 'Tabletop facilitation', 'Inject design', 'After-action review'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-bdr-business-continuity-plan',
    categoryId: 'it',
    topicId: 'it-backup-disaster-recovery',
    level: 'advanced',
    title: 'Business Continuity Plan with RTO and RPO Tiers',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Build a tiered business continuity plan that finance leaders will actually fund.',
    scenario:
      'A 350-person SA financial services firm needs a business continuity plan that satisfies its regulator (FSCA) and its insurers. The CIO wants tiered RTO and RPO targets per business function, a defended cost, and a clear difference between what the company recovers in 4 hours, 24 hours, and 72 hours.',
    brief:
      'Produce a complete business continuity plan. Tier business functions by recovery priority, define RTO and RPO per tier, design the technical solution per tier, and present the cost.',
    deliverables: [
      'A business impact analysis (BIA) listing the top 15 business functions, their tier (1 to 3), and the rationale for placement',
      'A tier definition table showing for each tier: RTO, RPO, technical solution (hot standby, warm replica, restore-from-backup), and the cost band',
      'A recovery runbook outline showing the first 24 hours of recovery: who decides what is invoked, who communicates, and the parallel workstreams',
      'A funding case summary suitable for an exco audience showing the cost of the plan versus the cost of an unplanned outage',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The mistake junior IT people make is putting everything in Tier 1. Real BIA work forces uncomfortable trade-offs: not every system is hot-standby-worthy. Show that you can have the conversation with a CFO about the cost difference between 4-hour RTO and 24-hour RTO.',
    rubric: [
      { key: 'bia', label: 'BIA Discipline', description: 'Are functions tiered honestly, with defensible reasoning for placement?', weight: 25 },
      { key: 'tiers', label: 'Tier Coherence', description: 'Do the RTO, RPO, technical solution, and cost actually align per tier?', weight: 30 },
      { key: 'runbook', label: 'Runbook Clarity', description: 'Is the first-24-hour runbook actionable under pressure?', weight: 20 },
      { key: 'funding', label: 'Funding Case', description: 'Could a CFO sign off the plan from the funding case alone?', weight: 25 },
    ],
    skillsProven: ['Business continuity', 'RTO and RPO design', 'BIA execution', 'Recovery runbook design'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
