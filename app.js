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