"use strict";

const { When, Then } = require('cucumber');
const expect = require('chai').expect;
const provider = require('./../po/pageObjectProvider');
const homePage = require('./../po/homePage');
const carsPage = require('./../po/carsPage');

When(/^I perform a cars search for rent with next filters: location - "([^"]*)", date from - 26 July 00:00, date till - 31 July 01:00$/
    , (location) => {
        return homePage.searchCarsForRent(location)
    });

Then(/^I should see cars to rent in "([^"]*)" with required filters information$/, (location) => {
    return carsPage.getResultInfo()
        .then((resultInfo) => {
            return expect(resultInfo).to.have.string(location)
                .and.to.have.string('26 Jul')
                .and.to.have.string('00:00')
                .and.to.have.string('31 Jul')
                .and.to.have.string('01:00');
        })
        .then(() => {
            browser.ignoreSynchronization = false;
        });
});
