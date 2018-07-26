"use strict";

const {Then, When} = require('cucumber');
const expect = require('chai').expect;
const homePage = require('./../po/homePage');
const flightsPage = require('./../po/flightsPage');

When(/^I perform a flights search from "([^"]*)" to "([^"]*)" in next dates: departure - "([^"]*)" July, return - "([^"]*)" July$/
    , (departureLocation, destinationLocation, departureDate, returnDate) => {
        return homePage.searchFlights(departureLocation, destinationLocation, departureDate, returnDate);
    });

Then(/^I should see flights from "([^"]*)" to "([^"]*)" on "([^"]*)" July and back on on "([^"]*)" July$/
    , (departureLocation, destinationLocation, departureDate, returnDate) => {
        return flightsPage.getOutboundInfo()
            .then((outboundInfo) => {
                return expect(outboundInfo).to.have.string(departureLocation)
                    .and.to.have.string(destinationLocation)
                    .and.to.have.string(`${departureDate}. Jul`);
            })
            .then(() => {
                return flightsPage.getReturnInfo();
            })
            .then((returnInfo) => {
                return expect(returnInfo).to.have.string(destinationLocation)
                    .and.to.have.string(departureLocation)
                    .and.to.have.string(`${returnDate}. Jul`);
            })
            .then(() => {
                browser.ignoreSynchronization = false;
            });
    });