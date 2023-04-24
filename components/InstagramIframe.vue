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
onMounted(() => {
  iFrameResize({}, '#iframeElement')
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
    src="/instagram"
    width="100%"
    class="w-full mx-[-10px] mb-14"
  />
</template>
