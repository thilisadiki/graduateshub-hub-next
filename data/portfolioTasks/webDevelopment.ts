import type { PortfolioTask } from '@/types';

export const webDevelopmentTasks: PortfolioTask[] = [

  {
    id: 'pricing-card-rebuild',
    categoryId: 'web-development',
    topicId: 'landing-page-rebuild',
    level: 'beginner',
    title: 'Build a Responsive Pricing Card',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Write the HTML and CSS for a single pricing card from a short spec.',
    scenario:
      'A SaaS startup is refreshing its pricing page. Before trusting a junior with the whole page, the lead developer asks applicants to build a single pricing card in isolation. It is a small, self-contained component, but the details matter.',
    brief:
      'Build one pricing card for the "Pro" plan. The card should contain: a plan name, a one-line description, a price with a "/ month" suffix, a list of four features each with a small check icon, and a primary call-to-action button that says "Start free trial". The card should look clean on both a 360px mobile screen and a 1280px desktop screen. Pick sensible padding, font sizes, and a single accent colour.',
    deliverables: [
      'A complete HTML snippet for one pricing card',
      'A complete CSS (or Tailwind class) implementation',
      'A one-line note on the font size and spacing scale you chose and why',
      'One accessibility detail you deliberately got right (focus ring, contrast, semantic list, aria-label, etc.)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Paste the code in fenced code blocks. Plain HTML and CSS (or Tailwind classes) only, no frameworks. Do not overbuild: one card, not three.',
    rubric: [
      { key: 'structure', label: 'HTML Structure', description: 'Is the markup semantic (ul for features, button for CTA, heading hierarchy)?', weight: 30 },
      { key: 'visual', label: 'Visual Polish', description: 'Are spacing, type scale, and the accent colour used with restraint and consistency?', weight: 25 },
      { key: 'responsive', label: 'Responsive Behaviour', description: 'Does the card hold up at 360px and 1280px without awkward wrapping or overflow?', weight: 25 },
      { key: 'a11y', label: 'Accessibility Detail', description: 'Is the accessibility choice real, specific, and correctly implemented?', weight: 20 },
    ],
    skillsProven: ['HTML', 'CSS / Tailwind', 'Responsive design', 'Accessibility'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'landing-page-from-screenshot',
    categoryId: 'web-development',
    topicId: 'landing-page-rebuild',
    level: 'intermediate',
    title: 'Rebuild a Landing Page Section from a Screenshot',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 3 hours',
    tagline: 'Write HTML and CSS that matches a screenshot pixel-close.',
    scenario:
      'A design agency gives junior front-end applicants a screenshot and asks them to rebuild the hero section. You will describe the screenshot in your own words and then produce the code.',
    brief:
      'Imagine a hero section with: a dark navy background, a white headline reading "Ship faster with fewer bugs", a shorter grey subheadline, a primary blue button and a secondary outlined button, and a product screenshot to the right that overlaps slightly outside the right edge of the content container. It is responsive: on mobile the image stacks below the text.',
    deliverables: [
      'A complete HTML snippet for the hero section',
      'A complete CSS (or Tailwind class) implementation',
      'Notes on any accessibility choices you made (focus states, colour contrast, alt text)',
      'One thing you would push back on the designer about and why',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Paste the code in fenced code blocks. Do not use any framework beyond plain HTML and CSS (or Tailwind classes).',
    rubric: [
      { key: 'accuracy', label: 'Visual Accuracy', description: 'Does the code plausibly render to match the described screenshot?', weight: 30 },
      { key: 'responsive', label: 'Responsive Behaviour', description: 'Is the responsive stacking handled cleanly?', weight: 20 },
      { key: 'a11y', label: 'Accessibility', description: 'Are the accessibility choices deliberate and correct?', weight: 25 },
      { key: 'pushback', label: 'Design Collaboration', description: 'Is the designer-pushback item substantive, not performative?', weight: 25 },
    ],
    skillsProven: ['HTML', 'CSS / Tailwind', 'Responsive design', 'Accessibility', 'Design collaboration'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'marketing-page-production-rebuild',
    categoryId: 'web-development',
    topicId: 'landing-page-rebuild',
    level: 'advanced',
    title: 'Production-Ready Marketing Page Rebuild',
    difficulty: 'Advanced',
    estimatedHours: '4 to 8 hours',
    tagline: 'Rebuild a full marketing page and defend your performance, accessibility, and SEO trade-offs.',
    scenario:
      'A Series A fintech is replacing its marketing site. The existing page loads a 2.4MB hero video on mobile, ships 180KB of render-blocking CSS, and scores 42 on Lighthouse Performance. The engineering lead wants the rebuild to cross 90 on Performance, 100 on Accessibility, and 100 on SEO - without losing the current visual direction. You are the candidate for the frontend role.',
    brief:
      'Plan and implement a rebuild of a four-section marketing page: hero with a product demo, a three-column feature grid, a customer logo strip with testimonials, and a final CTA with a signup form. You do not need to ship a live URL; a single HTML file plus CSS (vanilla or Tailwind) is enough. What you must show is the thinking behind production decisions, not just the code.',
    deliverables: [
      'Full HTML and CSS for the four sections (may be split across files or inline)',
      'A short architecture note: how you handle above-the-fold CSS, font loading, the hero media, and any JavaScript you add',
      'Accessibility audit of your own page: at least 3 specific choices (heading order, landmark regions, form labels, focus management, reduced-motion, colour contrast) with why each matters',
      'SEO plan: meta tags, structured data, semantic outline, and one on-page content decision you would push back on marketing about',
      'Performance budget you set for the page (total KB, LCP target, CLS target) and one trade-off you had to make to stay inside it',
      'What you would measure in production in the first 30 days to know the rebuild actually worked',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task rewards judgement, not volume. A sharp 800-word submission with tight code beats a sprawling 3,000-word one. Show the trade-offs you rejected, not only the ones you took.',
    rubric: [
      { key: 'architecture', label: 'Architecture & Trade-offs', description: 'Are the decisions on CSS delivery, fonts, media, and JS defensible for a production marketing page?', weight: 25 },
      { key: 'performance', label: 'Performance Thinking', description: 'Is the performance budget realistic, and is the LCP/CLS reasoning grounded rather than generic?', weight: 20 },
      { key: 'a11y', label: 'Accessibility Depth', description: 'Do the accessibility choices go beyond checklist items and reflect how real users navigate the page?', weight: 20 },
      { key: 'seo', label: 'SEO & Content Judgment', description: 'Is the SEO plan specific, and is the marketing pushback substantive?', weight: 15 },
      { key: 'measurement', label: 'Measurement Plan', description: 'Would the 30-day metrics actually tell you whether the rebuild succeeded?', weight: 10 },
      { key: 'craft', label: 'Code Craft', description: 'Is the code clean, semantic, and free of dead weight given the stated constraints?', weight: 10 },
    ],
    skillsProven: ['HTML', 'CSS / Tailwind', 'Web performance', 'Core Web Vitals', 'Accessibility', 'Technical SEO', 'Engineering judgment'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-fetch-movie-list',
    categoryId: 'web-development',
    topicId: 'api-data-fetching',
    level: 'beginner',
    title: 'Fetch and Display a Movie List',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Fetch data from a public API and render it as a responsive grid.',
    scenario:
      'A streaming startup wants to build a simple web client to display their top movies. Before building the full app, they want a prototype that fetches the top 20 movies from a public API and renders them nicely on the page.',
    brief:
      'Using React (or vanilla JS), make a GET request to a public movie API (e.g., TMDB or a mock JSON endpoint). Display the title, release year, and poster image for each movie in a responsive grid. Handle the loading state and display a simple error message if the fetch fails.',
    deliverables: [
      'A code snippet of the data fetching logic (e.g., a custom hook or useEffect block)',
      'The component code that renders the grid and handles loading/error states',
      'A brief explanation of how you handle the loading state while waiting for the API',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on clean async/await syntax and proper React state management. Do not over-engineer the CSS, but ensure it does not break on mobile.',
    rubric: [
      { key: 'fetching', label: 'Data Fetching', description: 'Is the API call correctly implemented using fetch or axios?', weight: 30 },
      { key: 'state', label: 'State Management', description: 'Are loading, error, and data states handled correctly?', weight: 30 },
      { key: 'ui', label: 'UI Rendering', description: 'Is the data mapped correctly into a responsive grid?', weight: 20 },
      { key: 'cleanliness', label: 'Code Cleanliness', description: 'Is the code readable and free of obvious memory leaks (e.g., missing dependency arrays)?', weight: 20 },
    ],
    skillsProven: ['REST APIs', 'Async/Await', 'React State', 'Basic CSS Grid'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-search-filter-pagination',
    categoryId: 'web-development',
    topicId: 'api-data-fetching',
    level: 'intermediate',
    title: 'Search, Filter, and Paginate API Data',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Add complex user interactions to a data-heavy dashboard.',
    scenario:
      'An internal tool for an e-commerce company displays thousands of customer orders. The basic list works, but customer support agents are complaining that they cannot find specific orders easily. You need to implement search, status filtering, and pagination without crashing the browser.',
    brief:
      'Extend a basic data fetching component. Add a text input for searching by ID, a dropdown to filter by status (Pending, Shipped, Delivered), and basic next/previous pagination buttons. You must debounce the search input to prevent spamming the API.',
    deliverables: [
      'The React component code managing the search, filter, and pagination state',
      'The debounced search implementation',
      'An explanation of how URL search parameters could be used to make the filters shareable',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume the API supports query parameters like `?search=xyz&status=shipped&page=2`. Show how you construct this URL dynamically based on state.',
    rubric: [
      { key: 'state', label: 'Complex State Management', description: 'Are the multiple filter states managed cleanly without conflicting?', weight: 30 },
      { key: 'debounce', label: 'Debouncing', description: 'Is the search input debounced correctly to limit API calls?', weight: 25 },
      { key: 'url', label: 'URL Sync Concept', description: 'Does the candidate understand how to sync state to the URL?', weight: 20 },
      { key: 'edge-cases', label: 'Edge Cases', description: 'Does the code handle empty states (e.g., "No results found") gracefully?', weight: 25 },
    ],
    skillsProven: ['Advanced React State', 'Debouncing', 'API Query Parameters', 'UX Edge Cases'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-optimistic-updates-caching',
    categoryId: 'web-development',
    topicId: 'api-data-fetching',
    level: 'advanced',
    title: 'Optimistic Updates & Local Caching',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Make an app feel instantly responsive by mastering client-side caching.',
    scenario:
      'You are building a real-time task management app (like Trello). Users are complaining that clicking "Complete Task" feels sluggish because it waits for the server response before updating the UI. The engineering lead wants you to implement optimistic UI updates and local caching to make the app feel instant.',
    brief:
      'Design the data fetching layer for a "Task Dashboard". You do not need to build the full UI. Write the logic (using React Query, SWR, or custom hooks) to: 1) Cache the initial fetch. 2) Optimistically update the cache when a user toggles a task. 3) Roll back the UI if the API request fails.',
    deliverables: [
      'The data fetching and mutation code (e.g., React Query hooks)',
      'The optimistic update and rollback logic',
      'A short architecture note explaining the trade-offs of optimistic updates (e.g., when NOT to use them)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You may use tools like TanStack Query (React Query) or SWR in your code snippet, as they are industry standard for this problem. Focus on the mutation logic.',
    rubric: [
      { key: 'caching', label: 'Caching Strategy', description: 'Is the data cached effectively to prevent redundant background fetches?', weight: 25 },
      { key: 'optimistic', label: 'Optimistic Update Logic', description: 'Does the UI update immediately before the network request finishes?', weight: 30 },
      { key: 'rollback', label: 'Error Handling & Rollback', description: 'Is the previous state correctly restored if the mutation fails?', weight: 25 },
      { key: 'trade-offs', label: 'Architectural Judgment', description: 'Does the candidate understand the risks of optimistic updates (e.g., payment processing)?', weight: 20 },
    ],
    skillsProven: ['Optimistic UI', 'Client-side Caching', 'Data Mutation', 'React Query / SWR', 'Error Recovery'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'auth-static-login-form',
    categoryId: 'web-development',
    topicId: 'auth-flow-implementation',
    level: 'beginner',
    title: 'Build a Secure Login & Signup UI',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Build a pixel-perfect, accessible login and signup form with robust validation.',
    scenario:
      'A new SaaS product needs its entry gates built. The backend is not ready yet, but the design team has handed off the Figma files for the Login and Create Account screens. Your job is to build the frontend forms and make sure users cannot submit invalid data.',
    brief:
      'Build a React (or vanilla HTML/JS) login and signup form. Implement client-side validation: the email must be valid, the password must be at least 8 characters with a number, and the "Confirm Password" field must match. Show clear, accessible error messages inline when validation fails.',
    deliverables: [
      'The component code for both the Login and Signup forms',
      'The validation logic (custom or using a library like Zod / Yup)',
      'A brief note on how you handled accessibility for screen readers (e.g., aria-invalid, aria-describedby)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not worry about submitting the data to a real API, just `console.log` the payload if validation passes. Focus heavily on UX: do errors show immediately or only on submit? Do they clear when the user starts typing?',
    rubric: [
      { key: 'validation', label: 'Validation Logic', description: 'Are the validation rules correct and secure?', weight: 30 },
      { key: 'ux', label: 'User Experience', description: 'Do errors appear and disappear at the right time (not too aggressively)?', weight: 30 },
      { key: 'a11y', label: 'Accessibility', description: 'Can a screen reader user easily understand what went wrong?', weight: 20 },
      { key: 'craft', label: 'Code Craft', description: 'Is the state managed cleanly without excessive boilerplate?', weight: 20 },
    ],
    skillsProven: ['Form Validation', 'React State', 'Accessibility (a11y)', 'UX Design'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'auth-jwt-global-state',
    categoryId: 'web-development',
    topicId: 'auth-flow-implementation',
    level: 'intermediate',
    title: 'Connect a Mock JWT API & Manage State',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Wire up a login form to an API and manage the user session globally.',
    scenario:
      'The backend team has just deployed the `/api/login` endpoint. It accepts an email and password and returns a mock JWT (JSON Web Token) along with the user profile data. You need to connect the login form, store the token securely, and make the user data available to the entire React app.',
    brief:
      'Write the logic to submit credentials to a mock API endpoint. If successful, parse the response, store the JWT (explain where and why), and set the global user state using the React Context API (or a lightweight store like Zustand) so that a "Navbar" component can display "Welcome, [Name]".',
    deliverables: [
      'The API fetch call and error handling logic (e.g., handling 401 Unauthorized)',
      'The React Context provider (or Zustand store) managing the global `user` state',
      'A paragraph defending your choice of where to store the JWT (LocalStorage vs. HttpOnly Cookie) for this specific scenario',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You can mock the API call using a `setTimeout` that resolves with a fake token. Focus on how the global state is updated and consumed.',
    rubric: [
      { key: 'api', label: 'API Integration', description: 'Are loading and error states handled gracefully during the request?', weight: 25 },
      { key: 'state', label: 'Global State', description: 'Is the Context/Store implemented cleanly without causing unnecessary re-renders?', weight: 35 },
      { key: 'security', label: 'Security Awareness', description: 'Does the candidate understand the risks of LocalStorage vs Cookies?', weight: 25 },
      { key: 'craft', label: 'Code Craft', description: 'Is the business logic separated from the UI components?', weight: 15 },
    ],
    skillsProven: ['React Context / Global State', 'API Integration', 'JWT Basics', 'Security Principles'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'auth-oauth-route-guards',
    categoryId: 'web-development',
    topicId: 'auth-flow-implementation',
    level: 'advanced',
    title: 'OAuth, Route Guards, & Token Refresh',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a robust authentication architecture that survives edge cases.',
    scenario:
      'You are the lead frontend engineer for a financial dashboard. Security is paramount. Users log in via an external OAuth provider. The access token expires every 15 minutes, and a silent refresh token must be used to keep them logged in. Furthermore, unauthenticated users must be redirected away from `/dashboard`.',
    brief:
      'Design the authentication architecture. You do not need to build the UI. Write the logic for three critical pieces: 1) A Higher-Order Component (HOC) or wrapper that protects private routes. 2) An Axios interceptor (or fetch wrapper) that automatically catches 401 errors, uses a refresh token to get a new access token, and retries the failed request. 3) The initialization logic that checks if a user is already logged in when they refresh the page.',
    deliverables: [
      'The Route Guard implementation (e.g., `ProtectedRoute.tsx`)',
      'The Axios interceptor or custom fetch wrapper handling the token refresh logic',
      'A short architecture note explaining how you prevent multiple failed requests from triggering multiple refresh calls simultaneously',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task tests your ability to handle complex asynchronous control flows. The interceptor logic is notoriously tricky - walk through your solution carefully.',
    rubric: [
      { key: 'guards', label: 'Route Guards', description: 'Is the routing logic secure and does it prevent flash-of-unauthenticated-content?', weight: 25 },
      { key: 'interceptor', label: 'Token Refresh Logic', description: 'Does the interceptor correctly pause, refresh, and retry failed requests?', weight: 35 },
      { key: 'race', label: 'Race Condition Handling', description: 'Does the architecture address the multiple-request refresh problem?', weight: 25 },
      { key: 'init', label: 'App Initialization', description: 'Is the initial session check robust on hard reloads?', weight: 15 },
    ],
    skillsProven: ['OAuth Flows', 'Axios Interceptors', 'Route Protection', 'Race Condition Management', 'Advanced Authentication'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'cart-basic-state',
    categoryId: 'web-development',
    topicId: 'ecommerce-shopping-cart',
    level: 'beginner',
    title: 'Build a Basic Shopping Cart UI',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create a static shopping cart that calculates totals using React state.',
    scenario:
      'A small boutique clothing brand is launching their first online store. The designer has created the cart slide-out UI, but it currently has hardcoded values. You need to bring it to life so users can see their items, update quantities, and see the correct total price.',
    brief:
      'Build a React cart component. It should accept an array of product objects (id, name, price, quantity, image). Render the list of items, allow the user to increase or decrease the quantity of each item, and automatically calculate the subtotal, a flat shipping fee, and the grand total.',
    deliverables: [
      'The React component code for the Cart and CartItem',
      'The state management logic for updating item quantities and removing items',
      'The math logic for calculating the grand total securely',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on clean, predictable state updates. Never mutate the state array directly - always return a new array when updating quantities.',
    rubric: [
      { key: 'state', label: 'State Updates', description: 'Are the quantity updates immutable and bug-free?', weight: 35 },
      { key: 'math', label: 'Calculations', description: 'Is the total calculated correctly based on the current state?', weight: 30 },
      { key: 'edge', label: 'Edge Cases', description: 'Does the quantity prevent going below 1 (or does it remove the item at 0)?', weight: 20 },
      { key: 'ui', label: 'Component Structure', description: 'Is the UI broken down into sensible sub-components?', weight: 15 },
    ],
    skillsProven: ['React State', 'Array Methods', 'Basic Math Logic', 'Component Design'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'cart-localstorage-persistence',
    categoryId: 'web-development',
    topicId: 'ecommerce-shopping-cart',
    level: 'intermediate',
    title: 'Persist Cart to LocalStorage',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Ensure users do not lose their cart when they refresh the page.',
    scenario:
      'The boutique store is live, but analytics show a huge drop-off. Users are adding items to their cart on their phone, getting distracted, and when they come back later or refresh the page, their cart is empty. You need to persist the cart data locally.',
    brief:
      'Extend a basic React shopping cart to sync with the browser localStorage. When the app loads, it should check for an existing cart and initialize the state. Whenever the cart changes (item added, removed, quantity updated), it must save the new state back to localStorage.',
    deliverables: [
      'The custom hook (e.g., `useCartStorage`) or Context provider managing the persistence logic',
      'The useEffect logic handling the synchronization',
      'A brief explanation of how you handle the Next.js/SSR hydration mismatch error (if applicable)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'If using Next.js or SSR, remember that localStorage is not available on the server. Show how you prevent hydration errors when the server renders an empty cart but the client has items saved.',
    rubric: [
      { key: 'persistence', label: 'Data Persistence', description: 'Does the cart accurately save and restore from LocalStorage?', weight: 35 },
      { key: 'hydration', label: 'SSR Hydration', description: 'Is the candidate aware of and handling SSR hydration mismatches?', weight: 25 },
      { key: 'performance', label: 'Performance', description: 'Is the stringification to LocalStorage optimized (not causing unnecessary lag)?', weight: 20 },
      { key: 'craft', label: 'Hook Design', description: 'Is the logic extracted cleanly into a reusable hook or context?', weight: 20 },
    ],
    skillsProven: ['LocalStorage', 'Custom Hooks', 'SSR Hydration Mismatch', 'State Synchronization'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'cart-backend-sync-stock',
    categoryId: 'web-development',
    topicId: 'ecommerce-shopping-cart',
    level: 'advanced',
    title: 'Backend Sync & Stock Validation',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a production-grade cart that handles server validation and race conditions.',
    scenario:
      'The store is booming, but a new problem has emerged. Users are adding limited-edition items to their cart, keeping them there for days, and trying to check out after the items are actually sold out. You need to sync the local cart with the backend to validate stock in real-time.',
    brief:
      'Design the logic for a cart that syncs with a backend API. When a user opens the cart, it must ping the server to verify that the items are still in stock and the prices have not changed. If an item is out of stock, the UI must alert the user and adjust the total. Write the logic for the validation check and the mock checkout submission.',
    deliverables: [
      'The API fetching logic that validates the cart against the server database',
      'The state reconciliation logic (updating the local cart if the server says an item is out of stock)',
      'The error handling UI states (e.g., "Only 2 left in stock" or "Price updated")',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You are not building the backend, just the frontend consumer of it. Focus on how you handle the asynchronous mismatch between what the user thinks they have and what the server knows is available.',
    rubric: [
      { key: 'validation', label: 'Server Validation', description: 'Does the code successfully ping the server to validate stock and prices?', weight: 30 },
      { key: 'reconciliation', label: 'State Reconciliation', description: 'Does the local state update gracefully when the server returns bad news?', weight: 30 },
      { key: 'ux', label: 'Error UX', description: 'Are the stock errors communicated clearly to the user without breaking the app?', weight: 25 },
      { key: 'race', label: 'Race Conditions', description: 'Is the checkout button disabled while stock validation is happening?', weight: 15 },
    ],
    skillsProven: ['Data Synchronization', 'Asynchronous Validation', 'Race Condition Handling', 'Advanced UX Error States'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'modal-basic-overlay',
    categoryId: 'web-development',
    topicId: 'accessible-modal-dialog',
    level: 'beginner',
    title: 'Build a Basic CSS/JS Modal Overlay',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Create a simple, cleanly styled modal without relying on external UI libraries.',
    scenario:
      'A marketing team wants to add a "Subscribe to Newsletter" pop-up to their blog. The current implementation is just a harsh browser alert(). You need to replace it with a cleanly styled HTML/CSS modal that can be toggled open and closed.',
    brief:
      'Build a basic modal component. It should have a darkened backdrop overlay, a white content box centered on the screen, an "X" button to close it, and a trigger button to open it. Clicking the darkened backdrop should also close the modal.',
    deliverables: [
      'The HTML/JSX structure for the modal and its trigger',
      'The CSS (or Tailwind classes) to handle the fixed positioning, z-index, and centering',
      'The basic state logic (vanilla JS or React useState) to toggle visibility',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on getting the CSS right. The backdrop must cover the entire viewport even if the user scrolls, and the modal box must stay centered.',
    rubric: [
      { key: 'css', label: 'CSS Positioning', description: 'Is the backdrop fixed, covering the viewport, with the correct z-index?', weight: 40 },
      { key: 'state', label: 'State Toggling', description: 'Does the modal open and close reliably?', weight: 30 },
      { key: 'ux', label: 'UX Details', description: 'Does clicking the backdrop (outside the modal box) close it?', weight: 30 },
    ],
    skillsProven: ['CSS Positioning', 'Z-Index Management', 'Basic State Toggling', 'Event Bubbling'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'modal-wai-aria-focus',
    categoryId: 'web-development',
    topicId: 'accessible-modal-dialog',
    level: 'intermediate',
    title: 'WAI-ARIA & Keyboard Accessibility',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Make the modal fully usable for screen readers and keyboard-only users.',
    scenario:
      'The company has just failed an accessibility audit. The modal you built looks great to sighted mouse-users, but screen readers do not know it is open, and keyboard users can accidentally tab to hidden elements behind the modal.',
    brief:
      'Upgrade the modal to meet WAI-ARIA standards. You must: 1) Add the correct `role` and `aria-*` attributes. 2) Implement "Focus Trapping" so that pressing the Tab key cycles only through the modals interactive elements. 3) Ensure the Escape key closes the modal. 4) Return focus to the original trigger button when the modal closes.',
    deliverables: [
      'The updated modal code including all ARIA attributes',
      'The JavaScript logic for the focus trap',
      'The keyboard event listeners (Escape key handling)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus trapping is difficult. Do not use an external library like focus-trap for this exercise - write the logic yourself to prove you understand how the DOM handles focus.',
    rubric: [
      { key: 'aria', label: 'ARIA Attributes', description: 'Are role="dialog", aria-modal="true", and aria-labelledby used correctly?', weight: 25 },
      { key: 'trap', label: 'Focus Trapping', description: 'Does the Tab key correctly loop inside the modal without escaping to the background?', weight: 35 },
      { key: 'keyboard', label: 'Keyboard Navigation', description: 'Does the Escape key work? Is focus restored to the trigger on close?', weight: 25 },
      { key: 'craft', label: 'Code Craft', description: 'Are the event listeners cleaned up properly (e.g., removing the keydown listener when unmounted)?', weight: 15 },
    ],
    skillsProven: ['WAI-ARIA Standards', 'Keyboard Navigation', 'Focus Trapping', 'DOM Event Listeners'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'modal-headless-react-portals',
    categoryId: 'web-development',
    topicId: 'accessible-modal-dialog',
    level: 'advanced',
    title: 'Headless UI & React Portals',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a reusable, headless modal system for a large-scale React application.',
    scenario:
      'The application now has 40 different modals. Developers are copying and pasting the accessibility logic everywhere, leading to bugs. The lead engineer wants you to build a single, highly reusable "Headless" Modal component system that handles the accessibility and positioning, while letting developers inject any design they want.',
    brief:
      'Design a Compound Component API for the modal (e.g., `<Modal>`, `<Modal.Trigger>`, `<Modal.Content>`). Use React Portals to render the modal at the root of the DOM to avoid CSS overflow clipping issues. Manage the shared state between these sub-components using React Context.',
    deliverables: [
      'The complete React code for the Compound Component system (Modal, Trigger, Content, CloseButton)',
      'The React Context implementation linking them together',
      'The React Portal implementation',
      'A short example of how a developer would consume/use this API in a view',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Your goal is developer experience (DX). The API should be intuitive. Make sure to explain why React Portals are necessary for modals in complex DOM trees.',
    rubric: [
      { key: 'api', label: 'Compound Component API', description: 'Is the API intuitive and highly flexible for consuming developers?', weight: 30 },
      { key: 'context', label: 'React Context', description: 'Is the shared open/close state managed elegantly across the sub-components?', weight: 25 },
      { key: 'portals', label: 'React Portals', description: 'Is the modal successfully ported to the document body to escape stacking contexts?', weight: 25 },
      { key: 'dx', label: 'Developer Experience', description: 'Is the implementation abstracted cleanly, hiding the complex accessibility logic from the consumer?', weight: 20 },
    ],
    skillsProven: ['Compound Components', 'React Portals', 'React Context', 'Headless UI Design', 'Developer Experience (DX)'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'perf-image-lazy-loading',
    categoryId: 'web-development',
    topicId: 'performance-optimization',
    level: 'beginner',
    title: 'Optimize Images & Fix Layout Shifts',
    difficulty: 'Beginner',
    estimatedHours: '1 to 2 hours',
    tagline: 'Improve page load time and stop the page from jumping around as it loads.',
    scenario:
      'A photography portfolio website looks beautiful, but it takes 8 seconds to load on a 3G connection and the text jumps around as the massive image files finally render. The client is losing visitors. You need to fix the images without degrading their visual quality.',
    brief:
      'You are provided with a basic HTML page containing 20 high-resolution `<img>` tags. Your task is to refactor the HTML and CSS to: 1) Lazy load the images so only the visible ones load initially. 2) Set explicit dimensions or aspect ratios so the browser can reserve space before the images download (fixing Cumulative Layout Shift). 3) Briefly explain how you would compress and serve modern image formats (like WebP or AVIF).',
    deliverables: [
      'The refactored HTML code with `loading="lazy"` and proper width/height attributes',
      'The CSS (or Tailwind) used to maintain the aspect ratio',
      'A short paragraph explaining your strategy for image formats and compression',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not use any heavy JavaScript libraries for lazy loading; modern browsers support this natively. Focus on preventing Cumulative Layout Shift (CLS).',
    rubric: [
      { key: 'lazy', label: 'Native Lazy Loading', description: 'Is the loading="lazy" attribute used correctly on below-the-fold images?', weight: 30 },
      { key: 'cls', label: 'Preventing CLS', description: 'Are explicit dimensions or aspect-ratio CSS used to reserve space?', weight: 40 },
      { key: 'formats', label: 'Image Formats', description: 'Does the candidate understand modern formats like WebP or AVIF?', weight: 30 },
    ],
    skillsProven: ['HTML Optimization', 'Cumulative Layout Shift (CLS)', 'Native Lazy Loading', 'Responsive Images'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'perf-react-code-splitting',
    categoryId: 'web-development',
    topicId: 'performance-optimization',
    level: 'intermediate',
    title: 'Code-Split a Bloated React App',
    difficulty: 'Intermediate',
    estimatedHours: '2 to 4 hours',
    tagline: 'Reduce the initial JavaScript bundle size by lazily loading non-critical components.',
    scenario:
      'The companys React dashboard takes forever to become interactive (poor Time to Interactive). A bundle analysis reveals that a massive charting library (Chart.js) and a heavy PDF-generation library are being downloaded immediately when the user hits the login screen, even though they are only used deep inside the app.',
    brief:
      'Refactor the provided React routing setup. You need to implement route-level code splitting using `React.lazy` and `Suspense`. Ensure that the Dashboard and Settings routes (which contain the heavy libraries) are separated into their own chunks and only downloaded when the user navigates to them.',
    deliverables: [
      'The refactored `App.jsx` showing the `React.lazy` imports and `Suspense` boundary',
      'A fallback UI component (e.g., a skeleton loader) to show while the chunk is downloading',
      'An explanation of how this improves the First Input Delay (FID) and Time to Interactive (TTI)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Assume a standard React app using React Router. Show exactly where the Suspense boundary goes to ensure a smooth user experience without flashing loading screens excessively.',
    rubric: [
      { key: 'lazy', label: 'React.lazy Implementation', description: 'Are the heavy routes correctly imported using React.lazy?', weight: 35 },
      { key: 'suspense', label: 'Suspense & Fallbacks', description: 'Is the Suspense boundary placed correctly with a sensible fallback UI?', weight: 35 },
      { key: 'metrics', label: 'Performance Knowledge', description: 'Does the candidate correctly explain the impact on FID and TTI?', weight: 30 },
    ],
    skillsProven: ['React Code Splitting', 'React.lazy & Suspense', 'Bundle Optimization', 'Web Performance Metrics'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'perf-ssr-ssg-migration',
    categoryId: 'web-development',
    topicId: 'performance-optimization',
    level: 'advanced',
    title: 'Migrate to SSR / SSG for LCP',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Architect a transition from a slow Single Page App to Next.js for maximum performance.',
    scenario:
      'A high-traffic e-commerce storefront was built as a traditional React Single Page Application (SPA). The marketing team is furious because SEO rankings are dropping, and the Largest Contentful Paint (LCP) is over 5 seconds because the browser has to download a massive JS bundle before it can even request the product data from the API.',
    brief:
      'Write a technical migration plan to move the critical pages (Home, Product Listing, Product Details) to a framework like Next.js. You must decide and justify the rendering strategy (Static Site Generation, Server-Side Rendering, or Incremental Static Regeneration) for each specific page type based on data freshness requirements vs. performance.',
    deliverables: [
      'The chosen rendering strategy for the 1) Home Page, 2) Product Details Page, and 3) User Cart/Checkout, with strong technical justifications',
      'A code snippet showing how the Product Details page would fetch its data (e.g., `getStaticProps` vs `getServerSideProps` or React Server Components)',
      'A strategy for handling the transition without breaking existing URLs (redirects/routing)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This is an architectural task. There is no single "right" answer for the Product Details page - your justification of the trade-offs between SSG/ISR (speed but stale data) and SSR (fresh data but slower TTFB) is what earns points.',
    rubric: [
      { key: 'strategy', label: 'Rendering Strategies', description: 'Are the chosen rendering methods appropriate for the specific needs of each page type?', weight: 35 },
      { key: 'tradeoffs', label: 'Architectural Trade-offs', description: 'Does the candidate deeply understand the trade-offs between TTFB, LCP, and data freshness?', weight: 35 },
      { key: 'code', label: 'Data Fetching Code', description: 'Is the Next.js data fetching syntax correctly applied to support the chosen strategy?', weight: 20 },
      { key: 'seo', label: 'SEO Awareness', description: 'Is the migration plan considerate of SEO impact and URL routing?', weight: 10 },
    ],
    skillsProven: ['Next.js Architecture', 'Server-Side Rendering (SSR)', 'Static Site Generation (SSG)', 'Largest Contentful Paint (LCP)', 'Technical Leadership'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'dashboard-static-layout',
    categoryId: 'web-development',
    topicId: 'interactive-dashboard-layout',
    level: 'beginner',
    title: 'Build a Responsive Dashboard Layout',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Use CSS Grid and Flexbox to build a clean, responsive admin layout.',
    scenario:
      'A local SaaS company is building a new admin portal for their merchants. The designer has provided a layout with a persistent sidebar on desktop, a top navigation bar, and a main content area containing a grid of summary cards and a recent orders table. You need to build the structure.',
    brief:
      'Write the HTML and CSS (or Tailwind) for the dashboard skeleton. On desktop, the sidebar should be fixed to the left. On mobile, the sidebar should disappear behind a hamburger menu toggle, and the summary cards should stack vertically instead of displaying side-by-side.',
    deliverables: [
      'The HTML/JSX structure for the layout (Sidebar, Header, Main Content)',
      'The CSS or Tailwind classes used for the responsive grid and flexbox alignment',
      'The mobile menu toggle logic',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Do not worry about making the data real or adding charts yet. Focus purely on the CSS layout. The table must scroll horizontally on mobile without breaking the page layout.',
    rubric: [
      { key: 'layout', label: 'CSS Grid/Flexbox', description: 'Are Grid and Flexbox used appropriately for the macro layout?', weight: 35 },
      { key: 'responsive', label: 'Mobile Responsiveness', description: 'Does the sidebar collapse cleanly and the grid stack on mobile?', weight: 30 },
      { key: 'table', label: 'Table Overflow', description: 'Is horizontal scrolling handled gracefully for the data table on small screens?', weight: 20 },
      { key: 'craft', label: 'Clean Code', description: 'Is the HTML semantic (e.g., `<aside>`, `<main>`, `<nav>`)?', weight: 15 },
    ],
    skillsProven: ['CSS Grid', 'CSS Flexbox', 'Responsive Design', 'Semantic HTML'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'dashboard-charts-theme',
    categoryId: 'web-development',
    topicId: 'interactive-dashboard-layout',
    level: 'intermediate',
    title: 'Integrate Charts & Dark Mode',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Bring the dashboard to life with data visualization and theming.',
    scenario:
      'The dashboard layout is approved, but the merchants want to visualize their sales data. They also requested a dark mode because many of them check their stats late at night. You need to integrate a charting library and implement a global theme toggle.',
    brief:
      '1) Integrate a charting library (like Recharts or Chart.js) to display a "Revenue Over Time" line chart and a "Sales by Category" pie chart. 2) Implement a robust Dark Mode toggle that saves the user preference to LocalStorage and respects their system OS preference by default.',
    deliverables: [
      'The React component code integrating the two charts with mock data',
      'The Dark Mode state logic and `useEffect` for system preference checking',
      'The CSS variables or Tailwind configuration used to support the dual themes',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The dark mode implementation is the primary test here. Do not just toggle a class on the body; show how you structured your CSS variables or Tailwind config to make theming scalable across the app.',
    rubric: [
      { key: 'charts', label: 'Chart Integration', description: 'Are the charts rendered correctly and do they resize responsively?', weight: 25 },
      { key: 'theme-logic', label: 'Dark Mode Logic', description: 'Does the theme toggle work, save to storage, and check system preferences?', weight: 35 },
      { key: 'theme-css', label: 'Scalable Theming', description: 'Are CSS variables or Tailwind classes used cleanly for the theme swap?', weight: 30 },
      { key: 'ux', label: 'Flash of Unstyled Content', description: 'Does the candidate mention or handle the "flash of light mode" on reload?', weight: 10 },
    ],
    skillsProven: ['Data Visualization (Charts)', 'Theme Toggling (Dark Mode)', 'CSS Variables', 'System Preferences API'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'dashboard-realtime-websockets',
    categoryId: 'web-development',
    topicId: 'interactive-dashboard-layout',
    level: 'advanced',
    title: 'Real-Time Updates via WebSockets',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Transform a static dashboard into a live, real-time monitoring tool.',
    scenario:
      'The SaaS product is pivoting to high-frequency trading analytics. The dashboard must now display a live feed of stock prices and recent transactions. Polling the API every 5 seconds is crashing the server. The backend team has exposed a WebSocket endpoint for a live data stream.',
    brief:
      'Write the frontend architecture to consume a WebSocket data stream. 1) Establish and manage the WebSocket connection securely. 2) Listen for incoming "transaction" events and update the chart data in real-time. 3) Implement a reconnection strategy (exponential backoff) if the socket drops. 4) Ensure you are not causing severe performance issues by re-rendering the entire dashboard 10 times a second.',
    deliverables: [
      'The custom hook (e.g., `useWebSocket`) managing the connection and exponential backoff retry logic',
      'The state management code that appends new data points to the chart without freezing the UI',
      'A short note on how you would throttle or batch incoming messages if they arrive too fast',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on connection stability and render performance. Appending to an array in React state 50 times a second will kill the browser - explain your mitigation strategy.',
    rubric: [
      { key: 'socket', label: 'WebSocket Management', description: 'Is the connection opened, closed, and cleaned up properly on unmount?', weight: 30 },
      { key: 'retry', label: 'Reconnection Strategy', description: 'Is there a robust exponential backoff retry mechanism?', weight: 30 },
      { key: 'perf', label: 'Render Performance', description: 'Is the state updated efficiently (e.g., using functional state updates or batching)?', weight: 25 },
      { key: 'throttle', label: 'Data Throttling', description: 'Does the candidate understand how to handle high-frequency event bursts?', weight: 15 },
    ],
    skillsProven: ['WebSockets', 'Real-time Data', 'Exponential Backoff', 'React Render Performance', 'Data Throttling'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'form-basic-multistep',
    categoryId: 'web-development',
    topicId: 'complex-multistep-form',
    level: 'beginner',
    title: 'Build a Basic 3-Step Wizard',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Split a long form into digestible steps with simple validation.',
    scenario:
      'An insurance company has a massive 20-field quote request form on a single page, and nobody is filling it out. They want you to break it down into a friendly 3-step wizard: 1) Personal Info, 2) Vehicle Details, 3) Review & Submit.',
    brief:
      'Build a React (or vanilla JS) multi-step form. You must manage the state to track which step the user is currently on. Do not allow the user to click "Next" until all required fields on the current step are filled out. Provide a "Back" button to return to previous steps without losing data.',
    deliverables: [
      'The component structure managing the steps (e.g., a switch statement or an array of components)',
      'The state management object holding the unified form data across all steps',
      'The simple validation logic preventing the user from advancing prematurely',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on state preservation. If a user goes from Step 2 back to Step 1, their data in Step 1 must still be there.',
    rubric: [
      { key: 'state', label: 'State Preservation', description: 'Does data persist when navigating backwards and forwards?', weight: 35 },
      { key: 'routing', label: 'Step Logic', description: 'Is the logic for moving between steps clean and bug-free?', weight: 30 },
      { key: 'validation', label: 'Basic Validation', description: 'Are required fields enforced before allowing progression?', weight: 20 },
      { key: 'ux', label: 'UX', description: 'Is there a clear indication of progress (e.g., "Step 1 of 3")?', weight: 15 },
    ],
    skillsProven: ['React State (Unified)', 'Conditional Rendering', 'Basic Form Validation', 'Wizard UX Patterns'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'form-dynamic-validation',
    categoryId: 'web-development',
    topicId: 'complex-multistep-form',
    level: 'intermediate',
    title: 'Dynamic Fields & Zod Validation',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Handle dynamic form fields and complex validation schemas.',
    scenario:
      'The basic wizard was a success, but the business logic has become much more complex. If the user selects "Married", a whole new section for "Spouse Details" must appear. Furthermore, the validation rules are getting out of hand (e.g., age must be > 18 but < 100, zip code must match the selected state).',
    brief:
      'Upgrade the form to use a dedicated validation library (like Zod or Yup) and a form state manager (like React Hook Form or Formik). Implement conditional rendering: fields should appear or disappear based on the answers to previous questions. Ensure the validation schema updates dynamically based on these conditions.',
    deliverables: [
      'The validation schema definition (e.g., the Zod object)',
      'The React component showing the conditional rendering logic',
      'A brief explanation of why integrating a library like React Hook Form improves performance over raw `useState`',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task tests your ability to use industry-standard tools. Do not write custom validation logic for complex rules; rely on the schema library to do the heavy lifting safely.',
    rubric: [
      { key: 'schema', label: 'Schema Design', description: 'Is the Zod/Yup schema robust and correctly structured?', weight: 35 },
      { key: 'dynamic', label: 'Conditional Logic', description: 'Do the dynamic fields render correctly without breaking the unified state?', weight: 30 },
      { key: 'perf', label: 'Form Performance', description: 'Does the candidate understand how React Hook Form prevents excessive re-renders?', weight: 20 },
      { key: 'errors', label: 'Error Handling', description: 'Are validation errors mapped cleanly to the UI?', weight: 15 },
    ],
    skillsProven: ['Zod / Yup', 'React Hook Form', 'Dynamic Validation Schemas', 'Conditional Rendering'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'form-auto-save-drafts',
    categoryId: 'web-development',
    topicId: 'complex-multistep-form',
    level: 'advanced',
    title: 'Auto-Save & Draft Recovery',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Build a bulletproof form that saves progress automatically.',
    scenario:
      'Users are complaining that their browser crashed on Step 3 and they lost all their work. The product manager wants the form to automatically save progress to the backend every time a field is blurred (loses focus), and to restore that draft if the user comes back later.',
    brief:
      'Implement an Auto-Save feature. 1) Write a `useDebounce` or `onBlur` logic to trigger an API save request without spamming the server. 2) Implement an initialization sequence that checks the server for a "draft" upon load and hydrates the form state. 3) Provide visual feedback to the user (e.g., "Saving..." -> "Saved at 10:42 AM").',
    deliverables: [
      'The React code managing the auto-save trigger (debounced or onBlur)',
      'The initialization logic (fetching the draft and hydrating the form library)',
      'The visual indicator logic (handling saving/error states gracefully without blocking the user)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The biggest risk here is a race condition: what if the user types fast and the save requests arrive out of order? Explain how you mitigate this.',
    rubric: [
      { key: 'trigger', label: 'Save Triggering', description: 'Is the save logic efficient (debounced or strictly on blur)?', weight: 30 },
      { key: 'hydration', label: 'Draft Hydration', description: 'Does the form reliably initialize with the saved draft data?', weight: 25 },
      { key: 'race', label: 'Race Conditions', description: 'Does the candidate address out-of-order save requests?', weight: 25 },
      { key: 'feedback', label: 'UX Feedback', description: 'Is the auto-save process transparent but non-blocking to the user?', weight: 20 },
    ],
    skillsProven: ['Debouncing', 'Form Hydration', 'Asynchronous State Sync', 'Race Condition Mitigation'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'crud-basic-api-routes',
    categoryId: 'web-development',
    topicId: 'fullstack-crud-app',
    level: 'beginner',
    title: 'Build a Basic Express/Next.js API',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Create the backend routes to Create, Read, Update, and Delete data.',
    scenario:
      'A local library wants to digitize their book inventory. They need a simple backend API to manage the catalog. For now, they just want to store the data in memory (an array) while they figure out their database strategy.',
    brief:
      'Build a basic REST API using Express.js or Next.js API Routes. Implement four endpoints for a "Book" resource: GET (list all books), POST (add a new book), PUT (update an existing book by ID), and DELETE (remove a book by ID). Keep the data in a simple JavaScript array.',
    deliverables: [
      'The API route files handling the GET, POST, PUT, and DELETE requests',
      'The basic validation logic (e.g., ensuring a POST request has a "title" and "author")',
      'A README snippet explaining how to test the endpoints using a tool like Postman or curl',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus on returning the correct HTTP status codes (e.g., 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).',
    rubric: [
      { key: 'routes', label: 'HTTP Methods', description: 'Are the GET, POST, PUT, and DELETE methods implemented correctly?', weight: 35 },
      { key: 'status', label: 'Status Codes', description: 'Does the API return semantically correct HTTP status codes?', weight: 30 },
      { key: 'validation', label: 'Basic Validation', description: 'Does the API reject invalid or malformed requests?', weight: 20 },
      { key: 'postman', label: 'Testing Guidance', description: 'Are the testing instructions clear and reproducible?', weight: 15 },
    ],
    skillsProven: ['RESTful API Design', 'HTTP Status Codes', 'Basic Routing', 'Server-side Validation'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'crud-database-integration',
    categoryId: 'web-development',
    topicId: 'fullstack-crud-app',
    level: 'intermediate',
    title: 'Integrate a Database & ORM',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Connect the backend to a real database and write relational queries.',
    scenario:
      'The library approved your API, but now they need real data persistence. They also want to track "Authors" separately from "Books". You need to connect a database, define the schema, and update the API to perform relational queries.',
    brief:
      'Integrate a PostgreSQL or SQLite database using an ORM like Prisma or Drizzle (or raw SQL). 1) Define the schema for `Author` (1-to-many) `Book`. 2) Write the logic to fetch a list of all books, including the author name in the response (a JOIN operation). 3) Write the logic to create a new book associated with an existing author.',
    deliverables: [
      'The schema definition file (e.g., `schema.prisma` or SQL migration file)',
      'The updated GET route containing the relational query (JOIN)',
      'The updated POST route demonstrating how to insert relational data safely',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need to host the database. Submit the code for the schema and the specific ORM/SQL queries you use to satisfy the relational requirements.',
    rubric: [
      { key: 'schema', label: 'Database Schema', description: 'Is the 1-to-many relationship correctly defined with foreign keys?', weight: 30 },
      { key: 'queries', label: 'Relational Queries', description: 'Is the JOIN operation (or ORM equivalent) implemented efficiently?', weight: 35 },
      { key: 'safety', label: 'SQL Injection Prevention', description: 'If using raw SQL, are parameterized queries used? If ORM, is data validated?', weight: 20 },
      { key: 'craft', label: 'Error Handling', description: 'Does the API handle database connection errors gracefully?', weight: 15 },
    ],
    skillsProven: ['Database Schema Design', 'Relational Databases (SQL)', 'ORMs (Prisma / Drizzle)', 'Data Integrity'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'crud-frontend-integration-mutations',
    categoryId: 'web-development',
    topicId: 'fullstack-crud-app',
    level: 'advanced',
    title: 'Frontend Integration & Mutations',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Connect the React frontend to the API and manage asynchronous server state.',
    scenario:
      'The database is live, and the API is solid. Now you need to build the librarian dashboard. The librarians are fast typists, and they expect the UI to update instantly when they add or delete a book, even if the database is on a slow connection.',
    brief:
      'Build the React frontend to consume the API. You must implement a data-fetching library (like React Query or SWR) or use Next.js Server Actions. Build the UI to List, Add, and Delete books. Crucially, you must implement Optimistic UI Updates so the interface feels instantaneous, and gracefully roll back the UI if the API request fails.',
    deliverables: [
      'The React component(s) rendering the list and the add/delete buttons',
      'The data-fetching and mutation logic (e.g., the `useMutation` hook)',
      'The specific code handling the Optimistic Update and the error rollback',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'This task brings the whole stack together. The focus is on the "seam" between the frontend and the backend. How do you handle loading states, success toasts, and network failures?',
    rubric: [
      { key: 'integration', label: 'Full-Stack Integration', description: 'Does the frontend correctly communicate with the REST API / Server Actions?', weight: 30 },
      { key: 'optimistic', label: 'Optimistic Updates', description: 'Does the UI update immediately before the network confirms the success?', weight: 35 },
      { key: 'rollback', label: 'Error Rollbacks', description: 'Is the UI state correctly reverted if the network request fails?', weight: 20 },
      { key: 'ux', label: 'Loading & Error States', description: 'Are loading spinners and error toast notifications implemented well?', weight: 15 },
    ],
    skillsProven: ['Full-Stack Integration', 'React Query / SWR', 'Optimistic UI', 'Asynchronous Error Handling'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-embed-maps',
    categoryId: 'web-development',
    topicId: 'third-party-api-integration',
    level: 'beginner',
    title: 'Embed an Interactive Map',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Read external documentation to embed a third-party widget safely.',
    scenario:
      'A local coffee shop needs a "Find Us" page. They want an interactive map showing their three locations, rather than just a static image. You need to use the Google Maps (or Mapbox) API to render this.',
    brief:
      'Use a mapping API to render an interactive map centered on a specific city. Place three custom markers on the map representing the coffee shop locations. When a user clicks a marker, a small info window should pop up showing the address.',
    deliverables: [
      'The React component initializing the map and markers',
      'A brief explanation of how you secured your API key (e.g., using environment variables and HTTP referrer restrictions)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The hardest part of this task for beginners is often just getting the API key and reading the docs. Prove you can follow external documentation.',
    rubric: [
      { key: 'integration', label: 'API Integration', description: 'Is the map rendered and are the markers correctly placed using the SDK?', weight: 40 },
      { key: 'interaction', label: 'Interactivity', description: 'Do the info windows open when markers are clicked?', weight: 30 },
      { key: 'security', label: 'API Key Security', description: 'Does the candidate understand how to prevent API key theft?', weight: 30 },
    ],
    skillsProven: ['External SDKs', 'Documentation Parsing', 'API Key Security'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-stripe-checkout',
    categoryId: 'web-development',
    topicId: 'third-party-api-integration',
    level: 'intermediate',
    title: 'Implement Stripe Checkout',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Build a secure payment flow using the industry standard Stripe API.',
    scenario:
      'The coffee shop wants to sell bags of beans online. You need to build the checkout button. When clicked, it should redirect the user to a secure Stripe Checkout session, and then return them to a "Success" or "Cancel" page on your site.',
    brief:
      'Build a Next.js (or Express) backend route that creates a Stripe Checkout Session using the Stripe Node.js SDK. Then, build the frontend React button that calls this route and redirects the user to the Stripe hosted payment page. Handle the redirect back to your app.',
    deliverables: [
      'The Backend route code that initializes the `stripe.checkout.sessions.create` call',
      'The Frontend code handling the button click and the redirect',
      'An explanation of why prices should be calculated on the backend, not the frontend',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Security is paramount. Never pass the final price from the client to the server; the server must look up the price based on the product ID to prevent tampering.',
    rubric: [
      { key: 'backend', label: 'Backend Session Creation', description: 'Is the Stripe session created correctly with success/cancel URLs?', weight: 40 },
      { key: 'frontend', label: 'Frontend Redirect', description: 'Does the client successfully redirect to the Stripe URL?', weight: 30 },
      { key: 'security', label: 'Price Tampering Security', description: 'Is the candidate aware of the risks of client-side pricing?', weight: 30 },
    ],
    skillsProven: ['Stripe API', 'Payment Gateways', 'Backend/Frontend Handoff', 'E-commerce Security'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'api-stripe-webhooks',
    categoryId: 'web-development',
    topicId: 'third-party-api-integration',
    level: 'advanced',
    title: 'Handle Stripe Webhooks securely',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Process asynchronous events securely to fulfill digital orders.',
    scenario:
      'The store is now selling a digital e-book. When a user pays via Stripe, you cannot just fulfill the order on the "Success" page, because users can bookmark that page and visit it without paying. You must listen for Stripe to securely ping your server (a webhook) to confirm the payment before emailing the e-book.',
    brief:
      'Write a Node.js/Next.js backend webhook handler. It must receive the POST request from Stripe, verify the cryptographic signature to ensure the request is actually from Stripe, parse the `checkout.session.completed` event, and run the mock fulfillment logic.',
    deliverables: [
      'The webhook route code, including the raw body parsing and `stripe.webhooks.constructEvent` verification logic',
      'The switch statement handling the specific event type',
      'A short explanation of why webhooks require raw bodies instead of JSON parsed bodies',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Webhook signature verification is notoriously tricky because it requires the raw, unparsed HTTP request body. Show that you know how to configure your server to extract this.',
    rubric: [
      { key: 'verification', label: 'Signature Verification', description: 'Is the `constructEvent` method used correctly to prevent spoofing?', weight: 40 },
      { key: 'raw-body', label: 'Raw Body Parsing', description: 'Does the candidate understand how to capture the raw request body?', weight: 30 },
      { key: 'fulfillment', label: 'Event Handling', description: 'Is the specific success event parsed and handled correctly?', weight: 30 },
    ],
    skillsProven: ['Webhooks', 'Cryptographic Signatures', 'Asynchronous Fulfillment', 'Server Configuration'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'state-custom-audio-player',
    categoryId: 'web-development',
    topicId: 'state-machine-logic',
    level: 'beginner',
    title: 'Build a Custom Audio Player',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Manage the intersecting states of HTML5 media elements.',
    scenario:
      'A podcaster wants a custom audio player on their blog that matches their brand. The native browser `<audio>` tag controls are ugly and inconsistent across browsers. You need to build custom UI controls that tie into the underlying audio element.',
    brief:
      'Create a React component that wraps an `<audio>` tag. Build custom buttons for Play/Pause, a progress bar that updates as the audio plays, and a volume slider. You must manage React state (isPlaying, currentTime, duration) and sync it with the native HTMLMediaElement events.',
    deliverables: [
      'The React component code with the `useRef` pointing to the audio element',
      'The event listeners (`onTimeUpdate`, `onLoadedMetadata`) that sync the native API with React state',
      'The UI elements that trigger changes (e.g., clicking Play calls `audioRef.current.play()`)',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'The challenge here is two-way binding: The UI must update when the audio plays natively, and the audio must change when the user interacts with the UI (like dragging the progress bar).',
    rubric: [
      { key: 'sync', label: 'State Synchronization', description: 'Is React state kept cleanly in sync with the native DOM element?', weight: 35 },
      { key: 'controls', label: 'Playback Controls', description: 'Do the Play/Pause buttons work and toggle correctly?', weight: 30 },
      { key: 'progress', label: 'Progress Tracking', description: 'Does the progress bar update accurately based on `currentTime`?', weight: 35 },
    ],
    skillsProven: ['HTML5 Media API', 'React `useRef`', 'Two-way State Binding', 'Event Listeners'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'state-usereducer-wizard',
    categoryId: 'web-development',
    topicId: 'state-machine-logic',
    level: 'intermediate',
    title: 'Complex State with useReducer',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 5 hours',
    tagline: 'Upgrade a messy cluster of `useState` hooks into a clean reducer.',
    scenario:
      'You inherited a data-table component that has 8 different `useState` hooks (`data`, `isLoading`, `error`, `sortBy`, `sortDirection`, `filterText`, `page`, `selectedRows`). Updating one often requires updating three others, causing rendering bugs and impossible states (like `isLoading: true` but `error: "Failed"`).',
    brief:
      'Refactor the provided component state logic. Replace the multiple `useState` calls with a single `useReducer` (or Redux slice). Define clear action types (e.g., `FETCH_START`, `FETCH_SUCCESS`, `SET_SORT`) that update the state in a predictable, transactional way.',
    deliverables: [
      'The initial state object and the reducer function handling the actions',
      'A code snippet showing how the component dispatches these actions',
      'An explanation of how this approach prevents "impossible states"',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Focus heavily on the reducer function. Make sure that when `FETCH_START` is dispatched, previous errors are cleared and data is handled appropriately.',
    rubric: [
      { key: 'reducer', label: 'Reducer Logic', description: 'Is the reducer function pure and does it handle state transitions correctly?', weight: 40 },
      { key: 'actions', label: 'Action Design', description: 'Are the action types semantic and well-structured?', weight: 30 },
      { key: 'impossible', label: 'Preventing Impossible States', description: 'Does the refactor successfully prevent conflicting states?', weight: 30 },
    ],
    skillsProven: ['React `useReducer`', 'State Architecture', 'Action Dispatching', 'Bug Prevention'],
    relatedRoadmapIds: ['web-developer'],
  },
  {
    id: 'state-xstate-checkout',
    categoryId: 'web-development',
    topicId: 'state-machine-logic',
    level: 'advanced',
    title: 'Finite State Machines (XState)',
    difficulty: 'Advanced',
    estimatedHours: '4 to 6 hours',
    tagline: 'Use mathematical state machines to build bulletproof logic flows.',
    scenario:
      'An enterprise e-commerce company is losing millions of dollars because their custom checkout flow has hidden bugs. Users are somehow clicking "Submit Payment" twice, or navigating to the "Success" page while the payment is still processing. You need to rewrite the checkout logic using a strict Finite State Machine.',
    brief:
      'Design a Finite State Machine for a checkout flow. It must have states like `idle`, `validating_cart`, `processing_payment`, `success`, and `error`. You must define the exact events (transitions) that allow movement between these states. You can use a library like XState, or write a strict custom implementation.',
    deliverables: [
      'The state machine configuration (the states, events, and transitions)',
      'The logic that explicitly rejects invalid transitions (e.g., ignoring a "SUBMIT" event if currently in `processing_payment`)',
      'A short architectural defense of why Finite State Machines are better than boolean flags for critical flows',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'You do not need to build the UI, just the logic layer. Using XState syntax is highly recommended as it is the industry standard for this pattern.',
    rubric: [
      { key: 'machine', label: 'State Machine Design', description: 'Are the states and transitions logically sound and complete?', weight: 35 },
      { key: 'guards', label: 'Transition Guards', description: 'Does the machine successfully prevent invalid actions based on current state?', weight: 35 },
      { key: 'architecture', label: 'Architectural Judgment', description: 'Does the candidate articulate the value of FSMs over boolean flags?', weight: 30 },
    ],
    skillsProven: ['Finite State Machines (FSM)', 'XState', 'Enterprise Architecture', 'Deterministic Logic'],
    relatedRoadmapIds: ['web-developer'],
  },
];
