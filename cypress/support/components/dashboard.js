Cypress.Commands.add('getHeaderDashboardText', () => {
    return cy.get('.oxd-topbar-header-title')
})

Cypress.Commands.add('getProfileIcon', () => {
    return cy.get('.oxd-userdropdown-tab')
})


Cypress.Commands.add('geProfileMenu', () => {
    return cy.get('.oxd-dropdown-menu')
})


Cypress.Commands.add('getDashboardSearch', () => {
    return  cy.get('[placeholder="Search"]')
})

