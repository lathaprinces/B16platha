describe('verify Google Search', () => {
  it('validate The Google Search', () => {
  //cy.visit('https://example.com');
  cy.visit('https://www.flipkart.com');
  cy.get('._1XjE3T').each(($element) => {
    cy.wrap($element).invoke('text').then((text) => {
      cy.log(text);
    });
    // Extract the text of each element and log it
    //cy.wrap($element).invoke('text').then((text) => {
    //  cy.log(text);
    //});
  });

// Get text from an element using its CSS selector
//cy.get('div').invoke('text').then((text) => {
// Do something with the retrieved text
 //console.log(text)
})
  //it('validate The Google Search', () => {
    //cy.visit('https://www.google.com/')
    //cy.title().should('eq', 'Google')
    //cy.get('#APjFqb').type("facebook{enter}")
    //cy.wait(5000)
    //cy.reload()
    //cy.go(-1)
    //cy.wait(4000)
    // cy.go(+1)
    //https://github.com/Thimmaraju/learncypressb16
    //https://github.com/Thimmaraju/LearnJSB16
  })
 //})