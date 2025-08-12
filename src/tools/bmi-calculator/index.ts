import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Bmi calculator',
  path: '/bmi-calculator',
  description: '',
  keywords: ['bmi', 'calculator'],
  component: () => import('./bmi-calculator.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2025-08-12'),
});