import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xs.fm',
  name: '番茄畅听',
  groups: [
    {
      name: '领取成功',
      key: 1,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules: ['UIView[text^="领取成功"] + @LynxFlattenUI'],
    },
    {
      name: '看视频领时长',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.pages.main.MainFragmentActivity'],
      rules: [
        'text.FlattenUIText[text^="额外领"]',
        'text.FlattenUIText[text^="领"][text$="金币"]',
        'text.FlattenUIText[text^="看视频再得"]',
        // 'text.FlattenUIText[text="立即领取"]',
        'text.FlattenUIText[text="加倍领取"]',
        'text.FlattenUIText[text="开宝箱得金币"]',
      ],
    },
    {
      name: '退出直播',
      key: 3,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.plugin.live.LivePlayerActivity'],
      rules: ['[id="com.xs.fm:id/n2"]'],
    },
    {
      name: '我知道了',
      key: 4,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.reader.speech.bullet.BulletActivity'],
      rules: [
        'FlattenUIText[text="我知道了"] + @FlattenUIImage',
        'FlattenUIText[text="领取成功"] + @FlattenUIImage',
      ],
    },
    {
      name: '看视频最高可领',
      key: 5,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.bullet.widget.BulletContainerActivity'],
      rules: ['FlattenUIText[text^="看视频最高可领"]'],
    },
  ],
});
