export default defineAppConfig({
  github: {
    repo: '',
    dateFormat: 'DD MMMM YYYY'
  },
  instagram: {
    enabled: false
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    instagram?: {
      enabled?: boolean
      wpPageId?: number
      wpBaseUrl?: string
      shadow?: boolean
    }
  }
}
