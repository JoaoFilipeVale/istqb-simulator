<script setup>
import { useExamStore } from '../stores/exam'
import { GraduationCap } from 'lucide-vue-next'

const store = useExamStore()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main Content Area -->
    <div class="flex-1 flex items-center justify-center p-4">
      <div class="max-w-2xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-colors duration-300">
        <!-- Icon -->
        <div class="flex justify-center mb-4">
          <GraduationCap class="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </div>
        
        <!-- Title -->
        <!-- Title -->
        <h1 class="text-3xl font-bold text-slate-800 dark:text-white mb-2">{{ $t('welcome.title') }}</h1>
        
        <!-- Subtitle with Badge -->
        <div class="flex items-center justify-center gap-2 mb-8">
          <p class="text-xl font-semibold text-slate-600 dark:text-gray-300">{{ $t('welcome.subtitle') }}</p>
          <span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm font-bold px-2 py-1 rounded">(v4.0)</span>
        </div>
        
        <!-- Instructions Box -->
        <div class="space-y-4 text-slate-600 dark:text-gray-300 mb-8 text-left bg-slate-50 dark:bg-gray-700 p-6 rounded-lg border border-slate-200 dark:border-gray-600">
          <p class="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{{ $t('welcome.instructions_title') }}</p>
          <ul class="list-disc list-inside space-y-2">
            <li v-html="$t('welcome.instruction_1')"></li>
            <li v-html="$t('welcome.instruction_2')"></li>
            <li v-html="$t('welcome.instruction_3')"></li>
            <li v-html="$t('welcome.instruction_4')"></li>
            <li class="text-blue-700 dark:text-blue-300" v-html="$t('welcome.instruction_5')"></li>
          </ul>
        </div>

        <!-- Start Button -->
        <button 
          @click="store.startExam"
          data-testid="start-exam-btn"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          {{ $t('welcome.start_button') }}
        </button>
      </div>
    </div>

    <!-- Legal Footer -->
    <footer class="py-6 px-4 bg-slate-100 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-4xl mx-auto text-center space-y-1">
        <p class="text-xs text-gray-600 dark:text-gray-400">
          <span class="font-semibold">{{ $t('welcome.footer.developed_by') }}</span> | 
          <a href="https://github.com/joaofilipevale" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ $t('welcome.footer.opensource_link') }}
          </a>
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500">
          {{ $t('welcome.footer.based_on') }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500">
          {{ $t('welcome.footer.copyright') }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500 italic">
          {{ $t('welcome.footer.disclaimer') }}
        </p>
      </div>
    </footer>
  </div>
</template>
