'use strict';

const reporter = require('cucumber-html-reporter');
const path = require('path');

let options = {
    theme: 'bootstrap',
    jsonFile: path.resolve('./reports/report.json'),
    output: path.resolve('./reports/cucumber_report.html'),
    reportSuiteAsScenarios: true,
    storeScreenshots: true,
    screenshotsDirectory: path.resolve('./reports/screenshots/'),
    launchReport: true
};

reporter.generate(options);
