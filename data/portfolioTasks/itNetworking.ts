import type { PortfolioTask } from '@/types';

export const itNetworkingTasks: PortfolioTask[] = [
  {
    id: 'it-net-subnet-vlan-plan',
    categoryId: 'it',
    topicId: 'it-networking-fundamentals',
    level: 'beginner',
    title: 'Subnet and VLAN Plan for an SME',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a clean IP scheme and VLAN layout for a 30-person office.',
    scenario:
      'A 30-person SA accounting firm is moving offices and the new landlord has installed a flat /24 network. Your IT contractor needs a clean subnet and VLAN plan that separates staff devices, the partner laptops, the guest Wi-Fi, voice handsets, and the print and finance servers.',
    brief:
      'Produce a complete IP and VLAN design for the new office. The plan must be implementable by a junior technician with the existing /24 split into appropriately sized subnets and VLANs.',
    deliverables: [
      'A VLAN table listing each VLAN ID, name, purpose, IP subnet, gateway, DHCP range, and inter-VLAN routing rules',
      'A short rationale paragraph explaining how you sized each subnet and which VLANs you deliberately kept isolated from each other',
      'A guest Wi-Fi statement covering captive portal, bandwidth limits, and isolation from internal traffic',
      'A handover note listing three things a technician should verify after rolling the design out',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Real corporate IT does not put VoIP, printers, and finance servers on the same broadcast domain. Show that you understand why segmentation matters, not just how to do CIDR maths.',
    rubric: [
      { key: 'sizing', label: 'Subnet Sizing', description: 'Are subnets correctly sized with sensible headroom, and is the CIDR maths correct?', weight: 30 },
      { key: 'segmentation', label: 'Segmentation Logic', description: 'Are VLANs separated for the right reasons, with clear inter-VLAN rules?', weight: 30 },
      { key: 'guest', label: 'Guest Wi-Fi Discipline', description: 'Does the guest network stay isolated, throttled, and free of internal access?', weight: 20 },
      { key: 'handover', label: 'Handover Quality', description: 'Could a junior technician roll this out from the document alone?', weight: 20 },
    ],
    skillsProven: ['Subnetting', 'VLAN design', 'Network segmentation', 'IP addressing'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-net-troubleshooting-runbook',
    categoryId: 'it',
    topicId: 'it-networking-fundamentals',
    level: 'intermediate',
    title: 'Network Troubleshooting Runbook',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Build a methodical diagnostic runbook for the network issues that fill an SA helpdesk queue.',
    scenario:
      'A new junior IT support technician at a 200-person SA insurer keeps escalating to seniors for issues like "the office Wi-Fi is slow" or "VPN keeps dropping". The IT manager asks you to write a runbook that lets a junior diagnose 80 percent of network issues without escalation.',
    brief:
      'Write a runbook covering five common network issues: slow Wi-Fi, no internet on a single PC, VPN disconnecting, DNS resolution failure, and intermittent packet loss. Each section must show the diagnostic flow from cheapest checks to deeper analysis.',
    deliverables: [
      'Five runbook sections, each with: symptoms, prerequisites (what info to gather), tools to use (ping, traceroute, ipconfig, nslookup, Wireshark, vendor portals), step-by-step diagnostic flow, and escalation criteria',
      'A short reference table of the five most useful command-line tools for network diagnostics with one-line descriptions',
      'A diagnostic decision tree (text-based) for at least one of the five issues showing branching logic with three or more decision points',
      'A maintenance plan: what to update in the runbook quarterly and how to harvest new findings from senior engineers',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Network troubleshooting follows the OSI model. Start at layer 1 (cable, link light), move up through IP, transport, application. Runbooks that jump straight to "open Wireshark" before checking the cable are amateur hour.',
    rubric: [
      { key: 'flow', label: 'Diagnostic Flow', description: 'Do the runbook sections move from cheap checks to deeper diagnostics in OSI-aware order?', weight: 30 },
      { key: 'tools', label: 'Tool Selection', description: 'Are the right tools recommended for each issue, with correct usage?', weight: 25 },
      { key: 'usability', label: 'Usability', description: 'Could a junior actually use this runbook on day one?', weight: 25 },
      { key: 'maintenance', label: 'Maintenance Plan', description: 'Is the runbook designed to stay current rather than rot?', weight: 20 },
    ],
    skillsProven: ['Network troubleshooting', 'Diagnostic flow design', 'CLI tool fluency', 'OSI model'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-net-branch-migration',
    categoryId: 'it',
    topicId: 'it-networking-fundamentals',
    level: 'advanced',
    title: 'Branch Network Migration Plan',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Plan the network migration of a 50-person branch with zero unplanned downtime.',
    scenario:
      'A SA retailer is consolidating two branch offices into one new location. 50 staff, point-of-sale terminals, an in-branch CCTV system, and a credit card processing terminal must all be migrated within a weekend without disrupting Monday trading. The CIO wants a written migration plan before sign-off.',
    brief:
      'Produce a complete migration plan covering the cutover weekend, a rollback strategy, and the communications plan. Make defensible assumptions about the existing infrastructure and document them.',
    deliverables: [
      'A migration runbook with hour-by-hour activities for the cutover weekend (Friday close to Monday open), assigned roles, dependencies, and decision points',
      'A rollback plan defining the latest acceptable rollback time and the criteria that would trigger it',
      'A risk register with at least 8 migration-specific risks, each scored and mitigated',
      'A communications plan covering staff, suppliers, the bank for the credit card terminal, and the building landlord',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Real branch migrations fail because of the things nobody planned for: payment terminal certificates, courier deliveries on cutover Saturday, alarm system reconfiguration, and printer driver issues on Monday. Show that you have thought past the technical work to the operational reality.',
    rubric: [
      { key: 'runbook', label: 'Runbook Realism', description: 'Is the cutover sequence realistic, with sensible time allocations and dependency awareness?', weight: 30 },
      { key: 'rollback', label: 'Rollback Discipline', description: 'Is rollback genuinely possible from the plan, with a clear cut-off time and trigger criteria?', weight: 25 },
      { key: 'risk', label: 'Risk Coverage', description: 'Does the risk register cover non-obvious failure modes, not just generic ones?', weight: 25 },
      { key: 'comms', label: 'Communications', description: 'Are stakeholders identified accurately and is the messaging right for each audience?', weight: 20 },
    ],
    skillsProven: ['Migration planning', 'Cutover management', 'Rollback strategy', 'Cross-functional coordination'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
