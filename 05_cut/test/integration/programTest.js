var assert = require('assert');
var test = {};
exports.test = test;
var program = require('../../src/programcut.js').cut;


// test["cut gives 3rd column of file when we use cut with option -c3"] = function(){
// 	assert.equal(program.runCut('one.txt',"-c3"),'l\r\na');
// };


// test["cut should give l and a when we use cut command with option 5,6,7"] = function(){
// 	assert.equal(program.runCut('one.txt',"-c5,6,7"),'o, \r\n do');
// };