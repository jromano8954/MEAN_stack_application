var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    stars : {
        type: Number,
        min : 0,
        max : 5,
        default : 0
    },
    services : [String],
    description : String,
    photos : [String],
    currency : String
});
// compile model after defining schema
// Model name , schema , db.collection name 
mongoose.model('Hotel',hotelSchema,"hotels");