import pkg from './node_modules/nuxt/package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-time'
  ],
  runtimeConfig: {
    public: {
      nuxtVersion: pkg.version
    }
  }
})
