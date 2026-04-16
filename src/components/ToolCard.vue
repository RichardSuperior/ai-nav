<template>
  <div
    :class="['group relative bg-white rounded-xl border border-gray-100 p-4 hover:border-indigo-200 hover:shadow-card-hover transition-all duration-200 cursor-pointer', recommended ? 'ring-1 ring-indigo-100' : '']"
    @click="openTool"
  >
    <!-- Recommended badge -->
    <div
      v-if="recommended"
      class="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-sm"
    >
      推荐
    </div>

    <div class="flex items-start gap-3">
      <!-- Icon -->
      <div
        :class="['w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200', colorClass]"
      >
        {{ tool.name.charAt(0) }}
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-0.5">
          <h3 class="font-semibold text-gray-900 text-sm truncate group-hover:text-indigo-600 transition-colors">
            {{ tool.name }}
          </h3>
        </div>
        <p class="text-xs text-gray-500 leading-relaxed line-clamp-2">{{ tool.desc }}</p>

        <!-- Tags -->
        <div v-if="tool.tags?.length" class="flex gap-1 mt-2 flex-wrap">
          <span
            v-for="tag in tool.tags.slice(0, 2)"
            :key="tag"
            class="tag bg-gray-100 text-gray-600"
          >{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- Hover action -->
    <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <svg class="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getToolColor } from '../data/tools.js'

const props = defineProps({
  tool: { type: Object, required: true },
})

const recommended = computed(() => props.tool.recommended)

const colorClass = computed(() => getToolColor(props.tool.name))

function openTool() {
  if (props.tool.url && props.tool.url !== '#') {
    window.open(props.tool.url, '_blank', 'noopener,noreferrer')
  }
}
</script>
