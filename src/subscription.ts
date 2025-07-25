import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'Bobjoy的GKD订阅',
  version: 0,
  author: 'Bobjoy',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Bobjoy/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
