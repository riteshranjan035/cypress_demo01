Cypress.Commands.add('IsProfileTabVisible',()=>{
    cy.getProfileImage().should('be.visible')
})

Cypress.Commands.add('IsToggleSidebarVisible',()=>{
    cy.get('aside').should('not.have.class', 'toggled')
})

Cypress.Commands.add('IsToggleSidebarNotVisible',()=>{
    cy.get('aside').should('not.have.class', 'toggled')
})

