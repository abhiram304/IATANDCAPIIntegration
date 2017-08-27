module.exports = function Passengers(data /*, travelerRoot, travelerKey */ ) {
    var passengers = {};
    passengerRoot = 'Passenger';
    passengers[passengerRoot] = (data.passengers && data.passengers.length ?
        data.passengers.map(function(passenger) {
            return {
                _ObjectKey: passenger.objectKey,
                PTC: passenger.ptc,
                Name: passenger.name,
                Contacts: passenger.contacts,
                Gender: passenger.gender
            }
        }) : null);
    return passengers;
};
