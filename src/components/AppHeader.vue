<template>
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
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
            <span class="font-bold text-gray-900 dark:text-white text-base leading-tight">AI Nav</span>
            <span class="text-xs text-gray-400 leading-tight hidden sm:block">{{ $t('home.hero.title') }}</span>
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
              :placeholder="$t('header.search')"
              class="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 focus:bg-white dark:focus:bg-gray-750 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
              @input="onSearch"
              @keyup.enter="goSearch"
              @focus="isFocused = true"
              @blur="handleBlur"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Search Dropdown -->
          <transition name="fade">
            <div
              v-if="isFocused && searchResults.length > 0"
              class="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
            >
              <div class="p-2 max-h-80 overflow-y-auto">
                <p class="px-3 py-1 text-xs text-gray-400 dark:text-gray-500 font-medium">{{ $t('search.title') }}</p>
                <router-link
                  v-for="tool in searchResults.slice(0, 8)"
                  :key="tool.id"
                  :to="{ name: 'Category', params: { id: tool.categoryId } }"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  @click="clearSearch"
                >
                  <!-- Tool Icon: logo or fallback gradient -->
                  <div class="w-8 h-8 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      v-if="tool.logo"
                      :src="tool.logo"
                      :alt="tool.name"
                      class="w-full h-full object-cover"
                      @error="e => e.target.style.display='none'"
                    />
                    <div
                      v-else
                      :class="['w-full h-full flex items-center justify-center text-white text-sm font-bold', getToolColor(tool.name)]"
                    >
                      {{ tool.name.charAt(0) }}
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ tool.name }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ getDisplayDesc(tool) }}</p>
                  </div>
                  <span v-if="tool.recommended" class="text-xs text-indigo-500 font-medium flex-shrink-0">{{ $t('category.recommended') }}</span>
                </router-link>
              </div>
              <div class="border-t border-gray-100 dark:border-gray-700 p-2">
                <button
                  @click="goSearch"
                  class="w-full text-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                >
                  {{ $t('search.title') }} "{{ searchQuery }}"
                </button>
              </div>
            </div>
          </transition>
        </div>

        <!-- Nav Actions -->
        <div class="flex items-center gap-1 flex-shrink-0">
          <!-- Language Switcher -->
          <div class="relative">
            <button
              @click="toggleLangMenu"
              class="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              :title="$t('language.switch')"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
            <transition name="fade">
              <div
                v-if="langMenuOpen"
                class="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-1 min-w-24 z-50"
              >
                <button
                  @click="setLocale('zh-CN')"
                  class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  :class="{ 'text-indigo-600 dark:text-indigo-400 font-medium': locale === 'zh-CN' }"
                >
                  {{ $t('language.zhCN') }}
                </button>
                <button
                  @click="setLocale('en')"
                  class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  :class="{ 'text-indigo-600 dark:text-indigo-400 font-medium': locale === 'en' }"
                >
                  {{ $t('language.en') }}
                </button>
              </div>
            </transition>
          </div>

          <!-- Submit Tool Button -->
          <a
            href="mailto:zhongchaohui888@gmail.com?subject=Submit AI Tool"
            class="hidden lg:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors font-medium"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            {{ $t('footer.submit') }}
          </a>

          <!-- Friend Link -->
          <a
            href="https://aijiuming.cn"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Tools
          </a>

          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDark"
            class="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :title="isDark ? $t('header.lightMode') : $t('header.darkMode')"
          >
            <!-- Sun icon (dark mode) -->
            <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon (light mode) -->
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Mobile menu button -->
          <button
            class="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
import { useI18n } from 'vue-i18n'
import { searchTools, getToolColor } from '../data/tools.js'
import { useDarkMode } from '../composables/useDarkMode.js'

const router = useRouter()
const { locale } = useI18n()
const searchQuery = ref('')
const searchResults = ref([])
const isFocused = ref(false)
const langMenuOpen = ref(false)

const { isDark, toggle: toggleDark } = useDarkMode()

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
    langMenuOpen.value = false
  }, 200)
}

function toggleLangMenu() {
  langMenuOpen.value = !langMenuOpen.value
}

function setLocale(lang) {
  locale.value = lang
  localStorage.setItem('ai-nav-locale', lang)
  langMenuOpen.value = false
}

function getDisplayDesc(tool) {
  const isZh = locale.value === 'zh-CN'
  return isZh ? tool.desc : (tool.descEn || tool.desc)
}

defineEmits(['toggle-sidebar'])
</script>
