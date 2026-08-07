import type { InterviewPrep } from '@/types';

export const googleAIEssentialsPrep: InterviewPrep = {
  id: 'google-ai-essentials',
  role: 'AI Specialist & Prompt Engineer',
  category: 'it',
  curator: 'jason',
  description:
    'CV tips and interview preparation for AI Productivity Specialist, Prompt Engineer, and Digital Transformation roles. Covers Generative AI tools, prompt frameworks, workplace automation, and AI ethics.',
  salaryBenchmarks: [
    { region: 'United States', range: '$65,000 – $105,000/year' },
    { region: 'United Kingdom', range: '£32,000 – £55,000/year' },
    { region: 'Canada', range: 'CA$60,000 – CA$95,000/year' },
    { region: 'Australia', range: 'A$70,000 – A$110,000/year' },
    { region: 'South Africa', range: 'R220,000 – R420,000/year' },
  ],

  cvMustInclude: [
    'Specific AI tools used: "Google Gemini, ChatGPT, Claude" rather than just "Artificial Intelligence"',
    'Prompt engineering techniques: 5 Ws, Persona prompting, Few-shot examples, and chain-of-thought instruction',
    'Demonstrated productivity gains: "Automated executive summaries reducing draft time by 70%"',
    'AI ethics and data confidentiality awareness (avoiding sensitive company data leakage)',
    'A link to a Proof of Work Portfolio or prompt template repository demonstrating practical business use cases',
  ],

  cvAvoid: [
    'Claiming to be an AI engineer or ML developer unless you write Python ML models from scratch',
    'Listing generic phrases like "AI expert" without specifying tools, prompt frameworks, or measurable outputs',
    'Ignoring data privacy considerations on public LLMs',
    'A CV that looks completely AI-generated without human proofreading or personal context',
  ],

  cvTips: [
    {
      heading: 'Highlight workflow transformation over raw tool usage',
      body: 'Recruiters care about business results, not just knowing how to type into ChatGPT. Highlight how you applied AI to solve a bottleneck: "Designed structured prompt templates for customer query classification, improving response accuracy by 35%."',
    },
    {
      heading: 'Show your prompt engineering process',
      body: 'Include a portfolio section or GitHub repository containing structured prompt templates for report generation, market research, or code review. Showing how you structure inputs demonstrates high-level critical thinking.',
    },
    {
      heading: 'Emphasize verification and hallucination checking',
      body: 'AI outputs require human oversight. Mentioning your process for fact-checking, verifying analytical data, and ensuring brand alignment builds immense trust with hiring managers.',
    },
  ],

  keySkills: [
    'Generative AI tools (Google Gemini, ChatGPT, Claude)',
    'Structured Prompt Engineering (Persona, 5 Ws, Few-shot)',
    'AI-assisted content drafting, summarization, and data extraction',
    'Workplace process automation & workflow integration',
    'Fact-checking, hallucination detection, & quality control',
    'AI ethics, data privacy, & IP protection',
  ],

  questions: [
    {
      question: 'How do you structure a prompt when asking Generative AI to draft a complex business proposal?',
      why: 'Interviewers want to see structured instruction design and clear prompt engineering methodology.',
      sampleAnswer:
        'I follow a structured prompt engineering framework: 1) Persona - assign the AI a role (e.g. "Act as a Senior Business Development Manager"); 2) Context - describe the industry, target client, and project scope; 3) Task - define the exact document structure required; 4) Constraints - specify word count, tone, and formatting rules; 5) Output verification - review and edit the draft to remove hallucinations and ensure brand alignment.',
      redFlag: 'Failing to mention output verification or providing vague instructions without constraints.',
    },
    {
      question: 'What measures do you take to protect company data privacy when using public AI models?',
      why: 'Assesses corporate compliance, security awareness, and responsible AI usage.',
      sampleAnswer:
        'I follow strict corporate AI safety guidelines: 1) Never input personally identifiable information (PII), proprietary source code, or unreleased financial figures into public models; 2) Ensure data sharing for model training is disabled in account settings where applicable; 3) Use anonymized placeholders (e.g. "Client X", "Product Y") when asking AI to analyze scenarios.',
      redFlag: 'Admitting to pasting confidential client records or internal financial figures into public tools.',
    },
  ],

  relatedRoadmapId: 'google-ai-essentials',
  relatedPrepIds: ['data-analyst', 'software-engineer'],
};
