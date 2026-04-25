import type { PortfolioTask } from '@/types';

export const itMicrosoft365Tasks: PortfolioTask[] = [
  {
    id: 'it-m365-user-provisioning-runbook',
    categoryId: 'it',
    topicId: 'it-microsoft-365',
    level: 'beginner',
    title: 'M365 User Provisioning Runbook',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Document the joiner provisioning workflow inside Microsoft 365 the way an SA helpdesk would.',
    scenario:
      'A 90-person SA SME runs everything on Microsoft 365 (mail, Teams, SharePoint, OneDrive). New starter onboarding is inconsistent: licences are over-assigned, group memberships are missed, MFA is not enforced from day one. The IT manager wants a runbook the helpdesk can follow every time.',
    brief:
      'Produce a complete M365 provisioning runbook covering the steps from HR notification through to first-day-ready handover. Cover licensing, identity, mailbox, MFA, group membership, and Teams onboarding.',
    deliverables: [
      'A provisioning checklist covering: account creation, licence assignment, group memberships (security and distribution), mailbox configuration, MFA enforcement, OneDrive setup, and Teams onboarding',
      'A licence assignment matrix listing the standard licence bundles by role (e.g., Knowledge Worker, Frontline, Executive) and what each bundle includes',
      'A short security baseline section covering MFA, conditional access posture for new accounts, and the password reset experience',
      'A Day 1 handover note: what the new starter receives in their inbox, what they must complete in their first hour, and the support contact',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Most SA M365 tenants drift over time because nobody enforced the licence bundles. Document the assignment logic so a new helpdesk technician does not over-licence by reflex.',
    rubric: [
      { key: 'completeness', label: 'Coverage', description: 'Does the runbook cover every step from HR notification to first-day-ready?', weight: 30 },
      { key: 'licensing', label: 'Licence Discipline', description: 'Is the licence matrix sensible, with defensible bundle definitions?', weight: 25 },
      { key: 'security', label: 'Security Baseline', description: 'Are MFA and conditional access enforced from day one?', weight: 25 },
      { key: 'handover', label: 'Day-1 Handover', description: 'Could a new starter actually be productive on hour one with this handover?', weight: 20 },
    ],
    skillsProven: ['M365 provisioning', 'Licence governance', 'MFA enforcement', 'Onboarding runbooks'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-m365-sharepoint-permission-audit',
    categoryId: 'it',
    topicId: 'it-microsoft-365',
    level: 'intermediate',
    title: 'SharePoint Permission Audit and Cleanup',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Audit a sprawling SharePoint tenant and design the cleanup plan.',
    scenario:
      'A SA professional services firm has been using SharePoint for five years. Every team site was created without governance. There are sites shared with "Everyone except external users", broken inheritance everywhere, files with anyone-with-the-link sharing, and ex-employees still listed in some site groups. The CIO wants a controlled cleanup.',
    brief:
      'Produce an audit and cleanup plan for the SharePoint estate. Cover discovery, classification, remediation, and the ongoing governance to keep the tenant clean.',
    deliverables: [
      'A discovery plan describing the queries and reports to run (PowerShell, Microsoft 365 admin centre, Purview) to surface the highest-risk findings',
      'A classification framework grouping sites into Tier A (sensitive, must be locked down), Tier B (internal collaboration), and Tier C (open / lifecycle ended)',
      'A remediation playbook covering: broken inheritance fixes, anyone-with-the-link revocation, orphaned site reassignment, and stale site retirement',
      'An ongoing governance section listing the controls (sensitivity labels, sharing policies, periodic reviews) and the KPIs the CIO sees monthly',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Mass-revoking sharing links breaks workflows. The cleanup must balance hygiene with not paralysing the business. Sequence Tier A (security urgency) before Tier C (lifecycle), and communicate before each remediation wave.',
    rubric: [
      { key: 'discovery', label: 'Discovery Logic', description: 'Are the discovery queries credible and sufficient to surface real risk?', weight: 25 },
      { key: 'classification', label: 'Classification', description: 'Does the tier framework reflect realistic SA SharePoint reality?', weight: 25 },
      { key: 'remediation', label: 'Remediation Sequencing', description: 'Is the cleanup sequenced to minimise business disruption?', weight: 25 },
      { key: 'governance', label: 'Ongoing Governance', description: 'Will the controls and KPIs actually keep the tenant clean over time?', weight: 25 },
    ],
    skillsProven: ['SharePoint governance', 'Permission audit', 'Sensitivity labels', 'M365 cleanup'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-m365-tenant-hardening',
    categoryId: 'it',
    topicId: 'it-microsoft-365',
    level: 'advanced',
    title: 'M365 Tenant Hardening and Compliance Configuration',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Configure an M365 tenant to a defensible security and compliance posture.',
    scenario:
      'A 400-person SA mining company is consolidating to Microsoft 365 from a hybrid Exchange. The CIO wants a tenant that survives a Big Four audit and aligns with the company\'s POPIA obligations. The tenant currently runs at default settings.',
    brief:
      'Design a complete M365 tenant hardening configuration covering identity, conditional access, data protection, and audit. Each control must be justified and traceable to a risk or compliance requirement.',
    deliverables: [
      'A conditional access matrix listing each policy (block legacy auth, require MFA, require compliant device, geo-block high-risk countries, session lifetime), the user scope, and the rationale',
      'A data protection baseline covering: sensitivity labels, DLP policies (POPIA personal data, banking details, ID numbers), retention labels, and encryption defaults',
      'An audit and monitoring plan covering: unified audit log retention, alerts for high-risk activity, the SOC integration point, and the reporting cadence',
      'A change rollout sequence ordering the controls (least-disruptive first), with communications and a rollback option per change',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Tenant hardening fails when controls get rolled out at once and break legitimate workflows. Sequence conditional access carefully, validate exclusions for break-glass accounts, and pilot DLP in audit mode before enforcement.',
    rubric: [
      { key: 'conditional-access', label: 'Conditional Access Quality', description: 'Are policies layered correctly, with thoughtful scoping and exclusions?', weight: 30 },
      { key: 'data-protection', label: 'Data Protection', description: 'Are sensitivity, DLP, and retention applied to the right data classes for SA POPIA context?', weight: 25 },
      { key: 'audit', label: 'Audit Posture', description: 'Is monitoring and reporting strong enough for an external audit?', weight: 20 },
      { key: 'rollout', label: 'Rollout Sequencing', description: 'Will the staged rollout avoid breaking the business?', weight: 25 },
    ],
    skillsProven: ['Conditional access', 'M365 DLP', 'Sensitivity labels', 'Tenant audit posture'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
