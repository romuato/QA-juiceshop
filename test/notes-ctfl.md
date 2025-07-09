# 📘 Notes Ultra-Complètes ISTQB CTFL + OpenClassrooms

---

## 1️⃣ Fondamentaux du test logiciel

### Définition
- Tester = Évaluer, vérifier, valider la qualité d’un produit.
- Double objectif :
  - Vérifier (spécifications respectées ?)
  - Valider (besoin utilisateur réel ?)
- Le test **ne prouve pas qu’il n’y a pas de défaut**, mais qu’il y en a (principe 1).

---

## 2️⃣ Objectifs du test

- Trouver des défauts **avant prod**
- Réduire le coût total ➜ corriger tôt = moins cher
- Construire confiance avec le client
- Limiter risques juridiques ➜ contrats / normes
- Décider livrable ou non (Go/NoGo)
- Mesurer couverture ➜ quelles fonctions sont testées ?

**🗂️ Exemples réels** :  
- Vérifier qu’un panier e-commerce calcule bien le total TTC.
- Vérifier qu’un utilisateur ne peut pas accéder au compte d’un autre.

---

## 3️⃣ Vérifier vs Déboguer

| Test | Débogage |
| ---- | ---- |
| Détecte le problème | Trouve et corrige la cause |
| Activité indépendante | Fait souvent par dev |
| Résultat : rapport de bug | Résultat : correctif validé |

---

## 4️⃣ Types de tests

### 📌 Fonctionnels

- Vérifient qu’une fonction fait bien ce qu’elle doit faire.
- Ex. : Cliquer « Commander » ➜ panier vidé, commande créée.

### 📌 Non fonctionnels

- Vérifient les aspects « qualité interne » :
  - Performance (temps de réponse)
  - Charge (supporte 1 000 users ?)
  - Sécurité (pas de faille XSS)
  - Compatibilité (navigateurs, appareils)
  - Accessibilité (WCAG)

### 📌 Exploratoires

- Sans script rigide ➜ le testeur « joue » avec le produit.
- Objectif : trouver des failles qu’un script raterait.
- Exemple terrain : Juice Shop ➜ injection, faille XSS.

### 📌 Régression

- Vérifie qu’un correctif ou une nouvelle version **ne casse pas ce qui marchait avant**.
- Automatisé souvent (CI/CD).

---

## 5️⃣ Niveaux de tests

- **Unitaire** : 1 fonction / composant ➜ par dev.
- **Intégration** : plusieurs modules ensemble.
- **Système** : appli entière, environnement complet.
- **Acceptation** : validé par client / PO.

---

## 6️⃣ Les 7 Principes ISTQB

1. Le test montre la **présence**, pas l’absence de défauts.
2. Test exhaustif impossible ➜ prioriser.
3. Tester tôt ➜ bug = moins cher.
4. Défauts regroupés (Pareto 80/20).
5. Usure des tests ➜ varier ➜ Paradoxe du pesticide.
6. Test dépend du contexte ➜ banque ≠ blog ≠ jeu.
7. Illusion absence défauts ➜ pas toujours utilisable si mal conçu.

---

## 7️⃣ Cycle de vie d’un bug

1️⃣ Nouveau ➜ 2️⃣ Assigné ➜ 3️⃣ Corrigé ➜ 4️⃣ Vérifié ➜ 5️⃣ Clos  
**Contenu bug Jira :**
- Contexte (environnement, version)
- Étapes précises pour reproduire
- Résultat attendu vs observé
- Preuve ➜ screenshot, logs
- Sévérité : Blocker, Critical, Major, Minor

---

## 8️⃣ Cas de test – Bonnes pratiques

- Titre + ID unique ➜ `TC-001`
- Objectif clair
- Préconditions
- Étapes numérotées
- Données d’entrée précises
- Résultat attendu

**Livrable pro ➜ Excel, TestRail, Xray (Jira).**

---

## 9️⃣ Qualité logicielle – ISO 25010

- Fonctionnalité
- Fiabilité
- Performance
- Sécurité
- Compatibilité
- Maintenabilité
- Portabilité
- Utilisabilité

---

## 1️⃣0️⃣ Compétences du testeur

- Rigueur
- Curiosité
- Communication claire
- Esprit critique
- Outils : Jira, GitHub, Selenium, Postman
- Basique SQL ➜ vérifier BDD
- Git ➜ versionner scripts/tests

---

## 1️⃣1️⃣ Méthodes dev

- Séquentielle ➜ Cascade, Cycle en V
- Itérative ➜ Agile (Scrum)
- QA doit s’adapter ➜ Agile = sprints ➜ automatiser les vérifications récurrentes.

---

## 1️⃣2️⃣ Outils du testeur

| Outil | Usage |
| ----- | ----- |
| Jira | Tickets, backlog, bugs |
| Selenium | Automatiser tests E2E |
| Cypress | Alternatif moderne Selenium |
| Postman | Tester APIs |
| GitHub Actions | CI/CD automatisé |
| Anki | Révision flashcards |

---

## 🏷️ Rôles

- **Lead QA** : coordonne l’équipe QA.
- **Test Manager** : planifie, budget, jalons.
- **QA Analyst** : écrit cas, exécute tests manuels.
- **QA Engineer / SDET** : automatise scripts (Selenium, Cypress).

---

## 🎯 📌 Points Bonus

- Un bon testeur documente tout ➜ plan, cas, bugs, rapports.
- Screenshots, vidéos Loom ➜ preuves concrètes.
- CI/CD ➜ chaque push ➜ tests automatiques ➜ badge ✅ sur GitHub.

---

## 🌐 Liens utiles

- [ISTQB Officiel](https://www.istqb.org/)
- [OpenClassrooms – Initiez-vous au test](https://openclassrooms.com/fr/courses/7172056-initiez-vous-au-test-et-a-la-qualite-logicielle)
- [Juice Shop](https://github.com/juice-shop/juice-shop)
- [Cypress.io](https://www.cypress.io/)
- [Selenium.dev](https://www.selenium.dev/)

---

## ✅ Pousse vers Git

