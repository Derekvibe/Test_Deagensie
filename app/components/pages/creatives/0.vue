<template>
  <section class="border-b border-gray-100 bg-white pt-28 pb-16 text-gray-900 lg:pt-36 lg:pb-24">
    <div class="mx-auto w-5/6 max-w-7xl">
      <div v-reveal="'fade-up'" class="max-w-3xl space-y-6">
        <span
          class="inline-block rounded-full bg-[#04308F]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#04308F] uppercase"
        >
          Core Engine 02 • Talent-as-a-Service (TaaS)
        </span>
        <h1
          class="font-serif text-3xl leading-tight font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-6xl"
        >
          Connecting Global Talent with High-Impact Opportunities
        </h1>
        <p class="text-base leading-relaxed font-normal text-gray-600 sm:text-lg lg:text-xl">
          Powered by predictive AI matching intelligence, TaaS bridges exceptional creative
          professionals with global ventures in a transparent, high-efficiency 2-sided ecosystem.
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-4">
          <NuxtLink
            to="/register"
            class="inline-flex items-center gap-2 rounded-full bg-[#04308F] px-8 py-4 text-base font-semibold text-white shadow-md shadow-[#04308F]/20 transition-all duration-300 hover:scale-105 hover:bg-[#05DED5] hover:text-gray-900"
          >
            Join TaaS Network
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-300 hover:border-[#04308F] hover:text-[#04308F]"
          >
            Hire TaaS Talent
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css"></style>
