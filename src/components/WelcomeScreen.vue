<script setup>
import { useExamStore } from '../stores/exam'
import { GraduationCap } from 'lucide-vue-next'

const store = useExamStore()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main Content Area -->
    <div class="flex-1 flex items-center justify-center p-4">
      <div class="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <!-- Icon -->
        <div class="flex justify-center mb-4">
          <GraduationCap class="w-16 h-16 text-blue-600" />
        </div>
        
        <!-- Title -->
        <h1 class="text-3xl font-bold text-slate-800 mb-2">Bem-vindo ao simulador de exame</h1>
        
        <!-- Subtitle with Badge -->
        <div class="flex items-center justify-center gap-2 mb-8">
          <p class="text-xl font-semibold text-slate-600">ISTQB® - Certified Tester Foundation Level</p>
          <span class="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-2 py-1 rounded">(v4.0)</span>
        </div>
        
        <!-- Instructions Box -->
        <div class="space-y-4 text-slate-600 mb-8 text-left bg-slate-50 p-6 rounded-lg border border-slate-200">
          <p class="font-semibold text-lg mb-2">Instruções:</p>
          <ul class="list-disc list-inside space-y-2">
            <li>O exame consiste em <span class="font-bold text-slate-900">40 perguntas</span> de escolha múltipla.</li>
            <li>Tem <span class="font-bold text-slate-900">60 minutos</span> para completar o exame.</li>
            <li>A pontuação de aprovação é de <span class="font-bold text-slate-900">65%</span> (26 respostas corretas).</li>
            <li>Pode navegar livremente entre as perguntas e alterar as suas respostas antes de submeter.</li>
            <li class="text-blue-700"><span class="font-bold">Simulação Realista:</span> As perguntas seguem a matriz de distribuição oficial do ISTQB.</li>
          </ul>
        </div>

        <!-- Start Button -->
        <button 
          @click="store.startExam"
          data-testid="start-exam-btn"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Iniciar Exame
        </button>
      </div>
    </div>

    <!-- Legal Footer -->
    <footer class="py-6 px-4 bg-slate-100 border-t border-slate-200">
      <div class="max-w-4xl mx-auto text-center space-y-1">
        <p class="text-xs text-gray-600">
          <span class="font-semibold">Desenvolvido por João Vale</span> | 
          <a href="https://github.com/joaofilipevale" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors">
            Projeto Open Source desenvolvido para fins educativos
          </a>
        </p>
        <p class="text-xs text-gray-500">
          Baseado na Prova-Modelo de Exame ISTQB® CTFL v4.0.
        </p>
        <p class="text-xs text-gray-500">
          Perguntas e Conteúdo © International Software Testing Qualifications Board (ISTQB®). Todos os direitos reservados.
        </p>
        <p class="text-xs text-gray-500 italic">
          Este simulador não é afiliado oficialmente ao ISTQB®.
        </p>
      </div>
    </footer>
  </div>
</template>
