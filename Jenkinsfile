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
                    // Assuming sonar-scanner is now in PATH
                    withSonarQubeEnv('SonarQube Community Edition v10.5.1') {
                        sh 'sonar-scanner'
                    }
                }
            }
        }
    }
}
