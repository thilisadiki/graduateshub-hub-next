import type { PortfolioTask } from '@/types';

export const itServerAdministrationTasks: PortfolioTask[] = [
  {
    id: 'it-server-windows-build-doc',
    categoryId: 'it',
    topicId: 'it-server-administration',
    level: 'beginner',
    title: 'Windows Server Build Documentation',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Document a standard Windows Server build the way an SA IT operations team would on day one.',
    scenario:
      'A 100-person SA SME runs three on-premise Windows Servers (file, print, application). Each was built differently, and only one technician remembers how. You are asked to document a "gold" Windows Server build that any new technician could replicate exactly.',
    brief:
      'Produce a complete Windows Server build documentation pack. Cover OS configuration, security baseline, patching, monitoring agents, backup agent, and post-build validation.',
    deliverables: [
      'A pre-build checklist covering: hardware/VM specs, IP plan, naming, storage layout, license keys, joining the domain, and required pre-installed roles',
      'A configuration document covering: time sync, regional settings, firewall rules, services hardening (disable SMBv1, disable Telnet), antivirus install, and remote management posture',
      'A post-build validation checklist showing exactly how a peer reviewer confirms the build matches standard (ports, services, agents, security baseline, AD integration)',
      'A short change-control note describing how updates to the build standard are reviewed and rolled out',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good build document is the one where two technicians produce identical servers without talking to each other. Test that hypothesis as you write: every step should be deterministic, not "configure as appropriate".',
    rubric: [
      { key: 'completeness', label: 'Completeness', description: 'Does the documentation cover every step a new technician needs?', weight: 30 },
      { key: 'security', label: 'Security Baseline', description: 'Is the security baseline credible and applied consistently?', weight: 25 },
      { key: 'validation', label: 'Validation Discipline', description: 'Could a peer reviewer reliably catch a misconfigured server using the validation checklist?', weight: 25 },
      { key: 'change', label: 'Change Control', description: 'Is the build standard maintained over time rather than allowed to rot?', weight: 20 },
    ],
    skillsProven: ['Windows Server administration', 'Build standardisation', 'Security baseline', 'Configuration management'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-server-linux-hardening',
    categoryId: 'it',
    topicId: 'it-server-administration',
    level: 'intermediate',
    title: 'Linux Server Hardening Checklist',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Harden an Ubuntu LTS server against the threats SA-hosted servers actually face.',
    scenario:
      'A SA tech consultancy maintains a fleet of Ubuntu LTS servers (web, application, database) hosted with a local provider. After a competitor was compromised via a default SSH configuration and an exposed admin port, the CTO asks for a hardening checklist that every server must meet before going live.',
    brief:
      'Produce a hardening checklist for Ubuntu Server LTS (24.04). Cover OS, network, application, and operational hardening with specific commands or configuration snippets.',
    deliverables: [
      'An OS hardening section covering: user accounts (no root SSH, sudoers discipline), SSH (key-only, port, MaxAuthTries, allowed users), unattended-upgrades, fail2ban, auditd, and firewall (UFW) rules',
      'A network hardening section covering: which ports are open by default and why, internal-only versus public services, IP whitelisting for admin paths, and reverse proxy posture',
      'An application hardening section covering: nginx/apache headers, TLS configuration, file permissions, and the principle of running services as non-root',
      'A monitoring and operational section covering: log shipping, integrity checks (AIDE), patch cadence, and the runbook for a suspected compromise',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Hardening checklists are weak when they cite controls without the actual config. Include concrete snippets (sshd_config lines, UFW commands, nginx headers) so a junior engineer can apply them without searching.',
    rubric: [
      { key: 'os', label: 'OS Hardening', description: 'Are the OS controls correct, current, and aligned to LTS reality?', weight: 30 },
      { key: 'network', label: 'Network Hardening', description: 'Is the firewall and exposure posture defensible for a small public-facing fleet?', weight: 25 },
      { key: 'app', label: 'Application Hardening', description: 'Are application-layer controls (TLS, headers, permissions) credible?', weight: 25 },
      { key: 'ops', label: 'Operational Discipline', description: 'Will monitoring and patching keep the hardening current after the first deploy?', weight: 20 },
    ],
    skillsProven: ['Linux hardening', 'SSH configuration', 'UFW and firewalls', 'Server monitoring'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-server-performance-investigation',
    categoryId: 'it',
    topicId: 'it-server-administration',
    level: 'advanced',
    title: 'Server Performance Investigation Case Study',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Diagnose and document a complex server performance issue the way a senior engineer does.',
    scenario:
      'A SA e-commerce business runs its checkout API on a Linux server that has started slowing down every weekday at 17:00 to 18:00. Checkout response times spike from 200ms to 4 seconds. The infrastructure team asks for a structured investigation, root cause, and remediation plan.',
    brief:
      'Produce a complete performance investigation case study. You may model the scenario or use real data from a personal lab. The case study must read like a senior engineer\'s post-incident report.',
    deliverables: [
      'A symptom and impact section quantifying the issue: latency percentiles before and during the incident window, error rates, and revenue or user impact',
      'A diagnostic walkthrough showing the methodology: which metrics were checked first (CPU, memory, IO, network, application), which tools were used (top, iostat, vmstat, perf, application APM), and what each ruled in or out',
      'A root-cause analysis identifying the underlying cause (e.g., database connection pool exhaustion, disk IO saturation from a backup job, memory pressure from a leaking process) with supporting evidence',
      'A remediation plan covering: immediate fix, medium-term hardening, and the monitoring or alerting added so this issue is detected within minutes if it recurs',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Senior engineers narrate their investigation: "I checked CPU first, ruled it out, then looked at IO." The case study must show that thinking, not just the answer. Show the dead ends as well as the breakthrough.',
    rubric: [
      { key: 'symptoms', label: 'Symptoms Quantification', description: 'Is the impact quantified credibly with metrics rather than narrative?', weight: 25 },
      { key: 'methodology', label: 'Methodology Discipline', description: 'Does the diagnostic walkthrough show structured elimination, not guess-driven testing?', weight: 30 },
      { key: 'rca', label: 'Root Cause Quality', description: 'Is the root cause supported by evidence, not just plausible?', weight: 25 },
      { key: 'remediation', label: 'Remediation Plan', description: 'Does the plan address both fix and prevention with credible monitoring?', weight: 20 },
    ],
    skillsProven: ['Performance investigation', 'Linux diagnostics', 'Root cause analysis', 'Post-incident reporting'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
