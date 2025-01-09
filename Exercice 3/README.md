# 📘 Exercice 3 : Utilisation de Node.js

---

## 🎯 Objectifs

1. **Créer un projet avec Node.js** :
    - Initialisez un nouveau projet avec `npm init`.

2. **Créer des fonctions simples** :
    - Une fonction pour calculer les nombres de Fibonacci.
    - Une fonction pour additionner deux nombres.
    - Une fonction pour diviser deux nombres.

3. **Créer un module réutilisable** :
    - Regroupez la fonction Fibonacci dans un module.
    - Créez un package et déployez-le sur npm (compte npm requis).
    - Testez votre module en local avec `npm link` et importez-le dans un autre projet.

---

## ⚠️ Problème courant : Erreur lors de la publication sur npm

Si vous obtenez l’erreur suivante lors de la publication de votre package :
```bash
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
npm error code E403
npm error 403 Forbidden - PUT https://registry.npmjs.org/nodejs - You do not have permission to publish "nodejs". Are you logged in as the correct user?
npm error 403 In most cases, you or one of your dependencies are requesting
npm error 403 a package version that is forbidden by your security policy, or
npm error 403 on a server you do not have access to.
```

## Solution
Votre package doit avoir un nom unique et inexistant. Modifiez le champ name dans votre fichier package.json. Par exemple :
