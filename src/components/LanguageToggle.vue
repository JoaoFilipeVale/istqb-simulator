<script setup>
import { useLanguageStore } from '../stores/language'
import { Icon } from '@iconify/vue'

const languageStore = useLanguageStore()
</script>

<template>
  <button 
    @click="languageStore.toggleLanguage"
    class="relative inline-flex items-center justify-center p-0.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md h-8 w-8 group"
    :title="languageStore.currentLocale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
    :aria-label="languageStore.currentLocale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
  >
    <transition name="scale" mode="out-in">
      <Icon 
        v-if="languageStore.currentLocale === 'pt'" 
        icon="circle-flags:pt" 
        class="w-full h-full object-cover rounded-full shadow-sm"
      />
      <Icon 
        v-else 
        icon="circle-flags:uk" 
        class="w-full h-full object-cover rounded-full shadow-sm"
      />
    </transition>
  </button>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>
