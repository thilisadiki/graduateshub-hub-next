import type { PortfolioTask } from '@/types';

export const businessAnalysisTasks: PortfolioTask[] = [
  // --- Topic 1: Requirements Engineering ---
  {
    id: 'ba-write-brd',
    categoryId: 'business-analysis',
    topicId: 'requirements-engineering',
    level: 'beginner',
    title: 'Write a Requirements Document',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write a BRD for adding a loyalty programme to a retail POS system.',
    scenario:
      'A mid-size South African retailer (40 stores) wants to add a loyalty programme to their existing POS system. Customers earn points on purchases and redeem them for discounts. The operations director has described the idea verbally — now it needs to be documented.',
    brief:
      'Write a Business Requirements Document (BRD) that captures the business need, scope, functional requirements, non-functional requirements, and assumptions.',
    deliverables: [
      'A BRD covering: business objectives, scope (in/out), at least 10 functional requirements, and 5 non-functional requirements',
      'An assumptions and constraints section with at least 5 items',
      'A RACI matrix for key stakeholders (Operations, IT, Marketing, Finance)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Requirements must be testable. "The system should be fast" is not a requirement. "The loyalty balance must display within 2 seconds of scanning the card" is.',
    rubric: [
      { key: 'structure', label: 'BRD Structure', description: 'Does the document follow a professional BRD structure?', weight: 20 },
      { key: 'requirements', label: 'Requirements Quality', description: 'Are the requirements specific, measurable, and testable?', weight: 40 },
      { key: 'scope', label: 'Scope Clarity', description: 'Is the in-scope/out-of-scope boundary clear and realistic?', weight: 20 },
      { key: 'raci', label: 'RACI Matrix', description: 'Is the RACI complete with no shared accountabilities?', weight: 20 },
    ],
    skillsProven: ['BRD writing', 'Requirements elicitation', 'Scope definition', 'RACI'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-conflicting-requirements',
    categoryId: 'business-analysis',
    topicId: 'requirements-engineering',
    level: 'intermediate',
    title: 'Resolve Conflicting Requirements',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Triage 4 stakeholders with contradictory requirements into a prioritised set.',
    scenario:
      'A company is building a new customer portal. The CEO wants it live in 6 weeks. The compliance officer insists on full POPIA consent flows. Marketing wants personalised dashboards. IT says the legacy API cannot support real-time data. All four stakeholders believe their requirement is non-negotiable.',
    brief:
      'Document all four stakeholder positions, identify the conflicts, and produce a prioritised requirements set using MoSCoW. Write a one-page stakeholder alignment memo.',
    deliverables: [
      'A conflict matrix showing which requirements conflict and why',
      'A MoSCoW-prioritised requirements list with justification for each classification',
      'A stakeholder alignment memo (max 300 words) proposing the recommended path forward',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The BA does not decide — the BA facilitates a decision. Your memo should present options and a recommendation, not dictate.',
    rubric: [
      { key: 'conflicts', label: 'Conflict Identification', description: 'Are the conflicts correctly identified with root causes?', weight: 30 },
      { key: 'moscow', label: 'MoSCoW Prioritisation', description: 'Is the prioritisation defensible with clear reasoning?', weight: 35 },
      { key: 'memo', label: 'Alignment Memo', description: 'Is the memo diplomatic, clear, and actionable?', weight: 35 },
    ],
    skillsProven: ['Conflict resolution', 'MoSCoW prioritisation', 'Stakeholder alignment', 'Requirements triage'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-traceability-matrix',
    categoryId: 'business-analysis',
    topicId: 'requirements-engineering',
    level: 'advanced',
    title: 'Requirements Traceability Matrix',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build an RTM linking business → functional → test cases for a payroll migration.',
    scenario:
      'A South African company is migrating from a legacy payroll system to a cloud-based solution. There are 25 business requirements. The project sponsor wants confidence that every requirement will be tested and nothing will be lost in migration.',
    brief:
      'Build a Requirements Traceability Matrix (RTM) that links business requirements to functional requirements to test cases. Include coverage analysis and gap identification.',
    deliverables: [
      'An RTM table: Business Req ID → Functional Req ID(s) → Test Case ID(s) → Status (for at least 15 business requirements)',
      'A coverage analysis: which requirements have full traceability, partial, or none',
      'A gap report: requirements without test coverage and test cases without linked requirements',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'An RTM is only valuable if it is maintained. Include a note on how the matrix should be updated during the project lifecycle.',
    rubric: [
      { key: 'rtm', label: 'RTM Completeness', description: 'Does the matrix cover at least 15 requirements with full traceability?', weight: 35 },
      { key: 'coverage', label: 'Coverage Analysis', description: 'Is the coverage analysis honest about gaps?', weight: 30 },
      { key: 'maintenance', label: 'Maintenance Plan', description: 'Is there a credible plan for keeping the RTM current?', weight: 35 },
    ],
    skillsProven: ['Requirements traceability', 'RTM design', 'Coverage analysis', 'Quality assurance'],
    relatedRoadmapIds: [],
  },

  // --- Topic 2: Stakeholder Analysis & Management ---
  {
    id: 'ba-stakeholder-map',
    categoryId: 'business-analysis',
    topicId: 'stakeholder-analysis',
    level: 'beginner',
    title: 'Stakeholder Map',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create a power/interest stakeholder map for a system rollout.',
    scenario:
      'A mid-size insurance company (300 employees) is rolling out a new claims management system. It affects claims processors, team leads, IT, the CFO, external assessors, and the call centre. You need to map who matters and how to engage them.',
    brief:
      'Create a stakeholder map using the power/interest grid. Identify at least 8 stakeholders, place them on the grid, and define an engagement strategy for each quadrant.',
    deliverables: [
      'A power/interest grid with at least 8 stakeholders placed and justified',
      'An engagement strategy for each quadrant (Manage Closely, Keep Satisfied, Keep Informed, Monitor)',
      'One stakeholder who is likely to be misclassified and why (e.g., a call centre agent with low formal power but high informal influence)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Power is not just seniority. A union representative may have more power to block a project than a director. Think beyond the org chart.',
    rubric: [
      { key: 'identification', label: 'Stakeholder Identification', description: 'Are the 8 stakeholders varied and realistic?', weight: 25 },
      { key: 'placement', label: 'Grid Placement', description: 'Is each stakeholder placed with clear justification?', weight: 35 },
      { key: 'strategy', label: 'Engagement Strategy', description: 'Are the quadrant strategies actionable?', weight: 40 },
    ],
    skillsProven: ['Stakeholder mapping', 'Power/interest analysis', 'Engagement planning', 'Organisational awareness'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-comms-plan',
    categoryId: 'business-analysis',
    topicId: 'stakeholder-analysis',
    level: 'intermediate',
    title: 'Stakeholder Communication Plan',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a comms plan for a 6-month ERP implementation across 3 departments.',
    scenario:
      'A manufacturing company is implementing an ERP system affecting Finance, Operations, and HR. Each department has different concerns: Finance worries about data migration, Operations about downtime, HR about change fatigue. The project manager wants a structured comms plan.',
    brief:
      'Design a stakeholder communication plan covering all 3 departments, the executive sponsor, and the IT team. Define channels, frequency, content, and escalation paths.',
    deliverables: [
      'A comms matrix: Stakeholder Group × Channel × Frequency × Content Summary × Owner',
      'A message calendar for Month 1 showing specific communications scheduled',
      'An escalation path for when stakeholders raise concerns that exceed the BA\'s authority',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not send the same message to everyone. The CFO needs a different update than the warehouse supervisor.',
    rubric: [
      { key: 'matrix', label: 'Comms Matrix', description: 'Is the matrix comprehensive with appropriate channels per audience?', weight: 35 },
      { key: 'calendar', label: 'Message Calendar', description: 'Is the Month 1 calendar specific and realistic?', weight: 30 },
      { key: 'escalation', label: 'Escalation Path', description: 'Is the escalation path clear with defined triggers?', weight: 35 },
    ],
    skillsProven: ['Communication planning', 'Stakeholder management', 'Project communication', 'Escalation design'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-resistance-strategy',
    categoryId: 'business-analysis',
    topicId: 'stakeholder-analysis',
    level: 'advanced',
    title: 'Managing Resistance to Change',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Write a strategy for handling senior stakeholder resistance to digital transformation.',
    scenario:
      'A South African logistics company is digitising its dispatch process. The Head of Operations (20 years tenure) is openly resistant — he believes the paper-based system "works fine" and fears job losses for his team. He has influence over 60% of the affected staff.',
    brief:
      'Analyse the resistance, identify its root causes, and design an engagement strategy that addresses legitimate concerns while keeping the project on track.',
    deliverables: [
      'A resistance analysis: stated objections vs likely root causes (fear, loss of control, lack of understanding)',
      'An engagement strategy with at least 5 specific tactics (not generic platitudes)',
      'A "win-win" proposal that addresses the Head of Ops\' legitimate concerns while delivering the project\'s objectives',
      'A contingency plan if engagement fails: escalation triggers and alternative approaches',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Resistance is not irrational. A 20-year veteran who fears job losses has a legitimate concern. Dismissing it as "resistance to change" is lazy analysis.',
    rubric: [
      { key: 'analysis', label: 'Resistance Analysis', description: 'Does the analysis distinguish stated from root causes?', weight: 25 },
      { key: 'tactics', label: 'Engagement Tactics', description: 'Are the 5 tactics specific, empathetic, and realistic?', weight: 30 },
      { key: 'win-win', label: 'Win-Win Proposal', description: 'Does the proposal genuinely address concerns, not just appease?', weight: 25 },
      { key: 'contingency', label: 'Contingency Plan', description: 'Is the escalation plan proportionate and professional?', weight: 20 },
    ],
    skillsProven: ['Resistance management', 'Stakeholder engagement', 'Conflict resolution', 'Change leadership'],
    relatedRoadmapIds: [],
  },

  // --- Topic 3: Process Mapping & Improvement ---
  {
    id: 'ba-as-is-process',
    categoryId: 'business-analysis',
    topicId: 'process-mapping',
    level: 'beginner',
    title: 'Map an As-Is Process',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Document the current leave-request process using BPMN notation.',
    scenario:
      'A company with 200 employees processes leave requests manually: employees email their manager, the manager forwards to HR, HR checks the leave balance in a spreadsheet, then emails approval or rejection. It takes 3-5 days.',
    brief:
      'Document this as-is process using BPMN notation. Identify the actors, decision points, and pain points.',
    deliverables: [
      'A BPMN process diagram (described in text or drawn) with swim lanes for Employee, Manager, and HR',
      'A list of at least 4 pain points in the current process with evidence',
      'Process metrics: estimated cycle time, number of handoffs, and manual steps',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'BPMN has specific symbols: rectangles for tasks, diamonds for gateways, circles for start/end events. Use them correctly even in a text description.',
    rubric: [
      { key: 'bpmn', label: 'BPMN Accuracy', description: 'Are the BPMN elements used correctly with proper swim lanes?', weight: 35 },
      { key: 'pain-points', label: 'Pain Point Identification', description: 'Are the pain points specific and evidence-based?', weight: 35 },
      { key: 'metrics', label: 'Process Metrics', description: 'Are the cycle time and handoff counts realistic?', weight: 30 },
    ],
    skillsProven: ['BPMN', 'Process documentation', 'As-is analysis', 'Pain point identification'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-to-be-process',
    categoryId: 'business-analysis',
    topicId: 'process-mapping',
    level: 'intermediate',
    title: 'Design a To-Be Process',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Redesign the leave process to remove bottlenecks with measurable targets.',
    scenario:
      'Using the as-is leave process (manual emails, spreadsheet checks, 3-5 day turnaround), the HR director wants a redesigned process that reduces approval time to under 24 hours and eliminates the spreadsheet dependency.',
    brief:
      'Design the to-be process. Show the before/after comparison with measurable improvement targets for each pain point.',
    deliverables: [
      'A to-be BPMN process diagram showing the redesigned flow',
      'A before/after comparison table: Pain Point → Current State → Future State → Improvement Target',
      'Technology recommendations: what system or tool enables the new process (with justification, not just "use software")',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A to-be process that just says "automate everything" is not a design. Show which steps are automated, which remain manual, and why.',
    rubric: [
      { key: 'design', label: 'To-Be Design', description: 'Is the redesigned process realistic and genuinely improved?', weight: 35 },
      { key: 'comparison', label: 'Before/After Comparison', description: 'Are the improvement targets measurable and realistic?', weight: 30 },
      { key: 'technology', label: 'Technology Fit', description: 'Is the technology recommendation justified and proportionate?', weight: 35 },
    ],
    skillsProven: ['Process redesign', 'BPMN', 'Improvement targeting', 'Technology assessment'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-value-stream-map',
    categoryId: 'business-analysis',
    topicId: 'process-mapping',
    level: 'advanced',
    title: 'Value Stream Mapping',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Map the end-to-end value stream for a loan application at an SA bank.',
    scenario:
      'A South African retail bank takes an average of 14 days to process a personal loan application. The CEO has mandated a reduction to 5 days. The process involves the branch, credit scoring, compliance (FICA/FAIS), underwriting, and disbursement.',
    brief:
      'Map the end-to-end value stream. Identify value-adding vs non-value-adding steps, calculate process efficiency, and propose improvements to hit the 5-day target.',
    deliverables: [
      'A value stream map showing all steps with cycle time and wait time for each',
      'Process efficiency calculation: total value-adding time vs total lead time',
      'At least 5 specific waste items (using Lean waste categories) with evidence',
      'An improvement roadmap: quick wins (0-30 days) vs structural changes (30-90 days) to reach the 5-day target',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'In most service processes, less than 10% of total lead time is value-adding. The rest is waiting, rework, and handoffs. Show this ratio.',
    rubric: [
      { key: 'vsm', label: 'Value Stream Map', description: 'Is the VSM complete with cycle times and wait times?', weight: 25 },
      { key: 'efficiency', label: 'Process Efficiency', description: 'Is the efficiency calculation correct and revealing?', weight: 25 },
      { key: 'waste', label: 'Waste Identification', description: 'Are the waste items correctly categorised using Lean taxonomy?', weight: 25 },
      { key: 'roadmap', label: 'Improvement Roadmap', description: 'Is the quick-win vs structural split realistic?', weight: 25 },
    ],
    skillsProven: ['Value stream mapping', 'Lean analysis', 'Process efficiency', 'Improvement planning'],
    relatedRoadmapIds: [],
  },

  // --- Topic 4: User Stories & Acceptance Criteria ---
  {
    id: 'ba-write-user-stories',
    categoryId: 'business-analysis',
    topicId: 'user-stories-acceptance',
    level: 'beginner',
    title: 'Write User Stories for a Feature',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write 8 user stories for a mobile banking "Send Money" feature.',
    scenario:
      'A South African digital bank is adding a "Send Money" feature to their app. Users can send money to contacts via phone number or bank account. The product owner needs user stories before the sprint starts.',
    brief:
      'Write 8 user stories using the standard "As a [user], I want [goal], so that [benefit]" format. Cover the happy path, edge cases, and at least one admin/back-office story.',
    deliverables: [
      'Eight user stories in standard format with unique IDs',
      'Priority ranking (High/Medium/Low) for each story with justification',
      'One story that the team might miss (e.g., failed transfers, insufficient funds, daily limits)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      '"As a user, I want to send money" is too vague. "As a registered user, I want to send money to a contact using their phone number, so that I can transfer funds without knowing their bank details" is specific.',
    rubric: [
      { key: 'format', label: 'Story Format', description: 'Do all 8 stories follow the standard format correctly?', weight: 25 },
      { key: 'coverage', label: 'Coverage', description: 'Do the stories cover happy path, edge cases, and admin needs?', weight: 35 },
      { key: 'priority', label: 'Prioritisation', description: 'Is the priority ranking logical and well-justified?', weight: 40 },
    ],
    skillsProven: ['User story writing', 'Agile requirements', 'Edge case thinking', 'Prioritisation'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-acceptance-criteria',
    categoryId: 'business-analysis',
    topicId: 'user-stories-acceptance',
    level: 'intermediate',
    title: 'Acceptance Criteria & Edge Cases',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write Given/When/Then acceptance criteria for 3 user stories with edge cases.',
    scenario:
      'The development team has asked for detailed acceptance criteria before they commit to the sprint. Three user stories need full criteria: (1) Send money via phone number, (2) View transaction history, (3) Set a daily transfer limit.',
    brief:
      'Write detailed acceptance criteria for all 3 stories using Given/When/Then format. Include edge cases, error scenarios, and boundary conditions.',
    deliverables: [
      'At least 5 acceptance criteria per story in Given/When/Then format',
      'Edge cases for each story (e.g., invalid phone number, transfer exceeding limit, empty history)',
      'A "Definition of Done" checklist that applies across all 3 stories',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Given/When/Then is a testing language. "Given I have R500 in my account, When I try to send R600, Then I see an error \'Insufficient funds\' and the transaction is not processed." Be this precise.',
    rubric: [
      { key: 'gwt', label: 'Given/When/Then Quality', description: 'Are the criteria precise, testable, and correctly formatted?', weight: 35 },
      { key: 'edge-cases', label: 'Edge Case Coverage', description: 'Are edge cases realistic and comprehensive?', weight: 35 },
      { key: 'dod', label: 'Definition of Done', description: 'Is the DoD practical and complete?', weight: 30 },
    ],
    skillsProven: ['Acceptance criteria', 'Given/When/Then', 'Edge case analysis', 'Definition of Done'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-story-mapping',
    categoryId: 'business-analysis',
    topicId: 'user-stories-acceptance',
    level: 'advanced',
    title: 'Story Mapping a Product Release',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a user story map for an MVP launch with backbone and release slices.',
    scenario:
      'A fintech startup is building a personal budgeting app. They have 40 user stories but can only ship 15 in the MVP. The CEO wants to launch in 8 weeks. The team needs to know what to build first and what to defer.',
    brief:
      'Build a user story map. Organise stories into a backbone (user activities), a walking skeleton (minimum stories per activity), and release slices (MVP, v1.1, v1.2).',
    deliverables: [
      'A story map structure: User Activities (backbone) across the top, stories grouped vertically by priority',
      'The walking skeleton: the minimum set of stories that delivers an end-to-end user journey',
      'Release slices: MVP (15 stories), v1.1 (next 12), v1.2 (remaining) with rationale for each cut',
      'Three stories that were hard to cut from the MVP and why you cut them anyway',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The walking skeleton is not the MVP. It is the minimum set of stories that lets a user complete the entire journey, even if poorly. The MVP adds enough polish to be shippable.',
    rubric: [
      { key: 'backbone', label: 'Story Map Structure', description: 'Is the backbone well-organised with logical user activities?', weight: 25 },
      { key: 'skeleton', label: 'Walking Skeleton', description: 'Does the skeleton deliver a complete (if minimal) user journey?', weight: 25 },
      { key: 'slices', label: 'Release Slices', description: 'Are the release cuts defensible with clear rationale?', weight: 30 },
      { key: 'tradeoffs', label: 'Trade-Off Thinking', description: 'Do the "hard to cut" stories show genuine product judgment?', weight: 20 },
    ],
    skillsProven: ['Story mapping', 'MVP definition', 'Release planning', 'Product judgment'],
    relatedRoadmapIds: [],
  },

  // --- Topic 5: Gap Analysis ---
  {
    id: 'ba-skills-gap',
    categoryId: 'business-analysis',
    topicId: 'gap-analysis',
    level: 'beginner',
    title: 'Skills Gap Analysis',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Conduct a skills gap analysis for a team transitioning to automated dashboards.',
    scenario:
      'A 6-person finance team at a South African retailer currently produces monthly reports in Excel. The company is moving to Power BI dashboards. The team lead suspects not everyone has the skills to make the transition.',
    brief:
      'Conduct a skills gap analysis. Identify the required skills, assess the current team against them, and propose a training plan.',
    deliverables: [
      'A skills matrix: Required Skill × Team Member with current proficiency (1-5) for at least 8 skills',
      'A gap summary: which skills have the largest gaps and which team members need the most development',
      'A training plan: recommended training for each gap with timeline and estimated cost/effort',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A skills gap analysis is not a performance review. It identifies capability gaps, not individual failings. Frame it constructively.',
    rubric: [
      { key: 'matrix', label: 'Skills Matrix', description: 'Is the matrix comprehensive with realistic proficiency ratings?', weight: 30 },
      { key: 'gaps', label: 'Gap Identification', description: 'Are the critical gaps correctly identified and prioritised?', weight: 35 },
      { key: 'training', label: 'Training Plan', description: 'Is the training plan practical with realistic timelines?', weight: 35 },
    ],
    skillsProven: ['Skills gap analysis', 'Training needs assessment', 'Capability planning', 'HR collaboration'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-system-gap',
    categoryId: 'business-analysis',
    topicId: 'gap-analysis',
    level: 'intermediate',
    title: 'System Gap Analysis',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Analyse gaps between a current CRM and a proposed replacement.',
    scenario:
      'A property management company uses a 10-year-old CRM that lacks mobile access, automated workflows, and tenant self-service. They are evaluating a modern cloud CRM. The CEO wants to know: "What can the new system do that ours cannot, and what will we lose?"',
    brief:
      'Conduct a system gap analysis comparing the current CRM to the proposed replacement. Cover features, data, processes, and integration points.',
    deliverables: [
      'A feature comparison matrix: Feature × Current System × Proposed System × Gap/Overlap (at least 15 features)',
      'A data migration risk assessment: which data maps cleanly, which needs transformation, which will be lost',
      'A process impact analysis: which business processes change, which stay the same, and which break',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A gap analysis is not a sales pitch for the new system. Be honest about what the current system does well and what will be lost in migration.',
    rubric: [
      { key: 'features', label: 'Feature Comparison', description: 'Is the feature matrix comprehensive and balanced?', weight: 30 },
      { key: 'data', label: 'Data Migration Risk', description: 'Is the data assessment realistic about transformation challenges?', weight: 35 },
      { key: 'process', label: 'Process Impact', description: 'Does the analysis cover broken processes, not just improved ones?', weight: 35 },
    ],
    skillsProven: ['System gap analysis', 'Feature comparison', 'Data migration', 'Process impact assessment'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-popia-compliance-gap',
    categoryId: 'business-analysis',
    topicId: 'gap-analysis',
    level: 'advanced',
    title: 'Regulatory Compliance Gap Assessment',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Assess POPIA compliance gaps and produce a remediation roadmap.',
    scenario:
      'A South African healthcare provider processes patient data across 12 clinics. They have never formally assessed their POPIA compliance. The Information Regulator has started issuing enforcement notices to similar organisations. The board wants an honest assessment.',
    brief:
      'Conduct a POPIA compliance gap assessment. Evaluate current practices against POPIA requirements and produce a prioritised remediation roadmap.',
    deliverables: [
      'A compliance assessment matrix: POPIA Condition × Current Practice × Gap × Risk Rating (at least 8 conditions)',
      'A data flow map showing where personal information is collected, processed, stored, and shared',
      'A prioritised remediation roadmap: Critical (0-30 days), Important (30-90 days), Maintenance (ongoing)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'POPIA has 8 conditions for lawful processing. Do not just list them — assess each against what the healthcare provider actually does (invent realistic current practices).',
    rubric: [
      { key: 'assessment', label: 'Compliance Assessment', description: 'Are the POPIA conditions correctly assessed with realistic gaps?', weight: 30 },
      { key: 'data-flow', label: 'Data Flow Map', description: 'Is the data flow comprehensive for a healthcare context?', weight: 30 },
      { key: 'roadmap', label: 'Remediation Roadmap', description: 'Is the roadmap prioritised by risk with realistic timelines?', weight: 40 },
    ],
    skillsProven: ['POPIA compliance', 'Regulatory gap analysis', 'Data flow mapping', 'Remediation planning'],
    relatedRoadmapIds: [],
  },

  // --- Topic 6: Data Modelling & ERDs ---
  {
    id: 'ba-draw-erd',
    categoryId: 'business-analysis',
    topicId: 'data-modelling-erds',
    level: 'beginner',
    title: 'Draw an ERD',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create an entity-relationship diagram for a booking system.',
    scenario:
      'A beauty salon wants a booking system. They need to track customers, services offered, appointments, and payments. Some customers book multiple services in one appointment. The owner also wants to know which staff member performed each service.',
    brief:
      'Design an entity-relationship diagram (ERD) for this system. Identify entities, attributes, relationships, and cardinalities.',
    deliverables: [
      'An ERD (described in text or drawn) with at least 5 entities: Customer, Staff, Service, Appointment, Payment',
      'Attributes for each entity including primary keys and foreign keys',
      'Relationship descriptions with cardinality (one-to-many, many-to-many) and justification',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'An appointment can include multiple services (mani + pedi). This is a many-to-many relationship that needs a junction table. Show you understand this.',
    rubric: [
      { key: 'entities', label: 'Entity Design', description: 'Are the entities well-defined with appropriate attributes?', weight: 30 },
      { key: 'relationships', label: 'Relationships', description: 'Are the cardinalities correct, especially the many-to-many?', weight: 40 },
      { key: 'keys', label: 'Keys & Integrity', description: 'Are primary and foreign keys correctly identified?', weight: 30 },
    ],
    skillsProven: ['ERD design', 'Entity identification', 'Cardinality', 'Data modelling'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-normalise-data',
    categoryId: 'business-analysis',
    topicId: 'data-modelling-erds',
    level: 'intermediate',
    title: 'Normalise a Flat Dataset',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Take a denormalised spreadsheet and normalise it to 3NF.',
    scenario:
      'The sales team has been tracking customer orders in a single Excel spreadsheet with columns: OrderID, CustomerName, CustomerEmail, CustomerPhone, ProductName, ProductCategory, Quantity, Price, OrderDate, SalesRepName, SalesRepRegion. There are 5,000 rows with massive duplication.',
    brief:
      'Normalise this flat structure to Third Normal Form (3NF). Show each normalisation step with the reasoning for each decomposition.',
    deliverables: [
      'The original flat structure with sample data (5 rows) showing the duplication problem',
      'Step-by-step normalisation: 1NF → 2NF → 3NF with explanation of what violation each step removes',
      'The final normalised schema with tables, columns, primary keys, and foreign keys',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      '1NF removes repeating groups. 2NF removes partial dependencies. 3NF removes transitive dependencies. Show each violation before fixing it.',
    rubric: [
      { key: 'sample', label: 'Sample Data', description: 'Does the sample data clearly illustrate the duplication problem?', weight: 20 },
      { key: 'steps', label: 'Normalisation Steps', description: 'Is each step correctly explained with the violation identified?', weight: 40 },
      { key: 'schema', label: 'Final Schema', description: 'Is the 3NF schema correct with proper keys and relationships?', weight: 40 },
    ],
    skillsProven: ['Data normalisation', '1NF/2NF/3NF', 'Database design', 'Data quality'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-data-dictionary',
    categoryId: 'business-analysis',
    topicId: 'data-modelling-erds',
    level: 'advanced',
    title: 'Data Dictionary for a System Migration',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a data dictionary for migrating a legacy HR system.',
    scenario:
      'A South African company is migrating from a 15-year-old HR system to a modern cloud HRIS. The legacy system has 40+ tables with inconsistent naming, undocumented fields, and data quality issues. No documentation exists.',
    brief:
      'Build a comprehensive data dictionary for the migration. Cover field mappings, data transformations, validation rules, and data quality issues.',
    deliverables: [
      'A data dictionary for at least 5 key tables: Field Name, Data Type, Description, Source (legacy), Target (new), Transformation Rule',
      'A data quality report: at least 5 data quality issues found (nulls, duplicates, format inconsistencies) with remediation approach',
      'A migration validation plan: how to verify data integrity after migration (row counts, checksum, business rule validation)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Legacy systems always have surprises: fields repurposed for unintended data, business logic embedded in field values, and undocumented codes. Show you expect this.',
    rubric: [
      { key: 'dictionary', label: 'Data Dictionary', description: 'Is the dictionary comprehensive with clear transformation rules?', weight: 35 },
      { key: 'quality', label: 'Data Quality Report', description: 'Are the quality issues realistic for a legacy system?', weight: 30 },
      { key: 'validation', label: 'Validation Plan', description: 'Is the post-migration validation thorough and practical?', weight: 35 },
    ],
    skillsProven: ['Data dictionary', 'Data migration', 'Data quality', 'Legacy system analysis'],
    relatedRoadmapIds: [],
  },

  // --- Topic 7: Feasibility Studies ---
  {
    id: 'ba-feasibility-chatbot',
    categoryId: 'business-analysis',
    topicId: 'feasibility-studies',
    level: 'beginner',
    title: 'Feasibility Assessment Template',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create a feasibility assessment for introducing a chatbot to customer service.',
    scenario:
      'A South African insurance company receives 2,000 customer calls per day. 40% are simple queries (claim status, policy details). The CTO suggests a chatbot. The COO wants to know if it is feasible before committing budget.',
    brief:
      'Create a feasibility assessment covering technical, operational, financial, and schedule feasibility. Make a clear recommendation.',
    deliverables: [
      'A feasibility assessment with 4 dimensions: Technical, Operational, Financial, Schedule — each rated Green/Amber/Red',
      'Key assumptions and risks for each dimension',
      'A one-paragraph recommendation: proceed, proceed with conditions, or do not proceed',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A feasibility assessment is not a business case. It answers "can we do this?" not "should we do this?" Keep the scope tight.',
    rubric: [
      { key: 'dimensions', label: 'Four Dimensions', description: 'Are all 4 feasibility dimensions assessed with honest ratings?', weight: 35 },
      { key: 'risks', label: 'Risks & Assumptions', description: 'Are the risks realistic and the assumptions stated?', weight: 30 },
      { key: 'recommendation', label: 'Recommendation', description: 'Is the recommendation consistent with the assessment?', weight: 35 },
    ],
    skillsProven: ['Feasibility assessment', 'Risk identification', 'Structured analysis', 'Decision support'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-options-analysis',
    categoryId: 'business-analysis',
    topicId: 'feasibility-studies',
    level: 'intermediate',
    title: 'Options Analysis',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Evaluate build vs buy vs hybrid for a document management system.',
    scenario:
      'A law firm with 80 staff stores documents across shared drives, email attachments, and physical filing cabinets. They need a document management system. Three options: (A) build custom, (B) buy an off-the-shelf solution, (C) hybrid — buy a platform and customise.',
    brief:
      'Evaluate all 3 options using weighted scoring. Define evaluation criteria, assign weights, score each option, and make a recommendation.',
    deliverables: [
      'Evaluation criteria: at least 8 criteria (cost, time, fit, risk, etc.) with weights that sum to 100%',
      'A scoring matrix: Option × Criterion with scores (1-5) and weighted totals',
      'A recommendation with sensitivity analysis: does the recommendation change if you shift weights?',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Weighted scoring is only as good as the weights. If "cost" is 50% of the score, the cheapest option always wins. Show you have thought about weight balance.',
    rubric: [
      { key: 'criteria', label: 'Criteria Selection', description: 'Are the criteria comprehensive and appropriately weighted?', weight: 30 },
      { key: 'scoring', label: 'Scoring Matrix', description: 'Are the scores consistent and defensible?', weight: 35 },
      { key: 'sensitivity', label: 'Sensitivity Analysis', description: 'Does the sensitivity test show how robust the recommendation is?', weight: 35 },
    ],
    skillsProven: ['Options analysis', 'Weighted scoring', 'Decision-making', 'Sensitivity analysis'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-full-feasibility',
    categoryId: 'business-analysis',
    topicId: 'feasibility-studies',
    level: 'advanced',
    title: 'Full Feasibility Study',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Produce a feasibility study for digitising a municipality\'s service delivery.',
    scenario:
      'A South African metropolitan municipality wants to digitise its service delivery processes: utility bill payments, service requests (water leaks, potholes), building plan approvals. Currently everything is paper-based with 6-week turnarounds. The mayor wants a feasibility study.',
    brief:
      'Produce a comprehensive feasibility study covering technical, financial, operational, legal, and schedule feasibility. Include a risk register and a phased implementation recommendation.',
    deliverables: [
      'A feasibility assessment across 5 dimensions with detailed evidence for each rating',
      'A financial analysis: estimated costs (capex + opex), potential savings, and break-even timeline',
      'A risk register with at least 10 risks rated by likelihood × impact with mitigations',
      'A phased implementation recommendation: Phase 1 (quick wins), Phase 2 (core), Phase 3 (advanced)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Government digitisation has unique challenges: procurement regulations (PFMA), digital literacy of staff and citizens, and infrastructure constraints in some areas. Factor these in.',
    rubric: [
      { key: 'assessment', label: 'Feasibility Assessment', description: 'Are all 5 dimensions assessed with SA public sector realities?', weight: 25 },
      { key: 'financial', label: 'Financial Analysis', description: 'Are costs and savings realistic for a municipality context?', weight: 25 },
      { key: 'risks', label: 'Risk Register', description: 'Are the 10 risks realistic with proportionate mitigations?', weight: 25 },
      { key: 'phasing', label: 'Phased Recommendation', description: 'Is the phasing logical with clear criteria for progression?', weight: 25 },
    ],
    skillsProven: ['Feasibility studies', 'Public sector analysis', 'Risk management', 'Phased implementation'],
    relatedRoadmapIds: [],
  },

  // --- Topic 8: UAT Planning & Execution ---
  {
    id: 'ba-uat-test-cases',
    categoryId: 'business-analysis',
    topicId: 'uat-planning',
    level: 'beginner',
    title: 'Write UAT Test Cases',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write 10 UAT test cases for an online application form.',
    scenario:
      'A university has built an online admissions application form. Before go-live, business users need to test it. You have been asked to write the UAT test cases that the admissions team will execute.',
    brief:
      'Write 10 UAT test cases covering the happy path, edge cases, and error scenarios. Each test case should be executable by a non-technical user.',
    deliverables: [
      'Ten test cases in format: Test ID, Description, Pre-conditions, Steps, Expected Result, Pass/Fail criteria',
      'Coverage across: successful submission, required field validation, file upload, and duplicate detection',
      'At least 2 negative test cases (what should NOT work)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'UAT test cases are not developer unit tests. They are written in business language: "Submit an application with a Grade 12 certificate PDF attached" not "POST /api/applications with multipart form data."',
    rubric: [
      { key: 'format', label: 'Test Case Format', description: 'Are all 10 test cases properly structured and executable?', weight: 25 },
      { key: 'coverage', label: 'Scenario Coverage', description: 'Do the test cases cover happy path, edge cases, and errors?', weight: 40 },
      { key: 'language', label: 'Business Language', description: 'Are the test cases written for non-technical testers?', weight: 35 },
    ],
    skillsProven: ['UAT test cases', 'Test design', 'Business testing', 'Requirements validation'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-uat-plan-defect',
    categoryId: 'business-analysis',
    topicId: 'uat-planning',
    level: 'intermediate',
    title: 'UAT Plan & Defect Triage',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write a UAT plan with entry/exit criteria and a defect triage process.',
    scenario:
      'A payroll system upgrade is entering UAT. 15 business users from HR and Finance will test over 2 weeks. The project manager needs a structured UAT plan and a defect management process.',
    brief:
      'Write a complete UAT plan including scope, entry/exit criteria, test schedule, and a defect triage process with severity classifications.',
    deliverables: [
      'A UAT plan: scope, objectives, assumptions, entry criteria (what must be true before UAT starts)',
      'Exit criteria: what constitutes a successful UAT (e.g., "zero Critical defects, fewer than 3 Major")',
      'A defect triage process: severity levels (Critical/Major/Minor/Cosmetic), SLA for each, and escalation path',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Entry criteria prevent wasted effort. If the system crashes on login, UAT should not start. Exit criteria prevent premature go-live. Show both gates.',
    rubric: [
      { key: 'plan', label: 'UAT Plan Structure', description: 'Is the plan comprehensive with clear scope and objectives?', weight: 30 },
      { key: 'criteria', label: 'Entry/Exit Criteria', description: 'Are the criteria specific, measurable, and realistic?', weight: 35 },
      { key: 'triage', label: 'Defect Triage Process', description: 'Is the severity classification clear with appropriate SLAs?', weight: 35 },
    ],
    skillsProven: ['UAT planning', 'Entry/exit criteria', 'Defect management', 'Test governance'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-uat-multi-phase',
    categoryId: 'business-analysis',
    topicId: 'uat-planning',
    level: 'advanced',
    title: 'UAT Strategy for a Multi-Phase Rollout',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design the UAT strategy for a phased ERP rollout across 5 branches.',
    scenario:
      'A South African retail chain is rolling out a new ERP system across 5 branches over 10 months. Each branch has different product mixes, staff sizes, and legacy systems. The CTO wants a UAT strategy that ensures each branch is tested without delaying the next.',
    brief:
      'Design the complete UAT strategy covering regression testing, data migration validation, branch-specific testing, and go/no-go criteria.',
    deliverables: [
      'A UAT strategy document: scope per phase, test types (functional, regression, data migration, integration)',
      'A regression testing approach: what to re-test when Branch 3 goes live and Branches 1-2 are already in production',
      'Data migration validation: how to verify that each branch\'s historical data migrated correctly',
      'Go/no-go criteria for each branch with the decision-making authority clearly defined',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'In a phased rollout, Branch 3\'s UAT must include regression testing for Branches 1-2. Otherwise you fix Branch 3 and break Branch 1. Show this compounding complexity.',
    rubric: [
      { key: 'strategy', label: 'UAT Strategy', description: 'Is the strategy comprehensive and phasing-aware?', weight: 25 },
      { key: 'regression', label: 'Regression Approach', description: 'Does the regression strategy handle the compounding complexity?', weight: 25 },
      { key: 'migration', label: 'Data Migration Validation', description: 'Is the data validation thorough and branch-specific?', weight: 25 },
      { key: 'go-no-go', label: 'Go/No-Go Criteria', description: 'Are the criteria clear with defined decision authority?', weight: 25 },
    ],
    skillsProven: ['UAT strategy', 'Phased rollout', 'Regression testing', 'Data migration validation'],
    relatedRoadmapIds: [],
  },

  // --- Topic 9: Change Management ---
  {
    id: 'ba-change-impact',
    categoryId: 'business-analysis',
    topicId: 'change-management',
    level: 'beginner',
    title: 'Change Impact Assessment',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Assess the impact of a new time-tracking system on 3 departments.',
    scenario:
      'A company is replacing manual timesheets with a digital time-tracking system. It affects Sales (field-based, often offline), Operations (shift workers, shared devices), and Finance (payroll processing). Each department will experience different impacts.',
    brief:
      'Conduct a change impact assessment. For each department, identify what changes, who is affected, and the level of impact.',
    deliverables: [
      'A change impact matrix: Department × What Changes × Who Is Affected × Impact Level (High/Med/Low) × Readiness',
      'The top 3 risks across all departments with mitigation strategies',
      'One "quick win" per department that would build early adoption',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Impact is not just about the technology. A field salesperson who now has to track time on their phone while driving has a different impact than an office worker with a desktop.',
    rubric: [
      { key: 'matrix', label: 'Impact Matrix', description: 'Is the matrix comprehensive with department-specific impacts?', weight: 35 },
      { key: 'risks', label: 'Risk Identification', description: 'Are the risks specific to each department context?', weight: 30 },
      { key: 'quick-wins', label: 'Quick Wins', description: 'Are the quick wins practical and likely to build momentum?', weight: 35 },
    ],
    skillsProven: ['Change impact assessment', 'Risk analysis', 'Stakeholder empathy', 'Adoption planning'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-adkar-plan',
    categoryId: 'business-analysis',
    topicId: 'change-management',
    level: 'intermediate',
    title: 'Change Management Plan',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write an ADKAR-based change plan for migrating a sales team to a CRM.',
    scenario:
      'A 25-person sales team has used spreadsheets for 5 years. The company is implementing Salesforce. The sales director supports the change, but the team is sceptical — they see it as "management spying on their pipeline."',
    brief:
      'Write a change management plan using the ADKAR model (Awareness, Desire, Knowledge, Ability, Reinforcement). Address the scepticism directly.',
    deliverables: [
      'An ADKAR assessment: current state of the sales team across all 5 ADKAR elements',
      'Specific activities for each ADKAR element: what you will do to move the team through each stage',
      'A timeline: which ADKAR activities happen before, during, and after go-live',
      'A measurement plan: how you will know each ADKAR element has been achieved',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'ADKAR is sequential. You cannot build Knowledge (training) before Desire (motivation). If the team does not want the CRM, training is wasted. Show this sequencing.',
    rubric: [
      { key: 'assessment', label: 'ADKAR Assessment', description: 'Is the current-state assessment honest and specific?', weight: 25 },
      { key: 'activities', label: 'ADKAR Activities', description: 'Are the activities specific to each element and the team context?', weight: 30 },
      { key: 'timeline', label: 'Timeline', description: 'Does the timeline respect ADKAR sequencing?', weight: 20 },
      { key: 'measurement', label: 'Measurement Plan', description: 'Are the success measures observable and not just surveys?', weight: 25 },
    ],
    skillsProven: ['ADKAR methodology', 'Change management', 'Adoption planning', 'Measurement design'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-readiness-assessment',
    categoryId: 'business-analysis',
    topicId: 'change-management',
    level: 'advanced',
    title: 'Organisational Readiness Assessment',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design an organisational readiness assessment for a digital transformation.',
    scenario:
      'A South African financial services company (500 employees, 8 departments) is about to start a 2-year digital transformation. The CEO wants to know: "Are we ready?" before committing R15M. Past technology projects have failed due to poor adoption.',
    brief:
      'Design and conduct a hypothetical organisational readiness assessment. Cover leadership alignment, culture, capability, infrastructure, and change history.',
    deliverables: [
      'A readiness assessment framework: 5 dimensions with 3-4 indicators each, scored on a maturity scale',
      'Hypothetical assessment results with honest scores and evidence for each indicator',
      'A readiness heatmap: which departments are ready, which are at risk, and which are blockers',
      'A pre-launch remediation plan for the 3 lowest-scoring areas',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Organisational readiness is not about technology. A company with great tech but poor change leadership will fail. A company with basic tech but strong leadership will adapt. Show this understanding.',
    rubric: [
      { key: 'framework', label: 'Assessment Framework', description: 'Is the framework comprehensive with meaningful indicators?', weight: 25 },
      { key: 'results', label: 'Assessment Results', description: 'Are the scores realistic with honest evidence?', weight: 25 },
      { key: 'heatmap', label: 'Readiness Heatmap', description: 'Does the heatmap clearly show departmental variation?', weight: 25 },
      { key: 'remediation', label: 'Remediation Plan', description: 'Is the pre-launch plan targeted at the real blockers?', weight: 25 },
    ],
    skillsProven: ['Organisational readiness', 'Maturity assessment', 'Change management', 'Digital transformation'],
    relatedRoadmapIds: [],
  },

  // --- Topic 10: Business Case Development ---
  {
    id: 'ba-one-page-case',
    categoryId: 'business-analysis',
    topicId: 'business-case-development',
    level: 'beginner',
    title: 'One-Page Business Case',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a concise business case for purchasing a project management tool.',
    scenario:
      'A 20-person agency manages projects using email, WhatsApp, and shared Google Sheets. Deadlines are missed weekly. The operations manager wants to buy a project management tool (Asana, Monday.com, or similar) but needs approval from the managing director.',
    brief:
      'Write a one-page business case that convinces the MD to approve the purchase. Be concise — one page means every sentence must earn its place.',
    deliverables: [
      'A one-page business case with: Problem Statement, Proposed Solution, Benefits (quantified where possible), Costs, and Recommendation',
      'At least 2 quantified benefits (e.g., "reduce missed deadlines by 60%, saving estimated 15 hours/week of rework")',
      'A simple ROI calculation showing payback period',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A one-page business case is not a summary of a longer document. It is a standalone argument. The MD should be able to say yes or no after reading it.',
    rubric: [
      { key: 'structure', label: 'Business Case Structure', description: 'Does the one-pager cover all essential elements concisely?', weight: 25 },
      { key: 'benefits', label: 'Quantified Benefits', description: 'Are the benefits specific and credibly quantified?', weight: 35 },
      { key: 'persuasion', label: 'Persuasive Writing', description: 'Would a busy MD read this and make a decision?', weight: 40 },
    ],
    skillsProven: ['Business case writing', 'ROI calculation', 'Executive communication', 'Persuasive writing'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-cost-benefit',
    categoryId: 'business-analysis',
    topicId: 'business-case-development',
    level: 'intermediate',
    title: 'Cost-Benefit Analysis',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Produce a 3-year cost-benefit analysis for automating invoice processing.',
    scenario:
      'A company processes 500 invoices per month manually. Each invoice takes 15 minutes to process. The finance manager wants to automate using an invoice processing tool that costs R8,000/month. Is it worth it?',
    brief:
      'Produce a 3-year cost-benefit analysis covering all tangible and intangible costs and benefits. Show the break-even point.',
    deliverables: [
      'A cost table: Year 1-3 costs including software, implementation, training, and ongoing support',
      'A benefit table: Year 1-3 benefits including time savings (monetised), error reduction, and faster processing',
      'A break-even analysis showing when cumulative benefits exceed cumulative costs',
      'Intangible benefits and costs that cannot be easily quantified but should be considered',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Time savings must be monetised. 15 min × 500 invoices = 125 hours/month. At R200/hour loaded cost, that is R25,000/month in labour. But automation will not eliminate 100% — assume 70% reduction.',
    rubric: [
      { key: 'costs', label: 'Cost Analysis', description: 'Are all costs identified including hidden ones (training, change management)?', weight: 25 },
      { key: 'benefits', label: 'Benefit Quantification', description: 'Are benefits realistically quantified with clear assumptions?', weight: 30 },
      { key: 'breakeven', label: 'Break-Even Analysis', description: 'Is the break-even calculation correct and clearly presented?', weight: 25 },
      { key: 'intangibles', label: 'Intangible Factors', description: 'Are intangible costs and benefits identified and discussed?', weight: 20 },
    ],
    skillsProven: ['Cost-benefit analysis', 'Financial modelling', 'Break-even analysis', 'Business case'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ba-investment-case',
    categoryId: 'business-analysis',
    topicId: 'business-case-development',
    level: 'advanced',
    title: 'Investment Business Case with Risk Analysis',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a comprehensive business case for a R5M system overhaul.',
    scenario:
      'A South African logistics company\'s core operations system is 12 years old. It crashes weekly, cannot integrate with modern tracking APIs, and the vendor has announced end-of-life. A replacement will cost approximately R5M over 2 years. The board meets in 3 weeks.',
    brief:
      'Build a comprehensive investment business case suitable for board presentation. Include strategic alignment, financial analysis, risk assessment, and a clear recommendation.',
    deliverables: [
      'Strategic alignment: how the investment supports the company\'s 3-year strategy',
      'Financial analysis: 5-year NPV, ROI, and payback period with stated assumptions',
      'A risk register with at least 8 risks, each rated by likelihood × impact, with mitigations and contingencies',
      'A sensitivity analysis: how the NPV changes if costs increase by 20% or benefits decrease by 30%',
      'An executive summary (max 200 words) that a non-technical board member would understand',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A board-level business case is not a technical document. The board cares about: "How much? How long? What if it goes wrong? What happens if we do nothing?" Answer these.',
    rubric: [
      { key: 'strategy', label: 'Strategic Alignment', description: 'Is the investment clearly linked to business strategy?', weight: 20 },
      { key: 'financials', label: 'Financial Analysis', description: 'Are NPV, ROI, and payback correctly calculated?', weight: 25 },
      { key: 'risks', label: 'Risk Assessment', description: 'Is the risk register comprehensive with realistic mitigations?', weight: 25 },
      { key: 'executive', label: 'Executive Summary', description: 'Would a non-technical board member understand and act on this?', weight: 30 },
    ],
    skillsProven: ['Business case development', 'NPV/ROI', 'Risk analysis', 'Board-level communication'],
    relatedRoadmapIds: [],
  },
];


