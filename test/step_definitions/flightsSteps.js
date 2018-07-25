"use strict";

const { Then, When } = require('cucumber');
const expect = require('chai').expect;
const provider = require('./../po/pageObjectProvider');
const homePage = require('./../po/homePage');
const flightsPage = require('./../po/flightsPage');

When(/^I perform a flights search from "([^"]*)" to "([^"]*)" in next dates: departure - 26 July, return - 31 July$/
    , (departureLocation, destinationLocation) => {
        return homePage.searchFlights(departureLocation, destinationLocation);
    });

Then(/^I should see flights from "([^"]*)" to "([^"]*)" and back in required dates$/, (departureLocation, destinationLocation) => {
    return flightsPage.getOutboundInfo()
        .then((outboundInfo) => {
            return expect(outboundInfo).to.have.string(departureLocation)
                .and.to.have.string(destinationLocation)
                .and.to.have.string('26. Jul')
        })
        .then(() => {
            return flightsPage.getReturnInfo();
        })
        .then((returnInfo) => {
            return expect(returnInfo).to.have.string(destinationLocation)
                .and.to.have.string(departureLocation)
                .and.to.have.string('31. Jul')
        })
        .then(() => {
            browser.ignoreSynchronization = false;
        });
});