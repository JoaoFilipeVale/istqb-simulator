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
// Default to closed on all screens
const isSidebarOpen = ref(false)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

/**
 * Handles window resize events.
 * Removed auto-open logic as per request. Sidebar/Navigation allows manual toggle.
 */
const handleResize = () => {
  if (typeof window === 'undefined') return
  windowWidth.value = window.innerWidth
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

            <!-- Mobile Navigation (Visible only on < lg) -->
            <div class="flex items-center gap-1 ml-2 lg:hidden">
                <button @click="store.prevQuestion" :disabled="store.isFirstQuestion" class="p-1 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent" :title="$t('exam.prev_button')">
                    <ChevronLeft class="w-6 h-6" />
                </button>
                <button @click="store.nextQuestion" :disabled="!store.userAnswers[store.currentQuestion?.id] && !store.shuffledQuestions[store.currentQuestionIndex+1]" class="p-1 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent" :title="$t('exam.next_button')">
                    <ChevronRight class="w-6 h-6" />
                </button>
            </div>

            <!-- MAIN TOOLBAR (Desktop) -->
            <div class="hidden lg:flex items-center gap-2 ml-4">
                
                <!-- Previous -->
                <button @click="store.prevQuestion" :disabled="store.isFirstQuestion" class="flex flex-col items-center justify-center p-2 rounded-lg text-xs gap-1 min-w-[60px]" :class="store.isFirstQuestion ? 'text-slate-300 dark:text-gray-600' : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400'" :title="$t('exam.prev_button')">
                    <ChevronLeft class="w-5 h-5" />
                    <span>{{ $t('exam.toolbar.prev') }}</span>
                </button>

                <!-- Next -->
                <button @click="store.nextQuestion" :disabled="!store.userAnswers[store.currentQuestion?.id] && !store.shuffledQuestions[store.currentQuestionIndex+1]" class="flex flex-col items-center justify-center p-2 rounded-lg text-xs gap-1 min-w-[60px]" :class="(!store.userAnswers[store.currentQuestion?.id] && !store.shuffledQuestions[store.currentQuestionIndex+1]) ? 'text-slate-300 dark:text-gray-600' : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400'" :title="$t('exam.next_button')">
                    <ChevronRight class="w-5 h-5" />
                    <span>{{ $t('exam.toolbar.next') }}</span>
                </button>

                <div class="w-px h-8 bg-slate-200 dark:bg-gray-700 mx-1"></div>

                <!-- Mark -->
                <button @click="toggleMark" class="flex flex-col items-center justify-center p-2 rounded-lg text-xs gap-1 min-w-[60px]" :class="isCurrentMarked ? 'text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/20' : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400'" :title="$t('exam.mark_for_review')">
                    <Pin class="w-5 h-5" :class="{ 'fill-current': isCurrentMarked }" />
                    <span>{{ $t('exam.toolbar.flag') }}</span>
                </button>

                <div class="w-px h-8 bg-slate-200 dark:bg-gray-700 mx-1"></div>

                <!-- Calculator -->
                <button @click="showCalculator = !showCalculator" class="flex flex-col items-center justify-center p-2 rounded-lg text-xs gap-1 min-w-[60px]" :class="showCalculator ? 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20' : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400'" :title="$t('calculator.title')">
                    <CalculatorIcon class="w-5 h-5" />
                    <span>{{ $t('exam.toolbar.calc') }}</span>
                </button>

                <!-- Notepad -->
                <button @click="showNotepad = !showNotepad" class="flex flex-col items-center justify-center p-2 rounded-lg text-xs gap-1 min-w-[60px]" :class="showNotepad ? 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20' : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400'" :title="$t('notepad.title')">
                    <FileEdit class="w-5 h-5" />
                    <span>{{ $t('exam.toolbar.notes') }}</span>
                </button>

                <div class="w-px h-8 bg-slate-200 dark:bg-gray-700 mx-1"></div>

                 <!-- Finish Button (Global Header Version) -->
                <button 
                  @click="handleFinish"
                  class="flex flex-col items-center justify-center p-2 text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors min-w-[60px] text-xs gap-1"
                  :title="$t('exam.finish_button')"
                >
                  <LogOut class="w-5 h-5" />
                  <span>{{ $t('exam.toolbar.finish') }}</span>
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

                <!-- Mobile Finish Button -->
                <div class="p-2 border-t border-slate-100 dark:border-gray-700 mt-1">
                    <button 
                      @click="{ handleFinish(); showOptionsMenu = false }"
                      class="w-full flex items-center justify-center space-x-2 p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                    >
                      <LogOut class="w-4 h-4" />
                      <span class="text-sm font-bold">{{ $t('exam.finish_button') }}</span>
                    </button>
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
        class="hidden lg:block bg-white dark:bg-gray-800 border-r border-slate-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
        :class="isSidebarOpen ? 'w-16' : 'w-0 border-none'"
      >
        <div class="h-full w-16 flex flex-col items-center py-2"> <!-- Fixed width inner container -->
          <div class="flex flex-col items-center w-full px-1 h-full gap-[2px]" data-testid="question-nav-grid">
            <button
              v-for="(q, index) in store.shuffledQuestions"
              :key="q.id"
              @click="store.jumpToQuestion(index)"
              class="w-full flex-1 min-h-0 rounded text-[10px] font-medium transition-colors flex items-center justify-center relative shrink-0"
              :class="[
                store.currentQuestionIndex === index 
                  ? 'bg-blue-600 text-white z-10' 
                  : isAnswered(index)
                    ? 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-gray-600'
                    : 'bg-transparent text-slate-400 dark:text-gray-500 hover:bg-slate-50 dark:hover:bg-gray-800'
              ]"
            >
              {{ index + 1 }}
              <span 
                v-if="store.markedQuestions[q.id]" 
                class="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-500 rounded-full z-20"
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
          <div class="bg-white dark:bg-white sm:bg-transparent sm:dark:bg-transparent min-h-full shadow-none rounded-none p-0 sm:p-8 w-full mx-auto transition-colors duration-300">
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
