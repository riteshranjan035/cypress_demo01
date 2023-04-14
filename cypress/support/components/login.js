
Cypress.Commands.add('getUsername', () => {
    return cy.get(`[name="username"]`)
})

Cypress.Commands.add('getPassword', () => {
    return cy.get(`[name="password"]`)
})

Cypress.Commands.add('getLoginButton', () => {
    return cy.get(`[type="submit"]`)
})

Cypress.Commands.add('getProfileImage', () => {
    return cy.get(`.oxd-userdropdown-tab`)
})

Cypress.Commands.add('getLogout', (index) => {
    return cy.get('[role="menu"]').find('li').eq(index)
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