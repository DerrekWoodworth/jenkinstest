pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/DerrekWoodworth/jenkinstest.git/'
                echo "building"
		sh 'ls'

            }
        }
        stage('Test') {
            steps {
                echo "testing"
         }
     }
     stage('Deploy') {
            steps {
                echo "deploying"
         }
        }
    }
}
