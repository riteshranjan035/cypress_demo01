
Cypress.Commands.add('getUsername', () => {
    return cy.get(`[name="username"]`)
})

Cypress.Commands.add('getPassword', () => {
    return cy.get(`[name="password"]`)
})

Cypress.Commands.add('getLoginButton', () => {
    return cy.get(`[type="submit"]`)
})

Cypress.Commands.add('getCompanyBranding', () => {
    return cy.get('[alt="company-branding"]')
})

Cypress.Commands.add('getCompanyLogo', () => {
    return cy.get('.orangehrm-login-logo img')
})

Cypress.Commands.add('getNoPwInputText', () => {
    return cy.get('.oxd-form-row span')
})

Cypress.Commands.add('getInvalidInputText', () => {
    return cy.get('.oxd-alert-content-text')
})

Cypress.Commands.add('getLoginCredentialsInfo', () => {
    return cy.get('.orangehrm-demo-credentials').find('p')
})