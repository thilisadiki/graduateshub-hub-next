import type { PortfolioTopic } from '@/types';
import fs from 'fs';
import path from 'path';

const TOPICS_DIR = path.join(process.cwd(), 'data/portfolioTopics');
const CATEGORY_DIRS = [
  'web-development',
  'software-development',
  'data-analysis',
  'digital-marketing',
  'finance-accounting',
  'design-ux',
  'business-analysis',
  'customer-ops',
  'ai-prompting',
  'it',
];

function loadTopicsFromDir(categoryDirName: string): PortfolioTopic[] {
  try {
    const dirPath = path.join(TOPICS_DIR, categoryDirName);
    if (!fs.existsSync(dirPath)) {
      return [];
    }
    const files = fs.readdirSync(dirPath);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(dirPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTopic;
      });
  } catch (error) {
    console.error(`Failed to load topics for category ${categoryDirName}:`, error);
    return [];
  }
}

export const portfolioTopics: PortfolioTopic[] = CATEGORY_DIRS.flatMap(loadTopicsFromDir);

export function getTopicById(categoryId: string, topicId: string): PortfolioTopic | undefined {
  return portfolioTopics.find((t) => t.categoryId === categoryId && t.id === topicId);
}

export function getTopicsByCategory(categoryId: string): PortfolioTopic[] {
  return portfolioTopics.filter((t) => t.categoryId === categoryId);
}
