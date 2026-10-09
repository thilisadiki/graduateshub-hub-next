import OpenAI from 'openai';

interface AIConfig {
  client: OpenAI;
  model: string;
}

let cachedWorkingModel: string | null = null;

/**
 * Returns a configured OpenAI client pointing to the selected provider.
 * Defaults to Groq, but supports any OpenAI-compatible open-source provider
 * (OpenRouter, Ollama, Cloudflare, etc.).
 */
export function getAIConfig(): AIConfig {
  const groqKey = process.env.GROQ_API_KEY;
  const aiKey = process.env.AI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  const apiKey = groqKey || aiKey || openaiKey || geminiKey;
  if (!apiKey) {
    throw new Error('Missing AI API Key. Please configure GROQ_API_KEY or AI_API_KEY in your environment.');
  }

  let baseURL = process.env.AI_BASE_URL;
  let defaultModel = cachedWorkingModel || 'openai/gpt-oss-120b';

  if (!baseURL) {
    if (groqKey || aiKey) {
      baseURL = 'https://api.groq.com/openai/v1';
      defaultModel = cachedWorkingModel || 'openai/gpt-oss-120b';
    } else if (openaiKey) {
      baseURL = 'https://api.openai.com/v1';
      defaultModel = 'gpt-4o-mini';
    } else if (geminiKey) {
      baseURL = 'https://generativelanguage.googleapis.com/v1beta/openai/';
      defaultModel = 'gemini-2.5-flash';
    } else {
      baseURL = 'https://api.groq.com/openai/v1';
    }
  }

  const model = process.env.AI_MODEL || defaultModel;

  const client = new OpenAI({
    apiKey,
    baseURL,
  });

  return { client, model };
}

export interface GenerateJSONOptions {
  systemPrompt: string;
  userInput: string;
  temperature?: number;
  maxTokens?: number;
}

/**
 * Executes a completion request and parses the result into structured JSON.
 * Strips markdown code blocks if the open-source model wraps JSON in fences.
 * Automatically tries available open-source models if a specific model ID returns 404.
 */
export async function generateStructuredJSON<T = any>({
  systemPrompt,
  userInput,
  temperature = 0.2,
  maxTokens = 4096,
}: GenerateJSONOptions): Promise<T> {
  const { client, model } = getAIConfig();

  // If user explicitly configured AI_MODEL, only try that.
  // Otherwise, try prioritized open-source candidates with fallback.
  const candidateModels = process.env.AI_MODEL
    ? [process.env.AI_MODEL]
    : [
        cachedWorkingModel,
        'openai/gpt-oss-120b',
        'qwen/qwen3.8-27b',
        'llama-3.3-70b-versatile',
        'llama-3.1-8b-instant',
        model,
      ].filter((m): m is string => Boolean(m));

  const modelsToTry = Array.from(new Set(candidateModels));
  let lastError: any = null;

  for (const candidate of modelsToTry) {
    try {
      const response = await client.chat.completions.create({
        model: candidate,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userInput },
        ],
        temperature,
        max_tokens: maxTokens,
        response_format: { type: 'json_object' },
      });

      const rawContent = response.choices[0]?.message?.content?.trim() || '';
      if (!rawContent) {
        throw new Error('AI returned an empty response.');
      }

      let cleaned = rawContent;
      if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
      }

      // Cache the working model for subsequent instant calls
      cachedWorkingModel = candidate;

      return JSON.parse(cleaned) as T;
    } catch (err: any) {
      lastError = err;
      if (err?.status === 404) {
        continue;
      }
      throw err;
    }
  }

  throw lastError || new Error('Failed to generate response from AI provider.');
}
