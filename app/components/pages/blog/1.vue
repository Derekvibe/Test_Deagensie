<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { BlogPost } from '~/types/api';

const activeCategory = ref<string>('all');
const searchQuery = ref<string>('');

// ─────────────────────────────────────────────────────────────
// EDITORIAL BLOG DATA
// ─────────────────────────────────────────────────────────────

const categories = [
  { key: 'all', label: 'All Articles' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'branding', label: 'Brand Development' },
  { key: 'marketing', label: 'Marketing & Growth' },
  { key: 'technology', label: 'Digital Products' },
  { key: 'creative-economy', label: 'Creative Talent' },
];

const featuredPost: BlogPost = {
  id: '1',
  slug: 'future-of-ai-driven-branding',
  title: 'The Future of AI-Driven Branding: How Intelligence Transforms Creative Strategy',
  excerpt:
    'Discover how artificial intelligence is revolutionizing brand development, from predictive consumer behavior analysis to real-time marketing optimization.',
  cover: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
  category: 'Strategy & AI',
  categoryKey: 'strategy',
  publishedAt: '2026-03-15',
  readMinutes: 8,
  featured: true,
};

const posts: BlogPost[] = [
  {
    id: '2',
    slug: 'global-career-rooted-in-africa',
    title: 'Building a Global Career While Staying Rooted in Africa',
    excerpt:
      'How African creatives are breaking geographical barriers and accessing international opportunities without leaving home.',
    cover: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    category: 'Creative Talent',
    categoryKey: 'creative-economy',
    publishedAt: '2026-03-12',
    readMinutes: 6,
  },
  {
    id: '3',
    slug: 'startup-to-scale-up',
    title: 'From Startup to Scale-up: Engineering Growth That Lasts',
    excerpt:
      'The strategic frameworks and positioning maps that transform ambitious ventures into sustainable market leaders.',
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    category: 'Strategy',
    categoryKey: 'strategy',
    publishedAt: '2026-03-10',
    readMinutes: 7,
  },
  {
    id: '4',
    slug: 'brands-need-to-evolve',
    title: 'Why Your Brand Needs to Evolve, Not Just Exist',
    excerpt:
      'Exploring the crucial difference between static logo assets and intelligent, living brand design systems.',
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    category: 'Brand Development',
    categoryKey: 'branding',
    publishedAt: '2026-03-08',
    readMinutes: 5,
  },
  {
    id: '5',
    slug: 'data-driven-marketing',
    title: 'Data-Driven Marketing: Moving Beyond Vanity Metrics',
    excerpt:
      'How to transition from high impression numbers to genuine buyer conversion engines and scalable revenue growth.',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Marketing & Growth',
    categoryKey: 'marketing',
    publishedAt: '2026-03-05',
    readMinutes: 5,
  },
  {
    id: '6',
    slug: 'psychology-of-visual-identity',
    title: 'The Psychology of Visual Identity: What Makes Brands Memorable',
    excerpt:
      'Understanding the cognitive science behind memorable visual design, typography hierarchy, and emotional connection.',
    cover: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    category: 'Brand Development',
    categoryKey: 'branding',
    publishedAt: '2026-03-02',
    readMinutes: 7,
  },
  {
    id: '7',
    slug: 'digital-products-users-want',
    title: 'Building Intelligent Digital Products Engineered for High Conversion',
    excerpt:
      'A practical blueprint for user-centered design, performant web platforms, and seamless e-commerce integration.',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    category: 'Digital Products',
    categoryKey: 'technology',
    publishedAt: '2026-02-28',
    readMinutes: 6,
  },
];

