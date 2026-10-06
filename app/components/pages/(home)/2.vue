<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <section class="overflow-hidden bg-white py-16 text-gray-900 lg:py-20">
    <div class="mx-auto w-5/6 max-w-7xl space-y-16 lg:space-y-20">
      <!-- Section Editorial Header -->
      <div v-reveal="'fade-up'" class="mx-auto max-w-4xl space-y-4 text-center">
        <span
          class="inline-block rounded-full bg-[#04308F]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#04308F] uppercase"
        >
          Two Engines. One Ecosystem.
        </span>
        <h2
          class="text-center font-serif text-3xl leading-tight font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          The future of business growth isn't just about having a great idea or finding great
          talent, <span class="text-[#04308F] italic">it's about connecting both.</span>
        </h2>
      </div>

      <!-- Feature Cards Sequence -->
      <div class="space-y-10 lg:space-y-16">
        <!-- Card 1: Venture's Growth Lab -->
        <article
          v-reveal="'fade-up'"
          class="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200/80 transition-all duration-500 hover:-translate-y-1 sm:p-10 lg:p-12"
        >
          <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <!-- Left Info Content -->
            <div class="space-y-6 lg:col-span-6">
              <span
                class="inline-block rounded-md bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wider text-emerald-800 uppercase"
              >
                CORE ENGINE 01 • VENTURE'S GROWTH LAB
              </span>
              <h3
                class="font-serif text-2xl leading-snug font-normal tracking-tight text-gray-900 lg:text-3xl xl:text-4xl"
              >
                Where Ventures Become Growth-Ready
              </h3>
              <p class="text-base leading-relaxed font-normal text-gray-600">
                A structured growth engine designed to help startups, high-growth companies, and
                enterprise initiatives define their direction, refine their identity, launch
                effective campaigns, and build digital platforms.
              </p>

              <!-- Checkmark Bullet List -->
              <ul class="space-y-3 text-sm font-medium text-gray-700 sm:text-base">
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span
                    ><strong>Strategy Layer:</strong> Business, Market Research, Positioning &
                    Growth Models</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span
                    ><strong>Branding Layer:</strong> Brand Strategy, Naming, Visual & Verbal
                    Identity</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span
                    ><strong>Marketing & Platforms:</strong> GTM Campaigns, Web & AI Digital
                    Infrastructure</span
                  >
                </li>
              </ul>

              <div class="pt-2">
                <NuxtLink
                  to="/business"
                  class="inline-flex items-center gap-2 text-base font-bold text-[#04308F] transition-colors duration-200 hover:text-[#05DED5]"
                >
                  <span>Explore Venture's Growth Lab</span>
                  <Icon
                    icon="lucide:arrow-right"
                    class="text-lg transition-transform duration-200 group-hover:translate-x-1.5"
                  />
                </NuxtLink>
              </div>
            </div>

            <!-- Right Preview UI Widget -->
            <div
              class="flex min-h-70 items-center justify-center rounded-2xl border border-emerald-100/80 bg-emerald-50/70 p-6 sm:p-8 lg:col-span-6"
            >
              <div
                class="w-full max-w-sm space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-md"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex size-10 items-center justify-center rounded-xl bg-[#026662] text-xl text-[#05F4EA]"
                  >
                    <Icon icon="solar:cpu-bold" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-gray-900">Growth Lab Architecture</h4>
                    <p class="text-xs text-gray-500">4-Layer System Integration</p>
                  </div>
                </div>
                <div class="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-xs">
                  <div class="flex justify-between font-semibold text-gray-700">
                    <span>Venture Readiness Index</span>
                    <span class="text-emerald-600">98% Launch Ready</span>
                  </div>
                  <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                    <div class="h-full w-[98%] rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 2: Talent-as-a-Service (TaaS) -->
        <article
          v-reveal="'fade-up'"
          class="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200/80 transition-all duration-500 hover:-translate-y-1 sm:p-10 lg:p-12"
        >
          <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <!-- Left Info Content -->
            <div class="space-y-6 lg:col-span-6">
              <span
                class="inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-[#04308F] uppercase"
              >
                CORE ENGINE 02 • TALENT-AS-A-SERVICE (TAAS)
              </span>
              <h3
                class="font-serif text-2xl leading-snug font-normal tracking-tight text-gray-900 lg:text-3xl xl:text-4xl"
              >
                The Predictive AI Talent Matching Engine
              </h3>
              <p class="text-base leading-relaxed font-normal text-gray-600">
                A 2-sided ecosystem connecting world-class creative talent with high-impact global
                opportunities, powered by predictive AI signaling to ensure precise alignment
                between capability and requirements.
              </p>

              <!-- Checkmark Bullet List -->
              <ul class="space-y-3 text-sm font-medium text-gray-700 sm:text-base">
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span
                    ><strong>For Creatives:</strong> Profile creation, AI matching, global work,
                    career growth</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span
                    ><strong>For Businesses:</strong> Requirements definition, AI matching, embedded
                    teams</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span
                    ><strong>Self-Learning Flywheel:</strong> Intelligent matching that continuously
                    improves</span
                  >
                </li>
              </ul>

              <div class="pt-2">
                <NuxtLink
                  to="/creatives"
                  class="inline-flex items-center gap-2 text-base font-bold text-[#04308F] transition-colors duration-200 hover:text-[#05DED5]"
                >
                  <span>Explore Talent-as-a-Service</span>
                  <Icon
                    icon="lucide:arrow-right"
                    class="text-lg transition-transform duration-200 group-hover:translate-x-1.5"
                  />
                </NuxtLink>
              </div>
            </div>

            <!-- Right Preview UI Widget -->
            <div
              class="flex min-h-70 items-center justify-center rounded-2xl border border-blue-100/80 bg-blue-50/70 p-6 sm:p-8 lg:col-span-6"
            >
              <div
                class="w-full max-w-sm space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-md"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-gray-500 uppercase">AI Talent Engine</span>
                  <span
                    class="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-[#04308F]"
                  >
                    AI Signal Live
                  </span>
                </div>
                <div class="space-y-3">
                  <div
                    class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-2"
                  >
                    <NuxtImg
                      src="/images/pages/(home)/testimonials/victor-ephraim.png"
                      class="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p class="text-xs font-bold text-gray-900">Victor E.</p>
                      <p class="text-[11px] text-gray-500">Product Designer • AI Match 99%</p>
                    </div>
                  </div>
                  <div
                    class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-2"
                  >
                    <NuxtImg
                      src="/images/pages/(home)/testimonials/don-okhufou.png"
                      class="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p class="text-xs font-bold text-gray-900">Don O.</p>
                      <p class="text-[11px] text-gray-500">Brand Strategist • AI Match 97%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 3: The Growth Lab Journey -->
        <article
          v-reveal="'fade-up'"
          class="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200/80 transition-all duration-500 hover:-translate-y-1 sm:p-10 lg:p-12"
        >
          <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <!-- Left Info Content -->
            <div class="space-y-6 lg:col-span-6">
              <span
                class="inline-block rounded-md bg-purple-50 px-3 py-1 text-xs font-bold tracking-wider text-purple-700 uppercase"
              >
                THE GROWTH JOURNEY
              </span>
              <h3
                class="font-serif text-2xl leading-snug font-normal tracking-tight text-gray-900 lg:text-3xl xl:text-4xl"
              >
                From Vision to Market Leadership
              </h3>
              <p class="text-base leading-relaxed font-normal text-gray-600">
                Whether at ideation, early stage, growth stage, or enterprise transformation,
                Deagensie guides ventures through a 6-step roadmap to scalable market dominance.
              </p>

              <!-- Checkmark Bullet List -->
              <ul class="space-y-3 text-sm font-medium text-gray-700 sm:text-base">
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span><strong>Phase 1:</strong> Discover & Strategize: Research & Position</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span><strong>Phase 2:</strong> Brand & Market: Identity & Campaigns</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon
                    icon="lucide:check"
                    class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                  />
                  <span
                    ><strong>Phase 3:</strong> Build & Grow: Digital Platforms & Talent
                    Scaling</span
                  >
                </li>
              </ul>

              <div class="pt-2">
                <NuxtLink
                  to="/why"
                  class="inline-flex items-center gap-2 text-base font-bold text-[#04308F] transition-colors duration-200 hover:text-[#05DED5]"
                >
                  <span>Learn Why Deagensie</span>
                  <Icon
                    icon="lucide:arrow-right"
                    class="text-lg transition-transform duration-200 group-hover:translate-x-1.5"
                  />
                </NuxtLink>
              </div>
            </div>

            <!-- Right Preview UI Widget -->
            <div
              class="flex min-h-70 items-center justify-center rounded-2xl border border-purple-100/80 bg-purple-50/70 p-6 sm:p-8 lg:col-span-6"
            >
              <div
                class="w-full max-w-sm space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-md"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex size-10 items-center justify-center rounded-xl bg-[#8F039C] text-xl text-white"
                  >
                    <Icon icon="solar:rocket-bold" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-gray-900">Venture Ecosystem</h4>
                    <p class="text-xs text-gray-500">6-Stage Growth Pipeline</p>
                  </div>
                </div>
                <div
                  class="space-y-1 rounded-xl border border-purple-100 bg-purple-50 p-3 text-xs text-purple-900"
                >
                  <p class="font-bold">Discover → Strategize → Brand → Market → Build → Grow</p>
                  <p class="text-gray-600">Integrated end-to-end execution</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css"></style>
