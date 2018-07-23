"use strict";

const { Given, Then, When, setDefaultTimeout } = require('cucumber');
const expect = require('chai').expect;
const provider = require('./../po/pageObjectProvider');
const homePage = require('./../po/homePage');

setDefaultTimeout(100 * 1000);

Given('I am on {string} page', (pageName) => {
    return provider.getPageObject(pageName).open();
});

When('I perform a search cars for rent with next filters: location - {string}, date from - 26 July 00:00, date till - 31 July 01:00', (location) => {
    return homePage.searchCarsForRent(location)
        .then((carsPage) => {
            return carsPage.getResultInfo();
        })
        .then((resultInfo) => {
            return expect(resultInfo).to.have.string('cars available in ' + location);
            // return expect(resultInfo).to.include.all.strings(location,'26 Jul', '00:00', '31 Jul', '01:00');
        })
});
