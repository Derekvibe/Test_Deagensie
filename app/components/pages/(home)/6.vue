<template>
  <section class="overflow-hidden border-t border-gray-100 bg-white py-24 text-gray-900 lg:py-32">
    <div class="mx-auto grid w-5/6 max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
      <!-- Card 1: Venture Project Pathway -->
      <article
        class="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#02143C] p-8 text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1.5 lg:p-12"
      >
        <div
          class="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-[#05DED5]/20 blur-3xl transition-transform duration-500 group-hover:scale-150"
        />
        <div>
          <span
            class="mb-4 inline-block text-xs font-semibold tracking-widest text-[#05F4EA] uppercase"
          >
            For Ventures & Businesses
          </span>
          <h3
            class="font-serif text-2xl leading-snug font-normal tracking-tight lg:text-3xl xl:text-4xl"
          >
            Access Global Oppurtunity
          </h3>
          <p
            class="mt-4 mb-8 text-sm leading-relaxed text-gray-300 lg:text-base lg:leading-relaxed"
          >
            Partner with our strategy, branding, marketing, and digital platform architects to build
            systems that scale.
          </p>
        </div>
        <div>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full bg-[#05DED5] px-7 py-4 text-base font-semibold text-[#060607] transition-all duration-300 hover:scale-105 hover:bg-[#05F4EA] hover:shadow-[0_0_25px_rgba(5,222,213,0.5)] lg:text-lg"
          >
            Start a Venture Project
          </NuxtLink>
        </div>
      </article>

      <!-- Card 2: Talent Ecosystem Pathway -->
      <article
        class="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-br from-[#04ADA6] to-[#04308F] p-8 text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1.5 lg:p-12"
      >
        <div
          class="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-white/20 blur-3xl transition-transform duration-500 group-hover:scale-150"
        />
        <div>
          <span
            class="mb-4 inline-block text-xs font-semibold tracking-widest text-white/90 uppercase"
          >
            For Creative Talent
          </span>
          <h3
            class="font-serif text-2xl leading-snug font-normal tracking-tight lg:text-3xl xl:text-4xl"
          >
            <!-- Join Talent-as-a-Service (TaaS) & Access Global Work -->
            Join Our Talent Pool
          </h3>
          <p
            class="mt-4 mb-8 text-sm leading-relaxed text-white/90 lg:text-base lg:leading-relaxed"
          >
            Create your verified profile and get matched by our predictive AI engine with
            high-impact global opportunities.
          </p>
        </div>
        <div>
          <NuxtLink
            to="/creatives"
            class="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-[#060607] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] lg:text-lg"
          >
            Find Opportunities
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="css"></style>
