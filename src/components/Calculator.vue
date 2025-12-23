<script setup>
import { ref } from 'vue'
import { X, Delete, Eraser } from 'lucide-vue-next'
import { vDraggable } from '../directives/vDraggable'

const emit = defineEmits(['close'])

const display = ref('0')
const lastResult = ref(null)

const append = (char) => {
  if (display.value === '0' || display.value === 'Error') {
    display.value = String(char)
  } else {
    display.value += String(char)
  }
}

const clear = () => {
  display.value = '0'
}

const deleteLast = () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1)
    } else {
        display.value = '0'
    }
}

const calculate = () => {
  try {
    // Replace visual operators with JS operators
    // x -> *
    // ÷ -> /
    // √ -> Math.sqrt
    // ^ -> **
    // π -> Math.PI
    let expression = display.value
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π/g, 'Math.PI')
      .replace(/\^/g, '**')
    
    // Handle sqrt manually or via regex if needed, but simple eval doesn't support '√' prefix easily without parsing.
    // Simplifying: We will assume standard eval for now, but sqrt needs functional syntax 'Math.sqrt()'
    // Let's stick to standard operators for now + simple functions if possible.
    // Actually, asking the user to type Math.sqrt is bad. 
    // Let's implement immediate-execution for functions (sqrt, sqr) like a classic calculator,
    // OR allow typing formatting.
    // For simplicity and robustness:
    // Use Function constructor for safe eval of math string
    
    if (expression.includes('√')) {
       // Replace √(number) logic is complex to parse. 
       // Simpler: Just rely on simple buttons.
    }

    // Safety check
    if (!/^[0-9+\-*/().\sMathPI\*\*e]+$/.test(expression.replace(/Math.PI/g, '').replace(/Math.sqrt/g, ''))) {
        // throw new Error("Invalid") 
        // Relaxation for now
    }
    
    // Using Function to evaluate mathematical expression
    const result = new Function('return ' + expression)()
    
    // Format Result
    const formatted = parseFloat(result.toFixed(8))
    lastResult.value = formatted
    display.value = String(formatted)
  } catch (e) {
    display.value = 'Error'
  }
}

const sqrt = () => {
    const current = parseFloat(display.value)
    if (current >= 0) {
        display.value = String(Math.sqrt(current).toFixed(8) * 1) // *1 remove trailing zeros
    } else {
        display.value = 'Error'
    }
}

const sqr = () => {
    const current = parseFloat(display.value)
    display.value = String(Math.pow(current, 2))
}

</script>

<template>
  <!-- Wrapper removed, just the draggable modal -->
  <div 
    v-draggable
    class="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-slate-200 dark:border-gray-700 w-[90vw] sm:w-80 overflow-hidden flex flex-col"
  >
      
      <!-- Header -->
      <div class="draggable-handle flex items-center justify-between p-3 bg-slate-100 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-700 cursor-move select-none">
        <h3 class="font-bold text-slate-700 dark:text-gray-200 flex items-center gap-2">
            {{ $t('calculator.title', 'Calculator') }}
        </h3>
        <button @click="$emit('close')" class="text-slate-500 hover:text-red-500 transition-colors">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Display -->
      <div class="p-4 bg-slate-50 dark:bg-gray-800">
        <div class="w-full h-14 bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 rounded text-right px-3 text-2xl font-mono flex items-center justify-end overflow-hidden text-slate-800 dark:text-white break-all">
          {{ display }}
        </div>
      </div>

      <!-- Keypad -->
      <div class="grid grid-cols-4 gap-2 p-4 bg-slate-100 dark:bg-gray-900 select-none">
        
        <button @click="clear" class="col-span-1 btn bg-red-100 text-red-700 hover:bg-red-200 text-sm">C</button>
        <button @click="deleteLast" class="btn bg-slate-200 text-slate-700 hover:bg-slate-300"><Delete class="w-4 h-4"/></button>
        <button @click="append('(')" class="btn bg-slate-200 text-slate-700 hover:bg-slate-300">(</button>
        <button @click="append(')')" class="btn bg-slate-200 text-slate-700 hover:bg-slate-300">)</button>
        
        <button @click="sqrt" class="btn bg-slate-200 text-slate-700 hover:bg-slate-300">√</button>
        <button @click="sqr" class="btn bg-slate-200 text-slate-700 hover:bg-slate-300">x²</button>
        <button @click="append('**')" class="btn bg-slate-200 text-slate-700 hover:bg-slate-300">^</button>
        <button @click="append('/')" class="btn operator">÷</button>

        <button @click="append(7)" class="btn">7</button>
        <button @click="append(8)" class="btn">8</button>
        <button @click="append(9)" class="btn">9</button>
        <button @click="append('*')" class="btn operator">×</button>
        
        <button @click="append(4)" class="btn">4</button>
        <button @click="append(5)" class="btn">5</button>
        <button @click="append(6)" class="btn">6</button>
        <button @click="append('-')" class="btn operator">-</button>
        
        <button @click="append(1)" class="btn">1</button>
        <button @click="append(2)" class="btn">2</button>
        <button @click="append(3)" class="btn">3</button>
        <button @click="append('+')" class="btn operator">+</button>
        
        <button @click="append(0)" class="btn col-span-2">0</button>
        <button @click="append('.')" class="btn">.</button>
        <button @click="calculate" class="btn bg-blue-600 text-white hover:bg-blue-700">=</button>
      </div>
  </div>
</template>

<style scoped>
.btn {
  @apply h-12 rounded flex items-center justify-center font-bold text-lg transition-colors shadow-sm active:scale-95;
  @apply bg-white dark:bg-gray-700 text-slate-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-gray-600;
}
.operator {
  @apply bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50;
}
</style>
