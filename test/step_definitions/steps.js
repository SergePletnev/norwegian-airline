"use strict";

const { Given, Then, When, setDefaultTimeout } = require('cucumber');
const provider = require('./../po/pageObjectProvider');
const homePage = require('./../po/homePage');

setDefaultTimeout(60 * 1000);

Given('I am on {string} page', (pageName) => {
    return provider.getPageObject(pageName).open();
});

When('I perform a search cars for rent with next filters: location - {string}, date from - 26 July 00:00, date till - 31 July 00:00', (location) => {
    return homePage.searchCarsForRent(location);
});
