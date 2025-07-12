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
        'com.lynx.tasm.behavior.ui.view.UIView[text$="领取成功"][clickable=true] +2 @com.lynx.tasm.behavior.ui.LynxFlattenUI',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="去逛街继续领取"] + @com.lynx.tasm.behavior.ui.text.FlattenUIText[text="退出"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="再看一个继续领取"]',
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
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="开心收下"] + @com.lynx.tasm.ui.image.FlattenUIImage',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="立即签到"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="看视频再得"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="去领取"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="立即领取"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="开宝箱得金币"]',
      ],
    },
    {
      name: '退出直播',
      key: 3,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.plugin.live.LivePlayerActivity'],
      rules: ['android.widget.Button[id="com.xs.fm:id/n2"]'],
    },
    {
      name: '我知道了',
      key: 4,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.reader.speech.bullet.BulletActivity'],
      rules: [
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="我知道了"] + @com.lynx.tasm.ui.image.FlattenUIImage',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="领取成功"] + @com.lynx.tasm.ui.image.FlattenUIImage',
      ],
    },
  ],
});
