// cypress/e2e/home-smoke.cy.js
describe('Home smoke', () => {
  it('affiche la page d’accueil', () => {
    cy.visit('http://localhost:3000/');
    // fermer bannières si présentes, sans bloquer si absentes
    cy.get('body').then($b => {
      if ($b.find('button[aria-label="Close Welcome Banner"]').length) {
        cy.get('button[aria-label="Close Welcome Banner"]').click({ force: true });
      }
      if ($b.find('a[aria-label="dismiss cookie message"]').length) {
        cy.get('a[aria-label="dismiss cookie message"]').click({ force: true });
      }
    });
    // preuve visuelle simple
    cy.contains('OWASP Juice Shop').should('exist');
  });
});
