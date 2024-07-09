pipeline {
    agent any

    stages {
        stage('Fetch Code') {
            steps {
                // Your existing Git checkout stage
                git 'https://github.com/naveenyogi2002/keywe_sample.git'
            }
        }
        stage('Code Analysis') {
            steps {
                script {
                    // Download SonarQube Scanner CLI using curl
                    sh '''
                    curl -OL https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-linux.zip
                    unzip sonar-scanner-cli-4.6.2.2472-linux.zip
                    export PATH="$PATH:/path/to/sonar-scanner-cli-4.6.2.2472-linux/bin"
                    '''
                    // Replace /path/to/sonar-scanner-cli-4.6.2.2472-linux/bin with the actual path where you extracted SonarQube Scanner CLI
                }
            }
        }
    }
}
