var fs = require('fs');
console.log("Going to get a file");
//The statement below will cause the main flow of code to wait
//for the readFile before continuing which is not what we want
var file = fs.readFileSync('readFileSync.js');
console.log("Got the file");

console.log("App continues...");