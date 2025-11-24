describe('ISTQB Exam Simulator - Full Coverage', () => {
    beforeEach(() => {
        cy.viewport(1280, 720) // Ensure Desktop by default
        cy.visit('/')
    })

    it('Happy Path: Start, Answer Randomly, Finish Manually', () => {
        // 1. Start Exam
        cy.get('[data-testid="start-exam-btn"]').should('be.visible').click()

        // 2. Verify Exam Interface Loaded
        cy.get('[data-testid="exam-timer"]').should('be.visible')
        cy.get('[data-testid="question-text"]').should('be.visible')

        // 3. Answer a few questions
        for (let i = 0; i < 3; i++) {
            cy.get('[data-testid="answer-option"]').first().click()
            cy.get('[data-testid="nav-next"]').click()
        }

        // 4. Finish Exam Manually
        cy.get('[data-testid="finish-exam-btn"]').click()

        // 5. Confirm in Modal
        cy.contains('Terminar e Submeter').click()

        // 6. Verify Results Page
        cy.get('[data-testid="result-status"]').should('be.visible')
        cy.get('[data-testid="score-summary"]').should('be.visible')
        cy.get('[data-testid="chapter-analysis"]').should('be.visible')
    })

    it('Score Logic: Verify Results Structure', () => {
        cy.get('[data-testid="start-exam-btn"]').click()

        // Finish immediately (0 score)
        cy.get('[data-testid="finish-exam-btn"]').click()
        cy.contains('Terminar e Submeter').click()

        // Verify Failed Status
        cy.get('[data-testid="result-status"]').should('contain', 'REPROVADO')

        // Verify Chapter Analysis Grid exists
        cy.get('[data-testid="chapter-analysis"]').within(() => {
            cy.contains('Capítulo 1').should('be.visible')
            cy.contains('Capítulo 6').should('be.visible')
        })

        // Verify Restart Button works
        cy.get('[data-testid="restart-btn"]').click()
        cy.get('[data-testid="start-exam-btn"]').should('be.visible')
    })

    it('Responsive/Mobile Behavior', () => {
        cy.viewport('iphone-x')
        cy.visit('/') // Reload to apply viewport

        cy.get('[data-testid="start-exam-btn"]').click()

        // Verify Desktop Sidebar is hidden
        cy.get('[data-testid="question-nav-grid"]').should('not.be.visible')

        // Open Mobile Sidebar
        cy.get('[data-testid="sidebar-toggle"]').click()

        // Verify Mobile Sidebar is visible
        cy.get('[data-testid="question-nav-grid-mobile"]').should('be.visible')

        // Navigate via Mobile Sidebar
        cy.get('[data-testid="question-nav-grid-mobile"] button').last().click()

        // Verify Sidebar closed
        cy.get('[data-testid="question-nav-grid-mobile"]').should('not.exist')

        // Verify we are on the last question
        cy.get('[data-testid="finish-exam-btn"]').should('be.visible')
    })

    it('Navigation Integrity: Sidebar & Buttons', () => {
        cy.get('[data-testid="start-exam-btn"]').click()

        // Check initial state (Q1)
        cy.contains('Questão 1 de 40').should('be.visible')
        cy.get('[data-testid="nav-prev"]').should('be.disabled')

        // Next Button
        cy.get('[data-testid="nav-next"]').click()
        cy.contains('Questão 2 de 40').should('be.visible')
        cy.get('[data-testid="nav-prev"]').should('not.be.disabled')

        // Previous Button
        cy.get('[data-testid="nav-prev"]').click()
        cy.contains('Questão 1 de 40').should('be.visible')

        // Sidebar Jump (Random access)
        cy.get('[data-testid="question-nav-grid"] button').eq(19).click()
        cy.contains('Questão 20 de 40').should('be.visible')
    })
})
