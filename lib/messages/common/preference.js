module.exports = function Preference(data) {
    var common = require('./');
    return {
      
            AirlinePreferences: {
                Airline: {
                    AirlineID: (data.airline || data.sender).id,
                }
            },
            FarePreferences: (data.fareCodes ? {

                FareCodes: (data.fareCodes && data.fareCodes.length ? {
                    Code: data.fareCodes.map(function (fareCode) {
                        return {
                            Code: fareCode
                        };
                    })
                } : null)

             } : null),
            CabinPreferences: (data.cabin ? {
                CabinType: common.CabinType(data)
            } : null)
        
    };
};
