<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useExamStore } from '../stores/exam'
import QuestionCard from './QuestionCard.vue'
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'
import { ChevronLeft, ChevronRight, Clock, CheckCircle, AlertCircle, Menu, X, MoreVertical, LogOut, PanelLeftClose, PanelLeftOpen } from 'lucide-vue-next'

const store = useExamStore()
const showConfirmModal = ref(false)
const showOptionsMenu = ref(false) // Header options toggle

// Sidebar State
// Default to open on large screens, closed on small
const isSidebarOpen = ref(typeof window !== 'undefined' && window.innerWidth >= 1024)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const handleResize = () => {
  if (typeof window === 'undefined') return
  
  const newWidth = window.innerWidth
  const oldWidth = windowWidth.value
  
  windowWidth.value = newWidth

  // Auto-adjust sidebar when crossing the lg (1024px) breakpoint
  if (oldWidth < 1024 && newWidth >= 1024) {
    // Coming to Desktop: Open sidebar by default
    isSidebarOpen.value = true
  } else if (oldWidth >= 1024 && newWidth < 1024) {
    // Going to Mobile: Close sidebar to prevent overlay popping up
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})

// Format seconds into MM:SS string
const formattedTime = computed(() => {
  const minutes = Math.floor(store.timeLeft / 60)
  const seconds = store.timeLeft % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

// Two-way binding for the current question's answer
// Syncs directly with the store
const currentAnswer = computed({
  get: () => store.userAnswers[store.currentQuestion?.id],
  set: (val) => store.submitAnswer(store.currentQuestion.id, val)
})

// Check if a specific question index has been answered
// Used for sidebar styling (gray out answered questions)
function isAnswered(index) {
  const qId = store.shuffledQuestions[index]?.id
  const ans = store.userAnswers[qId]
  return ans !== undefined && ans !== null && (Array.isArray(ans) ? ans.length > 0 : true)
}

function handleFinish() {
  showConfirmModal.value = true
}

function confirmFinish() {
  store.finishExam()
  showConfirmModal.value = false
}
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm z-10 transition-colors duration-300">
      <div class="w-full h-16 flex">
        <!-- Sidebar Match Column (Left) -->
        <!-- Contains Menu, Title, Counter -->
        <!-- Width adjusts based on sidebar state on Desktop -->
        <!-- Sidebar Match Column (Left) -->
        <!-- Contains Menu, Title, Counter -->
        <!-- Width adjusts based on sidebar state on Desktop -->
        <div 
          class="flex items-center px-4 transition-all duration-300 border-slate-200 dark:border-gray-700"
          :class="[
            isSidebarOpen ? 'lg:w-96' : 'w-auto'
          ]"
        >
          <button 
            @click="isSidebarOpen = !isSidebarOpen" 
            class="p-2 mr-2 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors" 
            data-testid="sidebar-toggle"
            :title="isSidebarOpen ? $t('exam.close_sidebar') : $t('exam.open_sidebar')"
          >
            <PanelLeftClose v-if="isSidebarOpen" class="w-6 h-6" />
            <PanelLeftOpen v-else class="w-6 h-6" />
          </button>
          
          <!-- Title & Counter Group -->
          <!-- Always visible, regardless of sidebar state -->
          <div class="flex flex-col justify-center gap-0.5 transition-all duration-300">
             <h1 class="text-base sm:text-lg font-bold text-slate-800 dark:text-white hidden md:block leading-none">
               {{ $t('exam.title') }}
             </h1>
             <span class="text-xs text-slate-500 dark:text-gray-400 font-medium">
               {{ $t('exam.question_counter', { current: store.currentQuestionIndex + 1, total: store.totalQuestions }) }}
             </span>
          </div>
        </div>

        <!-- Main Content Match Column (Right) -->
        <div class="flex-1 flex items-center px-4 sm:px-8 relative">
          <!-- Centered Container for Alignment (Matches Question Card max-w-5xl) -->
          <!-- Added pr-12 on mobile to avoid overlapping the absolute menu button -->
          <!-- Added lg:pr-24 to prevent overlap with absolute toggles on narrower desktops -->
          <!-- Removed padding on 2xl screens where margin is sufficient to clear toggles naturally -->
          <div class="w-full max-w-5xl mx-auto flex justify-end items-center space-x-2 sm:space-x-3 pr-10 sm:pr-14 lg:pr-24 2xl:pr-0 transition-all">
            <!-- Timer -->
            <div class="flex items-center space-x-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 sm:px-4 py-2 rounded-full" data-testid="exam-timer">
              <Clock class="w-5 h-5" />
              <span class="font-mono font-bold text-lg leading-none">{{ formattedTime }}</span>
            </div>

            <!-- Finish Button (Responsive) -->
            <button 
              @click="handleFinish"
              data-testid="finish-exam-btn"
              class="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg px-2 sm:px-4 py-2 text-sm font-medium transition-colors"
              :title="$t('exam.finish_button')"
            >
              <span class="hidden lg:inline">{{ $t('exam.finish_button') }}</span>
              <LogOut class="w-5 h-5 lg:hidden" />
            </button>
          </div>

          <!-- Toggles Layer (Absolute Right) -->
          <div class="flex items-center space-x-2 absolute right-4 sm:right-8 z-20">
            <!-- Desktop Toggles (Visible on lg+) -->
            <div class="hidden lg:flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            <!-- Options Menu (Visible on Mobile/Tablet < lg) -->
            <div class="relative lg:hidden">
              <button 
                @click="showOptionsMenu = !showOptionsMenu"
                class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-gray-300 transition-colors"
                title="Options"
              >
                <MoreVertical class="w-6 h-6" />
              </button>

              <!-- Dropdown -->
              <transition name="slide-fade">
                <div 
                  v-if="showOptionsMenu"
                  class="absolute right-0 top-full mt-2 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-slate-100 dark:border-gray-700 flex flex-col gap-2 min-w-[3rem] z-50 origin-top-right"
                >
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Progress Bar -->
      <div class="h-1 bg-slate-200 dark:bg-gray-700 w-full">
        <div 
          class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out"
          :style="{ width: `${((store.currentQuestionIndex + 1) / store.totalQuestions) * 100}%` }"
        ></div>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar (Desktop) -->
      <!-- Use v-show or conditional class for transition -->
      <aside 
        class="hidden lg:block bg-white dark:bg-gray-800 border-r border-slate-200 dark:border-gray-700 overflow-y-auto transition-all duration-300"
        :class="isSidebarOpen ? 'w-96' : 'w-0 border-none overflow-hidden'"
      >
        <div class="p-6 w-96"> <!-- Fixed width inner container to prevent squashing -->
          <h3 class="text-sm font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-4">{{ $t('exam.sidebar_title') }}</h3>
          <div class="grid grid-cols-5 gap-2" data-testid="question-nav-grid">
            <button
              v-for="(q, index) in store.shuffledQuestions"
              :key="q.id"
              @click="store.jumpToQuestion(index)"
              class="w-10 h-10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              :class="[
                store.currentQuestionIndex === index 
                  ? 'bg-blue-600 text-white ring-2 ring-blue-300 dark:ring-blue-700 ring-offset-2 dark:ring-offset-gray-800' 
                  : isAnswered(index)
                    ? 'bg-slate-200 dark:bg-gray-700 text-slate-700 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-gray-600'
                    : 'bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-600 text-slate-500 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700'
              ]"
            >
              {{ index + 1 }}
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar Overlay -->
      <div v-if="isSidebarOpen" class="fixed inset-0 z-40 lg:hidden" @click="isSidebarOpen = false">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div class="absolute left-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-800 shadow-xl p-6 overflow-y-auto transition-colors duration-300" @click.stop>
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white">{{ $t('exam.sidebar_title') }}</h3>
            <button @click="isSidebarOpen = false" class="p-2 text-slate-500 dark:text-gray-400">
              <X class="w-6 h-6" />
            </button>
          </div>
          <div class="grid grid-cols-5 gap-2" data-testid="question-nav-grid-mobile">
            <button
              v-for="(q, index) in store.shuffledQuestions"
              :key="q.id"
              @click="{ store.jumpToQuestion(index); isSidebarOpen = false; }"
              class="w-10 h-10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
              :class="[
                store.currentQuestionIndex === index 
                  ? 'bg-blue-600 text-white' 
                  : isAnswered(index)
                    ? 'bg-slate-200 dark:bg-gray-700 text-slate-700 dark:text-gray-200'
                    : 'bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-600 text-slate-500 dark:text-gray-400'
              ]"
            >
              {{ index + 1 }}
            </button>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto p-4 sm:p-8">
        <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-8 max-w-5xl mx-auto mt-10 transition-colors duration-300">
          <QuestionCard 
            :question="store.currentQuestion"
            v-model="currentAnswer"
          />

          <!-- Footer Navigation -->
          <div class="mt-8 flex justify-between items-center">
            <button 
              @click="store.prevQuestion"
              :disabled="store.isFirstQuestion"
              data-testid="nav-prev"
              class="flex items-center px-4 py-2 text-slate-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft class="w-5 h-5 mr-1" />
              {{ $t('exam.prev_button') }}
            </button>

            <button 
              v-if="!store.isLastQuestion"
              @click="store.nextQuestion"
              data-testid="nav-next"
              class="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm"
            >
              {{ $t('exam.next_button') }}
              <ChevronRight class="w-5 h-5 ml-1" />
            </button>

            <button 
              v-else
              @click="handleFinish"
              class="flex items-center px-6 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg transition-colors shadow-sm font-bold"
            >
              {{ $t('exam.finish_exam_button') }}
              <CheckCircle class="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="showConfirmModal = false"></div>
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full relative z-10 transform transition-all scale-100 dark:text-gray-100">
        <div class="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 dark:bg-yellow-900/50 rounded-full mb-4">
          <AlertCircle class="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h3 class="text-xl font-bold text-center text-slate-900 dark:text-white mb-2">{{ $t('exam.confirm_modal.title') }}</h3>
        <p class="text-center text-slate-600 dark:text-gray-300 mb-6">
          {{ $t('exam.confirm_modal.message') }}
        </p>
        <div class="flex space-x-3">
          <button 
            @click="showConfirmModal = false"
            class="flex-1 px-4 py-2 bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-600 font-medium transition-colors"
          >
            {{ $t('exam.confirm_modal.cancel') }}
          </button>
          <button 
            @click="confirmFinish"
            class="flex-1 px-4 py-2 bg-red-600 dark:bg-red-600 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-700 font-medium transition-colors"
          >
            {{ $t('exam.confirm_modal.confirm') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
