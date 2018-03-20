var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanHotels';

var _connection = null;

var open = function(){
    MongoClient.connect(dburl,function(err, db){
        if(err){
            console.log("DB connection failed");
            return;
        }
        _connection = db.db('meanHotels');
        console.log("DB connection open", db);
    });
    ///set conneection
};

var get = function(){
    return _connection;
};

module.exports ={
    open : open,
    get : get
};