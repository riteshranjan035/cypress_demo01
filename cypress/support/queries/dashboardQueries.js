Cypress.Commands.add('IsProfileTabVisible', () => {
    cy.getProfileImage().should('be.visible')
})

Cypress.Commands.add('isProfileMenuVisible', () => {
    cy.geProfileMenu().should('be.visible')
})
Cypress.Commands.add('isDashboardListLength', (length) => {
    cy.getMenuOptionsList().should('have.length', length)
})

Cypress.Commands.add('IsToggleSidebarVisible', () => {
    cy.get('aside.oxd-sidepanel').should('have.class', 'toggled')
})
Cypress.Commands.add('IsToggleSidebarNotVisible', () => {
    cy.get('aside.oxd-sidepanel').should('not.have.class', 'toggled')
})