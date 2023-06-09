Cypress.Commands.add('getHeaderDashboardText', () => {
    return cy.get('.oxd-topbar-header-title')
})

Cypress.Commands.add('getProfileIcon', () => {
    return cy.get('.oxd-userdropdown-tab')
})
Cypress.Commands.add('getProfileImage', () => {
    return cy.get(`.oxd-userdropdown-tab`)
})

Cypress.Commands.add('getLogout', (index) => {
    return cy.get('[role="menu"]').find('li').eq(index)
})

Cypress.Commands.add('geProfileMenu', () => {
    return cy.get('.oxd-dropdown-menu')
})
Cypress.Commands.add('getApplicationBranding', () => {
    return cy.get(`.orangehrm-login-branding`)
})

Cypress.Commands.add('getMenuOptionsList', () => {
    return cy.get('ul.oxd-main-menu>li span')
})

Cypress.Commands.add('getToggleButton', () => {
    return cy.get('.oxd-main-menu-search').find('button')
})


Cypress.Commands.add('getDashboardSearch', () => {
    return cy.get('[placeholder="Search"]')
})

