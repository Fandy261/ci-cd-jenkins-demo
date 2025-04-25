pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/fandy261/ci-cd-jenkins-demo.git'
            }
        }

        stage('Build') {
      steps {
        dir('mini-node-app') {
          sh 'npm install'
          sh 'npm test'
        }
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
