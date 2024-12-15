pipeline {
    agent any

    environment {
        AZURE_CLIENT_ID = credentials('Azure-SP-Client-ID')
        AZURE_CLIENT_SECRET = credentials('Azure-SP-Secret')
        AZURE_TENANT_ID = credentials('Azure-Tenant-ID')
        RESOURCE_GROUP = 'MyResourceGroup'
        FUNCTION_APP_NAME = 'MyFunctionApp8942277'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'  // Modify for Python if required
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'  // Replace with your test command
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to Azure...'
                sh """
                    az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID
                    az functionapp deployment source config-zip --resource-group $RESOURCE_GROUP --name $FUNCTION_APP_NAME --src function.zip
                """
            }
        }
    }
}
