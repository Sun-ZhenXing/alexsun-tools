// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-10-14',

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  devtools: {
    enabled: true,
  },

  modules: [
    // UI Frameworks
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',

    // Libraries
    'nuxt-monaco-editor',
    'dayjs-nuxt',

    // State management
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // Composables
    '@vueuse/nuxt',

    // I18n
    '@nuxtjs/i18n',

    // PWA
    '@vite-pwa/nuxt',
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
        language: 'en-US',
      },
      {
        code: 'zh',
        name: '简体中文',
        language: 'zh-CN',
      },
      {
        code: 'tw',
        name: '繁體中文',
        language: 'zh-TW',
      },
      {
        code: 'ja',
        name: '日本語',
        language: 'ja-JP',
      },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
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

  // linkChecker: {
  //   enabled: false,
  // },
  css: [
    '~/assets/styles/common.scss',
  ],

  vite: {
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2022',
      },
    },
    build: {
      target: 'es2022',
    },
  },
})
