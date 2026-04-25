import type { InterviewPrep } from '@/types';

export const projectCoordinatorPrep: InterviewPrep = {
  id: 'project-coordinator',
  role: 'Junior Project Coordinator',
  category: 'business',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  description: 'CV advice and interview questions for junior project coordinator and project administrator roles in South Africa. Covers project lifecycle basics, Agile vs Waterfall, stakeholder communication, and the tools SA project environments use most.',
  salaryRange: 'R180,000 – R320,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'Any project management certification or study progress: PMP, CAPM, PRINCE2 Foundation, or Google Project Management Certificate (all recognised by SA employers)',
    'Experience coordinating any activity with a defined scope, timeline, and stakeholders - academic, volunteer, or work-based',
    'Tools you have used: Microsoft Project, Asana, Trello, Jira, Monday.com, or Excel project tracking',
    'A summary that explicitly mentions project coordination, not just "organisational skills"',
    'Evidence of stakeholder communication: meeting minutes, status reports, or progress tracking',
    'Risk or issue management experience, even from a class project or volunteer context',
  ],

  cvAvoid: [
    'Using vague terms like "assisted with projects" - be specific about what you coordinated, the scale, and the outcome',
    'Claiming PMP certification without having it. SA hiring managers verify certifications and the PMP requires documented experience to qualify',
    'Listing project tools you cannot demonstrate proficiency with - a practical test or case study may be part of the process',
    'Omitting the outcomes of projects you managed. "Coordinated a student event" is weaker than "Coordinated a 200-person faculty orientation event, on time and within a R15,000 budget"',
    'A skills section with only soft skills like "organised" and "detail-oriented" - these are expected, not differentiators',
  ],

  cvTips: [
    {
      heading: 'Frame every experience as a project',
      body: 'South African project management hiring managers are trained to look for project thinking patterns, not just job titles. Reframe any complex task you have coordinated using project language: scope, timeline, stakeholders, risks, and outcomes. Even organising a fundraiser or coordinating a group assignment can be framed this way. "Led a team of six to coordinate a charity run for 80 participants, managing venue logistics, volunteer scheduling, and a R8,000 budget from brief to debrief" tells a hiring manager far more than "helped organise events."',
    },
    {
      heading: 'Differentiate Agile and Waterfall on your CV',
      body: 'SA corporate project environments split roughly between traditional Waterfall (used in construction, government, and large ERP implementations) and Agile (used in technology, banking, and retail). If you have studied or applied either methodology, name it explicitly. "Delivered a final-year group project using a Scrum-based approach with two-week sprints and daily standups" signals Agile awareness that many SA entry-level candidates lack.',
    },
    {
      heading: 'Show a project artefact if you can',
      body: 'The most convincing thing a junior project coordinator in South Africa can include in a job application is an example work product: a project plan, a risk register, a RACI matrix, or a status report template. Link to a Google Drive folder or GitHub Gist with a sample. Even a redacted or fictional version demonstrates that you know what these documents are and how to produce them - something most CVs from entry-level candidates do not show.',
    },
    {
      heading: 'Acknowledge the PMBOK or PRINCE2 framework explicitly',
      body: 'Large SA corporates - banks, telecoms, mining, and government - use structured methodologies. Mentioning "familiar with PMBOK project lifecycle phases (initiation, planning, execution, monitoring, closure)" signals you have studied beyond just the concept of project management. It costs nothing to add this to your education section or summary, and it signals the candidate understands the professional standard of the role.',
    },
  ],

  keySkills: [
    'Project lifecycle management (initiation to closure)',
    'Agile and Scrum basics: sprints, ceremonies, backlog refinement',
    'Waterfall and traditional project planning',
    'Risk and issue logging and tracking',
    'Stakeholder communication and status reporting',
    'Project scheduling tools: MS Project, Jira, Asana, Trello',
    'Budget tracking and cost control basics',
    'Meeting facilitation and minute-taking',
  ],

  questions: [
    {
      question: 'Walk me through the five phases of a project lifecycle.',
      why: 'This is the most common project management screening question in SA corporate interviews. It tests whether you know the PMBOK framework that most large SA organisations use.',
      sampleAnswer: 'The five phases are initiation, planning, execution, monitoring and control, and closure. In initiation, you define the project purpose, objectives, and feasibility, and produce a project charter and identify key stakeholders. In planning, you develop the detailed project management plan: scope, schedule, cost, quality, resources, and risk. In execution, the team carries out the work to produce the deliverables. Monitoring and control runs concurrently with execution - you track progress against the baseline, manage change requests, and address risks and issues as they arise. In closure, you formally complete all deliverables, hand over to the client or operations team, conduct lessons learned, and archive project documentation.',
    },
    {
      question: 'What is the difference between a risk and an issue in project management?',
      why: 'This is a foundational distinction that entry-level project candidates in SA often confuse. Getting it right signals genuine project management training.',
      sampleAnswer: 'A risk is a potential event that has not yet happened - it may or may not occur in the future. An issue is a problem that has already occurred and is currently affecting the project. In practice, a good project coordinator maintains a risk register that tracks identified risks, their probability, impact, mitigation strategy, and owner. When a risk materialises, it moves to the issue log and becomes something that needs immediate management action, not just monitoring. In SA corporate environments, especially in banking and IT, the distinction matters for reporting - executives want to see risks separated from active issues.',
    },
    {
      question: 'How would you handle a stakeholder who consistently misses project milestones without communicating?',
      why: 'Stakeholder management is one of the hardest practical skills in project coordination. SA interviewers use this question to test whether you understand escalation, documentation, and relationship management.',
      sampleAnswer: 'I would first have a direct conversation with the stakeholder - not a formal escalation yet - to understand whether the missed milestones reflect a capacity problem, an unclear expectation, or a deeper blocker I was not aware of. I would review whether the milestone was clearly defined with a specific deliverable and due date, because ambiguity on my side may be contributing to the problem. If the issue persists after that conversation, I would document the impact of the delays on the project plan and share it with the stakeholder formally, giving them visibility into the downstream effects of their dependencies being late. If it continues after that, I would escalate to the project sponsor with documentation, not as a complaint but as a formal risk to project delivery that requires a decision.',
    },
    {
      question: 'What is a RACI matrix and when would you use one?',
      why: 'RACI is a standard tool in SA corporate project management. It is often referenced in job descriptions and tested in early-stage interviews.',
      sampleAnswer: 'A RACI matrix is a responsibility assignment tool that maps project tasks or deliverables to four roles: Responsible (the person doing the work), Accountable (the single person ultimately answerable for the outcome, usually a decision-maker), Consulted (people whose input is needed but who are not doing the work), and Informed (people who need to be kept updated but do not have a formal role). I would use it at the beginning of a project during planning to clarify ownership - particularly in projects with multiple departments involved where people are unclear about who is doing what. In South African matrix organisations, where team members report to multiple managers, a RACI prevents the confusion of either duplicated effort or tasks falling through the cracks.',
    },
    {
      question: 'Tell me about a time a project or plan you were involved in did not go as expected. What did you do?',
      why: 'SA project managers value resilience and problem-solving over perfection. This question tests whether you can learn from failure and respond constructively.',
      sampleAnswer: 'During my studies, I coordinated a group research presentation where a team member submitted their section the night before, which was completely off-brief and needed to be redone. I had not built buffer time into the plan and had not checked in on their progress early enough. I stayed up with that person to restructure their section and pulled in another team member to help with the visual slides. We delivered on time and passed well. The lesson I took: check on dependencies at the midpoint, not just the deadline, and build two days of buffer into any plan that relies on others. I now build explicit checkpoint dates into any project I coordinate.',
    },
    {
      question: 'What is the triple constraint in project management and why does it matter?',
      why: 'The triple constraint is foundational theory that SA project coordinators are expected to understand from day one. It frames almost every project trade-off conversation.',
      sampleAnswer: 'The triple constraint, also called the project management triangle, refers to the three interdependent variables in every project: scope, time, and cost. The principle is that you cannot change one without affecting at least one of the others. If a client wants to add more scope, either the timeline must extend or the budget must increase - you cannot get more for free. In practice, this is the most important concept for managing client expectations. When a stakeholder requests a change in scope midway through a project, the first thing I would do is assess the impact on time and cost and present that trade-off to the project sponsor for a decision. It keeps the conversation factual rather than emotional.',
    },
  ],

  relatedRoadmapId: 'project-coordinator',
  relatedPrepIds: ['business-analyst', 'it-support-specialist', 'data-analyst'],
};
