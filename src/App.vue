<script setup>
import { onBeforeMount, watch } from 'vue'
import { useExamStore } from './stores/exam'
import { useThemeStore } from './stores/theme'
import { useLanguageStore } from './stores/language'
import WelcomeScreen from './components/WelcomeScreen.vue'
import ExamInterface from './components/ExamInterface.vue'
import ResultsScreen from './components/ResultsScreen.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import LanguageToggle from './components/LanguageToggle.vue'

const store = useExamStore()
const themeStore = useThemeStore()
const languageStore = useLanguageStore()

onBeforeMount(() => {
  themeStore.initTheme()
})

// Reactively update exam content when language changes
watch(() => languageStore.currentLocale, () => {
  store.swapLanguage()
})
</script>

<template>
  <div id="app-root" class="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-gray-900 dark:text-gray-100">
    <!-- Header for Toggles -->
    <header 
      v-if="store.status !== 'active'"
      class="w-full flex justify-end items-center p-4 gap-2 shrink-0 z-50"
    >
      <LanguageToggle />
      <ThemeToggle />
    </header>
    
    <!-- Main Content -->
    <main 
      class="flex-grow flex flex-col p-4 w-full mx-auto transition-all duration-300"
      :class="store.status === 'active' ? 'max-w-full p-0' : 'max-w-7xl items-center justify-center'"
    >
      <transition name="fade" mode="out-in">
        <WelcomeScreen v-if="store.status === 'welcome'" />
        <ExamInterface v-else-if="store.status === 'active'" />
        <ResultsScreen v-else-if="store.status === 'finished'" />
      </transition>
    </main>
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
