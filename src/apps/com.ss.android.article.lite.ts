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
        'FlattenUIText[text^="领取成功"]',
        'FlattenUIText[text^="看视频再得"]',
      ],
    },
    {
      name: '看视频领取金币',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.article.lite.activity.SplashActivity'],
      rules: [
        '@ViewGroup < ViewGroup[text^="看视频领取"]',
        'UIView[text^="看视频领"][clickable=true]',
      ],
    },
    {
      name: '阅读领金币1',
      key: 3,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: [
        'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
      ],
      rules: ['@View < TextView[text="领金币"]'],
    },
    {
      name: '阅读领金币2',
      key: 4,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity'],
      rules: ['FlattenUIText[text="领金币"][clickable=true]'],
    },
    {
      name: '看视频领XXX金币',
      key: 5,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: [
        'com.bytedance.common.plugin.base.lynx.popup.ProxyPopupActivity',
      ],
      rules: ['UIView[text^="看视频领"] + @LynxFlattenUI'],
    },
  ],
});
