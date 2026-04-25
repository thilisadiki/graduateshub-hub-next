import type { PortfolioTask } from '@/types';

export const itEndpointManagementTasks: PortfolioTask[] = [
  {
    id: 'it-endpoint-asset-register',
    categoryId: 'it',
    topicId: 'it-endpoint-management',
    level: 'beginner',
    title: 'Asset Register and Standard Build',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Document the laptop fleet and the standard image the way a working IT team operates.',
    scenario:
      'A 70-person SA NGO has a sprawling laptop fleet acquired over five years: a mix of Windows and Mac, no asset register, and no standard configuration. The IT manager wants a clean asset register and a documented standard build for new devices.',
    brief:
      'Produce a complete asset register template and a standard build document. Make defensible assumptions about the fleet size and mix; document them.',
    deliverables: [
      'An asset register template covering: asset tag, serial, model, OS, assigned user, location, purchase date, warranty end, status, and notes',
      'A standard build document specifying: OS version, patch level, antivirus, browser, productivity suite, VPN client, password manager, encryption status, and any required GPOs or profiles',
      'A device naming convention with rationale (department prefix, region code, sequence number)',
      'A short paragraph on the asset lifecycle: how new devices are registered, how disposals are recorded, and the audit cadence',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good asset register is one that gets updated. Rather than designing 30 columns nobody fills in, focus on the 10 that actually matter operationally and audit a sample monthly to keep them honest.',
    rubric: [
      { key: 'register', label: 'Register Design', description: 'Is the register usable, complete enough for audit, and free of unnecessary fields?', weight: 30 },
      { key: 'build', label: 'Standard Build Realism', description: 'Is the standard build complete and credible for an SA SME context?', weight: 30 },
      { key: 'naming', label: 'Naming Convention', description: 'Is the convention scalable, machine-readable, and human-friendly?', weight: 20 },
      { key: 'lifecycle', label: 'Lifecycle Discipline', description: 'Are the registration, disposal, and audit cadence practical?', weight: 20 },
    ],
    skillsProven: ['Asset management', 'Standard builds', 'Device lifecycle', 'IT operations documentation'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-endpoint-patch-management',
    categoryId: 'it',
    topicId: 'it-endpoint-management',
    level: 'intermediate',
    title: 'Patch Management Schedule and Policy',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Design a patch management schedule that balances security urgency with operational risk.',
    scenario:
      'A SA financial services firm has been deploying Windows updates manually and inconsistently. Some endpoints are months behind on critical patches; other patches were rolled out and broke a key line-of-business application. The CIO wants a documented patch management policy and schedule.',
    brief:
      'Produce a patch management policy and operational schedule. Cover OS patches, application patches, and firmware. Address the trade-off between speed (security) and stability (avoiding breakage).',
    deliverables: [
      'A patch policy document covering: severity tiers (Emergency, Critical, Standard, Optional), the SLA for each tier, the testing requirement, and the rollback criteria',
      'An operational schedule showing the monthly cycle: patch release day, test ring, pilot ring, production rings, and the exception process',
      'A communications template covering pre-patch user notifications and post-patch confirmation messaging',
      'A short risk-and-exception section listing the criteria for delaying a patch and who must approve the exception',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'No patch policy survives the first time a patch breaks the ERP. Build the policy with that day in mind: a defensible rollback path, a fast exception route, and a clear test ring before production.',
    rubric: [
      { key: 'tiers', label: 'Severity Tier Design', description: 'Are tiers and SLAs balanced for security urgency and operational risk?', weight: 30 },
      { key: 'schedule', label: 'Schedule Realism', description: 'Is the operational cycle realistic for a small IT team to execute every month?', weight: 25 },
      { key: 'rings', label: 'Ring Strategy', description: 'Does the ring deployment genuinely catch breaking patches before production?', weight: 25 },
      { key: 'exceptions', label: 'Exception Discipline', description: 'Is the exception process tight enough to prevent abuse but flexible enough to use?', weight: 20 },
    ],
    skillsProven: ['Patch management', 'Risk-tiered SLAs', 'Ring deployment', 'IT change management'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-endpoint-mdm-policy',
    categoryId: 'it',
    topicId: 'it-endpoint-management',
    level: 'advanced',
    title: 'Mobile Device Management Policy and Rollout',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Roll out an MDM platform across a mixed BYOD and corporate fleet without staff revolting.',
    scenario:
      'A 200-person SA professional services firm has decided to roll out Microsoft Intune across its mobile fleet (corporate iPhones, BYOD Android, and corporate laptops). The CFO wants security and remote wipe capability; staff are nervous about company access to personal data on BYOD devices.',
    brief:
      'Design the policy, the rollout, and the staff communication for an Intune MDM deployment. Address the corporate-versus-BYOD distinction explicitly and the privacy concerns of BYOD users.',
    deliverables: [
      'An MDM policy covering: enrolment requirements (corporate owned, BYOD), allowed device classes, mandatory configuration (passcode, encryption, MFA, app management), and the conditions for selective wipe',
      'A privacy boundary statement explaining what the company can and cannot see on BYOD devices, supported by Intune\'s actual data access boundaries',
      'A 90-day rollout plan with phased onboarding, a champion programme, and the support model for the first month',
      'A staff-facing FAQ (10 questions) addressing the concerns staff actually raise: "can you read my WhatsApp", "can you wipe my photos", "what happens when I leave"',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'BYOD MDM rollouts fail when staff feel surveilled. The most successful SA rollouts publish the privacy boundaries upfront, demonstrate them in a town hall, and offer an opt-out for staff who can use a corporate device. Lead with trust, not enforcement.',
    rubric: [
      { key: 'policy', label: 'Policy Coherence', description: 'Does the policy distinguish corporate and BYOD with sensible controls for each?', weight: 30 },
      { key: 'privacy', label: 'Privacy Boundary', description: 'Is the privacy statement accurate, transparent, and reassuring without overpromising?', weight: 25 },
      { key: 'rollout', label: 'Rollout Realism', description: 'Is the 90-day plan realistic, with champions, support, and contingency for resistance?', weight: 25 },
      { key: 'comms', label: 'Staff Communication', description: 'Does the FAQ address the questions staff genuinely worry about, in plain language?', weight: 20 },
    ],
    skillsProven: ['Mobile device management', 'BYOD policy design', 'Intune deployment', 'Staff change communication'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
