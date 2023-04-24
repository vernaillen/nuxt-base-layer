<script setup lang="ts">
import { onMounted } from 'vue'

useHead({
  script: [
    {
      src: '/sbi/iframeResizer.min.js',
      type: 'text/javascript',
    },
  ],
})
const iframeRef = ref<HTMLIFrameElement>()
onMounted(() => {
  //iFrameResize({}, '#iframeElement')
  if (iframeRef.value) iFrameResize({}, iframeRef.value)
})

const colorMode = useColorMode()
watch(() => colorMode.value, (newColorMode) => {
  const innerDoc = iframeRef.value?.contentDocument || iframeRef.value?.contentWindow.document;
  if(innerDoc && innerDoc.getElementsByTagName('html')[0]) {
    innerDoc.getElementsByTagName('html')[0].classList.remove('light')
    innerDoc.getElementsByTagName('html')[0].classList.remove('dark')
    innerDoc.getElementsByTagName('html')[0].classList.add(newColorMode)
  }
})

</script>

<template>
  <div
    id="iframeLoadingSpinner"
    class="m-auto w-full text-center relative"
  >
    <div class="absolute w-full mt-4">
      <Icon
        name="uil:spinner-alt"
        class="animate-spin"
        size="24"
      />
    </div>
  </div>
  <iframe
    id="iframeElement"
    ref="iframeRef"
    src="/instagram"
    width="100%"
    class="w-full mx-[-10px] mb-14"
  />
</template>
