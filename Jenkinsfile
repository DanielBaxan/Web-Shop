pipeline {
    agent any
    

    parameters
    { 
        booleanParam(name:'CLEAN_WORKSPACE',
        defaultValue:true,
        description:'Trebuie de sters mapa pentru buld-ul curent?'
        )
        booleanParam(name:'TESTING_FRONTEND',
        defaultValue:false,
        description:'Trebuie de testat frontend-ul?'
        )
    }
    

    stages {
        stage('Build') {
            steps {
                echo 'Building the application'
                bat "npm install"

            }
        }
        stage('Test backend')
        {
            steps{
                echo 'Testarea backend'
                bat "npm test"
            }  
        }
        stage('Test front end')
        {
            when
            {
                expression
                {
                    params.TESTING_FRONTEND==true
                }
            }
            steps{
                echo "Testarea frontend ${params.TESTING_FRONTEND}"
            }    
        }
    }
}