var NDC = require('./');
var config = require('./config.json');
var ndc = new NDC(config);

/* OneWay with one pax */
var reqData = {
    onds: [{
        flights: [{
            departure: {
                date: new Date('2017-08-30'),
                airportCode: 'CDG'
            },
            arrival: {
                airportCode: 'FRA'
            },
            airline: config.sender
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
};

// Direct request
ndc.request('AirShopping', reqData, function (err, response) {
    console.log(response);
});

//Or if you need to work with message body:
var message = ndc.messages.AirShopping(reqData);

// print JSON message.
console.log(message.toJSON());
// print pretty XML code.
console.log(message.toXML(true));
// make request
message.request(function (err, response) {
    // view response
    console.log(response);
});
