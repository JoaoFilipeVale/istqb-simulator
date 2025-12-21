<script setup>
import { computed, ref, onMounted } from 'vue'
import { useExamStore } from '../stores/exam'
import { CheckCircle, XCircle, RotateCcw, BookOpen, ChevronDown, ChevronUp, Brain, Lightbulb } from 'lucide-vue-next'
import InfoTooltip from './InfoTooltip.vue'

const store = useExamStore()

const percentage = computed(() => Math.round((store.score / store.totalQuestions) * 100))

// Calculate the number of questions the user actually attempted
const answeredCount = computed(() => {
  return store.shuffledQuestions.filter(q => {
    const ans = store.userAnswers[q.id]
    return ans !== undefined && ans !== null && (Array.isArray(ans) ? ans.length > 0 : true)
  }).length
})

/**
 * Checks if a specific question was answered correctly.
 * Handles both single string answers and array answers (multiple choice).
 */
function isCorrect(question) {
  const userAnswer = store.userAnswers[question.id]
  if (!userAnswer) return false
  
  if (Array.isArray(question.correctAnswer)) {
    return Array.isArray(userAnswer) && 
           userAnswer.length === question.correctAnswer.length && 
           userAnswer.every(val => question.correctAnswer.includes(val))
  }
  return userAnswer === question.correctAnswer
}

// Helper to map chapter numbers to their official ISTQB v4.0 titles
// Using i18n global instance would be ideal if outside setup, but here we can just key off the number
// AND we are inside script setup, so we can use composer? Actually `getChapterName` is used in computed.
// Let's rely on the template to translate OR use useI18n inside script.
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

function getChapterName(num) {
  // Use the 'chapters' key from our i18n files
  return t(`chapters.${num}`)
}

function getKLevelDescription(kLevel) {
  const keys = {
    'K1': 'results.k1_desc',
    'K2': 'results.k2_desc',
    'K3': 'results.k3_desc'
  }
  return t(keys[kLevel] || keys['K1'])
}

// Collapsible State
/** 
 * Controls the visibility of the "Chapter Analysis" card.
 * Default: false (collapsed) to reduce initial visual noise.
 */
const isChapterAnalysisOpen = ref(false)
const isKLevelAnalysisOpen = ref(false)
const isRecommendationsOpen = ref(false)

/** 
 * Set of question IDs that are currently expanded.
 * Incorrect questions are added automatically on mount.
 */
const expandedQuestions = ref(new Set())

// Toggle Functions
/** Toggles the Chapter Analysis card visibility */
const toggleChapterAnalysis = () => {
  isChapterAnalysisOpen.value = !isChapterAnalysisOpen.value
}

const toggleKLevelAnalysis = () => {
  isKLevelAnalysisOpen.value = !isKLevelAnalysisOpen.value
}

const toggleRecommendations = () => {
  isRecommendationsOpen.value = !isRecommendationsOpen.value
}

const toggleQuestion = (id) => {
  if (expandedQuestions.value.has(id)) {
    expandedQuestions.value.delete(id)
  } else {
    expandedQuestions.value.add(id)
  }
}

// Initialize expanded state
onMounted(() => {
  store.shuffledQuestions.forEach(q => {
    // Auto-expand incorrect answers for immediate review
    if (!isCorrect(q)) {
      expandedQuestions.value.add(q.id)
    }
  })
})

/**
 * Computes performance statistics per chapter.
 * Returns an array of objects with { number, name, correct, total, percentage }.
 */
const chapterStats = computed(() => {
  const stats = {}
  
  // Initialize chapters 1-6
  for (let i = 1; i <= 6; i++) {
    stats[i] = { correct: 0, total: 0 }
  }
  
  // Count correct answers per chapter
  store.shuffledQuestions.forEach(q => {
    if (q.chapter && stats[q.chapter]) {
      stats[q.chapter].total++
      if (isCorrect(q)) {
        stats[q.chapter].correct++
      }
    }
  })
  
  // Convert to array with metadata
  return Object.entries(stats)
    .map(([num, data]) => ({
      number: parseInt(num),
      name: getChapterName(parseInt(num)),
      correct: data.correct,
      total: data.total,
      percentage: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
    }))
    .filter(chapter => chapter.total > 0) // Only show chapters with questions
})

/**
 * Computes performance statistics by K-Level (Cognitive Level).
 */
const kLevelStats = computed(() => {
  const stats = {
    'K1': { correct: 0, total: 0 },
    'K2': { correct: 0, total: 0 },
    'K3': { correct: 0, total: 0 }
  }

  store.shuffledQuestions.forEach(q => {
    const k = q.kLevel || 'K1' // Default to K1 if missing, though it should be there now
    if (stats[k]) {
      stats[k].total++
      if (isCorrect(q)) {
        stats[k].correct++
      }
    }
  })

  return Object.entries(stats)
    .map(([level, data]) => ({
      level,
      description: getKLevelDescription(level),
      correct: data.correct,
      total: data.total,
      percentage: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
    }))
    .filter(item => item.total > 0)
})

/**
 * Generates study recommendations based on weak chapters (< 65%) and missed LOs.
 */
