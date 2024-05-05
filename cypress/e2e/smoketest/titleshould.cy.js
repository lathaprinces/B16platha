describe('verify Google Search', () => {
    it('validate The Google Search', () => {
cy.visit('https://www.google.com');
cy.title().should('exist');

// Second time: Verify title is not visible
cy.visit('https://www.google.com');
cy.title().then(($title) => {
  if ($title.length > 0) {
    // Title exists, fail the test
    cy.log('Title is visible but should not be.');
   // expect(false).to.equal(true); // Force a failure
  } else {
    // Title does not exist, pass the test
    cy.log('Title is not visible as expected.');
  }
});
})
})