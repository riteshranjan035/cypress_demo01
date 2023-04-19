/// <reference types='Cypress' />
describe('Intranet Josh', () => {

    it('Scenario01', () => {
        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')
        cy.title().should('eq', 'Drag and Drop Demo Sites | Testing Site - GlobalSQA')
        //cy.frameLoaded()

        cy.iframe('.demo-frame.lazyloaded').find('ul#gallery>li').eq(0).then(x=>{
            cy.iframe('.demo-frame.lazyloaded').find('div#trash').drag('div#trash')
        })

        cy.iframe('.demo-frame.lazyloaded').find('ul#gallery>li').eq(1).then(x => {
            cy.wrap(x).drag('div#trash')
        })

        cy.iframe('.demo-frame.lazyloaded').find('ul#gallery>li').eq(2).then(x => {
            cy.wrap(x).drag('div#trash')
        })

        cy.iframe('.demo-frame.lazyloaded').find('ul#gallery>li').eq(3).then(x => {
            cy.wrap(x).drag('div#trash')
        })

    })
})
