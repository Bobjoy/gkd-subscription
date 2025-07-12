import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.lite',
  name: '今日头条极速版',
  groups: [
    {
      name: '领取成功',
      key: 1,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules: [
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="领取成功"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="看视频再得"]',
      ],
    },
    {
      name: '看视频领取金币',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.article.lite.activity.SplashActivity'],
      rules: [
        '@android.view.ViewGroup < android.view.ViewGroup[text^="看视频领取"]',
        'com.lynx.tasm.behavior.ui.view.UIView[text^="看视频领"][clickable=true]',
      ],
    },
  ],
});
