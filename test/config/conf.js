'use strict';

const path = require('path');
const yargs = require('yargs');

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 80000,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/*.js')],
        ignoreUncaughtExceptions: true,
        tags: true
        // tags: yargs.tag||'@single'
    },

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }
    },

    specs: [path.resolve('./test/features/*.feature')],
    onPrepare: () => {
        browser.manage().window().maximize();
    }
};
