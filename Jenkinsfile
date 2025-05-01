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
            steps {
                    sh '''
                    npm install -g serve
                    serve -s dist -l 5000
                    
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
