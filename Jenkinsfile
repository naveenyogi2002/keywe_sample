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
                    // Install SonarQube scanner
                    sh 'wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-linux.zip'
                    sh 'unzip sonar-scanner-cli-4.6.2.2472-linux.zip'
                    sh 'export SONAR_SCANNER_HOME=$PWD/sonar-scanner-4.6.2.2472-linux'
                    sh 'export PATH=$SONAR_SCANNER_HOME/bin:$PATH'

                    withSonarQubeEnv('SonarQube Community Edition v10.5.1') {
                        // Run SonarQube analysis
                        sh 'sonar-scanner'
                    }
                }
            }
        }
    }
}
