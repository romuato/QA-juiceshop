# Manual Test Plan – Juice Shop

## Feature: Core user journeys

### Happy path scenarios

#### Scenario 1 – Valid login
*Given* the user is on the **Login** page  
*When* the user submits valid credentials  
*Then* the user is redirected to the dashboard  
*And* a success toast is displayed

#### Scenario 2 – Successful registration
*Given* the user is on the **Register** page  
*When* the user enters a unique email and a strong password  
*Then* the account is created  
*And* the user receives a welcome email

#### Scenario 3 – Add product to cart
*Given* the user is on a product page  
*When* the user clicks **Add to Basket**  
*Then* the cart counter increases by 1

#### Scenario 4 – Edit quantity in cart
*Given* the cart contains 1 item  
*When* the user updates the quantity to 3  
*Then* the subtotal and total are recalculated correctly

#### Scenario 5 – Checkout with saved address
*Given* the user has at least one saved address  
*And* the cart contains at least one item  
*When* the user completes payment  
*Then* an order‑confirmation page is displayed  
*And* a confirmation email is sent

---

### Edge‑case scenarios

#### Scenario 6 – Login with wrong password
*Given* the user is on the **Login** page  
*When* the user enters a valid email and an invalid password  
*Then* an error message *“Invalid credentials”* is shown

#### Scenario 7 – Registration with empty email
*Given* the user is on the **Register** page  
*When* the user submits the form without an email  
*Then* the field **Email** is flagged as mandatory

#### Scenario 8 – Password shorter than 5 chars
*Given* the user is on the **Register** page  
*When* the user types **“123”** as password  
*Then* the message *“Password too short”* appears

#### Scenario 9 – View empty cart
*Given* the user is logged‑in  
*And* the cart is empty  
*When* the user opens the basket  
*Then* the text *“Your basket is empty”* is displayed

#### Scenario 10 – Checkout without address
*Given* the cart contains at least one item  
*And* the user has **no saved address**  
*When* the user tries to pay  
*Then* the message *“Please add an address first”* is displayed


Fonctionnalité: Parcours utilisateur principal – Juice Shop

  # ------------- Happy paths -------------
  Scénario: Connexion valide
    Étant donné que l’utilisateur est sur la page « Connexion »
    Lorsque il saisit un email et un mot de passe valides
    Alors il est redirigé vers le tableau de bord
    Et un toast « Connexion réussie » apparaît

  Scénario: Inscription réussie
    Étant donné que l’utilisateur est sur la page « Inscription »
    Lorsque il saisit un email unique et un mot de passe fort
    Alors son compte est créé
    Et il reçoit un email de bienvenue

  Scénario: Ajout d’un produit au panier
    Étant donné que l’utilisateur consulte la fiche d’un produit
    Lorsque il clique sur « Ajouter au panier »
    Alors le compteur du panier augmente de 1

  Scénario: Modification de quantité dans le panier
    Étant donné qu’il y a déjà un article dans le panier
    Lorsque l’utilisateur change la quantité à 3
    Alors le sous‑total et le total sont recalculés correctement

  Scénario: Passage de commande avec adresse enregistrée
    Étant donné que l’utilisateur a une adresse enregistrée
      Et qu’au moins un article est dans le panier
    Lorsque il finalise le paiement
    Alors une page de confirmation s’affiche
      Et un email de confirmation est envoyé

  # ------------- Edge cases -------------
  Scénario: Connexion – mot de passe erroné
    Étant donné que l’utilisateur est sur la page « Connexion »
    Lorsque il saisit un mot de passe incorrect
    Alors un message d’erreur « Identifiants invalides » s’affiche

  Scénario: Inscription sans email
    Étant donné que l’utilisateur est sur la page « Inscription »
    Lorsque il tente de valider sans renseigner l’email
    Alors le champ « Email » est signalé comme obligatoire

  Scénario: Mot de passe trop court
    Étant donné que l’utilisateur est sur la page « Inscription »
    Lorsque il saisit « 123 » comme mot de passe
    Alors le message « Mot de passe trop court » apparaît

  Scénario: Affichage panier vide
    Étant donné que l’utilisateur est connecté
      Et que son panier est vide
    Lorsque il ouvre le panier
    Alors le texte « Votre panier est vide » est affiché

  Scénario: Tentative de paiement sans adresse
    Étant donné qu’au moins un article est dans le panier
      Et que l’utilisateur n’a pas d’adresse enregistrée
    Lorsque il essaie de payer
    Alors le message « Veuillez ajouter une adresse avant de continuer » apparaît
