import type { PortfolioTask, PortfolioLevel } from '@/types';

import { digitalMarketingTasks } from './digitalMarketing';
import { softwareDevelopmentTasks } from './softwareDevelopment';
import { dataAnalysisTasks } from './dataAnalysis';
import { financeAccountingTasks } from './financeAccounting';
import { designUxTasks } from './designUx';
import { webDevelopmentTasks } from './webDevelopment';
import { businessAnalysisTasks } from './businessAnalysis';
import { customerOpsTasks } from './customerOps';
import { aiPromptingTasks } from './aiPrompting';
import { qaTestingTasks } from './qaTesting';
import { projectCoordinationTasks } from './projectCoordination';
import { itServiceManagementTasks } from './itServiceManagement';
import { itNetworkingTasks } from './itNetworking';
import { itIdentityManagementTasks } from './itIdentityManagement';
import { itCloudFundamentalsTasks } from './itCloudFundamentals';
import { itCybersecurityTasks } from './itCybersecurity';
import { itEndpointManagementTasks } from './itEndpointManagement';
import { itBackupRecoveryTasks } from './itBackupRecovery';
import { itMicrosoft365Tasks } from './itMicrosoft365';
import { itComplianceGovernanceTasks } from './itComplianceGovernance';
import { itServerAdministrationTasks } from './itServerAdministration';

export const portfolioTasks: PortfolioTask[] = [
  ...digitalMarketingTasks,
  ...softwareDevelopmentTasks,
  ...dataAnalysisTasks,
  ...financeAccountingTasks,
  ...designUxTasks,
  ...webDevelopmentTasks,
  ...businessAnalysisTasks,
  ...customerOpsTasks,
  ...aiPromptingTasks,
  ...qaTestingTasks,
  ...projectCoordinationTasks,
  ...itServiceManagementTasks,
  ...itNetworkingTasks,
  ...itIdentityManagementTasks,
  ...itCloudFundamentalsTasks,
  ...itCybersecurityTasks,
  ...itEndpointManagementTasks,
  ...itBackupRecoveryTasks,
  ...itMicrosoft365Tasks,
  ...itComplianceGovernanceTasks,
  ...itServerAdministrationTasks,
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
