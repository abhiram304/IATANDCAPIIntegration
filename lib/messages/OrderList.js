'use strict';

var common = require('./common');
var OrderList = function (data) {
    return {
        Document: common.Document(data),
        Party: common.Party(data, true),
        Query: {
            Filters: {
                Airline: {
                    AirlineID: data.filter.airlineID
                }
            }
        }
    };
};
module.exports = OrderList;
