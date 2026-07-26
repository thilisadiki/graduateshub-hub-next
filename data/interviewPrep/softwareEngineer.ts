import type { InterviewPrep } from '@/types';

export const softwareEngineerPrep: InterviewPrep = {
  id: 'software-engineer',
  role: 'Software Engineer',
  category: 'software-engineering',
  curator: 'jason',
  description:
    'CV rules, GitHub code review tips, and technical interview questions for junior Software Engineers. Covers OOP design patterns, data structures, RESTful API design, relational databases, unit testing, and Git workflows.',
  salaryBenchmarks: [
    { region: 'United States', range: '$75,000 – $110,000/year' },
    { region: 'United Kingdom', range: '£38,000 – £62,000/year' },
    { region: 'Canada', range: 'CA$68,000 – CA$98,000/year' },
    { region: 'Australia', range: 'A$80,000 – A$120,000/year' },
    { region: 'South Africa', range: 'R250,000 – R520,000/year' },
  ],
  cvMustInclude: [
    'GitHub profile URL with public repositories showing clean code, Git commit history, and README docs',
    'Core Programming Languages: Python, C#, Java, TypeScript, or Go',
    'Object-Oriented Programming (OOP): Inheritance, Encapsulation, Polymorphism, SOLID principles',
    'Databases & SQL: PostgreSQL, SQL Server, MySQL, ORMs (Prisma, Entity Framework, SQLAlchemy)',
    'Software Engineering practices: REST API design, Automated Unit Testing, CI/CD, Git version control',
  ],
  cvAvoid: [
    'Listing 10 programming languages on your CV without deep mastery of at least one',
    'Submitting a GitHub profile with empty repositories or single-commit code dumps',
    'Ignoring automated testing and software documentation',
  ],
  cvTips: [
    {
      heading: 'Make your GitHub profile review-ready',
      body: 'Engineering managers inspect GitHub profiles. Ensure your top 2 repositories feature clean folder structures, clear Git commit messages, automated unit tests, and a professional README with architectural diagrams.',
    },
    {
      heading: 'Demonstrate backend API development',
      body: 'Highlighting an API project built with JWT authentication, relational database ORM integrations, and input validation immediately proves commercial software readiness.',
    },
  ],
  keySkills: [
    'Programming (Python, C#, Java, or TypeScript)',
    'Object-Oriented Programming (OOP) & SOLID Principles',
    'Relational Databases & SQL (PostgreSQL, SQL Server)',
    'RESTful Web API Architecture & OpenAPI / Swagger Specs',
    'Automated Unit Testing & Git Version Control',
  ],
  questions: [
    {
      question: 'Explain the four core principles of Object-Oriented Programming (OOP).',
      why: 'Evaluates core computer science fundamentals and code structure principles.',
      sampleAnswer: 'The four pillars of OOP are: 1) Encapsulation: bundling data and methods into a class while hiding internal state via access modifiers. 2) Abstraction: exposing simple high-level interfaces while hiding execution complexity. 3) Inheritance: allowing child classes to inherit attributes and methods from a parent class. 4) Polymorphism: enabling objects of different classes to respond to the same interface method in unique ways.',
      redFlag: 'Reciting definitions without explaining practical application or access modifiers.',
    },
    {
      question: 'What is the difference between a GET and POST request in REST API design?',
      why: 'Tests HTTP protocol fundamentals and Web API design conventions.',
      sampleAnswer: 'GET requests are idempotent and safe; they retrieve data without modifying server state, passing parameters in the URL query string. POST requests are non-idempotent; they submit data in the request body to create or process server resources.',
    },
    {
      question: 'Walk me through how you debug an unhandled NullPointer / ReferenceError exception in production.',
      why: 'Tests practical debugging workflow and software quality assurance habits.',
      sampleAnswer: 'First, I inspect the server log stack trace to identify the exact line and function where the null dereference occurred. Second, I examine input parameters to see which property was null. Third, I reproduce the bug locally by writing a failing unit test that passes null data. Finally, I add non-null validation guards and confirm that my unit test passes before deploying.',
    },
  ],
  relatedRoadmapId: 'software-engineer',
  relatedPrepIds: ['web-developer', 'cloud-support-devops', 'junior-qa-tester'],
};
