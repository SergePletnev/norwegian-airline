"use strict";

const { Given, Then, When, setDefaultTimeout } = require('cucumber');
const expect = require('chai').expect;
const provider = require('./../po/pageObjectProvider');

setDefaultTimeout(100 * 1000);

Given('I am on {string} page', (pageName) => {
    return provider.getPageObject(pageName).open();
});

Then('{string} page should be displayed with title containing {string}', (pageName, titlePart) => {
    return provider.getPageObject(pageName).getPageTitle()
        .then((pageTtile) => {
            return expect(pageTtile).to.have.string(titlePart);
        });
});