Cypress.Commands.add('IsProfileTabVisible',()=>{
    cy.getProfileImage().should('be.visible')
})

Cypress.Commands.add('IsToggleSidebarVisible',()=>{
    cy.get('aside.oxd-sidepanel').should('have.class', 'toggled')
})

Cypress.Commands.add('IsToggleSidebarNotVisible',()=>{
    cy.get('aside.oxd-sidepanel').should('not.have.class', 'toggled')
})

