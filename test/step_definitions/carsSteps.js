"use strict";

const logger = require('./../../support/logger').logger;
const { When, Then } = require('cucumber');
const expect = require('chai').expect;
const homePage = require('./../po/homePage');
const carsPage = require('./../po/carsPage');

When(/^I perform a cars search for rent with next filters: location - "([^"]*)", date from - "([^"]*)" August 00:00, date till - "([^"]*)" August 01:00$/
    , (location, dateRentFrom, dateRentTo) => {
        logger.info(`I perform a cars search for rent with next filters: location - ${location}, date from - ${dateRentFrom} August 00:00, date till - ${dateRentTo} August 01:00`);
        return homePage.searchCarsForRent(location, dateRentFrom, dateRentTo);
    });

Then(/^I should see cars to rent in "([^"]*)" from "([^"]*)" August to "([^"]*)" August with required filters information$/
    , (location, dateRentFrom, dateRentTo) => {
        logger.info(`I should see cars to rent in ${location} from - ${dateRentFrom} August  tilll ${dateRentTo}August with required filters information`);
        return carsPage.getResultInfo()
            .then((resultInfo) => {
                return expect(resultInfo).to.have.string(location)
                    .and.to.have.string(`${dateRentFrom} Aug`)
                    .and.to.have.string('00:00')
                    .and.to.have.string(`${dateRentTo} Aug`)
                    .and.to.have.string('01:00');
            })
            .then(() => {
                browser.ignoreSynchronization = false;
            });
    });
