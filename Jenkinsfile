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
                dir('mini-node-app') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('mini-node-app') {
                    sh 'npm test'
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

        stage('Run Container') {
            steps {
                dir('mini-node-app') {
                    sh 'docker run -d -p 3000:3000 --env-file .env mini-node-app'
                }
            }
        }
    }
}

