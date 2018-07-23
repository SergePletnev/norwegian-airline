'use strict'

const BasePage = require('./basePage');

const EC = protractor.ExpectedConditions;

class CarsPage extends BasePage {
    constructor() {
        super();
        this.searchResultInfo = element(by.css('.ct-search-form-readonly'));
    }

    getResultInfo() {
        return browser.wait(EC.presenceOf(this.searchResultInfo, 10000))
            .then(() => {
                return this.searchResultInfo.getText();
            });
    }
}

module.exports = new CarsPage();