<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 py-16 sm:py-20">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        <!-- Grid pattern -->
        <svg class="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full mb-6 font-medium">
          <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
          收录 600+ 优质 AI 工具
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          发现 AI 世界的
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">无限可能</span>
        </h1>
        <p class="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          精心整理全球优质 AI 工具，覆盖写作、编程、图像、视频、音频等 18+ 个专业领域，助您探索智能化工作方式。
        </p>

        <!-- Stats -->
        <div class="flex items-center justify-center gap-8 text-white/60 text-sm">
          <div class="text-center">
            <div class="text-2xl font-bold text-white">600+</div>
            <div class="text-xs mt-0.5">AI 工具</div>
          </div>
          <div class="w-px h-8 bg-white/20"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">18+</div>
            <div class="text-xs mt-0.5">工具分类</div>
          </div>
          <div class="w-px h-8 bg-white/20"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">每日</div>
            <div class="text-xs mt-0.5">持续更新</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Cards -->
    <section class="max-w-screen-2xl mx-auto px-4 sm:px-6 -mt-6 relative z-10 mb-10">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <router-link
          v-for="cat in mainCategories"
          :key="cat.id"
          :to="{ name: 'Category', params: { id: cat.id } }"
          class="group flex flex-col items-center gap-2.5 bg-white rounded-xl p-4 border border-gray-100 hover:border-indigo-200 hover:shadow-card-hover transition-all duration-200 text-center"
        >
          <div :class="['w-11 h-11 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 duration-200', cat.bgColor]">
            {{ cat.emoji }}
          </div>
          <span class="text-xs font-medium text-gray-700 group-hover:text-indigo-600 transition-colors leading-tight">{{ cat.name }}</span>
        </router-link>
      </div>
    </section>

    <!-- Hot Tools Section -->
    <section class="max-w-screen-2xl mx-auto px-4 sm:px-6 mb-10">
      <div class="flex items-center justify-between mb-5">
        <div class="flex items-center gap-2">
          <span class="text-xl">🔥</span>
          <h2 class="text-lg font-bold text-gray-900">热门工具</h2>
          <span class="text-sm text-gray-400">精选推荐</span>
        </div>
        <router-link
          to="/category/hot"
          class="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
        >
          查看全部
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ToolCard
          v-for="tool in hotTools"
          :key="tool.id"
          :tool="tool"
        />
      </div>
    </section>

    <!-- All Categories Preview -->
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6">
      <div
        v-for="catGroup in categoryGroups"
        :key="catGroup.id"
        class="mb-10"
      >
        <div class="flex items-center justify-between mb-5">
          <div class="flex items-center gap-2">
            <span class="text-xl">{{ catGroup.emoji }}</span>
            <h2 class="text-lg font-bold text-gray-900">{{ catGroup.name }}</h2>
          </div>
          <router-link
            :to="{ name: 'Category', params: { id: catGroup.id } }"
            class="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
          >
            查看全部
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ToolCard
            v-for="tool in catGroup.tools.slice(0, 8)"
            :key="tool.id"
            :tool="tool"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ToolCard from '../components/ToolCard.vue'
import { categories, tools } from '../data/tools.js'

// Main categories for quick navigation
const mainCategories = categories.filter(c => c.id !== 'hot')

// Hot tools
const hotTools = computed(() => tools.hot || [])

// Category groups for preview (exclude hot, show first 8 tools)
const categoryGroups = computed(() => {
  const groups = []
  for (const cat of categories) {
    if (cat.id === 'hot') continue
    if (cat.children) {
      // Use first child's tools for preview, or combine
      const firstChild = cat.children[0]
      const childTools = tools[firstChild?.id] || []
      if (childTools.length > 0) {
        groups.push({
          ...cat,
          tools: childTools,
        })
      }
    } else {
      const catTools = tools[cat.id] || []
      if (catTools.length > 0) {
        groups.push({
          ...cat,
          tools: catTools,
        })
      }
    }
  }
  return groups
})
</script>
