pipeline {
    agent any

    environment {
        scannerHome = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }

    stages {
        stage('Fetch Code') {
            steps {
                git 'https://github.com/naveenyogi2002/keywe_sample.git'
            }
        }

        stage('Code Analysis') {
            steps {
                // Set up SonarQube environment and scan the project
                withSonarQubeEnv('SonarQube Community Edition v10.5.1') {
                    withEnv(["PATH+SONAR=${scannerHome}/bin"]) {
                        // Debugging steps to verify sonar-scanner setup
                        sh 'echo $PATH'           // Output current PATH
                        sh 'which sonar-scanner'  // Check if sonar-scanner is available

                        // Running sonar-scanner with required parameters
                        sh '''
                        sonar-scanner \
                        -Dsonar.projectKey=poornishnagappan \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://192.168.101.41:9000
                        '''
                    }
                }
            }
        }
    }
}
