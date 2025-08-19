// Checkout smoke – API + UI, rattache l'article au panier (BasketId = bid)
describe('Checkout smoke (API + UI)', () => {
  it('prépare le panier par API puis le voit en UI', () => {
    // 1) Login API (user demo) -> récupère token + bid
    cy.request('POST', 'http://localhost:3000/rest/user/login', {
      email: 'demo',
      password: 'demo'
    })
      .its('body')
      .then(({ authentication, bid }) => {
        const token = authentication?.token;
        const headers = { Authorization: `Bearer ${token}` };

        // 2) Ajoute 1 article par API avec BasketId = bid (clé !)
        return cy
          .request({
            method: 'POST',
            url: 'http://localhost:3000/api/BasketItems',
            headers,
            body: { ProductId: 1, BasketId: bid, quantity: 1 }
          })
          .then(() => ({ token, bid }));
      })
      .then(({ token, bid }) => {
        // 3) Injecte le token dans le localStorage AVANT d'ouvrir l'UI
        cy.intercept('GET', `/rest/basket/${bid}`).as('getBasket');
        cy.visit('http://localhost:3000/#/', {
          onBeforeLoad(win) {
            win.localStorage.setItem('token', token);
            // on évite les popups
            win.localStorage.setItem('cookieconsent_status', 'dismiss');
            win.localStorage.setItem('welcomebanner_status', 'dismiss');
          }
        });

        // 4) Ouvre le panier et attend les données serveur
        cy.visit('http://localhost:3000/#/basket');
        cy.wait('@getBasket', { timeout: 20000 });

        // 5) Ferme les bannières résiduelles si présentes
        cy.get('body').then($b => {
          if ($b.find('button[aria-label="Close Welcome Banner"]').length) {
            cy.get('button[aria-label="Close Welcome Banner"]').click({ force: true });
          }
          if ($b.find('button:contains("Me want it!")').length) {
            cy.contains('Me want it!').click({ force: true });
          }
        });

        // 6) Vérifs : au moins une ligne produit + bouton Checkout
        cy.get('mat-row, .mat-mdc-row, tr[role="row"]', { timeout: 15000 })
          .should($rows => expect($rows.length, 'lignes produit').to.be.greaterThan(0));
        cy.contains('Checkout').should('exist');
      });
  });
});
