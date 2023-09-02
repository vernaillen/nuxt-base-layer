
export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();
  if (appConfig.instagram?.enabled) {
    useHead({
      script: [
        {
          src: '/sbi/iframeResizer.min.js',
          async: true,
          type: 'text/javascript'
        }
      ]
    })
  }
})
