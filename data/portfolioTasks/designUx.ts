import type { PortfolioTask } from '@/types';

export const designUxTasks: PortfolioTask[] = [

  {
    id: 'ux-teardown-sa-site',
    categoryId: 'design-ux',
    topicId: 'ux-teardown',
    level: 'beginner',
    title: 'UX Teardown of a South African Website',
    difficulty: 'Beginner',
    estimatedHours: '2 hours',
    tagline: 'Critique a real SA site\'s booking flow and propose three fixes.',
    scenario:
      'You have been asked to review the booking or checkout flow of any well-known South African website of your choice (examples: Takealot, Checkers Sixty60, Uber Eats, Discovery, SARS eFiling, Computicket). Pick one, complete a realistic task on it, and report back.',
    brief:
      'Complete the task with a screen recorder or just detailed notes. You do not need to share the recording. Document what you noticed and what you would change.',
    deliverables: [
      'The site and specific task you attempted (one line)',
      'Three specific UX issues you encountered, each with a concrete proposed fix',
      'One thing the site does well that you would keep',
      'Your method for deciding priority if the product team could only ship one of your fixes',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Vague issues like "confusing layout" do not count. Be specific: which screen, which button, what you expected, what happened.',
    rubric: [
      { key: 'observation', label: 'Observation Quality', description: 'Are the three issues specific, real, and well-described?', weight: 35 },
      { key: 'proposals', label: 'Proposed Fixes', description: 'Are the fixes practical, proportionate, and targeted at the root issue?', weight: 30 },
      { key: 'balance', label: 'Balanced View', description: 'Is the "keep" item thoughtful, not filler?', weight: 15 },
      { key: 'prioritisation', label: 'Prioritisation Logic', description: 'Is the prioritisation method defensible?', weight: 20 },
    ],
    skillsProven: ['UX analysis', 'Heuristic evaluation', 'Design critique', 'Product prioritisation'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ux-comparative-audit',
    categoryId: 'design-ux',
    topicId: 'ux-teardown',
    level: 'intermediate',
    title: 'Comparative UX Audit',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Compare the same flow across 3 competing products using Nielsen\'s heuristics.',
    scenario:
      'A product team is redesigning their sign-up flow. Before starting, they want to understand how competitors handle the same task. Your job is to audit 3 competitors and extract the best patterns.',
    brief:
      'Pick a common user flow (sign-up, checkout, or onboarding). Audit 3 competing products that all have this flow. Score each against Nielsen\'s 10 heuristics and recommend which patterns to adopt.',
    deliverables: [
      'A comparison table: Product × Heuristic score (1-5) for at least 6 of Nielsen\'s 10 heuristics',
      'Three specific UX patterns worth stealing, with annotated descriptions of how each competitor implements them',
      'Two anti-patterns to avoid, with explanation of why they fail',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not just list heuristic violations. The value is in the comparative lens — what does Product A do better than B, and why? Be specific about screens and interactions.',
    rubric: [
      { key: 'heuristics', label: 'Heuristic Application', description: 'Are the heuristics correctly applied and scored consistently across products?', weight: 30 },
      { key: 'patterns', label: 'Pattern Extraction', description: 'Are the recommended patterns specific and well-described?', weight: 35 },
      { key: 'anti-patterns', label: 'Anti-Pattern Analysis', description: 'Are the anti-patterns genuine failures (not just preferences)?', weight: 35 },
    ],
    skillsProven: ['Heuristic evaluation', 'Competitive UX analysis', 'Pattern recognition', 'Design critique'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ux-full-audit-deck',
    categoryId: 'design-ux',
    topicId: 'ux-teardown',
    level: 'advanced',
    title: 'End-to-End UX Audit with Recommendations Deck',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Produce a stakeholder-ready audit with annotated screenshots and severity ratings.',
    scenario:
      'You have been hired as a UX consultant to audit a South African banking app\'s "apply for a credit card" flow. The product owner wants a structured report she can present to the executive team to justify a redesign budget.',
    brief:
      'Conduct a full UX audit of a multi-step application flow (invent the screens). Produce annotated wireframes showing each issue, assign severity ratings, and build a prioritised recommendations deck.',
    deliverables: [
      'A flow map showing all screens in the application flow with decision points',
      'At least 8 UX issues with severity ratings (Critical, Major, Minor, Cosmetic) and annotated descriptions',
      'A prioritised recommendations table: Issue, Severity, Effort (S/M/L), Impact (S/M/L), Priority Rank',
      'An executive summary (max 150 words) that a non-designer executive would understand and act on',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Severity is not the same as priority. A critical usability issue on a rarely used screen may be lower priority than a minor issue on the main conversion path. Show this thinking.',
    rubric: [
      { key: 'flow', label: 'Flow Mapping', description: 'Is the flow map comprehensive with decision points and edge cases?', weight: 20 },
      { key: 'issues', label: 'Issue Quality', description: 'Are the 8 issues specific, varied in severity, and well-annotated?', weight: 30 },
      { key: 'prioritisation', label: 'Prioritisation Matrix', description: 'Does the severity × effort × impact prioritisation make sense?', weight: 30 },
      { key: 'executive', label: 'Executive Communication', description: 'Would a non-designer understand and act on the summary?', weight: 20 },
    ],
    skillsProven: ['UX auditing', 'Severity rating', 'Stakeholder communication', 'Design prioritisation'],
    relatedRoadmapIds: [],
  },

  // --- Topic 2: User Research & Interviews ---
  {
    id: 'research-interview-script',
    categoryId: 'design-ux',
    topicId: 'user-research-interviews',
    level: 'beginner',
    title: 'Write a User Interview Script',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a 20-minute interview script to understand how students choose online courses.',
    scenario:
      'An edtech startup wants to understand why university students choose certain online courses over others. The product team needs to interview 8 students. You have been asked to write the interview script.',
    brief:
      'Write a structured interview script for a 20-minute session. Include an introduction, warm-up questions, core questions, and a wrap-up. The script should avoid leading questions.',
    deliverables: [
      'An interview script with: intro/consent (2 min), warm-up (3 min), core questions (12 min), wrap-up (3 min)',
      'At least 8 core questions, none of which are leading or closed-ended',
      'Two follow-up prompts per core question (how to dig deeper if the answer is vague)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      '"Do you find it hard to choose courses?" is a leading question. "Tell me about the last time you signed up for an online course" is not. Show you know the difference.',
    rubric: [
      { key: 'structure', label: 'Script Structure', description: 'Is the script structured with proper timing and flow?', weight: 25 },
      { key: 'questions', label: 'Question Quality', description: 'Are the questions open-ended, non-leading, and exploratory?', weight: 40 },
      { key: 'prompts', label: 'Follow-Up Prompts', description: 'Do the follow-up prompts help dig deeper without biasing?', weight: 35 },
    ],
    skillsProven: ['User interviews', 'Research methodology', 'Question design', 'Qualitative research'],
    relatedRoadmapIds: [],
  },
  {
    id: 'research-affinity-mapping',
    categoryId: 'design-ux',
    topicId: 'user-research-interviews',
    level: 'intermediate',
    title: 'Affinity Mapping from Interview Notes',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Synthesise 6 fictional interview transcripts into an affinity map and 3 insights.',
    scenario:
      'The research team has completed 6 interviews with users of a fitness app. You have been given summarised notes from each session. Your job is to find the patterns.',
    brief:
      'Invent 6 plausible interview summaries (5-8 bullet points each). Then synthesise them into an affinity map — group related observations, label the clusters, and extract 3 actionable product insights.',
    deliverables: [
      'Six fictional interview summaries with realistic observations (mix of positive, negative, and surprising)',
      'An affinity map structure: at least 5 clusters with labels and the observations sorted into each',
      'Three product insights derived from the clusters, each with a "so what" implication for the product team',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'An insight is not an observation. "5 out of 6 users forgot to log workouts" is an observation. "Users treat logging as a chore, not a reward — the app should auto-detect activity" is an insight.',
    rubric: [
      { key: 'data', label: 'Interview Data Quality', description: 'Are the 6 summaries plausible with varied and realistic observations?', weight: 20 },
      { key: 'clustering', label: 'Affinity Clustering', description: 'Are the clusters meaningful with appropriate labels?', weight: 35 },
      { key: 'insights', label: 'Insight Quality', description: 'Do the 3 insights go beyond observations to actionable product implications?', weight: 45 },
    ],
    skillsProven: ['Affinity mapping', 'Research synthesis', 'Pattern recognition', 'Insight generation'],
    relatedRoadmapIds: [],
  },
  {
    id: 'research-ops-programme',
    categoryId: 'design-ux',
    topicId: 'user-research-interviews',
    level: 'advanced',
    title: 'Research Ops: Design a Research Programme',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a quarterly research programme for a product team.',
    scenario:
      'A growing fintech product team has 3 designers and 12 engineers. They do ad hoc user research — sometimes a lot, sometimes none. The Head of Product wants a structured research programme that runs continuously.',
    brief:
      'Design a quarterly research programme. Cover recruitment, method selection per question type, tooling, research repository, and how findings get to engineers who do not attend sessions.',
    deliverables: [
      'A quarterly research calendar with research type (discovery, evaluative, continuous) mapped to product milestones',
      'A method-selection guide: which research method for which question type (table format)',
      'A participant recruitment strategy: panel management, incentives, screening criteria, and diversity requirements',
      'A knowledge management plan: how findings are stored, tagged, and surfaced to the team',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Research that sits in a slide deck nobody reads is wasted research. Show how you make findings findable and actionable for engineers who never attend sessions.',
    rubric: [
      { key: 'calendar', label: 'Research Calendar', description: 'Is the quarterly plan structured with clear research types?', weight: 25 },
      { key: 'methods', label: 'Method Selection', description: 'Is the method-to-question mapping correct and comprehensive?', weight: 25 },
      { key: 'recruitment', label: 'Recruitment Strategy', description: 'Is the recruitment plan practical with diversity considerations?', weight: 25 },
      { key: 'knowledge', label: 'Knowledge Management', description: 'Is there a credible plan for making research findings accessible?', weight: 25 },
    ],
    skillsProven: ['Research operations', 'Research programme design', 'Participant recruitment', 'Knowledge management'],
    relatedRoadmapIds: [],
  },

  // --- Topic 3: Information Architecture ---
  {
    id: 'ia-card-sort-sitemap',
    categoryId: 'design-ux',
    topicId: 'information-architecture',
    level: 'beginner',
    title: 'Card Sort and Sitemap',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Run a hypothetical card sort for a university website and produce a sitemap.',
    scenario:
      'A South African university is redesigning its website. The current navigation has 8 top-level items and 60+ sub-pages, but students cannot find basic things like exam timetables, fee structures, or application deadlines.',
    brief:
      'Design a card sort exercise to determine how students would group the content. Invent plausible card sort results and use them to produce a new sitemap.',
    deliverables: [
      'A list of 25-30 content cards (pages/sections) that need to be organised',
      'Hypothetical card sort results: how 10 fictional participants grouped the cards (show at least 2 grouping patterns)',
      'A new sitemap derived from the card sort results with no more than 6 top-level categories',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Card sorts reveal mental models. If 8 out of 10 participants group "Exam Timetable" under "Academics" but the current site puts it under "Student Services," that is a findability failure. Show this analysis.',
    rubric: [
      { key: 'cards', label: 'Card Selection', description: 'Are the 25-30 cards representative of real university website content?', weight: 25 },
      { key: 'results', label: 'Card Sort Analysis', description: 'Are the grouping patterns plausible and the conflicts identified?', weight: 35 },
      { key: 'sitemap', label: 'Sitemap Design', description: 'Does the new sitemap reflect card sort findings with ≤6 top-level categories?', weight: 40 },
    ],
    skillsProven: ['Card sorting', 'Sitemap design', 'Information architecture', 'User mental models'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ia-navigation-redesign',
    categoryId: 'design-ux',
    topicId: 'information-architecture',
    level: 'intermediate',
    title: 'Navigation Redesign',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Redesign the navigation of a complex government website to improve task completion.',
    scenario:
      'The South African government services portal has hundreds of pages covering everything from ID applications to tax filing. Users frequently give up and phone the call centre because they cannot find the right page online.',
    brief:
      'Redesign the navigation architecture. Focus on the top 10 user tasks (invent them), and design a navigation that gets users to the right page in 3 clicks or fewer.',
    deliverables: [
      'A list of the top 10 user tasks ranked by frequency (invented but plausible)',
      'The current navigation structure (invented) with click-paths for each top task',
      'The redesigned navigation with click-paths showing improvement for each task',
      'One mega-menu or search-driven pattern you would use for edge-case content',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Government websites serve diverse audiences (citizens, businesses, immigrants). Do not optimise for one audience at the expense of others.',
    rubric: [
      { key: 'tasks', label: 'Task Identification', description: 'Are the top 10 tasks realistic and well-prioritised?', weight: 20 },
      { key: 'current', label: 'Current State Analysis', description: 'Is the current navigation analysis specific about failure points?', weight: 25 },
      { key: 'redesign', label: 'Navigation Redesign', description: 'Does the redesign achieve ≤3 clicks for the top tasks?', weight: 35 },
      { key: 'edge-case', label: 'Edge Case Handling', description: 'Is the solution for long-tail content practical?', weight: 20 },
    ],
    skillsProven: ['Navigation design', 'Information architecture', 'Task analysis', 'Government UX'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ia-taxonomy-ecommerce',
    categoryId: 'design-ux',
    topicId: 'information-architecture',
    level: 'advanced',
    title: 'Taxonomy Design for a Large E-Commerce Site',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design the product taxonomy for a 5,000-SKU e-commerce store.',
    scenario:
      'A South African home goods retailer is moving from 3 physical stores to an online store with 5,000 products. Products range from furniture to kitchenware to garden tools. Many products belong to multiple categories (a garden bench is both "Garden" and "Furniture").',
    brief:
      'Design the complete product taxonomy. Handle hierarchical categories, cross-category products, faceted navigation, and the naming conventions that make browsing intuitive.',
    deliverables: [
      'A 3-level category hierarchy with at least 8 top-level categories',
      'A cross-category strategy: how products that belong to multiple categories are handled',
      'A faceted navigation design: which attributes become filters (size, colour, price, material, etc.)',
      'Naming conventions: rules for consistent category and product naming',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A taxonomy is not a folder structure. Products should be findable through multiple paths. Show how a user looking for a "wooden garden bench" could find it via Garden, Furniture, or Material: Wood.',
    rubric: [
      { key: 'hierarchy', label: 'Category Hierarchy', description: 'Is the 3-level hierarchy logical with balanced depth?', weight: 25 },
      { key: 'cross-category', label: 'Cross-Category Handling', description: 'Is the solution for multi-category products practical?', weight: 30 },
      { key: 'facets', label: 'Faceted Navigation', description: 'Are the filter attributes well-chosen for the product types?', weight: 25 },
      { key: 'naming', label: 'Naming Conventions', description: 'Are the naming rules consistent and user-friendly?', weight: 20 },
    ],
    skillsProven: ['Taxonomy design', 'E-commerce IA', 'Faceted navigation', 'Content modelling'],
    relatedRoadmapIds: [],
  },

  // --- Topic 4: Wireframing & Prototyping ---
  {
    id: 'wireframe-mobile-screens',
    categoryId: 'design-ux',
    topicId: 'wireframing-prototyping',
    level: 'beginner',
    title: 'Lo-Fi Wireframes for a Mobile App',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Sketch 5 key screens for a food delivery app.',
    scenario:
      'A startup is building a food delivery app for campus students. Before any visual design, the product manager wants to see the core user flow in low-fidelity wireframes.',
    brief:
      'Sketch 5 key screens: Home/Browse, Restaurant Menu, Cart, Checkout, and Order Confirmation. Use boxes, lines, and placeholder text — no colour, no branding.',
    deliverables: [
      'Descriptions of 5 lo-fi wireframe screens with layout notes (header, content areas, CTAs, navigation)',
      'A flow diagram showing how users move between the 5 screens',
      'Annotations explaining key design decisions (why the cart is always visible, why checkout is a single page, etc.)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Lo-fi wireframes are about structure, not aesthetics. If you spend time on colours and fonts, you are doing it wrong. Focus on layout, hierarchy, and flow.',
    rubric: [
      { key: 'screens', label: 'Screen Coverage', description: 'Do the 5 screens cover the core user journey from browse to confirmation?', weight: 30 },
      { key: 'flow', label: 'Flow Logic', description: 'Is the user flow between screens logical and complete?', weight: 30 },
      { key: 'annotations', label: 'Design Rationale', description: 'Do the annotations explain WHY, not just WHAT?', weight: 40 },
    ],
    skillsProven: ['Wireframing', 'Information hierarchy', 'User flow design', 'Design rationale'],
    relatedRoadmapIds: [],
  },
  {
    id: 'prototype-checkout-flow',
    categoryId: 'design-ux',
    topicId: 'wireframing-prototyping',
    level: 'intermediate',
    title: 'Interactive Prototype for a Checkout Flow',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a clickable prototype for a 4-step checkout with branching logic.',
    scenario:
      'An e-commerce site needs to test their new checkout flow before development. The flow has 4 steps: Cart Review → Shipping → Payment → Confirmation. But there is branching: if the user selects "collect in store," the shipping step should be skipped.',
    brief:
      'Design the mid-fidelity prototype specification. Define every screen state, the branching logic, error states, and the loading/success transitions.',
    deliverables: [
      'A screen-by-screen specification for all 4 steps plus the branch variant',
      'The branching logic: which user actions trigger which paths (flowchart format)',
      'Error states for each step (invalid card, out-of-stock item, address not found)',
      'Loading and success state descriptions for the payment step',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A prototype without error states is not a prototype. Users will enter wrong card numbers, leave fields blank, and try to buy out-of-stock items. Design for these.',
    rubric: [
      { key: 'screens', label: 'Screen Specifications', description: 'Are all steps fully specified with content and interaction details?', weight: 25 },
      { key: 'branching', label: 'Branching Logic', description: 'Is the branching clearly documented with trigger conditions?', weight: 25 },
      { key: 'errors', label: 'Error States', description: 'Are error states comprehensive and user-friendly?', weight: 30 },
      { key: 'transitions', label: 'State Transitions', description: 'Are loading, success, and failure transitions described?', weight: 20 },
    ],
    skillsProven: ['Prototyping', 'Interaction specification', 'Error state design', 'Flow logic'],
    relatedRoadmapIds: [],
  },
  {
    id: 'prototype-complex-interaction',
    categoryId: 'design-ux',
    topicId: 'wireframing-prototyping',
    level: 'advanced',
    title: 'Prototype a Complex Interaction',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Prototype a drag-and-drop kanban board with state changes and edge cases.',
    scenario:
      'A project management tool needs a kanban board feature. Cards can be dragged between columns (To Do, In Progress, Review, Done). Some transitions have rules: a card cannot move to "Done" without an assignee, and moving to "Review" triggers a notification.',
    brief:
      'Design the complete interaction specification for this kanban board. Cover drag behaviour, drop targets, transition rules, empty states, and edge cases.',
    deliverables: [
      'The drag-and-drop interaction specification: grab, drag, hover target highlighting, and drop animation',
      'Transition rules: which moves are allowed, which are blocked, and how blocked moves are communicated',
      'Empty states: what each column looks like when empty and how to add the first card',
      'Edge cases: what happens when dragging between columns during a sync error, or when two users drag the same card',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The happy path is easy. The value is in edge cases — what happens when the drop fails? What does the user see during a network error? Design for failure.',
    rubric: [
      { key: 'drag-drop', label: 'Drag & Drop Design', description: 'Is the interaction specification detailed enough for a developer to implement?', weight: 25 },
      { key: 'rules', label: 'Transition Rules', description: 'Are the business rules clearly defined with appropriate error messaging?', weight: 25 },
      { key: 'empty', label: 'Empty States', description: 'Are empty states helpful and encouraging (not just blank)?', weight: 20 },
      { key: 'edge-cases', label: 'Edge Case Coverage', description: 'Are failure modes and multi-user conflicts addressed?', weight: 30 },
    ],
    skillsProven: ['Complex interaction design', 'Drag & drop UX', 'Edge case thinking', 'Developer handoff'],
    relatedRoadmapIds: [],
  },

  // --- Topic 5: UI Design & Visual Design ---
  {
    id: 'ui-settings-redesign',
    categoryId: 'design-ux',
    topicId: 'ui-visual-design',
    level: 'beginner',
    title: 'Redesign a Settings Page',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Take a cluttered settings page and redesign it using visual hierarchy and whitespace.',
    scenario:
      'A SaaS product\'s settings page has 30+ options displayed in a single scrolling list with no grouping, inconsistent labels, and tiny toggle switches. Users frequently change the wrong setting.',
    brief:
      'Redesign the settings page. Group related settings, create a clear visual hierarchy, and ensure each setting is self-explanatory without help text.',
    deliverables: [
      'A description of the current settings page problems (invent the page state)',
      'A redesigned layout specification: groupings, section headers, spacing, and component choices',
      'A before/after comparison for 3 specific settings showing how clarity improved',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Good settings pages use progressive disclosure — show common settings first, hide advanced ones behind an "Advanced" section. Do not dump everything on one page.',
    rubric: [
      { key: 'analysis', label: 'Problem Analysis', description: 'Are the current issues correctly identified?', weight: 25 },
      { key: 'grouping', label: 'Information Grouping', description: 'Are settings logically grouped with clear section headers?', weight: 35 },
      { key: 'hierarchy', label: 'Visual Hierarchy', description: 'Does the redesign use hierarchy and whitespace to reduce cognitive load?', weight: 40 },
    ],
    skillsProven: ['Visual hierarchy', 'Information grouping', 'UI layout', 'Progressive disclosure'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ui-dashboard-design',
    categoryId: 'design-ux',
    topicId: 'ui-visual-design',
    level: 'intermediate',
    title: 'Design a Dashboard UI',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a high-fidelity analytics dashboard with data visualisation and filters.',
    scenario:
      'A logistics company needs an operations dashboard showing delivery volumes, on-time rates, driver performance, and regional breakdowns. The ops manager checks it every morning.',
    brief:
      'Design the dashboard specification. Choose the right chart types for each metric, design the filter system, and plan the responsive layout for desktop and tablet.',
    deliverables: [
      'A dashboard layout specification with at least 6 widgets: chart type, data it shows, and placement',
      'A filter system design: which dimensions are filterable (date range, region, driver) and where filters live',
      'A responsive strategy: how the dashboard adapts from desktop (1440px) to tablet (768px)',
      'One data visualisation anti-pattern you avoided and why (e.g., "no pie charts for comparing 8 categories")',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A dashboard is not a data dump. Every widget should answer a specific question. If you cannot state the question, the widget should not exist.',
    rubric: [
      { key: 'widgets', label: 'Widget Design', description: 'Are the chart types appropriate for the data they display?', weight: 30 },
      { key: 'filters', label: 'Filter System', description: 'Is the filter system practical and non-destructive?', weight: 25 },
      { key: 'responsive', label: 'Responsive Strategy', description: 'Does the responsive adaptation preserve information hierarchy?', weight: 25 },
      { key: 'anti-pattern', label: 'Anti-Pattern Awareness', description: 'Is the avoided anti-pattern genuine with sound reasoning?', weight: 20 },
    ],
    skillsProven: ['Dashboard design', 'Data visualisation', 'Responsive design', 'UI layout'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ui-dark-mode-conversion',
    categoryId: 'design-ux',
    topicId: 'ui-visual-design',
    level: 'advanced',
    title: 'Dark Mode Conversion',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Convert a light-mode design to dark mode, handling contrast, elevation, and states.',
    scenario:
      'A productivity app has a polished light-mode design. Users have been requesting dark mode for months. The design team needs a comprehensive dark mode specification — not just "invert the colours."',
    brief:
      'Design the dark mode conversion specification. Cover colour mapping, contrast ratios, elevation representation, component state changes, and image/icon handling.',
    deliverables: [
      'A colour mapping table: each light-mode colour and its dark-mode equivalent with WCAG contrast ratios',
      'An elevation strategy: how shadows, borders, and surface colours represent depth in dark mode',
      'Component state changes: how hover, active, disabled, and focus states adapt for dark backgrounds',
      'Image and icon handling: when to invert, when to add backgrounds, when to swap assets',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Dark mode is not "white background → #121212." It is a complete rethinking of elevation, contrast, and visual weight. Shadows do not work on dark backgrounds — you need lighter surfaces instead.',
    rubric: [
      { key: 'colours', label: 'Colour Mapping', description: 'Are the colour conversions systematic with WCAG-compliant contrast ratios?', weight: 30 },
      { key: 'elevation', label: 'Elevation Strategy', description: 'Does the candidate understand that dark mode replaces shadows with surface elevation?', weight: 25 },
      { key: 'states', label: 'Component States', description: 'Are all interactive states properly adapted for dark backgrounds?', weight: 25 },
      { key: 'assets', label: 'Asset Handling', description: 'Is the image/icon strategy practical and comprehensive?', weight: 20 },
    ],
    skillsProven: ['Dark mode design', 'Colour theory', 'WCAG contrast', 'Design systems'],
    relatedRoadmapIds: [],
  },

  // --- Topic 6: Design Systems ---
  {
    id: 'ds-button-component',
    categoryId: 'design-ux',
    topicId: 'design-systems',
    level: 'beginner',
    title: 'Build a Button Component Spec',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Define a button component with all states, sizes, and variants.',
    scenario:
      'A startup is building its first design system. The lead designer asks you to define the button component — the most-used element in the system. It needs to be comprehensive enough that any designer or developer can use it consistently.',
    brief:
      'Define a complete button component specification. Cover all visual states, sizes, variants, and usage guidelines.',
    deliverables: [
      'A state matrix: Default, Hover, Active/Pressed, Focused, Disabled, Loading — for each of 3 variants (Primary, Secondary, Ghost)',
      'Size specifications: Small, Medium, Large — with padding, font size, and min-width for each',
      'Usage guidelines: when to use each variant, icon placement rules, and maximum label length',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A button spec without a disabled state or a loading state is incomplete. Developers will ask "what does the button look like while the form is submitting?" Be ready.',
    rubric: [
      { key: 'states', label: 'State Coverage', description: 'Are all interactive states defined for all variants?', weight: 35 },
      { key: 'sizing', label: 'Size Specifications', description: 'Are the size specifications detailed enough for implementation?', weight: 30 },
      { key: 'guidelines', label: 'Usage Guidelines', description: 'Do the guidelines prevent misuse without being overly restrictive?', weight: 35 },
    ],
    skillsProven: ['Component design', 'State management', 'Design specifications', 'Design systems'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ds-token-architecture',
    categoryId: 'design-ux',
    topicId: 'design-systems',
    level: 'intermediate',
    title: 'Design Token Architecture',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Define a design token system that supports theming.',
    scenario:
      'A SaaS product is launching a white-label version that clients can brand with their own colours. The current design uses hardcoded hex values throughout. The team needs a token system that separates raw values from semantic meaning.',
    brief:
      'Design a design token architecture with three levels: primitive tokens (raw values), semantic tokens (purpose-based), and component tokens (specific to components). Show how theming works.',
    deliverables: [
      'Primitive tokens: colour palette (at least 10 colours with shades), spacing scale (4px base), typography scale',
      'Semantic tokens: surface, text, border, interactive, feedback colours mapped to primitives',
      'A theming example: show how 2 different brand themes use the same semantic tokens with different primitive values',
      'A naming convention with clear rules (e.g., color.surface.primary, not color.white)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'color.blue-500 is a primitive token. color.interactive.primary is a semantic token. The semantic token REFERENCES the primitive. Theming swaps primitives; semantics stay the same.',
    rubric: [
      { key: 'primitives', label: 'Primitive Tokens', description: 'Are the primitive tokens comprehensive with consistent naming?', weight: 25 },
      { key: 'semantics', label: 'Semantic Tokens', description: 'Do the semantic tokens correctly abstract purpose from value?', weight: 30 },
      { key: 'theming', label: 'Theming Demo', description: 'Does the theming example clearly show how token swapping works?', weight: 25 },
      { key: 'naming', label: 'Naming Convention', description: 'Is the naming convention consistent, scalable, and developer-friendly?', weight: 20 },
    ],
    skillsProven: ['Design tokens', 'Theming architecture', 'Design systems', 'Developer collaboration'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ds-component-audit',
    categoryId: 'design-ux',
    topicId: 'design-systems',
    level: 'advanced',
    title: 'Component Library Audit',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Audit an existing component library for inconsistencies and accessibility gaps.',
    scenario:
      'A 2-year-old design system has 45 components. Over time, different designers added components with inconsistent patterns. Some components are missing states, others have accessibility issues, and 8 components are never used. Time for an audit.',
    brief:
      'Conduct a comprehensive component library audit. Evaluate consistency, completeness, accessibility, and usage. Produce a remediation plan.',
    deliverables: [
      'An audit framework: the criteria you evaluate each component against (states, a11y, naming, responsiveness)',
      'Audit findings for at least 6 components (invent them) — each with specific issues and severity',
      'A deprecation recommendation: which components to remove, merge, or replace',
      'A prioritised remediation plan with effort estimates (S/M/L) for the top 10 fixes',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A component that exists but nobody uses is worse than no component — it creates maintenance overhead and confusion. Be willing to recommend deletion.',
    rubric: [
      { key: 'framework', label: 'Audit Framework', description: 'Is the evaluation criteria comprehensive and systematic?', weight: 25 },
      { key: 'findings', label: 'Audit Findings', description: 'Are the issues specific, varied, and correctly severity-rated?', weight: 30 },
      { key: 'deprecation', label: 'Deprecation Strategy', description: 'Is the merge/delete/replace recommendation well-justified?', weight: 20 },
      { key: 'remediation', label: 'Remediation Plan', description: 'Is the plan prioritised by impact and realistically scoped?', weight: 25 },
    ],
    skillsProven: ['Design system auditing', 'Component library', 'Quality assurance', 'Design governance'],
    relatedRoadmapIds: [],
  },

  // --- Topic 7: Usability Testing ---
  {
    id: 'ut-test-plan',
    categoryId: 'design-ux',
    topicId: 'usability-testing',
    level: 'beginner',
    title: 'Write a Usability Test Plan',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a test plan for evaluating a mobile banking app\'s transfer flow.',
    scenario:
      'A mobile banking app has redesigned their money transfer flow. Before launching, the product team wants to test it with 5 users. You need to write the test plan.',
    brief:
      'Write a complete usability test plan covering objectives, participant criteria, tasks, metrics, and the session script.',
    deliverables: [
      'Test objectives: the 3 specific questions this test will answer',
      'Participant criteria: who to recruit, screening questions, and incentive',
      'Task scenarios: 3 realistic tasks with success criteria for each',
      'A session script: introduction, task instructions, and post-task questions',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      '"Test the transfer flow" is not a task. "You need to send R500 to your friend Sipho. Using this app, show me how you would do that" is a task. Be this specific.',
    rubric: [
      { key: 'objectives', label: 'Test Objectives', description: 'Are the objectives specific and answerable by this test?', weight: 25 },
      { key: 'participants', label: 'Participant Criteria', description: 'Are the screening criteria well-targeted?', weight: 20 },
      { key: 'tasks', label: 'Task Design', description: 'Are the tasks realistic with clear success criteria?', weight: 30 },
      { key: 'script', label: 'Session Script', description: 'Is the script professional with proper introduction and non-leading prompts?', weight: 25 },
    ],
    skillsProven: ['Usability test planning', 'Task design', 'Participant screening', 'Test methodology'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ut-results-analysis',
    categoryId: 'design-ux',
    topicId: 'usability-testing',
    level: 'intermediate',
    title: 'Analyse Usability Test Results',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Identify patterns, severity ratings, and priorities from 5 test session summaries.',
    scenario:
      'Five usability test sessions have been completed for a food delivery app\'s checkout flow. You have the session summaries. The product team wants a clear report of what to fix, in what order.',
    brief:
      'Invent 5 plausible session summaries. Analyse them for patterns, assign severity ratings, and produce a prioritised recommendations report.',
    deliverables: [
      'Five fictional session summaries (3-5 bullet points each) with mix of successes and failures',
      'A pattern analysis: which issues were observed across multiple participants',
      'A severity rating for each issue (Critical, Major, Minor) with justification',
      'A prioritised fix list with the top 3 recommendations and expected impact',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'An issue observed by 1 out of 5 participants may be an outlier. An issue observed by 4 out of 5 is a pattern. Show how frequency affects your severity rating.',
    rubric: [
      { key: 'data', label: 'Session Data Quality', description: 'Are the 5 summaries plausible with varied outcomes?', weight: 20 },
      { key: 'patterns', label: 'Pattern Identification', description: 'Are recurring issues correctly identified across sessions?', weight: 30 },
      { key: 'severity', label: 'Severity Ratings', description: 'Are severity ratings justified by frequency and impact?', weight: 25 },
      { key: 'recommendations', label: 'Prioritised Recommendations', description: 'Are the top 3 fixes actionable with expected impact?', weight: 25 },
    ],
    skillsProven: ['Test analysis', 'Pattern recognition', 'Severity rating', 'UX reporting'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ut-remote-unmoderated',
    categoryId: 'design-ux',
    topicId: 'usability-testing',
    level: 'advanced',
    title: 'Remote Unmoderated Testing Strategy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a remote unmoderated testing programme with task design and metrics.',
    scenario:
      'A product team wants to run continuous usability testing but cannot afford moderated sessions for every feature release. They want a remote unmoderated testing programme they can run monthly with minimal facilitator time.',
    brief:
      'Design the complete remote unmoderated testing programme. Cover tool selection, task design, quantitative metrics, qualitative analysis, and sample size planning.',
    deliverables: [
      'Tool comparison: evaluate 3 remote unmoderated testing tools (Maze, UserTesting, Lookback) with pros/cons',
      'Task design principles: how to write tasks that work without a moderator (no ambiguity, clear success criteria)',
      'A metrics framework: task completion rate, time-on-task, error rate, and SUS/CSAT scores',
      'A monthly cadence plan: how many tests per month, sample size per test, and how results feed into sprint planning',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Unmoderated testing trades depth for scale. You get more participants but cannot ask follow-up questions. Design tasks that work without probing.',
    rubric: [
      { key: 'tools', label: 'Tool Evaluation', description: 'Is the tool comparison specific and criteria-based?', weight: 20 },
      { key: 'tasks', label: 'Task Design Principles', description: 'Are the principles sound for unmoderated context?', weight: 30 },
      { key: 'metrics', label: 'Metrics Framework', description: 'Are the quantitative and qualitative metrics well-chosen?', weight: 25 },
      { key: 'cadence', label: 'Cadence Plan', description: 'Is the monthly plan realistic and integrated with sprint workflow?', weight: 25 },
    ],
    skillsProven: ['Remote testing', 'Unmoderated testing', 'Test metrics', 'Research operations'],
    relatedRoadmapIds: [],
  },

  // --- Topic 8: Interaction Design & Micro-interactions ---
  {
    id: 'ixd-form-validation',
    categoryId: 'design-ux',
    topicId: 'interaction-design',
    level: 'beginner',
    title: 'Design a Form Validation Flow',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design the interaction pattern for a sign-up form with inline validation.',
    scenario:
      'A SaaS product\'s sign-up form has 6 fields (name, email, password, confirm password, company, phone). Currently, all validation happens on submit — users fill in the entire form, click "Create Account," and get a wall of red errors at the top.',
    brief:
      'Redesign the form validation to be inline and progressive. Define when validation fires, how errors are displayed, and what the success states look like.',
    deliverables: [
      'Validation timing for each field: on blur, on change, or on submit — with justification for each choice',
      'Error message design: placement, styling, and tone for each field\'s error state',
      'Success states: what the user sees when a field passes validation (checkmark, green border, etc.)',
      'The submit button behaviour: disabled vs enabled, loading state, and error summary after failed submission',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Validating on every keystroke is annoying (the email field shows "invalid" before you finish typing). Validating only on submit is too late. On blur is usually the sweet spot. Show your reasoning.',
    rubric: [
      { key: 'timing', label: 'Validation Timing', description: 'Is the timing appropriate for each field type?', weight: 30 },
      { key: 'errors', label: 'Error Display', description: 'Are error messages clear, well-placed, and actionable?', weight: 30 },
      { key: 'success', label: 'Success States', description: 'Do success states provide positive reinforcement?', weight: 20 },
      { key: 'submit', label: 'Submit Behaviour', description: 'Is the submit flow well-designed for both success and failure?', weight: 20 },
    ],
    skillsProven: ['Form design', 'Inline validation', 'Error handling', 'Interaction design'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ixd-notification-system',
    categoryId: 'design-ux',
    topicId: 'interaction-design',
    level: 'intermediate',
    title: 'Notification System Design',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a notification system with in-app, push, and email channels.',
    scenario:
      'A project management app sends too many notifications. Users complain about notification fatigue — they get pinged for every comment, assignment, and status change. Some have turned off all notifications, missing critical updates.',
    brief:
      'Redesign the notification system. Define which events trigger which channels, how notifications group, priority levels, and user control over preferences.',
    deliverables: [
      'A notification matrix: Event Type × Channel (in-app, push, email) with default on/off for each',
      'A grouping strategy: how related notifications are batched (e.g., "3 new comments on Task X")',
      'Priority levels: Critical (must interrupt), Important (show but do not interrupt), Informational (badge only)',
      'A user preferences design: how users control notification settings without 50 individual toggles',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The goal is not fewer notifications — it is the right notifications at the right time. A deadline change is urgent. A comment on a resolved task is not.',
    rubric: [
      { key: 'matrix', label: 'Notification Matrix', description: 'Is the event-to-channel mapping thoughtful with sensible defaults?', weight: 30 },
      { key: 'grouping', label: 'Grouping Strategy', description: 'Does the grouping reduce noise without hiding important updates?', weight: 25 },
      { key: 'priority', label: 'Priority System', description: 'Are the priority levels clearly defined with correct event assignment?', weight: 25 },
      { key: 'preferences', label: 'User Preferences', description: 'Is the preferences UI simple enough that users will actually use it?', weight: 20 },
    ],
    skillsProven: ['Notification design', 'System design', 'User preferences', 'Interaction design'],
    relatedRoadmapIds: [],
  },
  {
    id: 'ixd-gesture-mobile',
    categoryId: 'design-ux',
    topicId: 'interaction-design',
    level: 'advanced',
    title: 'Gesture-Based Interaction for Mobile',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design gesture interactions for a photo management app with discoverability cues.',
    scenario:
      'A photo management app wants to add gesture-based interactions: swipe to delete, long-press to select multiple, pinch to zoom, and double-tap to favourite. The challenge: gestures are invisible — how do users discover them?',
    brief:
      'Design the complete gesture interaction system. Define each gesture, its visual feedback, discoverability mechanisms, and fallback for accessibility.',
    deliverables: [
      'A gesture inventory: each gesture, what it does, and the visual feedback during and after the action',
      'Discoverability design: how first-time users learn about gestures (onboarding, contextual hints, coaching marks)',
      'Conflict resolution: what happens when gestures overlap (e.g., swipe to delete vs swipe to navigate)',
      'Accessibility fallbacks: alternative interactions for users who cannot perform gestures',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Gestures are powerful but invisible. If a user does not know swipe-to-delete exists, it does not exist for them. Discoverability is the hardest problem here.',
    rubric: [
      { key: 'inventory', label: 'Gesture Inventory', description: 'Is each gesture clearly defined with appropriate visual feedback?', weight: 25 },
      { key: 'discoverability', label: 'Discoverability', description: 'Are the discovery mechanisms well-designed and not intrusive?', weight: 30 },
      { key: 'conflicts', label: 'Conflict Resolution', description: 'Are gesture conflicts identified and resolved consistently?', weight: 20 },
      { key: 'accessibility', label: 'Accessibility Fallbacks', description: 'Are alternative interactions available for all gesture-based actions?', weight: 25 },
    ],
    skillsProven: ['Gesture design', 'Mobile interaction', 'Discoverability', 'Accessible interaction'],
    relatedRoadmapIds: [],
  },

  // --- Topic 9: Accessibility (a11y) ---
  {
    id: 'a11y-landing-page-audit',
    categoryId: 'design-ux',
    topicId: 'accessibility-a11y',
    level: 'beginner',
    title: 'Accessibility Audit of a Landing Page',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Audit a landing page against WCAG 2.1 AA and identify 5 failures with fixes.',
    scenario:
      'A startup\'s landing page has never been tested for accessibility. The marketing team says "it looks fine" but has never checked colour contrast, alt text, or keyboard navigation. You run a basic audit.',
    brief:
      'Audit a hypothetical landing page against WCAG 2.1 Level AA success criteria. Identify at least 5 failures and propose a fix for each.',
    deliverables: [
      'A description of the hypothetical landing page (hero section, features, testimonials, CTA, footer)',
      'At least 5 WCAG 2.1 AA failures with the specific success criterion violated (e.g., 1.4.3 Contrast)',
      'A proposed fix for each failure with effort estimate (quick fix vs redesign)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The most common WCAG failures are: missing alt text, insufficient colour contrast, no keyboard focus indicators, and missing form labels. Start there.',
    rubric: [
      { key: 'page', label: 'Page Description', description: 'Is the hypothetical page plausible with enough detail to audit?', weight: 15 },
      { key: 'failures', label: 'Failure Identification', description: 'Are the 5 failures real WCAG violations with correct criterion references?', weight: 45 },
      { key: 'fixes', label: 'Proposed Fixes', description: 'Are the fixes correct, specific, and effort-estimated?', weight: 40 },
    ],
    skillsProven: ['WCAG auditing', 'Accessibility testing', 'Colour contrast', 'Semantic HTML'],
    relatedRoadmapIds: [],
  },
  {
    id: 'a11y-keyboard-navigation',
    categoryId: 'design-ux',
    topicId: 'accessibility-a11y',
    level: 'intermediate',
    title: 'Keyboard Navigation Design',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design the keyboard navigation flow for a complex component.',
    scenario:
      'A data table component has sortable columns, row selection, inline editing, and a context menu. Mouse users can do everything easily. Keyboard users are stuck — there is no focus management, no arrow key navigation, and Escape does not close the context menu.',
    brief:
      'Design the complete keyboard navigation specification for this data table. Cover focus order, key bindings, focus trapping for the context menu, and screen reader announcements.',
    deliverables: [
      'A focus order specification: Tab sequence through the table, including column headers, rows, and action buttons',
      'Key bindings: Arrow keys for cell navigation, Enter for editing, Escape for cancelling, Space for row selection',
      'Focus management for the context menu: how it opens, traps focus, and returns focus on close',
      'Screen reader announcements: what is announced when sorting, selecting, and editing',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A data table with 100 rows and 8 columns has 800 cells. Tab-bing through every cell is unusable. Use arrow keys for cell navigation and Tab for structural navigation. Show this distinction.',
    rubric: [
      { key: 'focus-order', label: 'Focus Order', description: 'Is the tab order logical and does it avoid the 800-cell trap?', weight: 25 },
      { key: 'key-bindings', label: 'Key Bindings', description: 'Are the key bindings consistent with platform conventions?', weight: 30 },
      { key: 'focus-trap', label: 'Focus Management', description: 'Is the context menu focus trapping correctly specified?', weight: 25 },
      { key: 'announcements', label: 'Screen Reader Support', description: 'Are the live region announcements appropriate and not excessive?', weight: 20 },
    ],
    skillsProven: ['Keyboard navigation', 'Focus management', 'ARIA patterns', 'Screen reader support'],
    relatedRoadmapIds: [],
  },
  {
    id: 'a11y-inclusive-strategy',
    categoryId: 'design-ux',
    topicId: 'accessibility-a11y',
    level: 'advanced',
    title: 'Inclusive Design Strategy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Write an accessibility strategy for a product team: standards, tooling, and workflow.',
    scenario:
      'A 40-person product team (PMs, designers, developers, QA) has been ignoring accessibility for 3 years. The CEO just received a complaint from a visually impaired user. She wants an accessibility strategy — not just a checklist, but a cultural shift.',
    brief:
      'Write a comprehensive accessibility strategy that embeds a11y into every phase of the product development lifecycle. Cover standards, tooling, testing, and team education.',
    deliverables: [
      'Standards adoption: which WCAG level to target (AA vs AAA) and which success criteria to prioritise',
      'Tooling integration: automated tools (axe, Lighthouse), design plugins (Stark), and CI/CD integration',
      'Testing cadence: when to test (design review, dev PR, QA, post-deploy) and who is responsible at each stage',
      'Team education plan: how to train designers, developers, and QA on accessibility fundamentals',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Accessibility is not a QA gate at the end. It starts in design (colour contrast, focus states) and continues through development (semantic HTML, ARIA) and testing (screen reader, keyboard).',
    rubric: [
      { key: 'standards', label: 'Standards Adoption', description: 'Is the WCAG level appropriate with smart prioritisation?', weight: 25 },
      { key: 'tooling', label: 'Tooling Integration', description: 'Are the tools well-chosen and integrated into existing workflows?', weight: 25 },
      { key: 'testing', label: 'Testing Cadence', description: 'Is accessibility testing embedded at every stage (not just QA)?', weight: 25 },
      { key: 'education', label: 'Team Education', description: 'Is the education plan practical and role-specific?', weight: 25 },
    ],
    skillsProven: ['Accessibility strategy', 'Inclusive design', 'Process design', 'Team education'],
    relatedRoadmapIds: [],
  },

  // --- Topic 10: UX Writing & Content Design ---
  {
    id: 'uxw-error-messages',
    categoryId: 'design-ux',
    topicId: 'ux-writing-content-design',
    level: 'beginner',
    title: 'Rewrite Error Messages',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Rewrite 10 technical error messages into user-friendly, actionable copy.',
    scenario:
      'A banking app shows error messages like "Error 403: Unauthorized," "Transaction failed: timeout exception," and "Invalid input: field cannot be null." Users call the support centre in a panic.',
    brief:
      'Rewrite 10 technical error messages into plain language that tells users (1) what happened, (2) why it happened, and (3) what to do next.',
    deliverables: [
      'A table of 10 errors: Original Technical Message → Rewritten User-Friendly Message → Rationale',
      'Three tone principles for error messages at this company (e.g., "be honest, not alarming")',
      'One error where the best UX is to prevent it entirely rather than show a message, with your prevention design',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      '"Something went wrong" is not a good error message either. It tells the user nothing. Good errors are specific: "Your payment could not be processed. Your card was not charged. Try again or use a different card."',
    rubric: [
      { key: 'rewrites', label: 'Error Rewrites', description: 'Are the rewrites clear, specific, and actionable?', weight: 40 },
      { key: 'tone', label: 'Tone Principles', description: 'Are the 3 principles consistent and appropriate for a banking app?', weight: 30 },
      { key: 'prevention', label: 'Error Prevention', description: 'Is the prevention design practical and truly better than a message?', weight: 30 },
    ],
    skillsProven: ['UX writing', 'Error messaging', 'Microcopy', 'User empathy'],
    relatedRoadmapIds: [],
  },
  {
    id: 'uxw-onboarding-copy',
    categoryId: 'design-ux',
    topicId: 'ux-writing-content-design',
    level: 'intermediate',
    title: 'Onboarding Flow Copy',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write all the copy for a 5-step onboarding flow including empty states and tooltips.',
    scenario:
      'A project management tool has a 5-step onboarding flow: Welcome → Create Workspace → Invite Team → Create First Project → Tour Complete. The current copy is generic ("Welcome! Let\'s get started."). Users drop off at step 3.',
    brief:
      'Write all the copy for the 5-step onboarding flow. Include headlines, body text, button labels, progress indicators, tooltips, and the empty state for a workspace with no projects.',
    deliverables: [
      'Complete copy for all 5 screens: headline, body text (max 2 sentences), primary CTA, secondary CTA',
      'A progress indicator design with copy (e.g., "Step 2 of 5 — almost there" vs "2/5")',
      'Tooltips for 3 non-obvious features encountered during onboarding',
      'An empty state for the dashboard after onboarding (no projects yet) that motivates the first action',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Users drop off at "Invite Team" because it feels like a chore, not a benefit. The copy should reframe it: "Projects go faster with teammates. Who should join you?"',
    rubric: [
      { key: 'screen-copy', label: 'Screen Copy', description: 'Is the copy concise, motivating, and progressive across 5 steps?', weight: 35 },
      { key: 'progress', label: 'Progress Indicator', description: 'Does the progress copy reduce perceived effort?', weight: 15 },
      { key: 'tooltips', label: 'Tooltip Copy', description: 'Are the tooltips contextual, brief, and genuinely helpful?', weight: 25 },
      { key: 'empty-state', label: 'Empty State', description: 'Does the empty state motivate action without feeling pushy?', weight: 25 },
    ],
    skillsProven: ['Onboarding copy', 'UX writing', 'Empty states', 'User motivation'],
    relatedRoadmapIds: [],
  },
  {
    id: 'uxw-content-design-system',
    categoryId: 'design-ux',
    topicId: 'ux-writing-content-design',
    level: 'advanced',
    title: 'Content Design System',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a voice & tone guide plus UX writing pattern library for a fintech product.',
    scenario:
      'A fintech app has 4 content designers who all write differently. One is formal ("Your transaction has been processed"), another is casual ("Done! Money sent 🎉"). The product feels inconsistent. The team needs a content design system.',
    brief:
      'Build a voice and tone guide plus a UX writing pattern library. The system should ensure consistency without killing personality.',
    deliverables: [
      'A voice definition: 3-5 voice attributes with a spectrum (e.g., "Confident, not arrogant")',
      'A tone variation guide: how the voice adapts across contexts (success, error, neutral, celebration)',
      'A pattern library with templates for: CTAs, confirmation dialogs, empty states, error messages, and loading states',
      'A "this, not that" reference table with 10 before/after examples',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Voice is consistent (who we are). Tone varies by context (how we sound right now). A fintech can be friendly on a success screen and serious on a payment error. Show this range.',
    rubric: [
      { key: 'voice', label: 'Voice Definition', description: 'Are the voice attributes clear, distinctive, and bounded by "not" statements?', weight: 25 },
      { key: 'tone', label: 'Tone Variation', description: 'Does the tone guide show appropriate variation across contexts?', weight: 25 },
      { key: 'patterns', label: 'Pattern Library', description: 'Are the patterns comprehensive with enough flexibility for writers?', weight: 30 },
      { key: 'examples', label: 'Before/After Examples', description: 'Are the "this, not that" examples specific and illustrative?', weight: 20 },
    ],
    skillsProven: ['Voice & tone', 'Content design systems', 'UX writing patterns', 'Design governance'],
    relatedRoadmapIds: [],
  },
];
