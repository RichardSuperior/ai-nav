<template>
  <div
    class="tool-card group"
    @click="$emit('open-detail', tool)"
  >
    <!-- Recommended badge -->
    <div
      v-if="tool.recommended"
      class="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-sm z-10"
    >
      推荐
    </div>

    <div class="flex items-start gap-3">
      <!-- Icon: real logo or gradient fallback -->
      <div class="w-11 h-11 rounded-xl flex-shrink-0 overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200">
        <img
          v-if="tool.logo && !logoError"
          :src="tool.logo"
          :alt="tool.name"
          class="w-full h-full object-cover"
          @error="logoError = true"
        />
        <div
          v-else
          :class="['w-full h-full flex items-center justify-center text-white text-lg font-bold', colorClass]"
        >
          {{ tool.name.charAt(0) }}
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-1.5 mb-0.5">
          <h3 class="font-semibold text-gray-900 dark:text-white text-sm truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {{ tool.name }}
          </h3>
          <!-- Free badge -->
          <span v-if="tool.free" class="text-xs bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded font-medium flex-shrink-0">免费</span>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{{ tool.desc }}</p>

        <!-- Tags -->
        <div v-if="tool.tags?.length" class="flex gap-1 mt-2 flex-wrap">
          <span
            v-for="tag in tool.tags.slice(0, 2)"
            :key="tag"
            class="tag bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- Hover action row -->
    <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-50 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
      <span class="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        查看详情
      </span>
      <button
        @click.stop="openTool"
        class="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-0.5 hover:gap-1 transition-all"
      >
        访问
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getToolColor } from '../data/tools.js'

const props = defineProps({
  tool: { type: Object, required: true },
})

defineEmits(['open-detail'])

const logoError = ref(false)
const colorClass = computed(() => getToolColor(props.tool.name))

function openTool() {
  if (props.tool.url && props.tool.url !== '#') {
    window.open(props.tool.url, '_blank', 'noopener,noreferrer')
  }
}
</script>
