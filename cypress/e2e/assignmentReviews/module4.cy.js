describe('Intranet Josh', () => {

    it('Scenario01', () => {
        cy.visit('https://demoqa.com/droppable')
        cy.title().should('eq', 'DEMOQA')
        cy.get('#draggable').drag('#droppable', { force: true })

    })

})