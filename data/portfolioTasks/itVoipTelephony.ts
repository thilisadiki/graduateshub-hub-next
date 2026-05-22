import type { PortfolioTask } from '@/types';

export const itVoipTelephonyTasks: PortfolioTask[] = [
  {
    id: 'it-voip-home-setup',
    categoryId: 'it',
    topicId: 'it-voip-telephony',
    level: 'beginner',
    title: 'Remote Worker VoIP softphone Setup Guide',
    difficulty: 'Beginner',
    estimatedHours: '2 hours',
    tagline: 'Write a foolproof setup and troubleshooting guide for call center agents using SIP clients from home.',
    scenario:
      'A customer support center in Cape Town is transitioning its agents to a hybrid work-from-home model to maintain operations during load-shedding. The agents must connect softphone software to the company\'s hosted cloud PBX. Many agents are non-technical and struggle with SIP configurations, mic routing, and home ISP routers.',
    brief:
      'Write an easy-to-follow, step-by-step setup guide and home network requirements check sheet to get agents online and troubleshooting their own voice connection issues.',
    deliverables: [
      'A step-by-step softphone configuration manual (written in markdown) for a standard softphone (e.g. MicroSIP or Zoiper) using placeholder SIP credentials',
      'A voice readiness home network checklist specifying minimum upload/download speeds, maximum latency, and jitter thresholds for stable VoIP calls',
      'A basic diagnostic guide explaining how to troubleshoot common softphone issues: one-way audio, registration failure, or robotic sound',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Keep your guide extremely clear and user-friendly. Avoid overly dense jargon where simple terms work, but ensure the technical parameters (like SIP registration ports, STUN servers, and codecs) are correct.',
    rubric: [
      { key: 'guide', label: 'Setup Guide Quality', description: 'Is the configuration manual easy to follow for a non-technical worker while retaining technical accuracy?', weight: 35 },
      { key: 'checklist', label: 'Network Checklist', description: 'Are the bandwidth, latency, and packet loss metrics mathematically correct and realistic for VoIP traffic?', weight: 30 },
      { key: 'diagnostic', label: 'Diagnostic Framework', description: 'Does the troubleshooting steps accurately address common SIP issues like SIP ALG or firewall blocking?', weight: 35 },
    ],
    skillsProven: ['VoIP Softphone configuration', 'SIP signaling basics', 'Home network diagnostics', 'Technical writing'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-voip-call-routing',
    categoryId: 'it',
    topicId: 'it-voip-telephony',
    level: 'intermediate',
    title: 'Cloud PBX Call Routing & IVR Flow Design',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Design an interactive voice response (IVR) menu and multi-branch failover routing plan.',
    scenario:
      'A medical practice group with clinics in Johannesburg, Pretoria, and Midrand is consolidatng its voice services onto a single cloud PBX tenant. They need a customer-facing phone system with IVR menus, time-of-day schedules, ring groups, and voicemail-to-email. Crucially, they need a failover plan in case load-shedding knocks out power at a specific clinic.',
    brief:
      'Design the complete logical call routing diagram, write the voice prompt script with local language options, and establish a multi-branch failover escalation policy.',
    deliverables: [
      'A detailed call flow diagram (described using a Mermaid diagram or formatted text map) from the initial SIP incoming trunk down to final queues or voicemail',
      'An IVR script script showing exact voice menu options, greeting phrasing, and language selection (e.g. English, isiZulu, Afrikaans)',
      'A routing table detailing Ring Groups, Queue parameters (waiting time, wrap-up time), and time-of-day schedules (Business hours, lunch, holidays)',
      'A disaster failover protocol defining what happens to incoming clinic calls when a local clinic\'s network goes offline',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Think about the patient experience: avoid long wait times and infinite loops. Ensure the failover routing accounts for local load-shedding realities where clinics lose connectivity for hours.',
    rubric: [
      { key: 'diagram', label: 'Call Flow Logic', description: 'Is the call routing diagram comprehensive, logically sound, and free of dead-ends?', weight: 35 },
      { key: 'script', label: 'IVR Prompting & Language', description: 'Are the prompt scripts professional, culturally appropriate, and concise?', weight: 30 },
      { key: 'failover', label: 'Disaster Recovery Routing', description: 'Is the load-shedding/failover protocol robust, ensuring patient calls are redirected or sent to active queues?', weight: 35 },
    ],
    skillsProven: ['Cloud PBX administration', 'IVR design', 'Call queue engineering', 'Unified communications DR'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-voip-qos-design',
    categoryId: 'it',
    topicId: 'it-voip-telephony',
    level: 'advanced',
    title: 'Voice Network Architecture & Quality of Service (QoS) Design',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Architect a voice network and switch configuration plan to prioritize real-time SIP/RTP packets.',
    scenario:
      'A retail head office in Durban has 120 IP desk phones sharing a single 200Mbps fiber internet connection with normal web browsing, YouTube streaming, and SQL replication. Users report choppy voice calls, dropped connections, and delay during busy periods. The switches are unmanaged or poorly configured.',
    brief:
      'Design a modern, segregated voice network layout with specific switch/router QoS configurations to guarantee crystal-clear calls even under high network load.',
    deliverables: [
      'A network segregation plan specifying Voice VLANs, IP subnetting ranges, and DHCP configurations supporting LLDP-MED for auto-provisioning',
      'A switch-level and router-level QoS configuration blueprint, outlining exactly how 802.1p (CoS) and DSCP markings are trusted, rewritten, and prioritized',
      'A bandwidth and codec mathematical analysis comparing G.711 and G.729 bandwidth requirements for 120 concurrent call scenarios',
      'A monitoring plan detailing metrics like packet loss, jitter limits, and Mean Opinion Score (MOS) targets to measure call quality',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not write vague statements like "configure QoS". Provide the actual CLI command concepts (e.g. Cisco MLS/MQC commands or generic firewall queuing configurations) showing how queue mappings are defined and priority queue is allocated.',
    rubric: [
      { key: 'vlan', label: 'Network Segregation Design', description: 'Is the VLAN, IP schema, and auto-discovery (LLDP-MED) architected professionally?', weight: 25 },
      { key: 'qos', label: 'QoS & DSCP Marking Logic', description: 'Are the QoS queues, DSCP markings (EF, CS3, AF31), and queuing policies correct for voice and video?', weight: 30 },
      { key: 'bandwidth', label: 'Bandwidth & Codec Analysis', description: 'Are the bandwidth calculations for G.711 (80Kbps per call) and G.729 (30Kbps per call) mathematically accurate?', weight: 25 },
      { key: 'monitoring', label: 'Quality Assurance Plan', description: 'Are the MOS goals, jitter tolerances, and diagnostic tooling (e.g., Wireshark RTP analysis) clearly explained?', weight: 20 },
    ],
    skillsProven: ['VLAN segregation', 'Class of Service (CoS) / DSCP mapping', 'LLDP-MED & voice provisioning', 'VoIP bandwidth calculations'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
