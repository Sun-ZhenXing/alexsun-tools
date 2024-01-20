// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: {
    enabled: false,
  },
  modules: [
    // UI Frameworks
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',

    // Libraries
    'nuxt-monaco-editor',

    // Router
    // 'nuxt-typed-router',

    // State management
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // Composables
    '@vueuse/nuxt',
    '@nuxtjs/device',

    // I18n
    '@nuxtjs/i18n',

    // SEO
    '@nuxtjs/seo',
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'zh',
        name: '简体中文',
        iso: 'zh-CN',
      },
      {
        code: 'tw',
        name: '繁體中文',
        iso: 'zh-TW',
      },
      {
        code: 'ja',
        name: '日本語',
        iso: 'ja-JP',
      },
    ],
  },
  monacoEditor: {
    componentName: {
      codeEditor: 'MonacoEditor',
      diffEditor: 'MonacoDiffEditor',
    },
  },
  colorMode: {
    preference: 'system', // default theme 'system'
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  linkChecker: {
    enabled: false,
  },
  css: [
    '~/assets/styles/common.scss',
  ],
})
