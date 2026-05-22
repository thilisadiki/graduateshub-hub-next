import type { PortfolioTask, PortfolioLevel } from '@/types';
import fs from 'fs';
import path from 'path';



const WEB_DEV_DIR = path.join(process.cwd(), 'data/portfolioTasks/web-development');
const SOFT_DEV_DIR = path.join(process.cwd(), 'data/portfolioTasks/software-development');
const DATA_ANALYSIS_DIR = path.join(process.cwd(), 'data/portfolioTasks/data-analysis');
const DIGITAL_MARKETING_DIR = path.join(process.cwd(), 'data/portfolioTasks/digital-marketing');
const FINANCE_ACCOUNTING_DIR = path.join(process.cwd(), 'data/portfolioTasks/finance-accounting');
const DESIGN_UX_DIR = path.join(process.cwd(), 'data/portfolioTasks/design-ux');
const BUSINESS_ANALYSIS_DIR = path.join(process.cwd(), 'data/portfolioTasks/business-analysis');
const CUSTOMER_OPS_DIR = path.join(process.cwd(), 'data/portfolioTasks/customer-ops');
const IT_DIR = path.join(process.cwd(), 'data/portfolioTasks/it');
const AI_PROMPTING_DIR = path.join(process.cwd(), 'data/portfolioTasks/ai-prompting');

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

function loadDesignUxTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(DESIGN_UX_DIR)) {
      return [];
    }
    const files = fs.readdirSync(DESIGN_UX_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(DESIGN_UX_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load design and UX tasks:', error);
    return [];
  }
}

function loadBusinessAnalysisTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(BUSINESS_ANALYSIS_DIR)) {
      return [];
    }
    const files = fs.readdirSync(BUSINESS_ANALYSIS_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(BUSINESS_ANALYSIS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load business analysis tasks:', error);
    return [];
  }
}

function loadCustomerOpsTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(CUSTOMER_OPS_DIR)) {
      return [];
    }
    const files = fs.readdirSync(CUSTOMER_OPS_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(CUSTOMER_OPS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load customer ops tasks:', error);
    return [];
  }
}

function loadItTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(IT_DIR)) {
      return [];
    }
    const files = fs.readdirSync(IT_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(IT_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load IT tasks:', error);
    return [];
  }
}

function loadAiPromptingTasks(): PortfolioTask[] {
  try {
    if (!fs.existsSync(AI_PROMPTING_DIR)) {
      return [];
    }
    const files = fs.readdirSync(AI_PROMPTING_DIR);
    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(AI_PROMPTING_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content) as PortfolioTask;
      });
  } catch (error) {
    console.error('Failed to load AI prompting tasks:', error);
    return [];
  }
}

export const portfolioTasks: PortfolioTask[] = [
  ...loadDigitalMarketingTasks(),
  ...loadSoftDevTasks(),
  ...loadDataAnalysisTasks(),
  ...loadFinanceAccountingTasks(),
  ...loadDesignUxTasks(),
  ...loadWebDevTasks(),
  ...loadBusinessAnalysisTasks(),
  ...loadCustomerOpsTasks(),
  ...loadItTasks(),
  ...loadAiPromptingTasks(),
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
