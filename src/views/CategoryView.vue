<template>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
      <router-link to="/" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{{ $t('header.home') }}</router-link>
      <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-900 dark:text-white font-medium">{{ categoryName }}</span>
    </div>

    <!-- Category header -->
    <div v-if="category" class="flex items-center gap-4 mb-8">
      <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-3xl', category.bgColor]">
        {{ category.emoji }}
      </div>
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ categoryName }}</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{{ currentTools.length }}{{ $t('category.toolsCount') }}</p>
      </div>
    </div>

    <!-- Sub-category tabs -->
    <div v-if="category?.children" class="flex gap-2 flex-wrap mb-6">
      <button
        v-for="child in category.children"
        :key="child.id"
        :class="[
          'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
          activeSubId === child.id
            ? 'bg-indigo-600 text-white shadow-sm'
            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400'
        ]"
        @click="setActiveSubId(child.id)"
      >
        {{ isZh ? child.name : child.nameEn }}
        <span class="ml-1.5 text-xs opacity-70">({{ subToolCount(child.id) }})</span>
      </button>
    </div>

    <!-- Filter bar -->
    <div class="flex items-center gap-3 mb-6">
      <button
        :class="['tag transition-colors', showRecommended === null ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750']"
        @click="showRecommended = null"
      >{{ $t('category.allTools') }}</button>
      <button
        :class="['tag transition-colors', showRecommended === true ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750']"
        @click="showRecommended = true"
      >
        ⭐ {{ $t('category.recommended') }}
      </button>
      <div class="ml-auto text-sm text-gray-400 dark:text-gray-500">{{ filteredTools.length }}{{ $t('category.toolsCount') }}</div>
    </div>

    <!-- Tools grid -->
    <div v-if="filteredTools.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ToolCard
        v-for="tool in filteredTools"
        :key="tool.id"
        :tool="tool"
        @open-detail="$emit('open-detail', $event)"
      />
    </div>

    <!-- Empty state -->
    <div v-else class="text-center py-20">
      <div class="text-5xl mb-4">🤖</div>
      <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ $t('search.noResults') }}</h3>
      <p class="text-gray-400 dark:text-gray-500 text-sm">{{ $t('search.noResultsHint') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ToolCard from '../components/ToolCard.vue'
import { categories, tools } from '../data/tools.js'

defineEmits(['open-detail'])

const route = useRoute()
const { locale } = useI18n()
const showRecommended = ref(null)
const activeSubId = ref(null)

const isZh = computed(() => locale.value === 'zh-CN')

const categoryId = computed(() => route.params.id)

const category = computed(() => {
  return categories.find(c => {
    if (c.id === categoryId.value) return true
    if (c.children) return c.children.some(ch => ch.id === categoryId.value)
    return false
  }) || null
})

// Category name based on language
const categoryName = computed(() => {
  if (!category.value) return 'Tools'
  // Check if current route is a child category
  const child = category.value.children?.find(c => c.id === categoryId.value)
  if (child) {
    return isZh.value ? child.name : child.nameEn
  }
  return isZh.value ? category.value.name : category.value.nameEn
})

const currentTools = computed(() => {
  if (category.value?.children) {
    const subId = activeSubId.value || category.value.children[0]?.id
    return tools[subId] || []
  }
  return tools[categoryId.value] || []
})

const filteredTools = computed(() => {
  if (showRecommended.value === true) {
    return currentTools.value.filter(t => t.recommended)
  }
  return currentTools.value
})

function setActiveSubId(id) {
  activeSubId.value = id
  showRecommended.value = null
}

function subToolCount(id) {
  return tools[id]?.length || 0
}

// Reset when route changes
watch(categoryId, (newId) => {
  showRecommended.value = null
  if (category.value?.children) {
    // Check if newId is a child category - use it directly
    const isChildCategory = category.value.children.some(ch => ch.id === newId)
    if (isChildCategory) {
      activeSubId.value = newId
    } else {
      activeSubId.value = category.value.children[0]?.id || null
    }
  } else {
    activeSubId.value = null
  }
}, { immediate: true })
</script>
