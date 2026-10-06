<script setup lang="ts">
import { Icon } from '@iconify/vue';

const open = defineModel<boolean>('open', { default: false });
</script>

<template>
  <Sheet v-model:open="open">
    <SheetTrigger as-child>
      <button type="button" class="ml-auto text-2xl">
        <Icon icon="hugeicons:menu-01" />
      </button>
    </SheetTrigger>
    <SheetContent class="w-full p-0">
      <SheetHeader class="bg-background sticky top-0 z-50">
        <div class="mx-auto flex h-16 w-5/6 items-center justify-between">
          <NuxtLink to="/" aria-label="Go to homepage">
            <NuxtImg :width="128" :height="34" src="/images/logo-dark.png" alt="Deagensie logo" />
          </NuxtLink>
          <SheetTrigger as-child>
            <button type="button" class="text-2xl">
              <Icon icon="hugeicons:cancel-01" />
            </button>
          </SheetTrigger>
        </div>
      </SheetHeader>
      <div class="flex h-[calc(100%-var(--spacing)*16)] flex-col gap-6 overflow-auto pt-12">
        <Accordion
          type="single"
          collapsible
          class="contents *:mx-auto *:w-5/6 *:border-none"
          style="--rr: calc(var(--radius) + 2px)"
        >
          <AccordionItem value="business" class="rounded-(--rr) bg-[#F8FEFE]">
            <AccordionTrigger class="bg-background rounded-(--rr) border p-3">
              Venture's Growth Lab
            </AccordionTrigger>
            <AccordionContent class="space-y-4 px-3 pt-7 pb-5">
              <div class="space-y-4">
                <p class="font-medium">
                  <NuxtLink to="/business" class="hover:underline"> Venture's Growth Lab </NuxtLink>
                </p>
                <p class="text-sm leading-relaxed">
                  Where Ventures Become Growth-Ready. Strategy, Branding, Marketing, Digital
                  Platforms.
                </p>
              </div>
              <hr />
              <div class="space-y-6">
                <p class="text-sm leading-relaxed font-medium uppercase">Growth Layers</p>
                <ul
                  class="space-y-4 **:[a]:inline-flex **:[a]:items-center **:[a]:gap-2 **:[a]:text-xs **:[a]:leading-normal **:[svg]:text-xl"
                >
                  <li>
                    <NuxtLink to="/business" class="hover:underline">
                      <Icon icon="hugeicons:arrow-right-01" />
                      01 Strategy
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/business" class="hover:underline">
                      <Icon icon="hugeicons:arrow-right-01" />
                      02 Branding
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/business" class="hover:underline">
                      <Icon icon="hugeicons:arrow-right-01" />
                      03 Marketing
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/business" class="hover:underline">
                      <Icon icon="hugeicons:arrow-right-01" />
                      04 Digital Platforms
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="creatives" class="rounded-(--rr) bg-[#F8FEFE]">
            <AccordionTrigger class="bg-background rounded-(--rr) border p-3">
              Talent-as-a-Service (TaaS)
            </AccordionTrigger>
            <AccordionContent class="space-y-4 px-3 pt-7 pb-5">
              <div class="space-y-4">
                <p class="font-medium">
                  <NuxtLink to="/creatives" class="hover:underline">Talent-as-a-Service</NuxtLink>
                </p>
                <p class="text-sm leading-relaxed">
                  Predictive AI talent matching engine connecting global creative talent to
                  businesses and opportunities.
                </p>
              </div>
              <hr />
              <div class="space-y-4">
                <p class="text-sm leading-relaxed font-medium">
                  <NuxtLink to="/creatives" class="hover:underline">For Creatives</NuxtLink>
                </p>
                <p class="linedblock text-xs leading-normal">
                  Build your talent profile, discover global opportunities, and get matched with
                  predictive AI.
                </p>
              </div>
              <div class="space-y-4">
                <p class="text-sm leading-relaxed font-medium">
                  <NuxtLink to="/creatives" class="hover:underline">For Businesses</NuxtLink>
                </p>
                <p class="linedblock text-xs leading-normal">
                  Define project requirements, review AI-matched candidates, and build dedicated
                  creative teams.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-deagensie" class="rounded-(--rr) bg-[#F8FEFE]">
            <AccordionTrigger class="bg-background rounded-(--rr) border p-3">
              Why Deagensie?
            </AccordionTrigger>
            <AccordionContent class="space-y-4 px-3 pt-7 pb-5">
              <div class="space-y-4">
                <p class="font-medium">
                  <NuxtLink to="/why" class="hover:underline">The Deagensie Difference</NuxtLink>
                </p>
                <p class="text-sm leading-relaxed">
                  Strategy + Brand + Market + Technology + Talent. One integrated ecosystem.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="about" class="rounded-(--rr) bg-[#F8FEFE]">
            <AccordionTrigger class="bg-background rounded-(--rr) border p-3">
              About Us
            </AccordionTrigger>
            <AccordionContent class="space-y-4 px-3 pt-7 pb-5">
              <div class="space-y-4">
                <p class="font-medium">
                  <NuxtLink to="/about">About Deagensie</NuxtLink>
                </p>
                <p class="text-sm leading-relaxed">
                  AI-led, ecosystem-driven growth & talent platform built at the intersection of
                  transformation and technology.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="resource" class="rounded-(--rr) bg-[#F8FEFE]">
            <AccordionTrigger class="bg-background rounded-(--rr) border p-3">
              Resources
            </AccordionTrigger>
            <AccordionContent class="space-y-4 px-3 pt-7 pb-5">
              <div class="space-y-4">
                <p class="font-medium">
                  <NuxtLink to="/resource" class="hover:underline">
                    Growth & Talent Intelligence Hub
                  </NuxtLink>
                </p>
                <p class="text-sm leading-relaxed">
                  Insights, strategies, and guides for growing ventures and creative professionals.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div class="bg-background sticky bottom-0 z-50 mx-auto mt-auto w-5/6 space-y-3 pt-4 pb-12">
          <NuxtLink
            to="/contact"
            class="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white p-3 text-center text-sm font-semibold text-gray-800 transition-all duration-200 hover:border-[#04308F] hover:text-[#04308F]"
          >
            Contact Us
          </NuxtLink>
          <NuxtLink
            to="/waitlist"
            class="inline-block w-full rounded-full bg-[#05DED5] p-3 text-center font-semibold text-gray-950"
          >
            Enter Deagensie
          </NuxtLink>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<style scoped lang="css">
@reference "../../assets/css/main.css";

.linedblock {
  @apply relative isolate px-2 py-1 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-linear-to-b before:from-current before:from-15% before:to-current/12.5;
}
</style>
