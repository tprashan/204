var program = require('./programtail.js').head;
var args = process.argv.slice(2);

console.log(program.workWithOption(args));