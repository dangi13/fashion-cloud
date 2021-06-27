
import {submitAPIRequest} from '../utils/restClient'
import { replaceMultipleValues } from '../utils/commonUtils'

const repo = global.API_CONFIG.BASE_URL

const operations = {
  createTask: { route: repo + '/api/todos/', method: 'POST' },
  getAllTasks: { route: repo + '/api/todos/', method: 'GET' },
  deleteTask: { route: repo + '/api/todos/{taskId}', method: 'DELETE' },
}

const headers = {
  'Content-Type': 'application/json',
  accept: '*/*'
}

export { operations, headers }

/**
 * 
 * @param {*} body  {"text":"cool boss"}
 * @returns 
 */
export async function createTask (body) {
  console.log('Creating task...', body)
  const operation = operations.createTask
  const apiResponse = await submitAPIRequest(operation.method, operation.route, headers, body)
 
  return apiResponse
}

export async function getAllTasks () {
  console.log(`Getting all tasks `)
  const operation = operations.getAllTasks
  const apiResponse = await submitAPIRequest(operation.method, operation.route, headers)

  return apiResponse
}

/**
 * 
 * @param {*} taskId : e.g 60d8217c4a58895054892d54
 * @returns 
 */
export async function deleteTask (taskId) {
  console.log(`Delete task : ${taskId}`)
  const operation = operations.deleteTask
  const endpoint = replaceMultipleValues(operation.route, { '{taskId}': taskId })
  const apiResponse = await submitAPIRequest(operation.method, endpoint, headers)

  return apiResponse
}

