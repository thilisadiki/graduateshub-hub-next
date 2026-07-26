import type { CareerRoadmap } from '@/types';

export const softwareEngineerRoadmap: CareerRoadmap = {
  id: 'software-engineer',
  title: 'How to Become a Software Engineer',
  tagline: 'Design resilient systems, master object-oriented programming, and write clean backend software. No computer science degree required.',
  category: 'software-engineering',
  curator: 'jason',
  timeToJobReady: '9–15 months',
  demandLevel: 'Very High',
  entryLevel: true,
  description:
    'A comprehensive step-by-step roadmap for becoming a Software Engineer. Covers programming fundamentals (Python/Java/C#), Object-Oriented Programming (OOP), SQL databases, REST API design, secure software architecture, and Git version control.',
  overview:
    'Software Engineers build the complex logic, algorithms, databases, and microservices that power enterprise applications. While web developers often focus on user interfaces and client-side experiences, software engineers focus on system architecture, data modeling, algorithm efficiency, code maintainability, and building resilient backend services.\n\nSoftware engineering is one of the highest-paying, most versatile careers in the technology sector. Modern employers prioritize candidates who understand core computer science principles, write clean object-oriented code, and possess practical Git portfolio projects over formal university diplomas. Following this roadmap will take you from zero programming experience to landing your first role as a Junior Software Engineer, Backend Developer, or Systems Developer.',
  jobTitles: [
    'Junior Software Engineer',
    'Junior Backend Developer',
    'Associate Software Developer',
    'Application Engineer',
    'Systems Developer',
    'Junior Python/C#/Java Developer',
  ],
  technicalSkills: [
    'Programming Languages (Python, C#, Java, or TypeScript)',
    'Object-Oriented Programming (OOP) & Design Patterns',
    'Relational Databases & SQL (PostgreSQL, SQL Server, MySQL)',
    'RESTful API Architecture & Web Services',
    'Software Testing & Quality Assurance (Unit Testing, TDD)',
    'Git Version Control & CI/CD Pipelines',
  ],
  softSkills: [
    'Systematic debugging & problem decomposition',
    'Code readability & documentation',
    'Collaborative code review & Git workflows',
    'Algorithm complexity reasoning',
  ],
  stages: [
    {
      number: 1,
      title: 'Programming Foundations & Logic',
      duration: '6–8 weeks',
      description:
        'Stage 1 focuses on core programming building blocks: variables, data types, control flow (if/else loops), functions, and basic algorithmic problem solving using Python or C#.',
      courseIds: ['diploma-python-programming'],
      milestone:
        'You can write clean scripts, parse data structures (lists, dictionaries), and solve algorithmic logic problems in a code editor.',
    },
    {
      number: 2,
      title: 'Object-Oriented Programming (OOP) & Data Structures',
      duration: '8–10 weeks',
      description:
        'Enterprise code relies on Object-Oriented Programming. In Stage 2, you will master Encapsulation, Inheritance, Polymorphism, Abstraction, and fundamental data structures (arrays, stacks, queues, hash maps).',
      courseIds: ['diploma-python-programming', 'secure-software-concepts-and-requirements'],
      milestone:
        'You can design modular, object-oriented class hierarchies and apply basic software design patterns.',
    },
    {
      number: 3,
      title: 'Relational Databases & Advanced SQL',
      duration: '6–8 weeks',
      description:
        'Data persistence is mandatory for software applications. Stage 3 covers relational database design, normalisation (1NF to 3NF), writing complex SQL queries (JOINs, aggregations, subqueries), and database administration.',
      courseIds: ['diploma-databases-t-sql', 'databases-dml-sql-server'],
      milestone:
        'You can design a normalized relational database schema and execute multi-table SQL queries to extract corporate data.',
    },
    {
      number: 4,
      title: 'RESTful API Architecture & Secure Software Design',
      duration: '8–10 weeks',
      description:
        'Stage 4 covers building backend web APIs that serve data to frontends and mobile apps. You will learn REST principles, HTTP status codes, JSON payload processing, and secure software design (OWASP security standards).',
      courseIds: ['secure-software-design-and-implementation', 'how-to-become-a-software-architect'],
      milestone:
        'You can build a secure RESTful web API with user authentication, input validation, and database CRUD operations.',
    },
    {
      number: 5,
      title: 'Automated Testing, CI/CD & Portfolio',
      duration: '6–8 weeks',
      description:
        'Professional developers write tests for their code. Stage 5 covers automated unit testing, static code analysis (SAST), Git version control workflows, and publishing an open-source GitHub project.',
      courseIds: ['secure-software-testing-and-acceptance'],
      milestone:
        'You have published an open-source GitHub repository for a complete backend API project with unit tests and a live deployment.',
    },
  ],
  certifications: [
    {
      name: 'Alison Diploma in Python Programming',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma covering Python programming syntax, object-oriented concepts, and data processing.',
    },
    {
      name: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
      provider: 'Microsoft',
      free: false,
      why: 'Highly respected enterprise developer certification covering cloud apps, APIs, and microservices.',
    },
    {
      name: 'AWS Certified Developer - Associate',
      provider: 'AWS',
      free: false,
      why: 'Proves technical ability to write, deploy, and debug cloud-native software applications on AWS.',
    },
  ],
  portfolioProjects: [
    'RESTful Task Management API: build a Node.js/Python backend API with JWT authentication, PostgreSQL database, and Swagger API docs',
    'E-Commerce Backend Microservice: design a secure payment processing API with input validation, unit tests, and error logging',
    'Open-Source CLI Tool: write a command-line interface tool in Python or Go that parses local data files and outputs analytical reports',
    'Database Schema Migration Project: design an enterprise database schema for a healthcare or inventory system with 10 complex SQL queries',
  ],
  relatedRoadmapIds: ['web-developer', 'cybersecurity-analyst', 'cloud-support-devops'],
  salaryBenchmarks: [
    { region: 'United States', range: '$75,000 – $110,000/year' },
    { region: 'United Kingdom', range: '£38,000 – £62,000/year' },
    { region: 'Canada', range: 'CA$68,000 – CA$98,000/year' },
    { region: 'Australia', range: 'A$80,000 – A$120,000/year' },
    { region: 'South Africa', range: 'R250,000 – R520,000/year' },
  ],
  remoteFriendly: 'Fully',
  difficulty: 'Intermediate',
  faqs: [
    {
      q: 'What is the difference between a Web Developer and a Software Engineer?',
      a: 'Web Developers focus heavily on internet applications, web browser interfaces (HTML/CSS/React), and website backends. Software Engineers focus on broader system architecture, algorithm efficiency, Object-Oriented design, desktop/mobile/cloud software, and enterprise data pipelines.',
    },
    {
      q: 'Which programming language should I learn first as a Software Engineer?',
      a: 'Python or C# are the two best starting languages. Python features clean syntax that lets you focus on learning computer science logic without getting bogged down in complex boilerplate. C# and Java are dominant in corporate enterprise environments.',
    },
    {
      q: 'Do I need advanced math to be a Software Engineer?',
      a: 'No. Except for specialized fields like machine learning or 3D graphics, 95% of daily commercial software engineering requires logical problem solving, basic algebra, and boolean logic rather than advanced calculus.',
    },
    {
      q: 'What actually gets you hired as a Junior Software Engineer?',
      a: 'A clean GitHub profile containing 2 to 3 well-documented, tested backend or full-stack software projects. Employers want to inspect your source code, Git commit history, unit tests, and README documentation.',
    },
  ],
  firstNinetyDays: [
    'Spend your first 30 days understanding the company codebase architecture, coding standards, database schemas, and setting up your local dev environment',
    'Take on minor bug fixes and small feature requests to learn the codebase and submit your first Pull Requests (PRs)',
    'By month two, participate in daily standups, write unit tests for existing functions, and contribute to internal API documentation',
    'By month three, take ownership of implementing a complete backend API endpoint from database schema to automated deployment',
  ],
  commonMistakes: [
    {
      mistake: 'Jumping between 5 different programming languages without mastering one',
      fix: 'Pick one language (e.g. Python or C#) and build 3 solid projects before trying to learn another language.',
    },
    {
      mistake: 'Neglecting automated testing and Git commit hygiene',
      fix: 'Write unit tests for your code functions. Senior engineers inspect test coverage when reviewing junior portfolio code.',
    },
    {
      mistake: 'Focusing exclusively on tutorial copying without building original software',
      fix: 'Modify tutorial projects or build unique software ideas from scratch so you can discuss engineering decisions during interviews.',
    },
  ],
};
