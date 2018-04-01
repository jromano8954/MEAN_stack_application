var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

var runGeoQuery = function(req,res){

    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);

    //A geoJSON point
    var point = {
        type : "Point",
        coordinates : [lng , lat]
    };
    //Dist in meters
    var geoOptions = {
        spherical : true,
        maxDistance : 2000,
        num : 5
    };

    Hotel
        .geoNear(point,geoOptions, function(err,results,stats){
            console.log("Geo results", results);
            console.log("Geo stats", stats);
            res
                .status(200)
                .json(results);
        });
};

//Controller to get mulitple/all hotels
module.exports.hotelsGetAll = function(req,res){

    var offset = 0;
    var count = 5;

    if(req.query && req.query.lat && req.query.lng){
        runGeoQuery(req,res);
        return;
    }

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }

    Hotel
        .find()
        .skip(offset)
        .limit(count)
        .exec(function(err,hotels){
            console.log("Found hotels", hotels.length);
            res
                .json(hotels);
        });
};
//Controller for single hotel
module.exports.hotelsGetOne = function(req,res){
    //Takes the hotelId from request object and stores it 
    var hotelId = req.params.hotelId;
    // var thisHotel = hotelData[hotelId];
    console.log("GET hotelId", hotelId);

    Hotel
        .findById(hotelId)
        .exec(function(err,doc){
            //Sending a response with setting a http status code 
            res
             .status(200)
             .json( doc);
        });
    
};
//Controller to add a hotel
module.exports.hotelsAddOne = function(req,res){
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var newHotel;

    console.log("POST new hotel");
    if(req.body && req.body.name && req.body.stars){
        newHotel = req.body;
        newHotel.stars = parseInt(req.body.stars,10);
        console.log(newHotel);
        collection.insertOne(newHotel,function(err,response){
            console.log(response.ops);
            res
            .status(201)
            .json( response.ops);
        });   
    }else{
        res
            .status(400)
            .json({message : "Required data missing from body"});
    }

};