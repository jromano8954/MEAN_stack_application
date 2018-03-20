var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req,res){

    var db = dbconn.get();
    var collection = db.collection('hotels');

    var offset = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }

    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err,docs){
            console.log("Found hotels",docs);
            res
                .status(200)
                .json(docs);
        });

    console.log('db',db);

    // console.log("GET the hotel");
    // //Prints the properties of the query string from URL 
    // console.log(req.query);
    // //Sending a response with setting a http status code 

    // //Using values from querystring to set amount returned
    //moved code to before find call 

    // var returnData = hotelData.slice(offset,offset+count);

    // res
    //     .status(200)
    //     .json(returnData);
};
//Controller for single hotel
module.exports.hotelsGetOne = function(req,res){
    var db = dbconn.get();
    var collection = db.collection('hotels');
    //Takes the hotelId from request object and stores it 
    var hotelId = req.params.hotelId;
    // var thisHotel = hotelData[hotelId];
    console.log("GET hotelId", hotelId);

    collection
        .findOne({
            _id : ObjectId(hotelId)
        },function(err,doc){
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