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

### Les complications que j'ai rencontré

- Intégrer Docker dans un container jenkins mais en utilisant une image de jenkins et en ajoutant l'installation de docker cli et le démarrer
avec -v /var/run/docker.sock:/var/run/docker.sock parce que cela donnes au container Jenkins accès au Docker du host. 
- Installer les dépendances hors jenkins, j'ai laissé docker installé les dépendances de mon app.
