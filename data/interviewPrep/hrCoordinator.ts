import type { InterviewPrep } from '@/types';

export const hrCoordinatorPrep: InterviewPrep = {
  id: 'hr-coordinator',
  role: 'Junior HR Coordinator',
  category: 'business',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and common interview questions for junior HR coordinator roles. Covers recruitment support, onboarding, employment compliance basics, and the interpersonal skills HR managers test for.',
  salaryBenchmarks: [
    { region: 'United States', range: '$42,000 – $58,000/year' },
    { region: 'United Kingdom', range: '£23,000 – £32,000/year' },
    { region: 'Canada', range: 'CA$42,000 – CA$60,000/year' },
    { region: 'Australia', range: 'A$55,000 – A$75,000/year' },
    { region: 'South Africa', range: 'R150,000 – R260,000/year' },
  ],

  cvMustInclude: [
    'A clear summary stating your HR focus and any relevant qualification (e.g. "BCom Human Resource Management graduate with hands-on recruitment support and onboarding experience")',
    'Any HR-related coursework, project work, or internship experience, even if limited',
    'Specific HR systems or tools you have used: SAP HR, Sage Payroll, BambooHR, or even Excel for HR tracking',
    'Your knowledge of employment law basics, workplace compliance, and fair hiring practices - even at a theoretical level',
    'Soft skills backed by evidence: conflict resolution, confidentiality, and cross-functional communication',
    'Any HR membership, HR certificate, or short course completion',
  ],

  cvAvoid: [
    'Generic statements like "people person" or "passionate about HR" without a supporting example',
    'Claiming payroll experience if you have not processed payroll - a technical test will expose this',
    'Omitting your degree field. HR managers scan for HR, Psychology, or Commerce qualifications specifically',
    'A CV longer than two pages for entry-level roles - HR departments receive high volumes and scan quickly',
    'References listed on the CV unless the job advert asks for them. "Available on request" is usually enough',
  ],

  cvTips: [
    {
      heading: 'Lead with your HR specialisation, not just your degree',
      body: 'Many graduates with business, psychology, or commerce degrees apply for HR roles, but a hiring manager cannot tell at a glance which stream you studied. Make it explicit in your summary: "Human Resource Management graduate with academic grounding in recruitment, compensation and benefits, and employment law basics." That one line differentiates you from a general business graduate immediately.',
    },
    {
      heading: 'Show evidence of confidentiality and discretion',
      body: 'HR deals with sensitive employee information every day. Hiring managers actively look for signals that you understand this. In your CV or cover letter, mention any context where you handled private data responsibly: academic research with ethical clearance, volunteer work with vulnerable populations, or a role in medical administration. This tells them you already understand the professional standard.',
    },
    {
      heading: 'Reference compliance areas clearly',
      body: 'Mentioning employment law, equal opportunity, data privacy, grievance handling, or payroll compliance by name - even in your education section - signals readiness for the HR context. Phrases like "academic grounding in recruitment compliance and employee relations procedures" are stronger than "knowledge of HR." HR teams operate within these frameworks daily and want candidates who speak their language.',
    },
    {
      heading: 'Include any recruitment or onboarding project work',
      body: 'Even a class project where you designed a recruitment process, an onboarding checklist, or a job evaluation framework is worth including under a Projects section. Entry-level HR roles often spend significant time on recruitment administration and onboarding coordination. Showing that you understand what these activities involve - even theoretically - gives you a concrete edge over candidates who only list soft skills.',
    },
  ],

  keySkills: [
    'Recruitment administration and CV screening support',
    'Employee onboarding and offboarding coordination',
    'Employment law, fair hiring, and workplace compliance basics',
    'HR record-keeping and HRIS data management',
    'Confidentiality and professional discretion',
    'Conflict resolution and employee relations basics',
    'Clear written communication for job postings and correspondence',
  ],

  questions: [
    {
      question: 'Walk me through how you would support a recruitment process for a new hire from job posting to offer.',
      why: 'Recruitment administration is a core day-to-day activity for junior HR coordinators. This question tests whether you understand the full end-to-end process.',
      sampleAnswer: 'I would start by working with the hiring manager to confirm the job specification and approval to hire. I would draft or adapt the job posting, making sure it uses inclusive language and complies with internal hiring policies, then post it on relevant channels such as LinkedIn, job boards, or the company careers page. I would screen CVs against the minimum requirements and compile a shortlist for the hiring manager. After interviews, I would support reference checks and prepare the offer letter and employment contract. Once the candidate accepts, I would initiate onboarding: confirming a start date, preparing their workspace or system setup request, and scheduling induction activities.',
    },
    {
      question: 'What employment compliance areas should an HR coordinator understand?',
      why: 'HR departments operate inside a legal and policy framework. Interviewers want to know you understand that HR is not just administration.',
      sampleAnswer: 'An HR coordinator should understand the basics of fair hiring, employment contracts, working time and leave rules, payroll documentation, anti-discrimination requirements, employee data privacy, and grievance or disciplinary processes. The exact laws differ by country, so I would always check the organisation\'s jurisdiction and internal policies. At entry level, I may not advise on legal interpretation, but I should know when an issue has compliance implications and when to escalate it to an HR manager or legal specialist.',
      redFlag: 'Treating HR compliance as optional paperwork. Even entry-level HR work can create legal and reputational risk if handled carelessly.',
    },
    {
      question: 'How would you handle a situation where an employee approached you in confidence about a complaint against their line manager?',
      why: 'Confidentiality and professional discretion are tested in almost every HR interview. The question assesses whether you can balance employee trust with the procedural obligations of the role.',
      sampleAnswer: 'I would listen without interrupting, making sure the employee feels heard. I would thank them for coming to me and clarify that while I respect their confidence, HR has procedural obligations and I may not always be able to keep a complaint completely private if it involves serious misconduct or risk. I would explain the formal grievance process available to them under the company\'s disciplinary and grievance policy. I would not approach the line manager directly without the employee\'s knowledge. I would consult with my HR manager about the appropriate next steps and document the interaction according to our internal protocols, being careful about who has access to those notes.',
    },
    {
      question: 'How can HR support fair and inclusive hiring?',
      why: 'Fair hiring is a practical HR responsibility in many regions. Interviewers want to know you understand inclusion as a process, not just a slogan.',
      sampleAnswer: 'HR can support fair hiring by writing job adverts with clear requirements and inclusive language, using consistent screening criteria, documenting why candidates are shortlisted or rejected, ensuring interview panels are briefed on the role requirements, and making reasonable accommodations where needed. HR should also track hiring data to identify patterns that may indicate bias. For a coordinator, the practical responsibility is to follow the process consistently, keep accurate records, and escalate anything that looks unfair or inconsistent.',
    },
    {
      question: 'Describe a situation where you had to manage multiple priorities at the same time. How did you handle it?',
      why: 'HR coordinators juggle recruitment, onboarding, compliance deadlines, and employee queries simultaneously. Interviewers use this to test practical organisation skills.',
      sampleAnswer: 'During my final year, I was simultaneously writing assignments, volunteering as an events coordinator for my faculty, and completing a part-time internship. When three deadlines clashed in one week, I sat down and created a priority matrix based on urgency and consequences of missing each one. I communicated proactively with my internship supervisor about which tasks I could complete that week and which would need to shift by a day. I blocked time each morning for the highest-stakes tasks before checking messages. All three were completed on time. In an HR role, I would apply the same principle: a legal compliance deadline always takes precedence over an administrative task, and communicating proactively is always better than going silent.',
    },
    {
      question: 'Why do you want to work in HR specifically?',
      why: 'HR managers are sceptical of candidates who see HR as an easy office job. They want people who understand the strategic and legally complex nature of the role.',
      sampleAnswer: 'I am drawn to HR because it sits at the intersection of business operations, law, and people development. I want to build towards a career where I can contribute to a fair and high-performing workplace, not just process paperwork. My long-term goal is to move into an HR business partner role where I can work directly with business leaders on workforce planning, employee relations, and talent strategy.',
    },
  ],

  relatedRoadmapId: '',
  relatedPrepIds: ['business-analyst', 'junior-accountant', 'digital-marketing-coordinator'],
};
