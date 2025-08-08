import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Watermarker',
  path: '/watermarker',
  description: '',
  keywords: ['watermarker'],
  component: () => import('./watermarker.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2025-08-08'),
});