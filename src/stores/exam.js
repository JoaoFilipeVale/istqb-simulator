import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { questions, generateWeightedExam } from '../data/questions'

export const useExamStore = defineStore('exam', () => {
    // --- State ---
    /** @type {import('vue').Ref<'welcome' | 'active' | 'finished'>} */
    const status = ref('welcome')

    /** @type {import('vue').Ref<number>} Current question index (0-based) */
    const currentQuestionIndex = ref(0)

    /** @type {import('vue').Ref<Record<number, string|string[]>>} User answers map { questionId: answer } */
    const userAnswers = ref({})

    /** @type {import('vue').Ref<number>} Time remaining in seconds (starts at 3600s = 60m) */
    const timeLeft = ref(3600)

    /** @type {import('vue').Ref<Array>} Array of questions for the current exam session */
    const shuffledQuestions = ref([])

    let timerInterval = null

    // --- Getters ---
    const currentQuestion = computed(() => shuffledQuestions.value[currentQuestionIndex.value])
    const totalQuestions = computed(() => shuffledQuestions.value.length || questions.length)

    const isLastQuestion = computed(() => currentQuestionIndex.value === shuffledQuestions.value.length - 1)
    const isFirstQuestion = computed(() => currentQuestionIndex.value === 0)

    /**
     * Calculates the total score based on user answers.
     * Handles both single choice and multiple choice questions.
     */
    const score = computed(() => {
        let correctCount = 0
        shuffledQuestions.value.forEach(q => {
            const userAnswer = userAnswers.value[q.id]
            if (!userAnswer) return

            if (Array.isArray(q.correctAnswer)) {
                // Multiple choice: Check if arrays are identical (ignoring order if needed, but usually exact match)
                // Prompt says: "check if the user selected ALL correct options".
                // Assuming exact match of the set of selected options.
                if (Array.isArray(userAnswer) &&
                    userAnswer.length === q.correctAnswer.length &&
                    userAnswer.every(val => q.correctAnswer.includes(val))) {
                    correctCount++
                }
            } else {
                // Single choice
                if (userAnswer === q.correctAnswer) {
                    correctCount++
                }
            }
        })
        return correctCount
    })

    /**
     * Determines if the user passed the exam.
     * Pass criteria: 65% (26 out of 40 questions).
     */
    const passed = computed(() => score.value >= 26)

    // --- Actions ---

    /**
     * Starts a new exam session.
     * Resets state, generates a new weighted set of questions, and starts the timer.
     */
    function startExam() {
        status.value = 'active'
        currentQuestionIndex.value = 0
        userAnswers.value = {}
        timeLeft.value = 3600
        // Use weighted exam generation following ISTQB v4.0 distribution
        shuffledQuestions.value = generateWeightedExam()
        startTimer()
    }

    /**
     * Starts the countdown timer.
     * Automatically finishes the exam when time reaches 0.
     */
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

    /**
     * Records a user's answer for a specific question.
     * @param {number} questionId 
     * @param {string|string[]} answer 
     */
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

    /**
     * Jumps directly to a specific question index.
     * Used for sidebar navigation.
     * @param {number} index 
     */
    function jumpToQuestion(index) {
        if (index >= 0 && index < shuffledQuestions.value.length) {
            currentQuestionIndex.value = index
        }
    }

    /**
     * Finishes the exam session and stops the timer.
     * Transitions state to 'finished' to show results.
     */
    function finishExam() {
        stopTimer()
        status.value = 'finished'
    }

    /**
     * Resets the exam to the welcome screen state.
     */
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
        resetExam
    }
})
