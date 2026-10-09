<script setup lang="ts">
import { Icon } from '@iconify/vue';

type DesktopMenu = 'business' | 'creatives' | 'why' | 'about' | 'subscription' | 'resource';

const route = useRoute();
const desktopNavRef = ref<HTMLElement | null>(null);
const activeDesktopMenu = ref<DesktopMenu | null>(null);
let closeTimer: ReturnType<typeof setTimeout> | undefined;

const menuItems: { id: DesktopMenu; label: string; to: string }[] = [
  { id: 'business', label: 'Ventures', to: '/business' },
  { id: 'creatives', label: 'Creatives', to: '/creatives' },
  { id: 'why', label: 'Why Deagensie?', to: '/why' },
  { id: 'about', label: 'About Us', to: '/about' },
  { id: 'resource', label: 'Resources', to: '/resource' },
];

const directLinks: { label: string; to: string }[] = [];

const cancelClose = () => {
  if (!closeTimer) return;
  clearTimeout(closeTimer);
  closeTimer = undefined;
};

const openDesktopMenu = (menu: DesktopMenu) => {
  cancelClose();
  activeDesktopMenu.value = menu;
};

const closeDesktopMenu = () => {
  cancelClose();
  activeDesktopMenu.value = null;
};

const scheduleDesktopMenuClose = () => {
  cancelClose();
  closeTimer = setTimeout(closeDesktopMenu, 180);
};

const handleDesktopNavFocusOut = (event: FocusEvent) => {
  const nextTarget = event.relatedTarget;
  if (!(nextTarget instanceof Node) || !desktopNavRef.value?.contains(nextTarget)) {
    closeDesktopMenu();
  }
};

watch(route, closeDesktopMenu);

onUnmounted(cancelClose);
</script>

