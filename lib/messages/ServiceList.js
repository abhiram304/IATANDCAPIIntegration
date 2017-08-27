'use strict';

var common = require('./common');
var ServiceList = function ServiceList(data) {
    return {
        Document: common.Document(data),
        Party: common.Party(data, true),
        Query: {
            OrderID: {
                _: data.orderID,
                _Owner: data.owner
            }
        }
    };
};
module.exports = ServiceList;
