//Setting up express for our app to listen
var express = require('express');
var app = express();
var path = require('path');

var routes = require('./routes');

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

app.use('/api',routes);

//req = request object, res = response object 
//send homepage file
/* No longer need to set root page since we set a folder to be static
it can directly send us to index.html without this block of code 
app.get('/',function(req,res){
    console.log("GET the homepage");
    //Sending a response with setting a http status code 
    res
    .status(200)
    .sendFile(path.join(__dirname,'public','index.html'));
    //.send('Express yourself');
});
*/
//send json file
app.get('/json',function(req,res){
    console.log("GET the json");
    //Sending a response with setting a http status code 
    res
    .status(200)
    .json( {"jsonData" : true} );
});
//send a file
app.get('/file',function(req,res){
    console.log("GET the file");
    //Sending a response with setting a http status code 
    res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'),function(){
    var port = server.address().port;
    console.log('Magic happends on port '+port);
});

/*
require('./instantHello');
//Require the import/include of Node JS 
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require("./talk/question");



var answer = question.ask("What is the meaning of life");
console.log(answer);
talk.intro();
talk.hello("someone");
goodbye();
*/
