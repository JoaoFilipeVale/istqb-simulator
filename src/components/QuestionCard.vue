<script setup>
import { computed } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  modelValue: {
    type: [String, Array],
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const isMultiple = computed(() => props.question.type === 'multiple')

// Handle option selection
// - Multiple choice: Toggles option in array
// - Single choice: Sets value directly
function handleChange(optionId) {
  if (isMultiple.value) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = current.indexOf(optionId)
    if (index === -1) {
      current.push(optionId)
    } else {
      current.splice(index, 1)
    }
    emit('update:modelValue', current.sort())
  } else {
    emit('update:modelValue', optionId)
  }
}

// Check if option is currently selected for styling
function isSelected(optionId) {
  if (isMultiple.value) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(optionId)
  }
  return props.modelValue === optionId
}
</script>

<template>
  <div class="bg-white p-4 sm:p-6 rounded-none sm:rounded-xl shadow-none sm:shadow-sm border-0 sm:border border-slate-200">
    <div class="mb-6">
      <h3 class="text-lg font-medium text-slate-900 leading-relaxed" v-html="question.text" data-testid="question-text"></h3>
      <p v-if="isMultiple" class="text-sm text-blue-600 font-medium mt-2 bg-blue-50 inline-block px-3 py-1 rounded-full">
        Selecione duas opções
      </p>
    </div>

    <div class="space-y-3">
      <div 
        v-for="option in question.options" 
        :key="option.id"
        class="relative flex items-start p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:border-blue-300"
        :class="isSelected(option.id) ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-slate-200'"
        @click="handleChange(option.id)"
      >
        <div class="flex items-center h-5">
          <input 
            :type="isMultiple ? 'checkbox' : 'radio'" 
            :name="'question-' + question.id"
            :value="option.id"
            :checked="isSelected(option.id)"
            class="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
            @change="handleChange(option.id)"
            @click.stop
          >
        </div>
        <div class="ml-3 text-sm">
          <label class="font-medium text-slate-700 cursor-pointer select-none" data-testid="answer-option">
            <strong class="text-slate-900">{{ option.id.toUpperCase() }})</strong> {{ option.text }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
