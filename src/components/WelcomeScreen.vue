<script setup>
import { useExamStore } from '../stores/exam'
import { GraduationCap, PlayCircle, BookOpen } from 'lucide-vue-next'

const store = useExamStore()
</script>

<template>
  <div class="w-full flex-1 flex flex-col">
    <!-- Main Content Area -->
    <div class="flex-1 flex items-center justify-center p-4">
      <div class="max-w-5xl w-full bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl text-center transition-colors duration-300 flex flex-col justify-center">

        <!-- Icon -->
        <div class="flex justify-center mb-4">
          <GraduationCap class="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </div>
        
        <!-- Title -->
        <!-- Title -->
        <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-2">{{ $t('welcome.title') }}</h1>
        
        <!-- Subtitle with Badge -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 sm:mb-8">
          <p class="text-lg sm:text-xl font-semibold text-slate-600 dark:text-gray-300">{{ $t('welcome.subtitle') }}</p>
          <span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm font-bold px-2 py-1 rounded">(v4.0)</span>
        </div>
        
        <!-- Examination Conditions (Official Look) -->
        <div class="text-left space-y-6 mb-8 text-sm sm:text-base text-slate-700 dark:text-gray-300 bg-slate-50 dark:bg-gray-700/50 p-6 rounded-lg border border-slate-200 dark:border-gray-600 max-h-[80vh] overflow-y-auto">
          
          <p class="font-bold">{{ $t('welcome.conditions.intro') }}</p>
          
          <div>
            <h3 class="font-bold mb-1">{{ $t('welcome.conditions.title') }}</h3>
            <h4 class="font-semibold underline">{{ $t('welcome.conditions.format_title') }}</h4>
            <ul class="list-disc list-inside ml-2 space-y-1">
                <li>{{ $t('welcome.conditions.format_1') }}</li>
                <li>{{ $t('welcome.conditions.format_2') }}</li>
                <li>{{ $t('welcome.conditions.format_3') }}</li>
                <li>{{ $t('welcome.conditions.format_4') }}</li>
            </ul>
          </div>

          <div>
             <p class="font-bold mb-1">{{ $t('welcome.conditions.forbidden_intro') }}</p>
             <ul class="list-disc list-inside ml-2 space-y-1">
                <li><span class="font-bold">{{ $t('welcome.conditions.forbidden_1') }}</span> {{ $t('welcome.conditions.forbidden_1_suffix') }}</li>
                <li><span class="font-bold">{{ $t('welcome.conditions.forbidden_2') }}</span> {{ $t('welcome.conditions.forbidden_2_suffix') }}</li>
                <li><span class="font-bold">{{ $t('welcome.conditions.forbidden_3') }}</span> {{ $t('welcome.conditions.forbidden_3_suffix') }}</li>
                <li><span class="font-bold">{{ $t('welcome.conditions.forbidden_4') }}</span> {{ $t('welcome.conditions.forbidden_4_suffix') }}</li>
                <li><span class="font-bold">{{ $t('welcome.conditions.forbidden_5') }}</span> {{ $t('welcome.conditions.forbidden_5_suffix') }}</li>
             </ul>
             <p class="mt-2 text-xs italic opacity-75">{{ $t('welcome.conditions.violation') }}</p>
          </div>

          <div>
            <h3 class="font-bold mb-1">{{ $t('welcome.conditions.agreement_title') }}</h3>
            <p>{{ $t('welcome.conditions.agreement_1') }}</p>
            <p>{{ $t('welcome.conditions.agreement_2') }}</p>
          </div>

        </div>

        <!-- Start Buttons -->
        <div class="flex flex-col sm:flex-row justify-end gap-4 w-full border-t border-slate-200 dark:border-gray-700 pt-6">
          <button 
            @click="store.startExam(false)"
            class="inline-flex items-center justify-center px-6 py-3 h-14 text-slate-700 bg-slate-200 hover:bg-slate-300 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 font-bold rounded-lg transition-all shadow hover:shadow-md text-lg uppercase tracking-wide"
          >
            {{ $t('welcome.start_untimed') }}
          </button>

          <button 
            @click="store.startExam(true)"
            class="inline-flex items-center justify-center px-8 py-3 h-14 bg-lime-600 hover:bg-lime-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg uppercase tracking-wide"
          >
            {{ $t('welcome.start_button_official', 'Start Examination') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Legal Footer -->
    <footer class="py-6 px-4 transition-colors duration-300 opacity-60 hover:opacity-100">
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
