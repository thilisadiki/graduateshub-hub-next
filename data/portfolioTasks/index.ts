import type { PortfolioTask, PortfolioLevel } from '@/types';
import fs from 'fs';
import path from 'path';

import { designUxTasks } from './designUx';
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
import { itAssetManagementTasks } from './itAssetManagement';
import { itVoipTelephonyTasks } from './itVoipTelephony';
import { itDatabaseAdminTasks } from './itDatabaseAdmin';

const WEB_DEV_DIR = path.join(process.cwd(), 'data/portfolioTasks/web-development');
const SOFT_DEV_DIR = path.join(process.cwd(), 'data/portfolioTasks/software-development');
const DATA_ANALYSIS_DIR = path.join(process.cwd(), 'data/portfolioTasks/data-analysis');
const DIGITAL_MARKETING_DIR = path.join(process.cwd(), 'data/portfolioTasks/digital-marketing');
const FINANCE_ACCOUNTING_DIR = path.join(process.cwd(), 'data/portfolioTasks/finance-accounting');

function loadWebDevTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(WEB_DEV_DIR)) {
      return [];
    }
    const files = fs.readdirSync(WEB_DEV_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(WEB_DEV_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load web development tasks:', error);
    return [];
  }
}

function loadSoftDevTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(SOFT_DEV_DIR)) {
      return [];
    }
    const files = fs.readdirSync(SOFT_DEV_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(SOFT_DEV_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load software development tasks:', error);
    return [];
  }
}

function loadDataAnalysisTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(DATA_ANALYSIS_DIR)) {
      return [];
    }
    const files = fs.readdirSync(DATA_ANALYSIS_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(DATA_ANALYSIS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load data analysis tasks:', error);
    return [];
  }
}

function loadDigitalMarketingTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(DIGITAL_MARKETING_DIR)) {
      return [];
    }
    const files = fs.readdirSync(DIGITAL_MARKETING_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(DIGITAL_MARKETING_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load digital marketing tasks:', error);
    return [];
  }
}

function loadFinanceAccountingTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(FINANCE_ACCOUNTING_DIR)) {
      return [];
    }
    const files = fs.readdirSync(FINANCE_ACCOUNTING_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(FINANCE_ACCOUNTING_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load finance and accounting tasks:', error);
    return [];
  }
}

export const portfolioTasks: PortfolioTask[] = [
  ...loadDigitalMarketingTasks(),
  ...loadSoftDevTasks(),
  ...loadDataAnalysisTasks(),
  ...loadFinanceAccountingTasks(),
  ...designUxTasks,
  ...loadWebDevTasks(),
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
  ...itAssetManagementTasks,
  ...itVoipTelephonyTasks,
  ...itDatabaseAdminTasks,
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
