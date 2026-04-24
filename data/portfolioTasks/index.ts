import type { PortfolioTask, PortfolioLevel } from '@/types';

import { digitalMarketingTasks } from './digitalMarketing';
import { softwareDevelopmentTasks } from './softwareDevelopment';
import { dataAnalysisTasks } from './dataAnalysis';
import { financeAccountingTasks } from './financeAccounting';
import { designUxTasks } from './designUx';
import { webDevelopmentTasks } from './webDevelopment';

export const portfolioTasks: PortfolioTask[] = [
  ...digitalMarketingTasks,
  ...softwareDevelopmentTasks,
  ...dataAnalysisTasks,
  ...financeAccountingTasks,
  ...designUxTasks,
  ...webDevelopmentTasks,
];

export function getTaskById(id: string): PortfolioTask | undefined {
  return portfolioTasks.find((t) => t.id === id);
}

export function getTaskByLocation(
  categoryId: string,
  topicId: string,
  level: PortfolioLevel,
): PortfolioTask | undefined {
  return portfolioTasks.find(
    (t) => t.categoryId === categoryId && t.topicId === topicId && t.level === level,
  );
}

export function getTasksByCategory(categoryId: string): PortfolioTask[] {
  return portfolioTasks.filter((t) => t.categoryId === categoryId);
}

export function getTasksByTopic(categoryId: string, topicId: string): PortfolioTask[] {
  return portfolioTasks.filter((t) => t.categoryId === categoryId && t.topicId === topicId);
}

export function getTaskUrl(task: PortfolioTask): string {
  return `/portfolio/${task.categoryId}/${task.topicId}/${task.level}`;
}
