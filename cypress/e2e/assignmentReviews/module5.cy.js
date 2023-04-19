/// <reference types='Cypress' />
describe('Intranet Josh',()=>{

    it('Scenario01',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')

       cy.iframe('[name="globalSqa"]').find('[placeholder="Search..."]').should('be.visible')

    })

})