import type { CareerRoadmap } from '@/types';
import { dataAnalystRoadmap } from './dataAnalyst';
import { itSupportSpecialistRoadmap } from './itSupportSpecialist';
import { digitalMarketingSpecialistRoadmap } from './digitalMarketingSpecialist';
import { juniorAccountantRoadmap } from './juniorAccountant';
import { webDeveloperRoadmap } from './webDeveloper';
import { businessAnalystRoadmap } from './businessAnalyst';

export const roadmaps: CareerRoadmap[] = [
  dataAnalystRoadmap,
  itSupportSpecialistRoadmap,
  digitalMarketingSpecialistRoadmap,
  juniorAccountantRoadmap,
  webDeveloperRoadmap,
  businessAnalystRoadmap,
];
