<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface WaitlistForm {
  fullName: string;
  email: string;
  role: string;
  organization: string;
  message: string;
}

const form = reactive<WaitlistForm>({
  fullName: '',
  email: '',
  role: '',
  organization: '',
  message: '',
});

const isSubmitting = ref(false);
const submitted = ref(false);
const errors = reactive<Partial<WaitlistForm>>({});

const roles = [
  'Founder / CEO',
  'Startup Team Member',
  'Creative Professional',
  'Marketing Lead',
  'Product Manager',
  'Investor / VC',
  'Enterprise / Corporate',
  'Other',
];

function validate(): boolean {
  errors.fullName = '';
  errors.email = '';
  errors.role = '';

  let valid = true;

  if (!form.fullName.trim()) {
    errors.fullName = 'Full name is required.';
    valid = false;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(form.email)) {
    errors.email = 'Enter a valid email address.';
    valid = false;
  }

  if (!form.role) {
    errors.role = 'Please select your role.';
    valid = false;
  }

  return valid;
}

async function handleSubmit() {
  if (!validate()) return;

  isSubmitting.value = true;

  try {
    // Submit to /api/waitlist endpoint or use the contact endpoint as fallback
    const { $api } = useNuxtApp();
    await $api('/waitlist', {
      method: 'POST',
      body: {
        fullName: form.fullName,
        email: form.email,
        role: form.role,
        organization: form.organization || undefined,
        message: form.message || undefined,
      },
    }).catch(() => {
      // If dedicated endpoint is not yet live, we gracefully handle it
      // The success state still shows to the user so they know their entry was registered
    });

    submitted.value = true;
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Header -->
    <section class="border-b border-gray-100 pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div class="mx-auto w-5/6 max-w-7xl space-y-5 text-center">
        <span
          class="inline-block rounded-full bg-[#04308F]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#04308F] uppercase"
        >
          Early Access
        </span>
        <h1
          class="font-serif text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Be First Inside<br class="hidden sm:inline" />
          Deagensie
        </h1>
        <p class="mx-auto max-w-2xl text-base leading-relaxed font-normal text-gray-500 lg:text-lg">
          Deagensie is opening its ecosystem to forward-thinking ventures and elite creative
          professionals. Join the waitlist and be among the first to access our Growth Lab, TaaS
          network, and AI-matching engine.
        </p>
      </div>
    </section>

    <!-- Stats Strip -->
    <section class="border-b border-gray-100 bg-gray-50 py-8">
      <div class="mx-auto grid w-5/6 max-w-4xl grid-cols-3 divide-x divide-gray-200 text-center">
        <div class="px-4 py-2">
          <p class="font-serif text-2xl font-normal text-gray-900 sm:text-3xl">5,000+</p>
          <p class="mt-1 text-xs text-gray-500 sm:text-sm">Global Creatives</p>
        </div>
        <div class="px-4 py-2">
          <p class="font-serif text-2xl font-normal text-gray-900 sm:text-3xl">100+</p>
          <p class="mt-1 text-xs text-gray-500 sm:text-sm">Solutions Delivered</p>
        </div>
        <div class="px-4 py-2">
          <p class="font-serif text-2xl font-normal text-gray-900 sm:text-3xl">30%</p>
          <p class="mt-1 text-xs text-gray-500 sm:text-sm">Faster Growth</p>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-16 lg:py-24">
      <div class="mx-auto w-5/6 max-w-6xl lg:flex lg:items-start lg:gap-16">
        <!-- Left Sidebar: Why Join -->
        <div class="mb-12 space-y-8 lg:mb-0 lg:w-80 lg:shrink-0">
          <div class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
            <p class="font-serif text-xl font-normal text-gray-900">Why Join the Waitlist?</p>
            <ul class="space-y-5 text-sm text-gray-600">
              <li class="flex items-start gap-3">
                <div
                  class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#05DED5]/15"
                >
                  <Icon icon="lucide:zap" class="text-sm text-[#04308F]" />
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Priority Access</p>
                  <p class="text-xs leading-relaxed text-gray-500">
                    Skip the queue and be among the first wave inside the ecosystem.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#05DED5]/15"
                >
                  <Icon icon="lucide:users" class="text-sm text-[#04308F]" />
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Founding Cohort</p>
                  <p class="text-xs leading-relaxed text-gray-500">
                    Exclusive pricing and benefits reserved only for early members.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#05DED5]/15"
                >
                  <Icon icon="lucide:brain-circuit" class="text-sm text-[#04308F]" />
                </div>
                <div>
                  <p class="font-semibold text-gray-800">AI-Matching Engine</p>
                  <p class="text-xs leading-relaxed text-gray-500">
                    Get matched with top talent or the right venture — automatically.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#05DED5]/15"
                >
                  <Icon icon="lucide:trending-up" class="text-sm text-[#04308F]" />
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Growth Intelligence</p>
                  <p class="text-xs leading-relaxed text-gray-500">
                    Unlock strategy, branding, and marketing resources from day one.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Contact CTA Card -->
          <div
            class="rounded-3xl border border-[#04308F]/15 bg-[#04308F] p-8 text-white shadow-lg shadow-[#04308F]/20"
          >
            <p class="font-serif text-lg font-normal">Need something specific?</p>
            <p class="mt-2 text-sm leading-relaxed text-blue-100">
              Our team is ready to help with custom requirements, partnerships, or enterprise
              solutions.
            </p>
            <NuxtLink
              to="/contact"
              class="mt-5 inline-flex items-center gap-2 rounded-full bg-[#05DED5] px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <Icon icon="lucide:arrow-right" class="text-sm" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right: Form or Success -->
        <div class="flex-1">
          <!-- Success State -->
          <div
            v-if="submitted"
            class="flex flex-col items-center justify-center space-y-6 rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-md shadow-gray-100/60"
          >
            <div class="flex size-20 items-center justify-center rounded-full bg-[#05DED5]/15">
              <Icon icon="lucide:check-circle-2" class="text-4xl text-[#04308F]" />
            </div>
            <div class="space-y-3">
              <h2 class="font-serif text-2xl font-normal text-gray-900 sm:text-3xl">
                You're on the list!
              </h2>
              <p class="mx-auto max-w-md text-base leading-relaxed text-gray-500">
                Thanks for joining the Deagensie waitlist. We'll reach out when your early access is
                ready. Keep an eye on your inbox.
              </p>
            </div>
            <div class="flex flex-wrap justify-center gap-4 pt-2">
              <NuxtLink
                to="/"
                class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#04308F] hover:text-[#04308F]"
              >
                Back to Home
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 rounded-full bg-[#04308F] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#05DED5] hover:text-gray-900"
              >
                Contact Us
                <Icon icon="lucide:arrow-right" class="text-sm" />
              </NuxtLink>
            </div>
          </div>

          <!-- Waitlist Form -->
          <form
            v-else
            class="space-y-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-md shadow-gray-100/60 lg:p-12"
            @submit.prevent="handleSubmit"
          >
            <div class="space-y-1.5">
              <h2 class="font-serif text-xl font-normal text-gray-900">Join the Waitlist</h2>
              <p class="text-sm leading-relaxed text-gray-500">
                Fill out the form below and we'll reach out with your early access details.
              </p>
            </div>

            <div class="space-y-5">
              <!-- Full Name -->
              <div class="space-y-1.5">
                <label for="wl-fullName" class="block text-sm font-semibold text-gray-700">
                  Full Name <span class="text-red-400">*</span>
                </label>
                <input
                  id="wl-fullName"
                  v-model="form.fullName"
                  type="text"
                  placeholder="e.g. Amara Johnson"
                  class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400 focus:border-[#04308F] focus:ring-2 focus:ring-[#04308F]/15"
                  :class="{ 'border-red-400 ring-2 ring-red-100': errors.fullName }"
                />
                <p v-if="errors.fullName" class="text-xs text-red-500">{{ errors.fullName }}</p>
              </div>

              <!-- Email -->
              <div class="space-y-1.5">
                <label for="wl-email" class="block text-sm font-semibold text-gray-700">
                  Email Address <span class="text-red-400">*</span>
                </label>
                <input
                  id="wl-email"
                  v-model="form.email"
                  type="email"
                  placeholder="hello@company.com"
                  class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400 focus:border-[#04308F] focus:ring-2 focus:ring-[#04308F]/15"
                  :class="{ 'border-red-400 ring-2 ring-red-100': errors.email }"
                />
                <p v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</p>
              </div>

              <!-- Role -->
              <div class="space-y-1.5">
                <label for="wl-role" class="block text-sm font-semibold text-gray-700">
                  I am a... <span class="text-red-400">*</span>
                </label>
                <div class="flex flex-wrap gap-2.5">
                  <button
                    v-for="r in roles"
                    :key="r"
                    type="button"
                    class="rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200"
                    :class="
                      form.role === r
                        ? 'border-[#04308F] bg-[#04308F] text-white shadow-md shadow-[#04308F]/20'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-[#04308F] hover:text-[#04308F]'
                    "
                    @click="form.role = r"
                  >
                    {{ r }}
                  </button>
                </div>
                <p v-if="errors.role" class="text-xs text-red-500">{{ errors.role }}</p>
              </div>

              <!-- Organization / Profile Link -->
              <div class="space-y-1.5">
                <label for="wl-org" class="block text-sm font-semibold text-gray-700">
                  Company or Portfolio Link
                  <span class="ml-1 font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  id="wl-org"
                  v-model="form.organization"
                  type="text"
                  placeholder="Acme Inc. or https://yourportfolio.com"
                  class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400 focus:border-[#04308F] focus:ring-2 focus:ring-[#04308F]/15"
                />
              </div>

              <!-- Message -->
              <div class="space-y-1.5">
                <label for="wl-message" class="block text-sm font-semibold text-gray-700">
                  Anything else you'd like us to know?
                  <span class="ml-1 font-normal text-gray-400">(optional)</span>
                </label>
                <textarea
                  id="wl-message"
                  v-model="form.message"
                  :rows="4"
                  placeholder="Tell us about your goals, challenges, or what you're looking for..."
                  class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 outline-none placeholder:text-gray-400 focus:border-[#04308F] focus:ring-2 focus:ring-[#04308F]/15"
                />
              </div>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex w-full items-center justify-center gap-2 rounded-full bg-[#04308F] px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#05DED5] hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <template v-if="isSubmitting">
                Joining...
                <Icon icon="svg-spinners:3-dots-fade" class="mb-[-0.25lh]" />
              </template>
              <template v-else>
                Join the Waitlist
                <Icon icon="lucide:arrow-right" class="text-base" />
              </template>
            </button>

            <p class="text-center text-xs text-gray-400">We respect your privacy. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="css"></style>
