#!groovy
pipeline {
   agent any

   options {
      buildDiscarder(logRotator(numToKeepStr: '5'))
      disableConcurrentBuilds()
      timestamps()
   }

   triggers {
      pollSCM('H/2 * * * *')
   }

   environment {
      GRADLE_OPTS = getGradleOpts(params)
   }

   stages {
      stage('Build') {
         steps {
            gradlew('clean', 'build', 'sonarqube')
         }
         post {
            always {
               junit testResults: '**/build/test-results/**/*.xml', healthScaleFactor: 1.0
            }
         }
      }
      stage('Archive Artifacts') {
         steps {
            archiveArtifacts getArtifacts(params)
         }
      }
   }

   post {
      success {
         tagBuild(params)
      }
      fixed {
         sendEmail()
      }
      failure {
         sendEmail()
      }
   }
}

def getArtifacts(params) {
   def artifacts = 'property-events-spring-launcher/build/libs/unifocus-property-events.war'

   echo "Artifacts = ${artifacts}"

   return artifacts
}

def getGradleOpts(params) {
   return "-Xms2048m -Xmx4096m -Xss512m"
}

def tagBuild(params) {
   if (params.enableBuildTagging) {
      sshagent(credentials: ['93205061-ab67-4e9c-b3f3-b97b3c0d5720']) {
         sh "git tag -a -f -m jenkins-${env.JOB_NAME}-build-${env.BUILD_NUMBER} ${env.JOB_NAME}-build-${env.BUILD_NUMBER}"
         sh 'git push origin --tags'
      }
   }
}

def sendEmail() {
   emailext(
      to: 'build-watchers@unifocus.com',
      subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!',
      body: '''$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS:

Check console output at $BUILD_URL to view the results.''',
      replyTo: 'jenkins@unifocus.com',
      mimeType: 'text/html',
      attachLog: true,
      recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']])
}

def gradlew(String... args) {
   sh 'chmod +x ./gradlew'
   sh "./gradlew --no-daemon --build-cache -Pgradle.cache.push=true ${args.join(' ')}"
}
