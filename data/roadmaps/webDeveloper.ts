import type { CareerRoadmap } from '@/types';

export const webDeveloperRoadmap: CareerRoadmap = {
  id: 'web-developer',
  title: 'How to Become a Web Developer',
  tagline: 'Build real products for the web. One of the highest-demand skills globally.',
  category: 'software-engineering',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '9–18 months',
  demandLevel: 'Very High',
  entryLevel: true,
  description:
    'A structured roadmap for becoming a job-ready web developer. Covers HTML/CSS, JavaScript, backend development, databases, and DevOps fundamentals — curated by Jason Sadiki, a working web developer with 7+ years of professional experience.',
  overview:
    'Web development is consistently one of the most in-demand skills in the global job market. Every business needs a digital presence, and the people who build and maintain that presence are web developers. The field is broad — front-end (what users see), back-end (server logic and databases), and full-stack (both) — but the foundation is the same for all three paths.\n\nThis roadmap was curated by Jason Sadiki, a Technical SEO Specialist and Web Developer who has built web products professionally for over seven years. The course selection is opinionated: it cuts through the noise and focuses on the specific languages, frameworks, and tools that appear most consistently in South African and international junior developer job postings. The roadmap is challenging but entirely achievable through self-study.',
  jobTitles: [
    'Junior Web Developer',
    'Junior Front-End Developer',
    'Junior Full-Stack Developer',
    'Junior Back-End Developer',
    'Web Application Developer',
    'Junior Software Engineer',
  ],
  technicalSkills: [
    'HTML5 & CSS3 (layouts, responsive design)',
    'JavaScript (ES6+, DOM manipulation)',
    'Back-end development (PHP/MySQL or Python/Flask)',
    'Relational databases & SQL',
    'Version control (Git)',
    'DevOps basics (Docker, deployment)',
  ],
  softSkills: [
    'Systematic debugging and problem decomposition',
    'Self-directed learning from documentation',
    'Collaborative code review',
    'Estimating and meeting deadlines',
  ],
  stages: [
    {
      number: 1,
      title: 'Build the Front-End Foundation — HTML & CSS',
      duration: '4–6 weeks',
      description:
        'Every web page you have ever visited is built on HTML and CSS. HTML defines the structure and content; CSS defines the appearance and layout. These are not optional stepping stones — they are the permanent foundation of everything you will build as a web developer. This stage takes you from your first page to responsive, production-quality layouts using modern CSS techniques.',
      courseIds: ['html-css-web-dev', 'diploma-html5-css3-javascript'],
      milestone:
        'You can build a fully responsive multi-page website from scratch using HTML5 and CSS3, with no frameworks or templates.',
    },
    {
      number: 2,
      title: 'Learn a Back-End Language',
      duration: '10–12 weeks',
      description:
        'Front-end skills make you a designer. Back-end skills make you a developer. In this stage you will learn server-side programming using either PHP with MySQL (the most widely deployed stack in the world) or Python with Flask (increasingly preferred in modern development). You will learn how to handle user input, query databases, manage sessions, and serve dynamic content — the core mechanics of every web application.',
      courseIds: ['diploma-php-mysql-dev', 'diploma-scalable-python-flask', 'python-flask-docker'],
      milestone:
        'You have built a functioning web application with user authentication, a connected database, and at least three dynamic pages.',
    },
    {
      number: 3,
      title: 'Add JavaScript for Interactive Front-Ends',
      duration: '8–10 weeks',
      description:
        'JavaScript is the programming language of the browser. It is what makes web pages interactive — form validation, dynamic content updates, animations, and the entire ecosystem of modern front-end frameworks (React, Vue, Angular) are all built on JavaScript. This stage focuses on core JavaScript and its application in e-commerce and web development contexts.',
      courseIds: ['diploma-ecommerce-web-dev'],
      milestone:
        'You can add interactive behaviour to a web page using vanilla JavaScript, and understand how JS communicates with back-end APIs.',
    },
    {
      number: 4,
      title: 'Learn DevOps Fundamentals',
      duration: '4–6 weeks',
      description:
        'Modern web development does not stop at writing code. Junior developers are increasingly expected to understand how their applications are deployed and kept running. This stage covers DevOps fundamentals — what containerisation is, how Docker works, CI/CD pipelines, and the basics of getting a web application from your local machine into a production environment.',
      courseIds: ['devops-fundamentals', 'intro-devops'],
      milestone:
        'You can containerise a web application using Docker and describe the basic steps required to deploy it to a cloud server.',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      provider: 'Amazon Web Services',
      free: false,
      why: 'The most accessible cloud certification. Cloud deployment knowledge is increasingly expected of junior developers. Exam costs roughly R4,500.',
    },
    {
      name: 'freeCodeCamp Full Stack Certification',
      provider: 'freeCodeCamp',
      free: true,
      why: 'Free, project-based certification with high employer recognition in the developer community. Requires building real projects to earn each certification.',
    },
    {
      name: 'Alison Diploma in Web Development',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Useful as a visible credential on your CV alongside a strong GitHub portfolio.',
    },
  ],
  portfolioProjects: [
    'Personal portfolio website: a responsive, multi-page site built entirely in HTML, CSS, and JavaScript — no templates',
    'Full-stack web application: a CRUD application (e.g. a task manager or blog) with user authentication, a MySQL or SQLite database, and a PHP or Python back-end',
    'E-commerce product page: a responsive product listing and detail page with a JavaScript shopping cart',
    'Dockerised app: take any of your existing projects and containerise it with Docker, with a README explaining the setup',
    'REST API: build a simple JSON API in Flask or PHP that supports GET, POST, PUT, and DELETE for a resource of your choice',
  ],
  relatedRoadmapIds: ['it-support-specialist', 'data-analyst', 'business-analyst'],
};
