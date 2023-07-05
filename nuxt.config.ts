export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt'
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
