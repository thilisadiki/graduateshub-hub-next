import type { PortfolioTopic } from '@/types';

export const itTopics: PortfolioTopic[] = [
  {
    id: 'it-service-management',
    categoryId: 'it',
    title: 'IT Service Management',
    description:
      'Run an IT helpdesk the way a corporate operates one. Tests ITIL incident handling, network documentation, troubleshooting workflows, and acceptable-use policy design.',
    skillsProven: ['ITIL fundamentals', 'Network documentation', 'Helpdesk triage', 'IT policy writing'],
  },
  {
    id: 'it-networking-fundamentals',
    categoryId: 'it',
    title: 'Networking & Infrastructure',
    description:
      'Design, troubleshoot, and document networks the way a working IT technician does. Tests subnetting, VLAN planning, troubleshooting flows, and migration design.',
    skillsProven: ['Subnetting', 'VLAN design', 'Network troubleshooting', 'Infrastructure migration'],
  },
  {
    id: 'it-identity-management',
    categoryId: 'it',
    title: 'Identity & Access Management',
    description:
      'Manage user identities, group policies, and access reviews. Tests Active Directory administration, joiner-mover-leaver processes, and least-privilege design.',
    skillsProven: ['Active Directory', 'Group Policy', 'Access governance', 'Least-privilege design'],
  },
  {
    id: 'it-cloud-fundamentals',
    categoryId: 'it',
    title: 'Cloud Fundamentals',
    description:
      'Reason about cloud cost, migration, and architecture for South African businesses. Tests TCO comparison, lift-and-shift planning, and hybrid cloud design.',
    skillsProven: ['Cloud TCO', 'Migration planning', 'Hybrid architecture', 'IaaS / SaaS literacy'],
  },
  {
    id: 'it-cybersecurity-fundamentals',
    categoryId: 'it',
    title: 'Cybersecurity Fundamentals',
    description:
      'Defend a small organisation from the threats it actually faces. Tests phishing awareness, vulnerability assessment, and incident response playbook design.',
    skillsProven: ['Phishing defence', 'Vulnerability assessment', 'Incident response', 'Security awareness'],
  },
  {
    id: 'it-endpoint-management',
    categoryId: 'it',
    title: 'Endpoint & Device Management',
    description:
      'Standardise, patch, and govern the laptops and phones that staff actually use. Tests asset management, patch scheduling, and BYOD/MDM policy design.',
    skillsProven: ['Asset management', 'Patch management', 'Standard builds', 'MDM policy'],
  },
  {
    id: 'it-backup-disaster-recovery',
    categoryId: 'it',
    title: 'Backup & Disaster Recovery',
    description:
      'Plan and rehearse the recovery of an IT environment after failure. Tests 3-2-1 backup design, tabletop DR exercises, and business continuity tiering.',
    skillsProven: ['Backup strategy', 'Disaster recovery', 'RTO / RPO design', 'Business continuity'],
  },
  {
    id: 'it-microsoft-365',
    categoryId: 'it',
    title: 'Microsoft 365 Administration',
    description:
      'Operate the productivity stack that powers most SA corporates. Tests user provisioning, SharePoint permissions, and tenant hardening.',
    skillsProven: ['M365 administration', 'SharePoint governance', 'Tenant hardening', 'Conditional Access'],
  },
  {
    id: 'it-compliance-governance',
    categoryId: 'it',
    title: 'IT Compliance & Governance',
    description:
      'Translate POPIA, ISO 27001, and audit requirements into practical IT processes. Tests data handling, gap analysis, and audit preparation.',
    skillsProven: ['POPIA compliance', 'ISO 27001', 'Gap analysis', 'Audit readiness'],
  },
  {
    id: 'it-server-administration',
    categoryId: 'it',
    title: 'Server & OS Administration',
    description:
      'Build, harden, and troubleshoot the servers that run business applications. Tests Windows Server documentation, Linux hardening, and performance investigation.',
    skillsProven: ['Windows Server', 'Linux hardening', 'Performance analysis', 'System documentation'],
  },
];
