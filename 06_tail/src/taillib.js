var lib = {};
exports.lib = lib;
var fs = require('fs');

var charOptions = ["-c","--b","--by","--byt","--byte","--bytes","--bytes="];
var lineOptions = ["-n","--l","--li","--lin","--line","--lines","--lines="];
var verboseOption = ["-q","--q","--qu","--qui","--quie","--quiet","-v","--v",
					 "--ve","--ver","--verb","--verbo","--verbos","--verbose","--silent","--help"];

var flags = charOptions.concat(lineOptions);

var helptemplet = "Usage: head [OPTION]... [FILE]...\
					\r\nPrint first 10 lines of each FILE to standard output.\
					\r\nWith more than one FILE, precede each with a header giving the file name.\
					\r\nWith no FILE, or when FILE is -, read not standard input because standard input banaya nahi he.\
					\r\n\
					\r\n  -c, --bytes=SIZE         print first SIZE bytes.\
					\r\n  -n, --lines=NUMBER       print first NUMBER lines instead of first 10\
					\r\n  -q, --quiet, --silent    never print headers giving file names\
					\r\n  -v, --verbose            always print headers giving file names\
					\r\n  --help               display this help and exit\
					\r\n\
					\r\nSIZE may have a multiplier suffix: b for 512, k for 1K, m for 1 Meg.\
					\r\nIf -VALUE is used as first OPTION, read -c VALUE when one of\
					\r\nmultipliers bkm follows concatenated, else read -n VALUE."

lib.isNotEmpty = function(x){return x!==''};

lib.getLine = function(text){
	var lines = text.split('\n');
	return  lines.length-1;
};

lib.getMaxTenLine = function(text){
	return (lib.getLine(text)<=10)
};

lib.getBytes = function(text,value){
	return text.slice(0,value);
};

lib.getBytesForTail = function(text,value){
	return text.slice(text.length-value,text.length);
};

lib.getLines = function(text,value){
    var text = text.split("\r\n");
    if(text.length>value)
    	text.length = value;
    return text.join("\r\n");
};

lib.getLinesForTail = function(text,value){
    var text = text.split("\r\n");
    var text = text.reverse();
    if(text.length>value)
    	text.length = value;
    var text = text.reverse();
    return text.join("\r\n");
};

lib.getDigit = function(string){
	var digit=string.match(/\d/g);
	if(digit==null)
		return false;
	return digit.join("");
};

lib.getSeperateFlag = function(string){
	var SeperateFlag=string.match(/\D/g);
	if(SeperateFlag==null)
		return false;
	return SeperateFlag.join("");
};

lib.getDigitFromWord = function(array){
	var digitsStorage = [];
	array.forEach(function(word){
		lib.getDigit(word)?digitsStorage.push(lib.getDigit(word)) : digitsStorage.push("undefined")
	})
	return digitsStorage;
};

lib.getWordFromWordWithDigit = function(array){
	var flagStorage = [];
	array.forEach(function(flag){
		lib.getSeperateFlag(flag)?flagStorage.push(lib.getSeperateFlag(flag)) : flagStorage.push("undefined")
	});
	return flagStorage;
};

lib.findValidFlag = function(array){
	var result = [];
	array.forEach(function(ele){
		(ele.match(/[0-9]$/g))&&(flags.indexOf(ele.match(/\D/g).join(""))>=0)&&result.push(ele);
	});
	return result;
};

lib.findInValidFlag = function(array){
	var result = [];
	array.forEach(function(ele){
		if(!(ele.match(/[0-9]$/g)))
			result.push(ele);
		else if(!(ele.match(/[a-z]/g)))
			result.push(ele)
	});
	return result;
};

lib.findVerboseFlag = function(array){
	var result = [];
	array.forEach(function(ele){
		(verboseOption.indexOf(ele)!= -1)&&result.push(ele);
	});
	return result;
};

lib.filterTheOption = function(args){
   var existFiles = [];
   var flags = [];
   var arrayOfBoth = [];
   args.forEach(function(word){
   	word.match(/^-|^--/) ? flags.push(word) : existFiles.push(word)
   })
   arrayOfBoth.push(existFiles,flags);
   return arrayOfBoth;
};

lib.findWrongFlag = function(inv_array,ver_array){
	return inv_array.filter(function(ele,index){
		return ver_array.indexOf(ele)== -1
	})
};

lib.helpTEMPLET = function(){
	return helptemplet;
};


lib.adjustSpace = function(array){
	var fileArray = []; var flagArray = [];
	array.forEach(function(ele){
		(fs.existsSync(ele))?fileArray.push(ele):flagArray.push(ele)
	})
	flagArray.forEach(function(ele,index){
		if(flags.indexOf(ele)>=0)
			flagArray.splice(index,2,ele+flagArray[index+1]);
	})
	return fileArray.concat(flagArray);
};