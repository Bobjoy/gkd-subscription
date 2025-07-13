import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      name: '退出直播',
      key: 1,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
      rules: ['[id="com.ss.android.ugc.aweme.lite:id/root"]'],
    },
    {
      name: '广告返回',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.bytedance.android.sif.container.SifContainerActivity'],
      rules: ['[id="com.ss.android.ugc.aweme:id/iv_back"]'],
    },
    {
      name: '评价并收下金币',
      key: 3,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: [
        'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
      ],
      rules: [
        'FlattenUIText[text="评价并收下金币"]',
        'FlattenUIText[text="待领取"]',
        'FlattenUIText[text="开红包"]',
        'FlattenUIText[text="开心收下"]',
      ],
    },
    {
      name: '领取奖励',
      key: 4,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules: ['UIView[text^="领取成功"]', 'FlattenUIText[text="领取奖励"]'],
    },
    {
      name: '看广告领金币',
      key: 5,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: [
        'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
      ],
      rules: ['FlattenUIText[text^="看广告视频"]'],
      enable: false,
    },
  ],
});
