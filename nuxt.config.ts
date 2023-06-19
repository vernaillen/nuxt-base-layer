export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
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
