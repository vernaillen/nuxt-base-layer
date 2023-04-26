
export default defineNuxtConfig({
  extends: '../',
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/tailwind.css',
  ],
})
