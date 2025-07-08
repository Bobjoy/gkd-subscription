import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      name: '领取成功',
      key: 1,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules:
        'com.lynx.tasm.behavior.ui.view.UIView[text^="领取成功"][clickable=true]',
      // snapshotUrls: [
      // 	'https://i.gkd.li/snapshot/1751884368172'
      // ]
    },
    {
      name: '领取奖励',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules: 'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="领取奖励"]',
      // snapshotUrls: [
      // 	'https://i.gkd.li/snapshot/1751885498261'
      // ]
    },
    {
      name: '退出直播',
      key: 3,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
      rules:
        'android.widget.Button[id="com.ss.android.ugc.aweme.lite:id/root"]',
      // snapshotUrls: [
      // 	'https://i.gkd.li/snapshot/1751885863727'
      // ]
    },
    {
      name: '评价并收下金币',
      key: 4,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: [
        'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
      ],
      rules:
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="评价并收下金币"]',
      // snapshotUrls: [
      // 	'https://i.gkd.li/snapshot/1751886080758'
      // ]
    },
  ],
});
