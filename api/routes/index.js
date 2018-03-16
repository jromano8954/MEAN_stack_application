var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);
//URL Parameters hotelId
router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);
router
    .route('/hotels/new')
    .post(ctrlHotels.hotelsAddOne);
    
    /*
    .post(function(req,res){
        console.log("Post the json route");
        //Sending a response with setting a http status code 
        res
        .status(200)
        .json( {"jsonData" : "POST received"});
    })
    */

module.exports = router;