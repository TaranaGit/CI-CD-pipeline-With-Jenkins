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
        stage('Serve Build') {
            steps {
                    sh 'npm install -g serve'
                    sh 'serve -s dist -l 5000'
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
