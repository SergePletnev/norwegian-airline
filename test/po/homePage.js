'use strict'

const BasePage = require('./basePage');
const CarsSearchForm = require('./forms/carsSearchForm');
const FlightsSearchForm = require('./forms/flightsSearchForm');
const provider = require('./pageObjectProvider');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.norwegian.com/en';
        this.carsSearchForm = new CarsSearchForm;
    }

    searchCarsForRent(location) {
        return this.carsSearchForm.searchCarsForRent(location)
            .then(() => {
                return provider.getPageObject('cars');
            })
    }
}

module.exports = new HomePage();