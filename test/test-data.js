'use strict';
var TestData = {};
/* sample regognized adult */
var passenger = {
    objectKey: 'SH1',
    ptc: {
        _Quantity: '1',
        _: 'ADT'
    },
    residenceCode: 'US',
    age: {
        birthDate: '1989-09-09'
    },
    name: {
        Surname: 'Yadav',
        Given: 'Mithalesh',
        Middle: 'Ignatius'
    },
    contacts: [{
        Contact: {
            EmailContact: {
                Address: 'mithalesh@jrtechnologies.com'
            }
        }
    }],
    gender: 'Male'
};

TestData.config = [
    /* Kronos Air config data*/
    {
        "language": "en",
        "currencyCode": "USD",
        "countryCode": "US",
        "cityCode": "NYC",
        "providerName": "IATA NDC GATEWAY",
        "endpoint": "http://iata.api.mashery.com/kronos/api",
        "APIAuthKey": "xxxxxxxxxxxxxxxxxxxxxxxx",
        "agent": {
            "IATANumber": "0000XXXX",
            "name": "IATA Developer",
            "id": "developer.test",
            "type": "Hackathon Agent",
            "email": "me@my.domain.com"
        },
        "sender": {
            "id": "9A",
            "name": "Athena Air",
            "type": "Airline Agent",
            "email": "test@example.org",
            "IATANumber": "98417900"
        },
        "airline": {
            "id": "C9",
            "name": "Kronos Airways"
        }
    }
];
TestData.AirShopping = [
    /* OneWay with one pax */
    {
        onds: [{
            flights: [{
                departure: {
                    date: new Date('2017-08-30'),
                    airportCode: 'CDG'
                },
                arrival: {
                    airportCode: 'FRA'
                },
                airline: TestData.config.sender
            }]
        }],
        cabin: 'C',
        fareCodes: ['BRO'],
        travelers: [
            /* one anonymous adult */
            {
                anonymous: true,
                count: 1,
                type: 'ADT'
            }
        ]
    },
    /* RoundTrip with multiple pax */
    {
        onds: [{
            flights: [{
                departure: {
                    date: new Date('2017-08-30'),
                    airportCode: 'CDG'
                },
                arrival: {
                    airportCode: 'FRA'
                },
                airline: TestData.config.sender
            }, {
                departure: {
                    date: new Date('2017-08-30'),
                    airportCode: 'FRA'
                },
                arrival: {
                    airportCode: 'CDG'
                },
                airline: TestData.config.sender
            }]
        }],
        cabin: 'C',
        fareCodes: ['BRO'],
        travelers: [
            /* two anonymous adults */
            {
                anonymous: true,
                count: 2,
                type: 'ADT'
            },
            /* one recognized adult */
            {
                key: 'PAX1',
                type: 'ADT',
                residenceCode: 'US',
                age: {
                    birthDate: '1989-09-09'
                },
                name: {
                    title: 'MR',
                    given: 'Mithalesh',
                    middle: 'Ignatius',
                    surname: 'Yadav'
                },
                contact: {
                    email: 'mithalesh@jrtechnologies.com',
                    phone: '9867236088'
                },
                profileID: '123',
                gender: 'Male',
                fqtvs: [{
                    programID: 'kR',
                    providerID: 'KR',
                    accountNumber: '992227471658222'
                }],
                foids: [{
                    type: 'PP',
                    id: '333444666'
                }]
            },

            {
                anonymous: true,
                count: 1,
                type: 'INF'
            }
        ]
    },
    /* RoundTrip with Calendar - Direct Flight */
    {
        onds: [{
            flights: [{
                departure: {
                    date: new Date('2017-08-30'),
                    airportCode: 'FRA'
                },
                arrival: {
                    airportCode: 'CDG'
                },
                calendar: {
                    before: 3,
                    after: 3
                }
            }]
        }, {
            flights: [{
                departure: {
                    date: new Date('2017-08-30'),
                    airportCode: 'CDG'
                },
                arrival: {
                    airportCode: 'FRA'
                },
                calendar: {
                    before: 2,
                    after: 2
                }
            }]
        }],
        cabin: 'M',
        fareCodes: ['BRO'],
        travelers: [
            /* one regognized adult */
            {
                key: 'PAX1',
                type: 'ADT',
                residenceCode: 'US',
                age: {
                    birthDate: '1989-09-09'
                },
                name: {
                    title: 'MR',
                    given: 'Mithalesh',
                    middle: 'Ignatius',
                    surname: 'Yadav'
                },
                contact: {
                    email: 'mithalesh@jrtechnologies.com',
                    phone: '9867236088'
                },
                profileID: '123',
                gender: 'Male',
                fqtvs: [{
                    programID: 'kR',
                    providerID: 'KR',
                    accountNumber: '992227471658222'
                }],
                foids: [{
                    type: 'PP',
                    id: '333444666'
                }]
            }
        ]
    },
    /* OneWay with all cabin */
    {
        onds: [{
            flights: [{
                departure: {
                    date: new Date('2017-08-30'),
                    airportCode: 'ARN'
                },
                arrival: {
                    airportCode: 'FRA'
                }
            }]
        }],
        fareCodes: ['BRO'],
        travelers: [
            /* one anonymous adult */
            {
                anonymous: true,
                count: 1,
                type: 'ADT'
            }
        ]
    }
];
TestData.FlightPrice = [
    /* OneWay Flight */
    {
        onds: [{
            flights: [{
                departure: {
                    date: new Date('2017-08-29T07:50:00Z'),
                    airportCode: 'CDG'
                },
                arrival: {
                    date: new Date('2017-08-29T09:27:00Z'),
                    airportCode: 'BCN'
                },
                airline: {
                    id: 'C9',
                    name: 'Kronos Airlines'
                },
                number: '050',
                aircraftCode: '320',
                classOfService: 'M',

            }, {
                departure: {
                    date: new Date('2017-08-30T11:40:00Z'),
                    airportCode: 'BCN'
                },
                arrival: {
                    date: new Date('2017-08-30T13:35:00Z'),
                    airportCode: 'FRA'
                },
                airline: {
                    id: 'C9',
                    name: 'Kronos Airlines'
                },
                number: '063',
                aircraftCode: '319',
                classOfService: 'M',

            }]
        }],
        participants: [{
            name: 'Travel',
            id: 'Travel'
        }],
        fareCodes: ['BRO'],
        travelers: [
            /* one anonymous adult */
            {
                anonymous: true,
                count: 1,
                type: 'ADT'
            }
        ]
    }
];
TestData.SeatAvailability = [{
    opCarrier: {
        id: 'C9',
        name: 'Kronos Airlines'
    },
    travelers: [
        /* one anonymous adult */
        {
            anonymous: true,
            count: 1,
            type: 'ADT'
        }
    ],
    flightList: [{
        key: 'FL1',
        journey: 'PT17H55M',
        segments: ['SEG1', 'SEG2']
    }],
    onds: [{
        key: 'OID1',
        flights: [{
            segmentKey: 'SEG1',
            departure: {
                date: new Date('2017-08-29T07:50:00Z'),
                airportCode: 'CDG'
            },
            arrival: {
                date: new Date('2017-08-29T09:27:00Z'),
                airportCode: 'BCN'
            },
            airline: {
                id: 'C9',
                name: 'Kronos Airlines'
            },
            number: '050',
            aircraftCode: '320',
            classOfService: 'M',

        }, {
            segmentKey: 'SEG2',
            departure: {
                date: new Date('2017-08-30T11:40:00Z'),
                airportCode: 'BCN'
            },
            arrival: {
                date: new Date('2017-08-30T13:35:00Z'),
                airportCode: 'FRA'
            },
            airline: {
                id: 'C9',
                name: 'Kronos Airlines'
            },
            number: '063',
            aircraftCode: '319',
            classOfService: 'M',

        }]
    }],
    ondList: [{
        key: 'OID1',
        departureCode: 'BCN',
        arrivalCode: 'PRG',
        flights: ['FL1']
    }]
}];
TestData.ServiceList = [{
    orderID: 'D12WD5',
    owner: 'C9',
    responseID: '052b50e369874500a1a93f41b79c4ed9'
}, {

    pointOfSaleEvent: {
        code: 9,
        definition: 'Shop'
    },
    onds: [{
        flights: [{
            departure: {
                date: new Date('2017-08-30T07:50:00Z'),
                airportCode: 'BCN'
            },
            arrival: {
                date: new Date('2017-08-30T09:27:00Z'),
                airportCode: 'CDG'
            },
            airline: {
                id: 'C9',
                name: 'Kronos Airlines'
            },
            number: '150',
            //                cabin: 'C'
            classOfService: 'C',
        }]
    }],
    participants: [{
        name: 'Travel',
        id: 'Travel'
    }],
    fareCodes: ['BRO'],
    travelers: [passenger]
}];

