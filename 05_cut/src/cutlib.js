var lib = {};
exports.lib = lib;
var fs = require('fs');

var templete = "cut: you must specify a list of bytes, characters, or fields\
				\r\nTry `cut --help' for more information."



lib.getDigitFromString = function(options){
	var getDigits = options.substr(2,options.length).split(",");
	return getDigits;
};

lib.errorTemplete = function(){
	return templete;
};

lib.getFirstTwoChar = function(string){
	var firstTwoChar = string.substr(0,2);
	return firstTwoChar;
};

lib.getUniqArray = function(array){
	var uniqArray = [];
	array.forEach(function(ele){ 
		if(uniqArray.indexOf(ele)== -1){uniqArray.push(ele)}
	});
	return uniqArray.sort(function(x,y){return x-y;});
};

lib.getNumberArray = function(array){
	var result = [];
	array.forEach(function(num){
		if(num.indexOf("-")>=0){
			var ele = num.split("-");
			for(var i=+ele[0];i<= +ele[1];i++){result.push(+i)};
		}
		else{result.push(+num);}
	});
	return result;
};

lib.getCharOfGivenvalue = function(text,value){   ////////////////.******** for -c option.
	var text = text.split("\r\n");
	var uniqvalue = lib.getNumberArray(value);
	var uniqNumValue = lib.getUniqArray(uniqvalue);
	var take_char = text.map(function(line){
		var chars = line.split("");
		return uniqNumValue.map(function(digit){ 
			return chars[digit-1];}).join("");
	});
	if(lib.getOptionHaveTwoHifen(value))
		return lib.flagErrorTemplete();
	return take_char.join("\r\n");
};

lib.getArrayFromTab = function(text,option){  //////////////////***************** for -f option.
	var lines = text.split("\r\n");
	var uniqvalue = lib.getNumberArray(option);
	var uniqNumValue = lib.getUniqArray(uniqvalue);
	var tabString = lines.map(function(line){
		var text = line.split("\t");
			if(text.length==1){return line;}
		return uniqNumValue.map(function(digit){	
				return text[digit-1];
		}).join("\t")
	})
	return tabString.join("\r\n");
};


lib.fileErrorTemplete = function(file){
	return "cut:"+" "+file+": No such file or directory"
};

lib.getOptionHaveTwoHifen = function(option){
	var result = false;
	option.forEach(function(num){
		if((num.toString().indexOf("-")>=0)&&(num.match(/[-]/g).length>1)){
			result=true;
		}	
	});
	return result;
};
lib.getundefined = function(array){
	return array.filter(function(ele){return ele!=undefined;})
};

lib.flagErrorTemplete = function(file){
	return "cut: invalid byte or field list\
			\r\nTry `cut --help' for more information."
};


lib.giveCharFromFileOfGivenValue = function(file,value){
	if(fs.existsSync(file)){
		var text = fs.readFileSync(file, 'utf8');
		return lib.getCharOfGivenvalue(text,value);
	}
	else{
		return lib.fileErrorTemplete(file);
	}
};

lib.giveTextFromTabOfGivenValue = function(file,value){
	if(fs.existsSync(file)){
		var text = fs.readFileSync(file, 'utf8');
		return lib.getArrayFromTab(text,value);
	}
	else{
		return lib.fileErrorTemplete(file);
	}
};











// lib.getNumArray = function(array){
// 	var uniqArray = lib.getUniqArray(array);
// 	uniqArray.forEach(function(ele){
// 		var hifen = ele.match(/[-]/g);
// 		if(hifen!=null&&hifen.length==1){
// 			var sepEle = ele.split("-");
// 			(uniqArray.indexOf(sepEle[0])>=0) && delete uniqArray[uniqArray.indexOf(sepEle[0])];
// 			(uniqArray.indexOf(sepEle[1])>=0) && delete uniqArray[uniqArray.indexOf(sepEle[1])];
// 		}
// 	});
// 	return lib.getundefined(uniqArray);
// };








// var tail.giveTextAccordingValueOfChars = function(file,value){
// 	if(fs.existsSync(file)){
// 		text = fs.readFileSync(file, 'utf8');
// 		return lib.getBytesForTail(text,value);
// 	}
// 	else{
// 		return tail.displayFileError(file);
// 	}
// };

// tail.giveTextAccordingValueOfLines = function(file,value){
// 	if(fs.existsSync(file)){
// 		text = fs.readFileSync(file, 'utf8');
// 		return lib.getLinesForTail(text,value);
// 	}
// 	else{
// 		return tail.displayFileError(file);
// 	}
// };
