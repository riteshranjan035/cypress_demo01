Cypress.Commands.add('IsCompanyBrandingImgVisible', () => {
    cy.getCompanyBranding().should('be.visible').and('have.length', '1')
})
Cypress.Commands.add('IsCompanyLogoImgVisible', () => {
    cy.getCompanyLogo().should('be.visible').and('have.length', '1')
})
Cypress.Commands.add('IsPlaceholderValueDisplayed', () => {
    cy.getUsername().should('have.attr', 'placeholder', 'Username')
    cy.getPassword().should('have.attr', 'placeholder', 'Password')
})

Cypress.Commands.add('IsNoUserPwValidation', () => {
    cy.getNoPwInputText().should('have.length', '2')
    cy.getNoPwInputText().invoke('text').should('deep.equal', 'RequiredRequired')
})
Cypress.Commands.add('IsInvalidInputTextDisplayed', () => {
    cy.getInvalidInputText().should('have.text', 'Invalid credentials')
})
Cypress.Commands.add('IsLoginCedentialsVisible', () => {
    cy.getLoginCredentialsInfo().should('have.length', '2')
})

