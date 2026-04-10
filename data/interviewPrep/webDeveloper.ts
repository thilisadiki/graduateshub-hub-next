import type { InterviewPrep } from '@/types';

export const webDeveloperPrep: InterviewPrep = {
  id: 'web-developer',
  role: 'Junior Web Developer',
  category: 'software-engineering',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and technical interview questions for junior web developer roles in South Africa. Curated by Jason Sadiki, a working web developer with 7+ years of professional experience building and shipping web products.',
  salaryRange: 'R160,000 – R300,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'A GitHub profile link with actual projects committed to it. This is non-negotiable for developer roles',
    'A live portfolio website, even a simple one. Hosting is free on Vercel or Netlify',
    'Languages and frameworks listed clearly with honest competency levels: "HTML/CSS (proficient), PHP/MySQL (intermediate), JavaScript (learning)"',
    'Project descriptions with the stack used and a link to the live URL or GitHub repo',
    'Any contributions to open source, even minor ones',
    'Back-end skills if you have them: PHP, Python, Node.js, databases (MySQL, PostgreSQL, MongoDB)',
  ],

  cvAvoid: [
    'Listing a language on your CV that you cannot write code in during an interview. Technical interviews will expose this immediately',
    'A GitHub profile with no commits, private-only repositories, or only tutorial code. Hiring managers look at commit history',
    'Claiming "full-stack" experience at entry level if you only know HTML and CSS',
    'A portfolio website with broken links, missing images, or placeholder text. It signals carelessness',
    'Long blocks of text describing projects. Use bullet points: what the project does, what stack you used, what your specific contribution was',
  ],

  cvTips: [
    {
      heading: 'Your GitHub is your CV',
      body: 'In South Africa and globally, a developer\'s GitHub profile carries more weight than their formal CV. A hiring manager will spend 30 seconds on your CV and five minutes on your GitHub. Ensure your pinned repositories are your best and most recent work, each with a clear README explaining what the project does and how to run it.',
    },
    {
      heading: 'Show a real, deployed project',
      body: 'Deploy at least one project live. Vercel, Netlify, and Render all have free tiers. A live URL on your CV transforms "I built a web app" into something a hiring manager can actually click and see. The project does not need to be complex: a personal portfolio, a recipe app, or a simple CRUD application is enough.',
    },
    {
      heading: 'Be specific about your stack',
      body: 'South African development shops tend to use PHP/MySQL for legacy systems and Node.js or Python for newer builds. Knowing which stack a company uses before you apply and tailoring your CV to mention that stack is a significant advantage. Check the job posting and their public-facing website source code if possible.',
    },
    {
      heading: 'Address the gap between study and production honestly',
      body: 'Hiring managers understand that entry-level candidates have not worked in production environments. What they are looking for is intellectual honesty and learning orientation. A summary line like "I have built projects in PHP/MySQL and am currently learning Docker and deployment basics" is far more credible than overclaiming.',
    },
  ],

  keySkills: [
    'HTML5 and CSS3 (responsive design, Flexbox, Grid)',
    'JavaScript (DOM manipulation, fetch API, ES6+)',
    'Back-end language: PHP, Python, or Node.js',
    'Relational databases: MySQL or PostgreSQL',
    'Version control: Git and GitHub',
    'Basic command line usage',
    'Understanding of HTTP and REST APIs',
  ],

  questions: [
    {
      question: 'What is the difference between GET and POST HTTP methods?',
      why: 'A foundational web development concept tested in virtually every SA junior developer interview.',
      sampleAnswer: 'GET is used to retrieve data from a server. The request parameters are included in the URL, which means the data is visible and the request can be bookmarked or cached. POST is used to send data to the server to create or update a resource. The data is in the request body, not the URL, which makes it more appropriate for sensitive data like passwords or form submissions. As a rule: GET for reading, POST for writing.',
      redFlag: 'Saying only "GET fetches data and POST submits forms" without understanding visibility, caching, or idempotency. Shows surface-level knowledge.',
    },
    {
      question: 'Explain what a database JOIN does and when you would use it.',
      why: 'SQL is expected knowledge for full-stack and back-end roles. This is one of the most common practical questions.',
      sampleAnswer: 'A JOIN combines rows from two or more tables based on a related column. I would use it when I need data that lives in more than one table. For example, if I have a users table and an orders table, and I want to list every order alongside the customer\'s name, I would JOIN on the user_id field. An INNER JOIN returns only rows with matching values in both tables. A LEFT JOIN returns all rows from the left table and matching rows from the right, with NULL for non-matches.',
    },
    {
      question: 'A page on your website is loading slowly. How would you investigate and fix it?',
      why: 'Performance troubleshooting is a real-world skill. SA clients often have users on slower mobile connections, making this especially relevant.',
      sampleAnswer: 'I would start with browser DevTools, specifically the Network and Performance tabs, to see which resources are taking longest to load. Common culprits are unoptimised images, too many HTTP requests, unminified CSS and JavaScript, or slow database queries. For images, I would compress them and consider lazy loading. For scripts, I would minify and defer non-critical JavaScript. For database performance, I would check whether slow queries are missing indexes. I would then retest using Lighthouse to verify the improvement.',
    },
    {
      question: 'What is the difference between a session and a cookie in PHP?',
      why: 'PHP is widely used in SA web development, particularly in agencies and legacy systems. Authentication handling is a common junior task.',
      sampleAnswer: 'A cookie is stored on the client side (the browser) and has a configurable expiry time. It is sent with every request to the server for the relevant domain. A session is stored on the server, and only a session ID is stored on the client in a cookie. Sessions are more secure because the actual data never leaves the server. I would use sessions for login authentication and cookies for less sensitive persistent data like user preferences.',
    },
    {
      question: 'Describe your development process when you start a new project.',
      why: 'SA employers want developers with structure and discipline, not just people who start coding immediately.',
      sampleAnswer: 'I start by clarifying the requirements and sketching a rough wireframe, even for a small project. Then I plan the data structure and set up a Git repository with a clear commit convention before writing any code. I build the back-end logic first, test the data flow, then work on the front-end. I commit regularly with descriptive messages. Before submitting or deploying, I review my own code once as if I am a reviewer seeing it for the first time. I find I catch at least two things every time.',
    },
  ],

  relatedRoadmapId: 'web-developer',
  relatedPrepIds: ['it-support-specialist', 'data-analyst', 'business-analyst'],
};
