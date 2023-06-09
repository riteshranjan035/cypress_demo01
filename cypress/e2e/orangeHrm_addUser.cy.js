import { AddUserPage } from "./PageObjects/addUserPage";

describe('Automation Admin Page of Orangehrm', function () {
    let user;
    let addUserDetails;
    let searchUser;

    const addUserForm = new AddUserPage()

    before('', function () {
        cy.fixture('addUser').then(function (data) {
            addUserDetails = data
        })
        cy.fixture('orangehrmLogin').then(data => {
            user = data
        })
        cy.visit(Cypress.env('url'))
    })

    beforeEach('', function () {
        cy.get('.orangehrm-login-slot').should('be.visible')
        const username = user.username
        const password = user.password
        cy.login(username, password)
    })

    it('Scenario 01: Create User With Admin Role', function () {
        addUserForm.clickAdmin()
        addUserForm.clickAddUserButton()
        addUserForm.clickUserRole()
        addUserForm.clickUserRoleListOption(1)
        cy.wait(500)
        addUserForm.isUserRoleValueVisible()
        addUserForm.typeEmpName()
        cy.wait(2000)
        addUserForm.getEmpNameOption().each(($emp, index, $list) => {
            cy.wrap($emp).invoke('text').then(employeeName => {
                if (employeeName === addUserDetails['employeeName']) {
                    cy.wrap($emp).click({ force: true })
                }
            })
        })
        addUserForm.clickStatus()
        addUserForm.clickStatusOption(1)
        addUserForm.typeUserName(addUserDetails['userName'])
        addUserForm.typePassword(addUserDetails['password'])
        addUserForm.getConfirmPassword(addUserDetails['confirmPassword'])
        addUserForm.clickAddUserSubmit()
        cy.wait(200)
        searchUser = addUserForm.validateAddedUser()
        //Scenario02: Search For Created User
        searchUser.isSearchUserWrappervisible()
        searchUser.clickStatus()


    })

})



