import data from '../../fixtures/addjobtitle.json'
describe('verify add job title', () => {

    it('verify addjobtitle with valid input details', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.wait(6000) // Wait for 6 second (adjust time as needed)

        cy.get("input[placeholder='Username']").type("Admin")
        //cy.wait(6000) 

        cy.get("input[name='password']").type("admin123")

        //cy.wait(6000) // Wait for 1 second (adjust time as needed)

        cy.get("Button[type='submit']").click()

        //cy.wait(6000) // Wait for 2 seconds (adjust time as needed)

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains('Dashboard').should("be.visible")
        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(data.jobtitle)
        cy.get("textarea[placeholder='Type description here']").type(data.jobdescription)
        cy.get("button[type='submit']").click()
        cy.contains('Successfully Saved').should("be.visible")
    })
})
