'use strict';

/* global helper */

class CarsSearchForm {
    constructor() {
        this.carsSearchLink = element(by.linkText('Car rentals'));
        this.locationInput = element(by.id('pickup_location'));
        this.datesFromRentLink = element.all(by.css('.form-split>:nth-child(1) .calendar__datepicker span:not(.text-muted)'));
        this.timeFromLink = element(by.css('#pickupTime-00\\3a 00'));
        this.calendarToInput = element(by.css('.form-split>:nth-child(2) .calendar__input'));
        this.dateRentToLink = element.all(by.css('.form-split>:nth-child(2) .calendar__datepicker span:not(.text-muted)'));
        this.timeToLink = element(by.css('#returnTime-01\\3a 00'));
        this.searchButton = element(by.css('button[data-ng-click="search()"]'));
    }

    searchCarsForRent(location, dateRentFrom, dateRentTo) {
        return helper.clickElement(this.carsSearchLink)
            .then(() => helper.setElementClear(this.locationInput))
            .then(() => helper.writeTo(this.locationInput, location))
            .then(() => this.locationInput.sendKeys(protractor.Key.ENTER))
            .then(() => helper.clickElement(this.datesFromRentLink.get(dateRentFrom - 1)))
            .then(() => helper.clickElement(this.timeFromLink))
            .then(() => helper.clickElement(this.calendarToInput))
            .then(() => helper.clickElement(this.dateRentToLink.get(dateRentTo - 1)))
            .then(() => helper.clickElement(this.timeToLink))
            .then(() => helper.clickElement(this.searchButton))
            .then(() => {
                browser.ignoreSynchronization = true;
            });
    }
}

module.exports = CarsSearchForm;