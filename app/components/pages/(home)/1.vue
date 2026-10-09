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
  <section class="space-y-10 py-10 lg:space-y-12 lg:py-10">
    <!-- Heading -->
    <div v-reveal="'fade-up'" class="mx-auto max-w-4xl space-y-4 text-center">
      <span
        class="inline-block rounded-full bg-[#04308F]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#04308F] uppercase"
      >
        Brands that Trusts Deagensie.
      </span>

      <h2
        class="mx-auto w-full max-w-3xl text-center font-serif text-2xl leading-tight font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-5xl 2xl:text-6xl"
      >
        Forward-thinking brands trust <span class="text-[#04308F]"> Deagensie </span>
      </h2>
    </div>

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
