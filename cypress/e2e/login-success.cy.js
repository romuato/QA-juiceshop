describe('Test de connexion Juice Shop', () => {
  it('Devrait se connecter avec les identifiants valides', () => {
    cy.visit('http://localhost:3000/#/login');

    cy.get('#email').type('demo', { force: true });
    cy.get('#password').type('demo', { force: true });
    cy.get('#loginButton').click({ force: true });

    cy.contains('Your Basket').should('be.visible');
  });
});
