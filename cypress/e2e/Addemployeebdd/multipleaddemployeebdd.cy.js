 import login  from "../../pages/login.po"
 import dashboard from "../../pages/dashboardpage.po"
 import addemployee from "../../pages/addemployeepage.po"
 
 const availablefixtures = [
    {
        "name": "addemployeenaveen",
        "context": "1"
    },
    {
        "name": "addemployeenavshood",
        "context": "2"
    },

    {
        "name": "addemployeeraghav",
        "context": "3"
    },
    {
        "name": "addemployeerajesh",
        "context": "4"
    }

]


describe('Automation Test Suite - create employees', function () {
    //loop through both the fixtues 
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            //Mostly used for Setup Part
            before(function () {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                })
            })

            it('Cypress Test Case - add employee', function () {
                cy.login()
                cy.contains(dashboard.pimmenu()).click()
                cy.contains(addemployee.addEmployeeSubmenu()).click()
                cy.get(addemployee.firstnameInput()).type(this.data.FirstName)
                cy.get(addemployee.lastnameInput()).type(this.data.LastName)
                cy.get(addemployee.saveButton()).click()
                cy.contains(addemployee.successmessage()).should("be.visible")
            })

        })
    })
})