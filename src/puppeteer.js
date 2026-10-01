const puppeteer = require('puppeteer');
const config = require('./config');

module.exports.launch = function () {
    const executablePath = config('CHROME_EXECUTABLE_PATH') || undefined;

    return puppeteer.launch({
        executablePath,
        args: [
            '--disable-dev-shm-usage'
        ]
    }).then(browser => {
        global.browser = browser;
        console.log(`browser ready${executablePath ? ` (using ${executablePath})` : ''}`);
    });
}
