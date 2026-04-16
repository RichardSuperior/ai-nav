<template>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
      <router-link to="/" class="hover:text-indigo-600 transition-colors">首页</router-link>
      <svg class="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-900 font-medium">{{ category?.name || '工具列表' }}</span>
    </div>

    <!-- Category header -->
    <div v-if="category" class="flex items-center gap-4 mb-8">
      <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-3xl', category.bgColor]">
        {{ category.emoji }}
      </div>
      <div>
        <h1 class="text-2xl font-bold text-gray-900">{{ category.name }}</h1>
        <p class="text-sm text-gray-500 mt-0.5">共收录 {{ currentTools.length }} 个工具</p>
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
            : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
        ]"
        @click="setActiveSubId(child.id)"
      >
        {{ child.name }}
        <span class="ml-1.5 text-xs opacity-70">({{ subToolCount(child.id) }})</span>
      </button>
    </div>

    <!-- Filter bar -->
    <div class="flex items-center gap-3 mb-6">
      <button
        :class="['tag transition-colors', showRecommended === null ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50']"
        @click="showRecommended = null"
      >全部</button>
      <button
        :class="['tag transition-colors', showRecommended === true ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50']"
        @click="showRecommended = true"
      >
        ⭐ 推荐
      </button>
      <div class="ml-auto text-sm text-gray-400">{{ filteredTools.length }} 个工具</div>
    </div>

    <!-- Tools grid -->
    <div v-if="filteredTools.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ToolCard
        v-for="tool in filteredTools"
        :key="tool.id"
        :tool="tool"
      />
    </div>

    <!-- Empty state -->
    <div v-else class="text-center py-20">
      <div class="text-5xl mb-4">🤖</div>
      <h3 class="text-lg font-semibold text-gray-700 mb-2">暂无工具</h3>
      <p class="text-gray-400 text-sm">该分类下暂时没有收录工具，敬请期待</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ToolCard from '../components/ToolCard.vue'
import { categories, tools } from '../data/tools.js'

const route = useRoute()
const showRecommended = ref(null)
const activeSubId = ref(null)

const categoryId = computed(() => route.params.id)

const category = computed(() => {
  return categories.find(c => {
    if (c.id === categoryId.value) return true
    if (c.children) return c.children.some(ch => ch.id === categoryId.value)
    return false
  }) || null
})

// If the route id is a sub-category, find parent
const isSubCategory = computed(() => {
  for (const cat of categories) {
    if (cat.children && cat.children.some(c => c.id === categoryId.value)) {
      return true
    }
  }
  return false
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
watch(categoryId, () => {
  showRecommended.value = null
  if (category.value?.children) {
    activeSubId.value = category.value.children[0]?.id || null
  } else {
    activeSubId.value = null
  }
}, { immediate: true })
</script>
