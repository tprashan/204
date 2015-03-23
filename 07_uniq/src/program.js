var program = require('./programuniq.js').uniq;
var fs = require("fs")
var args = process.argv.slice(2);

console.log(program.fileTextWithOutDuplicateLine(args));