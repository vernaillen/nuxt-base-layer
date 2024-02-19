<script setup lang="ts">
import type { CommitResponse } from '@/types/github'
const appConfig = useAppConfig()
const config = useRuntimeConfig()

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
  <span v-if="commits && commits[0]" class="grid md:grid-cols-2">
    <div class="md:text-end md:mr-3">
      built with <Icon name="mdi:heart" color="red" />
      using <NuxtLink href="https://nuxt.com" target="_blank"><Icon class="w-12 -mt-1" name="logos:nuxt-icon" /> Nuxt {{ config.public.nuxtVersion }}</NuxtLink>
    </div>
    <div class="md:text-start md:ml-3">
      last updated on <NuxtLink :href="commits[0].html_url" target="_blank">
        <NuxtTime :datetime="commits[0].commit.committer.date" month="long" day="numeric" year="numeric" :locale="locale" /> <Icon name="mdi:github" />
      </NuxtLink>
    </div>
  </span>
</template>
