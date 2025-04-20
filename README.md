# Démo de pipeline Jenkins

Ce dépôt contient un exemple simple de pipeline Jenkins que j’ai mis en place dans un environnement de test.

### Objectif

Créer une chaîne CI/CD de base avec les étapes suivantes :
- **Checkout** du code
- **Build**
- **Test**
- **Déploiement**

### Jenkinsfile

Le pipeline est défini dans un fichier `Jenkinsfile` en syntaxe déclarative.

### Ce que j’ai appris

- Structurer un pipeline Jenkins en plusieurs étapes
- Déclencher des actions sur chaque commit
- Utiliser des agents génériques

### Prochaines étapes

- Ajouter des tests automatisés réels
- Intégrer Docker
- Faire une version avec Jenkinsfiles multibranches
