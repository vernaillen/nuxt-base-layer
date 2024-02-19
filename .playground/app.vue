<script setup lang="ts">
const route = useRoute()
const isIG = computed(() => {
  return route.path.startsWith('/instagram')
})

const links = [
  {
    label: 'Instagram',
    to: '/'
  },
  {
    label: 'Lazy Loading Images',
    to: '/lazyloading'
  }
]
</script>

<template>
  <UMain>
    <UHeader v-if="!isIG" title="@vernaillen/nuxt-base-layer" :links="links" class="p-4" />
    <NuxtPage/>
    <UFooter v-if="!isIG">
      <template #center>
        <GitHub/>
      </template>
    </UFooter>
  </UMain>
</template>
