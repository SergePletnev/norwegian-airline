'use strict';

/* global helper */

class FlightSearchForm {
    constructor() {
        this.departureLocationInput = element(by.id('airport-select-origin'));
        this.destinationLocationInput = element(by.id('airport-select-destination'));
        this.calendarDeparture = element(by.css('#outboundDate .calendar__input'));
        this.departureDatesLink = element.all(by.css('.form-split>:nth-child(1) .calendar__datepicker span:not(.text-muted)'));
        this.returnDatesLink = element.all(by.css('.form-split>:nth-child(2) .calendar__datepicker span:not(.text-muted)'));
        this.searchButton = element(by.id('searchButton'));
    }

    searchFlights(departureLocation, destinationLocation, departureDate, returnDate) {
        return helper.clickElement(this.departureLocationInput)
            .then(() => helper.setElementClear(this.departureLocationInput))
            .then(() => helper.writeTo(this.departureLocationInput, destinationLocation))
            .then(() => this.departureLocationInput.sendKeys(protractor.Key.ENTER))
            .then(() => helper.setElementClear(this.destinationLocationInput))
            .then(() => helper.writeTo(this.destinationLocationInput, departureLocation))
            .then(() => this.destinationLocationInput.sendKeys(protractor.Key.ENTER))
            .then(() => helper.clickElement(this.calendarDeparture))
            .then(() => helper.clickElement(this.departureDatesLink.get(departureDate - 1)))
            .then(() => helper.clickElement(this.returnDatesLink.get(returnDate - 1)))
            .then(() => helper.clickElement(this.searchButton))
            .then(() => {
                browser.ignoreSynchronization = true;
            });
    }
}

module.exports = FlightSearchForm;