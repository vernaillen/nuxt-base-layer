<script setup lang="ts">
import dayjs from 'dayjs'
import type { CommitResponse } from '@/types/github'
const appConfig = useAppConfig()

const apiUrl = computed(() => 'https://api.github.com/repos/' + appConfig.github.repo + '/commits')
const { data: commits } = useLazyAsyncData<CommitResponse[]>('commits', () =>
  $fetch(apiUrl.value)
)
</script>

<template>
  <span v-if="commits && commits[0]">
    built: {{ dayjs(commits[0].commit.committer.date).format(appConfig.github.dateFormat) }}
    (<NuxtLink :href="commits[0].html_url" target="_blank">
      {{ commits[0].sha.slice(0, 7) }}
    </NuxtLink>)
  </span>
</template>
