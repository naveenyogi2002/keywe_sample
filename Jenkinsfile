pipeline {
    agent any
    
    stages {
        stage('Fetch Code') {
            steps {
                git 'https://github.com/naveenyogi2002/keywe_sample.git'
            }
        }
        
        stage('Code Analysis') {
            steps {
                script {
                    def scannerHome = tool name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    
                    withSonarQubeEnv('SonarQube Community Edition v10.5.1') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
    
    post {
        always {
            script {
                // Cleanup tasks if any
            }
        }
        
        success {
            script {
                // Actions to perform on success
            }
        }
        
        failure {
            script {
                // Actions to perform on failure
            }
        }
    }
}
