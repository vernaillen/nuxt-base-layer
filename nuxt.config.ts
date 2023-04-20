import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  css: [
    join(currentDir, './assets/css/tailwind.css'),
    join(currentDir, './assets/css/markdown.css'),
    join(currentDir, './assets/css/prose.css'),
    'animate.css/animate.min.css',
  ],
})
