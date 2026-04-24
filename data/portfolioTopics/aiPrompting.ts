import type { PortfolioTopic } from '@/types';

export const aiPromptingTopics: PortfolioTopic[] = [
  {
    id: 'prompt-engineering-basics',
    categoryId: 'ai-prompting',
    title: 'Prompt Engineering Basics',
    description:
      'Master few-shot prompting, constraint setting, and clarity. Tests the ability to get predictable outputs from LLMs.',
    skillsProven: ['Few-shot prompting', 'Constraint setting', 'Iterative refinement', 'Clarity'],
  },
  {
    id: 'system-prompts-persona',
    categoryId: 'ai-prompting',
    title: 'System Prompts & Persona Design',
    description:
      'Design robust system instructions that govern how an AI behaves across a whole conversation. Tests tone control and boundary setting.',
    skillsProven: ['System prompts', 'Persona design', 'Boundary setting', 'Tone control'],
  },
  {
    id: 'output-formatting-extraction',
    categoryId: 'ai-prompting',
    title: 'Output Formatting & Extraction',
    description:
      'Force an LLM to return strict JSON, CSV, or specific Markdown structures. Tests data extraction and parsing reliability.',
    skillsProven: ['JSON extraction', 'Format constraint', 'Data parsing', 'Reliability engineering'],
  },
  {
    id: 'chain-of-thought-reasoning',
    categoryId: 'ai-prompting',
    title: 'Chain of Thought & Reasoning',
    description:
      'Design prompts that force the AI to "think step-by-step" before answering. Tests logic, math prompting, and hallucination reduction.',
    skillsProven: ['Chain of Thought (CoT)', 'Logic prompting', 'Hallucination reduction', 'Complex reasoning'],
  },
  {
    id: 'context-window-management',
    categoryId: 'ai-prompting',
    title: 'Context Window Management',
    description:
      'Summarise and format massive documents to fit within token limits without losing critical information. Tests token efficiency.',
    skillsProven: ['Token efficiency', 'Document summarisation', 'Information density', 'Context management'],
  },
  {
    id: 'rag-prep',
    categoryId: 'ai-prompting',
    title: 'RAG (Retrieval-Augmented Generation) Prep',
    description:
      'Clean and chunk raw text so it can be effectively embedded and retrieved by a vector database. Tests data structuring for AI.',
    skillsProven: ['Text chunking', 'Data cleaning', 'Metadata extraction', 'RAG principles'],
  },
  {
    id: 'ai-evaluation-benchmarking',
    categoryId: 'ai-prompting',
    title: 'AI Evaluation & Benchmarking',
    description:
      'Create datasets to test if an AI prompt actually works. Tests "LLM-as-a-judge" concepts, test-case creation, and scoring rubrics.',
    skillsProven: ['Test set creation', 'LLM-as-a-judge', 'Benchmarking', 'Quality assurance'],
  },
  {
    id: 'agent-flow-design',
    categoryId: 'ai-prompting',
    title: 'Agent Flow Design',
    description:
      'Map out how multiple AI agents (e.g., a Researcher, a Writer, and a Reviewer) pass data to each other. Tests systems thinking.',
    skillsProven: ['Agent architecture', 'Systems thinking', 'State management', 'Workflow design'],
  },
  {
    id: 'guardrails-safety',
    categoryId: 'ai-prompting',
    title: 'Guardrails & Safety Prompting',
    description:
      'Write prompts that actively prevent prompt injection, jailbreaks, and off-topic responses. Tests adversarial thinking and AI safety.',
    skillsProven: ['Adversarial testing', 'Prompt injection defence', 'Topic restriction', 'AI safety'],
  },
  {
    id: 'workflow-integration',
    categoryId: 'ai-prompting',
    title: 'AI Workflow Integration',
    description:
      'Design the logic for connecting LLMs to tools like Zapier, Make, or internal APIs. Tests function calling logic and automation.',
    skillsProven: ['Function calling logic', 'Automation design', 'API bridging', 'Workflow mapping'],
  },
];
