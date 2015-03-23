var program = require('./programcut.js').cut;
var args = process.argv.slice(2);
var options = args.slice(1);
console.log(program.runCut(args[0],args[1]));