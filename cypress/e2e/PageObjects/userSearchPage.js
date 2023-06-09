import { AddUserPage } from "./addUserPage"

export class UserSearchPage extends AddUserPage{

    constructor(){
       // var adup=super()
        this.userRoleDashboard = '.oxd-select-text'
        this.searchUserWrapper = '.oxd-table-filter'
    }

    isSearchUserWrappervisible() {
        cy.get(this.searchUserWrapper).should('be.visible')
    }

    clickUserRoleDashboard(n) {
        cy.get(this.userRoleDashboard).eq(n).click({ force: true })
    }


}