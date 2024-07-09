pipeline {
    agent any

    tools {
        // Install the Maven version configured as "M3" and add it to the path.
        maven "M3"
        // Install the JDK version configured as "JDK11" and add it to the path.
        jdk "JDK11"
        // Install the SonarQube Scanner and add it to the path.
        sonar "SonarQube Scanner"
    }

    stages {
        stage('Fetch Code') {
            steps {
                // Checkout the code from the Git repository
                git 'https://github.com/naveenyogi2002/keywe_sample.git'
            }
        }

        stage('Code Analysis') {
            steps {
                // Run SonarQube analysis
                withSonarQubeEnv('SonarQube Community Edition v10.5.1') {
                    sh "${tool('SonarQube Scanner')}/bin/sonar-scanner"
                }
            }
        }

        stage('Build') {
            steps {
                // Build the project using Maven
                sh 'mvn clean install'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the built artifact
                echo 'Deploying the application...'
            }
        }
    }
}
