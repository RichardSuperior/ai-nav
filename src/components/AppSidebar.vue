<template>
  <!-- Mobile overlay -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/40 dark:bg-black/60 z-30 lg:hidden"
    @click="$emit('close')"
  ></div>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed lg:sticky top-0 lg:top-16 left-0 h-screen lg:h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 overflow-hidden',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <!-- Sidebar header for mobile -->
    <div class="lg:hidden flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
      <span class="font-semibold text-gray-800 dark:text-white">工具分类</span>
      <button @click="$emit('close')" class="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Nav list -->
    <nav class="flex-1 overflow-y-auto py-3 px-3">
      <div class="mb-2">
        <p class="px-3 py-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">工具分类</p>
      </div>
      
      <div v-for="cat in categories" :key="cat.id">
        <!-- Category without children -->
        <router-link
          v-if="!cat.children"
          :to="{ name: 'Category', params: { id: cat.id } }"
          class="nav-item"
          :class="{ active: activeId === cat.id }"
          @click="$emit('close')"
        >
          <span class="text-base">{{ cat.emoji }}</span>
          <span class="text-gray-700 dark:text-gray-300">{{ cat.name }}</span>
          <span class="ml-auto text-xs text-gray-400 dark:text-gray-500">{{ toolCount(cat.id) }}</span>
        </router-link>

        <!-- Category with children (expandable) -->
        <div v-else>
          <button
            class="nav-item w-full text-left"
            :class="{ active: isParentActive(cat) }"
            @click="toggleExpand(cat.id)"
          >
            <span class="text-base">{{ cat.emoji }}</span>
            <span class="text-gray-700 dark:text-gray-300">{{ cat.name }}</span>
            <svg
              class="w-4 h-4 ml-auto text-gray-400 transition-transform duration-200"
              :class="expanded.includes(cat.id) ? 'rotate-90' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Sub-items -->
          <div
            v-if="expanded.includes(cat.id)"
            class="ml-4 mt-0.5 space-y-0.5"
          >
            <router-link
              v-for="child in cat.children"
              :key="child.id"
              :to="{ name: 'Category', params: { id: child.id } }"
              class="nav-item text-sm pl-4 py-1.5"
              :class="{ active: activeId === child.id }"
              @click="$emit('close')"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
              <span class="text-gray-600 dark:text-gray-400">{{ child.name }}</span>
              <span class="ml-auto text-xs text-gray-400 dark:text-gray-500">{{ toolCount(child.id) }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Sidebar footer - friendly links -->
    <div class="border-t border-gray-100 dark:border-gray-800 p-4 space-y-2">
      <p class="text-xs text-gray-400 dark:text-gray-500 font-medium mb-2">友情链接</p>
      <a
        href="https://aijiuming.com"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
      >
        <div class="w-6 h-6 rounded bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center flex-shrink-0">
          <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <span class="group-hover:underline">aijiuming.com 个人主页</span>
      </a>
      <a
        href="https://aijiuming.cn"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
      >
        <div class="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
          <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <span class="group-hover:underline">aijiuming.cn 在线工具</span>
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { categories, tools } from '../data/tools.js'

const props = defineProps({
  isOpen: { type: Boolean, default: false }
})

defineEmits(['close'])

const route = useRoute()
const expanded = ref(['office', 'image'])

const activeId = computed(() => route.params.id || '')

function isParentActive(cat) {
  if (!cat.children) return false
  return cat.children.some(c => c.id === activeId.value)
}

function toggleExpand(id) {
  const idx = expanded.value.indexOf(id)
  if (idx >= 0) {
    expanded.value.splice(idx, 1)
  } else {
    expanded.value.push(id)
  }
}

function toolCount(catId) {
  return tools[catId]?.length || 0
}
</script>
