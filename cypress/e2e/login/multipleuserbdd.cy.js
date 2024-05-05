const users = [
    { username: 'user1', password: 'sharedPassword' },
    { username: 'user2', password: 'sharedPassword' },
    // Add more users as needed
  ];
  
  describe('Multiple Users Validation', () => {
    users.forEach((user) => {
      it(`Validates login for ${user.username}`, () => {
        // Visit the login page or your application's login route
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        // Type username and password
        cy.get('#username').type(user.username);
        cy.get('#password').type(user.password);
  
        // Click the login button
        cy.get('button[type="submit"]').click();
  
        // Assert that the login was successful or handle login failure
        // You might check for elements on the dashboard, an error message, or other indicators
        cy.get('.dashboard').should('exist'); // Example assertion for a dashboard element
      });
    });
  });