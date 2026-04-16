<template>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
    <!-- Header -->
    <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
      <router-link to="/" class="hover:text-indigo-600 transition-colors">首页</router-link>
      <svg class="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-900 font-medium">搜索结果</span>
    </div>

    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">
        搜索 "<span class="text-indigo-600">{{ query }}</span>"
      </h1>
      <p class="text-sm text-gray-500 mt-1">找到 {{ results.length }} 个相关工具</p>
    </div>

    <!-- Results -->
    <div v-if="results.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ToolCard
        v-for="tool in results"
        :key="tool.id"
        :tool="tool"
      />
    </div>

    <!-- Empty -->
    <div v-else class="text-center py-20">
      <div class="text-5xl mb-4">🔍</div>
      <h3 class="text-lg font-semibold text-gray-700 mb-2">未找到相关工具</h3>
      <p class="text-gray-400 text-sm mb-6">尝试使用其他关键词，或浏览全部分类</p>
      <router-link
        to="/"
        class="btn-primary"
      >
        浏览全部工具
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ToolCard from '../components/ToolCard.vue'
import { searchTools } from '../data/tools.js'

const route = useRoute()
const query = computed(() => route.query.q || '')
const results = computed(() => searchTools(query.value))
</script>
