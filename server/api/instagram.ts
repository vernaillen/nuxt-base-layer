import { defineEventHandler } from 'h3'

export interface WPInstagramContent {
  rendered: string
}

export interface WPInstagramPage {
  id: number
  content: WPInstagramContent
}

export default defineEventHandler(async () => {
  const igConfig = useAppConfig().instagram
  if (igConfig && igConfig.enabled && igConfig.wpBaseUrl && igConfig.wpPageId) {
    return await $fetch<WPInstagramPage>(igConfig.wpBaseUrl + 'wp-json/wp/v2/pages/' + igConfig.wpPageId)
  }
})
