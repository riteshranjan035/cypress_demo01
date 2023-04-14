/// <reference types='cypress' />
require('@cypress/xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('login', (username, password) => {
  cy.typeOnUsername(username)
  cy.typeOnPassword(password)
  cy.clickOnLoginButton()
  cy.IsProfileTabVisible()
})

Cypress.Commands.add('logout', () => {
  cy.get('.oxd-userdropdown').find('i').click({ force: true })
  cy.wait(2000)
  cy.get('ul[role="menu"] li').eq(3).click()
})
