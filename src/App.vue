<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    
    <div class="flex flex-1 overflow-hidden">
      <AppSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />
      
      <main class="flex-1 overflow-y-auto min-w-0">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <AppFooter />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'

const sidebarOpen = ref(false)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
