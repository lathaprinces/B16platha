// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
Cypress.Commands.add('login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.wait(6000) // Wait for 6 second (adjust time as needed)

    cy.get("input[placeholder='Username']").type("Admin")
    //cy.wait(6000) 

    cy.get("input[name='password']").type("admin123")

    //cy.wait(6000) 

    cy.get("Button[type='submit']").click()

    //cy.wait(6000) 

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.contains('Dashboard').should("be.visible")
})
Cypress.Commands.add('loginfailure', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.wait(6000) // Wait for 6 second (adjust time as needed)

    cy.get("input[placeholder='username']").type(username)
    //cy.wait(6000) 

    cy.get("input[name='password']").type(password)

    //cy.wait(6000) 

    cy.get("Button[type='submit']").click()
    cy.contains('Invalid credentials').should("be.visible")
})

    Cypress.Commands.add("entertext", (element, text)=>{

        if(element.includes("//")){
    
           cy.get(element).type(text)
    
           cy.log("The Text type is :"+ text)
        }
        else{
    
            cy.get(element).type(text)
            cy.log("The Text type is :"+ text)
    
        }

  
})
require('cypress-iframe');
import 'cypress-file-upload';