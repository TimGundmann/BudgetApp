node {
   stage('Preparation') { 
      git 'https://github.com/TimGundmann/BudgetApp.git'
   }
   stage("version update") {
   }
   stage('Build') {
     sh "npm install"
     wrap([$class: 'Xvfb', displayName: 1]) {
      sh "ps -aux | grep Xvfb"
      sh "export DISPLAY=:1"
      sh "ng test --watch false"
     }
     sh "ng build --prod"
   }
   stage('Results') {
   }
   stage('Docker Deploy') {
      sh "docker-compose stop"
      sh "docker-compose build"
      sh "docker-compose up -d"     
   }
}