describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {

      cy.wait(5000)

      cy.get('input[type="checkbox"]').check()
      cy.wait(5000)

      cy.get('input[type="checkbox"]').uncheck()

      cy.wait(5000)

      cy.get('input[type="checkbox"]').check(["CSS", "HTML","C#"])

      cy.get("input[type='checkbox']").should("have.length", 8)
      
      //adding comment 
      // cy.get('input[type="checkbox"]').check()

      // cy.wait(5000)
      
      // cy.get('input[type="checkbox"]').uncheck()

      // //cy.get('#tecnologia6').check()
      
      //   cy.get('input[type="checkbox"]').check(["HTML","Javascript"])

      // //  cy.wait(5000)

      // //  cy.get('#check input[type="checkbox"]').uncheck(["HTML","Javascript"])

      // cy.get('input[value="fullstack"]').check().should('be.checked')
        
    })
  })
