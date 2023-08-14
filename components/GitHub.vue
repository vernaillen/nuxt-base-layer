<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <p v-if="appConfig.github.repo && appConfig.github.repo.length > 0">
    <GitHubData />
  </p>
</template>
