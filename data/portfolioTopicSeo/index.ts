import { PortfolioTopicSeo } from './types';
import { webDevelopmentTopicSeo } from './web-development';

export * from './types';

export const portfolioTopicSeoData: Record<string, PortfolioTopicSeo> = {
  ...webDevelopmentTopicSeo,
};

export function getPortfolioTopicSeo(categoryId: string, topicId: string): PortfolioTopicSeo | undefined {
  return portfolioTopicSeoData[`${categoryId}/${topicId}`];
}
