import data from '../fixtures/user_data.json'
import logi from '../pages/login.po'

describe('Automation - Working With Data driven testing json', function () {

  data.forEach((userData) =>{

        
        it('Cypress Test Case - Understanding Data driven testing json', function () {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
           cy.get(logi.usernameInput()).type(userData.username);
            cy.get(logi.passwordInput()).type(userData.password);
            cy.get(logi.loginBtn()).click();
            if (userData.username===username && userData.password===password) {
           // if (cy.contains('Dashboard').should("be.visible")){
                // If the login is expected to be invalid, check for error message visibility
              
                //cy.contains('Dashboard').should("be.visible")
              } else {
                // If the login is expected to be valid, assert the title of the page
                cy.contains(logi.loginerrorMessage()).should('be.visible');
              }

          })



    })
    
  })



  
        // it('Cypress Test Case - Understanding Data driven testing json', function () {
        //     cy.visit('https://the-internet.herokuapp.com/login'); 
        //     cy.get('#username').type(data.username);
        //     cy.get('#password').type(data.password);
        //     cy.get('button[type="submit"]').click();
        //     cy.get('.flash.error').should("be.visible")

        //   })