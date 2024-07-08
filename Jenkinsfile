pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your Git repository
                git 'https://github.com/naveenyogi2002/keywe_sample.git'
            }
        }
        stage('Build') {
            steps {
                // Example build step (replace with your actual build command)
                sh 'echo "Building the project"'
            }
        }
        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQube Scanner'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
