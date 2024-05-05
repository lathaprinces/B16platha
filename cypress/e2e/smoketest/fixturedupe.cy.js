import data from "../../fixtures/registerdata.json"
describe('Understanding Fixtures',function ()  {

   // before(function () {
       // cy.fixture('registerdata').then(function (data) {
      //    this.data = data;
      //  })
     // })

    it('Validate register flow ', function ()  {
      cy.visit('https://shop.demoqa.com/my-account/')


      //cy.wait(40000)

     // cy.entertext("#reg_username", this.data.username)
      cy.get("#reg_username").type(data.username)
      
      //cy.get("#reg_username").type()

      // cy.get("#reg_email").type(this.data.emailaddress)
      cy.get("#reg_email").type(data.emailaddress)

      //  cy.get("#reg_password").type(this.data.weakpassword)
     // cy.get("#reg_password").realType(data.weakpassword )
     cy.get("#reg_password").focus().realType(data.weakpassword)
    
     
       cy.get('button[name="register"]').should("be.disabled")

    //or
    //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
      // cy.get('.woocommerce-Button',{timeout:80000}).should('have.attr', 'disabled', 'disabled');

    // cy.get("#reg_password").clear()

    // cy.wait(15000)

    //  cy.get("#reg_password", {timeout:40000}).clear().type(this.data.strongpassword)

     //cy.wait(5000)

    // cy.get('button[name="register"]').click()

      // //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
    // cy.get("#username").should('have.attr', 'value', this.data.username)

      // //or

     //cy.get("#username").should("have.value", this.data.username)
      
     //cy.contains(" An account is already registered with your email address. ").should("be.visible")
    })
  
  })