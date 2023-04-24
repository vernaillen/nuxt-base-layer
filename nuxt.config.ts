export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    'animate.css/animate.min.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  /*routeRules: {
    '/instagram': { ssr: false },
  }*/
})
