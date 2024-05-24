import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-time'
  ],
  ui: {
    icons: ['mdi', 'logos']
  },
  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    }
  },
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
  }
})
