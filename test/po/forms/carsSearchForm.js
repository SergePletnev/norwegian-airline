'use strict';

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
        return this.carsSearchLink.click()
            .then(() => this.locationInput.clear())
            .then(() => this.locationInput.sendKeys(location))
            .then(() => this.locationInput.sendKeys(protractor.Key.ENTER))
            .then(() => this.datesFromRentLink.get(dateRentFrom - 1).click())
            .then(() => this.timeFromLink.click())
            .then(() => this.calendarToInput.click())
            .then(() => this.dateRentToLink.get(dateRentTo - 1).click())
            .then(() => this.timeToLink.click())
            .then(() => this.searchButton.click())
            .then(() => {
                browser.ignoreSynchronization = true;
            });
    }

}

module.exports = CarsSearchForm;