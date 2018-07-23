'use strict'

const provider = require('./../pageObjectProvider');
const EC = protractor.ExpectedConditions;

class CarsSearchForm {
    constructor() {
        this.carsSearchLink = element(by.linkText('Car rentals'));
        this.locationInput = element(by.id('pickup_location'));
        this.dateFromLink = element(by.xpath('/html[1]/body[1]/main[1]/div[4]/div[1]/div[2]/div[4]/div[1]/div[1]/form[1]/fieldset[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[5]/td[4]/button[1]'));
        // this.dateFromLink = element(by.buttonText('26'));
        this.timeFromLink = element(by.css('#pickupTime-00\\3a 00'));
        this.calendarToInput = element(by.css('.form-split>:nth-child(2) .calendar__input'));
        this.dateToLink = element(by.xpath('/html[1]/body[1]/main[1]/div[4]/div[1]/div[2]/div[4]/div[1]/div[1]/form[1]/fieldset[3]/div[1]/section[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[6]/td[2]/button[1]'));
        this.timeToLink = element(by.css('#returnTime-00\\3a 00'));
        this.searchButton = element(by.css('button[data-ng-click="search()"]'));
    }

    searchCarsForRent(location) {
        return this.carsSearchLink.click()
            .then(() => this.locationInput.clear())
            .then(() => this.locationInput.sendKeys(location))
            .then(() => this.locationInput.sendKeys(protractor.Key.ENTER))
            .then(() => this.dateFromLink.click())
            .then(() => this.timeFromLink.click())
            .then(() => this.calendarToInput.click())
            // .then(() => browser.wait(EC.presenceOf(dateToLink, 3000).click()))
            .then(() => this.dateToLink.click())
            .then(() => this.timeToLink.click())
            .then(() => this.searchButton.click())
            .then(() => {
                return provider.getPageObject('cars');
            })
            .then(() => browser.sleep(15000))
    }

}

module.exports = CarsSearchForm;