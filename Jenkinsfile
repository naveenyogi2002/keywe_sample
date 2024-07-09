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
                    // Adjust the path to sonar-scanner as per your installation
                    def scannerHome = tool name: 'sonar-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv('SonarQube Community Edition v10.5.1') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}
