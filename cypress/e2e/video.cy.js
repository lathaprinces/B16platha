describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.get('input[@name="upfile"]').attachFile('module2/test4.txt');
      
      cy.wait(3000)
      cy.get('input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })