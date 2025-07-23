describe('Connexion avec identifiants valides', () => {
  it('Doit se connecter avec succès', () => {
    cy.visit('http://localhost:3000/#/login');

    cy.get('#email').type('demo', { force: true });
    cy.get('#password').type('demo', { force: true });
    cy.get('#loginButton').click({ force: true });
  });
});
