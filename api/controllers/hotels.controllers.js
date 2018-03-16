var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req,res){
    console.log("GET the hotel");
    //Sending a response with setting a http status code 
    res
        .status(200)
        .json( hotelData);
};