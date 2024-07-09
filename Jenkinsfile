
pipeline {
    agent any
    
    stages {
        stage('Fetch Code') {
            steps {
                git 'https://github.com/naveenyogi2002/keywe_sample.git'
            }
        }
        stage('Code Analysis') {
            environment {
                scannerHome = tool 'SonarQube Scanner for Jenkins
Version2.17.2'
            }
            steps {
                script {
                    withSonarQubeEnv('Sonar') {
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=poornishnagappan \
                            -Dsonar.projectName=poornish"
                    }
                }
            }
        }
    }
}
