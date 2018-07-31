'use strict';

/* global helper */

const logger = require('./../../support/logger').logger;
const BasePage = require('./basePage');

class FlightsPage extends BasePage {
    constructor() {
        super();
        this.outboundInfo = element(by.css('#avaday-outbound-result .headerbox'));
        this.inboundInfo = element(by.css('#avaday-inbound-result .headerbox'));
    }

    getOutboundInfo() {
        logger.info('Getting outbound info');
        return helper.getTextOf(this.outboundInfo);
    }

    getReturnInfo() {
        logger.info('Getting return info');
        return helper.getTextOf(this.inboundInfo);
    }
}

module.exports = new FlightsPage();