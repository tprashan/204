var fs = require('fs');
var lib = require('./uniqlib.js').lib;
var uniq = {};
exports.uniq = uniq;


var flagOption = {"-c":lib.getDuplicateLineNumber,"-d":lib.reduceDuplicateLine,
                  "-D":lib.getDuplicateLines,"-u":lib.getUniqLines,"-i":lib.workWithI }


uniq.fileTextWithOutDuplicateLine = function(file){
	var text = fs.readFileSync(file, 'utf8');
	return lib.getLine(text).join("\r\n");
};

uniq.workWithMinusCflag = function(text,validFlags){
	var d_or_uArray = lib.getMinus_dOrMinus_u (validFlags);
	if(validFlags.indexOf("-D")>=0){return lib.DisplayCountError();}
	else if(validFlags.indexOf("-u")==-1 && validFlags.indexOf("-d")==-1){return flagOption["-c"](text).join("\r\n");}
	else if(d_or_uArray[d_or_uArray.length-1]=="-u"){
		var getTextFromU = flagOption["-u"](text).join("\r\n");return flagOption["-c"](getTextFromU).join("\r\n")
	 }
 	else if(d_or_uArray[d_or_uArray.length-1]=="-d"){
		var getTextFromC = flagOption["-c"](text).join("\r\n");
		return lib.getDuplicateLineNumberMoreThanOne(getTextFromC).join("\r\n")
	 }
};

uniq.workWithMultipleOptions = function(file,flag){
	var text = fs.readFileSync(file, 'utf8');
	if(flag.indexOf("-c")>=0){return uniq.workWithMinusCflag(text,flag) }
	return flagOption[flag[flag.length-1]](text).join("\r\n");
};

uniq.ignoreCasesOrCharOrLine = function(file,flag){ 
	var text = fs.readFileSync(file, 'utf8');
	var text = text.toLowerCase();
	if(flag.length==0){return flagOption["-i"](text);}
	if(flag.indexOf("-c")>=0){return uniq.workWithMinusCflag(text,flag) }
	return flagOption[flag[flag.length-1]](text).join("\r\n");
};

uniq.workWithFlags = function(file,flags){
	var seperateFlags = lib.getValidFlag(flags);
	var validFlags = seperateFlags[0]; var invalidFlags = seperateFlags[1];
	var i_Flags = seperateFlags[2]; var wrongFlag = lib.getWrongMinusWord(i_Flags);	
	var special_Flags = lib.getWriteMinusWord(i_Flags);

	(wrongFlag.length>=1)&&process.exit(0);
	return (invalidFlags.length>0)? lib.DisplayError(invalidFlags[0]):(i_Flags.indexOf("-i")==-1)
								  ? uniq.workWithMultipleOptions(file,validFlags,special_Flags)
								  : uniq.ignoreCasesOrCharOrLine(file,validFlags,special_Flags)
};


uniq.runUniq = function(array){
	var fileArray = lib.getFile(array);
	var flagArray = lib.getFlag(array);
	if(flagArray.indexOf("--help")>=0){return lib.helpTEMPLET()}
	else if(fileArray.length>1)
		return process.exit(0);
	else if(flagArray.length==0)
		return uniq.fileTextWithOutDuplicateLine(fileArray[0]);
	else
		return uniq.workWithFlags(fileArray[0],flagArray)
};
