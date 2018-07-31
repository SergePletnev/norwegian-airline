'use strict';

const logger = require('./../../support/logger').logger;
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
        logger.info(`Searching cars for rent in ${location} from ${dateRentFrom} August till ${dateRentTo} August`);
        return this.carsSearchForm.searchCarsForRent(location, dateRentFrom, dateRentTo)
            .then(() => {
                return provider.getPageObject('cars');
            });
    }

    searchFlights(departureLocation, destinationLocation, departureDate, returnDate) {
        logger.info(`Searching flights from ${departureLocation} to ${destinationLocation}: departure - ${departureDate} August, return - ${returnDate} August`);
        return this.flightsSearchForm.searchFlights(departureLocation, destinationLocation, departureDate, returnDate)
            .then(() => {
                return provider.getPageObject('flights');
            });
    }

}

module.exports = new HomePage();