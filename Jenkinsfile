pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    environment {
        APP_DIR = 'mini-node-app'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-token-fandy',
                    url: 'https://github.com/fandy261/ci-cd-jenkins-demo.git',
                    branch: 'main'
            }
        }

        stage('Install Dependencies & Test') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                    sh 'docker build -t mini-node-app .'
            }
        }
    }
}
