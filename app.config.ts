export default defineAppConfig({
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
