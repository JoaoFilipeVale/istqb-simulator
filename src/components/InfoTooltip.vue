<script setup>
import { ref } from 'vue'
import { Info } from 'lucide-vue-next'

defineProps({
  text: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
</script>

<template>
  <div class="relative inline-flex items-center ml-2 z-20 group">
    <button 
      @click.stop="isOpen = !isOpen" 
      @mouseenter="isOpen = true" 
      @mouseleave="isOpen = false"
      class="text-slate-400 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-full"
      :aria-label="text"
    >
      <Info class="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
    
    <div 
      v-if="isOpen" 
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-xs sm:text-sm rounded-lg shadow-xl text-left leading-relaxed pointer-events-none transition-opacity duration-200 z-50"
    >
      {{ text }}
      <!-- Arrow -->
      <div class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
    </div>
  </div>
</template>
