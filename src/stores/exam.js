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
    const isTimed = ref(true)
    const shuffledQuestions = ref([])
    const notepadContent = ref('') // Global notepad content for session
    const questionComments = ref({}) // Map of questionId -> comment string
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
    /**
     * Gera um exame oficial seguindo a matriz exata do Syllabus v4.0.
     * Distribuição Obrigatória:
     * - Cap 1: 8 questões
     * - Cap 2: 6 questões
     * - Cap 3: 4 questões
     * - Cap 4: 11 questões
     * - Cap 5: 9 questões
     * - Cap 6: 2 questões
     * Total: 40 questões
     */
    function generateOfficialExam() {
        const sourceFn = availableQuestions.value
        // Use default empty array if source is undefined (e.g. during hot reload or init issues)
        const source = sourceFn || []

        const officialDistribution = {
            1: 8,
            2: 6,
            3: 4,
            4: 11,
            5: 9,
            6: 2
        }

        // Agrupar questões por capítulo
        const questionsByChapter = {}
        source.forEach(q => {
            if (!questionsByChapter[q.chapter]) {
                questionsByChapter[q.chapter] = []
            }
            questionsByChapter[q.chapter].push(q)
        })

        // Fisher-Yates Shuffle
        function shuffle(array) {
            const shuffled = [...array]
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
            }
            return shuffled
        }

        const selectedQuestions = []
        let logDistribution = {}

        Object.entries(officialDistribution).forEach(([chapter, count]) => {
            const chapterNumber = parseInt(chapter)
            const available = questionsByChapter[chapterNumber] || []

            // Randomizar as questões disponíveis do capítulo
            const shuffled = shuffle(available)

            // Selecionar a quantidade exata
            const selected = shuffled.slice(0, count)

            // Aviso se não houver questões suficientes (para debug)
            if (selected.length < count) {
                console.warn(`Aviso: Capítulo ${chapter} só tem ${selected.length} questões disponíveis (necessárias: ${count})`)
            }

            selectedQuestions.push(...selected)
            logDistribution[chapter] = selected.length
        })



        // Baralhar o exame final para a ordem das questões não ser sequencial por capítulo
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

    function startExam(timed = true) {
        status.value = 'active'
        currentQuestionIndex.value = 0
        userAnswers.value = {}
        timeLeft.value = 3600
        isTimed.value = timed
        shuffledQuestions.value = generateOfficialExam()

        if (timed) {
            startTimer()
        } else {
            stopTimer()
        }
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

    const markedQuestions = ref({})

    function toggleMarkQuestion(questionId) {
        if (markedQuestions.value[questionId]) {
            delete markedQuestions.value[questionId]
        } else {
            markedQuestions.value[questionId] = true
        }
    }

    function setNotepadContent(content) {
        notepadContent.value = content
    }

    function setQuestionComment(questionId, comment) {
        questionComments.value[questionId] = comment
    }

    function resetExam() {
        stopTimer()
        status.value = 'welcome'
        currentQuestionIndex.value = 0
        userAnswers.value = {}
        markedQuestions.value = {}
        notepadContent.value = ''
        questionComments.value = {}
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
        swapLanguage, // Export this so we can watch locale changes
        isTimed,
        markedQuestions,
        toggleMarkQuestion,
        notepadContent,
        questionComments,
        setNotepadContent,
        setQuestionComment
    }
})
