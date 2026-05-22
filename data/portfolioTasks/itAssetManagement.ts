import type { PortfolioTask } from '@/types';

export const itAssetManagementTasks: PortfolioTask[] = [
  {
    id: 'it-asset-inventory-setup',
    categoryId: 'it',
    topicId: 'it-asset-management',
    level: 'beginner',
    title: 'IT Hardware Asset Inventory & Tagging System',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a cataloging and physical asset tagging system for a growing South African company.',
    scenario:
      'A Durban-based digital design agency has grown rapidly to 40 employees. They currently have no central record of hardware assets. Laptops are handed out dynamically, monitors disappear from the office, and the office manager cannot track which remote worker has what equipment, leading to loss and audit confusion.',
    brief:
      'Develop a comprehensive asset tracking database schema and physical tagging workflow to bring the agency\'s hardware under strict control.',
    deliverables: [
      'A hardware asset tracking spreadsheet schema (represented as a detailed markdown table) showing the exact columns needed (e.g., Asset ID, Serial Number, Specs, Custodian, Physical Location, Purchase Value, Status)',
      'A step-by-step physical labeling and inventory cataloging procedure, explaining the placement of tamper-evident tags, scan checks, and frequency of audits',
      'An assignment checklist template to be completed and signed by both the IT representative and the employee whenever hardware is issued or returned',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Keep the cataloging process realistic for a small firm. Avoid proposing heavy, expensive enterprise software when a clean, structured Google Sheets approach with physical QR/barcode stickers is more appropriate.',
    rubric: [
      { key: 'schema', label: 'Database Schema & Design', description: 'Is the schema comprehensive and properly structured to track lifecycle states and user assignment?', weight: 35 },
      { key: 'procedure', label: 'Inventory Verification Procedure', description: 'Is the physical tagging and auditing protocol clear, repeatable, and practical?', weight: 35 },
      { key: 'checklist', label: 'Assignment Checklist', description: 'Is the assignment checklist robust enough to hold employees legally accountable for company hardware?', weight: 30 },
    ],
    skillsProven: ['Hardware asset tracking', 'Inventory management', 'IT lifecycle compliance', 'Asset tagging protocols'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-software-license-audit',
    categoryId: 'it',
    topicId: 'it-asset-management',
    level: 'intermediate',
    title: 'Software License Compliance & Cost Optimization Audit',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Audit a logistics firm\'s software usage against paid licenses to root out waste and shadow IT.',
    scenario:
      'A Cape Town logistics firm has recently scaled up, but the IT manager suspects they are wasting money on unused Microsoft 365 E3 and Adobe Creative Cloud licenses. Additionally, some staff have installed unauthorized SaaS tools using company credit cards (shadow IT). They need an audit checklist and a remediation plan.',
    brief:
      'Create a comprehensive software license audit protocol, design an optimization proposal showing cost savings in Rands (ZAR), and draft an acceptable use policy.',
    deliverables: [
      'A Software Discovery & Reconciliation Checklist explaining how to compare installed software (via Active Directory / endpoint scans) against procurement invoices',
      'An optimization report outline with a hypothetical scenario showing how reallocating or downgrading 15 unused M365 accounts saves money in ZAR',
      'A draft Software Acceptable Use Policy to restrict unauthorized software installations and shadow IT SaaS sign-ups',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Ensure your cost savings calculations reflect realistic local corporate pricing in South African Rands (ZAR) for software licensing.',
    rubric: [
      { key: 'checklist', label: 'Audit Methodology', description: 'Does the audit check details systematically and capture shadow IT applications?', weight: 35 },
      { key: 'reconciliation', label: 'License Optimization & Savings', description: 'Are the optimization recommendations logical and does the ZAR calculation show concrete savings?', weight: 35 },
      { key: 'policy', label: 'Policy Enforcement', description: 'Is the software policy realistic and legally binding for local employment contexts?', weight: 30 },
    ],
    skillsProven: ['Software asset management (SAM)', 'License compliance', 'Shadow IT discovery', 'IT cost optimization'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-hardware-lifecycle-plan',
    categoryId: 'it',
    topicId: 'it-asset-management',
    level: 'advanced',
    title: '5-Year Hardware Lifecycle & POPIA Decommissioning Strategy',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Design a long-term device replacement cycle and secure disk destruction plan under POPIA.',
    scenario:
      'A financial planning firm in Sandton with 150 employees needs to overhaul its hardware lifecycle. Their computers are aging, leading to support tickets. They need a 5-year replacement schedule, a lease vs. buy decision framework, and a decommissioning process for old machines that strictly complies with POPIA to ensure no client financial data is exposed.',
    brief:
      'Develop a fleet management strategy including a hardware lifecycle replacement policy, a secure disk erasure and decommissioning workflow under POPIA, and a vendor RFP outline.',
    deliverables: [
      'A fleet replacement policy detailing the lifespan of laptops/servers, standard specs, and triggers for early replacement',
      'A secure decommissioning protocol for storage media (HDDs/SSDs) aligning with NIST SP 800-88 guidelines to prevent data leaks under POPIA',
      'A vendor RFP (Request for Proposal) template for choosing a certified local e-waste recycling vendor, including verification of destruction certificates',
      'A financial analysis comparing leasing vs. purchasing the replacement hardware fleet, outlining tax and cash flow considerations in ZAR',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Pay close attention to data destruction standards. Under POPIA, a simple format of a disk is insufficient for media containing banking or identity details. The plan must mandate certified cryptographic erasure or physical shredding.',
    rubric: [
      { key: 'lifecycle', label: 'Fleet replacement policy', description: 'Is the replacement policy financially sound and technically appropriate for a professional office?', weight: 25 },
      { key: 'poipa', label: 'POPIA & NIST Compliance', description: 'Does the decommissioning workflow specify correct sanitization standards (NIST SP 800-88)?', weight: 30 },
      { key: 'rfp', label: 'RFP & E-waste Governance', description: 'Does the vendor selection criteria guarantee a clear chain of custody and legal safety?', weight: 20 },
      { key: 'financials', label: 'Lease vs. Buy Financials', description: 'Is the ZAR financial analysis structured correctly for executive decision-makers?', weight: 25 },
    ],
    skillsProven: ['Hardware lifecycle planning', 'POPIA data destruction', 'NIST SP 800-88 compliance', 'Procurement & leasing analysis'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
