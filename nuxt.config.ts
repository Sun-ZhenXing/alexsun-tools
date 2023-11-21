// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  linkChecker: {
    enabled: false,
  },
})
