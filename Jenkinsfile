pipeline {
    agent { dockerfile true }
    environment {
	registry = "localhost:5000/jenkinstest"
    }
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/DerrekWoodworth/jenkinstest.git/'

            }
        }
        stage('Test') {
            steps {
                echo "testing"
         }
     }
      stage('Deploy') {
        steps {
          def customImage = docker.build("jenkinstest:${env.BUILD_ID}")
          customImage.push()
        }
      }
    }
}
