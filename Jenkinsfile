pipeline {
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
	  docker.withRegistry('localhost:5000') {
            def customImage = docker.build("jenkinstest:${env.BUILD_ID}")
            customImage.push()
	  }
        }
      }
    }
}
