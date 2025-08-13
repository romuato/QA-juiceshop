// cypress/e2e/auth-smoke.cy.js
describe('Auth smoke', () => {
  it('se connecte et voit le bouton Logout', () => {
    // 1) Login via API pour obtenir le token
    cy.request('POST', 'http://localhost:3000/rest/user/login', {
      email: 'admin@juice-sh.op',
      password: 'admin123'
    }).then(({ status, body }) => {
      expect(status).to.eq(200);
      const token = body?.authentication?.token;
      expect(token).to.be.a('string');

      // 2) Ouvrir l'app, poser le token, recharger
      cy.visit('http://localhost:3000/');
      cy.window().then(win => {
        win.localStorage.setItem('token', token);
      });
      cy.reload();

      // 3) Fermer bannières si présentes (welcome + cookies)
      cy.get('body').then($b => {
        if ($b.find('button[aria-label="Close Welcome Banner"]').length) {
          cy.get('button[aria-label="Close Welcome Banner"]').click({ force: true });
        }
        if ($b.find('a[aria-label="dismiss cookie message"]').length) {
          cy.get('a[aria-label="dismiss cookie message"]').click({ force: true });
        }
      });

      // 4) Ouvrir le menu compte et vérifier que Logout existe (pas "visible" à cause de l'overlay)
      cy.get('#navbarAccount').click({ force: true });
      cy.get('#navbarLogoutButton', { timeout: 10000 }).should('exist');
    });
  });
});