TestData.OrderCreate = [
    /* OneWay with one pax */
    {
        passengers: [passenger],
        shoppingRS: {
            owner: 'C9',
            responseID: '201-052b50e369874500a1a93f41b79c4ed9',
            offers: [{
                owner: 'C9',
                id: 1,
                total: 555.36,
                currencyCode: 'EUR',
                items: [{
                    owner: 'C9',
                    id: '1_1',
                    passenger: 'SH1'
                }]
            }]
        },
        payment: {
            card: {
                type: 'CREDIT',
                code: 'VI',
                number: '1111222233334444',
                series: '584',
                holderName: 'WERNHER VON BRAUN',
                effective: '0322',
                expiration: '1022'
            },
            taxable: true,
            currency: 'EUR',
            amount: 555.36,
            payer: {
                surname: 'Yadav',
                given: 'Mithalesh',
                street: '22 Main Street',
                city: 'FRA',
                postalCode: '14201',
                country: 'DE',
                email: 'mithalesh@jrtechnologies.com'
            }
        }
    }
];
TestData.OrderList = [
    /* Airline Filter */
    {
        pointOfSaleEvent: {
            code: 1,
            definition: 'Order or buy'
        },
        filter: {
            airlineID: 'C9'
        }
    }
];
TestData.OrderCancel = [
    /* Order Cancel */
    {
        pointOfSaleEvent: {
            code: 1,
            definition: 'Order or buy'
        },
        order: {
            owner: 'C9',
            id: 'D12WD5'
        }
    }
];
TestData.OrderRetrieve = [
    /* Airline Filter */
    {
        pointOfSaleEvent: {
            code: 1,
            definition: 'Order or buy'
        },
        order: {
            owner: 'C9',
            id: 'D12WD5'
        }
    }
];
TestData.ItinReshop = [{
        order: {
            id: 'D12WD5',
            owner: 'C9'
        },
        pointOfSaleEvent: {
            code: 9,
            definition: 'Shop'
        },
        opCarrier: {
            id: 'C9',
            name: 'Kronos Airlines'
        },
        cabin: 'M',
        passengers: [{
            objectKey: 'PAX2',
            ptc: {
                _Quantity: '1',
                _: 'ADT'
            },
            name: {
                Surname: 'Smith',
                Given: 'Johnny'
            },
            contacts: [{
                Contact: {
                    EmailContact: {
                        Address: 'j.smith@gmail.com'
                    }
                }
            }],
            gender: 'Male'
        }]
    }, {
        order: {
            id: 'D12WD5',
            owner: 'C9'
        },
        pointOfSaleEvent: {
            code: 9,
            definition: 'Shop'
        },
        opCarrier: {
            id: 'C9',
            name: 'Kronos Airlines'
        },
        cabin: 'M',
        onds: [{
            flights: [{
                departure: {
                    date: new Date('2017-08-30'),
                    airportCode: 'LHR'
                },
                arrival: {
                    airportCode: 'DXB',
                    airportName: 'Frankfurt International'
                },
                airline: {
                    id: 'C9',
                    name: 'Kronos Airlines'
                }
            }]
        }],
    },
    {
        order: {
            id: 'D12WD5',
            owner: 'C9'
        },
        pointOfSaleEvent: {
            code: 9,
            definition: 'Shop'
        },
        opCarrier: {
            id: 'C9',
            name: 'Kronos Airlines'
        },
        onds: [{
            flights: [{
                departure: {
                    date: new Date('2017-08-30T06:00:00Z'),
                    airportCode: 'ARN'
                },
                arrival: {
                    date: new Date('2017-08-30T08:10:00Z'),
                    airportCode: 'FRA',
                    airportName: 'Frankfurt International'
                },
                airline: {
                    id: 'C9',
                    name: 'Kronos Airlines'
                },
                number: 809,
                aircraftCode: '32A',
                cabin: 'M'
            }, {
                departure: {
                    date: new Date('2017-08-25T09:50:00Z'),
                    airportCode: 'FRA',
                    airportName: 'Frankfurt International'
                },
                arrival: {
                    date: new Date('2017-08-25T12:55:00Z'),
                    airportCode: 'RIX',
                    airportName: 'Riga Airport'
                },
                airline: {
                    id: 'C9',
                    name: 'Kronos Airlines'
                },
                number: 890,
                aircraftCode: '321',
                aircraftName: '321 - AIRBUS INDUSTRIE A321 JET',
                cabin: 'M'
            }]
        }],
        travelers: [{
            key: 'PAX2',
            name: {
                surname: 'Smith',
                given: 'Johnny'
            },
            gender: 'Male',
            count: 1,
            type: 'CHD'
        }],
        fareCodes: ['ESO'],
        dataList: {
            travelers: [passenger],
            onds: [{
                flights: [{
                    segmentKey: 'SEG1',
                    departure: {
                        date: new Date('2017-08-25T06:00:00Z'),
                        airportCode: 'ARN'
                    },
                    arrival: {
                        date: new Date('2017-08-25T08:10:00Z'),
                        airportCode: 'FRA',
                        airportName: 'Frankfurt International'
                    },
                    airline: {
                        id: 'C9',
                        name: 'Kronos Airlines'
                    },
                    number: 809,
                    aircraftCode: '32A',
                    detail: 'PT2H10M'
                }, {
                    segmentKey: 'SEG2',
                    departure: {
                        date: new Date('2017-08-25T09:50:00Z'),
                        airportCode: 'FRA',
                        airportName: 'Frankfurt International'
                    },
                    arrival: {
                        date: new Date('2017-08-25T12:55:00Z'),
                        airportCode: 'RIX',
                        airportName: 'Riga International'
                    },
                    airline: {
                        id: 'C9',
                        name: 'Kronos Airlines'
                    },
                    number: 809,
                    aircraftCode: '321',
                    aircraftName: '321 - AIRBUS INDUSTRIE A321 JET',
                    detail: 'PT3H5M'
                }]
            }]
        }
    }

]
module.exports = TestData;
