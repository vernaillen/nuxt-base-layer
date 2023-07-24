// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '../../',
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ]
})
