<template>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
      <router-link to="/" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{{ $t('header.home') }}</router-link>
      <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-900 dark:text-white font-medium">{{ $t('search.title') }}</span>
    </div>

    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        {{ $t('search.title') }} "<span class="text-indigo-600 dark:text-indigo-400">{{ query }}</span>"
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ results.length }} {{ $t('search.resultsCount', { count: '' }).replace('{count}', '').trim() }}</p>
    </div>

    <!-- Results -->
    <div v-if="results.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ToolCard
        v-for="tool in results"
        :key="tool.id"
        :tool="tool"
        @open-detail="$emit('open-detail', $event)"
      />
    </div>

    <!-- Empty -->
    <div v-else class="text-center py-20">
      <div class="text-5xl mb-4">🔍</div>
      <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ $t('search.noResults') }}</h3>
      <p class="text-gray-400 dark:text-gray-500 text-sm mb-6">{{ $t('search.noResultsHint') }}</p>
      <router-link
        to="/"
        class="btn-primary"
      >
        {{ $t('sidebar.allTools') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ToolCard from '../components/ToolCard.vue'
import { searchTools } from '../data/tools.js'

defineEmits(['open-detail'])

const route = useRoute()
const query = computed(() => route.query.q || '')
const results = computed(() => searchTools(query.value))
</script>
