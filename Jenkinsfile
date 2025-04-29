pipeline {
    agent any

    environment {
        NODE_HOME = "/usr/bin/node"
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-token-fandy',
                    url: 'https://github.com/fandy261/ci-cd-jenkins-demo.git',
                    branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
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
    }
}
