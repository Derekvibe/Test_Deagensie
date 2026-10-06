<script setup lang="ts">
const brands = [
  { logoSrc: '/images/partners/hmd.png', altText: 'HMD' },
  { logoSrc: '/images/partners/xerdocshealth.png', altText: 'Xerdocshealth' },
  {
    logoSrc: '/images/partners/lw-trade-and-investment-forum.png',
    altText: 'LoveWorld Trade and Investment Forum',
  },
  { logoSrc: '/images/partners/green-plains.png', altText: 'Green Plains' },
  { logoSrc: '/images/partners/people-os.png', altText: 'People OS' },
  { logoSrc: '/images/partners/deloxxe.png', altText: 'Deloxxe' },
  { logoSrc: '/images/partners/lw-registry.png', altText: 'LW Registry' },
  { logoSrc: '/images/partners/talent-chess.png', altText: 'Talent Chess' },
];
</script>

<template>
  <section class="space-y-10 py-10 lg:space-y-12 lg:py-18">
    <!-- Heading -->
    <h2 class="mx-auto w-full max-w-3xl text-center text-2xl leading-tight font-medium lg:text-3xl">
      Forward-thinking brands trust Deagensie
    </h2>

    <!-- Continuous Logo Marquee -->
    <div class="relative w-full overflow-hidden">
      <div class="animate-marquee flex w-max items-center gap-10 px-5 lg:gap-16">
        <!-- First set -->
        <div
          v-for="{ logoSrc, altText } in brands"
          :key="`first-${altText}`"
          class="flex shrink-0 items-center justify-center"
        >
          <NuxtImg
            :src="logoSrc"
            :alt="`Partner logo: ${altText}`"
            class="h-8 w-auto opacity-50 transition-opacity duration-300 hover:opacity-100 lg:h-11"
            loading="lazy"
          />
        </div>

        <!-- Duplicate set for seamless looping -->
        <div
          v-for="{ logoSrc, altText } in brands"
          :key="`second-${altText}`"
          class="flex shrink-0 items-center justify-center"
        >
          <NuxtImg
            :src="logoSrc"
            :alt="`Partner logo: ${altText}`"
            class="h-8 w-auto opacity-50 transition-opacity duration-300 hover:opacity-100 lg:h-11"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
