<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col transition-colors">
    <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    
    <div class="flex flex-1 overflow-hidden">
      <AppSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />
      
      <main class="flex-1 overflow-y-auto min-w-0">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" @open-detail="openDetail" />
          </transition>
        </router-view>
        <AppFooter />
      </main>
    </div>

    <!-- Tool Detail Modal -->
    <ToolDetailModal
      :tool="selectedTool"
      @close="selectedTool = null"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'
import ToolDetailModal from './components/ToolDetailModal.vue'

const sidebarOpen = ref(false)
const selectedTool = ref(null)

function openDetail(tool) {
  selectedTool.value = tool
}
</script>
