import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xs.fm.lite',
  name: '番茄畅听音乐版',
  groups: [
    {
      name: '领取成功',
      key: 1,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
      rules: [
        'UIView[text$="领取成功"] +2 @LynxFlattenUI',
        'UIView[text$="领取成功"] +3 @LynxFlattenUI',
        'FlattenUIText[text="去逛街继续领取"] + @FlattenUIText[text="退出"]',
        'FlattenUIText[text="再看一个继续领取"]',
      ],
    },
    {
      name: '看视频领时长',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.pages.main.MainFragmentActivity'],
      rules: [
        '@[id="com.xs.fm.lite:id/fnr"]',
        '@[id="com.xs.fm.lite:id/a1u"][clickable=true] > TextView[text^="看视频再领"]',
        '@FrameLayout < [id="com.xs.fm.lite:id/hr"][clickable=true] > TextView[text^="看视频领"]',
        'FlattenUIText[text="开心收下"] + @com.lynx.tasm.ui.image.FlattenUIImage',
        'FlattenUIText[text^="立即签到"]',
        'FlattenUIText[text^="看视频再得"]',
        'FlattenUIText[text="去领取"]',
        'FlattenUIText[text="立即领取"]',
        'FlattenUIText[text="开宝箱得金币"]',
      ],
    },
    {
      name: '退出直播',
      key: 3,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.plugin.live.LivePlayerActivity'],
      rules: ['[vid="n6"]'],
    },
    {
      name: '我知道了',
      key: 4,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.reader.speech.bullet.BulletActivity'],
      rules: [
        'FlattenUIText[text="我知道了"] + @com.lynx.tasm.ui.image.FlattenUIImage',
        'FlattenUIText[text="领取成功"] + @com.lynx.tasm.ui.image.FlattenUIImage',
      ],
    },
    {
      name: '立即签到',
      key: 5,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.pages.main.MainFragmentActivity'],
      rules: ['FlattenUIText[text="收下奖励"]'],
    },
    {
      name: '看视频再领金币',
      key: 6,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: [
        'com.bytedance.ug.sdk.luckycat.impl.lynx.LuckyCatLynxActivity',
      ],
      rules: ['FlattenUIText[text^="看视频再领"]'],
    },
  ],
});
