pipeline {
    agent any
    
    environment {
        scannerHome = tool 'SonarQube Scanner'
        SONAR_HOST_URL = 'http://your-sonarqube-server-url'
        SONAR_TOKEN = credentials('your-sonarqube-token-id')
        PROJECT_KEY = 'your-project-key'
        PROJECT_NAME = 'Your Project Name'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your/repository.git'
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv('SonarQube') {
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=${env.PROJECT_KEY} \
                            -Dsonar.projectName=${env.PROJECT_NAME} \
                            -Dsonar.host.url=${env.SONAR_HOST_URL} \
                            -Dsonar.login=${env.SONAR_TOKEN}
                        """
                    }
                }
            }
        }
    }
}
