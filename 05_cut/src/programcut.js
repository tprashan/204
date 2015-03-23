var fs = require('fs');
var lib = require('./cutlib.js').lib;
var cut = {};
exports.cut = cut;

cut.giveCharFromFileOfGivenValue = function(file,value){
	if(fs.existsSync(file)){
		var text = fs.readFileSync(file, 'utf8');
		return lib.getCharOfGivenvalue(text,value);
	}
	else{
		return lib.fileErrorTemplete(file);
	}
};

cut.giveTextFromTabOfGivenValue = function(file,value){
	if(fs.existsSync(file)){
		var text = fs.readFileSync(file, 'utf8');
		return lib.getArrayFromTab(text,value);
	}
	else{
		return lib.fileErrorTemplete(file);
	}
};


var flagOptions = {"-c":cut.giveCharFromFileOfGivenValue,
				   "-f":cut.giveTextFromTabOfGivenValue};

				   
cut.runCut = function(file,option){
	if(option!=undefined){
		var valueOfOption = lib.getDigitFromString(option);
		var flag = lib.getFirstTwoChar(option);
		return flagOptions[flag](file,valueOfOption)
	}
	else{ return lib.errorTemplete();}
};

				  	
