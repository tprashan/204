var fun = require('./funModule.js').fun;
var fun1 = require('./version2flag.js').fun1;
var assert = require ("assert");
var fs = require ('fs');
var test = {};
exports.test = test;

test ["check text is available or not"] = function(){
	assert.ok(false==fun.checkText(""));
	assert.ok(true==fun.checkText("this is baby"));
};

test ["check text is available in a file or not"] = function(){
	assert.ok(false==fun.checkTextInFile("two.txt"));
	assert.ok(true==fun.checkTextInFile("one.txt"));
};

test ["read text from a file"] = function(){
	assert.deepEqual(fs.readFileSync("one.txt",'utf8'),fun.readTextFromFile("one.txt"));
	assert.notEqual(""==fun.readTextFromFile("one.txt"));
};

test ["read the path of a file"] = function(){
	assert.deepEqual('c:\\Users\\tprashan\\Dropbox\\step_prashant\\jsAssignments\\04_wc\\one.txt',fun.readPath('one.txt'));
	assert.notEqual('wc: main.js: No such file or directory'==fun.readPath('one.txt'));
};

test ["check file is in current directory or not"] = function(){
	assert.ok(false==fun.checkFileInDirectory("main.txt"));
	assert.ok(true==fun.checkFileInDirectory("one.txt"));
};

test ["count the bytes in a string"] = function(){
	assert.deepEqual(11,fun.countBytesinFile("hi prashant"));
	assert.deepEqual(20,fun.countBytesinFile("hi prashant tripathi"));
};

test ["count the bytes in a file"] = function(){
	assert.deepEqual(48,fun.countBytesinFile("one.txt"));
	assert.deepEqual(0,fun.countBytesinFile("two.txt"));
};

test ["count the words in a string"] = function(){
	assert.deepEqual(2,fun.countWordsinFile("hi prashant"));
	assert.deepEqual(3,fun.countWordsinFile("hi prashant tripathi"));
}

test ["count the words in a file"] = function(){
	assert.deepEqual(10,fun.countWordsinFile("one.txt"));
	assert.deepEqual(0,fun.countWordsinFile("two.txt"));
};

test ["count the lines in a file"] = function(){
	assert.deepEqual(2,fun.countLinesinFile("one.txt"));
	assert.deepEqual(0,fun.countLinesinFile("two.txt"));
};

test ["count the line in a string"] = function(){
	assert.deepEqual(1,fun.countLinesinFile("hi \n prashant"));
	assert.deepEqual(2,fun.countLinesinFile("hi \n prashant \n tripathi"));
}

test ["find the longest lines in a file"] = function(){
	assert.deepEqual(26,fun.longestLine("one.txt"));
	assert.deepEqual(0,fun.longestLine("two.txt"));
};

test ["find array of unique element"] = function(){
	var x=[1,1,2,3,3,5,5,6,6,6,7]
	var y=[2,2,5,5,5,3,3]
	var z=[9,9,9,9,1,3,4]
	assert.deepEqual([1,2,3,5,6,7],fun.reduceDuplicate(x));
	assert.deepEqual([2,5,3],fun.reduceDuplicate(y));
	assert.deepEqual([9,1,3,4],fun.reduceDuplicate(z));
};

test ["add elements of arrays and gives array of total"] = function(){
	var x=[1,1,2,3,3,5,5]
	var y=[2,2,5,5,5,3,3]
	var z=[3,3,7,8,8,8,8]
	assert.deepEqual(z,fun.addArrayElement(x,y));
};

test ["add elements of arrayOfarray and gives array of total"] = function(){
	var x=[[1,1,2,3,3,5,5,"a"],[2,2,5,5,5,3,3,"b"],[1,2,3,4,5,6,7,"c"]]
	var z=[4,5,10,12,13,14,15]
	assert.deepEqual(z,fun.addArrayofarrayElement(x));
};

test ["find the String that is start with - characters"] = function(){
	assert.deepEqual(true,fun.findwordStartWithMinus("-c"));
	assert.deepEqual(false,fun.findwordStartWithMinus("two.txt"));
	assert.deepEqual(true,fun.findwordStartWithMinus("--chars"));
};

test ["find any word of array  is start with - characters"] = function(){
	var x = ["word","char","-wor","dog"];
	var y = ["word","char","word","dog"];
	assert.deepEqual(true,fun.findarrayHavewordStartWithMinus(x));
	assert.deepEqual(false,fun.findarrayHavewordStartWithMinus(y));
};

test ["find  index of any word of array  is start with - characters"] = function(){
	var x = ["word","char","-wor","dog"];
	var y = ["word","char","word","dog"];
	assert.deepEqual(2,fun.findindexOfminusWord(x));
	assert.deepEqual(0,fun.findindexOfminusWord(y));
};

test ["find the String is flag or not"] = function(){
	assert.deepEqual(true,fun1.findFlags("-c"));
	assert.deepEqual(false,fun1.findFlags("two.txt"));
	assert.deepEqual(true,fun1.findFlags("--chars"));
};

test ["find the String will take characters or not"] = function(){
	assert.deepEqual(true,fun1.findChar("-c"));
	assert.deepEqual(false,fun1.findChar("two.txt"));
	assert.deepEqual(true,fun1.findChar("--chars"));
};

test ["find the String will take words or not"] = function(){
	assert.deepEqual(true,fun1.findWords("-w"));
	assert.deepEqual(false,fun1.findWords("two.txt"));
	assert.deepEqual(true,fun1.findWords("--wor"));
};

