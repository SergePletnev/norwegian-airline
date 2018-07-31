"use strict";

const logger = require('./../../support/logger').logger;
const { Given, Then } = require('cucumber');
const setDefaultTimeout = require('cucumber').setDefaultTimeout;
const expect = require('chai').expect;
const provider = require('./../po/pageObjectProvider');

setDefaultTimeout(100 * 1000);

Given(/^I am on "([^"]*)" page$/, (pageName) => {
    logger.info(`I am on ${pageName} page`);
    return provider.getPageObject(pageName).open();
});

Then(/^"([^"]*)" page should be displayed with title containing "([^"]*)"$/, (pageName, titlePart) => {
    logger.info(`${pageName} page should be displayed with title containing ${titlePart}`);
    return provider.getPageObject(pageName).getPageTitle()
        .then((pageTtile) => {
            return expect(pageTtile).to.have.string(titlePart);
        });
});