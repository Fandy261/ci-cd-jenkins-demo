pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'node:18'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/fandy261/ci-cd-jenkins-demo.git'
            }
        }

        stage('Install Dependencies & Test') {
            steps {
                dir('mini-node-app') {
                    sh """
                    docker run --rm -v \$PWD:/app -w /app node:18 sh -c 'npm install && npm test'
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('mini-node-app') {
                    sh 'docker build -t mini-node-app .'
                }
            }
        }
    }
}
