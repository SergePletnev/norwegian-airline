'use strict';

/* global helper */

const logger = require('./../../support/logger').logger;
const BasePage = require('./basePage');

class CarsPage extends BasePage {
    constructor() {
        super();
        this.searchResultInfo = element(by.css('.ct-search-form-readonly'));
    }

    getResultInfo() {
        logger.info('Getting result info of car searching');
        return helper.waitForVisibilityOf(this.searchResultInfo, 10000)
            .then(() => {
                return this.searchResultInfo.getText();
            });
    }
}

module.exports = new CarsPage();