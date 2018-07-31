'use strict';

const logger = require('./logger').logger;

class Helper {

    clickElement(element) {
        logger.info(`Click element with locator: ${element.locator().value}`);
        return element.click();
    }

    writeTo(element, value) {
        logger.info(`Write [${value}] to element with locator: ${element.locator().value}`);
        return element.sendKeys(value);
    }

    waitForVisibilityOf(element, timeout) {
        logger.info(`Wait [${timeout}ms] for visibility of element with locator: ${element.locator().value}`);
        const timeoutMs = timeout || browser.params.defaultTimeOut;
        return browser.wait(protractor.ExpectedConditions.visibilityOf(element), timeoutMs,
            `Waiting for visibilityOf of ${element.locator()} failed`);
    }

    setElementClear(element) {
        logger.info(`Set element clear with locator: ${element.locator().value}`);
        return element.clear();
    }

    getTextOf(element) {
        logger.info(`Get text of element with locator: ${element.locator().value}`);
        return element.getText();
    }

    getAttributeValueOf(element, attribute) {
        logger.info(`Get attribute [${attribute}] value of element with locator: ${element.locator().value}`);
        return element.getAttribute(attribute);
    }
}

module.exports = Helper;