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
      class="w-full shrink-0 z-50 content-center sticky top-0 bg-slate-50/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-300"
    >
      <div 
        class="flex justify-end items-center gap-2 transition-all duration-300"
        :class="store.status === 'finished' ? 'max-w-4xl mx-auto w-full px-4 py-4 sm:px-6 lg:px-8 xl:max-w-full xl:px-4' : 'w-full p-4'"
      >
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
    
    <!-- Main Content -->
    <main 
      class="flex-grow flex flex-col w-full mx-auto transition-all duration-300"
      :class="store.status === 'active' ? 'max-w-full' : 'p-0 sm:px-4 max-w-7xl items-center justify-center'"
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
