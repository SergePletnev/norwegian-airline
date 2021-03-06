'use strict';

const Helper = require('./../../support/helper.js');
const path = require('path');

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/*.js')],
        format: 'json:./reports/report.json'
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars']
        }
    },

    specs: [path.resolve('./test/features/*.feature')],
    onPrepare: () => {
        browser.driver.manage().timeouts().implicitlyWait(20000);
        browser.waitForAngularEnabled(true);
        browser.manage().window().maximize();

        global.helper = new Helper();
    }
};
