// cypress/support/commands.js
// ===========================================================
// Helpers personnalisés pour les tests Juice Shop
// ===========================================================

/**
 * Dépose un attribut data-test sur le premier élément correspondant
 * puis renvoie l’élément (chaînable).
 *
 * @example
 *   cy.mark('#loginButton', 'login-btn').click()
 *
 * @param {string} selector - Sélecteur CSS existant (ID, classe, etc.)
 * @param {string} dataAttr - Valeur à affecter à l'attribut data-test
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
 */
Cypress.Commands.add('mark', (selector, dataAttr) => {
  return cy.get(selector).first().invoke('attr', 'data-test', dataAttr)
})

/**
 * Se connecte à Juice Shop via l’interface Login.
 *
 * @param {string} email - Adresse e-mail de l’utilisateur
 * @param {string} pass  - Mot de passe
 *
 * @example
 *   cy.login('demo', 'demo')
 */
Cypress.Commands.add('login', (email, pass) => {
  cy.visit('/#/login')
  cy.mark('#email', 'login-email').type(email)
  cy.mark('#password', 'login-password').type(pass)
  cy.mark('#loginButton', 'login-btn').click()
})

/* ==========================================================
   Tu peux ajouter d’autres helpers ici, toujours documentés
   avec JSDoc pour profiter de l’auto-complétion VS Code.
   ========================================================== */
