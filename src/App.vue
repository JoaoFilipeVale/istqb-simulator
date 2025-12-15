<script setup>
import { onBeforeMount } from 'vue'
import { useExamStore } from './stores/exam'
import { useThemeStore } from './stores/theme'
import WelcomeScreen from './components/WelcomeScreen.vue'
import ExamInterface from './components/ExamInterface.vue'
import ResultsScreen from './components/ResultsScreen.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const store = useExamStore()
const themeStore = useThemeStore()

onBeforeMount(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div id="app-root" class="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-gray-900 dark:text-gray-100">
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    
    <transition name="fade" mode="out-in">
      <WelcomeScreen v-if="store.status === 'welcome'" />
      <ExamInterface v-else-if="store.status === 'active'" />
      <ResultsScreen v-else-if="store.status === 'finished'" />
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
