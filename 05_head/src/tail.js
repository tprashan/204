var program = require('./programtail.js').tail;
var lib = require('./headlib.js').lib;
var fs = require("fs")
var args = process.argv.slice(2);
var argsWithOutSpace = lib.adjustSpace(args)
console.log(program.workWithOption(argsWithOutSpace));