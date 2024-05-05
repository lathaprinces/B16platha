describe('Automation - Working Mouse events', function () {


    it.only('Cypress Test Case - Understanding Right click, Mouse over, doubleclick', function () {

      
  
      cy.visit('https://www.programsbuzz.com/');

      cy.get('div[class="slide__description"]').rightclick({force: true});

      cy.wait(2000)

      cy.log("check the context menu")

      cy.contains('Tutorials').trigger('mouseover');
      
      cy.log("Hovering on Tutorials")
      
      cy.wait(2000)
      cy.contains('Contact').dblclick({force:true});
    })


    it('Cypress Test Case - Unstand Scrolling', function () {

      
      cy.visit("https://docs.cypress.io/api/commands/rightclick")

      cy.wait(10000)

      cy.get('.footer__copyright').scrollIntoView() 
    })

  })