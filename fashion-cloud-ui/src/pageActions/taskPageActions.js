import { taskPageObjects } from '../pageObjects/taskPageObjects'


class TaskPageActions {
    constructor(browser, page) {
        this.browser = browser,
        this.page = page
    }

    /**
     *  it will craete all tasks that you want
     * @param {*} taskNames 
     */
    async createTask(taskstoCreate) {
        const page = this.page
        for (let index = 0; index < taskstoCreate.length; index++) {
            await (await page.waitForSelector(taskPageObjects.TASK_INPUT_BOX)).type(taskstoCreate[index]);
            await (await page.waitForSelector(taskPageObjects.ADD_TASK_BUTTON)).click();
            await page.waitForXPath(`//div[@ng-repeat = 'todo in todos'][contains(.,'${taskstoCreate[index]}')]`, { visible: true }) // 
        }
    }

    /**
     * it will delete tasks form top    (// we can make it more generic getting tasknames to delete etc, but in future after demo :)
     * @param {*} taskCount how many you want to delete
     */
    async deleteTasks(taskCount) {
        const page = this.page
        for (let index = 0; index < taskCount; index++) { 
           const [task] =  await page.$$(taskPageObjects.REMOVE_TASK_CHECKBOXES)
           await task.click()
           await page.waitFor(500)
        }
    }

    /**
     * 
     * @returns all tasks present on UI   [array of task names]
     */
    async getAllTasks() {
        const page = this.page
        const tasksPresentOnUI = await page.evaluate((taskPageObjects) => Array.from(document.querySelectorAll(taskPageObjects.ALL_TASK_NAMES), element => element.innerText.trim()), taskPageObjects);
        return tasksPresentOnUI
    }
}

export {TaskPageActions}