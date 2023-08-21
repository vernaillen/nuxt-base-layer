<script setup lang="ts">
import type { CommitResponse } from '@/types/github'
const appConfig = useAppConfig()

export interface Props {
  locale: string
}
defineProps<Props>()

const apiUrl = computed(() => 'https://api.github.com/repos/' + appConfig.github.repo + '/commits')
const { data: commits } = useLazyAsyncData<CommitResponse[]>('commits', () =>
  $fetch(apiUrl.value)
)
</script>

<template>
  <span v-if="commits && commits[0]">
    built on <NuxtTime :datetime="commits[0].commit.committer.date" month="long" day="numeric" year="numeric" :locale="locale" />
    (<NuxtLink :href="commits[0].html_url" target="_blank">
      {{ commits[0].sha.slice(0, 7) }}
    </NuxtLink>)
  </span>
</template>
