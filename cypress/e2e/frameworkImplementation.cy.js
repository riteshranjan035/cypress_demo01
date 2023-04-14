/// <reference types='cypress' />

describe('', () => {
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

    before('Loading Fixture', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('example').then(data => {
            this.data = data
        })
    })

    beforeEach('Login Hooks', function () {
        const user = this.data.username
        const pw = this.data.password
        cy.login(user, pw)
    })

    afterEach('Logout From Applicatin', () => {
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
})

