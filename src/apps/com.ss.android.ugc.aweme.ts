import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      name: '领取成功',
      key: 1,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules: [
        'com.lynx.tasm.behavior.ui.view.UIView[text^="领取成功"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="领取奖励"]',
      ],
    },
    {
      name: '退出直播',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
      rules: [
        'android.widget.Button[id="com.ss.android.ugc.aweme.lite:id/root"]',
      ],
    },
    {
      name: '收下金币',
      key: 3,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: [
        'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
      ],
      rules: [
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="评价并收下金币"]',
      ],
    },
  ],
});
