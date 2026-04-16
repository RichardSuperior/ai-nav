<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6">
      <div class="flex items-center h-16 gap-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2.5 flex-shrink-0 group">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm group-hover:shadow-indigo-200 group-hover:shadow-md transition-shadow">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-900 text-base leading-tight">AI 导航</span>
            <span class="text-xs text-gray-400 leading-tight hidden sm:block">发现AI世界的无限可能</span>
          </div>
        </router-link>

        <!-- Search Bar -->
        <div class="flex-1 max-w-2xl mx-auto relative">
          <div class="relative">
            <div class="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索 AI 工具..."
              class="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 focus:bg-white transition-all placeholder:text-gray-400"
              @input="onSearch"
              @keyup.enter="goSearch"
              @focus="isFocused = true"
              @blur="handleBlur"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Search Dropdown -->
          <div
            v-if="isFocused && searchResults.length > 0"
            class="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            <div class="p-2 max-h-80 overflow-y-auto">
              <p class="px-3 py-1 text-xs text-gray-400 font-medium">搜索结果</p>
              <router-link
                v-for="tool in searchResults.slice(0, 8)"
                :key="tool.id"
                :to="{ name: 'Category', params: { id: tool.categoryId } }"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                @click="clearSearch"
              >
                <div :class="['w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0', getToolColor(tool.name)]">
                  {{ tool.name.charAt(0) }}
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">{{ tool.name }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ tool.desc }}</p>
                </div>
              </router-link>
            </div>
            <div class="border-t border-gray-100 p-2">
              <button
                @click="goSearch"
                class="w-full text-center text-sm text-indigo-600 hover:text-indigo-700 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                查看全部 "{{ searchQuery }}" 的搜索结果
              </button>
            </div>
          </div>
        </div>

        <!-- Nav Actions -->
        <div class="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://aijiuming.com"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            工具站
          </a>
          <button
            class="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            @click="$emit('toggle-sidebar')"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { searchTools, getToolColor } from '../data/tools.js'

const router = useRouter()
const searchQuery = ref('')
const searchResults = ref([])
const isFocused = ref(false)

function onSearch() {
  if (searchQuery.value.trim()) {
    searchResults.value = searchTools(searchQuery.value)
  } else {
    searchResults.value = []
  }
}

function goSearch() {
  if (searchQuery.value.trim()) {
    router.push({ name: 'Search', query: { q: searchQuery.value } })
    isFocused.value = false
  }
}

function clearSearch() {
  searchQuery.value = ''
  searchResults.value = []
  isFocused.value = false
}

function handleBlur() {
  setTimeout(() => {
    isFocused.value = false
  }, 200)
}

defineEmits(['toggle-sidebar'])
</script>
