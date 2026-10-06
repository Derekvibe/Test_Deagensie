<script setup lang="ts"></script>

<template>
  <section
    class="relative overflow-hidden border-b border-gray-200/60 bg-[#F8FAFC] pt-32 pb-16 text-gray-900 lg:pt-36 lg:pb-20"
  >
    <!-- Subtle Ambient Glow -->
    <div
      class="pointer-events-none absolute -top-24 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#04308F]/10 via-[#05DED5]/15 to-transparent blur-3xl"
    />

    <div class="relative mx-auto w-5/6 max-w-7xl">
      <div class="max-w-3xl space-y-6">
        <!-- Category Pill Badge -->
        <div class="flex items-center gap-3">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-[#04308F]/20 bg-[#04308F]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#04308F] uppercase"
          >
            01: Editorial & Insights
          </span>
        </div>

        <!-- Main Heading -->
        <h1
          class="font-serif text-3xl leading-tight font-normal tracking-tight text-[#02143C] sm:text-5xl lg:text-6xl lg:leading-tight"
        >
          Where ventures grow<br />
          <span class="text-gray-600 italic">and creatives thrive.</span>
        </h1>

        <!-- Subtitle -->
        <p class="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
          Empowering organizations and talent with data-backed strategies, brand architecture, and
          deep insights into the evolving digital creative economy.
        </p>

        <!-- Topic Tags Pill Strip -->
        <div class="flex flex-wrap items-center gap-2 pt-2 text-xs text-gray-600">
          <span class="text-[11px] font-medium tracking-wider text-gray-400 uppercase"
            >Popular Topics:</span
          >
          <span
            v-for="topic in [
              'Growth Strategy',
              'Brand Development',
              'Creative Economy',
              'AI Innovation',
              'Digital Products',
            ]"
            :key="topic"
            class="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700 shadow-2xs transition hover:border-[#04308F] hover:text-[#04308F]"
          >
            {{ topic }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
