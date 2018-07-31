'use strict';

const logger = require('./../../support/logger').logger;

class BasePage {

    open() {
        logger.info(`Opening ${this.url} page`);
        browser.get(this.url);
    }

    getPageTitle() {
        return browser.getTitle();
    }
}

module.exports = BasePage;