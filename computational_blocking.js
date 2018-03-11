console.log(1);
//Takes a long time to compute 
//In the single threaded world of node 
//this would be bad for our clients to experience 
require('./_fibonacci.js');

console.log(2);