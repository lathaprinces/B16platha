import dashboard from '../../pages/dashboardpage.po'
import data from '../../fixtures/addjobtitle.json'
import jobtitle from '../../pages/jobtitle.po'
describe('verify add job title', () => {

    it('verify addjobtitle with valid input details', () => {



        cy.login()
        cy.contains(dashboard.adminmenu()).click()
        jobtitle.createJobTitle(data.jobtile, data.jobdescription)
    })
})
