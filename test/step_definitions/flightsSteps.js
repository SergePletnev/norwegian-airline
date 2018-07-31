"use strict";

const logger = require('./../../support/logger').logger;
const { Then, When } = require('cucumber');
const expect = require('chai').expect;
const homePage = require('./../po/homePage');
const flightsPage = require('./../po/flightsPage');

When(/^I perform a flights search from "([^"]*)" to "([^"]*)" in next dates: departure - "([^"]*)" August, return - "([^"]*)" August$/
    , (departureLocation, destinationLocation, departureDate, returnDate) => {
        logger.info(`I perform a flights search from ${departureLocation} to ${destinationLocation} in next dates: departure - ${departureDate} August, return - ${returnDate} August`);
        return homePage.searchFlights(departureLocation, destinationLocation, departureDate, returnDate);
    });

Then(/^I should see flights from "([^"]*)" to "([^"]*)" on "([^"]*)" August and back on on "([^"]*)" August$/
    , (departureLocation, destinationLocation, departureDate, returnDate) => {
        logger.info(`I should see flights from ${departureLocation} to ${destinationLocation} on ${departureDate} August and back on on ${returnDate} August`);
        return flightsPage.getOutboundInfo()
            .then((outboundInfo) => {
                return expect(outboundInfo).to.have.string(departureLocation)
                    .and.to.have.string(destinationLocation)
                    .and.to.have.string(`${departureDate}. Aug`);
            })
            .then(() => {
                return flightsPage.getReturnInfo();
            })
            .then((returnInfo) => {
                return expect(returnInfo).to.have.string(destinationLocation)
                    .and.to.have.string(departureLocation)
                    .and.to.have.string(`${returnDate}. Aug`);
            })
            .then(() => {
                browser.ignoreSynchronization = false;
            });
    });