'use strict';

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
        return this.departureLocationInput.clear()
            .then(() => this.departureLocationInput.sendKeys(departureLocation))
            .then(() => this.departureLocationInput.sendKeys(protractor.Key.ENTER))
            .then(() => this.destinationLocationInput.clear())
            .then(() => this.destinationLocationInput.sendKeys(destinationLocation))
            .then(() => this.destinationLocationInput.sendKeys(protractor.Key.ENTER))
            .then(() => this.calendarDeparture.click())
            .then(() => this.departureDatesLink.get(departureDate - 1).click())
            .then(() => this.returnDatesLink.get(returnDate - 1).click())
            .then(() => this.searchButton.click())
            .then(() => {
                browser.ignoreSynchronization = true;
            });
    }
}

module.exports = FlightSearchForm;