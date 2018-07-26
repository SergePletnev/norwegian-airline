'use strict';

const BasePage = require('./basePage');
const CarsSearchForm = require('./forms/carsSearchForm');
const FlightsSearchForm = require('./forms/flightsSearchForm');
const provider = require('./pageObjectProvider');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.norwegian.com/en';
        this.carsSearchForm = new CarsSearchForm();
        this.flightsSearchForm = new FlightsSearchForm();
    }

    searchCarsForRent(location, dateRentFrom, dateRentTo) {
        return this.carsSearchForm.searchCarsForRent(location, dateRentFrom, dateRentTo)
            .then(() => {
                return provider.getPageObject('cars');
            });
    }

    searchFlights(departureLocation, destinationLocation) {
        return this.flightsSearchForm.searchFlights(departureLocation, destinationLocation)
            .then(() => {
                return provider.getPageObject('flights');
            });
    }

}

module.exports = new HomePage();