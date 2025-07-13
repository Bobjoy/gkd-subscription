import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
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
      rules: ['[vid="iv_back"]'],
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
        'FlattenUIText[text="一键领取"] + @LynxFlattenUI',
      ],
    },
    {
      name: '领取奖励',
      key: 4,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules: [
        'UIView[text^="领取成功"][clickable=true]',
        'FlattenUIText[text="领取奖励"]',
      ],
    },
    {
      name: '立即签到',
      key: 5,
      fastQuery: false,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      rules: ['View[text="开宝箱得金币"]'],
    },
  ],
});
