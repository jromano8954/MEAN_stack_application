//Setting up express for our app to listen
var express = require('express');
var app = express();

app.set('port',3000);

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
