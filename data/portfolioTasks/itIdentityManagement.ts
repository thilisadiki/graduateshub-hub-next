import type { PortfolioTask } from '@/types';

export const itIdentityManagementTasks: PortfolioTask[] = [
  {
    id: 'it-iam-joiner-mover-leaver',
    categoryId: 'it',
    topicId: 'it-identity-management',
    level: 'beginner',
    title: 'Joiner, Mover, Leaver Checklist',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Document the user lifecycle the way an SA corporate IAM team would on day one.',
    scenario:
      'A SA fintech with 80 employees has been creating user accounts manually with no checklist. New starters miss systems they need, leavers retain access for weeks, and internal moves leave permissions sprawling. The IT manager asks you to standardise the process.',
    brief:
      'Produce a complete joiner, mover, and leaver process pack. Each scenario must list every system to update, who is accountable, the SLA, and the audit evidence captured.',
    deliverables: [
      'A joiner checklist covering: AD account, email, group memberships, MFA enrolment, laptop assignment, software licences, and induction tasks',
      'A mover checklist covering: revoking old group memberships, granting new ones, rotating shared mailbox access, and asset reallocation',
      'A leaver checklist covering: account disable timing, mailbox forwarding, OneDrive content handling, MFA token revocation, and asset return',
      'A short policy paragraph stating the SLA for each scenario and the audit evidence retained for compliance',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Most security incidents in SA SMEs stem from leaver accounts that were never disabled. Senior auditors look for clear timing rules: a leaver account should be disabled (not deleted) within 24 hours, with a defined retention period before deletion.',
    rubric: [
      { key: 'completeness', label: 'Coverage Completeness', description: 'Do the checklists cover every realistic system and step in the lifecycle?', weight: 30 },
      { key: 'accountability', label: 'Accountability Mapping', description: 'Is each step assigned to a clear owner with an SLA?', weight: 25 },
      { key: 'security', label: 'Security Discipline', description: 'Are the timing rules defensible, especially for leavers and movers?', weight: 25 },
      { key: 'audit', label: 'Audit Evidence', description: 'Is the audit evidence captured useful for an external reviewer?', weight: 20 },
    ],
    skillsProven: ['Identity lifecycle', 'Joiner-mover-leaver', 'Audit evidence', 'IAM policy'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-iam-group-policy-design',
    categoryId: 'it',
    topicId: 'it-identity-management',
    level: 'intermediate',
    title: 'Group Policy Design for a Small Office',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Design a clean Active Directory OU and Group Policy structure for a 50-user office.',
    scenario:
      'A 50-user SA professional services firm runs Windows Active Directory but has no formal Group Policy strategy. Every new GPO is created ad hoc and applied at the domain root. The IT manager wants a redesign so policies are scoped, layered, and auditable.',
    brief:
      'Design a Group Policy strategy: an OU structure, a GPO inheritance plan, and the specific policies to apply at each layer. Cover security, application configuration, and user experience.',
    deliverables: [
      'An OU structure diagram or text representation showing how users and computers are organised by department, role, and location',
      'A GPO matrix listing each GPO, the OU it links to, the settings it enforces, and the rationale',
      'A short security baseline section covering at least: password policy, account lockout, screen lock, USB device restrictions, and PowerShell logging',
      'A change management note describing how new GPOs get reviewed, tested, and rolled out without breaking production',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Stacking GPOs at the domain root is the lazy way; layered GPOs scoped to OUs are the professional way. Use loopback processing only when you can articulate why.',
    rubric: [
      { key: 'structure', label: 'OU Structure', description: 'Does the OU hierarchy reflect real organisational logic and support delegation?', weight: 25 },
      { key: 'gpo-design', label: 'GPO Layering', description: 'Are GPOs scoped at the right levels, with sensible inheritance and clear rationale?', weight: 30 },
      { key: 'security', label: 'Security Baseline', description: 'Are the security settings appropriate for a 50-user SA office?', weight: 25 },
      { key: 'change', label: 'Change Management', description: 'Is the rollout process defensible against breaking change risk?', weight: 20 },
    ],
    skillsProven: ['Active Directory', 'Group Policy', 'OU design', 'Security baselines'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-iam-access-audit-cleanup',
    categoryId: 'it',
    topicId: 'it-identity-management',
    level: 'advanced',
    title: 'Access Audit and Cleanup Plan',
    difficulty: 'Advanced',
    estimatedHours: '4 to 5 hours',
    tagline: 'Plan a quarterly access review programme that survives an external audit.',
    scenario:
      'A SA insurer has just failed its first external IT audit on identity and access management. Findings include: 14 percent of accounts are stale, dozens of users hold permissions to systems they no longer need, and there is no documented quarterly access review. The CIO wants a plan to fix it inside one quarter.',
    brief:
      'Design a recurring access governance programme. Cover the discovery phase (finding stale accounts and over-permissioned users), the review process, the remediation steps, and the ongoing controls.',
    deliverables: [
      'A discovery plan defining which queries and tools to run against AD, M365, and key business systems to find stale and over-permissioned accounts',
      'A quarterly access review process: who reviews, what evidence they need, how dispute resolution works, and what the timeline looks like',
      'A remediation playbook covering disable-then-delete timing, ownership transfer, and exception handling',
      'A KPI dashboard sketch listing the metrics the CIO would see monthly to know the programme is working',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Auditors care about evidence, not intentions. Every step must produce an artefact (a query log, a manager attestation, a remediation ticket) that an external reviewer can sample. Aim for that bar.',
    rubric: [
      { key: 'discovery', label: 'Discovery Logic', description: 'Are the queries credible, and do they cover the systems where stale access typically lives?', weight: 25 },
      { key: 'process', label: 'Review Process', description: 'Is the quarterly review repeatable, fair, and audit-defensible?', weight: 30 },
      { key: 'remediation', label: 'Remediation Realism', description: 'Does the playbook account for production risk when removing access?', weight: 20 },
      { key: 'metrics', label: 'KPI Quality', description: 'Are the metrics ones a CIO would actually watch, with credible target levels?', weight: 25 },
    ],
    skillsProven: ['Access governance', 'Audit response', 'Stale account remediation', 'KPI design'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
