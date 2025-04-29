pipeline {
     agent any
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
                dir('mini-node-app') {
                    sh """
                    docker run --rm -v \$PWD:/mini-node-app -w /mini-node-app node:18 sh -c 'npm install && npm test'
                    """
                }
            }
        }

        stage('Test Docker Access') {
    steps {
        sh 'docker version'
          }
    }

        stage('Build Docker Image') {
            steps {
                dir('docker') {
                    sh 'docker build -t mini-node-app .'
                }
            }
        }

        stage('Run Container') {
            steps {
                dir('docker') {
                    sh 'docker run -d -p 3000:3000 --env-file .env mini-node-app'
                }
            }
        }
    }
}

