exports.index = function(req, res){
var NDC = require('./');
/*require('ndc-client');*/
var ndc = new NDC(require('./config.json'));

/* OneWay with multiple pax */
var reqData = {
    pointOfSaleEvent: {
        code: 9,
        definition: 'Shop'
    },
    language: 'en',
    currencyCode: 'EUR',
    onds: [{
        flights: [{
            departure: {
                date: new Date('2017-12-25'),
                airportCode: 'ARN'
            },
            arrival: {
                airportCode: 'LHR'
            },
            airline: ndc.config.sender
        }]
    }],
    cabin: 'C',
    travelers: [
        /* two anonymous adults */
        {
            anonymous: true,
            count: 2,
            type: 'ADT'
        },
        /* 1 anonymous children */
        
        /* 1 anonymous infant */
        {
            anonymous: true,
            count: 1,
            type: 'INF'
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
res.send("Hello");
};
