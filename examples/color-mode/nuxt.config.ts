// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '../../',
  modules: ['@nuxtjs/color-mode', '@nuxt/ui'],

  colorMode: {
    classSuffix: ''
  }
})
