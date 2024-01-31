import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-time'
  ],
  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    }
  }
})
