// Vérifie qu'on peut préparer le panier par API puis voir le panier en UI
describe('Checkout smoke', () => {
  it('ajoute 1 article par API puis voit le panier', () => {
    // 1) Login API -> récupère token + bid
    cy.request('POST', 'http://localhost:3000/rest/user/login', {
      email: 'demo',
      password: 'demo'
    }).then(({ body }) => {
      const token = body?.authentication?.token;
      const bid = body?.bid;

      // 2) Ajoute 1 article par API (avec token)
      return cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/BasketItems',
        headers: { Authorization: `Bearer ${token}` },
        body: { ProductId: 1, quantity: 1, BasketId: bid }
      });
    });

    // 3) Ouvre le panier en UI et attend les données
    cy.intercept('GET', '/rest/basket/*').as('getBasket');
    cy.visit('http://localhost:3000/#/basket');
    cy.wait('@getBasket');

    // 4) Ferme les bannières si présentes
    cy.get('body').then($b => {
      if ($b.find('button[aria-label="Close Welcome Banner"]').length) {
        cy.get('button[aria-label="Close Welcome Banner"]').click({ force: true });
      }
    });
    cy.contains('Me want it!').then($btn => {
      if ($btn.length) cy.wrap($btn).click({ force: true });
    });

    // 5) Le panier contient au moins 1 ligne + le bouton Checkout existe
    cy.get('mat-row, .mat-mdc-row, tr[role="row"]', { timeout: 10000 })
      .should($rows => expect($rows.length).to.be.greaterThan(0));
    cy.contains('Checkout').should('exist');
  });
});
