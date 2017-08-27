'use strict';
var util = require('util');
var common = require('./common');
var ItinReshop = function(data) {
    return {
        Document: common.Document(data),
        Party: common.Party(data, true),
        Query: {
            Reshop: {
                Actions: (function() {
                    var Action = {
                        ActionType: {
                            _Context: '',
                            _: ''
                        },
                        OrderID: {
                            _Owner: data.order.owner,
                            _: data.order.id
                        },

                    };

                    if (data.passengers) {
                        Action.ActionType._Context = 'Passenger',
                            Action.ActionType._ = 'Create',

                            Action.Passengers = common.Passengers(data)
                    } else if (data.onds) {
                        Action.ActionType._Context = 'Segment',
                            Action.ActionType._ = 'Update',
                            Action.OrderItems = {
                                OrderItem: {
                                    OrderItemID: {
                                        _: '_',
                                        _Owner: data.order.owner
                                    },
                                    FlightItem: {
                                        OriginDestination: data.onds.map(function(ond) {
                                            return common.OriginDestinations(ond, data, 'Flight');
                                        })
                                    }

                                }
                            }
                    }

                    Action.Preference = common.Preference(data)

                    return Action;

                }())
            }
        }
    };
};
module.exports = ItinReshop;
