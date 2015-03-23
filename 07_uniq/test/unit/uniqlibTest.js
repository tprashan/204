var assert = require('assert');
var lib = require('../../src/uniqlib.js').lib;
var test = {};
exports.test = test;

test ["lines array of a string"] = function(){
	assert.deepEqual(["hi "," prashant"],lib.getLine("hi \r\n prashant"));
	assert.deepEqual(["hi  "," prashant "," tripathi"],lib.getLine("hi  \r\n prashant \r\n tripathi"));
};

test ["remove duplicate continous lines"] = function(){
	assert.deepEqual(["hi","prashant"],lib.getLine("hi\r\nprashant\r\nprashant"));
	assert.deepEqual(["hi","prashant","tripathi"],lib.getLine("hi\r\nprashant\r\ntripathi\r\ntripathi"));
};

test ["reduce duplicate continous lines array into single line array"] = function(){
	assert.deepEqual(["prashant","tripathi"],lib.reduceDuplicateLine("hi\r\nprashant\r\nprashant\r\ntripathi\r\ntripathi"));
	assert.deepEqual([],lib.reduceDuplicateLine("hi\r\nprashant\r\ntripathi\r\nprashant"));
	assert.deepEqual(["prashant",],lib.reduceDuplicateLine("hi\r\nprashant\r\nprashant"));
	assert.deepEqual(["tripathi"],lib.reduceDuplicateLine("hi\r\nprashant\r\ntripathi\r\ntripathi"));
};

test ["find duplicate continous lines array"] = function(){
	assert.deepEqual(["prashant","prashant","tripathi","tripathi"],lib.getDuplicateLines("hi\r\nprashant\r\nprashant\r\ntripathi\r\ntripathi"));
	assert.deepEqual([],lib.getDuplicateLines("hi\r\nprashant\r\ntripathi\r\nprashant"));
	assert.deepEqual(["prashant","prashant"],lib.getDuplicateLines("hi\r\nprashant\r\nprashant"));
	assert.deepEqual(["tripathi","tripathi"],lib.getDuplicateLines("hi\r\nprashant\r\ntripathi\r\ntripathi"));
};

test ["kept duplicate continous lines"] = function(){
	assert.deepEqual(["\t"+1+" "+"hi","\t"+2+" "+"prashant","\t"+1+" "+"tripathi"],lib.getDuplicateLineNumber("hi\r\nprashant\r\nprashant\r\ntripathi"));
	assert.deepEqual(["\t"+1+" "+"hi","\t"+1+" " +"prashant","\t"+2+" " +"tripathi"],lib.getDuplicateLineNumber("hi\r\nprashant\r\ntripathi\r\ntripathi"));
};


test ["find uniques lines of array"] = function(){
	assert.deepEqual(["hi","gadbad"],lib.getUniqLines("hi\r\nprashant\r\nprashant\r\ntripathi\r\ntripathi\r\ngadbad"));
	assert.deepEqual(["hi","prashant","tripathi","prashant"],lib.getUniqLines("hi\r\nprashant\r\ntripathi\r\nprashant"));
	assert.deepEqual(["hi"],lib.getUniqLines("hi\r\nprashant\r\nprashant"));
	assert.deepEqual(["hi","prashant"],lib.getUniqLines("hi\r\nprashant\r\ntripathi\r\ntripathi"));
	assert.deepEqual(["hi"],lib.getUniqLines("hi\r\nprashant\r\nprashant\r\ntripathi\r\ntripathi"));
};

test ["when use -i option it should ignore the case of text"] = function(){
	assert.deepEqual(["prashant","prashant","tripathi","tripathi"],lib.convertCase("hi\r\nprashant\r\nPrashant\r\nTripathi\r\ntripathi"));
	assert.deepEqual([],lib.convertCase("hi\r\nprashant\r\ntripathi\r\nPrashant"));
	assert.deepEqual(["prashant","prashant"],lib.convertCase("hi\r\nprashant\r\nPrashant"));
	assert.deepEqual(["tripathi","tripathi"],lib.convertCase("hi\r\nprashant\r\nTRipathi\r\ntripathi"));
};