const filteredPosts = computed(() => {
  return posts.filter((post) => {
    const matchesCategory =
      activeCategory.value === 'all' || post.categoryKey === activeCategory.value;
    const matchesSearch =
      !searchQuery.value ||
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});
</script>

<template>
  <div class="bg-slate-50/50 py-10 lg:py-14">
    <div class="mx-auto w-5/6 max-w-7xl">
      <!-- ═══════════════════════════════════════════════════════
           CATEGORY FILTER & SEARCH BAR
           ═══════════════════════════════════════════════════════ -->
      <div
        class="mb-10 flex flex-col gap-5 border-b border-gray-200/80 pb-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <!-- Filter Pills -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat.key"
            type="button"
            :class="[
              'rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 sm:text-sm',
              activeCategory === cat.key
                ? 'bg-[#04308F] text-white shadow-sm ring-1 ring-[#04308F]'
                : 'border border-gray-200/80 bg-white text-gray-700 hover:bg-gray-100',
            ]"
            @click="activeCategory = cat.key"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full lg:w-64">
          <Icon
            icon="hugeicons:search-01"
            class="absolute top-1/2 left-3.5 -translate-y-1/2 text-base text-gray-400"
          />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search articles..."
            class="w-full rounded-full border border-gray-200 bg-white py-2 pr-4 pl-9 text-xs text-gray-900 placeholder-gray-400 shadow-2xs transition focus:border-[#04308F] focus:ring-1 focus:ring-[#04308F] focus:outline-none sm:text-sm"
          />
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════
           MODERATE STANDARD FEATURED ARTICLE CARD
           ═══════════════════════════════════════════════════════ -->
      <section v-if="activeCategory === 'all' && !searchQuery" class="mb-12">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="font-serif text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Featured Highlight
          </h2>
          <span class="text-[11px] font-semibold tracking-widest text-[#04308F] uppercase">
            Top Pick
          </span>
        </div>

        <NuxtLink
          :to="`/blog/${featuredPost.slug}`"
          class="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:border-[#04308F]/40 hover:shadow-md lg:grid lg:grid-cols-12 lg:gap-6 lg:p-6"
        >
          <!-- Cover Image -->
          <div class="overflow-hidden rounded-xl lg:col-span-5 lg:h-full">
            <img
              :src="featuredPost.cover"
              :alt="featuredPost.title"
              class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-102 lg:h-full"
              loading="lazy"
            />
          </div>

          <!-- Content Details -->
          <div class="mt-4 flex flex-col justify-between space-y-4 lg:col-span-7 lg:mt-0 lg:py-1">
            <div class="space-y-3">
              <div class="flex items-center gap-2.5 text-xs text-gray-500">
                <span
                  class="rounded-full bg-[#04308F]/10 px-2.5 py-0.5 font-semibold text-[#04308F]"
                >
                  {{ featuredPost.category }}
                </span>
                <span>·</span>
                <span>
                  {{
                    new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  }}
                </span>
                <span>·</span>
                <span>{{ featuredPost.readMinutes }} min read</span>
              </div>

              <h3
                class="font-serif text-xl leading-snug font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-[#04308F] sm:text-2xl"
              >
                {{ featuredPost.title }}
              </h3>

              <p class="text-xs leading-relaxed text-gray-600 sm:text-sm">
                {{ featuredPost.excerpt }}
              </p>
            </div>

            <div class="pt-1">
              <span
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#04308F] transition-transform group-hover:translate-x-1"
              >
                Read Article
                <Icon icon="hugeicons:arrow-right-01" class="size-4" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </section>

      <!-- ═══════════════════════════════════════════════════════
           LATEST ARTICLES GRID
           ═══════════════════════════════════════════════════════ -->
      <section>
        <div class="mb-6 flex items-center justify-between">
          <h2 class="font-serif text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            {{ activeCategory === 'all' ? 'Latest Articles' : 'Articles' }}
          </h2>
          <span class="text-xs text-gray-500">
            Showing {{ filteredPosts.length }}
            {{ filteredPosts.length === 1 ? 'article' : 'articles' }}
          </span>
        </div>

        <div
          v-if="filteredPosts.length > 0"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <NuxtLink
            v-for="post in filteredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#04308F]/40 hover:shadow-md"
          >
            <!-- Card Image -->
            <div class="relative overflow-hidden rounded-xl">
              <img
                :src="post.cover"
                :alt="post.title"
                class="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
              <span
                class="absolute top-2.5 left-2.5 rounded-full bg-black/65 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md"
              >
                {{ post.category }}
              </span>
            </div>

            <!-- Card Content -->
            <div class="flex flex-1 flex-col justify-between pt-3">
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs text-gray-400">
                  <span>
                    {{
                      new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    }}
                  </span>
                  <span>·</span>
                  <span>{{ post.readMinutes }} min read</span>
                </div>

                <h3
                  class="font-serif text-base leading-snug font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-[#04308F]"
                >
                  {{ post.title }}
                </h3>

                <p class="line-clamp-2 text-xs leading-relaxed text-gray-600">
                  {{ post.excerpt }}
                </p>
              </div>

              <!-- Read More CTA -->
              <div
                class="mt-4 flex items-center gap-1 text-xs font-semibold text-[#04308F] transition-transform group-hover:translate-x-0.5"
              >
                <span>Read Story</span>
                <Icon icon="hugeicons:arrow-right-01" class="size-3.5" />
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center"
        >
          <Icon icon="hugeicons:document-not-found" class="mx-auto size-10 text-gray-400" />
          <h3 class="mt-3 text-sm font-semibold text-gray-900">No articles found</h3>
          <p class="mt-1 text-xs text-gray-500">
            Try adjusting your search criteria or category filter.
          </p>
          <button
            type="button"
            class="mt-3 rounded-full bg-[#04308F] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#032266]"
            @click="
              activeCategory = 'all';
              searchQuery = '';
            "
          >
            Reset Filters
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
