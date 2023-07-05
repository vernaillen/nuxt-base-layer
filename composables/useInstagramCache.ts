import { useLocalStorage, createSharedComposable } from '@vueuse/core'

const _useInstagramCache = () => {
  const content = useLocalStorage('instagramContent', '')
  const hasContent = useLocalStorage('hasInstagramContent', false)

  function addContent (newContent: string) {
    content.value = newContent
    hasContent.value = true
  }

  return {
    content, hasContent, addContent
  }
}

export const useInstagramCache = createSharedComposable(_useInstagramCache)
