<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col transition-colors">
    <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    
    <div class="flex flex-1 overflow-hidden">
      <AppSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />
      
      <main class="flex-1 overflow-y-auto min-w-0" ref="mainContent">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" @open-detail="openDetail" />
          </transition>
        </router-view>
        <AppFooter />
      </main>
    </div>

    <!-- Back to Top Button -->
    <transition name="fade">
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
        aria-label="回到顶部"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </transition>

    <!-- Tool Detail Modal -->
    <ToolDetailModal
      :tool="selectedTool"
      @close="selectedTool = null"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'
import ToolDetailModal from './components/ToolDetailModal.vue'
import { useAutoLocale } from './composables/useAutoLocale'

const { locale } = useI18n()
const { initAutoLocale } = useAutoLocale()
const sidebarOpen = ref(false)
const selectedTool = ref(null)
const showBackToTop = ref(false)

function openDetail(tool) {
  selectedTool.value = tool
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 400
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // 初始化自动语言检测（根据IP判断国内/国外）
  await initAutoLocale()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
