export default defineNuxtConfig({
  extends: [
    '../',
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui'
  ],
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    },
    checker: {
      lintOnStart: true,
      fix: true
    }
  },

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-07-28',
})
