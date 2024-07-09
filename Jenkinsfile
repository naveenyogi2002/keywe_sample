pipeline {
    agent any
    
    stages {
        stage('Example Stage') {
            steps {
                script {
                    echo 'Running some script...'
                    // Add your script commands here
                    sh 'echo Hello World'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline successfully completed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
