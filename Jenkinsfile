pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/naveenyogi2002/keywe_sample.git'
            }
        }
        
        stage('Build') {
            steps {
                // Replace with your build command
                echo 'Building...'
                // sh 'your-build-command'
            }
        }
        
        stage('Test') {
            steps {
                // Replace with your test command
                echo 'Running tests...'
                // sh 'your-test-command'
            }
        }
        
        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                script {
                    def qg = waitForQualityGate()
                    if (qg.status != 'OK') {
                        error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    }
                }
            }
        }
    }
}
