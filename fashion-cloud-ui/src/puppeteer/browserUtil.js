import puppeteer from 'puppeteer';

class BrowserUtil {
     async launchBrowser() {

        const browser = await puppeteer.launch({
            headless: false,
            executablePath: process.env.CHROMIUM_PATH,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process',
                '--disable-gpu'
              ],
            defaultViewport: null,
            ignoreHTTPSErrors: true
        });
    
        return browser; 
    }

    async closeBrowser(browser) {
        const pages = await browser.pages();
        await Promise.all(pages.map(page => page.close()));
        await browser.close();
    }
    
}

export { BrowserUtil }
