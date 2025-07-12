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
      rules: [
        'com.lynx.tasm.behavior.ui.view.UIView[text^="领取成功"] + @com.lynx.tasm.behavior.ui.LynxFlattenUI',
      ],
    },
    {
      name: '看视频领时长',
      key: 2,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.pages.main.MainFragmentActivity'],
      rules: [
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="额外领"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="领"][text$="金币"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="看视频再得"]',
        // 'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="立即领取"]',
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text="加倍领取"]',
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
    {
      name: '看视频最高可领',
      key: 5,
      fastQuery: true,
      resetMatch: 'app',
      activityIds: ['com.dragon.read.bullet.widget.BulletContainerActivity'],
      rules: [
        'com.lynx.tasm.behavior.ui.text.FlattenUIText[text^="看视频最高可领"]',
      ],
    },
  ],
});
