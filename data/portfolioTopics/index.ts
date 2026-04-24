import type { PortfolioTopic } from '@/types';

import { webDevelopmentTopics } from './webDevelopment';
import { softwareDevelopmentTopics } from './softwareDevelopment';
import { dataAnalysisTopics } from './dataAnalysis';
import { digitalMarketingTopics } from './digitalMarketing';
import { financeAccountingTopics } from './financeAccounting';
import { designUxTopics } from './designUx';
import { businessAnalysisTopics } from './businessAnalysis';

export const portfolioTopics: PortfolioTopic[] = [
  ...webDevelopmentTopics,
  ...softwareDevelopmentTopics,
  ...dataAnalysisTopics,
  ...digitalMarketingTopics,
  ...financeAccountingTopics,
  ...designUxTopics,
  ...businessAnalysisTopics,
];

export function getTopicById(categoryId: string, topicId: string): PortfolioTopic | undefined {
  return portfolioTopics.find((t) => t.categoryId === categoryId && t.id === topicId);
}

export function getTopicsByCategory(categoryId: string): PortfolioTopic[] {
  return portfolioTopics.filter((t) => t.categoryId === categoryId);
}
