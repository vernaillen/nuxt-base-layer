import { defineStore } from 'pinia'

export const useInstagramCache = defineStore('instagramCache', {
  state: () => ({
    content: useLocalStorage('instagramContent', ''),
    hasContent: useLocalStorage('hasInstagramContent', false),
  }),
  actions: {
    addContent (content: string) {
      this.content = content
      this.hasContent = true
    },
  },
})
