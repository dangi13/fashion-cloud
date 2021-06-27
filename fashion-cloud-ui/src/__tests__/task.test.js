import { BrowserUtil } from '../puppeteer/browserUtil'
import { TaskPageActions } from '../pageActions/taskPageActions'
import { generateAlphaNumericString } from '../utils/commonUtils'

beforeAll(() => {
    console.log('STARTED TEST :E2E tests for TODO tasks application', '/t')
})

describe('[E2E tests]', () => {
    let browser, page, browserUtil, taskPageActions

    beforeAll(async () => {
        browserUtil = new BrowserUtil()
        browser = await browserUtil.launchBrowser()
        const defaultPages = await browser.pages()
        page = defaultPages[0]  //  default page given by puppeteer
        taskPageActions = new TaskPageActions(browser, page)
    })

    test(`[POSITIVE] Create multiple tasks.`, async () => {
        await page.goto(global.UI_CONFIG.BASE_URL, { timeout: 20000, waitUntil: 'domcontentloaded' })

        // arrange
        const tasksToCreate = [generateAlphaNumericString(10), generateAlphaNumericString(10), generateAlphaNumericString(10)]
        // act
        await taskPageActions.createTask(tasksToCreate)
        const tasksPresentOnUI = await taskPageActions.getAllTasks()
        // assert
        const tasksCreatedSuccessfully = tasksToCreate.every(task => tasksPresentOnUI.includes(task));
        expect(tasksCreatedSuccessfully).toBe(true)
    })

    test(`[POSITIVE] Delete tasks.`, async () => {
        await page.goto(global.UI_CONFIG.BASE_URL, { timeout: 20000, waitUntil: 'domcontentloaded' })

        // arrange
        const tasksToCreate = [generateAlphaNumericString(10), generateAlphaNumericString(10), generateAlphaNumericString(10)]
        await taskPageActions.createTask(tasksToCreate)
        const tasksPresentOnUI = await taskPageActions.getAllTasks()
        const tasksCreatedSuccessfully = tasksToCreate.every(task => tasksPresentOnUI.includes(task));
        expect(tasksCreatedSuccessfully).toBe(true)

        // act
        await taskPageActions.deleteTasks(3)
        const tasksPresentOnUIAfterDelete = await taskPageActions.getAllTasks()

        // assert
        expect(tasksPresentOnUIAfterDelete.length).toEqual(tasksPresentOnUI.length - 3) // as we only deleted 2 tasks
    })


    afterAll(async () => {
        await browserUtil.closeBrowser(browser)
    })
})

afterAll(() => {
    console.log('FINISHED EXECUTION :E2E tests for TODO tasks application', '/t')
})
