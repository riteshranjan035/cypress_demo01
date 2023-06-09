import { UserSearchPage } from "./userSearchPage"

export class AddUserPage {

    constructor() {
        this.userRole = '.orangehrm-card-container .oxd-select-text'
        this.userRoleOption = 'div.oxd-select-option'
        this.userRoleValue = '.oxd-select-text-input'
        this.empName = '.oxd-autocomplete-text-input input'
        this.empNameOption = 'div.oxd-autocomplete-option span'
        this.status = '.oxd-select-wrapper .oxd-select-text-input'
        this.statusValue = 'div.oxd-select-option'
        this.userName = 'input.oxd-input--active'
        this.password = 'input.oxd-input--active'
        this.confirmPassword = 'input.oxd-input--active'
        this.cancelButton = 'button[type="button"].oxd-button--ghost'
        this.submitButton = 'button[type="submit"]'
        this.admin = 'ul.oxd-main-menu li span'
        this.addUserButton = '.orangehrm-header-container button'
        this.addedUserSuccessMsg = '[aria-live="assertive"]'
    }


    clickUserRole() {
        cy.get(this.userRole).eq(0).click({ force: true })
    }
    clickUserRoleListOption(n) {
        cy.get(this.userRoleOption).eq(n).click({ force: true })
    }
    isUserRoleValueVisible() {
        cy.get(this.userRoleValue).eq(0).should('have.text', 'Admin')
    }
    getEmpNameOption() {
        return cy.get(this.empNameOption)
    }
    typeEmpName() {
        cy.get(this.empName).type('John', { force: true })
    }
    clickStatus() {
        cy.get(this.status).eq(1).click({ force: true })
    }
    clickStatusOption(n) {
        cy.get(this.statusValue).eq(n).click({ force: true })
    }
    typeUserName(empName) {
        cy.get(this.userName).eq(1).type(empName)
    }
    typePassword(pw) {
        cy.get(this.password).eq(1).type(pw)
    }
    getConfirmPassword(cnf) {
        cy.get(this.confirmPassword).eq(2).type(cnf)
    }

    clickAddUserCancelButton() {
        cy.get(this.cancelButton).click({ force: true })
    }
    clickAddUserSubmit() {
        cy.get(this.submitButton).click({ force: true })
    }
    clickAdmin() {
        cy.get(this.admin).eq(0).click({ force: true })
    }
    clickAddUserButton() {
        cy.get(this.addUserButton).click({ force: true })
    }
    validateAddedUser() {
        cy.get(this.addedUserSuccessMsg).should('be.visible')
        return new UserSearchPage()
    }
}