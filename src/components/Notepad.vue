<script setup>
import { computed } from 'vue'
import { X, Save } from 'lucide-vue-next'
import { useExamStore } from '../stores/exam'
import { vDraggable } from '../directives/vDraggable'

const emit = defineEmits(['close'])
const store = useExamStore()

// Bind directly to store state
const content = computed({
  get: () => store.notepadContent,
  set: (val) => store.setNotepadContent(val)
})

</script>

<template>
    <!-- Draggable Modal -->
    <div 
      v-draggable
      class="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-slate-200 dark:border-gray-700 w-[90vw] sm:w-[28rem] overflow-hidden flex flex-col"
    >
      
      <!-- Header -->
      <div class="draggable-handle flex items-center justify-between p-3 bg-slate-100 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-700 cursor-move select-none">
        <h3 class="font-bold text-slate-700 dark:text-gray-200 flex items-center gap-2">
            {{ $t('notepad.title', 'Notepad') }}
        </h3>
        <button @click="$emit('close')" class="text-slate-500 hover:text-red-500 transition-colors">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Text Area -->
      <div class="p-0 flex-1">
        <textarea 
          v-model="content"
          class="w-full h-64 p-4 border-none resize-none focus:ring-0 bg-white dark:bg-gray-800 text-slate-800 dark:text-gray-200"
          :placeholder="$t('notepad.placeholder', 'Type your notes here...')"
        ></textarea>
      </div>

      <div class="bg-slate-50 dark:bg-gray-900 px-4 py-2 text-xs text-slate-500 dark:text-gray-400 text-right border-t border-slate-200 dark:border-gray-700">
        {{ $t('notepad.auto_saved', 'Notes are auto-saved for this session') }}
      </div>
    </div>
</template>
