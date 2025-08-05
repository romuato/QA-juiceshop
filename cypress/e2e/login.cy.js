describe('Connexion avec identifiants valides', () => {
  it('Doit se connecter avec succès', () => {
    cy.visit('http://localhost:3000/#/login')

    // champ e-mail
    cy.mark('#email', 'login-email')
    cy.get('[data-test=login-email]').type('demo')

    // champ mot de passe
    cy.mark('#password', 'login-password')
    cy.get('[data-test=login-password]').type('demo')

    // bouton Se connecter
    cy.mark('#loginButton', 'login-btn')
    cy.get('[data-test=login-btn]').click()
  })
})
