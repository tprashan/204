var program = require('./program.js').head;
var lib = require('./headlib.js').lib;
var fs = require("fs")
var args = process.argv.slice(2);
var argsWithOutSpace = lib.adjustSpace(args)
console.log(program.workWithOption(argsWithOutSpace));