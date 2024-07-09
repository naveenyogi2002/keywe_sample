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
                    withSonarQubeEnv('SonarQube Community Edition v10.5.1') { // Use the correct SonarQube server name configured in Jenkins
                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=poornish \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://192.168.101.41:9000 \
                            -Dsonar.token=sqp_11ea779f834709b6cd6af5f636829d752bbc159b
                        """
                    }
                }
            }
        }
    }
}
