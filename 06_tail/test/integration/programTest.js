var assert = require('assert');
var test = {};
exports.test = test;
var program = require('../../src/program.js').head;

test['head one.txt => hello, this is a good day.\r\n What do you think?'] = function(){
	assert.equal(program.giveText('one.txt'),'hello, this is a good day.\r\nWhat do you think?');
};

test['head one.txt -c20 => hello, this is a goo'] = function(){
	assert.equal(program.giveTextAccordingValueOfChars('one.txt',20),'hello, this is a goo');
};

test['head one.txt -n1 => hello, this is a good day.'] = function(){
	assert.equal(program.giveTextAccordingValueOfLines('one.txt',1),'hello, this is a good day.');
};

test['head badfile => head: badfile: No such file or directory'] = function(){
	assert.equal(program.giveText('badfile'),'head: badfile: No such file or directory.');
};

// test['wc -l one.txt => 2 one.txt'] = function(){
// 	assert.equal(program.run(['-l','one.txt']),'2 one.txt');
// };

// test['wc one.txt -l => 2 one.txt'] = function(){
// 	assert.equal(program.run(['one.txt','-l']),'2 one.txt');
// };

// test['wc -c one.txt => 48 one.txt'] = function(){
// 	assert.equal(program.run(['-c','one.txt']),'48 one.txt');
// };

// test['wc one.txt -c => 48 one.txt'] = function(){
// 	assert.equal(program.run(['one.txt','-c']),'48 one.txt');
// };

// test['wc -w one.txt => 10 one.txt'] = function(){
// 	assert.equal(program.run(['-w','one.txt']),'10 one.txt');
// };

// test['wc one.txt -w => 10 one.txt'] = function(){
// 	assert.equal(program.run(['one.txt','-w']),'10 one.txt');
// };

// test['wc -l -w one.txt => 2 10 one.txt'] = function(){
// 	assert.equal(program.run(['-l','-w','one.txt']),'2 10 one.txt');
// };

// test['wc -c -l -w one.txt => 2 10 48 one.txt'] = function(){
// 	assert.equal(program.run(['-c','-l','-w','one.txt']),'2 10 48 one.txt');
// };

// test['wc -w -w -w one.txt => 10 one.txt'] = function(){
// 	assert.equal(program.run(['-w','-w','-w','one.txt']),'10 one.txt');
// };

// test['wc badfile -w => wc: badfile: No such file or directory'] = function(){
// 	assert.equal(program.run(['badfile','-w']),'wc: badfile: No such file or directory');
// };