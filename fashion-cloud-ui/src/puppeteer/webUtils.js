
class WebUtils {

    constructor(browser, page) {
        this.browser = browser,
        this.page = page
    }
    async closeBrowser() {
        const pages = await browser.pages();
        await Promise.all(pages.map(page => page.close()));
        await browser.close();
    }
}

export { WebUtils }