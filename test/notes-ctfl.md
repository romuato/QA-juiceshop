# 📘 Notes complètes — ISTQB CTFL v4.0

---

## 1️⃣ Fondamentaux du test logiciel

- Objectif : livrer un logiciel de qualité, aligné aux besoins réels.
- Vérifie **conformité** (specs) + **validité** (besoins réels).
- 2 approches :
  - **Statique** : analyse docs, code, specs (revue, inspection, walkthrough).
  - **Dynamique** : exécution du logiciel, vérification du comportement réel.

- Test ≠ Débogage :
  - Test : détecte l’erreur.
  - Débogage : trouve la cause, corrige.

- Définitions clés :
  - **Erreur humaine** → produit un **défaut (bug)** → cause une **défaillance** visible.
  - **Cause racine** : pourquoi ça s’est produit.

- Objectifs :
  - Trouver défauts.
  - Réduire risques.
  - Construire confiance.
  - Vérifier exigences, normes.
  - Aider décisions (livrer ou non).
  - Prévenir défauts en prod.

---

## 2️⃣ Principes généraux du test logiciel

1. **Présence, pas absence de défauts**.
2. **Exhaustivité impossible**.
3. **Tester tôt = économies**.
4. **Regroupement défauts (Pareto)**.
5. **Usure des tests : varier pour rester efficaces**.
6. **Dépend du contexte**.
7. **Illusion d’absence de défaut : un soft « sans bug » peut être inutilisable**.

---

## 3️⃣ Processus de test

- Cycle de vie typique :
  1. **Planification**
  2. **Analyse**
  3. **Conception**
  4. **Implémentation**
  5. **Exécution**
  6. **Clôture**

- Activités statiques :
  - Revue de code.
  - Inspection formelle.
  - Vérification de la conformité documentaire.

- Résultat ➜ améliore qualité, détecte tôt, moins cher que corriger tard.

---

## 4️⃣ Types de tests

- **Tests fonctionnels :** comportement attendu (ex. bouton OK → sauvegarde).
- **Non fonctionnels :** perfs, sécurité, charge, compatibilité.
- **Structuraux :** basé sur code.
- **Maintenance (régression) :** vérifier que rien n’est cassé après modif.
- **Exploratoires :** créatifs, trouver l’imprévu.

---

## 5️⃣ Niveaux de test

- **Unitaire** (développeur, petits morceaux de code)
- **Intégration** (interaction modules)
- **Système** (tout l’écosystème)
- **Acceptation** (avec client / PO)

---

## 6️⃣ Techniques de test

### Boîte noire :
- Basé sur exigences externes.
- Techniques : partitions d’équivalence, valeurs limites, tables de décision.

### Boîte blanche :
- Basé sur structure interne (code).
- Technique : couverture des conditions, des branches.

---

## 7️⃣ Gestion des défauts

- Cycle de vie :
  - Détecté.
  - Signalé (ticket clair).
  - Assigné.
  - Corrigé.
  - Vérifié.
  - Clos.
- Ticket ➜ contexte, étapes claires, résultat attendu/obtenu, preuves.

---

## 8️⃣ Outils

- **Jira** ➜ suivi tickets.
- **Git / GitHub** ➜ versionning.
- **Selenium** ➜ automatisation.
- **Postman** ➜ APIs.
- **CI/CD** ➜ GitHub Actions.

---

## 9️⃣ Compétences transverses

- Connaître norme ISO 25010 (fonctionnalité, fiabilité, maintenabilité…).
- Comprendre KPI QA (taux de couverture, densité défauts).
- Capacité à documenter : plan de test, cas de test, scripts.



# 🎓 Notes OpenClassrooms — Formation QA complète

---

## Partie 1 — Appréhender le test logiciel

### Mission du testeur
- Vérifie conformité & utilité.
- Collabore devs / PO / Scrum Master.
- Documente ➜ plan de test, cas de test, rapports.
- Exécute ➜ tests manuels & auto.

### Types de tests
- Fonctionnels / Non fonctionnels.
- Exploratoire / Régression.
- Niveaux ➜ unitaire, intégration, système, acceptation.

### Compétences
- Rigueur, curiosité, communication.
- Savoir prioriser & analyser risques.
- Bon vocabulaire métier.

### Cycle de vie projet
- Phase test ➜ incluse dès analyse specs.

---

📌 Partie 2 — Réaliser des tests fonctionnels & exploratoires
📖 Cahier de recette
Document = liste de scénarios précis, chacun avec résultat attendu.

Sert de référence pour vérifier toutes les fonctionnalités.

Évite d’oublier un cas important.

🧪 Exécution des tests
Tests scriptés : suivre chaque étape exactement (précondition ➜ action ➜ résultat attendu).

Tests exploratoires : naviguer librement, chercher comportements inattendus, bugs cachés.

🔍 Analyser les anomalies
Prioriser ➜ bloquant (bloque la release), majeur (impact fort), mineur (impact léger).

Preuves = captures d’écran, console log, vidéo si nécessaire.

Noter contexte ➜ environnement, version, navigateur, data utilisée.

🗂️ Reporter les anomalies
Rédiger ticket Jira complet :

Résumé clair ➜ [Feature] Bug précis.

Steps ➜ 1 action = 1 ligne.

Résultat attendu vs. résultat réel.

Gravité (Critical / Major / Minor).

Joindre capture / logs.

📌 Partie 3 — Mener une campagne de test
🏃 Dérouler la campagne
Définir périmètre ➜ modules, scénarios.

Exécuter suites de tests.

Suivre progression ➜ % cas passés / échoués.

Replanifier si blocage.

📊 Analyser les données
Mesurer taux de réussite / échec.

Identifier modules à risque ➜ où se concentrent les défauts.

Proposer plan d’action correctif.

✅ Rédiger un bilan
Synthèse ➜ rappel objectifs + résultats clés.

Liste bugs majeurs + recommandations.

Plan réexécution après corrections.

💡 Compléments métier
Rôles ➜ Lead QA (coordonne), QA Manager (pilote stratégie, reporting).

Méthodes dev ➜ Cascade (Waterfall), Cycle en V, Agile (Scrum/Kanban).

Pair testing ➜ tester à deux, mix dev + QA pour détecter plus vite.

Automatisation ➜ identifier scénarios répétitifs ➜ Cypress / Selenium.

Tests API ➜ Postman pour vérifier endpoints, JSON, auth.

CI/CD ➜ GitHub Actions pour lancer tests auto à chaque push.


