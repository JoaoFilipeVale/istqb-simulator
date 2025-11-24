<script setup>
import { useExamStore } from './stores/exam'
import WelcomeScreen from './components/WelcomeScreen.vue'
import ExamInterface from './components/ExamInterface.vue'
import ResultsScreen from './components/ResultsScreen.vue'

const store = useExamStore()
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
    <transition name="fade" mode="out-in">
      <WelcomeScreen v-if="store.status === 'welcome'" />
      <ExamInterface v-else-if="store.status === 'active'" />
      <ResultsScreen v-else-if="store.status === 'finished'" />
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
