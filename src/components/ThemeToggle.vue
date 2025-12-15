<script setup>
import { computed } from 'vue'
import { useThemeStore } from '../stores/theme'
import { Sun, Moon } from 'lucide-vue-next'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
</script>

<template>
  <button 
    @click="themeStore.toggleTheme"
    class="relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    :class="isDark ? 'bg-slate-700' : 'bg-gray-200'"
    :title="isDark ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'"
    :aria-label="isDark ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'"
  >
    <span class="sr-only">Toggle Dark Mode</span>
    <span
      class="inline-flex items-center justify-center h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out"
      :class="isDark ? 'translate-x-7' : 'translate-x-1'"
    >
      <Transition name="icon-fade" mode="out-in">
        <component 
          :is="isDark ? Moon : Sun" 
          class="h-4 w-4"
          :class="isDark ? 'text-blue-500' : 'text-amber-500'"
          :key="isDark ? 'moon' : 'sun'"
        />
      </Transition>
    </span>
  </button>
</template>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
