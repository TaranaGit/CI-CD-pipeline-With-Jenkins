pipeline {
    agent any

    stages {
        stage('package install and build') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
               sh '''
                    npm install
                  
                    npm run build

               '''
            }
        }
    }

    post{
        success{
            echo "Build completed Successfully!"
        }
        failure{
            echo 'Build failed'
        }
    }
}
