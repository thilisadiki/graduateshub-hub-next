import type { InterviewPrep } from '@/types';
import { itSupportSpecialistPrep } from './itSupportSpecialist';
import { juniorAccountantPrep } from './juniorAccountant';
import { digitalMarketingCoordinatorPrep } from './digitalMarketingCoordinator';
import { dataAnalystPrep } from './dataAnalyst';
import { webDeveloperPrep } from './webDeveloper';
import { businessAnalystPrep } from './businessAnalyst';

export const interviewPreps: InterviewPrep[] = [
  itSupportSpecialistPrep,
  dataAnalystPrep,
  webDeveloperPrep,
  juniorAccountantPrep,
  digitalMarketingCoordinatorPrep,
  businessAnalystPrep,
];

export {
  itSupportSpecialistPrep,
  juniorAccountantPrep,
  digitalMarketingCoordinatorPrep,
  dataAnalystPrep,
  webDeveloperPrep,
  businessAnalystPrep,
};
