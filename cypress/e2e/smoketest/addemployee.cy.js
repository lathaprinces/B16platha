describe('verify add employee Functionality', () => {

  it('verify add employee with valid details', () => {
   
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
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()
        cy.get("input[placeholder='First Name']").type("praveen")
        cy.get("input[placeholder='Middle Name']").type("k")
        cy.get("input[placeholder='Last Name']").type("k")
        cy.get("Button[type='submit']").click()
        cy.contains('Successfully Saved').should("be.visible")
  })
  it('verify mandatory fields in the addemployee', () => {
   
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(6000) // Wait for 6 second (adjust time as needed)

    cy.get("input[placeholder='Username']").type("Admin")
    //cy.wait(6000) 
    
    cy.get("input[name='password']").type("admin123")

    //cy.wait(6000) // Wait for 1 second (adjust time as needed)
     
    cy.get("Button[type='submit']").click()
     
    //cy.wait(6000) // Wait for 2 seconds (adjust time as needed)
     
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
     
    cy.contains('Dashboard').should("be.visible")
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get("Button[type='submit']").click()
    cy.contains('Required').should("be.visible")
    
})
it.only('verify  first name should not  be exceed  maximum characters', () => {
   //cy.viewport(334.665)
   //cy.viewport("ipad-2" , "landscape")
  cy.visit(Cypress.env("loginurl"))
  //cy.wait(8000) // Wait for 6 second (adjust time as needed)

  cy.get("input[placeholder='Username']").type(Cypress.env("username"))
  //cy.wait(6000) 
  
  cy.get("input[name='password']").type(Cypress.env("password"))

  //cy.wait(6000) // Wait for 1 second (adjust time as needed)
   
  cy.get("Button[type='submit']").click()
   
  //cy.wait(6000) // Wait for 2 seconds (adjust time as needed)
   
  cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
  cy.contains('Dashboard').should("be.visible")
  cy.contains('PIM').click()
  cy.contains('Add Employee').click()
  cy.get("input[placeholder='First Name']").type("praveenhghjghjghjghjfhfhfhfgfghfgfgfhfghghnnnnnbnn")
  //cy.wait(6000)
  cy.contains('Should not exceed 30 characters').should("be.visible")
})
})

