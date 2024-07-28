import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  modules: [
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

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-07-28',
})
