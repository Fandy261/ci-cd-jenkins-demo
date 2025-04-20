pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/fandy261/ton-projet.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Compilation ou construction du projet ici...'
            }
        }

        stage('Test') {
            steps {
                echo 'Lancement des tests ici...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Déploiement de l’application ici...'
            }
        }
    }
}
