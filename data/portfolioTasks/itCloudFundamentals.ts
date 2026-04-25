import type { PortfolioTask } from '@/types';

export const itCloudFundamentalsTasks: PortfolioTask[] = [
  {
    id: 'it-cloud-tco-comparison',
    categoryId: 'it',
    topicId: 'it-cloud-fundamentals',
    level: 'beginner',
    title: 'Cloud vs On-Premise Cost Comparison',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Build a credible three-year TCO comparison for an SA SME considering moving to the cloud.',
    scenario:
      'A 40-person SA logistics company has an aging on-premise server room running file shares, an ERP, and Exchange. The directors want to know whether moving to Microsoft 365 plus Azure is cheaper or more expensive over three years before signing a refresh quote.',
    brief:
      'Produce a three-year total cost of ownership comparison covering on-premise refresh versus cloud migration. Make defensible assumptions about user counts, storage, and licensing, and document them.',
    deliverables: [
      'A TCO summary table showing on-premise total, cloud total, and the delta over years 1, 2, and 3',
      'A detailed breakdown for each option covering: hardware, software licensing, support contracts, electricity and cooling, internet connectivity, IT labour, and contingency',
      'An assumptions log listing every assumption made (user count, storage growth, average labour rate) so the directors can challenge specific numbers',
      'A recommendation paragraph stating which option you favour and the three biggest factors a director should weigh in deciding',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Cloud is not always cheaper. Honest TCO comparisons surface the cost of bandwidth, the labour of migration, and the opex-versus-capex implications. Avoid the cloud-vendor sales-deck trap of comparing only year 1.',
    rubric: [
      { key: 'completeness', label: 'Cost Coverage', description: 'Does the TCO cover both visible and hidden costs (bandwidth, labour, training, exit costs)?', weight: 30 },
      { key: 'assumptions', label: 'Assumption Discipline', description: 'Are assumptions explicit, defensible, and easy for a director to challenge?', weight: 25 },
      { key: 'recommendation', label: 'Recommendation Quality', description: 'Is the recommendation grounded in the analysis, not in cloud evangelism?', weight: 25 },
      { key: 'format', label: 'Director Readability', description: 'Is the artefact something a non-technical director could read in 10 minutes?', weight: 20 },
    ],
    skillsProven: ['Cloud TCO analysis', 'Capex vs opex', 'Assumption-driven costing', 'Executive communication'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-cloud-fileshare-to-onedrive',
    categoryId: 'it',
    topicId: 'it-cloud-fundamentals',
    level: 'intermediate',
    title: 'File Server to OneDrive and SharePoint Migration Plan',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Migrate a 2 TB on-premise file share to OneDrive and SharePoint without losing permissions.',
    scenario:
      'A SA professional services firm of 60 staff has a 2 TB on-premise file share with deeply nested folders, NTFS permissions, and a directory structure that nobody fully understands. The CIO has approved a move to OneDrive (personal) and SharePoint (team) inside Microsoft 365.',
    brief:
      'Produce a complete migration plan: discovery, mapping, tooling choice, cutover, and post-migration support. The plan must address the permission translation problem and the inevitable user resistance.',
    deliverables: [
      'A discovery plan covering: data classification, owner identification, permission audit, and "rot" identification (stale folders to leave behind)',
      'A mapping document showing how on-premise folders map to OneDrive personal libraries versus SharePoint team sites, and how NTFS permissions translate to M365 sharing',
      'A tooling recommendation comparing native (Migration Manager) versus third-party (ShareGate, Mover) options with cost and complexity trade-offs',
      'A 30-60-90 day adoption plan covering training, support, and the timeline to decommission the old file server',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The technical migration is the easy part. The hard part is permission translation, which folders go where, and getting users to stop dragging files back to the old server. Show that you understand the change management dimension.',
    rubric: [
      { key: 'discovery', label: 'Discovery Quality', description: 'Does the discovery surface real risks (rot, dependencies, permission tangles)?', weight: 25 },
      { key: 'mapping', label: 'Mapping Logic', description: 'Are personal versus team boundaries drawn correctly and permission translation handled?', weight: 30 },
      { key: 'tooling', label: 'Tooling Trade-offs', description: 'Are migration tools compared honestly, with cost and complexity?', weight: 20 },
      { key: 'adoption', label: 'Adoption Plan', description: 'Does the plan acknowledge the change management challenge, not just the technical lift?', weight: 25 },
    ],
    skillsProven: ['M365 migration', 'Permission translation', 'Change management', 'Cloud tooling selection'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-cloud-hybrid-architecture',
    categoryId: 'it',
    topicId: 'it-cloud-fundamentals',
    level: 'advanced',
    title: 'Hybrid Cloud Architecture for a Mid-Size SA Company',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Design a defensible hybrid cloud architecture for a 250-person SA business.',
    scenario:
      'A 250-person SA mining services company has cloud-friendly workloads (email, collaboration, sales CRM) and workloads that must stay on-site (process control systems, video monitoring of sites with poor connectivity). The CIO wants a hybrid architecture that survives audit, supports growth, and does not create disaster recovery gaps.',
    brief:
      'Design a target hybrid architecture covering compute, identity, networking, data, and security. Justify which workloads stay on-premise and which move to the cloud, and how the two halves are connected and governed.',
    deliverables: [
      'An architecture diagram or text representation showing on-premise versus cloud workloads, identity flow, network connectivity (ExpressRoute, VPN, SD-WAN), and data flows',
      'A workload classification table listing each major workload, its destination (on-premise / Azure / M365 / SaaS), the rationale, and the key risks of placement',
      'A security and identity section covering: hybrid identity (AD Connect or Entra Connect), conditional access, network segmentation between cloud and on-premise, and key management',
      'A disaster recovery overlay describing how the hybrid architecture supports recovery for both halves, with stated RTO and RPO tiers',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Hybrid is harder than full cloud or full on-premise. Most failure modes happen at the boundary: identity sync failures, expired ExpressRoute peering, conflicting backup tools. Show that you have thought about the seams, not just the halves.',
    rubric: [
      { key: 'classification', label: 'Workload Placement', description: 'Are placement decisions defensible and grounded in workload realities?', weight: 25 },
      { key: 'connectivity', label: 'Connectivity Design', description: 'Is the network and identity bridge realistic and resilient?', weight: 25 },
      { key: 'security', label: 'Security Posture', description: 'Are conditional access, segmentation, and key management addressed coherently?', weight: 25 },
      { key: 'dr', label: 'DR Coherence', description: 'Does the DR overlay actually protect both halves, with stated and credible RTO and RPO?', weight: 25 },
    ],
    skillsProven: ['Hybrid architecture', 'Workload classification', 'Hybrid identity', 'DR design'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
