
 describe('verify the Login Functionality', () => {

 it.only('verify the valid username and valid password', () => {
  cy.loginfailure("Admin", "admin")
  

   
  //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //  cy.wait(6000) // Wait for 6 second (adjust time as needed)

  //  cy.get("input[placeholder='Username']").type("Admin")
    //cy.wait(6000) 
    
  //  cy.get("input[name='password']").type("admin123")

    //cy.wait(6000) // Wait for 1 second (adjust time as needed)
     
   // cy.get("Button[type='submit']").click()
     
    //cy.wait(6000) // Wait for 2 seconds (adjust time as needed)
     
    //cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
     
    //cy.contains('Dashboard').should("be.visible")
  
    //cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
     //cy.contains('Dashboard').should("be.visible")
 })
 it('verify the invalid username and valid password', () => {
   
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(6000) // Wait for 1 second (adjust time as needed)

  cy.get("input[placeholder='Username']").type("ss")
  //cy.wait(6000) 
  
  cy.get("input[name='password']").type("admin123")

  //cy.wait(6000) // Wait for 1 second (adjust time as needed)
   
  cy.get("Button[type='submit']").click()
   
  //cy.wait(6000) // Wait for 2 seconds (adjust time as needed)
  cy.contains('Invalid credentials').should("be.visible")
})
it('verify the valid username and invalid password', () => {
   
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(6000) // Wait for 1 second (adjust time as needed)

  cy.get("input[placeholder='Username']").type("Admin")
  //cy.wait(6000) 
  
  cy.get("input[name='password']").type("adminkk123")

  //cy.wait(6000) // Wait for 1 second (adjust time as needed)
   
  cy.get("Button[type='submit']").click()
   
  //cy.wait(6000) // Wait for 2 seconds (adjust time as needed)
  cy.contains('Invalid credentials').should("be.visible")
})
it('verify the invalid username and invalid password', () => {
   
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.wait(6000) // Wait for 1 second (adjust time as needed)

  cy.get("input[placeholder='Username']").type("Adkkmin")
  //cy.wait(6000) 
  
  cy.get("input[name='password']").type("adminmmjn123")

  //cy.wait(6000) // Wait for 1 second (adjust time as needed)
   
  cy.get("Button[type='submit']").click()
   
  //cy.wait(6000) // Wait for 2 seconds (adjust time as needed)
  cy.contains('Invalid credentials').should("be.visible")
})
})