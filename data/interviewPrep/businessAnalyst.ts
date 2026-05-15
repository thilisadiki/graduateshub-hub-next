import type { InterviewPrep } from '@/types';

export const businessAnalystPrep: InterviewPrep = {
  id: 'business-analyst',
  role: 'Junior Business Analyst',
  category: 'business',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  description: 'CV advice and interview questions for junior business analyst roles. Written with practical business intelligence, requirements gathering, and hiring-panel context.',
  salaryBenchmarks: [
    { region: 'United States', range: '$55,000 – $75,000/year' },
    { region: 'United Kingdom', range: '£30,000 – £45,000/year' },
    { region: 'Canada', range: 'CA$55,000 – CA$78,000/year' },
    { region: 'Australia', range: 'A$70,000 – A$95,000/year' },
    { region: 'South Africa', range: 'R200,000 – R340,000/year' },
  ],

  cvMustInclude: [
    'A clear summary of your analytical and communication skills, not just your qualification',
    'Any exposure to requirements gathering, process mapping, or stakeholder engagement, even in academic or volunteer contexts',
    'Tools you have used: Microsoft Visio, Lucidchart, Excel, Jira, Confluence, or any BI tool',
    'Your IIBA ECBA certification if completed, or study progress toward it',
    'Evidence of structured problem-solving: a project where you identified a problem, mapped it, and proposed a solution',
    'Methodologies you have studied or applied: Agile, Scrum, Waterfall, DMAIC',
  ],

  cvAvoid: [
    'Claiming BA experience from purely technical roles without demonstrating stakeholder or requirements work',
    'Listing "communication" or "analytical thinking" as skills without supporting examples or projects',
    'A CV that reads like a data analyst or project manager CV. BA is a distinct role and should be positioned clearly',
    'Omitting soft skills entirely. BA interviews place heavy weight on facilitation and communication ability',
    'A CV longer than two pages for entry-level. Hiring managers in corporate environments expect conciseness',
  ],

  cvTips: [
    {
      heading: 'Show a requirements or process document',
      body: 'One of the most effective things a junior BA candidate can do is attach or link to a sample work product: a process flow diagram, a requirements specification, or a stakeholder analysis. Even a fictional example shows that you understand what a BA actually produces. Use Lucidchart or draw.io for diagrams and share them via a Google Drive link or GitHub Gist.',
    },
    {
      heading: 'Speak the language of the industry you are targeting',
      body: 'BA roles are common in banking, insurance, retail, healthcare, government, and technology. Each sector has its own vocabulary. If you are targeting financial services, mention KYC, credit life cycles, or core banking systems. If retail, mention POS integration, supply chain, or ERP systems. Research the sector before you apply and mirror its language in your summary.',
    },
    {
      heading: 'Demonstrate structured thinking, not just results',
      body: 'Hiring managers do not expect junior candidates to have solved major business problems. They want to see that you approach problems in a structured way. Describe a project in terms of: what the problem was, who the stakeholders were, how you gathered information, what you recommended, and what happened. This structure maps directly to how a BA operates day-to-day.',
    },
    {
      heading: 'Mention Agile or Scrum awareness explicitly',
      body: 'Most corporate technology environments have adopted some form of Agile delivery. Even if your coursework was theoretical, naming the framework signals awareness. "Completed Scrum Fundamentals Certified (SFC) training through SCRUMstudy" is a free certification that adds credibility and costs nothing beyond study time.',
    },
  ],

  keySkills: [
    'Requirements elicitation and documentation (BRS, FRS)',
    'Process modelling (BPMN, flowcharts, swim lanes)',
    'Stakeholder analysis and management',
    'Agile and Scrum methodology basics',
    'Microsoft Excel and data analysis for business cases',
    'Gap analysis and as-is vs to-be mapping',
    'Written and verbal communication with technical and non-technical teams',
  ],

  questions: [
    {
      question: 'What is the difference between a functional and a non-functional requirement?',
      why: 'This is one of the most common BA screening questions in corporate interviews. It tests whether you understand the foundations of requirements documentation.',
      sampleAnswer: 'A functional requirement describes what a system should do: a specific behaviour, feature, or function. For example, "the system must allow a user to reset their password via email." A non-functional requirement describes how the system should perform: its quality attributes such as performance, security, scalability, or availability. For example, "the password reset email must be delivered within 30 seconds" or "the system must support 10,000 concurrent users." Both matter in any system design, and a good BA documents both explicitly.',
      redFlag: 'Describing only one type or confusing non-functional requirements with constraints. This suggests the candidate has read about requirements but has not practised writing them.',
    },
    {
      question: 'Walk me through how you would run a requirements elicitation session with stakeholders.',
      why: 'Elicitation is the core skill of a BA. Employers use this question to distinguish candidates who understand the role from those who think it is just documentation work.',
      sampleAnswer: 'Before the session I would identify who the key stakeholders are and what their roles and interests are in the project. I would prepare a structured agenda with specific questions and any supporting materials like process diagrams or existing documentation to anchor the conversation. During the session I would start by clarifying the objective and scope, then use open-ended questions to draw out current pain points and desired outcomes. I would capture everything in real time and read back key points to confirm accuracy. After the session I would produce a requirements document and circulate it to stakeholders for sign-off before development begins.',
    },
    {
      question: 'Describe what BPMN is and draw or describe a simple process using it.',
      why: 'BPMN (Business Process Model and Notation) is a standard diagramming language for corporate BAs. Knowing it at even a basic level is expected.',
      sampleAnswer: 'BPMN is a standardised notation for modelling business processes visually. It uses specific shapes: rounded rectangles for events (start, intermediate, end), rectangles for tasks, diamonds for gateways (decisions), and arrows for sequence flow. A simple example would be an invoice approval process: a start event triggers a task "Receive Invoice," which leads to a gateway "Amount above $500?" If yes, it routes to "Manager Approval," then to "Process Payment" and an end event. If no, it goes directly to "Process Payment." BPMN makes processes readable by both business and technical teams.',
    },
    {
      question: 'How do you handle a situation where two stakeholders have conflicting requirements?',
      why: 'Conflict resolution is a daily BA reality. Interviewers use this question to assess whether you can navigate politics and keep projects moving.',
      sampleAnswer: 'I would not pick a side or escalate immediately. First, I would make sure I fully understand each stakeholder\'s position and the reasoning behind it, because often what looks like a conflict is actually two people describing the same need from different angles. If the conflict is genuine, I would bring both parties into a facilitated session to surface the business objective behind each requirement. Most conflicts resolve when you tie both positions back to a shared goal. If they cannot be resolved at that level, I would document both positions with their trade-offs and escalate to the project sponsor with a clear recommendation for how to proceed.',
    },
    {
      question: 'What is the difference between an as-is and a to-be process, and why does it matter?',
      why: 'Gap analysis is a foundational BA technique. This question tests whether you can explain the value of your own work to a non-technical interviewer.',
      sampleAnswer: 'The as-is process documents how something works today, with all its manual steps, inefficiencies, and workarounds. The to-be process describes how it should work after the proposed change or system is implemented. The gap between the two defines the scope of the project. Without documenting the as-is state, you risk designing a solution that does not address the actual problem or that disrupts dependencies you were not aware of. In regulated organisations, especially banking, insurance, healthcare, and government, as-is documentation is also critical for compliance and audit purposes.',
    },
    {
      question: 'Tell me what you know about Agile and how a BA fits into a Scrum team.',
      why: 'Most corporate technology teams work in some form of Agile. A junior BA who cannot describe the framework will struggle to be placed.',
      sampleAnswer: 'Agile is an iterative approach to delivering work in short cycles called sprints, typically two weeks long, with frequent review and adaptation. In a Scrum team, the BA often works closely with the Product Owner to refine and clarify the product backlog: ensuring user stories are well-defined, have clear acceptance criteria, and are ready for the development team to pick up. The BA is the bridge between the business and the technical team, translating business needs into actionable stories and clarifying requirements during the sprint when developers have questions. In smaller teams, the BA and Product Owner roles can overlap significantly.',
    },
  ],

  relatedRoadmapId: 'business-analyst',
  relatedPrepIds: ['data-analyst', 'junior-accountant', 'it-support-specialist'],
};
