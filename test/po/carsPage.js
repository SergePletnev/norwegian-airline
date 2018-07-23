'use strict'

const BasePage = require('./basePage');

class CarsPage extends BasePage {
    constructor() {
        super();
        this.searchResultInfo = element(by.css('#ct-search-results [availability-info]'));
    }

    getResultInfo() {
        return this.searchResultInfo.getText();
    }
}

module.exports = new CarsPage();