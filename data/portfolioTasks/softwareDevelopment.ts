import type { PortfolioTask } from '@/types';

export const softwareDevelopmentTasks: PortfolioTask[] = [

  {
    id: 'bug-fix-todo-app',
    categoryId: 'software-development',
    topicId: 'debug-fix',
    level: 'beginner',
    title: 'Fix a Bug in a Sample To-Do App',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Diagnose and fix a state management bug in a React to-do app.',
    scenario:
      'A small React to-do app has a bug: when a user deletes a task, the wrong task is sometimes removed. The root cause is that list items use array index as a React key instead of a stable ID. A real junior developer fix would not just swap the key, it would also reason about why this bug appeared.',
    brief:
      'You do not need a real repo to complete this task. Work from the following snippet and write a fixed version plus an explanation.',
    deliverables: [
      'A corrected code snippet (paste as a Markdown code block)',
      'A 3 to 5 sentence explanation of the root cause, written so a non-technical stakeholder could follow',
      'One additional safeguard (a test, a lint rule, or a code review checklist item) that would prevent a similar bug in future',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Buggy code:\n```jsx\n{tasks.map((task, index) => (\n  <li key={index} onClick={() => deleteTask(index)}>{task.title}</li>\n))}\n```\nAssume `deleteTask(id)` exists and takes a task id.',
    rubric: [
      { key: 'correctness', label: 'Correctness', description: 'Does the fix actually resolve the bug, not just move it?', weight: 35 },
      { key: 'explanation', label: 'Root Cause Explanation', description: 'Is the explanation accurate and accessible to a non-technical reader?', weight: 30 },
      { key: 'safeguard', label: 'Prevention', description: 'Is the proposed safeguard practical and likely to catch the class of bug?', weight: 20 },
      { key: 'craft', label: 'Code Craft', description: 'Is the corrected code clean, idiomatic, and not over-engineered?', weight: 15 },
    ],
    skillsProven: ['React debugging', 'JavaScript fundamentals', 'Technical communication', 'Code quality'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'rest-api-spec-library',
    categoryId: 'software-development',
    topicId: 'api-design',
    level: 'intermediate',
    title: 'Design a REST API for a Local Library',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write a concise API spec for a library borrowing system.',
    scenario:
      'A public library wants a small internal system so staff can look up members, check out books, and see who currently holds which book. There are about 3,000 members and 12,000 books. The backend will be built by a single junior developer.',
    brief:
      'Produce a clear, minimal REST API spec. You do not need to write any implementation code. The goal is to demonstrate that you can scope an API, choose the right resources, and think about edge cases.',
    deliverables: [
      'A list of resources and the endpoints for each (method, path, one-line purpose)',
      'Request and response examples (JSON) for at least 3 key endpoints',
      'Two edge cases you deliberately designed around (for example, what happens if someone tries to check out a book that is already out)',
      'One thing you intentionally left out of v1 and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Over-specification is a failure mode here. Aim for crisp and minimal, not exhaustive.',
    rubric: [
      { key: 'modeling', label: 'Resource Modeling', description: 'Are the resources and endpoints well-chosen and minimal?', weight: 30 },
      { key: 'examples', label: 'Payload Examples', description: 'Are the JSON examples realistic and complete?', weight: 20 },
      { key: 'edge-cases', label: 'Edge Case Thinking', description: 'Are the edge cases meaningful and handled thoughtfully?', weight: 25 },
      { key: 'scoping', label: 'Scoping Judgment', description: 'Does the "left out of v1" item show good product judgment?', weight: 25 },
    ],
    skillsProven: ['API design', 'System thinking', 'Technical writing', 'Product scoping'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'debug-memory-leak',
    categoryId: 'software-development',
    topicId: 'debug-fix',
    level: 'intermediate',
    title: 'Memory Leak in an Event Listener',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Diagnose and fix a React memory leak caused by un-garbage-collected DOM nodes.',
    scenario:
      'A single-page application is slowing down heavily after users navigate back and forth between a specific dashboard view. The browser profiler shows a massive spike in detached DOM nodes and event listeners that are never garbage collected.',
    brief:
      'You are provided with a React component snippet containing a custom window event listener inside a `useEffect`. The cleanup function is missing. Write the corrected component, explain exactly why the memory leak occurred, and describe how to verify the fix using Chrome DevTools.',
    deliverables: [
      'The corrected React component snippet with proper cleanup',
      'A technical explanation of why detached event listeners cause memory leaks in SPAs',
      'A step-by-step guide on how to verify the leak is fixed using the Memory tab in Chrome DevTools',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on the `useEffect` lifecycle. A perfect fix ensures the listener is removed when the component unmounts.',
    rubric: [
      { key: 'correctness', label: 'Correct Fix', description: 'Is the `useEffect` cleanup function implemented correctly?', weight: 35 },
      { key: 'explanation', label: 'Root Cause Explanation', description: 'Is the explanation of the memory leak technically accurate?', weight: 35 },
      { key: 'devtools', label: 'DevTools Knowledge', description: 'Are the instructions for using the Chrome Profiler accurate and clear?', weight: 30 },
    ],
    skillsProven: ['React lifecycle', 'Memory management', 'Chrome DevTools', 'Performance debugging'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'debug-race-condition',
    categoryId: 'software-development',
    topicId: 'debug-fix',
    level: 'advanced',
    title: 'Race Condition in Async Data Fetching',
    difficulty: 'Advanced',
    estimatedHours: '3 to 4 hours',
    tagline: 'Fix a tricky race condition where stale network responses overwrite fresh data.',
    scenario:
      'A search input fetches autocomplete results as the user types. However, sometimes the results of an older, slower query overwrite the results of a newer, faster query, resulting in the UI showing the wrong suggestions.',
    brief:
      'Diagnose the async race condition in the provided autocomplete component. Fix it by implementing request cancellation using the `AbortController` API. Explain why boolean flags (like `isMounted`) are inferior to true request cancellation.',
    deliverables: [
      'The corrected component utilizing `AbortController`',
      'An explanation of the race condition mechanism (how slower requests overtake faster ones)',
      'A brief defense of `AbortController` versus simple boolean flag checks',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This tests your understanding of asynchronous JavaScript behavior. Simply debouncing the input is not a complete fix; the race condition must be fundamentally solved.',
    rubric: [
      { key: 'correctness', label: 'Implementation', description: 'Is `AbortController` implemented and wired to the `fetch` call correctly?', weight: 40 },
      { key: 'explanation', label: 'Root Cause', description: 'Is the sequence of async events causing the bug clearly explained?', weight: 30 },
      { key: 'architecture', label: 'Cancellation vs Boolean', description: 'Does the candidate understand the network benefits of actual request abortion?', weight: 30 },
    ],
    skillsProven: ['Asynchronous JavaScript', 'AbortController API', 'Race condition debugging', 'Network performance'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'api-design-blog',
    categoryId: 'software-development',
    topicId: 'api-design',
    level: 'beginner',
    title: 'Design a Simple REST API for a Blog',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Define basic CRUD endpoints for a standard blog application.',
    scenario:
      'A client wants a basic headless CMS for their new tech blog. The system needs to support managing `Posts` and user `Comments` on those posts.',
    brief:
      'Write a minimal REST API specification for managing Posts and Comments. Focus heavily on using the correct HTTP verbs (GET, POST, PUT, DELETE) and standard URL routing conventions.',
    deliverables: [
      'A list of the necessary endpoints including the HTTP method and route path (e.g., `GET /posts`)',
      'A brief description of what each endpoint does',
      'A JSON payload example of what a successful `POST /posts` request body would look like',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'We are looking for standard REST conventions. Pay attention to how you nest routes (e.g., how do you fetch comments for a specific post?).',
    rubric: [
      { key: 'routing', label: 'REST Routing', description: 'Are the route paths semantic and correctly pluralized?', weight: 35 },
      { key: 'verbs', label: 'HTTP Verbs', description: 'Are the correct HTTP verbs used for CRUD operations?', weight: 35 },
      { key: 'payload', label: 'JSON Payload', description: 'Is the POST payload example realistic and properly formatted?', weight: 30 },
    ],
    skillsProven: ['REST conventions', 'HTTP verbs', 'API routing'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'api-design-pagination',
    categoryId: 'software-development',
    topicId: 'api-design',
    level: 'advanced',
    title: 'Design a Scalable Pagination API',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Solve a performance bottleneck by migrating from OFFSET to Cursor pagination.',
    scenario:
      'An internal API endpoint (`GET /transactions`) returns millions of financial records. The current implementation uses standard OFFSET/LIMIT pagination, but queries for page 50,000 are timing out because the database has to scan and discard hundreds of thousands of rows.',
    brief:
      'Design a cursor-based pagination strategy for the `/transactions` endpoint. Explain the API request/response schema changes required, how the client will interact with the cursor, and the database index implications.',
    deliverables: [
      'The updated API response schema showing the cursor meta-data (next_cursor, has_more, etc.)',
      'The SQL query structure (or ORM equivalent) demonstrating how the cursor is used in the `WHERE` clause',
      'An explanation of the performance benefits over OFFSET/LIMIT',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on the architectural shift. How do you handle sorting when using cursors? What happens if the cursor column (like timestamp) is not unique?',
    rubric: [
      { key: 'schema', label: 'API Schema', description: 'Is the cursor token clearly defined in the API response?', weight: 35 },
      { key: 'database', label: 'Database Logic', description: 'Is the SQL logic utilizing the cursor correctly to avoid full table scans?', weight: 35 },
      { key: 'tradeoffs', label: 'Trade-off Analysis', description: 'Does the candidate understand the complexities of cursor pagination (e.g., sorting non-unique fields)?', weight: 30 },
    ],
    skillsProven: ['API Performance', 'Cursor-based Pagination', 'Database Indexing', 'System Design'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'arch-url-shortener',
    categoryId: 'software-development',
    topicId: 'system-architecture-design',
    level: 'beginner',
    title: 'Architect a Simple URL Shortener',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a system that converts long URLs into short, shareable links.',
    scenario:
      'A marketing team needs a branded URL shortener. They expect about 10,000 new links to be created per day, but those links might be clicked millions of times.',
    brief:
      'Design the architecture for a URL shortener (like bit.ly). Focus on the database schema, the hashing algorithm used to generate the short code, and the read vs. write scaling strategy.',
    deliverables: [
      'A system architecture diagram (e.g., using Mermaid.js or a simple drawn diagram)',
      'The database schema definition for the `Link` table',
      'A brief explanation of why this system is read-heavy and how you would cache the redirects',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need to write the application code. Focus on the data flow: what happens when a user creates a link, and what happens when someone clicks it?',
    rubric: [
      { key: 'hashing', label: 'Hashing Logic', description: 'Is the short-code generation logic mathematically sound (e.g., base62)?', weight: 35 },
      { key: 'schema', label: 'Database Schema', description: 'Are the database tables properly indexed for fast lookups?', weight: 35 },
      { key: 'caching', label: 'Caching Strategy', description: 'Does the candidate correctly identify the need for a read cache (e.g., Redis)?', weight: 30 },
    ],
    skillsProven: ['System Design', 'Hashing Algorithms', 'Database Indexing', 'Caching Strategy'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'arch-chat-app',
    categoryId: 'software-development',
    topicId: 'system-architecture-design',
    level: 'intermediate',
    title: 'Architect a Scalable Chat Application',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a real-time messaging system using WebSockets and Pub/Sub.',
    scenario:
      'You are tasked with designing the backend for a new team collaboration tool (similar to Slack). Users need to send messages in real-time, see who is online, and view chat history.',
    brief:
      'Design the architecture for a real-time chat application. You must explain how WebSockets are managed across multiple load-balanced servers so that User A on Server 1 can message User B on Server 2.',
    deliverables: [
      'A system architecture diagram highlighting the API servers, WebSocket servers, and the Pub/Sub broker',
      'An explanation of how messages are routed between different WebSocket server instances',
      'The database schema for storing users, channels, and messages',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The core challenge here is horizontal scaling. A single WebSocket server cannot hold all connections. Show how you use a message broker (like Redis Pub/Sub or Kafka) to distribute messages.',
    rubric: [
      { key: 'websockets', label: 'Connection Management', description: 'Is the role of WebSocket servers clearly defined?', weight: 35 },
      { key: 'pubsub', label: 'Pub/Sub Routing', description: 'Does the architecture correctly route messages across server boundaries?', weight: 35 },
      { key: 'storage', label: 'Message Storage', description: 'Is the database schema optimized for retrieving chat history quickly?', weight: 30 },
    ],
    skillsProven: ['Real-time Architecture', 'WebSockets', 'Pub/Sub Messaging', 'Horizontal Scaling'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'arch-global-ecommerce',
    categoryId: 'software-development',
    topicId: 'system-architecture-design',
    level: 'advanced',
    title: 'Architect a Global E-commerce Platform',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Design a high-availability microservices architecture for Black Friday traffic.',
    scenario:
      'A global fashion retailer is preparing for Black Friday. Last year, their monolithic application crashed under the load. They have asked you to redesign the system using microservices to ensure the site stays up, even if the payment provider is temporarily slow.',
    brief:
      'Design a resilient microservices architecture. Focus on decoupling the Order Service from the Inventory Service and Payment Service. Explain how you will handle high-traffic spikes, eventual consistency, and graceful degradation.',
    deliverables: [
      'A comprehensive system diagram showing the API Gateway, microservices, databases, and message queues',
      'An explanation of how an order is processed asynchronously (e.g., using the Saga pattern or an event bus)',
      'A strategy for gracefully degrading the UI (e.g., disabling the recommendation engine) if under extreme load',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on fault tolerance. What happens if the Inventory service goes down right as a user clicks "Buy"? Your architecture must not drop the order.',
    rubric: [
      { key: 'decoupling', label: 'Service Decoupling', description: 'Are the microservices logically separated with their own databases?', weight: 30 },
      { key: 'async', label: 'Asynchronous Processing', description: 'Is a message queue used correctly to handle order fulfillment?', weight: 35 },
      { key: 'resilience', label: 'Fault Tolerance', description: 'Are strategies like retries, circuit breakers, or graceful degradation present?', weight: 35 },
    ],
    skillsProven: ['Microservices', 'Event-Driven Architecture', 'Fault Tolerance', 'System Resilience'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'db-model-blog',
    categoryId: 'software-development',
    topicId: 'database-modeling',
    level: 'beginner',
    title: 'Model a Simple Blog Schema',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design a standard relational schema with basic foreign keys.',
    scenario:
      'A publisher needs a database to power their new multi-author blog. They need to track Users, Posts, and Tags. A post can have multiple tags, and a tag can belong to multiple posts.',
    brief:
      'Design the SQL schema (tables, columns, and foreign keys) for the blog. You must correctly implement the many-to-many relationship between Posts and Tags.',
    deliverables: [
      'An Entity-Relationship Diagram (ERD) or a set of `CREATE TABLE` SQL statements',
      'The definition of the junction/join table connecting Posts and Tags',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not forget foreign key constraints. Ensure you define primary keys for all tables.',
    rubric: [
      { key: 'tables', label: 'Table Structure', description: 'Are the Users, Posts, and Tags tables defined with appropriate columns?', weight: 35 },
      { key: 'relations', label: 'Foreign Keys', description: 'Is the User-to-Post 1-to-many relationship correct?', weight: 30 },
      { key: 'manytomany', label: 'Many-to-Many', description: 'Is the junction table for Posts-Tags correctly defined with composite keys?', weight: 35 },
    ],
    skillsProven: ['SQL DDL', 'Foreign Keys', 'Many-to-Many Relationships', 'Entity-Relationship Modeling'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'db-model-ecommerce',
    categoryId: 'software-development',
    topicId: 'database-modeling',
    level: 'intermediate',
    title: 'Model an E-commerce Cart & Order System',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Design a schema that safely handles immutable financial records.',
    scenario:
      'You are building the database for an online store. The business needs to track Products, Shopping Carts (active sessions), and Final Orders. The critical business rule: if a Product price changes tomorrow, historical Final Orders from yesterday must not change.',
    brief:
      'Design the SQL schema for Products, Carts, CartItems, Orders, and OrderLineItems. Explain how you structure the tables to preserve historical pricing integrity.',
    deliverables: [
      'The schema definition (`CREATE TABLE` statements or an ERD) for the e-commerce entities',
      'A short explanation of how the `OrderLineItem` table differs from the `CartItem` table regarding price tracking',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A common mistake is relating an Order directly to a Product ID to look up the price. If the product price updates, the past order total will incorrectly change. How do you prevent this?',
    rubric: [
      { key: 'schema', label: 'Schema Design', description: 'Are the tables logically separated (Carts vs Orders)?', weight: 30 },
      { key: 'integrity', label: 'Historical Integrity', description: 'Does the schema copy the price to the OrderLineItem at checkout?', weight: 40 },
      { key: 'normalization', label: 'Normalization', description: 'Are the tables normalized without unnecessary data duplication?', weight: 30 },
    ],
    skillsProven: ['Data Integrity', 'Financial Modeling', 'Schema Normalization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'db-model-social-feed',
    categoryId: 'software-development',
    topicId: 'database-modeling',
    level: 'advanced',
    title: 'Model a High-Traffic Social Media Feed',
    difficulty: 'Advanced',
    estimatedHours: '4 to 5 hours',
    tagline: 'Design a database schema optimized for massive, read-heavy fan-out operations.',
    scenario:
      'You are the database architect for a new Twitter clone. When a celebrity with 5 million followers posts a new message, those 5 million users need to see it in their timeline immediately. A standard SQL `JOIN` on the followers table is taking 30 seconds to run.',
    brief:
      'Design the schema and architectural strategy for the social feed. You must decide whether to use a Push model (Fan-out on write), a Pull model (Fan-out on read), or a hybrid approach. Explain your database choice (e.g., PostgreSQL, Cassandra, or a Graph DB).',
    deliverables: [
      'The schema design for Users, Follows, and Posts',
      'An architectural diagram or explanation of the "Feed Generation" process (Push vs. Pull)',
      'A defense of the chosen indexing strategy to make reads as fast as possible',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'There is no single correct answer here. The test is on your ability to articulate the trade-offs of Fan-out on Read versus Fan-out on Write.',
    rubric: [
      { key: 'schema', label: 'Relational Graph', description: 'Is the Follows (adjacency list) schema correctly designed?', weight: 30 },
      { key: 'fanout', label: 'Fan-out Strategy', description: 'Does the candidate understand the performance trade-offs of Push vs Pull feeds?', weight: 40 },
      { key: 'indexing', label: 'Indexing & Performance', description: 'Are appropriate indexes suggested for the read-heavy timeline queries?', weight: 30 },
    ],
    skillsProven: ['High-Performance Databases', 'Fan-out Patterns', 'Graph Modeling', 'Query Optimization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'cicd-basic-github-actions',
    categoryId: 'software-development',
    topicId: 'cicd-pipeline-setup',
    level: 'beginner',
    title: 'Create a Basic CI Workflow',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a GitHub Actions YAML file to automate testing and linting.',
    scenario:
      'A startup team is pushing broken code to the `main` branch because developers forget to run tests locally. They need a Continuous Integration (CI) pipeline that automatically checks every Pull Request.',
    brief:
      'Write a GitHub Actions workflow YAML file for a Node.js project. It should trigger on Pull Requests to `main`. It must install dependencies, run a linter, and run the test suite. If any step fails, the workflow must fail.',
    deliverables: [
      'The complete `.yml` workflow file',
      'An explanation of the difference between `npm install` and `npm ci` in a pipeline',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Ensure you are caching Node modules to speed up the workflow execution time. Speed matters in CI.',
    rubric: [
      { key: 'yaml', label: 'YAML Syntax', description: 'Is the workflow file correctly structured with triggers and steps?', weight: 40 },
      { key: 'npm-ci', label: 'Dependency Management', description: 'Does the candidate understand why `npm ci` is strictly better for CI environments?', weight: 30 },
      { key: 'caching', label: 'Pipeline Optimization', description: 'Is a dependency caching strategy implemented?', weight: 30 },
    ],
    skillsProven: ['GitHub Actions', 'Continuous Integration', 'YAML', 'Build Optimization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'cicd-multi-environment',
    categoryId: 'software-development',
    topicId: 'cicd-pipeline-setup',
    level: 'intermediate',
    title: 'Multi-Environment Deployment Pipeline',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Design a pipeline that deploys to Staging, then requires manual approval for Production.',
    scenario:
      'The company is maturing. They now have a `staging` environment and a `production` environment. Pushes to `main` should automatically deploy to staging, but deploying to production must require a manual click from the QA manager.',
    brief:
      'Design a multi-stage Continuous Deployment (CD) pipeline. Write the GitHub Actions (or GitLab CI) YAML that defines two deployment jobs. Explain how you manage environment-specific secrets (like database URLs).',
    deliverables: [
      'The multi-stage YAML file',
      'An explanation of how manual approval gates are configured in your chosen CI provider',
      'A description of how environment variables are securely injected into the build',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not hardcode secrets in your YAML. Show how you reference repository secrets based on the current environment.',
    rubric: [
      { key: 'stages', label: 'Multi-Stage YAML', description: 'Are the staging and production jobs correctly chained?', weight: 40 },
      { key: 'gates', label: 'Approval Gates', description: 'Is the manual approval process correctly implemented?', weight: 30 },
      { key: 'secrets', label: 'Secret Management', description: 'Are environment variables referenced securely?', weight: 30 },
    ],
    skillsProven: ['Continuous Deployment (CD)', 'Environment Management', 'Secret Handling', 'Release Gates'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'cicd-zero-downtime',
    categoryId: 'software-development',
    topicId: 'cicd-pipeline-setup',
    level: 'advanced',
    title: 'Zero-Downtime Deployment Strategy',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Architect a deployment process where users never see a 502 Bad Gateway.',
    scenario:
      'The application serves hospitals 24/7. Currently, deploying a new version requires restarting the Node.js server, causing 10 seconds of downtime. This is unacceptable. The VP of Engineering wants a Zero-Downtime deployment strategy.',
    brief:
      'Architect a Zero-Downtime deployment process. You must choose between Blue-Green Deployment, Canary Releases, or Rolling Updates. Explain your choice, detail the infrastructure required (e.g., Load Balancers, container orchestration), and outline the rollback plan if the new version crashes immediately.',
    deliverables: [
      'An architectural diagram of the deployment strategy (e.g., showing the Load Balancer routing traffic between Blue and Green clusters)',
      'A defense of your chosen strategy over the alternatives',
      'A step-by-step description of the automated rollback trigger',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an architecture task. You do not need to write the specific bash scripts, but you must explain the conceptual flow of traffic during the switch-over.',
    rubric: [
      { key: 'strategy', label: 'Deployment Strategy', description: 'Is the chosen strategy (Blue-Green/Canary) logically sound for a high-availability app?', weight: 35 },
      { key: 'routing', label: 'Traffic Routing', description: 'Does the candidate understand how Load Balancers manage the switch-over?', weight: 35 },
      { key: 'rollback', label: 'Automated Rollback', description: 'Is there a clear mechanism for detecting failure and reverting traffic?', weight: 30 },
    ],
    skillsProven: ['Zero-Downtime Deployment', 'Blue-Green / Canary', 'Load Balancing', 'Site Reliability Engineering (SRE)'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'test-unit-utility',
    categoryId: 'software-development',
    topicId: 'testing-strategies',
    level: 'beginner',
    title: 'Write Unit Tests for Utility Functions',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write a comprehensive test suite for a complex date-formatting utility.',
    scenario:
      'A teammate wrote a `formatRelativeDate(dateString)` function that returns "just now", "5 minutes ago", "yesterday", etc. However, it sometimes breaks on leap years and cross-timezone inputs. You need to write the tests to prove it.',
    brief:
      'Write a comprehensive Jest or Mocha test suite for the `formatRelativeDate` function. Focus on testing the edge cases (leap years, different timezones, invalid inputs) rather than just the happy path.',
    deliverables: [
      'The complete test suite code (e.g., `dateFormatter.test.js`)',
      'A short explanation of why it is important to mock the system clock (`Date.now()`) when testing time-relative functions',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume the function exists and you are just writing the tests. A good test suite should act as documentation for the function’s expected behavior.',
    rubric: [
      { key: 'coverage', label: 'Edge Case Coverage', description: 'Are edge cases like invalid strings and boundary dates tested?', weight: 40 },
      { key: 'mocking', label: 'Clock Mocking', description: 'Does the candidate correctly identify the need to mock the system clock?', weight: 30 },
      { key: 'readability', label: 'Test Readability', description: 'Are the `describe` and `it` blocks clearly written?', weight: 30 },
    ],
    skillsProven: ['Unit Testing', 'Jest / Mocha', 'Edge Case Analysis', 'Mocking'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'test-integration-api',
    categoryId: 'software-development',
    topicId: 'testing-strategies',
    level: 'intermediate',
    title: 'Integration Testing an API Endpoint',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write tests that verify the database and API routing layers work together.',
    scenario:
      'You are testing a `POST /users` endpoint. This endpoint receives JSON, hashes the password, saves the user to the database, and returns a 201 Created status.',
    brief:
      'Write the integration test suite for the `POST /users` endpoint using Supertest and Jest. You must demonstrate how you mock or spin up a test database so you are not writing to the production database during tests.',
    deliverables: [
      'The integration test code snippet',
      'An explanation of the setup and teardown process (`beforeAll`, `afterEach`, etc.) for managing the test database state',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Integration tests should test the whole request lifecycle. Make sure to test what happens when the database throws a duplicate email error (e.g., returning a 409 Conflict).',
    rubric: [
      { key: 'lifecycle', label: 'Request Lifecycle', description: 'Does the test verify the HTTP status code and response payload?', weight: 35 },
      { key: 'database', label: 'Database State', description: 'Is the test database properly seeded and cleaned up between tests?', weight: 35 },
      { key: 'errors', label: 'Error Handling', description: 'Are failure states (like 400 Bad Request or 409 Conflict) explicitly tested?', weight: 30 },
    ],
    skillsProven: ['Integration Testing', 'Supertest', 'Database Mocking', 'API Validation'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'test-e2e-playwright',
    categoryId: 'software-development',
    topicId: 'testing-strategies',
    level: 'advanced',
    title: 'End-to-End Testing with Playwright',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Automate a complex user journey using a headless browser.',
    scenario:
      'Your company’s checkout flow has broken twice this month because frontend changes unexpectedly broke backend API calls. You need to write an automated End-to-End (E2E) test to prevent this.',
    brief:
      'Write a Playwright (or Cypress) test script that navigates to an e-commerce site, adds a specific item to the cart, proceeds to checkout, fills out the shipping form, and verifies the final confirmation screen.',
    deliverables: [
      'The complete Playwright/Cypress test script',
      'An explanation of how to handle asynchronous flakiness (e.g., waiting for network requests or animations to finish before clicking)',
      'A brief strategy on how you would handle testing payment processing without charging real credit cards',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'E2E tests are notoriously flaky. Your test code should demonstrate best practices for waiting for elements to be actionable, rather than relying on arbitrary `sleep(5000)` commands.',
    rubric: [
      { key: 'script', label: 'Test Script Flow', description: 'Does the script logically progress through the checkout flow?', weight: 35 },
      { key: 'flakiness', label: 'Handling Flakiness', description: 'Are network/UI waits used correctly instead of arbitrary timeouts?', weight: 35 },
      { key: 'payments', label: 'Payment Strategy', description: 'Does the candidate understand how to use test/sandbox payment tokens?', weight: 30 },
    ],
    skillsProven: ['End-to-End (E2E) Testing', 'Playwright / Cypress', 'Automated QA', 'Flakiness Mitigation'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'refactor-massive-function',
    categoryId: 'software-development',
    topicId: 'code-refactoring',
    level: 'beginner',
    title: 'Refactor a Massive Function',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Break down a 500-line monster function into clean, testable pieces.',
    scenario:
      'You have inherited an `exportUserData()` function. It fetches data, formats dates, applies business logic, generates a CSV, and emails it. It is impossible to test the date formatting without actually sending an email.',
    brief:
      'Refactor the provided conceptual function. Apply the Single Responsibility Principle (SRP) to break it out into several pure helper functions. Show how the main function orchestrates these helpers.',
    deliverables: [
      'The refactored code (main orchestrator function + helper functions)',
      'A brief explanation of how this refactor makes unit testing easier',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need an actual running environment. Focus on the logical boundaries. A pure function (data in, data out) is much easier to test than a function with side effects.',
    rubric: [
      { key: 'srp', label: 'Single Responsibility', description: 'Are the helper functions strictly separated by concern?', weight: 40 },
      { key: 'pure', label: 'Pure Functions', description: 'Are the data-transformation functions free of side effects (like emailing)?', weight: 35 },
      { key: 'orchestration', label: 'Orchestration', description: 'Is the main function clean and easy to read?', weight: 25 },
    ],
    skillsProven: ['Single Responsibility Principle (SRP)', 'Pure Functions', 'Code Readability', 'Testing preparation'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'refactor-composition',
    categoryId: 'software-development',
    topicId: 'code-refactoring',
    level: 'intermediate',
    title: 'Replace Inheritance with Composition',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Fix a fragile class hierarchy that has grown out of control.',
    scenario:
      'A game backend uses deep Object-Oriented inheritance: `class FlyingSwimmingEnemy extends SwimmingEnemy extends Enemy`. Now, the designers want a `FlyingSwimmingShootingEnemy`. The inheritance tree is breaking down.',
    brief:
      'Refactor the class hierarchy to use Composition over Inheritance. Create separate behaviors (e.g., `canFly`, `canSwim`, `canShoot`) and compose them into the final entity.',
    deliverables: [
      'The refactored code showing the behaviors (traits/mixins/interfaces) and the composed entity',
      'An explanation of why the "Gorilla Banana" problem (fragile base class) makes deep inheritance dangerous',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Use modern syntax (e.g., JavaScript factory functions, or TypeScript interfaces/mixins). The goal is flat architecture, not deep trees.',
    rubric: [
      { key: 'composition', label: 'Composition Implementation', description: 'Is the code correctly using composition instead of `extends`?', weight: 40 },
      { key: 'flexibility', label: 'Code Flexibility', description: 'Is it easy to add a new behavior without rewriting base classes?', weight: 35 },
      { key: 'theory', label: 'Theory Comprehension', description: 'Does the candidate clearly explain the pitfalls of deep inheritance?', weight: 25 },
    ],
    skillsProven: ['Composition over Inheritance', 'Design Patterns', 'Object-Oriented Programming (OOP)', 'Code Architecture'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'refactor-monolith-microservice',
    categoryId: 'software-development',
    topicId: 'code-refactoring',
    level: 'advanced',
    title: 'Refactor a Legacy Monolith (Strangler Fig)',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Design a plan to safely extract a microservice from a running monolith.',
    scenario:
      'Your company has a massive 10-year-old Ruby on Rails monolith. The `Billing` module is slowing down the entire app. Management wants to extract `Billing` into its own Go microservice without taking the site offline.',
    brief:
      'Design a migration plan using the Strangler Fig pattern. Explain how you will route traffic, migrate the database safely, and handle the transition period where both systems must remain in sync.',
    deliverables: [
      'An architectural diagram showing the routing layer (API Gateway) intercepting traffic',
      'A step-by-step phased migration plan (Dark launch, Shadow traffic, Cut-over)',
      'A strategy for untangling the shared database (dual writes vs. eventual consistency)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The hardest part of microservice extraction is the data layer. You cannot just cut a table out of a shared database overnight. Focus on the database synchronization strategy.',
    rubric: [
      { key: 'pattern', label: 'Strangler Fig Pattern', description: 'Is the routing layer correctly designed to slowly siphon traffic?', weight: 35 },
      { key: 'database', label: 'Data Migration', description: 'Is the database untangling strategy safe and realistic?', weight: 40 },
      { key: 'safety', label: 'Rollback & Safety', description: 'Are shadow reads/writes used to verify the new service before cut-over?', weight: 25 },
    ],
    skillsProven: ['Strangler Fig Pattern', 'Microservices Extraction', 'Database Migration', 'Legacy System Modernization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'sec-patch-xss',
    categoryId: 'software-development',
    topicId: 'security-vulnerability-patching',
    level: 'beginner',
    title: 'Patch a Cross-Site Scripting (XSS) Vulnerability',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Fix a dangerous form that allows users to inject malicious scripts.',
    scenario:
      'A user profile page allows users to enter a "Bio". Currently, if a user enters `<script>alert("Hacked")</script>`, the browser executes it when anyone views their profile. This is a Stored XSS vulnerability.',
    brief:
      'You are provided with a vulnerable React component and an Express endpoint. Show how to patch this vulnerability on both the frontend (escaping HTML) and the backend (sanitizing input).',
    deliverables: [
      'The corrected React component code',
      'The corrected Express route code utilizing a sanitization library (like `dompurify` or `xss`)',
      'A brief explanation of why relying only on frontend validation is insecure',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Remember that React automatically escapes strings by default. To make this vulnerable, the original code used `dangerouslySetInnerHTML`. Explain why that was a bad idea and how to fix it.',
    rubric: [
      { key: 'frontend', label: 'Frontend Fix', description: 'Is `dangerouslySetInnerHTML` removed or safely handled?', weight: 35 },
      { key: 'backend', label: 'Backend Sanitization', description: 'Is the data sanitized before it is saved to the database?', weight: 35 },
      { key: 'theory', label: 'Security Theory', description: 'Does the candidate understand that the backend cannot trust the client?', weight: 30 },
    ],
    skillsProven: ['Cross-Site Scripting (XSS)', 'React Security', 'Backend Sanitization', 'OWASP'],
    relatedRoadmapIds: ['software-engineer', 'web-developer'],
  },
  {
    id: 'sec-patch-sql-injection',
    categoryId: 'software-development',
    topicId: 'security-vulnerability-patching',
    level: 'intermediate',
    title: 'Patch a SQL Injection Vulnerability',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Rewrite dangerous raw SQL queries using parameterized statements.',
    scenario:
      'A legacy Node.js application searches for users by username. The query is written as: `db.query("SELECT * FROM users WHERE username = \'" + req.body.username + "\'")`. A malicious user just dropped the users table using `\' OR 1=1; DROP TABLE users; --`.',
    brief:
      'Rewrite the vulnerable database interaction. You can either use parameterized queries with the raw driver (e.g., `pg` or `mysql2`), or implement an ORM (like Prisma or Sequelize) to handle escaping automatically.',
    deliverables: [
      'The patched code snippet showing the secure database query',
      'An explanation of exactly how the malicious payload (`\' OR 1=1; DROP TABLE users; --`) manipulated the original query string',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The goal is to prove you understand parameterized queries. Simply writing a regex to block semicolons is not an acceptable solution.',
    rubric: [
      { key: 'parameterization', label: 'Parameterized Query', description: 'Is the query correctly parameterized to prevent injection?', weight: 40 },
      { key: 'explanation', label: 'Attack Breakdown', description: 'Is the explanation of the attack payload accurate?', weight: 35 },
      { key: 'best-practice', label: 'Best Practices', description: 'Does the candidate rely on standard drivers/ORMs rather than custom regex?', weight: 25 },
    ],
    skillsProven: ['SQL Injection Prevention', 'Database Security', 'Parameterized Queries'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'sec-patch-csrf-rate-limit',
    categoryId: 'software-development',
    topicId: 'security-vulnerability-patching',
    level: 'advanced',
    title: 'Secure an App against CSRF & Rate Limiting Attacks',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Defend a critical API from automated brute-force attacks and cross-site forgery.',
    scenario:
      'Your banking application has two major flaws. First, attackers are brute-forcing the `/login` endpoint with thousands of requests per second. Second, the `/transfer-funds` endpoint is vulnerable to Cross-Site Request Forgery (CSRF) because it relies solely on session cookies.',
    brief:
      'Design the security architecture to fix both issues. Implement a Rate Limiter for the login endpoint (e.g., using Redis) and explain how you would implement Anti-CSRF tokens (or SameSite cookie attributes) for the transfer endpoint.',
    deliverables: [
      'A code snippet or pseudo-code showing a Redis-backed rate limiter middleware for the login route',
      'An explanation of how an Anti-CSRF token lifecycle works (generation, delivery, validation)',
      'A defense of using `SameSite=Strict` cookies versus traditional CSRF tokens',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an advanced architectural security task. You need to understand how session cookies are sent by the browser implicitly, and how to stop attackers from abusing that.',
    rubric: [
      { key: 'rate-limiting', label: 'Rate Limiting', description: 'Is the rate limiting logic (e.g., IP tracking in Redis) sound?', weight: 35 },
      { key: 'csrf-tokens', label: 'CSRF Protection', description: 'Is the Anti-CSRF token or SameSite cookie logic correctly explained?', weight: 35 },
      { key: 'architecture', label: 'Security Trade-offs', description: 'Does the candidate understand the UX trade-offs of aggressive rate limiting?', weight: 30 },
    ],
    skillsProven: ['CSRF Protection', 'Rate Limiting', 'Redis', 'Session Security', 'OWASP'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'perf-n-plus-one',
    categoryId: 'software-development',
    topicId: 'backend-performance',
    level: 'beginner',
    title: 'Fix an N+1 Query Problem',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Optimize a hidden loop that is crushing your database.',
    scenario:
      'An API endpoint `GET /articles` fetches the latest 50 articles. For each article, the ORM runs a separate query to fetch the author\'s name. This results in 51 database queries for a single API request.',
    brief:
      'Identify the N+1 query in the provided code snippet. Rewrite the database logic to use a SQL `JOIN` or your ORM\'s "eager loading" feature so that it only takes a maximum of 2 queries to fetch all the data.',
    deliverables: [
      'The optimized code snippet',
      'An explanation of why the N+1 problem causes severe performance degradation as traffic scales',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'If using Prisma, look into `include`. If using TypeORM, look into `relations`. If using raw SQL, write a `LEFT JOIN`.',
    rubric: [
      { key: 'solution', label: 'Eager Loading', description: 'Is the N+1 query successfully reduced to 1 or 2 queries?', weight: 40 },
      { key: 'theory', label: 'Performance Theory', description: 'Does the candidate understand the latency cost of network round-trips to the DB?', weight: 35 },
      { key: 'readability', label: 'Code Cleanliness', description: 'Is the optimized code still easy to read?', weight: 25 },
    ],
    skillsProven: ['N+1 Query Resolution', 'Database Joins', 'ORM Eager Loading', 'Latency Optimization'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'perf-redis-cache',
    categoryId: 'software-development',
    topicId: 'backend-performance',
    level: 'intermediate',
    title: 'Implement Redis Caching',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Speed up a slow 3rd-party API response using an in-memory cache.',
    scenario:
      'Your app displays live stock prices fetched from an external API. The external API takes 2 seconds to respond and limits you to 100 requests per minute. Your app receives 500 requests per minute.',
    brief:
      'Implement a caching layer using Redis. If a stock price was fetched in the last 15 seconds, serve it from Redis. Otherwise, fetch it from the external API, save it to Redis with an expiration (TTL), and return it.',
    deliverables: [
      'The caching middleware/service code using a Redis client',
      'An explanation of how TTL (Time To Live) prevents stale data',
      'What happens if the Redis server crashes? Explain your fallback strategy.',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good cache implementation should be invisible to the end user (except that it is much faster). Make sure you handle cache misses correctly.',
    rubric: [
      { key: 'implementation', label: 'Cache Logic', description: 'Is the Check -> Miss -> Fetch -> Save flow implemented correctly?', weight: 40 },
      { key: 'ttl', label: 'Cache Invalidation', description: 'Is a TTL correctly set to ensure data freshness?', weight: 30 },
      { key: 'fallback', label: 'Resilience', description: 'Does the app gracefully fall back to the slow API if Redis is down?', weight: 30 },
    ],
    skillsProven: ['Redis', 'Caching Strategies', 'API Rate Limit Mitigation', 'Fault Tolerance'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'perf-memory-leak',
    categoryId: 'software-development',
    topicId: 'backend-performance',
    level: 'advanced',
    title: 'Profile and Fix a Memory Leak',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Stop a Node.js server from continuously crashing out of memory.',
    scenario:
      'A Node.js worker process processes CSV files. Every time a 100MB CSV file is processed, the server\'s RAM usage increases by 100MB and never goes down. Eventually, the container hits its 1GB limit and is killed by Kubernetes (OOMKilled).',
    brief:
      'Diagnose the conceptual memory leak. You are given a code snippet that reads the entire file into an array using `fs.readFileSync`. Rewrite the logic to use Node.js Streams so it can process a 10GB file using only 50MB of RAM.',
    deliverables: [
      'The refactored code using `fs.createReadStream` and a streaming CSV parser',
      'An explanation of how Garbage Collection in V8 works, and why the original code prevented it',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Streams are one of the most powerful but misunderstood features of Node.js. Your goal is to process the file chunk by chunk, without holding the whole thing in memory.',
    rubric: [
      { key: 'streams', label: 'Stream Implementation', description: 'Is the code correctly piping the read stream to a parser?', weight: 40 },
      { key: 'memory', label: 'Memory Complexity', description: 'Does the candidate prove the new solution has O(1) memory complexity?', weight: 35 },
      { key: 'gc', label: 'Garbage Collection', description: 'Is the explanation of V8 memory management accurate?', weight: 25 },
    ],
    skillsProven: ['Node.js Streams', 'Memory Profiling', 'Garbage Collection', 'Large Data Processing'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'async-promise-all',
    categoryId: 'software-development',
    topicId: 'async-processing',
    level: 'beginner',
    title: 'Optimize Sequential API Calls',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Fix a dashboard that takes 10 seconds to load because it fetches data one by one.',
    scenario:
      'A dashboard needs data from 3 different microservices: User Profile, Recent Orders, and Support Tickets. Currently, the code uses `await fetchProfile()`, then `await fetchOrders()`, then `await fetchTickets()`. Each takes 1 second, so the page takes 3 seconds to load.',
    brief:
      'Rewrite the code to fetch all 3 endpoints concurrently. Ensure that if the Support Tickets API fails, the User Profile and Recent Orders data are still returned to the frontend (with an error state for tickets).',
    deliverables: [
      'The optimized data-fetching code snippet',
      'An explanation of why `Promise.allSettled` is safer than `Promise.all` in this specific scenario',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The goal is to reduce the total network time from 3 seconds to roughly 1 second. Pay close attention to error handling.',
    rubric: [
      { key: 'concurrency', label: 'Concurrent Execution', description: 'Are the promises executed in parallel rather than sequentially?', weight: 40 },
      { key: 'resilience', label: 'Fault Tolerance', description: 'Does the code use `Promise.allSettled` (or catch blocks) to prevent total failure?', weight: 35 },
      { key: 'theory', label: 'Event Loop Knowledge', description: 'Can the candidate explain the difference between `all` and `allSettled`?', weight: 25 },
    ],
    skillsProven: ['Promises', 'Concurrency', 'Error Handling', 'API Orchestration'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'async-background-worker',
    categoryId: 'software-development',
    topicId: 'async-processing',
    level: 'intermediate',
    title: 'Offload a Heavy Task to a Background Worker',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Keep the main API thread unblocked when generating massive PDF reports.',
    scenario:
      'Users can click "Export Year-End Report". Generating the PDF takes 15 seconds of heavy CPU time. Currently, the API endpoint blocks the main thread, causing other users\' requests to time out.',
    brief:
      'Design a background job architecture to handle the PDF generation. Explain how the API will accept the request, delegate the work, and notify the user when the PDF is ready.',
    deliverables: [
      'An architectural diagram or explanation of the Job Queue (e.g., using Redis/BullMQ or AWS SQS)',
      'The code snippet for the API endpoint that enqueues the job and returns a `202 Accepted` status',
      'An explanation of how the frontend will know when the job is done (Polling vs. WebSockets)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not perform the PDF generation in the HTTP request handler. You must decouple the request from the processing.',
    rubric: [
      { key: 'decoupling', label: 'Task Decoupling', description: 'Is the heavy task successfully moved to a separate worker process?', weight: 35 },
      { key: 'queue', label: 'Message Queue', description: 'Is a robust queue system (Redis/SQS) utilized?', weight: 35 },
      { key: 'ux', label: 'Client Communication', description: 'Is a valid strategy proposed for notifying the client (polling, webhooks)?', weight: 30 },
    ],
    skillsProven: ['Background Jobs', 'Message Queues', 'Asynchronous APIs', 'Decoupling'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'async-event-driven',
    categoryId: 'software-development',
    topicId: 'async-processing',
    level: 'advanced',
    title: 'Design an Event-Driven Checkout Workflow',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Architect a distributed transaction using the Saga pattern.',
    scenario:
      'When a user clicks "Buy", 4 things must happen: 1. Deduct Inventory, 2. Charge Credit Card, 3. Generate Shipping Label, 4. Send Confirmation Email. If step 2 fails, step 1 must be reversed.',
    brief:
      'Design an Event-Driven Architecture (EDA) to handle this checkout flow across 4 independent microservices. Explain how you will handle failures and rollbacks using the Saga pattern (Choreography or Orchestration).',
    deliverables: [
      'An architectural diagram showing the event broker (e.g., Kafka or RabbitMQ) and the message topics',
      'A detailed explanation of the "Compensating Transaction" if the credit card is declined after inventory was deducted',
      'A defense of your choice between Event Choreography (decentralized) vs. Orchestration (central controller)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an advanced distributed systems problem. You cannot use a standard SQL database transaction (`BEGIN...COMMIT`) because the data lives in different microservices.',
    rubric: [
      { key: 'eda', label: 'Event-Driven Design', description: 'Are the microservices communicating asynchronously via events?', weight: 35 },
      { key: 'saga', label: 'Saga Pattern', description: 'Are compensating transactions clearly defined for failure states?', weight: 40 },
      { key: 'tradeoffs', label: 'Architecture Trade-offs', description: 'Is the defense of Choreography vs Orchestration sound?', weight: 25 },
    ],
    skillsProven: ['Event-Driven Architecture', 'Saga Pattern', 'Distributed Transactions', 'Kafka / RabbitMQ'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'auth-jwt-lifecycle',
    categoryId: 'software-development',
    topicId: 'auth-authorization',
    level: 'beginner',
    title: 'Implement a Secure JWT Lifecycle',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Design a stateless authentication flow using Access and Refresh tokens.',
    scenario:
      'You are building the auth system for a Single Page Application (SPA). You have decided to use JSON Web Tokens (JWT). A common mistake is storing a long-lived JWT in `localStorage`, which is vulnerable to XSS attacks.',
    brief:
      'Design a secure token lifecycle. Explain the difference between an Access Token and a Refresh Token. Describe exactly where the frontend should store each token, and how the backend should validate them.',
    deliverables: [
      'An architectural explanation of the Access/Refresh token flow',
      'Code snippets for setting the Refresh Token as an `HttpOnly` cookie in Express/Node.js',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on the storage mechanisms. Why is `HttpOnly` critical for the Refresh Token, and why is it acceptable to keep a short-lived Access Token in JavaScript memory?',
    rubric: [
      { key: 'lifecycle', label: 'Token Lifecycle', description: 'Does the candidate correctly explain how Refresh Tokens generate new Access Tokens?', weight: 40 },
      { key: 'storage', label: 'Secure Storage', description: 'Is the `HttpOnly` cookie strategy correctly implemented for the Refresh Token?', weight: 35 },
      { key: 'xss', label: 'XSS Mitigation', description: 'Does the candidate understand why `localStorage` is dangerous for long-lived tokens?', weight: 25 },
    ],
    skillsProven: ['JWT (JSON Web Tokens)', 'Stateless Authentication', 'Cookie Security', 'XSS Mitigation'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer', 'web-developer'],
  },
  {
    id: 'auth-rbac-middleware',
    categoryId: 'software-development',
    topicId: 'auth-authorization',
    level: 'intermediate',
    title: 'Build Role-Based Access Control (RBAC)',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write Express middleware to protect routes based on user roles.',
    scenario:
      'Your platform has 3 user roles: `USER`, `EDITOR`, and `ADMIN`. You need to ensure that only `EDITOR`s and `ADMIN`s can access the `POST /articles` route, but only an `ADMIN` can access the `DELETE /users` route.',
    brief:
      'Write a reusable authorization middleware function in Node.js/Express. It should accept an array of allowed roles and check it against the `req.user.role` property (which is populated by your authentication middleware).',
    deliverables: [
      'The `requireRoles` middleware code',
      'The Express router configuration showing how the middleware is applied to the protected routes',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The middleware must be generic. Do not hardcode the logic inside the route handler itself. Think about how you would scale this if a new `SUPER_ADMIN` role was added tomorrow.',
    rubric: [
      { key: 'middleware', label: 'Middleware Logic', description: 'Is the middleware correctly intercepting the request and returning a 403 Forbidden if unauthorized?', weight: 40 },
      { key: 'reusability', label: 'Reusability', description: 'Is the function generic enough to accept dynamic role arrays?', weight: 35 },
      { key: 'routing', label: 'Route Application', description: 'Is the middleware correctly chained in the Express route definition?', weight: 25 },
    ],
    skillsProven: ['Role-Based Access Control (RBAC)', 'Express Middleware', 'Authorization Logic'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'auth-oauth-flow',
    categoryId: 'software-development',
    topicId: 'auth-authorization',
    level: 'advanced',
    title: 'Architect an OAuth 2.0 Integration',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Implement "Login with Google" securely using the Authorization Code flow.',
    scenario:
      'Your users are tired of remembering passwords. Management wants to add a "Login with Google" button. You cannot use a pre-built library like Passport.js; you must orchestrate the raw OAuth 2.0 flow yourself to prove you understand it.',
    brief:
      'Architect the OAuth 2.0 Authorization Code flow. Document the exact HTTP requests that happen between the User, your Backend, and the Google Authorization Server. Pay special attention to the `state` parameter.',
    deliverables: [
      'A sequence diagram (or detailed step-by-step list) of the OAuth 2.0 flow',
      'An explanation of the `state` parameter and how it prevents CSRF attacks during the OAuth redirect',
      'A description of how you link the incoming Google Identity to an existing user in your database',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not confuse Authentication with Authorization. We are using OAuth 2.0 (specifically OpenID Connect) to authenticate the user. Explain how the short-lived Authorization Code is exchanged for tokens.',
    rubric: [
      { key: 'flow', label: 'OAuth Flow', description: 'Is the 3-legged Authorization Code flow (Redirect -> Code -> Token Exchange) correctly documented?', weight: 40 },
      { key: 'state', label: 'CSRF Protection', description: 'Does the candidate correctly explain the purpose of the `state` parameter?', weight: 30 },
      { key: 'linking', label: 'Account Linking', description: 'Is there a logical strategy for matching the Google email/ID to the internal database?', weight: 30 },
    ],
    skillsProven: ['OAuth 2.0', 'OpenID Connect', 'Third-Party Authentication', 'Security Architecture'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'docker-optimize-image',
    categoryId: 'software-development',
    topicId: 'container-orchestration',
    level: 'beginner',
    title: 'Optimize a Node.js Dockerfile',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Shrink a bloated 1GB Docker image down to under 150MB.',
    scenario:
      'A junior developer wrote a `Dockerfile` for a simple Node.js Express API. The resulting image is 1.2GB because they used the `node:latest` base image, copied the `node_modules` folder from their local machine, and ran as the `root` user.',
    brief:
      'Rewrite the Dockerfile. Use a smaller base image (e.g., Alpine), utilize multi-stage builds to exclude development dependencies (`devDependencies`), and ensure the container runs as a non-root user for security.',
    deliverables: [
      'The optimized `Dockerfile`',
      'An explanation of why multi-stage builds are critical for compiled languages (or for trimming `devDependencies` in Node)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A good Dockerfile should cache the `package.json` install step separately from the source code copy step to speed up rebuilds.',
    rubric: [
      { key: 'base-image', label: 'Base Image Selection', description: 'Is a lightweight base image (like Alpine or Slim) used?', weight: 35 },
      { key: 'security', label: 'Least Privilege', description: 'Is the container running as a non-root `node` user?', weight: 35 },
      { key: 'caching', label: 'Layer Caching', description: 'Are the `COPY package.json` and `RUN npm ci` steps placed before copying the rest of the source code?', weight: 30 },
    ],
    skillsProven: ['Docker', 'Container Optimization', 'Security (Non-Root)', 'Layer Caching'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'docker-compose-stack',
    categoryId: 'software-development',
    topicId: 'container-orchestration',
    level: 'intermediate',
    title: 'Define a Multi-Container Architecture',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write a `docker-compose.yml` to spin up a Node API, Postgres database, and Redis cache.',
    scenario:
      'A new developer joins your team. Currently, they have to manually install Node, PostgreSQL, and Redis on their laptop just to run the app locally. It takes them 2 days to set up their environment.',
    brief:
      'Write a `docker-compose.yml` file that defines three services: `api`, `db` (PostgreSQL), and `cache` (Redis). Ensure the `api` service waits for the `db` to be ready before starting, and define persistent volumes for the database so data isn\'t lost on restart.',
    deliverables: [
      'The complete `docker-compose.yml` file',
      'An explanation of how Docker Compose networks allow the `api` service to connect to the database using the hostname `db`',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Make sure to map the API port to the host machine so you can hit `localhost:3000` in your browser. Do not hardcode passwords in the compose file; use environment variables.',
    rubric: [
      { key: 'services', label: 'Service Definition', description: 'Are the API, DB, and Cache services defined correctly?', weight: 35 },
      { key: 'volumes', label: 'Data Persistence', description: 'Is a named volume attached to the PostgreSQL data directory?', weight: 35 },
      { key: 'depends', label: 'Startup Order', description: 'Does the API service use `depends_on` (or a wait script) for the DB?', weight: 30 },
    ],
    skillsProven: ['Docker Compose', 'Local Environment Setup', 'Container Networking', 'Persistent Volumes'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
  {
    id: 'k8s-deployment-strategy',
    categoryId: 'software-development',
    topicId: 'container-orchestration',
    level: 'advanced',
    title: 'Design a Kubernetes Deployment',
    difficulty: 'Advanced',
    estimatedHours: '3 to 5 hours',
    tagline: 'Write the manifests to deploy a highly available service to a Kubernetes cluster.',
    scenario:
      'The company is moving to Kubernetes (K8s). They need to deploy the main `billing-api` container. It needs to have 3 replicas running at all times across different nodes, scale up if CPU usage hits 80%, and safely recover if a pod crashes.',
    brief:
      'Write the Kubernetes YAML manifests for the `billing-api`. You will need a `Deployment`, a `Service` (ClusterIP), and an `HorizontalPodAutoscaler` (HPA). Define Liveness and Readiness probes to handle crashes.',
    deliverables: [
      'The K8s YAML manifests (`deployment.yaml`, `service.yaml`, `hpa.yaml`)',
      'An explanation of the difference between a Liveness Probe and a Readiness Probe',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You don\'t need a running K8s cluster; focus on the declarative syntax. Ensure your deployment specifies CPU/Memory limits so the HPA can function.',
    rubric: [
      { key: 'manifests', label: 'K8s Syntax', description: 'Are the Deployment, Service, and HPA YAML files valid and correctly linked via labels/selectors?', weight: 35 },
      { key: 'probes', label: 'Health Checks', description: 'Are Liveness (restart) and Readiness (traffic routing) probes correctly distinguished?', weight: 35 },
      { key: 'limits', label: 'Resource Management', description: 'Are resource requests and limits defined for the container?', weight: 30 },
    ],
    skillsProven: ['Kubernetes (K8s)', 'Pod Scaling (HPA)', 'Health Probes', 'Infrastructure as Code (IaC)'],
    relatedRoadmapIds: ['software-engineer', 'backend-developer'],
  },
];
