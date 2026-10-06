<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

const route = useRoute();
const isSheetOpen = ref(false);
const isMobile = useMediaQuery('(max-width: 1023px)');

watch(route, () => {
  if (!isMobile.value) return;
  isSheetOpen.value = false;
});
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 w-full px-3 pt-3 transition-all duration-300 sm:px-6 lg:px-8"
  >
    <div
      class="mx-auto flex h-18 w-full max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/90 px-6 text-white shadow-xl backdrop-blur-md transition-all duration-300 lg:h-20 lg:px-8"
    >
      <NuxtLink to="/" aria-label="Go to homepage" class="flex shrink-0 items-center py-1">
        <NuxtImg
          src="/images/logo.png"
          alt="Deagensie logo"
          class="h-13 w-auto object-contain transition-all duration-300 sm:h-26 lg:h-32 xl:h-36"
        />
      </NuxtLink>
      <SiteHeaderMobileNav v-if="isMobile" v-model:open="isSheetOpen" />
      <SiteHeaderDesktopNav v-else />
    </div>
  </header>
</template>
