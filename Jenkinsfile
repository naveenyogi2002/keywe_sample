pipeline {
    agent any
    
    environment {
        scannerHome = tool 'SonarQube Scanner'  // Ensure this matches the name configured in Jenkins Global Tool Configuration
        SONAR_HOST_URL = 'http://localhost:9000'  // Update with your SonarQube server URL
        SONAR_TOKEN = credentials('sqa_9ec4e218dc4be853326d391e6f30bcc5787acc6e')  // Update with your SonarQube access token credential ID
        PROJECT_KEY = 'poornish'
        PROJECT_NAME = 'poornish'
        GITLAB_TOKEN = credentials('gitlab_token_id')  // Update with your GitLab access token credential ID
        GITLAB_PROJECT_ID = 'your_gitlab_project_id'  // Replace with your GitLab project ID
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
                            -Dsonar.login=${env.SONAR_TOKEN} \
                            -Dsonar.gitlab.project_id=${env.GITLAB_PROJECT_ID}
                        """
                    }
                }
            }
        }
    }
}
