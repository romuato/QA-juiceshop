describe('Connexion échouée avec mauvais mot de passe', () => {
  it('Affiche une erreur quand le mot de passe est incorrect', () => {
    cy.visit('http://localhost:3000/#/login');

    cy.get('#email').type('demo', { force: true });
    cy.get('#password').type('toto', { force: true });
    cy.get('#loginButton').click({ force: true });

    cy.get('.error').should('contain', 'Invalid email or password');
  });
});
