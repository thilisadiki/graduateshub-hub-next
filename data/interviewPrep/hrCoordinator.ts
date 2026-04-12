import type { InterviewPrep } from '@/types';

export const hrCoordinatorPrep: InterviewPrep = {
  id: 'hr-coordinator',
  role: 'Junior HR Coordinator',
  category: 'business',
  curator: 'ndulamiso',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and the most common interview questions for junior HR coordinator roles in South Africa. Covers recruitment support, onboarding, labour law basics, and the interpersonal skills SA HR managers test for.',
  salaryRange: 'R150,000 – R260,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'A clear summary stating your HR focus and any relevant qualification (e.g. "BCom Human Resource Management graduate with hands-on recruitment support and onboarding experience")',
    'Any HR-related coursework, project work, or internship experience, even if limited',
    'Specific HR systems or tools you have used: SAP HR, Sage Payroll, BambooHR, or even Excel for HR tracking',
    'Your knowledge of the South African Labour Relations Act, BCEA, or Employment Equity Act — even at a theoretical level',
    'Soft skills backed by evidence: conflict resolution, confidentiality, and cross-functional communication',
    'Any SABPP membership, HR certificate, or short course completion',
  ],

  cvAvoid: [
    'Generic statements like "people person" or "passionate about HR" without a supporting example',
    'Claiming payroll experience if you have not processed payroll — a technical test will expose this',
    'Omitting your degree field. HR managers scan for HR, Psychology, or Commerce qualifications specifically',
    'A CV longer than two pages for entry-level roles — SA HR departments receive high volumes and scan quickly',
    'References listed on the CV. "Available on request" is the SA standard',
  ],

  cvTips: [
    {
      heading: 'Lead with your HR specialisation, not just your degree',
      body: 'Many graduates with BCom degrees apply for HR roles, but a hiring manager cannot tell at a glance which stream you studied. Make it explicit in your summary: "BCom Human Resource Management, with academic grounding in recruitment, compensation and benefits, and South African labour law." That one line differentiates you from a general commerce graduate immediately.',
    },
    {
      heading: 'Show evidence of confidentiality and discretion',
      body: 'HR deals with sensitive employee information every day. SA hiring managers actively look for signals that you understand this. In your CV or cover letter, mention any context where you handled private data responsibly: academic research with ethical clearance, volunteer work with vulnerable populations, or a role in medical administration. This tells them you already understand the professional standard.',
    },
    {
      heading: 'Reference the Acts by name',
      body: 'Mentioning the Labour Relations Act, the Basic Conditions of Employment Act, or the Employment Equity Act by name — even in your education section — signals readiness for the SA context. Phrases like "academic grounding in LRA and BCEA compliance" are stronger than "knowledge of labour law." SA HR teams operate within these frameworks daily and want candidates who speak their language.',
    },
    {
      heading: 'Include any recruitment or onboarding project work',
      body: 'Even a class project where you designed a recruitment process, an onboarding checklist, or a job evaluation framework is worth including under a Projects section. SA entry-level HR roles spend most time on recruitment administration and onboarding coordination. Showing that you understand what these activities involve — even theoretically — gives you a concrete edge over candidates who only list soft skills.',
    },
  ],

  keySkills: [
    'Recruitment administration and CV screening support',
    'Employee onboarding and offboarding coordination',
    'South African labour law basics (LRA, BCEA, EEA)',
    'HR record-keeping and HRIS data management',
    'Confidentiality and professional discretion',
    'Conflict resolution and employee relations basics',
    'Clear written communication for job postings and correspondence',
  ],

  questions: [
    {
      question: 'Walk me through how you would support a recruitment process for a new hire from job posting to offer.',
      why: 'Recruitment administration is the core day-to-day activity for junior HR coordinators in SA. This question tests whether you understand the full end-to-end process.',
      sampleAnswer: 'I would start by working with the hiring manager to confirm the job specification and approval to hire. I would draft or adapt the job posting, making sure it complies with employment equity targets if applicable, and post it on relevant channels — LinkedIn, PNet, CareerJunction, or the company careers page. I would then screen CVs against the minimum requirements and compile a shortlist for the hiring manager. After interviews, I would conduct reference checks and prepare the offer letter and employment contract. Once the candidate accepts, I would initiate the onboarding process: confirming a start date, preparing their workspace setup request, and scheduling induction activities.',
    },
    {
      question: 'What is the difference between the Labour Relations Act and the Basic Conditions of Employment Act?',
      why: 'SA HR departments operate under specific legislation. Confusing these two foundational Acts is a red flag for any HR candidate, even at entry level.',
      sampleAnswer: 'The Labour Relations Act governs the relationship between employers, employees, and unions. It covers collective bargaining, strikes, dismissal procedures, dispute resolution through the CCMA, and the rights of organised labour. The Basic Conditions of Employment Act deals with the minimum conditions of employment — working hours, leave entitlements, overtime, notice periods, and minimum wage provisions. A simple way to think about it: the LRA governs relationships and processes, while the BCEA governs minimum employment standards. Both apply in almost every SA employment relationship and HR coordinators must understand both.',
      redFlag: 'Confusing the two Acts or being unable to give even a basic description. Entry-level HR candidates in SA are expected to know this from their studies.',
    },
    {
      question: 'How would you handle a situation where an employee approached you in confidence about a complaint against their line manager?',
      why: 'Confidentiality and professional discretion are tested in almost every SA HR interview. The question assesses whether you can balance employee trust with the procedural obligations of the role.',
      sampleAnswer: 'I would listen without interrupting, making sure the employee feels heard. I would thank them for coming to me and clarify that while I respect their confidence, HR has procedural obligations and I may not always be able to keep a complaint completely private if it involves serious misconduct or risk. I would explain the formal grievance process available to them under the company\'s disciplinary and grievance policy. I would not approach the line manager directly without the employee\'s knowledge. I would consult with my HR manager about the appropriate next steps and document the interaction according to our internal protocols, being careful about who has access to those notes.',
    },
    {
      question: 'What is employment equity and what are an employer\'s obligations under the Employment Equity Act?',
      why: 'Employment equity is a legal requirement and a politically significant topic in South Africa. Every SA HR professional must understand it, even at entry level.',
      sampleAnswer: 'The Employment Equity Act requires designated employers — generally those with 50 or more employees — to actively promote equal opportunity in the workplace and eliminate unfair discrimination. Employers must submit an Employment Equity Plan to the Department of Employment and Labour with targets for achieving a representative workforce across race, gender, and disability across occupational levels. They must appoint a designated manager responsible for EE, conduct annual workforce analysis, consult with a representative forum, and submit an EE report. For HR coordinators, this translates practically into ensuring job advertisements reach a diverse candidate pool, tracking EE-related data in the HRIS, and supporting the preparation of the annual report.',
    },
    {
      question: 'Describe a situation where you had to manage multiple priorities at the same time. How did you handle it?',
      why: 'HR coordinators in SA juggle recruitment, onboarding, compliance deadlines, and employee queries simultaneously. SA interviewers use this to test practical organisation skills.',
      sampleAnswer: 'During my final year, I was simultaneously writing assignments, volunteering as an events coordinator for my faculty, and completing a part-time internship. When three deadlines clashed in one week, I sat down and created a priority matrix based on urgency and consequences of missing each one. I communicated proactively with my internship supervisor about which tasks I could complete that week and which would need to shift by a day. I blocked time each morning for the highest-stakes tasks before checking messages. All three were completed on time. In an HR role, I would apply the same principle: a legal compliance deadline always takes precedence over an administrative task, and communicating proactively is always better than going silent.',
    },
    {
      question: 'Why do you want to work in HR specifically?',
      why: 'SA HR managers are sceptical of candidates who see HR as an easy office job. They want people who understand the strategic and legally complex nature of the role.',
      sampleAnswer: 'I am drawn to HR because it sits at the intersection of business operations, law, and people development. I find the South African labour context particularly interesting — the Employment Equity Act, the CCMA system, and the complexity of managing employment relationships in a diverse workforce make the role genuinely challenging. I want to build towards a career where I can contribute to a fair and high-performing workplace, not just process paperwork. My long-term goal is to move into an HR business partner role where I can work directly with business leaders on workforce planning and talent strategy.',
    },
  ],

  relatedRoadmapId: '',
  relatedPrepIds: ['business-analyst', 'junior-accountant', 'digital-marketing-coordinator'],
};
