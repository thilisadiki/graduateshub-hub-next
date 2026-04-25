import type { PortfolioTask } from '@/types';

export const itServiceManagementTasks: PortfolioTask[] = [
  {
    id: 'itsm-home-lab-documentation',
    categoryId: 'it',
    topicId: 'it-service-management',
    level: 'beginner',
    title: 'Home Lab Setup and Documentation',
    difficulty: 'Beginner',
    estimatedHours: '4 to 6 hours',
    tagline: 'Configure a small LAN at home and document it the way an IT professional documents production infrastructure.',
    scenario:
      'You have no IT work experience, but you have a router, a couple of devices, and access to free virtualisation software. SA IT support hiring managers consistently say a documented home lab is the single strongest proof an entry-level candidate can show.',
    brief:
      'Set up a small home network. Configure at minimum: a static IP on one device, port forwarding on the router, and a virtual machine. Then document the entire setup as if you were handing it over to a new IT support technician.',
    deliverables: [
      'A network topology diagram showing devices, IP scheme, subnet, gateway, and DNS configuration',
      'An asset register listing every device, its role, OS, IP, MAC, and purpose',
      'A configuration document explaining the router settings, the VM setup, and any firewall rules',
      'A simulated incident: pick one realistic failure (e.g., DHCP exhaustion, port conflict, DNS misconfiguration), describe the symptoms, and walk through how you would diagnose and resolve it',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Hiring managers do not need exotic hardware. A laptop, a phone, a router, and a free hypervisor (VirtualBox, Hyper-V) is enough. The quality of the documentation matters more than the complexity of the setup.',
    rubric: [
      { key: 'topology', label: 'Topology Clarity', description: 'Is the diagram clear, with consistent IP scheme and complete addressing information?', weight: 25 },
      { key: 'documentation', label: 'Documentation Discipline', description: 'Could a new technician operate this lab with only your documents? Is anything ambiguous?', weight: 30 },
      { key: 'incident', label: 'Troubleshooting Logic', description: 'Does the simulated incident reflect realistic symptoms, and is the diagnostic flow methodical?', weight: 25 },
      { key: 'fundamentals', label: 'IT Fundamentals', description: 'Are IP addressing, subnetting, and basic networking concepts used correctly?', weight: 20 },
    ],
    skillsProven: ['Network configuration', 'Topology documentation', 'IP addressing', 'Troubleshooting flows'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'itsm-itil-incident-log',
    categoryId: 'it',
    topicId: 'it-service-management',
    level: 'intermediate',
    title: 'ITIL-Compliant Incident Log',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Build a log of 10 realistic IT support tickets the way an ITIL-aligned helpdesk records them.',
    scenario:
      'Almost every SA corporate IT environment runs on ITIL processes: incidents, problems, changes, and service requests. Junior IT support roles spend a large part of every day inside an ITIL-aligned ticketing system. Hiring managers test whether you know the difference between an incident, a problem, and a service request.',
    brief:
      'Produce a sample incident log with 10 realistic tickets covering varied issue types and severities. Include the categorisation, prioritisation, resolution path, and SLA tracking the way ServiceNow, Freshservice, or Jira Service Management would.',
    deliverables: [
      'A ticket log table with columns: ticket ID, category (incident/problem/service request/change), title, reporter, environment, priority (P1-P4), severity, SLA target, current status, assignee, resolution summary, and resolution time',
      '10 tickets covering at least: account lockout, no internet, printer offline, software install, security incident, mailbox full, slow PC, application error, password reset, and a hardware failure',
      'A short narrative section explaining the difference between an incident, a problem, and a service request, with one example of each from your log',
      'A simple SLA table showing the response and resolution targets per priority level, and a comment on which of your tickets met SLA and which did not',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A ticket like "user cannot print" is an incident. The recurring root cause behind multiple "cannot print" incidents is a problem. The user requesting a brand new printer is a service request. Mixing these up signals you have not actually used an ITIL system, regardless of what your CV claims.',
    rubric: [
      { key: 'classification', label: 'ITIL Classification', description: 'Are tickets correctly categorised as incidents, problems, service requests, or changes?', weight: 30 },
      { key: 'realism', label: 'Ticket Realism', description: 'Do the tickets read like genuine SA helpdesk tickets, with realistic resolutions?', weight: 25 },
      { key: 'sla', label: 'SLA Tracking', description: 'Is SLA tracking applied consistently and the breach analysis honest?', weight: 25 },
      { key: 'narrative', label: 'Conceptual Clarity', description: 'Does the narrative correctly distinguish incident, problem, and service request with credible examples?', weight: 20 },
    ],
    skillsProven: ['ITIL incident management', 'Ticket categorisation', 'SLA tracking', 'Helpdesk operations'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'itsm-acceptable-use-policy',
    categoryId: 'it',
    topicId: 'it-service-management',
    level: 'advanced',
    title: 'Acceptable Use Policy for an SME',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Draft a one-page acceptable use policy the way a SA SME would actually adopt and enforce one.',
    scenario:
      'An SME owner approaches your IT support firm and asks for an acceptable use policy (AUP) for their 30 staff. They have no policy at all today and have just had a near-miss with a phishing attack. They want a single page that staff will actually read and that the firm could enforce in an HR conversation.',
    brief:
      'Produce a complete AUP suitable for a SA SME, plus a short briefing note explaining the trade-offs you made. The policy must be enforceable, POPIA-aware, and credible to both technical and non-technical readers.',
    deliverables: [
      'A one-page AUP covering: scope, acceptable and unacceptable use, password policy, BYOD position, email and web monitoring disclosure, data handling, social media use, and consequences for breach',
      'A short briefing note (under 400 words) explaining: which clauses you kept tight and why, which you deliberately left flexible and why, and how the policy aligns with POPIA and the BCEA',
      'A staff-facing summary: a half-page version a manager could send to staff alongside the full policy, written in plain language',
      'An implementation checklist: how the SME would roll out the policy (training, sign-off, monitoring) in their first month',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good AUP balances clarity with enforceability. Vague phrases ("appropriate use of company assets") are unenforceable; over-specific lists ("no Facebook between 9 and 5") are out of date the day they ship. Aim for principles plus examples, not exhaustive rules.',
    rubric: [
      { key: 'enforceability', label: 'Enforceability', description: 'Are the rules clear enough that a manager could enforce them in an HR conversation?', weight: 30 },
      { key: 'popia', label: 'POPIA Awareness', description: 'Does the policy address POPIA-relevant clauses, particularly around monitoring and personal data?', weight: 25 },
      { key: 'usability', label: 'Staff Usability', description: 'Would real staff actually read and understand this, or would it be ignored on day one?', weight: 25 },
      { key: 'tradeoffs', label: 'Trade-off Awareness', description: 'Does the briefing note show genuine awareness of where flexibility was retained and why?', weight: 20 },
    ],
    skillsProven: ['IT policy writing', 'POPIA compliance', 'AUP design', 'Enforcement design'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