test ["find array of valid and invalid flag"] = function(){
	assert.deepEqual([["-c","-d"],["-l","-a"],["-i"]],lib.getValidFlag(["-c","-l","-d","-a","-i"]));
	assert.deepEqual([["-D","-u"],["-x","-p"],[]],lib.getValidFlag(["-x","-D","-u","-p"]));
};

test ["take -i from invalid flag"] = function(){
	assert.deepEqual(["-i","-i"],lib.getMinusI(["-i","-l","-i","-a"]));
	assert.deepEqual(["-i","-i"],lib.getMinusI(["-x","-i","-u","-i"]));
};

test ["find uniques lines of array by matching only 2_or given character"] = function(){
	assert.deepEqual(["hi","gadbad"],lib.getUniqLines("hi\r\nprashant\r\nprashant\r\ntripathi\r\ntripathi\r\ngadbad"));
	assert.deepEqual(["hi","prashant","tripathi","prashant"],lib.getUniqLines("hi\r\nprashant\r\ntripathi\r\nprashant"));
	assert.deepEqual(["hi"],lib.getUniqLines("hi\r\nprashant\r\nprashant"));
	assert.deepEqual(["hi","prashant"],lib.getUniqLines("hi\r\nprashant\r\ntripathi\r\ntripathi"));
	assert.deepEqual(["hi"],lib.getUniqLines("hi\r\nprashant\r\nprashant\r\ntripathi\r\ntripathi"));
};

test ["display error of file or flag"] = function(){
	assert.deepEqual("uniq: invalid option "+"one.txt" +"\r\nTry `uniq --help' for more information.",lib.DisplayError("one.txt"));
};

test ["take -u and -d from invalid flag"] = function(){
	assert.deepEqual(["-u","-d"],lib.getMinus_dOrMinus_u(["-u","-d","-i","-a"]));
	assert.deepEqual(["-d","-u","-d"],lib.getMinus_dOrMinus_u(["-g","-d","-k","-u","-d"]));
};

test ["take -w and -s and -f from invalid flag"] = function(){
	assert.deepEqual(["-w","-f"],lib.getMinus_wOrMinus_f(["-w","-f","-i","-a"]));
	assert.deepEqual(["-s","-f","-w","-f"],lib.getMinus_wOrMinus_f(["-s","-f","-k","-w","-f"]));
};

test ["take  -r10 and -j15 from i_flag array"] = function(){
	assert.deepEqual(["-r10","-j15"],lib.getWrongMinusWord(["-w10","-f12","-i","-s12","-r10","-j15"]));
};

test ["take  -w10 and -f12 from i_flag array"] = function(){
	assert.deepEqual(["-w10","-f12","-s12"],lib.getWriteMinusWord(["-w10","-f12","-i","-s12","-r10","-j15"]));
};

test ["kept duplicate continous lines which is more than one"] = function(){
	assert.deepEqual(["\t"+2+" "+"prashant","\t"+2+" "+"tripathi"],lib.getDuplicateLineNumberMoreThanOne("\t1 hi\r\n\t1 prashant\r\n\t2 prashant\r\n\t2 tripathi"));
	assert.deepEqual(["\t"+2+" " +"tripathi"],lib.getDuplicateLineNumberMoreThanOne("\t1 hi\r\n\t1 prashant\r\n\t1 prashant\r\n\t2 tripathi"));
};

test ["match only first 2 character of diff lines "] = function(){
	assert.deepEqual(["hi","prashant"],lib.checkAccordingChar("hi\r\nprashant\r\nprashant"));
	assert.deepEqual(["hi","prashant","tripathi"],lib.checkAccordingChar("hi\r\nprashant\r\ntripathi\r\ntripathi"));
};