/// <reference types="cypress" />

/**
 * checkout.cy.js
 * Scénario : login ➜ ajout panier ➜ checkout (paiement avec la carte existante ****5678)
 * Fonctionne sur toutes les versions récentes de OWASP Juice Shop (Angular Material MDC).
 */

describe('Parcours Checkout – Juice Shop', () => {
  /* ------------------------- Pré‑requis : connexion ------------------------- */
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('http://localhost:3000/#/login');

    cy.get('#email').type('demo', { force: true });
    cy.get('#password').type('demo', { force: true });
    cy.get('#loginButton').click({ force: true });

    // ferme la bannière éventuelle « Me want it! »
    cy.contains('Me want it!').then(($b) => {
      if ($b.length) cy.wrap($b).click({ force: true });
    });
  });

  /* --------------------------- Scénario E2E --------------------------------- */
  it('Ajoute 1 produit et règle avec la carte existante', () => {
    /* 1️⃣ Ajouter un produit au panier */
    cy.visit('http://localhost:3000/#/');
    cy.contains('button', 'Add to Basket').first().click();

    /* 2️⃣ Accéder au panier puis Checkout */
    cy.get('[routerlink="/basket"]').click();
    cy.contains('button', 'Checkout').click({ force: true });  // Snackbar peut masquer

    /* 3️⃣ Étape Address : cocher la 1ʳᵉ adresse et continuer */
    cy.get('mat-radio-button input').first().check({ force: true });
    cy.contains('button', 'Continue').click();

    /* 4️⃣ Étape Delivery : 1ʳᵉ option et continuer */
    cy.get('mat-radio-button input').first().check({ force: true });
    cy.contains('button', 'Continue').click();

    /* 5️⃣ Étape Payment : sélectionner la carte existante (****5678) */
    cy.get('mat-radio-button input').first().check({ force: true });
    cy.contains('button', 'Continue').click();

    /* 6️⃣ Passer la commande */
    cy.contains('button', 'Place your order and pay').click();

    /* 7️⃣ Vérifier le message de succès */
    cy.contains('Thank you for your purchase').should('be.visible');
  });
});