<template>
  <nav
    ref="desktopNavRef"
    class="flex flex-1 items-center"
    @mouseleave="scheduleDesktopMenuClose"
    @mouseenter="cancelClose"
    @focusout="handleDesktopNavFocusOut"
    @keydown.esc="closeDesktopMenu"
  >
    <div class="mx-auto flex gap-4 text-xs font-semibold xl:gap-6 xl:text-sm xl:leading-relaxed">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.id"
        :to="item.to"
        class="inline-flex items-center gap-1.5 hover:underline"
        @mouseenter="openDesktopMenu(item.id)"
        @focus="openDesktopMenu(item.id)"
      >
        {{ item.label }}
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6 7.45831L11.1667 12.8916C10.525 13.5333 9.475 13.5333 8.83333 12.8916L3.4 7.45831"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NuxtLink>
      <NuxtLink
        v-for="link in directLinks"
        :key="link.to"
        :to="link.to"
        class="inline-flex items-center hover:underline"
        @mouseenter="closeDesktopMenu"
        @focus="closeDesktopMenu"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
    <NuxtLink
      to="/waitlist"
      class="text-foreground rounded-full bg-[#05DED5] px-4 py-2 text-sm font-semibold transition-transform hover:scale-105 xl:px-6 xl:py-3 xl:text-base"
      @focus="closeDesktopMenu"
    >
      Enter Deagensie
    </NuxtLink>
  </nav>

  <!-- Desktop Navigation High-Opacity Neutral Gray Backdrop Overlay -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="activeDesktopMenu"
        class="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-md"
        aria-hidden="true"
        @click="closeDesktopMenu"
        @mouseenter="closeDesktopMenu"
      />
    </Transition>
  </Teleport>

  <div
    v-if="activeDesktopMenu"
    class="text-popover-foreground animate-in fade-in-0 zoom-in-95 bg-popover fixed top-[calc((var(--spacing)*20)+(var(--spacing)*1))] left-1/2 z-50 -translate-x-1/2 rounded-[calc(var(--radius)+2px)] shadow-md outline-none"
    @mouseenter="cancelClose"
    @mouseleave="scheduleDesktopMenuClose"
  >
    <div
      v-if="activeDesktopMenu === 'business'"
      class="flex aspect-880/420 w-[calc(880/1440*100vw)] max-w-[880px] gap-8 rounded-[inherit] p-8"
    >
      <div class="flex flex-1 flex-col justify-between space-y-4">
        <div class="space-y-3">
          <NuxtLink
            to="/business"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:target-02" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Brand Positioning & Strategy
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Build investor-grade positioning, narrative & market identity for your venture.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/business"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:cpu" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Growth Engineering & AI
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Predictive marketing intelligence, scalable acquisition systems & growth roadmaps.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/subscription"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:user-group" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                On-Demand Creative Squads
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Deploy dedicated African creative teams & growth experts on flexible plans.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="pt-1">
          <NuxtLink
            to="/business"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#026662] hover:underline"
          >
            Explore all venture solutions
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
      </div>

      <div
        class="relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-[#05DED5]/30 bg-[#E6FEFD] p-7 text-gray-950"
      >
        <div class="space-y-3">
          <p class="text-xl leading-tight font-bold">Build a Scalable Brand</p>
          <NuxtLink
            to="/waitlist"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04308F] hover:underline"
          >
            Enter Deagensie Waitlist
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
        <div class="mt-4 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2">
          <NuxtImg
            src="/images/pages/(home)/hero.webp"
            class="aspect-16/10 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>

    <div
      v-else-if="activeDesktopMenu === 'creatives'"
      class="flex aspect-880/420 w-[calc(880/1440*100vw)] max-w-[880px] gap-8 rounded-[inherit] p-8"
    >
      <div class="flex flex-1 flex-col justify-between space-y-4">
        <div class="space-y-3">
          <NuxtLink
            to="/creatives"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:user-ai" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Talent-as-a-Service (TaaS)
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Predictive AI talent matching engine connecting African talent to global roles.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/creatives"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:paint-brush-01" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                For Creatives & Designers
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Build your talent profile, earn competitive global income & remain rooted in Africa.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/register"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:user-group-02" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Join Creative Community
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Network of emerging young leaders, innovators & top creative minds across the
                continent.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="pt-1">
          <NuxtLink
            to="/creatives"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#026662] hover:underline"
          >
            Learn about our creative talent
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
      </div>

      <div
        class="relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-[#05DED5]/30 bg-[#E6FEFD] p-7 text-gray-950"
      >
        <div class="space-y-3">
          <p class="text-xl leading-tight font-bold">Hire Top 1% African Creatives</p>
          <NuxtLink
            to="/subscription"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04308F] hover:underline"
          >
            Explore Talent Subscriptions
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
        <div class="mt-4 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2">
          <NuxtImg
            src="/images/pages/why/hero-4.png"
            class="aspect-16/10 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>

    <div
      v-else-if="activeDesktopMenu === 'why'"
      class="flex aspect-880/420 w-[calc(880/1440*100vw)] max-w-[880px] gap-8 rounded-[inherit] p-8"
    >
      <div class="flex flex-1 flex-col justify-between space-y-4">
        <div class="space-y-3">
          <NuxtLink
            to="/why"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:zap" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                The Deagensie Difference
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Strategy + Brand + Market + Technology + Talent integrated into one ecosystem.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/why"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:rocket" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Founders' Growth Lab
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Where early-stage startups and scaling companies become category leaders.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/why"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:globe-02" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                African Excellence, Global Scale
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Building world-class brands from the continent competing on a global stage.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="pt-1">
          <NuxtLink
            to="/why"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#026662] hover:underline"
          >
            Discover the Deagensie Ecosystem
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
      </div>

      <div
        class="relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-[#05DED5]/30 bg-[#E6FEFD] p-7 text-gray-950"
      >
        <div class="space-y-3">
          <p class="text-xl leading-tight font-bold">See Our Brand Transformations</p>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04308F] hover:underline"
          >
            View Selected Work
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
        <div class="mt-4 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2">
          <NuxtImg
            src="/images/pages/why/hero-2.png"
            class="aspect-16/10 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>

    <div
      v-else-if="activeDesktopMenu === 'about'"
      class="flex aspect-880/420 w-[calc(880/1440*100vw)] max-w-[880px] gap-8 rounded-[inherit] p-8"
    >
      <div class="flex flex-1 flex-col justify-between space-y-4">
        <div class="space-y-3">
          <NuxtLink
            to="/about"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:user-id-verification" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Who We Are
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                AI-led, ecosystem-driven growth and talent platform at the intersection of
                creativity and technology.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/portfolio"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:briefcase-02" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Our Portfolio
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Explore brand transformations, case studies and creative work we have delivered.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:mail-01" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Contact Us
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Reach our team for partnerships, custom solutions or enterprise enquiries.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="pt-1">
          <NuxtLink
            to="/about"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#026662] hover:underline"
          >
            Learn about Deagensie
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
      </div>

      <div
        class="relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-[#05DED5]/30 bg-[#E6FEFD] p-7 text-gray-950"
      >
        <div class="space-y-3">
          <p class="text-xl leading-tight font-bold">Built on Integrity. Driven by Impact.</p>
          <NuxtLink
            to="/waitlist"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04308F] hover:underline"
          >
            Join the Ecosystem
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
        <div class="mt-4 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2">
          <NuxtImg
            src="/images/pages/about/who-we-are.webp"
            class="aspect-16/10 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>

    <div
      v-else-if="activeDesktopMenu === 'subscription'"
      class="flex aspect-887/336 w-[calc(887/1440*100vw)] max-w-[887px] gap-12.5 rounded-[inherit] p-10"
    >
      <div class="w-[calc(304/887*100%+calc(var(--spacing)*10))] shrink-0 space-y-6">
        <p class="text-2xl leading-normal font-semibold">
          <NuxtLink to="/subscription" class="hover:underline">
            Flexible Subscription Model
          </NuxtLink>
        </p>
        <p>Access business solutions and creative talents on a flexible, project-based basis.</p>
      </div>
      <div class="flex flex-1 justify-between">
        <div class="space-y-6">
          <p class="text-lg leading-snug font-medium uppercase">Businesses</p>
          <ul
            class="space-y-6 **:[a]:inline-flex **:[a]:items-center **:[a]:gap-4 **:[a]:py-1 **:[a]:text-sm **:[a]:leading-relaxed **:[svg]:text-base"
          >
            <li>
              <NuxtLink to="/subscription" class="hover:underline">
                <Icon icon="hugeicons:arrow-right-01" />
                Growth-as-a-Service (GrowthOS)
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/subscription" class="hover:underline">
                <Icon icon="hugeicons:arrow-right-01" />
                Talent-as-a-Service
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="space-y-6">
          <p class="text-lg leading-snug font-medium uppercase">Creatives</p>
          <ul
            class="space-y-6 **:[a]:inline-flex **:[a]:items-center **:[a]:gap-4 **:[a]:py-1 **:[a]:text-sm **:[a]:leading-relaxed **:[svg]:text-base"
          >
            <li>
              <NuxtLink to="/creatives" class="hover:underline">
                <Icon icon="hugeicons:arrow-right-01" />
                Creative Match
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/creatives" class="hover:underline">
                <Icon icon="hugeicons:arrow-right-01" />
                Gig Economy
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-else-if="activeDesktopMenu === 'resource'"
      class="flex aspect-880/420 w-[calc(880/1440*100vw)] max-w-[880px] gap-8 rounded-[inherit] p-8"
    >
      <div class="flex flex-1 flex-col justify-between space-y-4">
        <div class="space-y-3">
          <NuxtLink
            to="/blog"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:quill-write-02" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                Blog & Insights
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Strategy deep-dives, growth lessons, and creative intelligence from our team.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/resource"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:book-open-02" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                eBooks & Guides
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Downloadable playbooks for founders, marketers, and creative professionals.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/resource"
            class="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-gray-100/70"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-gray-50 text-xl text-[#026662] transition-colors group-hover:bg-[#026662] group-hover:text-white"
            >
              <Icon icon="hugeicons:chart-bar-line" />
            </div>
            <div>
              <p class="text-base font-semibold text-gray-950 group-hover:text-[#026662]">
                White Papers & Reports
              </p>
              <p class="mt-0.5 text-xs leading-relaxed text-gray-500">
                Data-backed research on African creative economy, talent trends, and market
                opportunities.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="pt-1">
          <NuxtLink
            to="/resource"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#026662] hover:underline"
          >
            Browse all resources
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
      </div>

      <div
        class="relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-[#05DED5]/30 bg-[#E6FEFD] p-7 text-gray-950"
      >
        <div class="space-y-3">
          <p class="text-xl leading-tight font-bold">Grow Smarter with Intelligence</p>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04308F] hover:underline"
          >
            Read Latest Insights
            <Icon icon="hugeicons:arrow-right-02" class="text-base" />
          </NuxtLink>
        </div>
        <div class="mt-4 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2">
          <NuxtImg
            src="/images/pages/why/hero-4.png"
            class="aspect-16/10 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
@reference "../../assets/css/main.css";

.linedblock {
  @apply relative isolate px-2 py-1 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-linear-to-b before:from-current before:from-15% before:to-current/12.5;
}
</style>
