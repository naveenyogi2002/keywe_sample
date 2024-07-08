pipeline {
    agent any
    
    environment {
        scannerHome = tool 'SonarQube Scanner'
        SONAR_HOST_URL = 'http://localhost:9000'
        SONAR_TOKEN = credentials('gitlab')
        PROJECT_KEY = 'poornish'
        PROJECT_NAME = 'poornish'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/naveenyogi2002/keywe_sample.git'
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
                            -Dsonar.token=sqp_c8e9b3f0929a51f1a312e676bf1a08b3debf70f9
                        """
                    }
                }
            }
        }
    }
}
