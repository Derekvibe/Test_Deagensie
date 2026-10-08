<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  group: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

const ceo: TeamMember = {
  name: 'Bright Okorafor',
  role: 'Founder & CEO',
  image: '/images/Bright.jpeg',
  group: 'leadership',
  bio: "Bright is a visionary entrepreneur and growth strategist passionate about bridging African creative talent with international enterprise opportunities. He steers Deagensie's strategic direction and global expansion with over a decade of expertise in digital innovation and business growth.",
  linkedin: 'https://linkedin.com/in/bright-okorafor',
  twitter: 'https://x.com/brightokorafor',
};

const ogs: TeamMember[] = [
  {
    name: 'Peter Bassey Okon',
    role: 'Brand Communication & Marketing Lead',
    image: '/images/Peter.jpeg',
    group: 'ogs',
    bio: "Peter drives Deagensie's brand voice, communication strategy, and marketing operations. He crafts compelling narratives that connect the brand to its audience across every channel.",
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Gift Olungwe',
    role: 'Product Designer',
    image: '/images/Gift.jpeg',
    group: 'ogs',
    bio: 'Gift combines aesthetic sensibility with user-centred thinking to craft interfaces and brand experiences that are both beautiful and functional.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Jennifer Arthur',
    role: 'People Service Consultant',
    image: '/images/Jennifer.jpeg',
    group: 'ogs',
    bio: 'Jennifer ensures the people side of Deagensie runs smoothly, from talent onboarding to team culture. She is the connective tissue between strategy and human excellence.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
];

const techCreatives: TeamMember[] = [
  {
    name: 'Godwin Enebeli Chinonso',
    role: 'Creative Designer',
    image: '/images/Godwin.jpeg',
    group: 'genz',
    bio: 'Godwin translates ideas into stunning visual identities, digital assets, and brand collateral that redefine how clients present themselves to the world.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Okoro Emmanuel Nzube',
    role: 'Full-stack Developer',
    image: '/images/Okoro.jpeg',
    group: 'genz',
    bio: "Emmanuel architects and builds robust web platforms, APIs, and AI integrations that power Deagensie's digital product suite and client solutions.",
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Blossom Adaku Obiorah',
    role: 'Executive Assistant',
    image: '/images/Blossom.jpeg',
    group: 'genz',
    bio: 'Blossom keeps the leadership engine running at full speed with precision coordination, seamless scheduling, and sharp organisational intelligence.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Vivian Etim',
    role: 'Brand Communication & Marketing Associate',
    image: '/images/Vivian.jpeg',
    group: 'genz',
    bio: 'Vivian supports brand storytelling, content creation, and marketing campaigns, bringing fresh creative energy to every audience touchpoint.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
];

const selectedMember = ref<TeamMember | null>(null);

const openModal = (member: TeamMember) => {
  selectedMember.value = member;
};

const closeModal = () => {
  selectedMember.value = null;
};
</script>

<template>
  <section
    id="about_team"
    class="overflow-hidden border-b border-gray-100 bg-white py-20 text-gray-900 lg:py-32"
  >
    <div class="mx-auto w-5/6 max-w-7xl space-y-20 lg:space-y-28">
      <!-- Section Header -->
      <div v-reveal="'fade-up'" class="mx-auto max-w-3xl space-y-4 text-center">
        <span
          class="inline-block rounded-full bg-[#04308F]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#04308F] uppercase"
        >
          The Team Behind Deagensie
        </span>
        <h2
          class="font-serif text-3xl leading-tight font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          People who build the future
        </h2>
        <p class="mx-auto max-w-2xl text-base leading-relaxed font-normal text-gray-500">
          A collective of strategists, designers, developers, and connectors united by one mission:
          to grow Africa's creative economy on the world stage.
        </p>
      </div>

      <!-- CEO Feature Card -->
      <div
        v-reveal="'scale-in'"
        class="group relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-[#04308F] to-[#026662] p-8 shadow-2xl sm:p-10 lg:p-12"
      >
        <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <!-- Text side -->
          <div class="space-y-6">
            <span
              class="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase"
            >
              Founder & CEO
            </span>
            <h3 class="font-serif text-3xl leading-tight font-normal text-white lg:text-4xl">
              {{ ceo.name }}
            </h3>
            <p class="text-base leading-relaxed text-blue-100/90">
              {{ ceo.bio }}
            </p>
            <div class="flex items-center gap-3 pt-2">
              <a
                :href="ceo.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#05DED5] hover:text-gray-900"
              >
                <Icon icon="ri:linkedin-fill" class="text-base" /> LinkedIn
              </a>
              <a
                :href="ceo.twitter"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#05DED5] hover:text-gray-900"
              >
                <Icon icon="prime:twitter" class="text-base" /> X (Twitter)
              </a>
            </div>
          </div>

          <!-- Photo side -->
          <div class="relative flex justify-center lg:justify-end">
            <div
              class="relative size-64 overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl shadow-black/30 sm:size-72 lg:size-80"
            >
              <NuxtImg
                :src="ceo.image"
                :alt="ceo.name"
                class="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#04308F]/40 via-transparent to-transparent"
              />
            </div>
            <!-- Floating badge -->
            <div
              class="absolute bottom-4 left-4 rounded-2xl border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-sm lg:bottom-6 lg:left-6"
            >
              <p class="text-xs font-semibold text-white">Founder & Visionary</p>
              <p class="text-[11px] text-blue-200">Deagensie Ecosystem</p>
            </div>
          </div>
        </div>

        <!-- Ambient glow -->
        <div
          class="pointer-events-none absolute top-[-20%] right-[-10%] h-80 w-80 rounded-full bg-[#05DED5]/15 blur-3xl"
        />
      </div>

      <!-- The OGs Section -->
      <div class="space-y-10">
        <div v-reveal="'fade-up'" class="space-y-2">
          <div class="flex items-center gap-3">
            <div class="h-px flex-1 bg-gray-200" />
            <span
              class="rounded-full border border-gray-200 bg-gray-50 px-5 py-1.5 text-xs font-bold tracking-widest text-gray-600 uppercase"
            >
              The OGs Forever
            </span>
            <div class="h-px flex-1 bg-gray-200" />
          </div>
          <p class="text-center text-sm leading-relaxed text-gray-400">
            The core team who built the foundation with us from day one.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(member, idx) in ogs"
            :key="member.name"
            v-reveal="{ animation: 'fade-up', delay: idx * 120 }"
            class="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[#04308F]/20 hover:shadow-2xl hover:shadow-[#04308F]/5"
            @click="openModal(member)"
          >
            <!-- Photo -->
            <div class="relative aspect-3/4 overflow-hidden bg-gray-100">
              <NuxtImg
                :src="member.image"
                :alt="member.name"
                class="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                  View Profile <Icon icon="lucide:arrow-up-right" />
                </span>
              </div>
            </div>

            <!-- Info -->
            <div class="flex flex-1 flex-col justify-between p-5">
              <div class="space-y-1">
                <h3
                  class="font-serif text-lg font-normal text-gray-900 transition-colors group-hover:text-[#04308F]"
                >
                  {{ member.name }}
                </h3>
                <p class="text-xs font-semibold text-[#04308F]">{{ member.role }}</p>
              </div>
              <!-- Social row -->
              <div class="mt-4 flex items-center gap-2" @click.stop>
                <a
                  v-if="member.linkedin"
                  :href="member.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex size-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 transition-colors hover:bg-[#04308F] hover:text-white"
                >
                  <Icon icon="ri:linkedin-fill" />
                </a>
                <a
                  v-if="member.twitter"
                  :href="member.twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex size-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 transition-colors hover:bg-[#04308F] hover:text-white"
                >
                  <Icon icon="prime:twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GenZ Techies & Creatives -->
      <div class="space-y-10">
        <div v-reveal="'fade-up'" class="space-y-2">
          <div class="flex items-center gap-3">
            <div class="h-px flex-1 bg-gray-200" />
            <span
              class="rounded-full border border-[#05DED5]/40 bg-[#E6FEFD] px-5 py-1.5 text-xs font-bold tracking-widest text-[#026662] uppercase"
            >
              Meet the Team
            </span>
            <div class="h-px flex-1 bg-gray-200" />
          </div>
          <p class="text-center text-sm leading-relaxed text-gray-400">
            The next generation of talent powering the Deagensie future.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="(member, idx) in techCreatives"
            :key="member.name"
            v-reveal="{ animation: 'fade-up', delay: idx * 100 }"
            class="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[#05DED5]/40 hover:shadow-2xl hover:shadow-[#05DED5]/10"
            @click="openModal(member)"
          >
            <!-- Photo -->
            <div class="relative aspect-3/4 overflow-hidden bg-gray-100">
              <NuxtImg
                :src="member.image"
                :alt="member.name"
                class="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                  View Profile <Icon icon="lucide:arrow-up-right" />
                </span>
              </div>
            </div>

            <!-- Info -->
            <div class="flex flex-1 flex-col justify-between p-5">
              <div class="space-y-1">
                <h3
                  class="font-serif text-base font-normal text-gray-900 transition-colors group-hover:text-[#026662]"
                >
                  {{ member.name }}
                </h3>
                <p class="text-xs font-semibold text-[#026662]">{{ member.role }}</p>
              </div>
              <div class="mt-4 flex items-center gap-2" @click.stop>
                <a
                  v-if="member.linkedin"
                  :href="member.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex size-7 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500 transition-colors hover:bg-[#026662] hover:text-white"
                >
                  <Icon icon="ri:linkedin-fill" />
                </a>
                <a
                  v-if="member.twitter"
                  :href="member.twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex size-7 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500 transition-colors hover:bg-[#026662] hover:text-white"
                >
                  <Icon icon="prime:twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Member Bio Modal -->
    <Transition name="fade-scale">
      <div
        v-if="selectedMember"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="relative max-h-[90vh] w-full max-w-lg space-y-6 overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
        >
          <!-- Close button -->
          <button
            type="button"
            aria-label="Close modal"
            class="absolute top-6 right-6 flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
            @click="closeModal"
          >
            <Icon icon="lucide:x" class="text-xl" />
          </button>

          <!-- Header -->
          <div class="flex items-center gap-5">
            <div
              class="size-20 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 sm:size-24"
            >
              <NuxtImg
                :src="selectedMember.image"
                :alt="selectedMember.name"
                class="size-full object-cover object-top"
              />
            </div>
            <div class="space-y-1">
              <span
                class="mb-1 inline-block rounded-full bg-[#04308F]/10 px-3 py-1 text-xs font-semibold text-[#04308F]"
              >
                Deagensie Team
              </span>
              <h3 class="font-serif text-2xl leading-tight font-normal text-gray-900">
                {{ selectedMember.name }}
              </h3>
              <p class="text-sm font-semibold text-[#04308F]">{{ selectedMember.role }}</p>
            </div>
          </div>

          <!-- Bio -->
          <div class="space-y-3 border-t border-gray-100 pt-4">
            <h4 class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Biography</h4>
            <p class="text-sm leading-relaxed font-normal text-gray-600">
              {{ selectedMember.bio }}
            </p>
          </div>

          <!-- Social links -->
          <div class="flex items-center justify-between border-t border-gray-100 pt-4">
            <span class="text-xs font-medium text-gray-400"
              >Connect with {{ selectedMember.name }}</span
            >
            <div class="flex items-center gap-3">
              <a
                v-if="selectedMember.linkedin"
                :href="selectedMember.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-[#04308F] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#05DED5] hover:text-gray-900"
              >
                <Icon icon="ri:linkedin-fill" class="text-base" /> LinkedIn
              </a>
              <a
                v-if="selectedMember.twitter"
                :href="selectedMember.twitter"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#05DED5] hover:text-gray-900"
              >
                <Icon icon="prime:twitter" class="text-base" /> X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.94);
}
</style>
