pipeline {
    agent any
    environment {
        AZURE_CLIENT_ID = credentials('AZURE_CLIENT_ID')  // Add these to Jenkins credentials
        AZURE_CLIENT_SECRET = credentials('AZURE_CLIENT_SECRET')
        AZURE_TENANT_ID = credentials('AZURE_TENANT_ID')
        RESOURCE_GROUP = 'MyResourceGroup'
        FUNCTION_APP_NAME = 'MyFunctionApp8942277'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'  // Use your test command here
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to Azure...'
                sh """
                az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID
                az functionapp deployment source config-zip --resource-group $RESOURCE_GROUP --name $FUNCTION_APP_NAME --src ./function.zip
                """
            }
        }
    }
}
