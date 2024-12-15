pipeline {
    agent any

    environment {
        AZURE_CLIENT_ID = credentials('6ab2f3e3-259e-49c0-822b-a3b858cf636b')   // Your AZURE_CLIENT_ID
        AZURE_CLIENT_SECRET = credentials('c0f4c26b-71b2-4ad2-b4ba-3ff08b427b88') // Your AZURE_CLIENT_SECRET
        AZURE_TENANT_ID = credentials('de16eefb-8284-4480-b0eb-df27f408518c')   // Your AZURE_TENANT_ID
        RESOURCE_GROUP = 'MyResourceGroup'
        FUNCTION_APP_NAME = 'MyFunctionApp8942277'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'  // Adjust for your build tools
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'  // Replace with your actual test commands
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
