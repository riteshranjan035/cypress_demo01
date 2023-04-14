/// <reference types='Cypress' />
describe('Intranet Josh',()=>{

    it('Scenario01',()=>{
        cy.visit('https://intranet.joshsoftware.com/')
        // cy.get('[role="menuitem"]').invoke('attr','target','_self')
        // cy.wait(2000)
        cy.get('[role="menuitem"]').click({force:true})

        cy.origin('https://accounts.google.com/',()=>{

          cy.get('#identifierId').type('abc@mail.com')  
          
        })
    })
})