const studyRecommendations = computed(() => {
  const weakChapters = chapterStats.value.filter(c => c.percentage < 65)
  
  const missedLOs = store.shuffledQuestions
    .filter(q => !isCorrect(q) && q.lo)
    .map(q => ({
      id: q.id,
      lo: q.lo,
      text: q.text,
      chapter: q.chapter
    }))

  return {
    chapters: weakChapters,
    missedQuestions: missedLOs
  }
})

function getUserAnswerText(question) {
  const ans = store.userAnswers[question.id]
  if (!ans) return t('results.no_answer')
  
  if (Array.isArray(ans)) {
    return ans.map(id => {
      const opt = question.options.find(o => o.id === id)
      return opt ? `${id.toUpperCase()}) ${opt.text}` : id
    }).join(', ')
  }
  
  const opt = question.options.find(o => o.id === ans)
  return opt ? `${ans.toUpperCase()}) ${opt.text}` : ans
}

function getCorrectAnswerText(question) {
  const ans = question.correctAnswer
  if (Array.isArray(ans)) {
    return ans.map(id => {
      const opt = question.options.find(o => o.id === id)
      return opt ? `${id.toUpperCase()}) ${opt.text}` : id
    }).join(', ')
  }
  
  const opt = question.options.find(o => o.id === ans)
  return opt ? `${ans.toUpperCase()}) ${opt.text}` : ans
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-gray-900 pt-0 pb-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div class="max-w-4xl mx-auto">
      <!-- Score Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8 transition-colors duration-300">
        <div class="p-8 text-center">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-colors duration-300"
            :class="store.passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'"
          >
            <CheckCircle v-if="store.passed" class="w-12 h-12 text-green-600 dark:text-green-400" />
            <XCircle v-else class="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
          
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-2" data-testid="result-status">
            {{ store.passed ? t('results.passed') : t('results.failed') }}
          </h2>
          <div class="mb-6 text-center">
            <span class="text-slate-600 dark:text-gray-300 text-lg" data-testid="score-summary" v-html="t('results.score_summary', { answered: answeredCount, total: store.totalQuestions, score: store.score, percentage: percentage })">
            </span>
            <InfoTooltip :text="t('tooltips.scoring')" />
          </div>
          
          <button 
            @click="store.resetExam"
            data-testid="restart-btn"
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md"
          >
            <RotateCcw class="w-5 h-5 mr-2" />
            {{ t('results.restart_button') }}
          </button>
        </div>
      </div>

      <!-- Chapter Performance Analysis -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8 transition-colors duration-300" data-testid="chapter-analysis">
        <button 
          @click="toggleChapterAnalysis"
          class="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
          :aria-expanded="isChapterAnalysisOpen"
          aria-controls="chapter-analysis-content"
        >
          <div class="flex items-center gap-3">
            <BookOpen class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ t('results.chapter_analysis_title') }}</h3>
          </div>
          <component :is="isChapterAnalysisOpen ? ChevronUp : ChevronDown" class="w-6 h-6 text-slate-400" />
        </button>
        
        <div v-show="isChapterAnalysisOpen" id="chapter-analysis-content" class="px-6 pb-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="chapter in chapterStats" 
              :key="chapter.number"
              class="border rounded-lg p-4 transition-all duration-300"
              :class="chapter.percentage >= 65 
                ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' 
                : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-slate-700 dark:text-gray-200">{{ t('results.chapter', { number: chapter.number }) }}</span>
                <span 
                  class="text-sm font-bold px-2 py-1 rounded"
                  :class="chapter.percentage >= 65 
                    ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' 
                    : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'"
                >
                  {{ chapter.percentage }}%
                </span>
              </div>
              <p class="text-sm font-medium text-slate-600 dark:text-gray-400 mb-2">{{ chapter.name }}</p>
              <p class="text-sm text-slate-500 dark:text-gray-500">
                <span class="font-bold text-slate-700 dark:text-gray-300">{{ t('results.hits', { correct: chapter.correct, total: chapter.total }) }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- K-Level Analysis -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8 transition-colors duration-300" data-testid="klevel-analysis">
        <button 
          @click="toggleKLevelAnalysis"
          class="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors rounded-t-2xl"
          :class="{ 'rounded-b-2xl': !isKLevelAnalysisOpen }"
          :aria-expanded="isKLevelAnalysisOpen"
          aria-controls="klevel-analysis-content"
        >
           <div class="flex items-center gap-3">
            <Brain class="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <div class="flex items-center">
               <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ t('results.klevel_title') }}</h3>
               <InfoTooltip :text="t('tooltips.k_level')" />
            </div>
          </div>
          <component :is="isKLevelAnalysisOpen ? ChevronUp : ChevronDown" class="w-6 h-6 text-slate-400" />
        </button>

        <div v-show="isKLevelAnalysisOpen" id="klevel-analysis-content" class="px-6 pb-6">

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="stat in kLevelStats" :key="stat.level" class="relative pt-1">
              <div class="flex mb-2 items-center justify-between">
                <div>
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-purple-200 dark:bg-purple-800 text-purple-600 dark:text-purple-200">
                    {{ stat.level }}
                  </span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-semibold inline-block text-purple-600 dark:text-purple-300">
                    {{ stat.percentage }}%
                  </span>
                </div>
              </div>
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100 dark:bg-purple-900/30">
                <div :style="`width: ${stat.percentage}%`" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
              </div>
              <p class="text-xs text-slate-500 dark:text-gray-400">{{ stat.description }}</p>
              <p class="text-xs font-medium text-slate-700 dark:text-gray-300 mt-1">{{ stat.correct }}/{{ stat.total }} {{ t('results.questions') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Study Recommendations -->
      <div v-if="studyRecommendations.chapters.length > 0" class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8 transition-colors duration-300 border-l-4 border-yellow-400">
        <button 
          @click="toggleRecommendations"
          class="w-full flex items-center justify-between p-6 hover:bg-yellow-50 dark:hover:bg-gray-700 transition-colors text-left rounded-tr-2xl"
           :class="{ 'rounded-br-2xl': !isRecommendationsOpen }"
           :aria-expanded="isRecommendationsOpen"
           aria-controls="recommendations-content"
        >
          <div class="flex items-center gap-3">
             <Lightbulb class="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
             <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ t('results.recommendations_title') }}</h3>
          </div>
           <component :is="isRecommendationsOpen ? ChevronUp : ChevronDown" class="w-6 h-6 text-slate-400" />
        </button>

        <div v-show="isRecommendationsOpen" id="recommendations-content" class="px-6 pb-6 pt-0">
          <p class="text-slate-600 dark:text-gray-300 mb-4">{{ t('results.recommendations_desc') }}</p>
          
          <ul class="space-y-2">
            <li v-for="chap in studyRecommendations.chapters" :key="chap.number" class="flex items-start gap-2 text-slate-700 dark:text-gray-200">
              <span class="text-yellow-500 mt-1">⚠️</span>
              <span>
                <span class="font-bold">{{ t('results.review_chapter', { number: chap.number }) }}:</span> {{ chap.name }} ({{ chap.percentage }}%)
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Review List -->
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">{{ t('results.review_title') }}</h3>
        
        <div 
          v-for="(question, index) in store.shuffledQuestions" 
          :key="question.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border overflow-hidden transition-colors duration-300"
          :class="isCorrect(question) ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'"
        >
          <button 
            @click="toggleQuestion(question.id)"
            class="w-full text-left p-3 sm:p-6 flex flex-col gap-3 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
          >
            <!-- Header Row: Index + Badge/Chevron -->
            <div class="flex items-center justify-between w-full">
               <span class="text-sm font-bold text-slate-400 dark:text-gray-500">
                 {{ t('results.question_number', { number: index + 1 }) }}
               </span>
               
               <div class="flex items-center gap-2">
                 <span 
                  class="px-2 py-1 rounded text-xs font-bold"
                  :class="isCorrect(question) ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'"
                >
                  {{ isCorrect(question) ? t('results.correct_badge') : t('results.incorrect_badge') }}
                </span>
                <component :is="expandedQuestions.has(question.id) ? ChevronUp : ChevronDown" class="w-5 h-5 text-slate-400" />
               </div>
            </div>

            <!-- Body Row: Question Text (Full Width) -->
            <div 
              class="w-full text-base sm:text-lg font-medium text-slate-900 dark:text-white"
            >
              <div 
                v-html="question.text" 
                :class="{ 'line-clamp-2': !expandedQuestions.has(question.id) }" 
              ></div>
            </div>
          </button>

          <div v-show="expandedQuestions.has(question.id)" class="px-6 pb-6 pt-0">
            <div class="grid md:grid-cols-2 gap-4 mb-4 text-sm mt-4">
              <div class="p-3 rounded-lg" :class="isCorrect(question) ? 'bg-green-50 dark:bg-green-900/10' : 'bg-red-50 dark:bg-red-900/10'">
                <span class="block text-xs font-bold uppercase tracking-wider mb-1" 
                  :class="isCorrect(question) ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
                >
                  {{ t('results.your_answer') }}
                </span>
                <span class="font-medium text-slate-800 dark:text-gray-200">{{ getUserAnswerText(question) }}</span>
              </div>
              
              <div class="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                <span class="block text-xs font-bold text-green-800 dark:text-green-300 uppercase tracking-wider mb-1">
                  {{ t('results.correct_answer') }}
                </span>
                <span class="font-medium text-slate-800 dark:text-gray-200">{{ getCorrectAnswerText(question) }}</span>
              </div>
            </div>

            <div v-if="question.explanation" class="mt-4 pt-4 border-t border-slate-100 dark:border-gray-700">
               <p class="text-sm text-slate-600 dark:text-gray-300">
                <span class="font-bold text-slate-700 dark:text-gray-200">{{ t('results.explanation') }}</span> {{ question.explanation }}
              </p>
              <div v-if="!isCorrect(question) && question.lo" class="mt-2 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-700/50 p-2 rounded">
                <span>LO: {{ question.lo }}</span>
                <InfoTooltip :text="t('tooltips.lo')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
