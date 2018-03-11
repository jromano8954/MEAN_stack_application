var fs = require('fs');
console.log("Going to get a file");
//Makes callback functions more readable 
var onFileLoad = function(err,file){
    console.log("Got the file");
};
//To not disurpt the main flow of the code 
//We make a named callback function 
fs.readFile('readFileSync.js',onFileLoad);


console.log("App continues...");