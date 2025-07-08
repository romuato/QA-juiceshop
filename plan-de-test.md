# Plan de test Juice Shop

## Scénario 1 – Inscription valide

1. Aller sur la page Register
2. Entrer un email valide
3. Entrer un mot de passe fort
4. Cliquer sur Register
5. Vérifier que le compte est créé

## Scénario 2 – Inscription sans email

1. Aller Register
2. Ne rien mettre dans le champ Email
3. Cliquer Register
4. Vérifier qu’un message d’erreur apparaît

## Scénario 3 – Mot de passe trop court

1. Aller Register
2. Entrer email valide
3. Mettre mot de passe « 12 »
4. Cliquer Register
5. Vérifier message erreur « Mot de passe trop court »

---

## ✅ Objectif du test

Vérifier les comportements attendus et non attendus du site Juice Shop pour démontrer la capacité à :
- Écrire des scénarios manuels clairs
- Identifier et documenter les anomalies réelles ou potentielles
- Créer des tickets Bug avec preuves à l’appui

---

## 🐞 Bugs trouvés

- **Bug 1 :** Inscription possible sans email ➜ KO
- **Bug 2 :** Mot de passe trop court accepté ➜ KO
- **Bug 3 :** Login faux ne donne pas de message ➜ KO
- **Bug 4 :** Déconnexion inefficace ➜ KO
- **Bug 5 :** Recherche insensible à la casse ➜ KO

👉 Chaque Bug est consigné dans **Jira** et **lié à une capture d’écran**.

🔗 **Voir mes tickets : [Mon projet Jira](https://TON-LIEN-JIRA)**

---

## ✔️ Conclusion

Ce mini projet montre que je sais :
- Écrire un plan de test
- Exécuter les scénarios manuellement
- Reproduire et documenter des Bugs réels
- Travailler avec Jira et GitHub comme un vrai QA débutant

