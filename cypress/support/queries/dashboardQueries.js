Cypress.Commands.add('isProfileMenuVisible', () => {
    cy.geProfileMenu().should('be.visible')
})
Cypress.Commands.add('isDashboardListLength', (length) => {
    cy.getMenuOptionsList().should('have.length', length)
})