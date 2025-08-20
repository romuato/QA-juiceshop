## Démo Loom – XSS + Tests + CI (4 août 2025)

- Vidéo : https://www.loom.com/share/a985042762024f30b1fa76cb7a330336
- CI    : [![E2E](https://github.com/romuato/QA-juiceshop/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/romuato/QA-juiceshop/actions/workflows/ci.yml)
## Exécuter les preuves rapidement

### Postman (Newman)
```bash
npm install -g newman
newman run Preuves/juice-api.postman_collection.json
Cypress (smoke seulement)
bash
Copier
Modifier
npx cypress run --spec "cypress/e2e/*-smoke.cy.js"
sql
Copier
Modifier

**[TERMINAL]**
```powershell
git add README.md
git commit -m "docs: commandes rapides (Newman + Cypress smoke)"
git push

## Lancer Newman en local
```bash
npx newman run "Preuves/juice-api.postman_collection.json" -e Preuves/local.postman_environment.json

