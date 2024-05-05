import addemployee from "../../pages/addemployeepage.po"
import dashboard from "../../pages/dashboardpage.po"
describe('verify add employee Functionality', () => {
    beforeEach("before Each", () => {

        cy.login()
        cy.contains(dashboard.pimmenu()).click()
        cy.contains(addemployee.addEmployeeSubmenu()).click()
    })
    it('verify add employee with valid details', () => {


        cy.get(addemployee.firstnameInput()).type("praveen")
        cy.get(addemployee.lastnameInput()).type("k")
        cy.get(addemployee.saveButton()).click()
        cy.contains(addemployee.successmessage()).should("be.visible")
    })
    it('verify mandatory fields in the addemployee', () => {


        cy.get(addemployee.saveButton()).click()
        cy.contains(addemployee.firstnameErrorMessage()).should("be.visible")
    })
    it('verify  first name should not  be exceed  maximum characters', () => {


        cy.get(addemployee.firstnameInput()).type("praveenhghjghjghjghjfhfhfhfgfghfgfgfhfghghnnnnnbnn")
        //cy.wait(6000)
        cy.contains(addemployee.exccesdlimiterrorMessage()).should("be.visible")
    })
})