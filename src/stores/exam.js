import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { questions as questionsPt } from '../data/questions_pt.js'
import { questions as questionsEn } from '../data/questions_en.js'
import { useLanguageStore } from './language'

export const useExamStore = defineStore('exam', () => {
    const languageStore = useLanguageStore()

    // --- State ---
    const status = ref('welcome')
    const currentQuestionIndex = ref(0)
    const userAnswers = ref({})
    const timeLeft = ref(3600)
    const shuffledQuestions = ref([])
    let timerInterval = null

    // --- Computed Source ---
    // Select the correct array of questions based on current locale
    const availableQuestions = computed(() => {
        return languageStore.currentLocale === 'en' ? questionsEn : questionsPt
    })

    // --- Getters ---
    const currentQuestion = computed(() => shuffledQuestions.value[currentQuestionIndex.value])
    const totalQuestions = computed(() => shuffledQuestions.value.length || 40) // Default to 40 if not yet generated

    const isLastQuestion = computed(() => currentQuestionIndex.value === shuffledQuestions.value.length - 1)
    const isFirstQuestion = computed(() => currentQuestionIndex.value === 0)

    const score = computed(() => {
        let correctCount = 0
        shuffledQuestions.value.forEach(q => {
            const userAnswer = userAnswers.value[q.id]
            if (!userAnswer) return

            if (Array.isArray(q.correctAnswer)) {
                if (Array.isArray(userAnswer) &&
                    userAnswer.length === q.correctAnswer.length &&
                    userAnswer.every(val => q.correctAnswer.includes(val))) {
                    correctCount++
                }
            } else {
                if (userAnswer === q.correctAnswer) {
                    correctCount++
                }
            }
        })
        return correctCount
    })

    const passed = computed(() => score.value >= 26)

    // --- Actions ---

    /**
     * Internal helper to generate weighted exam from the CURRENT language source.
     * Takes the 100 questions and picks 40 based on distribution.
     */
    function generateWeightedExam() {
        const sourceFn = availableQuestions.value
        // Use default empty array if source is undefined (e.g. during hot reload or init issues)
        const source = sourceFn || []

        const distribution = {
            1: 8, 2: 6, 3: 4, 4: 11, 5: 9, 6: 2
        }

        const questionsByChapter = {}
        source.forEach(q => {
            if (!questionsByChapter[q.chapter]) {
                questionsByChapter[q.chapter] = []
            }
            questionsByChapter[q.chapter].push(q)
        })

        function shuffle(array) {
            const shuffled = [...array]
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
            }
            return shuffled
        }

        const selectedQuestions = []
        Object.entries(distribution).forEach(([chapter, count]) => {
            const chapterNumber = parseInt(chapter)
            const available = questionsByChapter[chapterNumber] || []
            const shuffled = shuffle(available)
            // If we don't have enough questions (e.g. while building EN file), take what we have
            const selected = shuffled.slice(0, count)
            selectedQuestions.push(...selected)
        })

        return shuffle(selectedQuestions)
    }

    // NEW: Action to refresh the CURRENT exam questions when language changes
    // This is tricky: If we just regenerate, we lose the "shuffled order" corresponding to the previous language.
    // Ideally, we should find the SAME questions (by ID) in the new language array and preserve order.
    function swapLanguage() {
        if (status.value !== 'active' && status.value !== 'finished') return

        const newSource = availableQuestions.value
        const currentIds = shuffledQuestions.value.map(q => q.id)

        // Re-map the current shuffled questions to the new language objects
        // This ensures the user stays on "Question 5" which is effectively the same question ID
        const newShuffled = currentIds.map(id => {
            return newSource.find(q => q.id === id)
        }).filter(Boolean) // Remove undefined if sync is bad

        if (newShuffled.length === shuffledQuestions.value.length) {
            shuffledQuestions.value = newShuffled
        }
    }

    function startExam() {
        status.value = 'active'
        currentQuestionIndex.value = 0
        userAnswers.value = {}
        timeLeft.value = 3600
        shuffledQuestions.value = generateWeightedExam()
        startTimer()
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval)
        timerInterval = setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--
            } else {
                finishExam()
            }
        }, 1000)
    }

    function stopTimer() {
        if (timerInterval) clearInterval(timerInterval)
    }

    function submitAnswer(questionId, answer) {
        userAnswers.value[questionId] = answer
    }

    function nextQuestion() {
        if (!isLastQuestion.value) {
            currentQuestionIndex.value++
        }
    }

    function prevQuestion() {
        if (!isFirstQuestion.value) {
            currentQuestionIndex.value--
        }
    }

    function jumpToQuestion(index) {
        if (index >= 0 && index < shuffledQuestions.value.length) {
            currentQuestionIndex.value = index
        }
    }

    function finishExam() {
        stopTimer()
        status.value = 'finished'
    }

    function resetExam() {
        stopTimer()
        status.value = 'welcome'
        currentQuestionIndex.value = 0
        userAnswers.value = {}
        timeLeft.value = 3600
    }

    return {
        status,
        currentQuestionIndex,
        userAnswers,
        timeLeft,
        currentQuestion,
        totalQuestions,
        shuffledQuestions,
        isLastQuestion,
        isFirstQuestion,
        score,
        passed,
        startExam,
        submitAnswer,
        nextQuestion,
        prevQuestion,
        jumpToQuestion,
        finishExam,
        resetExam,
        swapLanguage // Export this so we can watch locale changes
    }
})
