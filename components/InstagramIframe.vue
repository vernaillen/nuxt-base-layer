<script setup lang="ts">
import { onMounted } from 'vue'
const appConfig = useAppConfig();
const enabled = appConfig.instagram?.enabled
console.log('InstagramIframe', enabled)

const iframeRef = ref<HTMLIFrameElement>()
onMounted(() => {
  if (enabled && iframeRef.value) { iFrameResize({}, iframeRef.value) }
})

const colorMode = useColorMode()
watch(() => colorMode.value, (newColorMode) => {
  const innerDoc = iframeRef.value?.contentDocument || iframeRef.value?.contentWindow.document
  if (innerDoc && innerDoc.getElementsByTagName('html')[0]) {
    innerDoc.getElementsByTagName('html')[0].classList.remove('light')
    innerDoc.getElementsByTagName('html')[0].classList.remove('dark')
    innerDoc.getElementsByTagName('html')[0].classList.remove('sepia')
    innerDoc.getElementsByTagName('html')[0].classList.add(newColorMode)
  }
})

</script>

<template>
  <div
    v-if="enabled"
    id="iframeLoadingSpinner"
    class="m-auto w-full text-center relative"
  >
    <div class="absolute w-full mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="icon animate-spin mx-auto"
        style=""
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        data-v-ecd3ab7d=""
      >
        <path
          fill="currentColor"
          d="M6.804 15a1 1 0 0 0-1.366-.366l-1.732 1a1 1 0 0 0 1 1.732l1.732-1A1 1 0 0 0 6.804 15ZM3.706 8.366l1.732 1a1 1 0 1 0 1-1.732l-1.732-1a1 1 0 0 0-1 1.732ZM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm11.196-3a1 1 0 0 0 1.366.366l1.732-1a1 1 0 1 0-1-1.732l-1.732 1A1 1 0 0 0 17.196 9ZM15 6.804a1 1 0 0 0 1.366-.366l1-1.732a1 1 0 1 0-1.732-1l-1 1.732A1 1 0 0 0 15 6.804Zm5.294 8.83l-1.732-1a1 1 0 1 0-1 1.732l1.732 1a1 1 0 0 0 1-1.732Zm-3.928 1.928a1 1 0 1 0-1.732 1l1 1.732a1 1 0 1 0 1.732-1ZM21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-9 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-3-.804a1 1 0 0 0-1.366.366l-1 1.732a1 1 0 0 0 1.732 1l1-1.732A1 1 0 0 0 9 17.196ZM12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"
        />
      </svg>
    </div>
  </div>
  <iframe
    v-if="enabled"
    id="iframeElement"
    ref="iframeRef"
    src="/instagram"
    title="Latest Instagram posts"
    width="100%"
    class="w-full mx-[-10px] mb-14"
  />
  <div v-else>
    Instagram is disabled.<br><br>
    You can enabled it by adding this to app.config.ts:<br>
    <code>
      instagram: {
        enabled: true,
        wpPageId: 1234,
        wpBaseUrl: 'https://example.com',
      }
    </code>
  </div>
</template>
