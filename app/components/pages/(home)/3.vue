<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <section class="overflow-hidden border-t border-gray-100 bg-white py-24 text-gray-900 lg:py-32">
    <div class="mx-auto w-5/6 max-w-7xl space-y-16 lg:space-y-20">
      <!-- Section Editorial Header -->
      <div class="mx-auto space-y-4 text-center">
        <h2
          class="font-serif text-3xl leading-tight font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          One platform. <span class="text-[#04308F]">Two core engines.</span>
        </h2>
        <p class="text-base leading-relaxed font-normal text-gray-600 lg:text-lg">
          Seamlessly integrating Venture's Growth Lab with Talent-as-a-Service into a unified
          execution ecosystem for modern businesses and global talent.
        </p>
      </div>

      <!-- Single Platform Split Card Container -->
      <div
        class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-100/80"
      >
        <div class="grid grid-cols-1 items-stretch lg:grid-cols-12">
          <!-- Left Column Content -->
          <div class="flex flex-col justify-center space-y-6 p-8 sm:p-12 lg:col-span-6 lg:p-14">
            <span
              class="inline-block w-fit rounded-md bg-gray-100 px-3 py-1 text-xs font-bold tracking-wider text-gray-600 uppercase"
            >
              INTEGRATED ECOSYSTEM
            </span>
            <h3
              class="font-serif text-2xl leading-snug font-normal tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
            >
              Deploy AI-led growth systems & talent
            </h3>
            <p class="text-base leading-relaxed font-normal text-gray-600">
              A single platform designed to handle your entire growth journey, from defining brand
              strategy to deploying AI-matched creative teams into production systems.
            </p>

            <!-- Checkmark Bullet List -->
            <ul class="space-y-3.5 pt-2 text-sm font-medium text-gray-700 sm:text-base">
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                />
                <span
                  ><strong>01 Strategy & Branding:</strong> Defining direction, visual identity, and
                  market positioning</span
                >
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                />
                <span
                  ><strong>02 Digital Platforms:</strong> Web apps, digital products, and AI
                  workflow infrastructure</span
                >
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  icon="lucide:check"
                  class="mt-0.5 shrink-0 text-xl font-bold text-[#05DED5]"
                />
                <span
                  ><strong>03 TaaS Talent Integration:</strong> On-demand embedded creative
                  professionals</span
                >
              </li>
            </ul>

            <div class="pt-4">
              <NuxtLink
                to="/business"
                class="inline-flex items-center gap-2 text-base font-bold text-[#04308F] transition-colors duration-200 hover:text-[#05DED5]"
              >
                <span>Discover Venture's Growth Lab</span>
                <Icon
                  icon="lucide:arrow-right"
                  class="text-lg transition-transform duration-200 hover:translate-x-1"
                />
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column Media Container with Floating Profile Badge -->
          <div
            class="relative flex min-h-90 items-center justify-center bg-emerald-50/60 p-6 sm:p-10 lg:col-span-6"
          >
            <div class="relative h-full max-h-105 w-full overflow-hidden rounded-2xl shadow-md">
              <NuxtImg
                src="/images/pages/(home)/image2.png"
                alt="Deagensie Integrated Talent Platform"
                class="size-full object-cover"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
              />

              <!-- Floating Profile Badge -->
              <div
                class="absolute bottom-6 left-6 space-y-1 rounded-2xl border border-white/40 bg-white/95 px-4 py-3 text-gray-900 shadow-xl backdrop-blur-md"
              >
                <p class="text-sm font-bold text-gray-900">Blossom Adaku Obiorah</p>
                <p class="text-xs font-semibold text-[#04308F]">Executive Assistant</p>
                <div class="flex items-center gap-1.5 pt-1 text-[11px] font-medium text-gray-500">
                  <Icon icon="simple-icons:github" class="text-xs text-black" />
                  <span>Verified TaaS Talent • Deagensie Ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Grid Cards -->
      <div class="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3 lg:gap-10">
        <article
          class="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#04308F]/40 hover:shadow-xl lg:p-10"
        >
          <div
            class="mb-4 size-3 rounded-full bg-[#05DED5] transition-transform duration-300 group-hover:scale-150"
          />
          <h3
            class="mb-3 font-serif text-xl font-normal text-gray-900 group-hover:text-[#04308F] lg:text-2xl"
          >
            Venture's Growth Lab
          </h3>
          <p class="text-sm leading-relaxed font-normal text-gray-600 lg:text-base">
            4 integrated layers (Strategy, Branding, Marketing, Digital Platforms) guiding ventures
            from discovery to market dominance.
          </p>
        </article>

        <article
          class="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#04308F]/40 hover:shadow-xl lg:p-10"
        >
          <div
            class="mb-4 size-3 rounded-full bg-[#04308F] transition-transform duration-300 group-hover:scale-150"
          />
          <h3
            class="mb-3 font-serif text-xl font-normal text-gray-900 group-hover:text-[#04308F] lg:text-2xl"
          >
            Talent-as-a-Service (TaaS)
          </h3>
          <p class="text-sm leading-relaxed font-normal text-gray-600 lg:text-base">
            Predictive AI matching talent signals with opportunity signals to connect top global
            creative talent with high-impact ventures.
          </p>
        </article>

        <article
          class="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#04308F]/40 hover:shadow-xl lg:p-10"
        >
          <div
            class="mb-4 size-3 rounded-full bg-[#8F039C] transition-transform duration-300 group-hover:scale-150"
          />
          <h3
            class="mb-3 font-serif text-xl font-normal text-gray-900 group-hover:text-[#04308F] lg:text-2xl"
          >
            Self-Learning Ecosystem Flywheel
          </h3>
          <p class="text-sm leading-relaxed font-normal text-gray-600 lg:text-base">
            A continuous loop where venture growth creates talent opportunities and talent
            excellence accelerates venture success.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css"></style>
