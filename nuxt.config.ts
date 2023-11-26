// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  devtools: {
    enabled: false,
  },
  modules: [
    // UI Frameworks
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',

    // Libraries
    'nuxt-monaco-editor',

    // Router
    'nuxt-typed-router',

    // State management
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // Composables
    '@vueuse/nuxt',
    '@nuxtjs/device',

    // I18n
    '@nuxtjs/i18n',

    // SEO
    '@nuxtseo/module',
  ],
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
})
