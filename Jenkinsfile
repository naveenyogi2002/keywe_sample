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
                scannerHome = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
            }
            steps {
                script {
                    withSonarQubeEnv('SonarQube') { // Use the correct SonarQube server name configured in Jenkins
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=poornishnagappan \
                            -Dsonar.projectName=poornish"
                    }
                }
            }
        }
    }
}
