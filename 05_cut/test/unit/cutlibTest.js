var assert = require('assert');
var lib = require('../../src/cutlib.js').lib;
var test = {};
exports.test = test;


test ["take character of given value as a string"] = function(){
	assert.deepEqual("i\r\nr",lib.getCharOfGivenvalue("hi\r\nprashant",["2"]));
	assert.deepEqual("h\r\np\r\nt",lib.getCharOfGivenvalue("hi\r\nprashant\r\ntripathi",["1"]));
};

test ["find the digit from a string"] = function(){
	assert.deepEqual(["4"],lib.getDigitFromString("-c4"));
	assert.deepEqual(["5"],lib.getDigitFromString("-c5"));
};

test ["find first two char of string"] = function(){
	assert.deepEqual("-c",lib.getFirstTwoChar("-c4"));
	assert.deepEqual("-d",lib.getFirstTwoChar("-d5,6"));
};

test [" take [2,7,4,2,6,4] and give ans [2,4,6,7] " ] = function(){
	assert.deepEqual(["2","4","6","7"],lib.getUniqArray(["2","7","4","2","6","4"]));
};


test [" take [2,7,4,4-6,6,4,4-6] and give ans [2,4-6,7] " ] = function(){
	assert.deepEqual(["2","7","4","4","5","6","6","4","4","5","6","14","15"],lib.getNumberArray(["2","7","4","4-6","6","4","4-6","14-15"]));
	assert.deepEqual(["2","7","4","4","5","6","6","4","4","5","6"],lib.getNumberArray(["2","7","4","4-6","6","4","4-6"]));
};


test [" take argument like hi\tprashant [1] and give ans hi " ] = function(){
	assert.deepEqual("hi",lib.getArrayFromTab("hi\tprashant",["1"]));
	assert.deepEqual("prashant",lib.getArrayFromTab("hi\tprashant\ttripathi",["2"]));
	assert.deepEqual("tripathi",lib.getArrayFromTab("hi\tprashant\ttripathi",["3"]));
	assert.deepEqual("",lib.getArrayFromTab("hi\tprashant\ttripathi",["4"]));
};

test ["if no tab on line -f gives whole line" ] = function(){
	assert.deepEqual("hi prashant",lib.getArrayFromTab("hi prashant",["1"]));
	assert.deepEqual("prashant",lib.getArrayFromTab("hi\tprashant\ttripathi",["2"]));
};



