'use strict'

const provider = require('./../pageObjectProvider');

class FlightSearchForm {
    constructor() {

    }

    searchFlights(departureLocation, destinationLocation) {

        .then(() => {
            return provider.getPageObject('flights');
        })
    }
}

module.exports = FlightSearchForm;