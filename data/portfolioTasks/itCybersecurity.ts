import type { PortfolioTask } from '@/types';

export const itCybersecurityTasks: PortfolioTask[] = [
  {
    id: 'it-sec-phishing-awareness-pack',
    categoryId: 'it',
    topicId: 'it-cybersecurity-fundamentals',
    level: 'beginner',
    title: 'Phishing Awareness Training Pack',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a phishing awareness pack that real SA staff would actually engage with.',
    scenario:
      'A 150-person SA medical scheme has had three near-miss phishing incidents in the last six months, including one where a finance team member nearly paid an invoice rerouted via business email compromise. The IT manager wants a simple awareness pack to roll out to all staff.',
    brief:
      'Produce a complete phishing awareness training pack: a one-page staff guide, a five-question quiz, three sample phishing emails for analysis, and a reporting workflow.',
    deliverables: [
      'A one-page staff guide covering: how to spot phishing, the four common SA attack patterns (BEC, fake SARS, fake banking, fake DHL), and what to do if you clicked something',
      'Three annotated sample phishing emails (BEC, banking lookalike, fake delivery), each with the red flags called out and a teaching paragraph',
      'A five-question multiple-choice quiz suitable for the company learning management system',
      'A reporting workflow describing how staff escalate suspected phishing, who triages it, and what feedback they get back',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Generic phishing training fails because the examples feel American. The strongest SA phishing awareness uses local context: SARS letterhead, Capitec login pages, Takealot order confirmations. Pick local examples that staff will actually recognise.',
    rubric: [
      { key: 'realism', label: 'Local Realism', description: 'Are the examples grounded in SA threats real staff would encounter?', weight: 30 },
      { key: 'usability', label: 'Staff Usability', description: 'Could a real staff member read the guide once and remember the key signals?', weight: 25 },
      { key: 'workflow', label: 'Reporting Workflow', description: 'Is the reporting path simple enough that staff will actually use it?', weight: 25 },
      { key: 'quiz', label: 'Quiz Quality', description: 'Does the quiz reinforce the right behaviours without being trivially easy?', weight: 20 },
    ],
    skillsProven: ['Phishing awareness', 'Security training design', 'Threat realism', 'Incident reporting workflow'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-sec-vulnerability-assessment',
    categoryId: 'it',
    topicId: 'it-cybersecurity-fundamentals',
    level: 'intermediate',
    title: 'Vulnerability Assessment Report',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Run and write up a vulnerability assessment for an SA SME the way an external consultant would.',
    scenario:
      'A 60-person SA architecture firm has never had a formal vulnerability assessment. The directors authorise an internal review covering perimeter exposure, internal network hygiene, endpoint patching, and basic cloud configuration. You will write the report.',
    brief:
      'Produce a vulnerability assessment report. You may use scenario data (assume scan output of common findings) or document a real assessment of a personal lab. The report must read like a deliverable an external consultant would charge for.',
    deliverables: [
      'An executive summary (under 400 words) covering the top three risks and the recommended priority order for remediation',
      'A findings table listing at least 10 findings with: title, severity (Critical / High / Medium / Low), CVSS-style score or rationale, asset affected, evidence (sanitised), and recommended fix',
      'A remediation plan grouping findings into Quick Wins (under 1 week), Medium-Term (1-3 months), and Strategic (3-12 months) with effort estimates',
      'An appendix listing the methodology used and the tools applied (Nessus, OpenVAS, internal scripts, manual checks) with one-line descriptions',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A vulnerability assessment report that lists 200 findings is useless. The skill is prioritisation: separating the "fix this week" issues from the "consider in next architecture review" ones. Show that judgment.',
    rubric: [
      { key: 'exec-summary', label: 'Executive Summary', description: 'Could a non-technical director understand the risk and decide the priority from the summary alone?', weight: 25 },
      { key: 'findings', label: 'Findings Quality', description: 'Are findings credible, scored consistently, and supported by evidence?', weight: 30 },
      { key: 'prioritisation', label: 'Prioritisation', description: 'Is the Quick Wins / Medium / Strategic split sensible and defensible?', weight: 25 },
      { key: 'methodology', label: 'Methodology', description: 'Is the methodology section honest about what was and was not assessed?', weight: 20 },
    ],
    skillsProven: ['Vulnerability assessment', 'Risk prioritisation', 'CVSS scoring', 'Security reporting'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-sec-incident-response-playbook',
    categoryId: 'it',
    topicId: 'it-cybersecurity-fundamentals',
    level: 'advanced',
    title: 'Incident Response Playbook for Ransomware',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Design an end-to-end ransomware response playbook a small IT team could actually execute.',
    scenario:
      'A SA manufacturer of 180 staff has watched two competitors get hit by ransomware in the last year. The CIO has a small IT team (4 people) and asks for a credible incident response playbook. The playbook must work without retainer-level external support, while being clear about when to escalate.',
    brief:
      'Produce a complete ransomware incident response playbook covering preparation, detection, containment, eradication, recovery, and post-incident review. The playbook must be executable by 4-person team in a real incident.',
    deliverables: [
      'A preparation section: what controls, backups, and contact lists must be in place before an incident',
      'A detection and triage workflow showing the signals that trigger the playbook and the first 60 minutes of response',
      'A containment and eradication section covering: network isolation steps, endpoint quarantine, credential rotation, and the criteria for escalating to external responders',
      'A recovery section covering: restore decisions, ransom payment policy, communications to staff and customers, and the formal post-incident review checklist',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Real ransomware response is messy. The playbook must address questions teams actually face under pressure: do we shut down everything, do we pay, do we tell SAPS, do we tell the regulator under POPIA. State a position even if you disagree with it later, so the team has something to follow.',
    rubric: [
      { key: 'preparation', label: 'Preparation Discipline', description: 'Are the prep controls realistic for a 4-person team in an SA SME?', weight: 25 },
      { key: 'first-hour', label: 'First-Hour Response', description: 'Does the triage flow guide the team through the chaotic opening hour?', weight: 25 },
      { key: 'containment', label: 'Containment Realism', description: 'Are containment steps detailed enough to execute, with clear escalation thresholds?', weight: 25 },
      { key: 'aftermath', label: 'Recovery and Comms', description: 'Does the recovery section address ransom, regulators, and stakeholders honestly?', weight: 25 },
    ],
    skillsProven: ['Incident response', 'Ransomware containment', 'Crisis communication', 'POPIA breach response'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
