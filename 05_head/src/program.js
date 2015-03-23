var fs = require('fs');
var lib = require('./headlib.js').lib;
var head = {};
exports.head = head; 

var charOptions = ["-c","--b","--by","--byt","--byte","--bytes","--bytes="];
var lineOptions = ["-n","--l","--li","--lin","--line","--lines","--lines","--lines="];
var flagsArray = charOptions.concat(lineOptions);

head.giveMaxTenLine = function(text){
	var text=text.split("\r\n");
		text.length=10;
		return text.join("\r\n");
}

head.giveText = function(file){
	if(fs.existsSync(file)){
		text = fs.readFileSync(file, 'utf8');
		return (lib.getMaxTenLine(text)) ? text : head.giveMaxTenLine(text);
	}
	else{
		return head.displayFileError(file);
	}
};

head.giveTextAccordingValueOfChars = function(file,value){
	if(fs.existsSync(file)){
		text = fs.readFileSync(file, 'utf8');
		return lib.getBytes(text,value);
	}
	else{
		return head.displayFileError(file);
	}
};

head.giveTextAccordingValueOfLines = function(file,value){
	if(fs.existsSync(file)){
		text = fs.readFileSync(file, 'utf8');
		return lib.getLines(text,value);
	}
	else{
		return head.displayFileError(file);
	}
};

head.workWithHeader = function(files,file,verbose){
	if((verbose.length==0)&&(files.length>=2)&&fs.existsSync(file)){
		return "===========>"+ file +"<===========" ;
	}
	else if((verbose[verbose.length-1]=="-v")&&fs.existsSync(file)){
		return "===========>"+ file +"<===========" ;
	}
}

head.workWithFile = function(files,flags,verbose){
	var result = []; var flagDigit; var flag;
	if(flags.length>=1){
		flagDigit = flags[flags.length-1].match(/\d/g).join("");
		flag = flags[flags.length-1].match(/\D/g).join("");
	}
		files.forEach(function(file,index){
			(head.workWithHeader(files,file,verbose))&&(result.push(head.workWithHeader(files,file,verbose)))
			
			flags.length==0? result.push(head.giveText(file)) : charOptions.indexOf(flag)>=0
			                 ? result.push(head.giveTextAccordingValueOfChars(file,flagDigit)): lineOptions.indexOf(flag)>=0
			                 ? result.push(head.giveTextAccordingValueOfLines(file,flagDigit)) : "" 
		});
		return result.join("\r\n");
};

head.workWithOption = function(args){
    var filterOption = lib.filterTheOption(args);
    var files = filterOption[0];var flags = filterOption[1];
    var inValidFlag = lib.findInValidFlag(flags);
    var validFlag = lib.findValidFlag(flags);
    var verbose = lib.findVerboseFlag(flags);

    if(verbose.indexOf("--help")>=0){return lib.helpTEMPLET();}

	(files.length==0)&&console.log("Give a file name because standard input is not working");

	if((inValidFlag.length>=1)&&(inValidFlag.length>verbose.length)){
		var wrongFlag = lib.findWrongFlag(inValidFlag,verbose)
		return head.displayFlagError(wrongFlag[0]);
	}
	else{
		return head.workWithFile(files,validFlag,verbose);
	}
};

head.displayFileError = function(file){
	var error = "head:"+" "+file+": No such file or directory."
	return error;
};

head.displayFlagError = function(flag){
	var error = "head: invalid option "+ flag+"\r\nTry `head --help'for more information."
	return error;
}