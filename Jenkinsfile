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
                withSonarQubeEnv('SonarQube Community Edition v10.5.1') {
                    withEnv(["PATH+SONAR=${scannerHome}/bin"]) {
                        sh 'echo $PATH'  // Debugging step to check PATH
                        sh 'which sonar-scanner'  // Debugging step to locate sonar-scanner
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

