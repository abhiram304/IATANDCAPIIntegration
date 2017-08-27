'use strict';

var util = require('util');
var common = require('./common');

var OrderCreate = function(data, shoppingRS, offerItemIDs) {
    var Query = {};
    Query.Passengers = common.Passengers(data);

    Query.OrderItems = {
        ShoppingResponse: {
            Owner: data.shoppingRS.owner,
            ResponseID: data.shoppingRS.responseID,
            Offers: {
                Offer: data.shoppingRS.offers.map(function(offer) {
                    var Offer = {
                        OfferID: {
                            _Owner: offer.owner,
                            _: offer.id
                        },
                        OfferItems: {
                            OfferItem: offer.items.map(function(item) {
                                var offerItem = {

                                    OfferItemID: {
                                        _Owner: item.owner,
                                        _: item.id
                                    },
                                    Passengers: {
                                        PassengerReference: item.passenger
                                    }
                                };
                                return offerItem;
                            }),
                        },
                        TotalPrice: {
                            SimpleCurrencyPrice: {
                                _: offer.total,
                                _Code: offer.currencyCode,
                            }
                        }
                    };
                    return Offer;
                })
            }

        }
    };
    Query.Payments = {
        Payment: {
            Method: {
                PaymentCard: {
                    CardType: data.payment.card.type,
                    CardCode: data.payment.card.code,
                    CardNumber: data.payment.card.number,
                    SeriesCode: data.payment.card.series,
                    CardHolderName: data.payment.card.holderName,
                    EffectiveExpireDate: {
                        Effective: data.payment.card.effective,
                        Expiration: data.payment.card.expiration
                    }
                }
            },
            Amount: {
                _Taxable: (!!data.payment.taxable).toString(),
                _Code: data.payment.currency,
                _: data.payment.amount.toString()
            },
            Payer: {
                Name: {
                    Surname: data.payment.payer.surname,
                    Given: data.payment.payer.given
                },
                Contacts: {
                    Contact: {
                        AddressContact: {
                            Street: data.payment.payer.street,
                            CityName: data.payment.payer.city,
                            PostalCode: data.payment.payer.postalCode,
                            CountryCode: data.payment.payer.country
                        },
                        EmailContact: {
                            Address: data.payment.payer.email
                        }
                    }
                }
            }
        }
    };

    Query.Metadata = common.Metadata(data);

    return {
        Document: common.Document(data),
        Party: common.Party(data, true),
        Query: Query,
    };
};

module.exports = OrderCreate;
