<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="tool"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm" @click="$emit('close')" />

        <!-- Modal -->
        <transition name="slide-up">
          <div
            v-if="tool"
            class="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <!-- Header -->
            <div class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 pb-14">
              <button
                @click="$emit('close')"
                class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="flex items-start gap-4">
                <!-- Logo -->
                <div class="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 flex-shrink-0 shadow-lg">
                  <img
                    v-if="tool.logo && !logoError"
                    :src="tool.logo"
                    :alt="tool.name"
                    class="w-full h-full object-cover"
                    @error="logoError = true"
                  />
                  <div
                    v-else
                    :class="['w-full h-full flex items-center justify-center text-white text-2xl font-bold', colorClass]"
                  >
                    {{ tool.name.charAt(0) }}
                  </div>
                </div>

                <div class="flex-1 min-w-0 pt-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <h2 class="text-xl font-bold text-white">{{ tool.name }}</h2>
                    <span v-if="tool.recommended" class="text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full font-bold">推荐</span>
                    <span v-if="tool.free" class="text-xs bg-green-400 text-green-900 px-2 py-0.5 rounded-full font-bold">免费</span>
                  </div>
                  <p class="text-white/70 text-sm mt-1 line-clamp-2">{{ tool.desc }}</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="relative px-6 -mt-8">
              <!-- Visit button (elevated) -->
              <a
                v-if="tool.url && tool.url !== '#'"
                :href="tool.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                立即访问 {{ tool.name }}
              </a>
            </div>

            <!-- Details -->
            <div class="px-6 py-5 space-y-4">
              <!-- Description -->
              <div>
                <h3 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">工具介绍</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {{ tool.detail || tool.desc }}
                </p>
              </div>

              <!-- Tags -->
              <div v-if="tool.tags?.length">
                <h3 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">标签</h3>
                <div class="flex gap-2 flex-wrap">
                  <span
                    v-for="tag in tool.tags"
                    :key="tag"
                    class="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- URL preview -->
              <div v-if="tool.url && tool.url !== '#'">
                <h3 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">网址</h3>
                <a
                  :href="tool.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline truncate block"
                >
                  {{ tool.url }}
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div class="px-6 pb-5 flex items-center justify-between">
              <span class="text-xs text-gray-400 dark:text-gray-500">数据来源：AI 导航站</span>
              <button
                @click="$emit('close')"
                class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium"
              >
                关闭
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { getToolColor } from '../data/tools.js'

const props = defineProps({
  tool: { type: Object, default: null },
})

defineEmits(['close'])

const logoError = ref(false)
const colorClass = computed(() => props.tool ? getToolColor(props.tool.name) : '')

// Reset logo error when tool changes
watch(() => props.tool, () => {
  logoError.value = false
})
</script>
