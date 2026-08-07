import { PortfolioTopicSeo } from './types';

export const webDevelopmentTopicSeo: Record<string, PortfolioTopicSeo> = {
  'web-development/auth-flow-implementation': {
    categoryId: 'web-development',
    topicId: 'auth-flow-implementation',
    overviewTitle: 'Mastering Authentication Flows in Web Development',
    overviewBody:
      'Authentication is one of the most critical security boundaries in web development. Hiring managers check whether you understand secure session storage (HTTP-only cookies vs localStorage), CSRF prevention, JWT token expiration, password hashing, and client-side route guards. Completing an authentication brief proves you can handle sensitive user data safely.',
    deliverables: [
      {
        title: '1. Secure Auth Architecture Plan',
        desc: 'A markdown document outlining your chosen auth pattern (JWT / Sessions), token storage strategy, CSRF protection, and error handling.',
      },
      {
        title: '2. Functional React/Next.js Auth Components',
        desc: 'Production-ready Login, Register, and Password Reset UI components with real-time form validation and loading/error states.',
      },
      {
        title: '3. Route Guard & Middleware Implementation',
        desc: 'Protected route wrapper or Next.js middleware preventing unauthorized access to private dashboard pages.',
      },
    ],
    faqs: [
      {
        question: 'Why should I store JWTs in HTTP-only cookies instead of localStorage?',
        answer:
          'Storing JWT tokens in localStorage makes them vulnerable to Cross-Site Scripting (XSS) attacks. HTTP-only cookies cannot be accessed by client-side JavaScript, significantly reducing XSS token theft risks.',
      },
      {
        question: 'What is the difference between authentication and authorization?',
        answer:
          'Authentication verifies who a user is (e.g. verifying email and password), whereas authorization determines what permissions or resources an authenticated user is allowed to access (e.g. admin vs subscriber roles).',
      },
      {
        question: 'Should my authentication portfolio project use OAuth or NextAuth / Supabase Auth?',
        answer:
          'Demonstrating custom JWT handling or using modern authentication providers like NextAuth.js, Supabase Auth, or Firebase Auth are both valid. The key is proving you handle session lifecycle and token refreshment securely.',
      },
    ],
  },

  'web-development/accessible-modal-dialog': {
    categoryId: 'web-development',
    topicId: 'accessible-modal-dialog',
    overviewTitle: 'Building Fully Accessible Modal Dialogs & Focus Traps',
    overviewBody:
      'Modal dialogs are a common UI pattern, but poorly implemented modals frequently fail accessibility compliance. Hiring managers look for frontend engineers who understand WAI-ARIA standards, focus trapping, keyboard navigation, and DOM portaling so assistive technologies can read modal content effortlessly.',
    deliverables: [
      {
        title: '1. WAI-ARIA Accessibility Specification',
        desc: 'Documentation detailing focus trap logic, role="dialog", aria-modal="true", aria-labelledby, and keyboard event handling.',
      },
      {
        title: '2. Accessible React Modal Component',
        desc: 'Reusable Modal component utilizing React Portals, trap focus management, and automatic restoration on close.',
      },
      {
        title: '3. Keyboard & Screen Reader Test Log',
        desc: 'A verification log documenting Tab, Shift+Tab, and Escape key behavior alongside screen reader announcements.',
      },
    ],
    faqs: [
      {
        question: 'What happens if a modal does not trap keyboard focus?',
        answer:
          'Without a focus trap, keyboard users navigating via Tab can move focus behind the modal backdrop into underlying page content, breaking the user experience for blind or vision-impaired users.',
      },
      {
        question: 'Why should modals use React Portals?',
        answer:
          'React Portals render modal DOM nodes outside the parent element component hierarchy (usually directly inside document.body), avoiding CSS z-index stack collisions and overflow clipping.',
      },
      {
        question: 'Is the native HTML <dialog> element better than custom React portals?',
        answer:
          'The native <dialog> element provides built-in focus trapping and showModal() backdrop support. However, custom React portal implementations are often required for advanced animation control and legacy browser fallbacks.',
      },
    ],
  },

  'web-development/api-data-fetching': {
    categoryId: 'web-development',
    topicId: 'api-data-fetching',
    overviewTitle: 'Robust API Data Fetching, Caching & Error Handling',
    overviewBody:
      'Production web applications must handle asynchronous data loading gracefully. Employers look for developers who manage loading states, race conditions, stale-while-revalidate caching, automatic retries, and user-friendly error boundaries without crashing the user interface.',
    deliverables: [
      {
        title: '1. Data Fetching & Caching Strategy Doc',
        desc: 'Architectural breakdown comparing custom fetch hooks vs TanStack Query (React Query) and SWR caching mechanisms.',
      },
      {
        title: '2. Custom Hook & Data Fetching Module',
        desc: 'TypeScript custom hook featuring loading indicators, refetching on window focus, optimistic updates, and exponential backoff.',
      },
      {
        title: '3. Error Boundary & Skeleton UI Demo',
        desc: 'Skeleton loader component and React Error Boundary wrapping the data grid during network failures or API rate limiting.',
      },
    ],
    faqs: [
      {
        question: 'What is Stale-While-Revalidate (SWR) caching?',
        answer:
          'SWR is a HTTP cache invalidation strategy where the client first returns cached (stale) data immediately, then dispatches a fetch request (revalidates) in the background to update the cache.',
      },
      {
        question: 'How do you prevent race conditions during fast search inputs?',
        answer:
          'Race conditions occur when an earlier API request resolves after a later request. You prevent this using AbortController signals to cancel pending fetch calls when query state changes, or debouncing input handlers.',
      },
      {
        question: 'Why use TanStack Query instead of plain useEffect + fetch?',
        answer:
          'Plain useEffect fetches lack built-in request deduplication, cache sharing across components, automatic background revalidation, retry mechanisms, and pagination state management.',
      },
    ],
  },

  'web-development/complex-multistep-form': {
    categoryId: 'web-development',
    topicId: 'complex-multistep-form',
    overviewTitle: 'Architecting Complex Multi-Step Forms & Form Validation',
    overviewBody:
      'Multi-step forms (such as onboarding flows, loan applications, or checkout wizards) require careful state persistence, step validation, and progress tracking. Engineering leads evaluate your ability to maintain form state across steps, validate schemas using Zod or Yup, and save unsubmitted drafts.',
    deliverables: [
      {
        title: '1. Form Architecture & State Machine Spec',
        desc: 'Blueprint detailing step transitions, global vs step-level validation, and session draft persistence.',
      },
      {
        title: '2. Multi-Step Form Wizard Component',
        desc: 'React Hook Form wizard with Zod schema validation, dynamic field arrays, and accessible step indicator UI.',
      },
      {
        title: '3. Draft Recovery & Submission Test Suite',
        desc: 'Demonstration of auto-saving unsubmitted inputs to sessionStorage and handling backend validation errors.',
      },
    ],
    faqs: [
      {
        question: 'Should multi-step form state be stored in URL search parameters?',
        answer:
          'Storing the active step step=2 in URL search parameters allows users to bookmark or share wizard progress without exposing sensitive user inputs in the URL.',
      },
      {
        question: 'How do you validate individual steps before allowing users to proceed?',
        answer:
          'Libraries like React Hook Form paired with Zod allow trigger("fieldName") step-level validation. If step inputs fail validation rules, step transition is blocked and inline errors are focused.',
      },
      {
        question: 'What is the best way to handle form draft recovery?',
        answer:
          'Draft state can be debounced and written to localStorage or sessionStorage. On form mount, a draft restoration banner asks users if they want to resume their saved progress.',
      },
    ],
  },

  'web-development/ecommerce-shopping-cart': {
    categoryId: 'web-development',
    topicId: 'ecommerce-shopping-cart',
    overviewTitle: 'E-Commerce Shopping Cart State & Payment Integration',
    overviewBody:
      'Shopping carts require reliable client-side state management, persistence across page refreshes, real-time total calculations, stock checks, and secure payment checkout flows. Demonstrating a clean cart architecture proves readiness for high-volume commercial web applications.',
    deliverables: [
      {
        title: '1. Cart State & Data Flow Specification',
        desc: 'Data flow model defining item additions, quantity modifications, promo code application, and tax calculations.',
      },
      {
        title: '2. Shopping Cart & Drawer Components',
        desc: 'Interactive cart drawer with item quantity controls, price subtotal updates, persistent local storage, and slide-over UI.',
      },
      {
        title: '3. Stripe Payment Gateway Checkout Handler',
        desc: 'Stripe Checkout API integration or server-side PaymentIntent handler for processing secure transactions.',
      },
    ],
    faqs: [
      {
        question: 'How do you prevent client-side price manipulation in e-commerce carts?',
        answer:
          'Prices rendered in the browser UI should never be trusted during checkout. Client carts submit item IDs and quantities to the server; the backend recalculates official prices from the database before generating Stripe payment sessions.',
      },
      {
        question: 'How do you synchronize cart state across multiple open browser tabs?',
        answer:
          'Listening to window.addEventListener("storage", callback) allows tab cart states to update instantly whenever a user modifies cart items in another open tab.',
      },
      {
        question: 'Should guest carts be merged when a user logs in?',
        answer:
          'Yes, best practice is to read local guest cart items upon authentication and trigger a server mutation merging anonymous guest items into the user’s account cart.',
      },
    ],
  },

  'web-development/fullstack-crud-app': {
    categoryId: 'web-development',
    topicId: 'fullstack-crud-app',
    overviewTitle: 'Building Production-Grade Fullstack CRUD Applications',
    overviewBody:
      'Fullstack CRUD (Create, Read, Update, Delete) applications test your ability to connect frontend interfaces with server databases securely. Recruiters look for structured REST or GraphQL APIs, ORM database integration (Prisma, Drizzle), input sanitization, optimistic updates, and pagination.',
    deliverables: [
      {
        title: '1. Database ERD & API Endpoint Design',
        desc: 'Entity Relationship Diagram (ERD) and OpenAPI/REST route spec defining request/response structures.',
      },
      {
        title: '2. Fullstack Next.js Server Actions / API Routes',
        desc: 'Database queries using Prisma or Drizzle ORM featuring input validation, error handling, and authorization checks.',
      },
      {
        title: '3. Dynamic Data Grid & Modal Editor UI',
        desc: 'Data table UI with sorting, filtering, server-side pagination, optimistic UI updates, and confirmation modals.',
      },
    ],
    faqs: [
      {
        question: 'What are the advantages of Next.js Server Actions over traditional REST APIs?',
        answer:
          'Next.js Server Actions allow client components to invoke server-side database functions directly without manually writing fetch boilerplate, while benefiting from automatic POST request handling and progressive enhancement.',
      },
      {
        question: 'Why is input validation essential on both client and server?',
        answer:
          'Client validation provides instant UI feedback to users, but can be bypassed by malicious actors. Server-side validation (using Zod) guarantees database integrity and prevents injection attacks.',
      },
      {
        question: 'How does optimistic UI updating improve user experience?',
        answer:
          'Optimistic UI updates immediately modify the browser UI assuming server success. If the database update fails, the UI automatically rolls back to previous state and displays an error alert.',
      },
    ],
  },

  'web-development/interactive-dashboard-layout': {
    categoryId: 'web-development',
    topicId: 'interactive-dashboard-layout',
    overviewTitle: 'Designing Responsive Interactive Dashboard Layouts',
    overviewBody:
      'Dashboards require clean UI composition, responsive CSS layouts, data visualization widgets, theme switching, and collapsible sidebars. Tech leads look for developers who can build fast, component-driven layouts that stay performant when rendering real-time data visualisations.',
    deliverables: [
      {
        title: '1. Responsive Dashboard Layout Blueprint',
        desc: 'Grid layout architecture specifying responsive mobile, tablet, and desktop viewports with CSS Grid / Flexbox.',
      },
      {
        title: '2. Interactive Data Visualization Widgets',
        desc: 'Chart components (Recharts / Chart.js) with tooltips, filter dropdowns, stat metric cards, and responsive container resizing.',
      },
      {
        title: '3. Theme Provider & Collapsible Sidebar Handler',
        desc: 'Dark/Light mode state toggle persistence and accessible collapsible sidebar navigation component.',
      },
    ],
    faqs: [
      {
        question: 'How do you keep heavy chart visualisations performant on mobile screens?',
        answer:
          'Charts should be wrapped in ResponsiveContainer components, use debounced resize listeners, and employ canvas rendering (Chart.js) over thousands of individual SVG DOM nodes when rendering heavy datasets.',
      },
      {
        question: 'What is the best way to handle dark mode without flash of unstyled theme (FOUC)?',
        answer:
          'Injecting an inline blocking script in the HTML <head> that reads theme preferences from localStorage or prefers-color-scheme before React mounts prevents white flash on initial load.',
      },
      {
        question: 'Should dashboard sidebar navigation use CSS transforms or grid columns?',
        answer:
          'For mobile viewports, sidebars should overlay content using CSS transform: translateX() for 60fps animations. On desktop, CSS Grid grid-template-columns enables clean content reflow.',
      },
    ],
  },

  'web-development/landing-page-rebuild': {
    categoryId: 'web-development',
    topicId: 'landing-page-rebuild',
    overviewTitle: 'High-Conversion Responsive Landing Page Engineering',
    overviewBody:
      'Landing pages are the primary conversion driver for tech products. Rebuilding a high-conversion landing page tests your mastery of semantic HTML5, CSS layout precision, responsive breakpoints, font & image performance optimization, and conversion-focused Call-to-Action (CTA) design.',
    deliverables: [
      {
        title: '1. Responsive Layout & Typography Spec',
        desc: 'Fluid layout design system defining typography scale, mobile-to-desktop breakpoints, and spacing variables.',
      },
      {
        title: '2. Production Landing Page Code',
        desc: 'Pixel-perfect, responsive landing page featuring hero section, feature cards, social proof testimonials, and pricing table.',
      },
      {
        title: '3. Lighthouse Audit & Optimization Report',
        desc: 'Performance audit achieving 90+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.',
      },
    ],
    faqs: [
      {
        question: 'Why is mobile-first CSS development recommended for landing pages?',
        answer:
          'Mobile-first CSS ensures light base styles for mobile networks before adding min-width media queries for larger displays, improving mobile page load times and Google indexing priority.',
      },
      {
        question: 'How does image optimization affect hero section LCP scores?',
        answer:
          'Using modern WebP/AVIF image formats with explicit priority loading flags prevents layout shifts and guarantees fast Largest Contentful Paint (LCP) rendering on slow mobile connections.',
      },
      {
        question: 'What semantic HTML elements should be used on landing pages?',
        answer:
          'Use <header>, <main>, <section> for logical feature blocks, <article> for testimonials/reviews, <aside> for highlight callouts, and <footer> for copyright and footer links.',
      },
    ],
  },

  'web-development/performance-optimization': {
    categoryId: 'web-development',
    topicId: 'performance-optimization',
    overviewTitle: 'Frontend Performance & Core Web Vitals Optimization',
    overviewBody:
      'Page speed directly impacts user retention and search engine rankings. Mastering performance optimization requires diagnosing Core Web Vitals (LCP, INP, CLS), implementing code splitting, eliminating unused JavaScript bundles, and optimizing web font and image delivery.',
    deliverables: [
      {
        title: '1. Core Web Vitals Bottleneck Audit',
        desc: 'Detailed Chrome DevTools Performance & Web Vitals audit identifying script execution delays and layout shifts.',
      },
      {
        title: '2. Code Splitting & Asset Optimization Patch',
        desc: 'Implementation of dynamic imports (next/dynamic), image format optimization, font subsetting, and tree-shaking.',
      },
      {
        title: '3. Post-Optimization Benchmark Report',
        desc: 'Before-and-after performance metrics comparison documenting LCP, INP, and CLS improvements.',
      },
    ],
    faqs: [
      {
        question: 'What is Interaction to Next Paint (INP) and how do you improve it?',
        answer:
          'INP measures responsiveness to user interactions. You improve INP by splitting long JavaScript tasks, offloading heavy computations to Web Workers, and minimizing main thread blocking calls.',
      },
      {
        question: 'How do you prevent Cumulative Layout Shift (CLS)?',
        answer:
          'CLS is prevented by specifying aspect-ratio or explicit width/height attributes on images and videos, reserving space for dynamic ad banners, and using font-display: swap with matched fallback metrics.',
      },
      {
        question: 'When should you use dynamic imports (React.lazy / next/dynamic)?',
        answer:
          'Dynamic imports should be used for heavy components not visible in the initial viewport (such as modals, chart libraries, or rich text editors) to shrink initial JavaScript bundle downloads.',
      },
    ],
  },

  'web-development/state-machine-logic': {
    categoryId: 'web-development',
    topicId: 'state-machine-logic',
    overviewTitle: 'Deterministic UI State Management with Finite State Machines',
    overviewBody:
      'Complex UI components (such as audio players, checkout flows, or multi-step async operations) often break when state is managed using loosely coupled boolean flags. Finite State Machines (FSMs) eliminate impossible UI states by enforcing explicit state nodes and deterministic transitions.',
    deliverables: [
      {
        title: '1. State Machine Transition Diagram',
        desc: 'Visual chart mapping state nodes (idle, loading, success, error), allowed events, and guard conditions.',
      },
      {
        title: '2. XState / Custom Reducer FSM Implementation',
        desc: 'Fully typed state machine using XState or React useReducer managing complex state transitions cleanly.',
      },
      {
        title: '3. Edge Case & Invalid Event Test Suite',
        desc: 'Unit test suite verifying that invalid events dispatched during inappropriate states are ignored deterministically.',
      },
    ],
    faqs: [
      {
        question: 'Why are Finite State Machines superior to multiple boolean flags like isLoading / isError?',
        answer:
          'Multiple boolean flags allow illegal combinations (e.g. isLoading: true AND isError: true simultaneously). State machines permit exactly one active state node at a time, eliminating impossible UI states.',
      },
      {
        question: 'What is a state guard condition in XState?',
        answer:
          'A guard is a conditional predicate function that must evaluate to true before a state transition is allowed to execute.',
      },
      {
        question: 'Should all React components use state machines?',
        answer:
          'No. Simple UI components with independent boolean toggles (e.g. tooltip visibility) do not require state machines. FSMs are best reserved for multi-step workflows, async pipelines, and media players.',
      },
    ],
  },

  'web-development/technical-seo-core-web-vitals': {
    categoryId: 'web-development',
    topicId: 'technical-seo-core-web-vitals',
    overviewTitle: 'Technical SEO Architecture & Structured Data (JSON-LD)',
    overviewBody:
      'Technical SEO guarantees that web pages can be crawled, parsed, and indexed effectively by search engines. Tech companies require developers who understand dynamic metadata tags, OpenGraph previews, canonical URLs, XML sitemaps, robots.txt rules, and JSON-LD schema.org structured data.',
    deliverables: [
      {
        title: '1. Technical SEO Strategy & Indexability Audit',
        desc: 'Comprehensive audit analyzing indexability, canonical configuration, sitemap routes, and meta tag architecture.',
      },
      {
        title: '2. Next.js Dynamic Metadata & JSON-LD Module',
        desc: 'Reusable metadata generator producing canonical links, OpenGraph tags, and valid Schema.org (Article, WebPage, FAQPage) JSON-LD scripts.',
      },
      {
        title: '3. Schema Validator & Google Search Console Test Log',
        desc: 'Validation log confirming 0 errors on Rich Results Test tools and XML sitemap generation scripts.',
      },
    ],
    faqs: [
      {
        question: 'Why is JSON-LD preferred over Microdata or RDFa for Schema.org markup?',
        answer:
          'JSON-LD is injected as a single script block <script type="application/ld+json">, separating structured metadata cleanly from HTML markup without cluttering component DOM structures.',
      },
      {
        question: 'How do self-referencing canonical tags prevent duplicate content issues?',
        answer:
          'Canonical tags explicitly tell search engines which URL version is the primary authoritative page, preventing ranking dilution when parameters (e.g. ?utm_source or ?page=1) are appended.',
      },
      {
        question: 'What is the function of an XML sitemap in Next.js applications?',
        answer:
          'An XML sitemap lists all discoverable public URLs, their last modification timestamps, and change frequencies, allowing search engine crawlers to discover new pages efficiently.',
      },
    ],
  },

  'web-development/third-party-api-integration': {
    categoryId: 'web-development',
    topicId: 'third-party-api-integration',
    overviewTitle: 'Secure Third-Party API Integration & Webhook Handling',
    overviewBody:
      'Modern web apps rely heavily on third-party services (Stripe, Google Maps, Twilio, SendGrid, OpenAI). Building secure integrations requires server-side API proxying, secret key protection, webhook signature verification, rate-limit retry logic, and fallback UI states.',
    deliverables: [
      {
        title: '1. Third-Party API & Webhook Security Architecture Plan',
        desc: 'Security plan specifying environment variable management, server-side route proxies, and webhook signature validation.',
      },
      {
        title: '2. Secure Server Route Proxy & Webhook Handler',
        desc: 'Next.js API route / Server Action proxying third-party API calls securely with rate limit retries and signature verification.',
      },
      {
        title: '3. Resilient Client Component & Fallback UI',
        desc: 'React component handling third-party API payloads, loading states, and user-friendly error fallbacks during provider outages.',
      },
    ],
    faqs: [
      {
        question: 'Why should secret API keys never be exposed in client-side code?',
        answer:
          'Client-side API keys exposed in browser bundles can be stolen and abused by third parties, leading to unauthorized billing charges or data leaks. Secret keys must remain strictly on server proxy endpoints.',
      },
      {
        question: 'How do you verify the authenticity of an incoming webhook payload?',
        answer:
          'Providers (such as Stripe or GitHub) send a cryptographic signature header with webhooks. Your server computes an HMAC hash using your webhook secret and verifies it matches the header before processing payload logic.',
      },
      {
        question: 'What is exponential backoff retry logic?',
        answer:
          'Exponential backoff is a retry algorithm where the delay between failed API request retries increases exponentially (e.g. 1s, 2s, 4s, 8s) to prevent overwhelming rate-limited third-party servers.',
      },
    ],
  },
};
