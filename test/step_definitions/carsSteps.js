"use strict";

const { When, Then } = require('cucumber');
const expect = require('chai').expect;
const homePage = require('./../po/homePage');
const carsPage = require('./../po/carsPage');

When(/^I perform a cars search for rent with next filters: location - "([^"]*)", date from - "([^"]*)" July 00:00, date till - "([^"]*)" July 01:00$/
    , (location, dateRentFrom, dateRentTo) => {
        return homePage.searchCarsForRent(location, dateRentFrom, dateRentTo);
    });

Then(/^I should see cars to rent in "([^"]*)" from "([^"]*)" July to "([^"]*)" July with required filters information$/
    , (location, dateRentFrom, dateRentTo) => {
        return carsPage.getResultInfo()
            .then((resultInfo) => {
                return expect(resultInfo).to.have.string(location)
                    .and.to.have.string(`${dateRentFrom} Jul`)
                    .and.to.have.string('00:00')
                    .and.to.have.string(`${dateRentTo} Jul`)
                    .and.to.have.string('01:00');
            })
            .then(() => {
                browser.ignoreSynchronization = false;
            });
    });
