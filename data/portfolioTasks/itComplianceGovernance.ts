import type { PortfolioTask } from '@/types';

export const itComplianceGovernanceTasks: PortfolioTask[] = [
  {
    id: 'it-compliance-popia-checklist',
    categoryId: 'it',
    topicId: 'it-compliance-governance',
    level: 'beginner',
    title: 'POPIA-Ready Data Handling Checklist',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Translate POPIA obligations into a practical IT data handling checklist for an SA SME.',
    scenario:
      'A 35-person SA recruitment agency has never formally documented how it handles personal information. Candidates submit ID numbers, qualifications, and references via email; data sits on shared drives indefinitely. The director wants a checklist that brings the agency into POPIA-acceptable practice without enterprise tooling.',
    brief:
      'Produce a POPIA-aligned data handling checklist for the agency. Cover collection, storage, access, retention, and disposal. Stay practical: this is for a 35-person SME, not a JSE-listed bank.',
    deliverables: [
      'A data inventory template listing the personal information categories the agency handles (CV data, ID copies, qualification copies, reference notes), the systems where each lives, and the lawful basis for processing',
      'A handling checklist covering: secure transfer (no email of ID numbers), storage location, access restriction, retention period, and disposal procedure for each category',
      'A staff guidance one-pager translating the POPIA principles into 10 day-to-day rules a recruitment consultant must follow',
      'A breach response section listing the steps to take if personal information is exposed: containment, internal reporting, Information Regulator notification timing, and data subject communication',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'POPIA compliance for an SME does not require expensive tooling. It requires habits: where data lives, who can see it, when it gets deleted. Aim for habits a real recruitment consultant can follow on a busy Friday.',
    rubric: [
      { key: 'inventory', label: 'Data Inventory', description: 'Is the inventory realistic for a recruitment agency, with correct lawful basis?', weight: 25 },
      { key: 'practical', label: 'Practical Discipline', description: 'Are the handling rules genuinely usable by a non-technical consultant?', weight: 30 },
      { key: 'staff', label: 'Staff Guidance', description: 'Could a new joiner read the one-pager and behave compliantly from day one?', weight: 25 },
      { key: 'breach', label: 'Breach Response', description: 'Is the breach workflow accurate to POPIA, with correct timing for Information Regulator notice?', weight: 20 },
    ],
    skillsProven: ['POPIA fundamentals', 'Data inventory', 'Retention policy', 'Breach response basics'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-compliance-iso27001-gap-analysis',
    categoryId: 'it',
    topicId: 'it-compliance-governance',
    level: 'intermediate',
    title: 'ISO 27001 Gap Analysis',
    difficulty: 'Intermediate',
    estimatedHours: '4 to 5 hours',
    tagline: 'Run a gap analysis against ISO 27001 controls for an SA SME considering certification.',
    scenario:
      'A 120-person SA fintech wants to pursue ISO 27001 certification within 18 months. The CIO has asked for a gap analysis to baseline where the company stands today. You have access to the company\'s existing IT policies and operational practice.',
    brief:
      'Produce a structured gap analysis against the Annex A controls of ISO 27001:2022. Group findings, prioritise remediation, and propose a 12-month roadmap.',
    deliverables: [
      'A gap analysis matrix covering at least 20 representative Annex A controls with: control name, current maturity (0 to 5), evidence available, gap description, and remediation owner',
      'A grouped findings summary calling out the top three control families with the largest gaps and the business risk of those gaps',
      'A 12-month remediation roadmap sequenced into Quick Wins (first 90 days), Foundational (months 4 to 9), and Pre-Audit (months 10 to 12)',
      'A short executive narrative (under 500 words) suitable for the exco describing the certification journey, cost band, and the role each function will play',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'ISO 27001 is not a tooling exercise. Most certification failures come from missing documented processes, missing audit evidence, and missing management review cadence. Score gaps with that lens, not just whether a tool is installed.',
    rubric: [
      { key: 'matrix', label: 'Gap Matrix Quality', description: 'Are controls scored realistically with credible evidence statements?', weight: 30 },
      { key: 'prioritisation', label: 'Prioritisation', description: 'Does the roadmap sequence remediation by risk and dependency rather than alphabet?', weight: 25 },
      { key: 'roadmap', label: 'Roadmap Realism', description: 'Is 12 months an achievable timeline given the gap depth?', weight: 25 },
      { key: 'executive', label: 'Executive Narrative', description: 'Could an exco approve the certification project on the strength of the narrative?', weight: 20 },
    ],
    skillsProven: ['ISO 27001', 'Gap analysis', 'Maturity scoring', 'Compliance roadmapping'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-compliance-audit-prep-pack',
    categoryId: 'it',
    topicId: 'it-compliance-governance',
    level: 'advanced',
    title: 'External IT Audit Preparation Pack',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Prepare a SA company for its first external IT audit without surprises.',
    scenario:
      'A SA medical scheme is about to undergo its first external IT audit by a Big Four firm. The CIO wants a preparation pack: the artefacts the audit team will request, the evidence the company already has, the gaps to close in the next 60 days, and the rehearsal walkthrough.',
    brief:
      'Produce an audit preparation pack covering evidence inventory, gap closure plan, walkthrough rehearsal, and the audit-day operating model.',
    deliverables: [
      'An evidence inventory mapping at least 25 expected audit requests (sample list: access reviews, change tickets, backup test logs, incident records, policy approvals) to the system or repository where the evidence lives, plus the named owner',
      'A gap closure plan listing the requests where evidence is missing or weak, with a 60-day remediation schedule',
      'A walkthrough rehearsal pack: a list of the 8 to 12 walkthrough conversations the audit team will run, the company representative for each, and a one-page briefing covering the questions likely asked',
      'An audit-day operating model: the war room setup, the request triage process, the response SLA, and the escalation path for difficult requests',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Audit teams hate two things: waiting for evidence, and inconsistent answers from different people. The preparation pack must produce fast evidence retrieval and ensure walkthrough representatives tell the same story.',
    rubric: [
      { key: 'inventory', label: 'Evidence Inventory', description: 'Is the inventory comprehensive, owner-mapped, and aligned to typical audit asks?', weight: 30 },
      { key: 'gaps', label: 'Gap Closure Realism', description: 'Are gaps prioritised by audit risk, not internal preference, and closeable in 60 days?', weight: 25 },
      { key: 'walkthrough', label: 'Walkthrough Discipline', description: 'Will representatives give consistent and credible answers?', weight: 25 },
      { key: 'operating-model', label: 'Audit-Day Operating Model', description: 'Will the war room actually deliver fast and consistent responses under pressure?', weight: 20 },
    ],
    skillsProven: ['Audit preparation', 'Evidence management', 'Walkthrough rehearsal', 'IT audit operating model'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
