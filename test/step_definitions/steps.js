"use strict";
const { Given, Then, When } = require('cucumber');

Given(/^Opened url: "([^"]*)"$/, (url) => {
    return browser.get(url);
});

When(/^String$/, () => {
    console.log('Flights!');
})