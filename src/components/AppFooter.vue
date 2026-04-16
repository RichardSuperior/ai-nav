<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-12 transition-colors">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
              </svg>
            </div>
            <span class="font-bold text-gray-900 dark:text-white">AI 导航</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            发现AI世界的无限可能。精心整理全球优质AI工具，帮助您快速找到适合的人工智能解决方案。
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-4">快速导航</h4>
          <div class="grid grid-cols-2 gap-2">
            <router-link
              v-for="cat in quickCats"
              :key="cat.id"
              :to="{ name: 'Category', params: { id: cat.id } }"
              class="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {{ cat.name }}
            </router-link>
          </div>
        </div>

        <!-- Friendly links -->
        <div>
          <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-4">友情链接</h4>
          <div class="space-y-3">
            <a
              href="https://aijiuming.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 group"
            >
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">aijiuming.com</p>
                <p class="text-xs text-gray-400 dark:text-gray-500">在线工具站</p>
              </div>
            </a>
            <a
              href="https://aijiuming.cn"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 group"
            >
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">aijiuming.cn</p>
                <p class="text-xs text-gray-400 dark:text-gray-500">在线工具站</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400 dark:text-gray-500">
          © 2025 AI 导航 · 发现AI世界的无限可能
        </p>
        <div class="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
          <span>收录 600+ AI 工具</span>
          <span>·</span>
          <span>18+ 分类</span>
          <span>·</span>
          <a href="https://aijiuming.com" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">aijiuming.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { categories } from '../data/tools.js'

const quickCats = categories.slice(0, 12)
</script>
