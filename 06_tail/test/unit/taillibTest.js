var assert = require('assert');
var lib = require('../../src/taillib.js').lib;
var test = {};
exports.test = test;

test ["count the lines in a string"] = function(){
	assert.deepEqual(1,lib.getLine("hi \n prashant"));
	assert.deepEqual(2,lib.getLine("hi  \n prashant \n tripathi"));
};

test ["give maximum 10 line if text have more than 10 line"] = function(){
	assert.deepEqual(true,lib.getMaxTenLine("hi \n prashant"));
	assert.deepEqual(false,lib.getMaxTenLine("hi\nprashant\ntripathi\nhi\nprashant\ntripathi\nhi\nprashant\ntripathi\nhi\nprashant\ntripathi"));
};

test ["count the bytes in a string of given number"] = function(){
	assert.deepEqual("hi",lib.getBytes(("hi\r\nprashant"),2));
	assert.deepEqual("h i\r\npr",lib.getBytes(("h i\r\nprashant\r\ntripathi"),7));
};

test ["print the lines in a string of given nuumber"] = function(){
	assert.deepEqual("hi",lib.getLines(("hi\r\nprashant"),1));
	assert.deepEqual("hi\r\nprashant",lib.getLines(("hi\r\nprashant\r\ntripathi\r\ntripa"),2));
};

test ["filter the file and other option"] = function(){
	assert.deepEqual([["../../test/integration/one.txt","../../test/integration/three.txt"],["-c10","--bytes=20"]],
		             lib.filterTheOption(["../../test/integration/one.txt","-c10","--bytes=20","../../test/integration/three.txt"]));
	assert.deepEqual([["../../test/integration/two.txt","../../test/integration/three.txt"],["-c10","--byt=20"]],
		             lib.filterTheOption(["../../test/integration/two.txt","-c10","--byt=20","../../test/integration/three.txt"]));
};

// test ["find correct flag and neglect wrong flag"] = function(){
// 	assert.deepEqual(["-c10","-c 10","--bytes=10","-- bytes = 10","-- byt=10"],lib.getCorrectFlags(["-c10","-cc10","-c 10","--bytes=10","-- bytes = 10","-- byt=10","---byt=10"]))
// 	assert.deepEqual(["-n10","-n 10","--lines=10","-- lines = 10","-- lin=10"],lib.getCorrectFlags(["-n10","-nn10","-n 10","--lines=10","-- lines = 10","-- lin=10","---lin=10"]))
// };

test ["find digits from a string"] = function(){
	assert.deepEqual("10",lib.getDigit("--lines10"));
	assert.deepEqual("50",lib.getDigit("--bytes50"));
};

test ["find digits from a string of array"] = function(){
	assert.deepEqual(["10","undefined","40"],lib.getDigitFromWord(["--lines10","--c","-byt40"]));
	assert.deepEqual(["50","20","undefined"],lib.getDigitFromWord(["--bytes50","-ch20","--bt"]));
};

test ["find flag from a string which have digit also"] = function(){
	assert.deepEqual("--lines",lib.getSeperateFlag("--lines10"));
	assert.deepEqual("--bytes",lib.getSeperateFlag("--bytes50"));
};

test ["find only word from a string of array which have digits also."] = function(){
	assert.deepEqual(["--lines","--c","-byt"],lib.getWordFromWordWithDigit(["--lines10","--c","-byt40"]));
	assert.deepEqual(["--bytes","-ch","--bt"],lib.getWordFromWordWithDigit(["--bytes50","-ch20","--bt"]));
};

test ["find valid flags from array."] = function(){
	assert.deepEqual(["--lines=10","-c10","--byt40"],lib.findValidFlag(["--lines=10","-c10","--byt40","-n","-nn10"]));
	assert.deepEqual(["--bytes20","-c20","--by20"],lib.findValidFlag(["--bytes20","--ch20","-c20","--by20"]));
};

test ["find invalid flags from array."] = function(){
	assert.deepEqual(["-n"],lib.findInValidFlag(["--lines=10","--c10","-byt40","-n"]));
	assert.deepEqual(["-c"],lib.findInValidFlag(["--bytes20","-ch20","-c","--bt20"]));
};

test ["find verbose and quiet flags from array."] = function(){
	assert.deepEqual(["--verbose","-v"],lib.findVerboseFlag(["--verbose","--c10","-byt40","-v"]));
	assert.deepEqual(["--quiet","-q"],lib.findVerboseFlag(["--quiet","-ch20","-q","--bt20"]));
};

test ["find different flags from invalid array that is not present in verbose."] = function(){
	assert.deepEqual(["-lines","-dyt40"],lib.findWrongFlag(["-lines","-v","-dyt40","-q"],["-v","-q"]));
	assert.deepEqual(["-lines","-dyt40"],lib.findWrongFlag(["-lines","-dyt40"],[]));

};