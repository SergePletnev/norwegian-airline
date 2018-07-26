'use strict';

class FlightSearchForm {
    constructor() {
        this.departureLocationInput = element(by.id('airport-select-origin'));
        this.destinationLocationInput = element(by.id('airport-select-destination'));
        this.calendarDeparture = element(by.css('#outboundDate .calendar__input'));
        // this.departureDateLink = element(by.xpath('//div[@name="availabilityOutboundDate"]//*[contains(text(), "26") and not(@class="text-muted")]'));
        this.departureDateLink = element(by.xpath('/html[1]/body[1]/main[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/fieldset[2]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[5]/td[4]/button[1]'));
        this.returnDateLink = element(by.xpath('/html[1]/body[1]/main[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/fieldset[2]/div[1]/section[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[6]/td[2]/button[1]'));
        this.searchButton = element(by.id('searchButton'));
    }

    searchFlights(departureLocation, destinationLocation) {
        return this.departureLocationInput.clear()
            .then(() => this.departureLocationInput.sendKeys(departureLocation))
            .then(() => this.departureLocationInput.sendKeys(protractor.Key.ENTER))
            .then(() => this.destinationLocationInput.clear())
            .then(() => this.destinationLocationInput.sendKeys(destinationLocation))
            .then(() => this.destinationLocationInput.sendKeys(protractor.Key.ENTER))
            .then(() => this.calendarDeparture.click())
            .then(() => this.departureDateLink.click())
            .then(() => this.returnDateLink.click())
            .then(() => this.searchButton.click())
            .then(() => {
                browser.ignoreSynchronization = true;
            });
    }
}

module.exports = FlightSearchForm;