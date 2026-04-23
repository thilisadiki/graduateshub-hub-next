import type { InterviewPrep } from '@/types';

export const juniorQATesterPrep: InterviewPrep = {
  id: 'junior-qa-tester',
  role: 'Junior QA / Software Tester',
  category: 'software-engineering',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and interview questions for junior QA analyst and software tester roles in South Africa. Covers manual and automated testing concepts, SDLC, bug reporting, and the tools SA development teams use most.',
  salaryRange: 'R180,000 – R320,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'Any testing experience: manual testing from internships, bug bounty contributions, personal projects, or academic coursework',
    'Specific tools: JIRA, Selenium, Postman, TestRail, Cypress, or any test management system',
    'Your understanding of the SDLC and where QA fits within it',
    'Types of testing you have performed or studied: functional, regression, integration, UAT, API testing',
    'Any ISTQB Foundation Level certification - it is the global standard and recognised by most SA development teams',
    'A GitHub profile or portfolio link if you have written any automated test scripts',
  ],

  cvAvoid: [
    'Claiming "testing experience" without naming the application, tool, type of testing, or number of test cases executed',
    'A CV that reads like a developer CV - QA is a distinct discipline. Lead with testing methodology and quality thinking, not coding',
    'Omitting manual testing skills. SA teams still heavily rely on manual testing and dismissing it signals naivety about the actual role',
    'Listing ISTQB on your CV without having completed it. Hiring managers ask specific ISTQB questions as a screening test',
    'Generic skills like "attention to detail" without a concrete example - every QA candidate claims this',
  ],

  cvTips: [
    {
      heading: 'Show a bug report sample in your portfolio',
      body: 'The most convincing thing a junior QA candidate in SA can produce is a real or sample bug report. Upload two or three examples to a GitHub repository or Notion page: title, environment, steps to reproduce, expected vs actual result, severity, and priority. This immediately demonstrates that you understand the primary work product of a QA analyst - the vast majority of entry-level candidates cannot produce this unprompted. Even if your bugs are from a personal app or an open-source project, the format and thinking are what matter.',
    },
    {
      heading: 'Differentiate manual and automation testing clearly',
      body: 'SA development teams want to understand your experience with both manual and automated testing. If you are entry-level and have mostly manual experience, be explicit about it and show a clear progression plan: "Currently building Selenium WebDriver skills to progress toward automation testing." This is more credible than implying automation experience you do not have. Many SA QA roles at entry level are primarily manual with exposure to automation - honesty about where you are is stronger than overselling.',
    },
    {
      heading: 'Frame your academic work in QA terms',
      body: 'If you built software projects during your studies, you can frame them as QA experience by describing the testing activities you performed, not just the code you wrote. "Designed and executed 40 manual test cases for a final-year student registration web app, identifying 12 defects before submission" is a meaningful QA CV line. It shows scope, test design thinking, and defect identification - all of which are directly applicable to a junior QA role.',
    },
    {
      heading: 'Pursue ISTQB Foundation Level before applying',
      body: 'The ISTQB Foundation Level certification is the single most recognised QA credential in South Africa. It costs approximately R3,000 to R5,000 to write and study materials are widely available online. Almost every SA technology company that hires QA professionals will ask whether you have it or plan to pursue it. Completing it before your job search gives you a significant advantage and demonstrates commitment to the QA profession rather than treating it as a stepping stone to development.',
    },
  ],

  keySkills: [
    'Manual test case design and execution',
    'Bug reporting and defect lifecycle management',
    'SDLC and STLC (Software Testing Life Cycle) understanding',
    'Functional, regression, and integration testing',
    'API testing: Postman or similar tools',
    'JIRA or similar test management and issue tracking',
    'Selenium WebDriver or Cypress basics (automation, increasingly expected)',
    'Agile Scrum QA practices: testing within sprints, definition of done',
  ],

  questions: [
    {
      question: 'What is the difference between verification and validation in software testing?',
      why: 'This is a classic ISTQB Foundation question and is asked in almost every SA junior QA interview. It tests whether you understand the QA discipline\'s foundational concepts.',
      sampleAnswer: 'Verification asks "are we building the product right?" It checks that the product conforms to its specified requirements at each stage of development - reviewing design documents, code reviews, walkthroughs, and inspections without running the software. Validation asks "are we building the right product?" It confirms that the final product meets the actual needs of the end user - typically through testing the working software against user requirements and acceptance criteria. In practice: verification catches specification and design errors early (cheaper to fix), while validation confirms the final product delivers business value. Both are part of a complete QA strategy.',
    },
    {
      question: 'Walk me through how you would design test cases for a login form.',
      why: 'Test case design is the core skill of a manual QA tester. This question is used in almost every SA QA interview at entry level to assess structured test thinking.',
      sampleAnswer: 'I would start by identifying the equivalence partitions: valid credentials, invalid username, invalid password, empty username, empty password, and both fields empty. For each I would write a test case with steps to reproduce, expected result, and actual result. Beyond functional cases, I would consider boundary conditions - what happens if the username is 1 character, exactly the maximum length, or one over the maximum? I would also test non-functional behaviour: does the password field mask input? Is there a lockout after multiple failed attempts? Is there an accessible error message that does not reveal whether the username or password was incorrect (a security consideration)? Finally I would test the "remember me" checkbox if present. A complete test suite for a login form could easily be 20 to 30 cases covering positive, negative, boundary, and security scenarios.',
    },
    {
      question: 'What is the difference between severity and priority in a bug report?',
      why: 'This distinction is tested in almost every SA QA interview and is a key concept in ISTQB Foundation. Confusing them suggests superficial knowledge.',
      sampleAnswer: 'Severity describes the impact of a defect on the system\'s functionality - how badly it breaks the software. A high-severity defect crashes the application or causes data loss. A low-severity defect might be a minor cosmetic issue like a misaligned button. Priority describes how urgently the defect needs to be fixed, based on business needs. These two dimensions are independent. A typo on the homepage of a major SA bank may be low severity (the app still works) but high priority (it is publicly visible and affects brand reputation and legal standing). Conversely, a critical crash in a rarely-used admin feature may be high severity but lower priority than a checkout bug affecting every user. QA analysts must assign both fields independently in a bug report.',
      redFlag: 'Using the terms interchangeably or defining one as a subset of the other.',
    },
    {
      question: 'Explain the difference between black-box and white-box testing.',
      why: 'A foundational QA concept that SA junior tester interviews use to test whether candidates understand testing philosophy, not just how to execute tests.',
      sampleAnswer: 'Black-box testing treats the system under test as an opaque box - the tester has no knowledge of the internal code or architecture. Tests are designed based on the requirements and expected behaviour only. This is the type of testing that most manual QA testers perform and most closely mirrors how an end user interacts with the product. White-box testing (also called glass-box or structural testing) requires knowledge of the internal code structure. Tests are designed to achieve code coverage - testing specific code paths, conditions, and branches. This is typically performed by developers or by QA engineers with programming skills. Most SA QA teams use a combination: manual QA testers perform black-box functional testing, while automation engineers and developers write white-box unit and integration tests.',
    },
    {
      question: 'How does QA fit into an Agile Scrum team and what does a tester do during a sprint?',
      why: 'Most SA software development teams operate in Agile. QA candidates must understand how their role fits into sprint-based delivery rather than traditional end-of-project testing phases.',
      sampleAnswer: 'In a Scrum team, QA is not a phase that happens at the end - it runs throughout the sprint. During sprint planning, the QA analyst reviews user stories with the team and contributes to acceptance criteria, making sure stories are testable before development starts. During the sprint, QA tests stories as soon as they are marked ready for testing - not waiting until the end. This prevents a backlog of defects accumulating in the last two days of the sprint. QA also attends daily standups to flag blockers, participates in sprint reviews to demonstrate tested functionality, and contributes to sprint retrospectives with quality insights. In modern Agile teams, QA also writes automated test scripts that run as part of the CI/CD pipeline to catch regressions on every build.',
    },
    {
      question: 'Tell me about a bug you found that you are proud of discovering.',
      why: 'SA QA managers use this question to assess investigative instincts and genuine curiosity. Entry-level candidates who have never actively sought out bugs give themselves away immediately.',
      sampleAnswer: 'During my final year project, I was testing a student portal application my group had built. During exploratory testing, I noticed that if I created a new account, navigated back using the browser\'s back button, and submitted the form again with slightly different data, the system would create a duplicate account with no error message. The registration page was not invalidating the session properly after a successful submission. I wrote a full bug report with steps to reproduce, identified the root cause in the session handling code, and we fixed it before submission. The reason I am proud of it is that it was not in my pre-written test cases - it came from treating the system the way a curious or confused user would, which is what good exploratory testing requires.',
    },
  ],

  relatedRoadmapId: 'web-developer',
  relatedPrepIds: ['web-developer', 'data-analyst', 'it-support-specialist'],
};
