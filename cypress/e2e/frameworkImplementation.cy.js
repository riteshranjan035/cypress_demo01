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
            cy.fixture('example').then(data => {
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

        it('Scenario01: Automating Dashboard List Items', () => {
            cy.getMenuOptionsList().each(($items, index, $list) => {
                expect($list.length).to.eq(11)
                const expDashboardList = $items.text()
                expect(expDashboardList).to.eq(actualDashboardList[index])
            })

        })

        it('Scenario02: Working On Dashboard List Icon Toggle Button', () => {
            //close
            cy.getToggleButton().click()
            cy.IsToggleSidebarVisible()
            //open
            cy.getToggleButton().click()
            cy.IsToggleSidebarNotVisible()
        })

        it('Scenario03: Validating Header', () => {
            cy.getHeaderDashboardText().find('h6').should('be.visible')
            cy.getHeaderDashboardText().invoke('text').should('equal', 'Dashboard')

        })
        it('Scenario04: Validating Profile icon', () => {
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
        it.only('Scenario 05: Validating Profile Menu List Item Click Event', () => {
            for (let i = 0; i < 4; i++) {
                cy.getProfileIcon().click()
                cy.wait(200)
                cy.geProfileMenu().find('li>a').eq(i).invoke('text').then(x => {
                    //cy.log(x)
                    if (expect(x).to.eql(profileMenuItemList[i])) {
                        cy.geProfileMenu().find('li>a').eq(i).click()
                        cy.wait(500)
                        cy.get('[role="document"]').find('h6').should('have.text', 'About')
                        cy.wait(500)
                        cy.get('[role="document"]').find('button').click({ force: true })
                    }
                    else if (expect(x).to.eql(profileMenuItemList[i])) {
                        cy.geProfileMenu().find('li>a').eq(i).click()
                        cy.get('.orangehrm-card-container').should('be.visible')
                        cy.go(-1)
                        cy.getProfileIcon().should('be.visible')
                    }
                    else if (expect(x).to.eql(profileMenuItemList[i])) {
                        cy.geProfileMenu().find('li>a').eq(i).click()
                        cy.get('.orangehrm-card-container').find('h6').should('have.text', 'Update Password')
                        cy.go(-1)
                        cy.getProfileIcon().should('be.visible')

                    }
                    else if (expect(x).to.eql(profileMenuItemList[i])) {
                        cy.geProfileMenu().find('li>a').eq(i).click()
                        cy.get('.orangehrm-login-slot').should('be.visible')

                    }
                })




            }
        })

    })
})

