'use strict';

class BasePage {

    open() {
        browser.get(this.url);
    }

    getPageTitle() {
        return browser.getTitle();
    }
}

module.exports = BasePage;