var dbconn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req,res){

    var db = dbconn.get();
    var collection = db.collection('hotels');

    var docs = collection.find();

    console.log("Found hotels", docs);
    res
        .status(200)
        .json(docs);

    console.log('db',db);

    // console.log("GET the hotel");
    // //Prints the properties of the query string from URL 
    // console.log(req.query);
    // //Sending a response with setting a http status code 

    // //Using values from querystring to set amount returned
    // var offset = 0;
    // var count = 5;

    // if(req.query && req.query.offset){
    //     offset = parseInt(req.query.offset, 10);
    // }

    // if(req.query && req.query.count){
    //     count = parseInt(req.query.count, 10);
    // }

    // var returnData = hotelData.slice(offset,offset+count);

    // res
    //     .status(200)
    //     .json(returnData);
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
//Controller to add a hotel
module.exports.hotelsAddOne = function(req,res){
    console.log("POST new hotel");
    console.log(req.body);
    res
        .status(200)
        .json( req.body);
};