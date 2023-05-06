export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    'animate.css/animate.min.css',
  ],
  app: {
    head: {
      script: [
        {
          src: '/sbi/iframeResizer.min.js',
          type: 'text/javascript',
          async: true
        }
      ]
    }
}
})
