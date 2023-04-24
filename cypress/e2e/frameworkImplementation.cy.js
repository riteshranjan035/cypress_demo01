/// <reference types='cypress' />

describe('', () => {


    let user;

    context('', () => {


        let actualDashboardList =
            [

                "Admin",
                "PIM",
                "Leave",
                "Time",
                "Recruitment",
                "My Info",
                "Performance",
                "Dashboard",
                "Directory",
                "Maintenance",
                "Buzz"
            ]

        const profileMenuItemList = [
            "About",
            "Support",
            "Change Password",
            "Logout"
        ]

        before('Loading Fixture', function () {
            cy.fixture('orangehrmLogin').then(data => {
                user = data
            })
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        })

        beforeEach('Login Hook', function () {
            cy.get('.orangehrm-login-slot').should('be.visible')
            const username = user.username
            const password = user.password
            cy.login(username, password)
        })

        afterEach('Logout From Applicatin', function () {
            cy.logout()

        })
        it('Scenario 01: Validating Profile Menu List Item Click Event', () => {
            for (let i = 0; i < 4; i++) {
                cy.getProfileIcon().click()
                cy.wait(200)
                cy.geProfileMenu().find('li>a').eq(i).invoke('text').then(x => {
                    cy.log(x)
                    if (x === 'About') {
                        cy.log('Text Captured ', x)
                        cy.geProfileMenu().find('li>a').eq(i).click()
                        cy.wait(500)
                        cy.get('[role="document"]').find('h6').should('have.text', 'About')
                        cy.wait(500)
                        cy.get('[role="document"]').find('button').click({ force: true })
                    }
                    else if(x === 'Support' ) {
                        cy.log('Text Captured ', x)
                        cy.wait(2000)
                        cy.geProfileMenu().find('li>a').eq(i).click()
                        
                        cy.get('.orangehrm-card-container').should('be.visible')
                        cy.go(-1)
                        cy.getProfileIcon().should('be.visible')
                    }
                    else if(x === 'Change Password') {
                        cy.log('Text Captured ', x)
                        cy.geProfileMenu().find('li>a').eq(i).click()
                        cy.wait(2500)
                        cy.get('.orangehrm-card-container').find('h6').should('have.text', 'Update Password')
                        cy.go(-1)
                        cy.getProfileIcon().should('be.visible')

                    }
                    else if(x === 'Logout') {
                        cy.log('Validated in After Each Block')

                    }


                })


            }
        })

        it('Scenario02: Automating Dashboard List Items', () => {
            cy.getMenuOptionsList().each(($items, index, $list) => {
                expect($list.length).to.eq(11)
                const expDashboardList = $items.text()
                expect(expDashboardList).to.eq(actualDashboardList[index])
            })

        })

        it('Scenario03: Working On Dashboard List Icon Toggle Button', () => {
            //close
            cy.getToggleButton().click()
            cy.IsToggleSidebarVisible()
            //open
            cy.getToggleButton().click()
            cy.IsToggleSidebarNotVisible()
        })

        it('Scenario04: Validating Header', () => {
            cy.getHeaderDashboardText().find('h6').should('be.visible')
            cy.getHeaderDashboardText().invoke('text').should('equal', 'Dashboard')

        })
        it('Scenario05: Validating Profile icon', () => {
            //click Profile Icon & Validate Menu
            cy.getProfileIcon().click()
            cy.wait(200)
            cy.isProfileMenuVisible()
            //Validating Profile Menu List Text
            cy.geProfileMenu().find('li>a').each(($items, $index, $list) => {
                expect($list).to.have.length('4')
                cy.wrap($items).invoke('text').should('eq', profileMenuItemList[$index])

            })
        })
 

        it('Scenario 06: Validating Search functionality on dashboard ',()=>{
                 cy.getDashboardSearch().should('have.value','')
                 cy.isDashboardListLength(11)
                 //Validate using Boundary Value Analysis 
                 cy.getDashboardSearch().type('Leave').should('have.value','Leave')
                 cy.isDashboardListLength(1)
                 cy.getDashboardSearch().clear().should('have.value','')
                 cy.isDashboardListLength(11)
        })

    })
})

