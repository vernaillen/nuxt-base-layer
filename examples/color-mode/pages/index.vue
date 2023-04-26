<template>
  <div>
    <ColorMode />
    <section id="instagram" class="container mx-auto pt-5 px-10">
      <div class="flex flex-wrap justify-center">
        <NuxtLink to="https://www.instagram.com/woutervernaillen/" target="_blank">
          <Icon name="mdi:instagram" class="block text-gray-500 hover:text-primary" size="24" />
        </NuxtLink>
      </div>
      <div class="flex flex-wrap justify-center mx-[-34px]">
        <InstagramIframe />
      </div>
    </section>
  </div>
</template>
