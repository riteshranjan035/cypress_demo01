/// <reference types='Cypress' />

describe('Automating Login Functionality', () => {

    // before('Loading Fixture', () => {
    //     cy.fixture('').then(data => {
    //         this.data = data
    //     })

    // })

    beforeEach('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Scenario01: Validating Enablity and Visibility of all Login Elements', () => {
        cy.get('[alt="company-branding"]').should('be.visible').and('have.length', '1')
        cy.get('.orangehrm-login-logo img').should('be.visible').and('have.length', '1')
    })

    it('Scenario02: InValid Username Valid Password', () => {
        cy.typeOnUsername('Admin123')
        cy.typeOnPassword('admin123')
        cy.get('.oxd-alert-content-text').should('be.visible').and('have.text', '')
        cy.clickOnLoginButton()
    })
    it('Scenario03: Valid Username Invalid Password', () => {
        cy.typeOnUsername('Admin')
        cy.typeOnPassword('admin')
        cy.get('.oxd-alert-content-text').should('be.visible').and('have.text', '')
        cy.clickOnLoginButton()
    })
    it('Scenario04: InValid Username Invalid Password', () => {
        cy.typeOnUsername('Admin123')
        cy.typeOnPassword('admin123')
        cy.get('.oxd-alert-content-text').should('be.visible').and('have.text', '')
        cy.clickOnLoginButton()
    })
    it('Scenario05: No Username No Password', () => {
        cy.clickOnLoginButton()
        cy.get('.oxd-form-row span').should('have.length', '2').and('have.text', 'Required')

    })
    it('Scenario06: Validating PlaceHolder Balue for username & Password', () => {
        cy.getUsername().should('have.attr', 'placeholder', 'Username')
        cy.getPassword().should('have.attr', 'placeholder', 'Password')
    })

    it.only('Scenario07: Validating Social Icons', () => {
        const expUrl = [
            "https://www.linkedin.com/company/orangehrm",
            "https://www.facebook.com/OrangeHRM/",
            "https://twitter.com/orangehrm",
            "https://www.youtube.com/c/OrangeHRMInc"
        ]
        for (let i = 0; i < expUrl.length; i++) {

            if (expUrl != 'https://twitter.com/orangehrm"') {

                cy.get('.orangehrm-login-footer-sm').find('a')
                    .eq(i).invoke('removeAttr', 'target')
                    .click({ force: true })
                cy.wait(1000)
                cy.origin(expUrl[i], () => {
                    // cy.url().should('eql',expUrl[i])
                    cy.wait(1000)
                    cy.go(-1)
                })
            }
            else{
                cy.get('.orangehrm-login-footer-sm').find('a')
                    .eq(i).invoke('attr', 'href', expUrl[i])
                    .wait(500)
                    .invoke('removeAttr', 'target')
                    .click({ force: true })
            }




        }




    })
})

