
Cypress.Commands.add('typeOnUsername',(userName)=>{
    cy.getUsername().clear().type(userName)
})

Cypress.Commands.add('typeOnPassword',(password)=>{
    cy.getPassword().clear().type(password) 
})

Cypress.Commands.add('clickOnLoginButton',()=>{
    cy.getLoginButton().click()
})

Cypress.Commands.add('clickOnLogoutButton',()=>{
    cy.getLogout().click()
})

