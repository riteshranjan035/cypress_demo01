/// <reference types='Cypress' />

describe('Automating Login Functionality', () => {
    let user;

    before('Loading Fixture', function () {
        cy.fixture('orangeHrmLoginForm').then(function (data) {
            user = data
        })

    })

    beforeEach('Loading Base URL', () => {
        cy.visit(Cypress.env('url'))
    })

    it('Scenario01: Validating Enablity and Visibility of all Login Elements', () => {
        cy.IsCompanyBrandingImgVisible()
        cy.IsCompanyLogoImgVisible()
        cy.IsLoginCedentialsVisible()
    })

    it('Scenario02: InValid Username Valid Password', function () {
        cy.typeOnUsername(user[0]['InvalidUsername'])
        cy.typeOnPassword(user[0]['ValidPassword'])
        cy.clickOnLoginButton()
        cy.IsInvalidInputTextDisplayed()
    })
    it('Scenario03: Valid Username Invalid Password', function () {
        cy.typeOnUsername(user[1]['ValidUsername'])
        cy.typeOnPassword(user[1]['InvalidPassword'])
        cy.clickOnLoginButton()
        cy.IsInvalidInputTextDisplayed()
    })
    it('Scenario04: InValid Username Invalid Password', function () {
        cy.typeOnUsername(user[2]['InvalidUsername'])
        cy.typeOnPassword(user[2]['InvalidPassword'])
        cy.clickOnLoginButton()
        cy.IsInvalidInputTextDisplayed()
    })
    it('Scenario05: No Username No Password', function () {
        cy.clickOnLoginButton()
        cy.IsNoUserPwValidation()

    })
    it('Scenario06: Validating PlaceHolder Value for username & Password', () => {
        cy.IsPlaceholderValueDisplayed()
    })

    it('Scenario07: Validating Forget Password', () => {
        cy.contains('Forgot your password? ').click()
        cy.forgetPwValidationsVisible()
    })

    it.skip('Scenario08: Validate Footer Orange Hrm Link', () => {
        //Not Loading After Click
        cy.get('.orangehrm-copyright-wrapper').find('a').invoke('removeAttr', 'target').click({ force: true }).click({ force: true })
        cy.origin('https://www.orangehrm.com/', () => {

            cy.get('.web-menu-btn').should('have.length', '2')
        })


    })
    it.only('Scenario09: Validating Social Icons', function() {
        const expUrl = [
            "https://www.linkedin.com/company/orangehrm",
            "https://www.facebook.com/OrangeHRM/",
            "https://twitter.com/orangehrm",
            "https://www.youtube.com/c/OrangeHRMInc"
        ]

        
        for (let i = 0; i < expUrl.length; i++) {

            if (expUrl[i] != 'https://twitter.com/orangehrm"') {

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
            else {
                cy.get('.orangehrm-login-footer-sm').find('a')
                    .eq(i).invoke('attr', 'href', expUrl[i])
                    .wait(500)
                    .invoke('removeAttr', 'target')
                    .click({ force: true })
            }




        }




    })
})

