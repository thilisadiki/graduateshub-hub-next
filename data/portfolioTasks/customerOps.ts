import type { PortfolioTask } from '@/types';

export const customerOpsTasks: PortfolioTask[] = [
  // --- Topic 1: Support Triage & De-escalation ---
  {
    id: 'co-triage-inbox',
    categoryId: 'customer-ops',
    topicId: 'support-triage-deescalation',
    level: 'beginner',
    title: 'Triage a Monday Morning Inbox',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Prioritise 10 support tickets from an e-commerce backlog.',
    scenario:
      'You are a junior support agent at a South African online retailer (similar to Takealot). It is Monday morning after a busy Black Friday weekend. You have a backlog of 1,000 tickets. Your team lead gives you a sample of 10 tickets and asks you to triage them.',
    brief:
      'Review the 10 tickets. Categorise each by issue type (e.g., Delivery, Payment, Return) and assign a priority (Low, Medium, High, Urgent). Write a 1-sentence rationale for each priority assignment.',
    deliverables: [
      'A triage log for 10 simulated tickets (provided in the prompt context) showing Category, Priority, and Rationale',
      'Identification of the 2 tickets that require immediate escalation to a manager',
      'A brief explanation of your overall triage strategy',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Urgent means business impact or severe customer distress (e.g., a payment went through 3 times). A late delivery is frustrating, but usually Medium or High, not Urgent. Note: Invent 10 realistic ticket scenarios to triage.',
    rubric: [
      { key: 'categorisation', label: 'Ticket Categorisation', description: 'Are the tickets correctly categorised by issue type?', weight: 30 },
      { key: 'prioritisation', label: 'Prioritisation Judgment', description: 'Is the priority level appropriate for the business impact?', weight: 40 },
      { key: 'rationale', label: 'Clear Rationale', description: 'Is the reasoning for each priority clear and logical?', weight: 30 },
    ],
    skillsProven: ['Ticket triage', 'Prioritisation', 'Business impact awareness', 'Decision making'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-deescalate-angry-customer',
    categoryId: 'customer-ops',
    topicId: 'support-triage-deescalation',
    level: 'intermediate',
    title: 'De-escalate an Angry Customer',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write a response to a furious customer whose wedding dress delivery was delayed.',
    scenario:
      'A customer ordered a bridesmaid dress for a wedding happening this Saturday. It was promised by Wednesday, but due to courier loadshedding delays, tracking shows it will only arrive on Monday. The customer has sent a furious, all-caps email threatening to ruin your brand on HelloPeter.',
    brief:
      'Write a response email to de-escalate the situation. You cannot magically make the dress arrive on time. You must deliver the bad news while maintaining empathy and offering a realistic, policy-compliant resolution.',
    deliverables: [
      'The response email to the customer',
      'An internal note on the ticket explaining your decision and any requested concessions (e.g., refunding delivery fees)',
      'A short analysis of why telling the customer "it\'s the courier\'s fault" is a bad strategy',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not make promises you cannot keep. Empathy is not just saying "I apologise for the inconvenience" — it is acknowledging the specific impact (the wedding).',
    rubric: [
      { key: 'empathy', label: 'Demonstrated Empathy', description: 'Does the response acknowledge the specific distress without sounding robotic?', weight: 40 },
      { key: 'resolution', label: 'Realistic Resolution', description: 'Is the offered solution realistic and policy-compliant?', weight: 35 },
      { key: 'internal-comms', label: 'Internal Communication', description: 'Is the internal note clear and actionable for the next agent/manager?', weight: 25 },
    ],
    skillsProven: ['De-escalation', 'Empathy', 'Conflict resolution', 'Customer communication'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-escalation-matrix',
    categoryId: 'customer-ops',
    topicId: 'support-triage-deescalation',
    level: 'advanced',
    title: 'Design an Escalation Matrix',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a multi-tier escalation matrix for a fintech startup.',
    scenario:
      'A South African fintech startup is growing fast. Currently, support agents just ping engineers on Slack when something goes wrong, causing chaos. The Head of Ops wants a formal escalation matrix to handle everything from forgotten passwords to suspected fraud and API outages.',
    brief:
      'Design a comprehensive escalation matrix. Define severity levels, response times (SLAs), and routing paths (who gets pinged when).',
    deliverables: [
      'An escalation matrix covering at least 4 severity levels (e.g., Sev1 to Sev4)',
      'Clear criteria for each severity level (e.g., financial loss, data breach, single-user bug)',
      'SLAs for First Response and Resolution for each level',
      'Routing rules: Tier 1 (Support) → Tier 2 (Specialist) → Tier 3 (Engineering/Management)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'If everything is Sev1, nothing is. Be strict about what actually requires waking an engineer up at 2 AM versus what can wait for business hours.',
    rubric: [
      { key: 'severity', label: 'Severity Definitions', description: 'Are the severity criteria distinct and business-focused?', weight: 30 },
      { key: 'slas', label: 'Realistic SLAs', description: 'Are the response and resolution times realistic for a startup?', weight: 30 },
      { key: 'routing', label: 'Routing Logic', description: 'Is the escalation path logical and protective of engineering time?', weight: 40 },
    ],
    skillsProven: ['Escalation management', 'SLA design', 'Process engineering', 'Incident routing'],
    relatedRoadmapIds: [],
  },

  // --- Topic 2: Standard Operating Procedures (SOPs) ---
  {
    id: 'co-write-basic-sop',
    categoryId: 'customer-ops',
    topicId: 'standard-operating-procedures',
    level: 'beginner',
    title: 'Write a Basic SOP',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Document the process for handling a customer address change request.',
    scenario:
      'Your company recently switched CRM systems. The new agents don\'t know how to properly update a customer\'s billing and shipping address, leading to packages going to the wrong province. You need to write a foolproof SOP.',
    brief:
      'Write a step-by-step Standard Operating Procedure (SOP) for updating a customer\'s address in the CRM, including security verification.',
    deliverables: [
      'A title, objective, and scope for the SOP',
      'Pre-requisites (e.g., security questions to verify identity before changing the address)',
      'Step-by-step instructions (numbered, clear, action-oriented)',
      'A "What to do if..." section covering at least 2 common edge cases',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Start steps with verbs ("Click the gear icon", "Verify the ID number"). Do not write paragraphs. A stressed agent reading this while on the phone needs scannability.',
    rubric: [
      { key: 'clarity', label: 'Instruction Clarity', description: 'Are the steps actionable, numbered, and easy to scan?', weight: 40 },
      { key: 'security', label: 'Security & Verification', description: 'Does the SOP mandate identity verification before the change?', weight: 30 },
      { key: 'edge-cases', label: 'Edge Case Handling', description: 'Are the edge cases realistic and helpful?', weight: 30 },
    ],
    skillsProven: ['SOP writing', 'Process documentation', 'Clarity', 'Security compliance'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-complex-refund-sop',
    categoryId: 'customer-ops',
    topicId: 'standard-operating-procedures',
    level: 'intermediate',
    title: 'Design a Multi-Step Approval SOP',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write the SOP for processing high-value refunds requiring manager sign-off.',
    scenario:
      'A hardware retailer allows agents to refund up to R500 immediately. Anything over R500 requires a manager\'s approval in Jira, and anything over R5,000 requires the item to be inspected by the warehouse first. The current process is undocumented and causing month-end accounting nightmares.',
    brief:
      'Write a comprehensive SOP for the high-value refund process, covering the agent, the manager, and the warehouse roles.',
    deliverables: [
      'A flowchart description or step-by-step breakdown of the routing logic (R0-R500 vs R501-R5000 vs R5000+)',
      'Specific instructions for what the agent must include in the Jira approval ticket',
      'The SLA for manager approval and warehouse inspection',
      'The exact final step required to close the loop with the customer',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This SOP spans multiple departments. It must be clear who owns the ticket at each stage so the customer doesn\'t fall into a black hole while waiting for the warehouse.',
    rubric: [
      { key: 'logic', label: 'Routing Logic', description: 'Is the threshold logic (amounts) clear and correctly applied?', weight: 30 },
      { key: 'handoffs', label: 'Department Handoffs', description: 'Are the handoffs between Agent, Manager, and Warehouse clear?', weight: 40 },
      { key: 'completeness', label: 'Process Completeness', description: 'Does the SOP close the loop with the customer and accounting?', weight: 30 },
    ],
    skillsProven: ['Cross-functional processes', 'Approval workflows', 'SOP design', 'Exception handling'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-audit-rewrite-sop',
    categoryId: 'customer-ops',
    topicId: 'standard-operating-procedures',
    level: 'advanced',
    title: 'Audit and Rewrite a Failing SOP',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Identify why an existing SOP is causing a 15% error rate and fix it.',
    scenario:
      'A subscription box company has a 15% error rate on subscription cancellations. Customers are still being billed after cancelling. The current SOP is a 3-page wall of text with outdated screenshots. Agents are skipping steps to save time.',
    brief:
      'Analyse a simulated "bad" SOP (provided by you in the output), identify the root causes of the errors, and rewrite the SOP to be error-proof and efficient.',
    deliverables: [
      'The "Bad SOP" (invent a realistic, bloated, confusing 3-paragraph SOP)',
      'An audit report detailing at least 3 reasons the old SOP caused billing errors',
      'The Rewritten SOP: streamlined, formatted, and incorporating a final "check" to prevent the billing error',
      'A proposal for a product/tech change that would make this SOP unnecessary',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The best ops professionals try to eliminate processes, not just document them. The final deliverable (suggesting a tech fix) is what separates a senior ops person from a junior one.',
    rubric: [
      { key: 'audit', label: 'Audit Quality', description: 'Does the audit correctly identify why the bad SOP fails in practice?', weight: 25 },
      { key: 'rewrite', label: 'SOP Rewrite', description: 'Is the new SOP significantly more usable and error-proof?', weight: 40 },
      { key: 'tech-fix', label: 'Tech Fix Proposal', description: 'Is the proposed system improvement logical and impactful?', weight: 35 },
    ],
    skillsProven: ['Process optimization', 'Root cause analysis', 'SOP auditing', 'Systems thinking'],
    relatedRoadmapIds: [],
  },

  // --- Topic 3: Quality Assurance & Ticket Review ---
  {
    id: 'co-grade-support-ticket',
    categoryId: 'customer-ops',
    topicId: 'qa-ticket-review',
    level: 'beginner',
    title: 'Grade a Support Interaction',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Evaluate an agent\'s email response using a standard QA rubric.',
    scenario:
      'You are doing weekly QA (Quality Assurance). You are reviewing an email where an agent replied to a customer asking how to change their password. The agent gave the correct technical answer but sounded robotic and forgot to link to the Help Centre.',
    brief:
      'Grade the provided interaction (invent the agent\'s email) using a 5-point rubric. Provide constructive feedback for the agent.',
    deliverables: [
      'The simulated customer query and the agent\'s response',
      'Completed QA Rubric scoring: Accuracy, Tone/Empathy, Efficiency, Spelling/Grammar, Next Issue Avoidance',
      'A short, constructive feedback message to the agent (how to improve next time)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Feedback should be actionable. "Do better on tone" is bad feedback. "Try adding a greeting and acknowledging their frustration before giving the steps" is good feedback.',
    rubric: [
      { key: 'rubric-use', label: 'Rubric Application', description: 'Are the scores justified by the content of the email?', weight: 30 },
      { key: 'feedback', label: 'Constructive Feedback', description: 'Is the feedback actionable, specific, and encouraging?', weight: 40 },
      { key: 'accuracy', label: 'QA Accuracy', description: 'Did the review catch the missing Help Centre link and robotic tone?', weight: 30 },
    ],
    skillsProven: ['Quality assurance', 'Rubric grading', 'Constructive feedback', 'Tone analysis'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-design-qa-rubric',
    categoryId: 'customer-ops',
    topicId: 'qa-ticket-review',
    level: 'intermediate',
    title: 'Design a QA Rubric',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Create a QA scorecard for a newly launched WhatsApp support channel.',
    scenario:
      'Your company (a local ISP) just launched WhatsApp support. The current email QA rubric doesn\'t work because WhatsApp requires shorter, faster, more conversational replies. Management wants a new QA scorecard specifically for chat.',
    brief:
      'Design a QA rubric for the WhatsApp channel. Define the criteria, the weighting, and what constitutes a "Fail", "Pass", and "Excellent" for each criterion.',
    deliverables: [
      'A QA scorecard with 4 to 6 criteria specific to live chat/WhatsApp',
      'Weighting for each criterion (totaling 100%)',
      'A definition guide: exactly what an agent must do to score "Excellent" vs "Fail" on the heaviest weighted criterion',
      'One "Auto-Fail" condition (a mistake so bad the whole ticket scores zero)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Email values thoroughness; chat values speed and conciseness. Your rubric should reflect this shift in channel dynamics.',
    rubric: [
      { key: 'criteria', label: 'Channel-Specific Criteria', description: 'Are the criteria tailored to WhatsApp/Chat rather than email?', weight: 35 },
      { key: 'weighting', label: 'Logical Weighting', description: 'Do the weights reflect business priorities (e.g., accuracy vs speed)?', weight: 30 },
      { key: 'definitions', label: 'Clear Definitions', description: 'Is the definition guide objective and measurable?', weight: 35 },
    ],
    skillsProven: ['QA design', 'Channel strategy', 'Performance measurement', 'Process design'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-qa-calibration-session',
    categoryId: 'customer-ops',
    topicId: 'qa-ticket-review',
    level: 'advanced',
    title: 'Lead a QA Calibration Session',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Resolve a dispute where two team leads graded the same ticket differently.',
    scenario:
      'During a QA calibration session, Team Lead A gave a ticket 100%. Team Lead B gave the exact same ticket 40% because the agent bent a company policy to help a distressed customer. The room is arguing. You need to mediate and establish a standard.',
    brief:
      'Document the disputed ticket, analyse the conflicting grades, and write a policy clarification memo that resolves the ambiguity for the future.',
    deliverables: [
      'The simulated ticket and the conflicting reviews from Lead A (pro-customer) and Lead B (pro-policy)',
      'Your analysis of the root cause of the misalignment (why the rubric allowed this discrepancy)',
      'A decision on the final grade with justification',
      'A "Policy vs. Empathy" guideline memo for the support team on when agents are allowed to bend rules',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Calibration isn\'t about who is right; it\'s about fixing the rubric or training so it doesn\'t happen again. Address the systemic issue.',
    rubric: [
      { key: 'analysis', label: 'Dispute Analysis', description: 'Does the analysis identify the ambiguity in the current system?', weight: 30 },
      { key: 'decision', label: 'Fair Decision', description: 'Is the final grade justified logically without alienating either lead?', weight: 30 },
      { key: 'memo', label: 'Guideline Memo', description: 'Does the memo provide clear boundaries for agent empowerment?', weight: 40 },
    ],
    skillsProven: ['QA calibration', 'Conflict mediation', 'Policy clarification', 'Agent empowerment'],
    relatedRoadmapIds: [],
  },
  // --- Topic 4: Policy Writing & Critique ---
  {
    id: 'co-draft-refund-policy',
    categoryId: 'customer-ops',
    topicId: 'policy-writing',
    level: 'beginner',
    title: 'Draft a Simple Refund Policy',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a customer-friendly return policy for a boutique clothing store.',
    scenario:
      'A local Instagram-based clothing brand is launching a Shopify store. They need a refund and exchange policy. They want to be friendly, but they cannot afford to take back clothes that have been worn to parties and returned the next day (wardrobing).',
    brief:
      'Draft a clear, firm, but friendly refund and exchange policy for the website.',
    deliverables: [
      'The Refund Policy (max 300 words)',
      'Clear conditions for return (time limits, condition of item, tags)',
      'The process the customer must follow',
      'Exceptions (what cannot be returned)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Avoid legalese ("heretofore", "indemnify"). Write in plain English so a 16-year-old can understand it. Be clear about who pays for return shipping.',
    rubric: [
      { key: 'clarity', label: 'Plain Language', description: 'Is the policy free of confusing legal jargon?', weight: 35 },
      { key: 'boundaries', label: 'Firm Boundaries', description: 'Does it explicitly protect the business against wardrobing?', weight: 35 },
      { key: 'process', label: 'Clear Process', description: 'Does the customer know exactly what step to take first?', weight: 30 },
    ],
    skillsProven: ['Policy writing', 'Plain English', 'Boundary setting', 'E-commerce ops'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-critique-hostile-policy',
    categoryId: 'customer-ops',
    topicId: 'policy-writing',
    level: 'intermediate',
    title: 'Critique a Hostile Policy',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Rewrite a gym cancellation policy that is causing PR backlash.',
    scenario:
      'A South African gym chain requires customers to come in person, fill out a paper form, and give 3 months\' notice to cancel a month-to-month contract. Twitter/X is furious. Management has finally agreed to change it, but needs you to rewrite the terms.',
    brief:
      'Analyse the provided "hostile" policy snippet, list why it is bad for the brand (and potentially violates the CPA - Consumer Protection Act), and write the modern, updated version.',
    deliverables: [
      'The "Hostile Policy" (invent a short, aggressive cancellation clause)',
      'A critique listing 3 reasons the policy is toxic/illegal',
      'The rewritten "Fair Cancellation Policy" that allows online cancellation but still protects the gym from sudden revenue drops (e.g., 1 full calendar month notice)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The Consumer Protection Act in SA requires reasonable cancellation terms. Your new policy must balance the business need for predictable revenue with the customer\'s right to leave easily.',
    rubric: [
      { key: 'critique', label: 'Policy Critique', description: 'Does the critique correctly identify the friction points?', weight: 30 },
      { key: 'rewrite', label: 'Balanced Rewrite', description: 'Does the new policy balance business needs with customer friction?', weight: 40 },
      { key: 'cpa', label: 'CPA Awareness', description: 'Is the new notice period reasonable under consumer law principles?', weight: 30 },
    ],
    skillsProven: ['Policy critique', 'Consumer protection', 'Brand tone', 'Friction reduction'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-fair-use-policy',
    categoryId: 'customer-ops',
    topicId: 'policy-writing',
    level: 'advanced',
    title: 'Draft a SaaS Fair Use Policy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Write the Acceptable Use Policy for an AI tool being abused by bots.',
    scenario:
      'A B2B SaaS startup offers "Unlimited AI Summaries" on its $20/mo plan. Three users have set up API scripts to summarise 10,000 documents a day, costing the startup thousands in OpenAI API fees. The startup needs to implement an Acceptable Use Policy (AUP) immediately to ban these users without angering normal customers.',
    brief:
      'Draft the Fair/Acceptable Use Policy section specifically addressing API abuse and "unlimited" tier boundaries, and draft the email that will be sent to the abusive users.',
    deliverables: [
      'The Fair Use Policy clause defining what constitutes "unreasonable or abusive usage" of the unlimited tier',
      'The specific actions the company reserves the right to take (throttling, suspension, billing)',
      'An email template to be sent to the 3 abusive users, giving them 24 hours to upgrade to an Enterprise plan or be suspended',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Writing an AUP requires precision. "Too much usage" is too vague. "Automated script scraping" or "usage 50x the median user" is precise.',
    rubric: [
      { key: 'precision', label: 'Definitional Precision', description: 'Is abuse clearly defined without restricting normal heavy users?', weight: 40 },
      { key: 'enforcement', label: 'Enforcement Rights', description: 'Does the policy give the business clear rights to act?', weight: 30 },
      { key: 'communication', label: 'Tough Communication', description: 'Is the warning email firm, professional, and clear on consequences?', weight: 30 },
    ],
    skillsProven: ['Acceptable Use Policies', 'Risk mitigation', 'Tough communication', 'SaaS operations'],
    relatedRoadmapIds: [],
  },

  // --- Topic 5: Knowledge Base Management ---
  {
    id: 'co-kb-article-basic',
    categoryId: 'customer-ops',
    topicId: 'knowledge-base-management',
    level: 'beginner',
    title: 'Write a Help Article',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a self-serve article for a common setup issue.',
    scenario:
      'Customers of a new meal-kit delivery service keep emailing to ask how to pause their subscription for the December holidays. The team wants to deflect these tickets by adding an article to the Help Centre.',
    brief:
      'Write the complete Help Centre article explaining how to pause a subscription.',
    deliverables: [
      'Article Title (optimised for search)',
      'A short intro explaining when/why you might use this feature',
      'Step-by-step instructions with placeholder tags for screenshots [Screenshot: XYZ]',
      'Important notes (e.g., cutoff times for pausing before the next delivery)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Titles should match how people search (e.g., "How to pause my box" not "Subscription Vacation State Modification"). Formatting (bolding, lists) is critical for readability.',
    rubric: [
      { key: 'searchability', label: 'Searchable Title', description: 'Is the title phrased how a user would search?', weight: 30 },
      { key: 'formatting', label: 'Readability', description: 'Are steps numbered, bolded correctly, and easy to skim?', weight: 40 },
      { key: 'completeness', label: 'Completeness', description: 'Does it include the crucial cutoff time warning?', weight: 30 },
    ],
    skillsProven: ['Knowledge base writing', 'Information architecture', 'Ticket deflection', 'Formatting'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-kb-audit-rewrite',
    categoryId: 'customer-ops',
    topicId: 'knowledge-base-management',
    level: 'intermediate',
    title: 'Audit & Restructure a Category',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Fix a messy "Billing" section in a Help Centre.',
    scenario:
      'A software company\'s "Billing & Invoices" Help Centre category is a mess. It has 15 articles with overlapping titles like "Invoices", "Where is my invoice", "Billing issues", and "Credit card update". Users can\'t find anything, so they just email support.',
    brief:
      'Audit the list of provided article titles, consolidate them, and propose a new, clean Information Architecture (IA) for the Billing category.',
    deliverables: [
      'The "Messy List" (invent 12-15 confusing, overlapping billing article titles)',
      'Your proposed restructuring: group them into logical sub-categories',
      'Consolidation notes (e.g., "Merge article 3 and 7 into one called How to Update Payment Details")',
      'The final, clean list of 5-7 optimized article titles',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Good KB management is more about deleting and merging than writing new content. Group by user intent (e.g., Setup, Troubleshooting, Admin).',
    rubric: [
      { key: 'consolidation', label: 'Effective Consolidation', description: 'Did you successfully merge redundant articles?', weight: 35 },
      { key: 'architecture', label: 'Information Architecture', description: 'Are the sub-categories logical and MECE (Mutually Exclusive, Collectively Exhaustive)?', weight: 35 },
      { key: 'naming', label: 'Clear Naming', description: 'Are the final article titles action-oriented and clear?', weight: 30 },
    ],
    skillsProven: ['Information architecture', 'Content auditing', 'Knowledge base management', 'Taxonomy design'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-internal-kb-macro',
    categoryId: 'customer-ops',
    topicId: 'knowledge-base-management',
    level: 'advanced',
    title: 'Design an Internal Troubleshooting Tree',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Create an internal decision tree for agents handling hardware faults.',
    scenario:
      'You work for a company that sells smart home security cameras. When a camera goes offline, agents waste 20 minutes asking random questions. You need to create an internal troubleshooting tree (a macro flow) so agents follow a strict, logical diagnostic process before approving a hardware replacement.',
    brief:
      'Design the internal troubleshooting flow for an "Offline Camera" ticket.',
    deliverables: [
      'The decision tree logic (If X, ask Y; If Z, escalate to Tier 2)',
      'The exact scripts/macros the agent should use to ask the customer questions at each step',
      'The strict criteria required before an agent is allowed to click "Approve RMA (Replacement)"',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Start with the most common, easiest-to-fix issues (e.g., power, wifi changed) before asking the customer to climb a ladder to reset the device. Be logical and progressive.',
    rubric: [
      { key: 'logic', label: 'Diagnostic Logic', description: 'Does the tree follow a logical path from simple checks to complex ones?', weight: 40 },
      { key: 'macros', label: 'Agent Macros', description: 'Are the provided scripts for the agents clear and customer-friendly?', weight: 30 },
      { key: 'criteria', label: 'Replacement Criteria', description: 'Are the rules for approving a hardware replacement strict and clear?', weight: 30 },
    ],
    skillsProven: ['Diagnostic logic', 'Internal tooling', 'Process mapping', 'Hardware support ops'],
    relatedRoadmapIds: [],
  },

  // --- Topic 6: Customer Success & Onboarding ---
  {
    id: 'co-cs-welcome-sequence',
    categoryId: 'customer-ops',
    topicId: 'customer-success-onboarding',
    level: 'beginner',
    title: 'Write a Welcome Sequence',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Draft a 3-part email onboarding sequence for a new B2B user.',
    scenario:
      'A local accounting software startup just signed up a new small business. They currently just send one automated receipt. The founders want a Customer Success welcome sequence to get the user to actually set up their account and run their first payroll.',
    brief:
      'Write a 3-part automated email sequence (Day 1, Day 3, Day 7) designed to drive product adoption.',
    deliverables: [
      'Email 1 (Day 1): Welcome and the Single Most Important Task (e.g., connect bank account)',
      'Email 2 (Day 3): A quick win / feature highlight (e.g., send your first invoice)',
      'Email 3 (Day 7): The check-in and offer for a 15-min setup call if they are stuck',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not overwhelm them in Email 1. One clear Call to Action (CTA) per email. Keep it short, punchy, and helpful.',
    rubric: [
      { key: 'structure', label: 'Pacing & Sequence', description: 'Do the emails logically progress from setup to usage?', weight: 35 },
      { key: 'cta', label: 'Clear CTAs', description: 'Does each email have exactly one clear Call to Action?', weight: 35 },
      { key: 'tone', label: 'Tone', description: 'Is the tone helpful, professional, and encouraging?', weight: 30 },
    ],
    skillsProven: ['Customer onboarding', 'Email sequencing', 'Product adoption', 'Customer success'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-cs-health-check',
    categoryId: 'customer-ops',
    topicId: 'customer-success-onboarding',
    level: 'intermediate',
    title: 'Conduct an Account Health Check',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Analyse an enterprise client\'s usage data and prep for a QBR.',
    scenario:
      'You are a CS Manager. You have a Quarterly Business Review (QBR) with a key client tomorrow. Their renewal is up in 60 days. Looking at the data, their daily active users have dropped by 30%, but they are using a new premium feature heavily.',
    brief:
      'Prepare the agenda and talking points for the QBR to address the churn risk while highlighting the value they are getting.',
    deliverables: [
      'A 4-point agenda for the 45-minute QBR meeting',
      'The "Value Realised" talking points (focusing on the premium feature)',
      'The "Churn Risk" talking points (how you will tactfully address the drop in active users)',
      'One proposed solution/campaign to re-engage their dormant users',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not hide the bad news. Good CS managers bring up usage drops proactively before the client uses it as an excuse to cancel. Frame it as "How can we help your team get more value?"',
    rubric: [
      { key: 'agenda', label: 'Meeting Structure', description: 'Is the agenda professional and appropriately timed?', weight: 20 },
      { key: 'tact', label: 'Addressing Risk Tactfully', description: 'Is the drop in usage addressed proactively but not defensively?', weight: 40 },
      { key: 'solution', label: 'Proactive Solution', description: 'Is the proposed re-engagement strategy realistic and helpful?', weight: 40 },
    ],
    skillsProven: ['Quarterly Business Reviews (QBRs)', 'Account health analysis', 'Churn prevention', 'Client management'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-cs-churn-autopsy',
    categoryId: 'customer-ops',
    topicId: 'customer-success-onboarding',
    level: 'advanced',
    title: 'Perform a Churn Autopsy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Investigate why a top client left and present the findings to leadership.',
    scenario:
      'Your biggest client just cancelled their R50k/month contract. The sales team blames the product being buggy. The product team blames CS for poor training. The CEO wants a blameless post-mortem (Churn Autopsy) by tomorrow.',
    brief:
      'Create a Churn Autopsy report. Invent the timeline of failure (from onboarding issues, to support tickets, to the final cancellation call) and identify the true root causes.',
    deliverables: [
      'A timeline of the client lifecycle highlighting 3 major "failure points" over the last year',
      'An analysis of the Root Cause (e.g., misalignment during sales, a critical bug, or lack of adoption)',
      '3 Actionable Recommendations for the broader business to prevent this specific churn reason in the future (one for Sales, one for Product, one for CS)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A blameless post-mortem focuses on systems, not people. Do not write "John in sales lied." Write "The sales qualification checklist does not mandate verifying API compatibility, leading to a mismatched expectation."',
    rubric: [
      { key: 'timeline', label: 'Timeline Logic', description: 'Does the timeline tell a realistic story of a deteriorating client relationship?', weight: 30 },
      { key: 'root-cause', label: 'Root Cause Analysis', description: 'Does the analysis dig past surface-level excuses to find the systemic flaw?', weight: 35 },
      { key: 'actionable', label: 'Actionable Recommendations', description: 'Are the recommendations specific, cross-functional, and systemic?', weight: 35 },
    ],
    skillsProven: ['Churn analysis', 'Blameless post-mortems', 'Cross-functional leadership', 'Root cause analysis'],
    relatedRoadmapIds: [],
  },

  // --- Topic 7: Incident Management & Communication ---
  {
    id: 'co-incident-status-page',
    categoryId: 'customer-ops',
    topicId: 'incident-management-comms',
    level: 'beginner',
    title: 'Write Status Page Updates',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Draft the public communications during a live payment gateway outage.',
    scenario:
      'It is month-end payday. Your payment gateway goes down. Customers cannot checkout. Engineering says they are "looking into it" but don\'t have an ETA. You need to update the public Status Page immediately.',
    brief:
      'Write the sequence of 3 status page updates spanning the lifecycle of the incident.',
    deliverables: [
      'Update 1 (Investigating): The initial acknowledgement of the issue',
      'Update 2 (Identified): 45 mins later, engineering found the issue and is deploying a fix',
      'Update 3 (Resolved): 2 hours later, systems are stable. What the customer should do if a payment got stuck.',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Status page updates must be factual, calm, and void of jargon. Do not say "Our Redis cluster segfaulted." Say "We are experiencing degraded performance in our checkout flow."',
    rubric: [
      { key: 'clarity', label: 'Clarity and Calmness', description: 'Are the updates professional, calm, and easy to understand?', weight: 35 },
      { key: 'transparency', label: 'Transparency', description: 'Do the updates acknowledge the issue without over-promising ETAs?', weight: 35 },
      { key: 'actionable', label: 'Actionable Next Steps', description: 'Does the resolution update tell affected customers exactly what to do?', weight: 30 },
    ],
    skillsProven: ['Incident communication', 'Status page management', 'Crisis comms', 'Plain English writing'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-incident-internal-comms',
    categoryId: 'customer-ops',
    topicId: 'incident-management-comms',
    level: 'intermediate',
    title: 'Manage Internal Incident Comms',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write the internal Slack updates and executive summary during a data breach.',
    scenario:
      'A third-party marketing tool was compromised, and 5,000 of your customers\' email addresses were leaked. It\'s an active Sev1 incident. The CEO is panicking, the support team is confused, and engineering is trying to lock down the system.',
    brief:
      'Act as the Incident Commander for communications. Draft the internal updates to keep the company aligned without distracting the engineers.',
    deliverables: [
      'An initial `@channel` Slack blast to the whole company explaining the situation and declaring a code red',
      'A strict instruction to the Support Team on exactly what to tell customers right now (an interim macro)',
      'A 3-bullet executive summary to be sent to the CEO and Legal team detailing the known scope of the breach',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Internal incident comms are about control. You must stop sales reps from tweeting, stop support agents from guessing, and give executives just enough info so they don\'t barge into the war room.',
    rubric: [
      { key: 'control', label: 'Command and Control', description: 'Does the Slack blast establish clear authority and instructions?', weight: 35 },
      { key: 'support-alignment', label: 'Support Alignment', description: 'Is the interim macro safe, legal, and clear for agents to use?', weight: 35 },
      { key: 'exec-summary', label: 'Executive Summarisation', description: 'Is the update to the CEO concise and focused on risk/scope?', weight: 30 },
    ],
    skillsProven: ['Incident command', 'Internal comms', 'Crisis management', 'Cross-functional alignment'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-incident-post-mortem',
    categoryId: 'customer-ops',
    topicId: 'incident-management-comms',
    level: 'advanced',
    title: 'Write an External Post-Mortem',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Draft the public apology and technical explanation after a 6-hour outage.',
    scenario:
      'Your B2B software was completely offline for 6 hours on a Tuesday due to a botched database migration. Customers lost revenue. The CEO wants a public post-mortem published on the blog to rebuild trust.',
    brief:
      'Write the public post-mortem blog post. It must balance technical honesty with sincere apology and clear preventative measures.',
    deliverables: [
      'A sincere apology section acknowledging the specific business impact on your customers',
      'The "What Happened" section (a readable timeline of the technical failure)',
      'The "What We Are Doing About It" section (3 concrete engineering/process changes to prevent recurrence)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good public post-mortem takes ownership. Never blame an individual engineer. Explain the systems failure clearly enough that technical users respect your honesty, but simple enough that a business owner understands it.',
    rubric: [
      { key: 'apology', label: 'Sincere Apology', description: 'Does the apology take full ownership without making excuses?', weight: 30 },
      { key: 'technical-clarity', label: 'Technical Clarity', description: 'Is the failure explained transparently but accessibly?', weight: 35 },
      { key: 'prevention', label: 'Concrete Prevention', description: 'Are the preventative measures specific and reassuring?', weight: 35 },
    ],
    skillsProven: ['Public relations', 'Post-mortem writing', 'Technical communication', 'Trust rebuilding'],
    relatedRoadmapIds: [],
  },
  // --- Topic 8: Logistics & Dispatch Operations ---
  {
    id: 'co-route-optimisation-basic',
    categoryId: 'customer-ops',
    topicId: 'logistics-dispatch',
    level: 'beginner',
    title: 'Optimise a Delivery Route',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Sequence 5 deliveries for a driver to minimise time and mileage.',
    scenario:
      'A florist in Cape Town has one driver and 5 deliveries to make this morning. The system broke, and the deliveries are just listed in the order they were purchased. The driver needs a logical sequence to follow.',
    brief:
      'Review the 5 delivery addresses and their required delivery windows (provided in the prompt context). Create an optimised delivery sequence.',
    deliverables: [
      'The optimized delivery sequence (1 through 5)',
      'A short rationale explaining why you chose this route (e.g., geographic clustering vs. time window priority)',
      'A template SMS message to send to the 5th customer explaining their estimated time of arrival',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume standard geographic knowledge or use Google Maps. Priority is hitting the promised time windows; secondary priority is saving fuel.',
    rubric: [
      { key: 'sequencing', label: 'Logical Sequencing', description: 'Is the route geographically logical?', weight: 40 },
      { key: 'time-windows', label: 'Time Window Adherence', description: 'Are the time windows respected in the sequence?', weight: 30 },
      { key: 'comms', label: 'Customer Communication', description: 'Is the ETA SMS clear and professional?', weight: 30 },
    ],
    skillsProven: ['Route planning', 'Logistics coordination', 'Time management', 'Proactive communication'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-dispatch-exception-handling',
    categoryId: 'customer-ops',
    topicId: 'logistics-dispatch',
    level: 'intermediate',
    title: 'Handle a Dispatch Exception',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Resolve a situation where a driver\'s van broke down halfway through their route.',
    scenario:
      'You are the Dispatch Manager for a courier company. Driver A\'s van has broken down on the N1 highway. They have 15 parcels left on board, 3 of which are medical supplies with a strict 4 PM delivery deadline. It is currently 1 PM.',
    brief:
      'Formulate a recovery plan. You have one backup driver (Driver B) currently 30 minutes away, but pulling them off their route will delay 10 non-urgent residential deliveries.',
    deliverables: [
      'Your immediate action plan (who is doing what right now)',
      'The communication sent to Driver A and Driver B',
      'The triage decision: which parcels get rescued by Driver B, and which stay in the broken van for the tow truck',
      'The SMS sent to the 10 customers whose residential deliveries are now delayed',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Exception handling is about triage. You cannot save every SLA. Protect the medical supplies, sacrifice the residential deliveries, and over-communicate.',
    rubric: [
      { key: 'triage', label: 'Triage Decision', description: 'Did you correctly prioritise the medical supplies over residential?', weight: 40 },
      { key: 'logistics', label: 'Action Plan', description: 'Is the physical logistics plan (Driver B rescue) realistic?', weight: 30 },
      { key: 'comms', label: 'Delay Communication', description: 'Is the delay message to the impacted customers apologetic but firm?', weight: 30 },
    ],
    skillsProven: ['Exception handling', 'Triage', 'Crisis management', 'Logistics operations'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-last-mile-sop',
    categoryId: 'customer-ops',
    topicId: 'logistics-dispatch',
    level: 'advanced',
    title: 'Design a Last-Mile SOP',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Write the protocol for handling "Customer Not Home" scenarios.',
    scenario:
      'A new grocery delivery app is losing money because drivers are waiting 15 minutes outside apartments when customers don\'t answer the intercom. They return the groceries, the cold chain breaks, and the food is written off. You need a strict "Customer Not Home" protocol.',
    brief:
      'Design a Last-Mile SOP that balances customer service with driver efficiency and cold-chain compliance.',
    deliverables: [
      'The step-by-step protocol for the driver when a customer does not answer',
      'The exact time limit the driver is allowed to wait',
      'The script the driver must use when calling the customer',
      'The policy on what to do with the groceries if the delivery fails (e.g., leave at gate vs. return to dark store)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Drivers need binary rules. "Wait a reasonable amount of time" is bad ops. "Wait exactly 5 minutes, call twice, then swipe Failed" is good ops.',
    rubric: [
      { key: 'binary-rules', label: 'Binary Rules', description: 'Are the time limits and steps strict and unambiguous?', weight: 35 },
      { key: 'efficiency', label: 'Driver Efficiency', description: 'Does the SOP protect the driver\'s time?', weight: 35 },
      { key: 'policy', label: 'Cold-Chain Protection', description: 'Is the return/abandon policy clear regarding perishable goods?', weight: 30 },
    ],
    skillsProven: ['Last-mile logistics', 'SOP design', 'Driver management', 'Loss prevention'],
    relatedRoadmapIds: [],
  },

  // --- Topic 9: Vendor & Supplier Management ---
  {
    id: 'co-vendor-sla-audit',
    categoryId: 'customer-ops',
    topicId: 'vendor-supplier-management',
    level: 'beginner',
    title: 'Audit a Vendor SLA',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Review a courier partner\'s monthly performance against their contract.',
    scenario:
      'You manage the relationship with an outsourced courier. Their contract (SLA) states they must deliver 95% of parcels within 48 hours, and reply to support queries within 4 hours. You have their monthly data report.',
    brief:
      'Audit the provided data snippet. Identify if they missed their SLA, calculate the gap, and draft an email requesting an explanation.',
    deliverables: [
      'The calculation of their On-Time Delivery % and Average Support Reply Time based on the provided data',
      'A clear statement of whether they Pass or Fail the SLA',
      'A professional email to the vendor\'s Account Manager highlighting the misses and asking for a remediation plan',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Be professional but firm. Vendors are partners, but they must be held accountable. Focus on the data, not emotion.',
    rubric: [
      { key: 'analysis', label: 'Data Analysis', description: 'Did you correctly identify the SLA breaches?', weight: 35 },
      { key: 'tone', label: 'Professional Tone', description: 'Is the email firm but respectful of the partnership?', weight: 35 },
      { key: 'action', label: 'Remediation Request', description: 'Did you clearly ask for a plan to fix the issue?', weight: 30 },
    ],
    skillsProven: ['SLA monitoring', 'Vendor management', 'Data analysis', 'Professional communication'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-vendor-dispute-resolution',
    categoryId: 'customer-ops',
    topicId: 'vendor-supplier-management',
    level: 'intermediate',
    title: 'Resolve a Supplier Dispute',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Handle a situation where a packaging supplier delivered defective boxes.',
    scenario:
      'Your e-commerce company ordered 10,000 custom-branded boxes. They arrived, but the glue is weak and the boxes pop open during transit, causing customer damages. The supplier claims you didn\'t specify the glue strength in the PO and refuses a free reprint.',
    brief:
      'Draft a negotiation strategy and the formal email response to the supplier to resolve the dispute without going to court.',
    deliverables: [
      'Your internal negotiation strategy (What is your ideal outcome? What is your walk-away point?)',
      'The formal response email to the supplier',
      'A proposed compromise (e.g., they reprint at cost, or you split the difference)',
      'A new checklist item for future Purchase Orders (POs) to prevent this',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Ops is about keeping the business moving. Suing a supplier takes 2 years. You need boxes now. Find a pragmatic compromise that shares the pain.',
    rubric: [
      { key: 'strategy', label: 'Negotiation Strategy', description: 'Is the strategy pragmatic and focused on getting usable boxes?', weight: 30 },
      { key: 'communication', label: 'Formal Response', description: 'Is the email assertive without burning the relationship completely?', weight: 40 },
      { key: 'prevention', label: 'Process Improvement', description: 'Is the PO checklist addition logical?', weight: 30 },
    ],
    skillsProven: ['Dispute resolution', 'Vendor negotiation', 'Supply chain ops', 'Pragmatism'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-vendor-rfp-evaluation',
    categoryId: 'customer-ops',
    topicId: 'vendor-supplier-management',
    level: 'advanced',
    title: 'Evaluate an RFP (Request for Proposal)',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Score three BPO (call centre) vendors and recommend a winner.',
    scenario:
      'Your startup is scaling and needs to outsource weekend customer support. You issued an RFP. You have received three proposals: Vendor A (Cheapest, based offshore), Vendor B (Mid-price, local but new), Vendor C (Expensive, highly experienced local).',
    brief:
      'Create a scoring matrix to evaluate the three vendors objectively, score them based on the provided profiles, and write a recommendation memo to the CEO.',
    deliverables: [
      'An evaluation matrix with 4 to 5 weighted criteria (e.g., Cost, Language/Accent, Tech Stack, SLA Guarantee)',
      'The completed scoring for Vendors A, B, and C',
      'A 1-page recommendation memo to the CEO defending your choice',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not just pick the cheapest. Think about the brand impact. The CEO will look at your matrix to see if your recommendation is based on logic or gut feel.',
    rubric: [
      { key: 'matrix', label: 'Matrix Design', description: 'Are the criteria and weights aligned with a customer support rollout?', weight: 35 },
      { key: 'scoring', label: 'Objective Scoring', description: 'Are the scores logically applied based on the vendor profiles?', weight: 30 },
      { key: 'memo', label: 'Executive Memo', description: 'Does the memo confidently defend the ROI of the chosen vendor?', weight: 35 },
    ],
    skillsProven: ['RFP evaluation', 'Vendor selection', 'Executive communication', 'Cost-benefit analysis'],
    relatedRoadmapIds: [],
  },

  // --- Topic 10: Operational Metrics & Reporting ---
  {
    id: 'co-metrics-csat-analysis',
    categoryId: 'customer-ops',
    topicId: 'operational-metrics',
    level: 'beginner',
    title: 'Analyse a Drop in CSAT',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Figure out why Customer Satisfaction dropped from 92% to 78% this week.',
    scenario:
      'You are reviewing the weekly ops dashboard. Customer Satisfaction (CSAT) plummeted this week. You dig into the raw feedback comments and see a trend: customers are angry because their promo codes for a new marketing campaign didn\'t work at checkout.',
    brief:
      'Write a brief incident report explaining the drop in CSAT to the marketing team, who ran the campaign.',
    deliverables: [
      'A summary of the metric drop (92% to 78%)',
      'The root cause analysis based on the feedback comments',
      'The operational impact (e.g., "This caused 400 extra support tickets")',
      'A request for process change from Marketing (e.g., testing codes before launch)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Ops often has to tell other departments when their mistakes impact the customer. Be factual, use data, and avoid sounding accusatory. Focus on the impact on the support queue.',
    rubric: [
      { key: 'data', label: 'Data Summary', description: 'Is the metric drop clearly communicated?', weight: 30 },
      { key: 'root-cause', label: 'Root Cause Connection', description: 'Is the connection between the promo code bug and the CSAT drop clear?', weight: 35 },
      { key: 'collaboration', label: 'Cross-functional Ask', description: 'Is the request to Marketing professional and process-focused?', weight: 35 },
    ],
    skillsProven: ['Metrics analysis', 'CSAT', 'Cross-functional feedback', 'Reporting'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-metrics-dashboard-design',
    categoryId: 'customer-ops',
    topicId: 'operational-metrics',
    level: 'intermediate',
    title: 'Design an Ops Dashboard',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Choose the 5 critical metrics the Head of Ops should look at every morning.',
    scenario:
      'The Head of Ops is overwhelmed by a dashboard with 40 different charts. She has asked you to design a new "Morning Coffee Dashboard" — just the 5 most important metrics she needs to know if the business is healthy today.',
    brief:
      'Select the 5 most critical metrics for a high-volume e-commerce business. Define exactly what they measure and why they matter.',
    deliverables: [
      'A list of the 5 chosen metrics (e.g., First Reply Time, Order Defect Rate)',
      'The exact formula or definition for each metric',
      'A 1-sentence justification for why this made the top 5 list over other vanity metrics',
      'The "Red Flag" threshold for each (at what number should she panic?)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Avoid vanity metrics like "Total Emails Received". Focus on health and efficiency. Think: speed, quality, backlog, and errors.',
    rubric: [
      { key: 'selection', label: 'Metric Selection', description: 'Are the 5 metrics actionable indicators of operational health?', weight: 40 },
      { key: 'definitions', label: 'Clear Definitions', description: 'Are the formulas/definitions accurate?', weight: 30 },
      { key: 'thresholds', label: 'Actionable Thresholds', description: 'Are the "Red Flag" thresholds realistic?', weight: 30 },
    ],
    skillsProven: ['Dashboard design', 'KPI selection', 'Operational health monitoring'],
    relatedRoadmapIds: [],
  },
  {
    id: 'co-metrics-capacity-planning',
    categoryId: 'customer-ops',
    topicId: 'operational-metrics',
    level: 'advanced',
    title: 'Build a Capacity Model',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Calculate how many agents you need to hire for the upcoming Black Friday peak.',
    scenario:
      'It is September. Black Friday is in November. Marketing forecasts a 300% increase in orders. Currently, you have 10 agents handling 1,000 tickets a week. Each agent handles roughly 100 tickets a week. You need to present a hiring plan to Finance.',
    brief:
      'Build a simple capacity model to determine how many temp agents to hire, factoring in training time and a lower efficiency rate for temps.',
    deliverables: [
      'The forecasted ticket volume for Black Friday week',
      'The assumption list (e.g., "Temps will only be 70% as efficient as full-time agents")',
      'The final calculation of how many heads you need to hire',
      'A short memo to Finance defending the budget request',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not just multiply by 3. New hires are not instantly 100% productive. Your model must show that you understand ramp-up time and shrinkage (breaks, sick leave).',
    rubric: [
      { key: 'model', label: 'Mathematical Logic', description: 'Is the capacity math correct based on the stated assumptions?', weight: 40 },
      { key: 'assumptions', label: 'Realistic Assumptions', description: 'Did the model account for temp inefficiency and shrinkage?', weight: 30 },
      { key: 'memo', label: 'Finance Memo', description: 'Does the memo clearly explain the ROI of hiring the temps?', weight: 30 },
    ],
    skillsProven: ['Capacity planning', 'Forecasting', 'Budgeting', 'Data modeling'],
    relatedRoadmapIds: [],
  },
];


