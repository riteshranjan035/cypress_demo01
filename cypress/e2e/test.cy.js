/// <reference types='cypress'/>
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

let user

describe('', () => {
    
    before("",()=>{
        cy.fixture('example').then(data => {
            user = data
        })
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    beforeEach("",()=>{
        cy.get('.orangehrm-login-slot').should('be.visible')
        const user = this.data.username
        const pw = this.data.password
        cy.login(user, pw)
    })
    it('', () => {
        cy.getMenuOptionsList().each(($items, index, $list) => {
            expect($list.length).to.eq(11)
            const expDashboardList = $items.text()
            expect(expDashboardList).to.eq(actualDashboardList[index])
        })
    });

    it("",()=>{
        cy.log("this is my scond test csae")
    })

    afterEach(()=>{
        cy.logout()
    })
});