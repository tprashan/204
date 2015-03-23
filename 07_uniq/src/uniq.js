var program = require('./programuniq.js').uniq;
var args = process.argv.slice(2);

console.log(program.runUniq(args));