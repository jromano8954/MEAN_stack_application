//Setting up express for our app to listen
//old way to set up connection with mongodb
//require('./api/data/dbconnection.js').open();
require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port',3000);
//Logs only files in /css 
//app.use('/css',function(req,res,next){
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

//Making public folder static
//middleware
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended:false  }));

app.use('/api',routes);

var server = app.listen(app.get('port'),function(){
    var port = server.address().port;
    console.log('Magic happends on port '+port);
});
