import type { CareerRoadmap } from '@/types';

export const googleAIEssentialsRoadmap: CareerRoadmap = {
  id: 'google-ai-essentials',
  title: 'How to Become an AI Productivity Specialist',
  tagline: 'Master Generative AI, prompt engineering, and workplace automation with Google AI Essentials.',
  category: 'it',
  curator: 'jason',
  timeToJobReady: '1–3 months',
  demandLevel: 'Very High',
  entryLevel: true,
  description:
    'A practical career roadmap for mastering artificial intelligence in workplace workflows. Covers Generative AI tools (Gemini, ChatGPT), structured prompt engineering, task automation, AI ethics, and project integration.',
  overview:
    'Artificial Intelligence is no longer just for machine learning engineers. Today, organizations across banking, consulting, marketing, healthcare, and technology actively seek AI Productivity Specialists and Prompt Engineers who can integrate AI into daily operations to save time, automate repetitive tasks, and improve output quality.\n\nThe Google AI Essentials path teaches you how to use AI tools like Google Gemini effectively without needing a background in coding. By combining prompt engineering frameworks with practical business workflows, you can position yourself as an indispensable AI-empowered professional.',
  jobTitles: [
    'AI Productivity Specialist',
    'Prompt Engineer',
    'AI Solutions Coordinator',
    'Operations Automation Assistant',
    'Digital Transformation Associate',
    'Business Process Analyst',
  ],
  technicalSkills: [
    'Generative AI Fundamentals (LLMs, multimodal AI)',
    'Structured Prompt Engineering (5 Ws, Persona, Few-shot)',
    'Google Gemini & ChatGPT Workplace Integration',
    'AI-Assisted Data Analysis & Content Generation',
    'Workflow Automation & Task Streamlining',
    'AI Ethics, Data Privacy & Bias Awareness',
  ],
  softSkills: [
    'Critical thinking & output verification',
    'Clear written communication & instruction design',
    'Problem-solving & adaptability',
    'Curiosity & continuous learning',
  ],
  stages: [
    {
      number: 1,
      title: 'Understand Generative AI & Large Language Models',
      duration: '1–2 weeks',
      description:
        'Start by building a clear mental model of how Generative AI works. Learn the difference between traditional software and Large Language Models (LLMs), understand how models process inputs into probability-based tokens, and explore Google Gemini and ChatGPT.',
      courseIds: ['free-ai-courses-for-beginners'],
      milestone:
        'You understand LLM capabilities, limitations, and how to choose the right AI tool for specific workplace tasks.',
    },
    {
      number: 2,
      title: 'Master Structured Prompt Engineering',
      duration: '2–3 weeks',
      description:
        'Prompt engineering is the art of giving AI clear, structured instructions to produce high-quality outputs. Master key frameworks including Persona prompting, Context setting, Few-shot examples, and the 5 Ws method (Who, What, When, Where, Why). Learn how to iterate on prompts when initial outputs miss the mark.',
      courseIds: ['free-ai-courses-for-beginners'],
      milestone:
        'You can craft precise prompts that produce tailored business documents, summaries, and analytical insights on the first try.',
    },
    {
      number: 3,
      title: 'AI-Assisted Productivity & Content Generation',
      duration: '2–3 weeks',
      description:
        'Apply AI directly to common business tasks: drafting reports, summarizing length documents, composing targeted emails, brainstorming campaign concepts, and generating structured meeting minutes. Learn how to maintain brand voice and tone while speeding up output by 5x.',
      courseIds: ['free-ai-career-tools'],
      milestone:
        'You have built a personal library of reusable prompt templates for email drafting, report writing, and research summarization.',
    },
    {
      number: 4,
      title: 'Data Analysis & Visual Insight Generation with AI',
      duration: '2–3 weeks',
      description:
        'Learn how to use multimodal AI tools to analyze spreadsheets, extract key trends from CSV data, and create visual summaries. Practice asking AI to identify outliers, calculate summary metrics, and explain complex data patterns in clear business language.',
      courseIds: ['free-courses-for-data-analysts'],
      milestone:
        'You can upload raw datasets into AI tools, generate structured analytical summaries, and draft executive briefings.',
    },
    {
      number: 5,
      title: 'AI Ethics, Safety & Building Your Proof of Work',
      duration: '2–3 weeks',
      description:
        'Responsible AI usage is essential for corporate roles. Learn about data confidentiality, avoiding intellectual property leakage, hallucination checking, and bias mitigation. Build a portfolio showing 3 real-world AI automation projects (e.g. an AI customer support workflow or automated research pipeline).',
      courseIds: ['portfolio-tasks'],
      milestone:
        'You have published a Proof of Work Portfolio showcasing 3 practical AI projects and earned a shareable Badge of Competence.',
    },
  ],
  certifications: [
    {
      name: 'Google AI Essentials Certificate',
      provider: 'Grow with Google',
      free: true,
      why: 'Official Google credential verifying practical Generative AI and prompt engineering skills.',
    },
  ],
  portfolioProjects: [
    'Prompt Engineering Template Library: 10 structured prompt frameworks for common business workflows',
    'AI-Assisted Data Analysis Report: Raw CSV upload, trend extraction, and executive briefing draft',
    'Automated Customer Support Classifier: Prompt setup for categorizing inquiry tickets by sentiment and urgency',
  ],
  relatedRoadmapIds: ['data-analyst', 'digital-marketing-specialist', 'software-engineer'],
  salaryBenchmarks: [
    { region: 'United States', range: '$65,000 – $105,000/year' },
    { region: 'United Kingdom', range: '£32,000 – £55,000/year' },
    { region: 'Canada', range: 'CA$60,000 – CA$95,000/year' },
    { region: 'Australia', range: 'A$70,000 – A$110,000/year' },
    { region: 'South Africa', range: 'R220,000 – R420,000/year' },
  ],
  remoteFriendly: 'Fully',
  difficulty: 'Beginner',
  faqs: [
    {
      q: 'Do I need a coding background for Google AI Essentials?',
      a: 'No. The course focuses on using AI tools effectively through natural language prompt engineering, not coding in Python or training machine learning models.',
    },
    {
      q: 'Is the Google AI Essentials certificate recognized by employers?',
      a: 'Yes. Google certificates are widely recognized across corporate and agency employers seeking digital-first talent.',
    },
  ],
  firstNinetyDays: [
    'Audit team workflows to identify repetitive tasks suitable for AI assistance',
    'Develop structured prompt templates for routine communications and meeting summaries',
    'Establish AI safety guidelines to ensure corporate data confidentiality',
  ],
  commonMistakes: [
    {
      mistake: 'Using AI outputs without human verification',
      fix: 'Always fact-check numbers, citations, and specific claims generated by AI before final use.',
    },
  ],
};
