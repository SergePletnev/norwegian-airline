'use strict'

const PAGE_OBJECTS = {
    home: './homePage',
    flights: './flightsPage',
    cars: './carsPage'
};

module.exports.getPageObject = (pageName) => {
    return require(PAGE_OBJECTS[pageName]);
}; 
