import { World } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate as t } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: t('tools.dns-queries.title'),
  path: '/dns-queries',
  description: t('tools.dns-queries.description'),
  keywords: ['dns', 'nslookup', 'queries'],
  component: () => import('./dns-queries.vue'),
  icon: World,
  createdAt: new Date('2024-08-15'),
});
