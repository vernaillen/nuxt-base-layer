<script setup lang="ts">
const route = useRoute()
const isIG = computed(() => {
  return route.path.startsWith('/instagram')
})
</script>

<template>
  <div>
    <header v-if="!isIG" class="p-4">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/lazyloading">Lazy Loading Images</NuxtLink> |
      <NuxtLink to="/github">GitHub</NuxtLink>
      <br><br>
    </header>
    <NuxtPage/>
  </div>
</template>
