<template>
  <div>
    <ColorMode />
    <section
      id="instagram"
      class="container mx-auto pt-5 px-10"
    >
      <div class="flex flex-wrap justify-center">
        <NuxtLink
          to="https://www.instagram.com/woutervernaillen/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon block text-gray-500 hover:text-primary"
            style=""
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            data-v-ecd3ab7d=""
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="flex flex-wrap justify-center mx-[-34px]">
        <InstagramIframe />
      </div>
    </section>
  </div>
</template>
