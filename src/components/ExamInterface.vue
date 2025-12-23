<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useExamStore } from '../stores/exam'
import QuestionCard from './QuestionCard.vue'
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'
import Calculator from './Calculator.vue'
import Notepad from './Notepad.vue'

import { 
  ChevronLeft, ChevronRight, Clock, CheckCircle, AlertCircle, Menu, X, MoreVertical, LogOut, PanelLeftClose, PanelLeftOpen, HelpCircle, Pin,
  Calculator as CalculatorIcon, FileEdit 
} from 'lucide-vue-next'

import { useI18n } from 'vue-i18n'

const store = useExamStore()
const { t } = useI18n() 
const showConfirmModal = ref(false)
const showOptionsMenu = ref(false) // Header options toggle

// Tool Modals State
const showCalculator = ref(false)
const showNotepad = ref(false)


// Sidebar State
// Default to open on large screens, closed on small
const isSidebarOpen = ref(typeof window !== 'undefined' && window.innerWidth >= 1024)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

/**
 * Handles window resize events to auto-adjust sidebar visibility.
 * - Opens sidebar when moving to Desktop (>=1024px).
 * - Closes sidebar when moving to Mobile (<1024px) to prevent overlay.
 */
const handleResize = () => {
  if (typeof window === 'undefined') return
  
  const newWidth = window.innerWidth
  const oldWidth = windowWidth.value
  
  windowWidth.value = newWidth

  // Auto-adjust sidebar when crossing the lg (1024px) breakpoint
  if (oldWidth < 1024 && newWidth >= 1024) {
    isSidebarOpen.value = true
  } else if (oldWidth >= 1024 && newWidth < 1024) {
    isSidebarOpen.value = false
  }
}



