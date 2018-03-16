var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req,res){
    console.log("GET the hotel");
    //Sending a response with setting a http status code 
    res
        .status(200)
        .json( hotelData);
};
//Controller for single hotel
module.exports.hotelsGetOne = function(req,res){
    //Takes the hotelId from request object and stores it 
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
    console.log("GET hotelId", hotelId);
    //Sending a response with setting a http status code 
    res
        .status(200)
        .json( thisHotel);
};