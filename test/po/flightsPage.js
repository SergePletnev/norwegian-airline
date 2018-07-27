'use strict';

const BasePage = require('./basePage');

class FlightsPage extends BasePage {
    constructor() {
        super();
        this.outboundInfo = element(by.css('#avaday-outbound-result .headerbox'));
        this.inboundInfo = element(by.css('#avaday-inbound-result .headerbox'));
    }

    getOutboundInfo() {
        return this.outboundInfo.getText();
    }

    getReturnInfo() {
        return this.inboundInfo.getText();
    }
}

module.exports = new FlightsPage();