// Format seconds into MM:SS string
const formattedTime = computed(() => {
  const minutes = Math.floor(store.timeLeft / 60)
  const seconds = store.timeLeft % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const isLowTime = computed(() => store.timeLeft <= 600) // 10 minutes warning (`<=` to include exactly 10:00 or jump on 09:59? user said 10 mins or less. 600 is fine.)

// Count answered questions
const answeredCount = computed(() => {
  return Object.values(store.userAnswers).filter(ans => ans !== undefined && ans !== null && (Array.isArray(ans) ? ans.length > 0 : true)).length
})

const markedCount = computed(() => Object.keys(store.markedQuestions).length)

// Two-way binding for the current question's answer
// Syncs directly with the store
const currentAnswer = computed({
  get: () => store.userAnswers[store.currentQuestion?.id],
  set: (val) => store.submitAnswer(store.currentQuestion.id, val)
})

// Scroll to top when question changes
watch(() => store.currentQuestionIndex, () => {
  if (typeof window !== 'undefined') {
    // Ensure the user sees the top of the new question
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Also try to scroll the main container if it's the scrolling element (e.g. in some layouts)
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.scrollTop = 0
    }
  }
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

const isCurrentMarked = computed(() => !!store.markedQuestions[store.currentQuestion?.id])

function toggleMark() {
  if (store.currentQuestion) {
    store.toggleMarkQuestion(store.currentQuestion.id)
  }
}

function handleKeydown(e) {
  if (e.key.toLowerCase() === 'f' && !e.target.matches('input, textarea')) {
    e.preventDefault()
    toggleMark()
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <div class="flex flex-col h-[100dvh] bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm z-30 transition-colors duration-300 fixed top-0 left-0 w-full">
      <div class="w-full h-16 flex items-center px-4 justify-between bg-white dark:bg-gray-800 relative z-20">
        <!-- LEFT: Sidebar Toggle, Counter, Navigation -->
        <div class="flex items-center gap-2 sm:gap-4 shrink-0">
          <!-- Sidebar Toggle -->
          <button 
              @click="isSidebarOpen = !isSidebarOpen" 
              class="p-2 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors" 
              data-testid="sidebar-toggle"
              :title="isSidebarOpen ? $t('exam.close_sidebar') : $t('exam.open_sidebar')"
            >
              <PanelLeftClose v-if="isSidebarOpen" class="w-6 h-6" />
              <PanelLeftOpen v-else class="w-6 h-6" />
            </button>

            <!-- Counter -->
            <div class="flex items-center text-sm font-bold text-slate-600 dark:text-gray-400 shrink-0">
               <span>{{ store.currentQuestionIndex + 1 }}</span>
               <span class="mx-1 opacity-50">/</span>
               <span class="opacity-75">{{ store.totalQuestions }}</span>
            </div>

            <!-- Navigation -->
            <div class="flex items-center space-x-1 shrink-0">
                <button @click="store.prevQuestion" :disabled="store.isFirstQuestion" class="toolbar-btn p-2 flex items-center justify-center min-w-[40px] min-h-[40px]" :title="$t('exam.prev_button')">
                    <ChevronLeft class="w-6 h-6" />
                </button>
                <button @click="store.nextQuestion" :disabled="!store.userAnswers[store.currentQuestion?.id] && !store.shuffledQuestions[store.currentQuestionIndex+1]" class="toolbar-btn p-2 flex items-center justify-center min-w-[40px] min-h-[40px]" :title="$t('exam.next_button')">
                    <ChevronRight class="w-6 h-6" />
                </button>
            </div>
            
             <!-- DESKTOP TOOLS (Hidden on Mobile) -->
            <div class="hidden lg:flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-gray-700">
                <button @click="toggleMark" class="toolbar-tool-btn p-2 flex items-center justify-center min-w-[40px] min-h-[40px] rounded-lg transition-colors" :class="isCurrentMarked ? 'text-amber-600 dark:text-amber-500 bg-amber-100 dark:bg-amber-900/30' : 'text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-700'" :title="$t('exam.mark_for_review')">
                    <Pin class="w-5 h-5" :class="{ 'fill-current': isCurrentMarked }" />
                </button>
                <button @click="showCalculator = !showCalculator" class="toolbar-tool-btn p-2 flex items-center justify-center min-w-[40px] min-h-[40px] rounded-lg transition-colors" :class="showCalculator ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' : 'text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-700'" :title="$t('calculator.title')">
                    <CalculatorIcon class="w-5 h-5" />
                </button>
                <button @click="showNotepad = !showNotepad" class="toolbar-tool-btn p-2 flex items-center justify-center min-w-[40px] min-h-[40px] rounded-lg transition-colors" :class="showNotepad ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' : 'text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-700'" :title="$t('notepad.title')">
                    <FileEdit class="w-5 h-5" />
                </button>
            </div>
        </div>

        <!-- RIGHT: Timer, Finish, More Options -->
        <div class="flex items-center gap-4 shrink-0 ml-auto mr-0">
             
             <!-- Timer -->
             <div 
              v-if="store.isTimed" 
              class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors duration-500 bg-slate-100 dark:bg-gray-700/50"
              :class="isLowTime ? 'text-amber-600 animate-pulse' : 'text-blue-600 dark:text-blue-400'"
            >
              <Clock class="w-4 h-4" />
              <span class="font-mono font-bold text-sm sm:text-base">{{ formattedTime }}</span>
            </div>

            <!-- Finish (Icon Only) -->
            <button 
              @click="handleFinish"
              class="flex items-center justify-center p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors border border-transparent hover:border-red-100 dark:hover:border-red-800 min-w-[40px] min-h-[40px]"
              :title="$t('exam.finish_button')"
            >
              <LogOut class="w-5 h-5" />
            </button>
            
            <!-- DESKTOP TOGGLES (Hidden on Mobile) -->
            <div class="hidden lg:flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-gray-700">
                 <LanguageToggle />
                 <ThemeToggle />
            </div>

            <!-- More Options Toggle (Mobile Only) -->
            <div class="relative lg:hidden">
              <button 
                @click="showOptionsMenu = !showOptionsMenu"
                class="flex items-center justify-center p-2 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors min-w-[40px] min-h-[40px]"
                :class="{ 'bg-slate-100 dark:bg-gray-700': showOptionsMenu }"
              >
                <MoreVertical class="w-5 h-5" />
              </button>

              <!-- Dropdown Menu -->
              <div 
                v-if="showOptionsMenu"
                class="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-slate-200 dark:border-gray-700 py-2 z-50 transform origin-top-right transition-all"
              >
                <!-- Tools Section -->
                 <div class="px-2 py-2 grid grid-cols-3 gap-2 border-b border-slate-100 dark:border-gray-700 mb-2">
                    <button @click="{ toggleMark(); showOptionsMenu = false }" class="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 text-xs gap-1" :class="isCurrentMarked ? 'text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/20' : 'text-slate-600 dark:text-gray-400'">
                        <Pin class="w-5 h-5" :class="{ 'fill-current': isCurrentMarked }" />
                        <span>Mark</span>
                    </button>
                     <button @click="{ showCalculator = !showCalculator; showOptionsMenu = false }" class="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 text-xs gap-1" :class="showCalculator ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-gray-400'">
                        <CalculatorIcon class="w-5 h-5" />
                        <span>Calc</span>
                    </button>
                     <button @click="{ showNotepad = !showNotepad; showOptionsMenu = false }" class="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 text-xs gap-1" :class="showNotepad ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-gray-400'">
                        <FileEdit class="w-5 h-5" />
                        <span>Note</span>
                    </button>
                 </div>

                <!-- Global Toggles -->
                <div class="px-4 py-2 space-y-3">
                   <div class="flex items-center justify-between">
                     <span class="text-sm font-medium text-slate-700 dark:text-gray-300">Language</span>
                     <LanguageToggle />
                   </div>
                   <div class="flex items-center justify-between">
                     <span class="text-sm font-medium text-slate-700 dark:text-gray-300">Theme</span>
                     <ThemeToggle />
                   </div>
                </div>
              </div>

              <!-- Click outside overlay for menu -->
              <div v-if="showOptionsMenu" @click="showOptionsMenu = false" class="fixed inset-0 z-40 bg-transparent w-screen h-screen -top-16 -right-4 cursor-default"></div>
            </div>
        </div>
      </div>
      <!-- Progress Bar -->
      <div class="h-1 bg-slate-200 dark:bg-gray-700 w-full relative z-30">
        <div 
          class="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out"
          :style="{ width: `${((store.currentQuestionIndex + 1) / store.totalQuestions) * 100}%` }"
        ></div>
      </div>
      
    </header>

    <div class="flex flex-1 overflow-hidden pt-16 bg-slate-50 dark:bg-gray-900">
      <!-- Sidebar (Desktop) -->
      <!-- Use v-show or conditional class for transition -->
      <aside 
        class="hidden lg:block bg-white dark:bg-gray-800 border-r border-slate-200 dark:border-gray-700 overflow-y-auto overflow-x-hidden transition-all duration-300"
        :class="isSidebarOpen ? 'w-96' : 'w-0 border-none overflow-hidden'"
      >
        <div class="p-6 w-96"> <!-- Fixed width inner container to prevent squashing -->
          <h3 class="text-sm font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-4">{{ $t('exam.sidebar_title') }}</h3>
          <div class="grid grid-cols-5 gap-2" data-testid="question-nav-grid">
            <button
              v-for="(q, index) in store.shuffledQuestions"
              :key="q.id"
              @click="store.jumpToQuestion(index)"
              class="w-10 h-10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center relative"
              :class="[
                store.currentQuestionIndex === index 
                  ? 'bg-blue-600 text-white ring-2 ring-blue-300 dark:ring-blue-700 ring-offset-2 dark:ring-offset-gray-800' 
                  : isAnswered(index)
                    ? 'bg-slate-200 dark:bg-gray-700 text-slate-700 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-gray-600'
                    : 'bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-600 text-slate-500 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700'
              ]"
            >
              {{ index + 1 }}
              <span 
                v-if="store.markedQuestions[q.id]" 
                class="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 border-2 border-white dark:border-gray-800 rounded-full z-10"
              ></span>
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
              class="w-10 h-10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center relative"
              :class="[
                store.currentQuestionIndex === index 
                  ? 'bg-blue-600 text-white' 
                  : isAnswered(index)
                    ? 'bg-slate-200 dark:bg-gray-700 text-slate-700 dark:text-gray-200'
                    : 'bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-600 text-slate-500 dark:text-gray-400'
              ]"
            >
              {{ index + 1 }}
              <span 
                v-if="store.markedQuestions[q.id]" 
                class="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 border-2 border-white dark:border-gray-800 rounded-full z-10"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Content Area (Includes Scrollable Q & Fixed Footer) -->
      <div class="flex flex-col flex-1 min-w-0 relative h-full">
        <main class="flex-1 overflow-y-auto p-0 pb-0 sm:p-8 sm:pb-8 bg-slate-50 dark:bg-gray-900">
          <div class="bg-white dark:bg-white sm:bg-transparent sm:dark:bg-transparent min-h-full shadow-none rounded-none p-0 sm:p-8 max-w-5xl mx-auto transition-colors duration-300">
            <QuestionCard 
              :question="store.currentQuestion"
              v-model="currentAnswer"
            />
            <!-- Spacer for bottom scroll -->
            <div class="h-24 sm:hidden"></div>
          </div>
        </main>
      </div>
    </div>

    <!-- CONFIRMATION MODAL -->
    <div v-if="showConfirmModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="showConfirmModal = false"></div>
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 max-w-md sm:max-w-xl w-full relative z-10 transform transition-all scale-100 dark:text-gray-100">
        
        <!-- Icon -->
        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6 animate-pulse">
          <AlertCircle class="w-8 h-8 text-amber-600 dark:text-amber-400" />
        </div>

        <h3 class="text-xl font-bold text-center text-slate-900 dark:text-white mb-2">{{ $t('exam.confirm_modal.title') }}</h3>
        
        <div class="space-y-4 mb-8">
          <p class="text-center text-slate-600 dark:text-gray-300">
            {{ $t('exam.confirm_modal.message') }}
          </p>
          
          <!-- Status Summary -->
          <div class="bg-slate-50 dark:bg-gray-700/50 rounded-lg p-4 text-center text-sm space-y-2">
            <i18n-t keypath="exam.confirm_modal.summary" tag="p" scope="global" class="text-slate-700 dark:text-gray-300">
              <template #answered>
                <span class="font-bold">{{ answeredCount }}</span>
              </template>
              <template #total>
                <span class="font-bold">{{ store.totalQuestions }}</span>
              </template>
            </i18n-t>

            <i18n-t 
              v-if="answeredCount < store.totalQuestions" 
              keypath="exam.confirm_modal.warning" 
              tag="p" 
              scope="global"
              class="text-slate-600 dark:text-gray-400"
            >
              <template #remaining>
                <span class="font-bold text-red-600 dark:text-red-400">{{ store.totalQuestions - answeredCount }}</span>
              </template>
            </i18n-t>

            <i18n-t 
              v-if="markedCount > 0" 
              keypath="exam.confirm_modal.marked_warning" 
              tag="p" 
              scope="global"
              class="text-amber-600 dark:text-amber-400 font-medium pt-2 border-t border-slate-200 dark:border-gray-600"
            >
              <template #count>
                <span class="font-bold">{{ markedCount }}</span>
              </template>
            </i18n-t>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 sm:space-x-3 sm:gap-0">
          <button 
            @click="showConfirmModal = false"
            class="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-600 font-medium transition-colors flex items-center justify-center order-2 sm:order-1"
          >
            <X class="w-5 h-5 mr-2" />
            {{ $t('exam.confirm_modal.cancel') }}
          </button>
          <button 
            @click="confirmFinish"
            class="flex-1 px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-lg hover:shadow-xl font-medium transition-all transform hover:-translate-y-0.5 flex items-center justify-center order-1 sm:order-2"
          >
            <CheckCircle class="w-5 h-5 mr-2" />
            {{ $t('exam.confirm_modal.confirm') }}
          </button>
        </div>
      </div>
    </div>

    <!-- TOOL MODALS -->
    <!-- Calculator -->
    <Calculator 
      v-if="showCalculator" 
      @close="showCalculator = false"
    />

    <!-- Notepad -->
    <Notepad 
      v-if="showNotepad" 
      @close="showNotepad = false"
    />



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
