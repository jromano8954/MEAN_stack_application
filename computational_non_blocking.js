var child_process = require('child_process');

console.log(1);
//Spawning a child process 
var newProcess = child_process.spawn('nodejs',['_fibonacci.js'],{
    stdio : 'inherit'
});
//require('./_fibonacci.js');

console.log(2);