import type { PortfolioTopic } from '@/types';

export const portfolioTopics: PortfolioTopic[] = [
  // Web Development
  {
    id: 'landing-page-rebuild',
    categoryId: 'web-development',
    title: 'Landing Page Rebuild',
    description:
      'Rebuild a marketing page section from a screenshot or spec. Tests HTML, CSS, responsive behaviour, and design collaboration.',
    skillsProven: ['HTML', 'CSS', 'Responsive design', 'Accessibility', 'Design collaboration'],
  },
  {
    id: 'api-data-fetching',
    categoryId: 'web-development',
    title: 'API Data Fetching',
    description:
      'Build a frontend that interacts with a REST API. Tests asynchronous JavaScript, React state management, error handling, and performance optimization.',
    skillsProven: ['API integration', 'React state', 'Error handling', 'Performance optimization'],
  },
  {
    id: 'auth-flow-implementation',
    categoryId: 'web-development',
    title: 'Authentication Flow',
    description:
      'Build secure login, signup, and session management. Tests form validation, global state handling, secure cookie management, and protected routes.',
    skillsProven: ['Form validation', 'Global state', 'Secure cookies', 'Route guards'],
  },
  {
    id: 'ecommerce-shopping-cart',
    categoryId: 'web-development',
    title: 'E-commerce Shopping Cart',
    description:
      'Build a functional shopping cart experience. Tests state management, data persistence, edge case handling, and complex UI interactions.',
    skillsProven: ['State management', 'Data persistence', 'UI interactions', 'Edge cases'],
  },
  {
    id: 'accessible-modal-dialog',
    categoryId: 'web-development',
    title: 'Accessible Modal Dialog',
    description:
      'Build a modal dialog system from scratch. Tests DOM manipulation, React Portals, WAI-ARIA accessibility standards, and reusable component design.',
    skillsProven: ['DOM manipulation', 'React Portals', 'Accessibility (WAI-ARIA)', 'Component design'],
  },
  {
    id: 'performance-optimization',
    categoryId: 'web-development',
    title: 'Performance Optimization',
    description:
      'Refactor an existing application to improve Core Web Vitals. Tests lazy loading, code-splitting, rendering strategies, and identifying performance bottlenecks.',
    skillsProven: ['Web performance', 'Core Web Vitals', 'Code splitting', 'Rendering strategies'],
  },
  {
    id: 'interactive-dashboard-layout',
    categoryId: 'web-development',
    title: 'Interactive Dashboard Layout',
    description:
      'Build a complex, data-rich interface. Tests modern CSS layouts, responsive design, charting libraries, and real-time data handling.',
    skillsProven: ['CSS Grid/Flexbox', 'Responsive data tables', 'Data visualization', 'Real-time updates'],
  },
  {
    id: 'complex-multistep-form',
    categoryId: 'web-development',
    title: 'Complex Multi-step Form',
    description:
      'Build a robust data collection flow. Tests state management across steps, complex validation rules, form accessibility, and UX patterns.',
    skillsProven: ['Form state management', 'Complex validation', 'UX patterns', 'Accessibility'],
  },
  {
    id: 'fullstack-crud-app',
    categoryId: 'web-development',
    title: 'Full-Stack CRUD Application',
    description:
      'Build a complete application from database to UI. Tests backend routing, database queries, API design, and frontend integration.',
    skillsProven: ['REST/GraphQL APIs', 'Database operations', 'Full-stack integration', 'Server-side logic'],
  },
  {
    id: 'third-party-api-integration',
    categoryId: 'web-development',
    title: 'Third-Party API Integration',
    description:
      'Integrate complex external services like Stripe or Google Maps. Tests SDK usage, webhook handling, and reading external documentation.',
    skillsProven: ['API SDKs', 'Webhooks', 'Security (API Keys)', 'Documentation parsing'],
  },
  {
    id: 'state-machine-logic',
    categoryId: 'web-development',
    title: 'Complex State Machines',
    description:
      'Build applications with many intersecting states, like a custom video player or a browser game. Tests reducer logic, XState, and avoiding impossible states.',
    skillsProven: ['useReducer / XState', 'Complex state logic', 'Media APIs', 'Event handling'],
  },










  // Software Development
  {
    id: 'debug-fix',
    categoryId: 'software-development',
    title: 'Debug & Fix',
    description:
      'Diagnose a real-looking bug, fix it, and explain the root cause in plain English. Tests debugging, code craft, and technical communication.',
    skillsProven: ['Debugging', 'JavaScript fundamentals', 'Code quality', 'Technical communication'],
  },
  {
    id: 'api-design',
    categoryId: 'software-development',
    title: 'API Design',
    description:
      'Design a small, minimal REST API for a real scenario. Tests resource modelling, scope judgment, and how you handle edge cases.',
    skillsProven: ['API design', 'System thinking', 'Technical writing', 'Product scoping'],
  },
  {
    id: 'system-architecture-design',
    categoryId: 'software-development',
    title: 'System Architecture Design',
    description:
      'Design robust backends from the ground up. Tests component diagramming, scalability thinking, and trade-off analysis.',
    skillsProven: ['System design', 'Scalability', 'Microservices', 'Trade-off analysis'],
  },

  // Data
  {
    id: 'data-cleaning',
    categoryId: 'data',
    title: 'Data Cleaning & Insights',
    description:
      'Clean a messy dataset and turn it into insights a manager can act on. Tests data handling, analytical thinking, and business communication.',
    skillsProven: ['Data cleaning', 'Exploratory data analysis', 'Business communication', 'Analytical thinking'],
  },
  {
    id: 'data-visualisation',
    categoryId: 'data',
    title: 'Data Visualisation',
    description:
      'Choose the right chart for a specific audience and cadence, and defend the choice. Tests metric selection, visual design, and executive communication.',
    skillsProven: ['Data visualisation', 'Metric selection', 'Executive communication', 'Analytical judgment'],
  },

  // Digital Marketing
  {
    id: 'social-media-audit',
    categoryId: 'digital-marketing',
    title: 'Social Media Audit',
    description:
      'Audit a small business social presence and propose a 30-day plan. Tests content strategy, marketing analytics, and practical planning.',
    skillsProven: ['Social media strategy', 'Content planning', 'Marketing analytics', 'Small business marketing'],
  },
  {
    id: 'email-experimentation',
    categoryId: 'digital-marketing',
    title: 'Email Experimentation',
    description:
      'Design a rigorous email A/B test. Tests experimentation design, statistical reasoning, and marketing judgment.',
    skillsProven: ['Email marketing', 'A/B testing', 'Marketing analytics', 'Experimentation design'],
  },

  // Finance & Accounting
  {
    id: 'cash-flow-forecasting',
    categoryId: 'finance-accounting',
    title: 'Cash Flow Forecasting',
    description:
      'Build a defensible cash flow forecast for a small business. Tests financial modelling, assumption quality, and financial storytelling.',
    skillsProven: ['Cash flow modelling', 'Financial forecasting', 'SME finance', 'Financial storytelling'],
  },
  {
    id: 'ratio-analysis',
    categoryId: 'finance-accounting',
    title: 'Ratio Analysis',
    description:
      'Interpret financial ratios and write a short credit memo. Tests financial analysis and the ability to explain numbers in plain English.',
    skillsProven: ['Financial ratio analysis', 'Credit thinking', 'Business writing', 'Financial judgment'],
  },

  // Design & UX
  {
    id: 'ux-teardown',
    categoryId: 'design-ux',
    title: 'UX Teardown',
    description:
      'Critique a real product flow and propose concrete fixes with priorities. Tests heuristic evaluation, design critique, and product prioritisation.',
    skillsProven: ['UX analysis', 'Heuristic evaluation', 'Design critique', 'Product prioritisation'],
  },
];

export function getTopicById(categoryId: string, topicId: string): PortfolioTopic | undefined {
  return portfolioTopics.find((t) => t.categoryId === categoryId && t.id === topicId);
}

export function getTopicsByCategory(categoryId: string): PortfolioTopic[] {
  return portfolioTopics.filter((t) => t.categoryId === categoryId);
}
