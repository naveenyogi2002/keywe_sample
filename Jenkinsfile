pipeline {
    agent any

    tools {
        // Use the name defined in Jenkins Global Tool Configuration
        sonarqubeScanner 'SonarQubeScanner'
    }

    stages {
        stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    // Execute SonarQube Scanner
                    sh 'sonar-scanner'
                }
            }
        }
    }
}
