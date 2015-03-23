var wc = require("./funModule.js").fun;
var fun1 = {};
var fs = require("fs")
exports.fun1 = fun1;

var bytes = ["-c","--c","--ch","--cha","--char","--chars","--b","--by","--byt","--byte","--bytes"];
var words = ["-w","--w","--wo","--wor","--word","--words"];
var lines = ["-l","--l","--li","--lin","--line","--lines"];
var longestLine = ["-L","--m","--ma","--max","--max-","--max-l","--max-li","--max-lin","--max-line","--max-line",
                   "--max-line-","--max-line-l","--max-line-le","--max-line-len","--max-line-leng",
                   "--max-line-lengt","--max-line-length","--max-line-length"];

var arrayOfFlags = bytes.concat(words).concat(lines).concat(longestLine);

fun1.findBytesOrwordsOrlinesWithFlag = function(filename,flag){
	var bytesCount = wc.countBytesinFile(filename);
	var wordsCount = wc.countWordsinFile(filename);
	var linesCount = wc.countLinesinFile(filename);
	var longestlineCount = wc.longestLine(filename);

	return (flag==undefined)?[linesCount,wordsCount,bytesCount,filename]:(fun1.findChar(flag))
							? bytesCount:(fun1.findWords(flag))
							? wordsCount:(fun1.findLines(flag))
							?linesCount:(fun1.longestLine(flag))
							? wc.longestLine(filename):(!(fun1.findFlags(flag)))
							?console.log("wc: invalid option -- h"): console.log("Try `wc --help' for more information.");

};

fun1.findFlags = function(word){
	if(arrayOfFlags.indexOf(word)>=0)
		return true;
	return false;
};

fun1.findChar = function(word){
	if(bytes.indexOf(word)>=0)
		return true;
	return false;
};

fun1.findWords = function(word){
	if(words.indexOf(word)>=0)
		return true;
	return false;
};

fun1.findLines = function(word){
	if(lines.indexOf(word)>=0)
		return true;
	return false;
};

fun1.longestLine = function(word){
	if(longestLine.indexOf(word)>=0)
		return true;
	return false;
};

fun1.findFile = function(word){
	return (wc.checkFileInDirectory(word)) ? true : false ;
}

fun1.findFileinArray = function(array){
	var result = false;
	array.forEach(function(ele){
		if(fun1.findFile(ele))
			result = true;
	})
	return result;
};

fun1.findminuswordinArray = function(array){
	var result = false;
	array.forEach(function(ele){
		if(ele=="-")
			result = true;
	})
	return result;
};

fun1.findDminuswordinArray = function(array){
	var result = false;
	array.forEach(function(ele){
		if(ele=="--")
			result = true;
	})
	return result;
};

fun1.findArrayWithoutminusWord = function(array){
	var result = array.filter(function(ele){
					if(ele!="-")
						return ele;
				})
	return result;
};

fun1.findArrayWithoutFirstminusWord = function(array){
	var index=array.indexOf("--")
	delete array[index];
	return array;
};

fun1.findArrayWithoutBothminusWord = function(array){
	var result = array.filter(function(ele){
					if(ele.match(/-$|--$/))
							return false;
						return true;
				})
	return result;	
}

fun1.findFileInArray = function(array){
	var result = false;
	array.forEach(function(ele){
		if(fs.existsSync(ele))
			result = true;
	})
	return result;
};

fun1.findDiffIndValueInArray = function(array1,array2){
	return array1[array2.length-1];
};

fun1.findDiffIndValueFromArrayOfarray = function(arrayOFarr1,arrayOFarr2){
	var result = [];
	arrayOFarr1.forEach(function(arr,index){
		var ele = fun1.findDiffIndValueInArray(arr,arrayOFarr2[index]);
		result.push(ele);
	});
	return result;
};

fun1.findmaxValueInArray  = function(array){
	return array.reduce(function(ele1,ele2){{
		return ele1>ele2?ele1:ele2;
	}})
};

fun1.findInvalidflagFromMixFlag  = function(string){
	var result = true;
	if(string.match(/^-/))
		var string = string.substr(1,string.length);
	
	string.split("").forEach(function(ele){
		var ele = "-"+ele;
		(arrayOfFlags.indexOf(ele)==-1)&&(result=false)
	})
	return result;
};

fun1.findValidFlag = function(array){
	var result = [];
	var flag = [];
	array.forEach(function(ele){
		var ele = ele.substr(1,ele.length);
		 if((!(ele.match(/^-|^--/)))&&(fun1.findInvalidflagFromMixFlag(ele))){
		    ele.split("").forEach(function(ch){
		    	var chars = "-"+ch;
		    	(arrayOfFlags.indexOf(chars)>=0)&&(flag.push(chars))
			});
		 }
	});

	return flag;
}