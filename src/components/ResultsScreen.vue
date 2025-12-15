<script setup>
import { computed } from 'vue'
import { useExamStore } from '../stores/exam'
import { CheckCircle, XCircle, RotateCcw, BookOpen } from 'lucide-vue-next'

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

function getUserAnswerText(question) {
  const ans = store.userAnswers[question.id]
  if (!ans) return 'Sem resposta'
  
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

// Helper to map chapter numbers to their official ISTQB v4.0 titles
function getChapterName(num) {
  const names = {
    1: 'Fundamentos',
    2: 'Testes no Ciclo de Vida',
    3: 'Testes Estáticos',
    4: 'Técnicas de Teste',
    5: 'Gestão de Testes',
    6: 'Ferramentas de Teste'
  }
  return names[num] || `Capítulo ${num}`
}

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
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div class="max-w-4xl mx-auto">
      <!-- Score Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8 transition-colors duration-300">
        <div class="p-8 text-center">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-colors duration-300"
            :class="store.passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'"
          >
            <CheckCircle v-if="store.passed" class="w-12 h-12 text-green-600 dark:text-green-400" />
            <XCircle v-else class="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
          
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-2" data-testid="result-status">
            {{ store.passed ? 'APROVADO' : 'REPROVADO' }}
          </h2>
          <p class="text-slate-600 dark:text-gray-300 text-lg mb-6" data-testid="score-summary">
            Respondeu a <span class="font-bold text-slate-900 dark:text-white">{{ answeredCount }}</span> questões de <span class="font-bold text-slate-900 dark:text-white">{{ store.totalQuestions }}</span> e acertou <span class="font-bold text-slate-900 dark:text-white">{{ store.score }}</span> questões ({{ percentage }}% de acerto)
          </p>
          
          <button 
            @click="store.resetExam"
            data-testid="restart-btn"
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md"
          >
            <RotateCcw class="w-5 h-5 mr-2" />
            Repetir Exame
          </button>
        </div>
      </div>

      <!-- Chapter Performance Analysis -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8 p-8 transition-colors duration-300" data-testid="chapter-analysis">
        <div class="flex items-center gap-3 mb-6">
          <BookOpen class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Análise por Capítulo</h3>
        </div>
        
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
              <span class="font-bold text-slate-700 dark:text-gray-200">Capítulo {{ chapter.number }}</span>
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
              <span class="font-bold text-slate-700 dark:text-gray-300">{{ chapter.correct }}/{{ chapter.total }}</span> acertos
            </p>
          </div>
        </div>
      </div>

      <!-- Review List -->
      <div class="space-y-6">
        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4">Revisão do Exame</h3>
        
        <div 
          v-for="(question, index) in store.shuffledQuestions" 
          :key="question.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border overflow-hidden transition-colors duration-300"
          :class="isCorrect(question) ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'"
        >
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <h4 class="text-lg font-medium text-slate-900 dark:text-white pr-4">
                <span class="text-slate-400 dark:text-gray-500 mr-2">{{ index + 1 }}.</span>
                <span v-html="question.text"></span>
              </h4>
              <span 
                class="px-3 py-1 rounded-full text-sm font-bold shrink-0"
                :class="isCorrect(question) ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'"
              >
                {{ isCorrect(question) ? 'Correto' : 'Incorreto' }}
              </span>
            </div>

            <div class="grid md:grid-cols-2 gap-4 mb-4 text-sm">
              <div class="p-3 rounded-lg" :class="isCorrect(question) ? 'bg-green-50 dark:bg-green-900/10' : 'bg-red-50 dark:bg-red-900/10'">
                <span class="block text-xs font-bold uppercase tracking-wider mb-1" 
                  :class="isCorrect(question) ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
                >
                  Sua Resposta
                </span>
                <span class="font-medium text-slate-800 dark:text-gray-200">{{ getUserAnswerText(question) }}</span>
              </div>
              
              <div class="p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                <span class="block text-xs font-bold text-green-800 dark:text-green-300 uppercase tracking-wider mb-1">
                  Resposta Correta
                </span>
                <span class="font-medium text-slate-800 dark:text-gray-200">{{ getCorrectAnswerText(question) }}</span>
              </div>
            </div>

            <div v-if="question.explanation" class="mt-4 pt-4 border-t border-slate-100 dark:border-gray-700">
              <p class="text-sm text-slate-600 dark:text-gray-300">
                <span class="font-bold text-slate-700 dark:text-gray-200">Explicação:</span> {{ question.explanation }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