test ["find the String will take lines or not"] = function(){
	assert.deepEqual(true,fun1.findLines("-l"));
	assert.deepEqual(false,fun1.findLines("two.txt"));
	assert.deepEqual(true,fun1.findLines("--lines"));
};

test ["find the String will take longestlines or not"] = function(){
	assert.deepEqual(true,fun1.longestLine("-L"));
	assert.deepEqual(false,fun1.longestLine("two.txt"));
	assert.deepEqual(true,fun1.longestLine("--max-li"));
};

test ["find there is any file or not"] = function(){
	assert.deepEqual(true,fun1.findFile("one.txt"));
	assert.deepEqual(false,fun1.findFile("-"));
	assert.deepEqual(true,fun1.findFile("two.txt"));
};

test ["find in array there is any file or not"] = function(){
	assert.deepEqual(true,fun1.findFileinArray(["one.txt","--","three.txt"]));
	assert.deepEqual(false,fun1.findFileinArray(["-"]));
	assert.deepEqual(true,fun1.findFileinArray(["-","-c","two.txt"]));
};

test ["find there is -word in a array or not"] = function(){
	assert.deepEqual(true,fun1.findminuswordinArray(["one.txt","-","three.txt"]));
	assert.deepEqual(false,fun1.findminuswordinArray(["--"]));
	assert.deepEqual(true,fun1.findminuswordinArray(["-","-c","two.txt"]));
};

test ["find there is -- word in a array or not"] = function(){
	assert.deepEqual(true,fun1.findDminuswordinArray(["one.txt","--","three.txt"]));
	assert.deepEqual(false,fun1.findDminuswordinArray(["-"]));
	assert.deepEqual(true,fun1.findDminuswordinArray(["--","-c","two.txt"]));
};

test ["find array without - word"] = function(){
	assert.deepEqual(["one.txt","three.txt"],fun1.findArrayWithoutminusWord(["one.txt","-","three.txt"]));
	assert.deepEqual(["--"],fun1.findArrayWithoutminusWord(["--"]));
	assert.deepEqual(["-c","two.txt"],fun1.findArrayWithoutminusWord(["-","-c","two.txt"]));
};

test ["find array without first -- word"] = function(){
	assert.deepEqual(["one.txt",,"three.txt","--"],fun1.findArrayWithoutFirstminusWord(["one.txt","--","three.txt","--"]));
	assert.deepEqual([],fun1.findArrayWithoutFirstminusWord(["--"]));
	assert.deepEqual([,"--","two.txt"],fun1.findArrayWithoutFirstminusWord(["--","--","two.txt"]));
};

test ["find array without - or -- word"] = function(){
	assert.deepEqual(["one.txt","three.txt"],fun1.findArrayWithoutBothminusWord(["one.txt","--","three.txt"]));
	assert.deepEqual([],fun1.findArrayWithoutBothminusWord(["-"]));
	assert.deepEqual(["-c","two.txt"],fun1.findArrayWithoutBothminusWord(["--","-c","two.txt"]));
};

test ["find file is exist in a array or not"] = function(){
	assert.deepEqual(true,fun1.findFileInArray(["one.txt","-","three.txt"]));
	assert.deepEqual(false,fun1.findFileInArray(["--"]));
	assert.deepEqual(true,fun1.findFileInArray(["-","-c","two.txt"]));
};

test ["find long line count from array"] = function(){
	assert.deepEqual(26,fun1.findDiffIndValueInArray([48,10,2,26,"four.txt"],[48,10,2,"four.txt"]));
	assert.deepEqual(26,fun1.findDiffIndValueInArray([48,26,"one.txt"],[48,"one.txt"]));
	assert.deepEqual(26,fun1.findDiffIndValueInArray([26,"two.txt"],["two.txt"]));
};

test ["find long line count from arrayOfarray and gives long line's array"] = function(){
	var x=[[48,10,2,26,"one.txt"],[26,88,99,45,"two.txt"],[12,45,64,23,"three.txt"],[23,42,98,33,"four.txt"]];
	var y=[[48,10,2,"one.txt"],[26,88,99,"two.txt"],[12,45,64,"three.txt"],[23,42,98,"four.txt"]];
	var z=[26,45,23,33];
	assert.deepEqual(z,fun1.findDiffIndValueFromArrayOfarray(x,y));
};
test ["find max from array"] = function(){
	assert.deepEqual(48,fun1.findmaxValueInArray([48,10,2,26]));
	assert.deepEqual(55,fun1.findmaxValueInArray([48,26,55]));
	assert.deepEqual(30,fun1.findmaxValueInArray([26,30]));
};

test ["find array without first -- word"] = function(){
	assert.deepEqual(["one.txt",,"three.txt","--"],fun1.findArrayWithoutFirstminusWord(["one.txt","--","three.txt","--"]));
	assert.deepEqual([],fun1.findArrayWithoutFirstminusWord(["--"]));
	assert.deepEqual([,"--","two.txt"],fun1.findArrayWithoutFirstminusWord(["--","--","two.txt"]));
};


test ["find Invalid flag From Mix Flags"] = function(){
	assert.deepEqual(true,fun1.findInvalidflagFromMixFlag("lwc"));
	assert.deepEqual(false,fun1.findInvalidflagFromMixFlag("lwd"));
};


test ["filter valide flag from array of invalid flags"] = function(){
	assert.deepEqual(["-l","-c","-w","-l","-w","-l","-w","-c"],fun1.findValidFlag(["-d","-lcw","-lw","-lwc"]));
	assert.deepEqual([],fun1.findValidFlag(["--","-lwd"]));
	assert.deepEqual(["-l","-w","-c","-c","-c"],fun1.findValidFlag(["--","-lwccc","--lwc"]));
};