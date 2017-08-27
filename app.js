var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');
//var home = require('/routes/sample');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.bodyParser());
app.use(express.cookieParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){ 
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
    currencyCode: 'USD',
    onds: [{
        flights: [{
            departure: {
                date: new Date('2017-12-25'),
                airportCode: 'SFO'
            },
            arrival: {
                airportCode: 'MUC'
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
res.send(message.toJSON());
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
