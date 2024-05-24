import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true
  },
},
{
  files: ['**/pages/*.vue'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
},
{
  ignores: [
    '**/public/sbi/*'
  ]
})

