/** This file contains all credentials and configuration related to application */
import { green } from 'chalk'

const startMessage = '############################################################## \n                          EXECUTION STARTED                     \n ##############################################################'
console.log(green(startMessage))


global.API_CONFIG = {
  BASE_URL: process.env.BASE_URL || 'http://localhost:8080'  // process.env incase we want to run from CICD pipeline
}
  