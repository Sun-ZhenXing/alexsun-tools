export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh_CN',
  messages: {
    en_US: {
      appName: 'Alex Toolkits',
      language: 'Language',
      settings: 'Settings',
      showInline: 'Show Inline',
      homePage: 'Home Page',
      diffTool: 'Diff Tool',
    },
    zh_CN: {
      appName: '鸭梨工具包',
      language: '语言',
      settings: '设置',
      showInline: '内联显示',
      homePage: '首页',
      diffTool: 'Diff 工具',
    },
    ja_JP: {
      appName: 'アレックスツールキット',
      language: '言語',
      settings: '設定',
      showInline: 'インライン表示',
      homePage: 'ホームページ',
      diffTool: 'Diff ツール',
    },
  },
}))
