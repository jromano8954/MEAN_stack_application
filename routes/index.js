var express = require('express');
var router = express.Router();

router
    .route('/json')
    .get(function(req,res){
        console.log("GET the json route");
        //Sending a response with setting a http status code 
        res
        .status(200)
        .json( {"jsonData" : true});
    })
    .post(function(req,res){
        console.log("Post the json route");
        //Sending a response with setting a http status code 
        res
        .status(200)
        .json( {"jsonData" : "POST received"});
    });

module.exports = router;