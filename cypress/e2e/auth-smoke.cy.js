// cypress/e2e/auth-smoke.cy.js
describe('Auth smoke', () => {
  it('se connecte et voit le bouton Logout', () => {
    cy.loginAsAdmin();                 // notre commande
    cy.get('#navbarAccount').click();  // ouvre le menu compte
    cy.get('#navbarLogoutButton').should('be.visible'); // connecté = Logout visible
  });
});
