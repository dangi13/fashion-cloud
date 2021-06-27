import { createTask, getAllTasks, deleteTask } from '../service/taskService'

beforeAll(() => {
  console.log('STARTED TEST :[tasks] tests for tasks repository', '/t')
})

describe('[tasks]', () => {
  let counter = 1
  test(`${counter++} [POSITIVE] Create task.`, async () => {
      const taskBody = {"text" : 'cool boss'}
      const createTaskResponse = await createTask(taskBody)
      expect(createTaskResponse.status).toBe(200)
     })

  test(`${counter++} [POSITIVE] Get all tasks.`, async () => {
    const getTasksResponse = await getAllTasks()
    expect(getTasksResponse.status).toBe(200)
     })

  test(`${counter++} [POSITIVE] Delete task.`, async () => {
    const taskBody = {text: 'cool boss'}
    const createTaskResponse = await createTask(taskBody)
    expect(createTaskResponse.status).toBe(200)
    const deleteResponse = await deleteTask(createTaskResponse.data._id)
    expect(deleteResponse.status).toBe(200)
     })

})

afterAll(() => {
  console.log('FINISHED EXECUTION : [tasks] tests for tasks repository"')
})
