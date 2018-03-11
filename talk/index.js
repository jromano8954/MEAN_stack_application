var filename = "index.js";
//Can be access by require(./talk)
var hello = function(name){
    console.log("hello " +name);
};

var intro = function(){
    console.log("I'm a node file called " + filename);
};

module.exports = {
    hello: hello,
    intro : intro
};