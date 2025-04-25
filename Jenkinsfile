pipeline {
    agent any  // Utilise l'agent par défaut de Jenkins

    environment {
        // Définir des variables d'environnement si nécessaire
//        NODE_HOME = "/usr/local/bin/node"  // Remplace selon ta configuration
    }

    stages {
        // Étape de checkout du code depuis le dépôt Git
        stage('Checkout') {
            steps {
                git 'https://github.com/fandy261/ci-cd-jenkins-demo.git'  // Remplace avec l'URL de ton projet GitHub
            }
        }

        // Étape d'installation des dépendances Node.js
        stage('Install Dependencies') {
            steps {
                script {
                    // Installation des dépendances avec npm
                    sh 'npm install'  // S'assure que toutes les dépendances sont installées
                }
            }
        }

        // Étape de tests (si tu en as)
        stage('Test') {
            steps {
                script {
                    // Exécution des tests avec npm
                    sh 'npm test'  // Si tu as un script "test" dans ton package.json
                }
            }
        }

        // Étape de build (si nécessaire)
        stage('Build') {
            steps {
                script {
                    // Construire le projet si nécessaire (par exemple, minification, compilation)
                    sh 'npm run build'  // Remplace avec ton propre script build, si tu en as
                }
            }
        }

        // Étape de déploiement
        stage('Deploy') {
            steps {
                script {
                    // Si tu veux déployer ton projet, configure ici ta logique de déploiement
                    echo 'Déploiement de l’application...'
                    // Exemple d'une commande de déploiement (remplacer par ce que tu utilises)
                    // sh 'npm run deploy'  // Si tu as un script "deploy" dans ton package.json
                }
            }
        }
    }
}

