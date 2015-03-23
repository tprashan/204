var program = require('./program.js').tail;
var lib = require('./taillib.js').lib;
var fs = require("fs")
var args = process.argv.slice(2);
var argsWithOutSpace = lib.adjustSpace(args)
console.log(program.workWithOption(argsWithOutSpace));