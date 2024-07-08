pipeline {
    agent any
    
    environment {
        scannerHome = tool 'SonarQube Scanner'
        SONAR_HOST_URL = 'http://localhost:9000'  // Update with your SonarQube server URL
        SONAR_TOKEN = credentials('gitlab')  // Update with your SonarQube access token credential ID
        PROJECT_KEY = 'poornish'
        PROJECT_NAME = 'poornish'
    }
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Configure Git tool explicitly
                    def gitTool = tool name: 'Default', type: 'hudson.plugins.git.GitTool'
                    env.PATH = "${gitTool}/bin:${env.PATH}"
                    git 'https://github.com/naveenyogi2002/keywe_sample.git'
                }
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
