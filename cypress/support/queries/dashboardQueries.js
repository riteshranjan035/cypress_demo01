Cypress.Commands.add('isProfileMenuVisible', () => {
    cy.geProfileMenu().should('be.visible')
})