'use strict';

const { After, Status } = require('cucumber');
const { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(100 * 1000);

After(function takeScreenshot(scenario) {
    if (scenario.result.status === Status.FAILED) {
        return browser.takeScreenshot().then((screenShot) => {
            let decodedImage = new Buffer(screenShot, 'base64');
            return this.attach(decodedImage, 'image/png');
        });
    }
    return 0;
});