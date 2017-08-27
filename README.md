# NDC client

A Node.js client wrapper for IATA's NDC API.

## Installation

clone with git:

```
git clone https://github.com/iata-ndc/ndc-js-sdk.git
```

If you do not already have the debug module installed then:

```
npm install debug
```

## Usage

Create a config file and save it as config.json:

```json
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
    "name": "Kronos Air",
    "type": "Airline Agent",
    "email": "test@example.org",
    "IATANumber": "98417900"
  },
  "airline": {
      "id": "C9",
      "name": "Kronos Airways"
  }
}
```

Remember to replace the string of "xxx" above with your API Key.

And then to make a request create a new file, for example kronos.js and put the following contents inside:

```javascript
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
```

Finally execute it on the command line with "node kronos.js"

For further details on each message parameters, have a look to the test folder in the `test-data.js` file, with examples.
