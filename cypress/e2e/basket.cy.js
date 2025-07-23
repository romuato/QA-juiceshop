/**
 * basket.cy.js
 * Ajoute deux produits au panier puis vérifie qu’ils y figurent.
 */

describe('Panier : ajout de deux articles et contrôle', () => {

  it('Ajoute 2 produits et vérifie le contenu + Total', () => {

    /* 1️⃣ Connexion utilisateur “demo” */
    cy.visit('http://localhost:3000/#/login');
    cy.get('#email').type('demo', {force: true});
    cy.get('#password').type('demo', {force: true});
    cy.get('#loginButton').click({force: true});

    /* 2️⃣ Fermer le cookie banner “Me want it!” s’il est présent */
    cy.contains('Me want it!').then($b => {
      if ($b.length) cy.wrap($b).click({force: true});
    });

    /* 3️⃣ Page catalogue */
    cy.visit('http://localhost:3000/#/');
    cy.get('[aria-label="Add to Basket"]').should('have.length.greaterThan', 1);

    /* 4️⃣ Ajouter deux produits (1ᵉʳ + 2ᵉ) */
    cy.get('[aria-label="Add to Basket"]').first().click({force: true});
    cy.get('[aria-label="Add to Basket"]').eq(1)
      .scrollIntoView()
      .click({force: true});

    /* 5️⃣ Ouvrir le panier et attendre la réponse REST */
    cy.intercept('GET', '/rest/basket/*').as('getBasket');
    cy.get('[routerlink="/basket"]').click({force: true});
    cy.wait('@getBasket');

    /* 6️⃣ Le panier doit contenir AU MOINS 2 lignes produit */
    cy.get('mat-row', {timeout: 10000})
      .should($rows => {
        expect($rows.length, 'nombre de lignes produit').to.be.at.least(2);
      });

    /* 7️⃣ La ligne “Total” doit être visible */
    cy.contains('Total').should('be.visible');
  });

});
