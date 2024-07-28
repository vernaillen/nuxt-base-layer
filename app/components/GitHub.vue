<script setup lang="ts">
const appConfig = useAppConfig()

export interface Props {
  locale?: string
}
withDefaults(defineProps<Props>(), {
  locale: 'en-GB'
})
</script>

<template>
  <p v-if="appConfig.github.repo && appConfig.github.repo.length > 0">
    <GitHubData :locale="locale" />
  </p>
</template>
