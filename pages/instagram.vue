<script setup lang="ts">
import type { WPInstagramPage } from '~/server/api/instagram'

const igContent = ref<string>()
const igConfig = useAppConfig().instagram
if (igConfig.enabled) {
  if (useInstagramCache().hasContent && useInstagramCache().content.length > 0) {
    igContent.value = useInstagramCache().content
  } else {
    const { data } = await useFetch<WPInstagramPage>('/api/instagram')
    igContent.value = data.value.content.rendered
    useInstagramCache().addContent(data.value.content.rendered)
  }
  useHead({
    link: [
      {
        href: '/sbi/sbi-styles.min.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.6.4.min.js',
        integrity: 'sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=',
        crossorigin: 'anonymous',
      },
      {
        id: 'sbi_scripts-js-extra',
        innerHTML: '/* <![CDATA[ */ var sb_instagram_js_options = { "font_method": "svg", "resized_url": "' + igConfig.wpBaseUrl + 'wp-content\/uploads\/sb-instagram-feed-images\/", "placeholder": "' + igConfig.wpBaseUrl + 'wp-content\/plugins\/instagram-feed-pro\/img\/placeholder.png", "br_adjust": "1" }; var sbiTranslations = { "share": "Share" }; /* ]]> */',
        type: 'text/javascript',
      },
      {
        id: 'sbi_scripts-js',
        src: igConfig.wpBaseUrl + 'wp-content/plugins/instagram-feed-pro/js/sbi-scripts.min.js?ver=6.2.3',
        type: 'text/javascript',
      },
      {
        src: '/sbi/iframeResizer.contentWindow.min.js',
        type: 'text/javascript',
      },
    ],
    style: [
      {
        innerHTML: ':root { background-color: transparent !important; }'
      }
    ]
  })
}
onMounted(() => {
  if (window.parent.document) {
    const spinner = window.parent.document.getElementById('iframeLoadingSpinner')
    if (spinner)
      spinner.classList.add('animate__animated', 'animate__fadeOut')
  }
})
</script>

<template>
  <div
    v-if="igContent"
    class="m-auto h-[400px]"
    v-html="igContent"
  />
</template>
