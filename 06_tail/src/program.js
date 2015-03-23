var fs = require('fs');
var lib = require('./taillib.js').lib;
var tail = {};
exports.tail = tail; 

var charOptions = ["-c","--b","--by","--byt","--byte","--bytes","--bytes="];
var lineOptions = ["-n","--l","--li","--lin","--line","--lines","--lines","--lines="];
var flagsArray = charOptions.concat(lineOptions);

tail.giveMaxTenLine = function(text){
	var	text=text.split("\r\n");
	var	text = text.reverse();
		text.length=10;
	var	text = text.reverse();
		return text.join("\r\n");
}

tail.giveText = function(file){
	if(fs.existsSync(file)){
		text = fs.readFileSync(file, 'utf8');
		return (lib.getMaxTenLine(text)) ? text : tail.giveMaxTenLine(text);
	}
	else{
		return tail.displayFileError(file);
	}
};

tail.giveTextAccordingValueOfChars = function(file,value){
	if(fs.existsSync(file)){
		text = fs.readFileSync(file, 'utf8');
		return lib.getBytesForTail(text,value);
	}
	else{
		return tail.displayFileError(file);
	}
};

tail.giveTextAccordingValueOfLines = function(file,value){
	if(fs.existsSync(file)){
		text = fs.readFileSync(file, 'utf8');
		return lib.getLinesForTail(text,value);
	}
	else{
		return tail.displayFileError(file);
	}
};

tail.workWithHeader = function(files,file,verbose){
	if((verbose.length==0)&&(files.length>=2)&&fs.existsSync(file)){
		return "======>"+ file +"<======" ;
	}
	else if((verbose[verbose.length-1]=="-v")&&fs.existsSync(file)){
		return "======>"+ file +"<======" ;
	}
}

tail.workWithFile = function(files,flags,verbose){
	var result = [];
	var flagDigit;
	var flag;
	var faltu ;
	if(flags.length>=1){
		flagDigit = flags[flags.length-1].match(/\d/g).join("");
		flag = flags[flags.length-1].match(/\D/g).join("");
	}
	if(flagDigit=="0"){
		return tail.displayFlagError(flags[flags.length-1]);
	}
	else{
		files.forEach(function(file,index){
			(tail.workWithHeader(files,file,verbose))&&(result.push(tail.workWithHeader(files,file,verbose)))
			
			flags.length==0? result.push(tail.giveText(file)) : charOptions.indexOf(flag)>=0
			                 ? result.push(tail.giveTextAccordingValueOfChars(file,flagDigit)): lineOptions.indexOf(flag)>=0
			                 ? result.push(tail.giveTextAccordingValueOfLines(file,flagDigit)) : faltu="" 
		});
		return result.join("\r\n");
	}
}

tail.workWithOption = function(args){
    var filterOption = lib.filterTheOption(args);
    var files = filterOption[0]; var flags = filterOption[1];
    var inValidFlag = lib.findInValidFlag(flags);
    var validFlag = lib.findValidFlag(flags);
    var verbose = lib.findVerboseFlag(flags);

    if(verbose.indexOf("--help")>=0){ return lib.helpTEMPLET();}
	(files.length==0)&&console.log("Give a file name because standard input is not working");

	if((inValidFlag.length>=1)&&(inValidFlag.length>verbose.length)){
		var wrongFlag = lib.findWrongFlag(inValidFlag,verbose)
		return tail.displayFlagError(wrongFlag[0]);
	}
	else{
		return tail.workWithFile(files,validFlag,verbose);
	}
};

tail.displayFileError = function(file){
	var error = "tail:"+" "+file+": No such file or directory."
	return error;
};

tail.displayFlagError = function(flag){
	var error = "tail: invalid option "+ flag+"\r\nTry `tail --help'for more information."
	return error;
}