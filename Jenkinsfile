node {
  git 'https://github.com/DerrekWoodworth/jenkinstest.git/'
  docker.withRegistry('http://localhost:5000') {
    def customImage = docker.build("jenkinstest:${env.BUILD_ID}")
    customImage.push()
  }
}
