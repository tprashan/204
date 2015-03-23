// var fs = require('fs');
// var lib = require('./headlib.js').lib;
// var head = {};
// exports.head = head; 

// var charOptions = ["-c","--b","--by","--byt","--byte","--bytes","--bytes="];
// var lineOptions = ["-n","--l","--li","--lin","--line","--lines","--lines","--lines="];
// var flagsArray = charOptions.concat(lineOptions);

// head.giveMaxTenLine = function(text){
// 	var	text=text.split("\r\n");
// 	var	text = text.reverse();
// 		text.length=10;
// 	var	text = text.reverse();
// 		return text.join("\r\n");
// }

// head.giveText = function(file){
// 	if(fs.existsSync(file)){
// 		text = fs.readFileSync(file, 'utf8');
// 		return (lib.getMaxTenLine(text)) ? text : head.giveMaxTenLine(text);
// 	}
// 	else{
// 		return head.displayFileError(file);
// 	}
// };

// head.giveTextAccordingValueOfChars = function(file,value){
// 	if(fs.existsSync(file)){
// 		text = fs.readFileSync(file, 'utf8');
// 		return lib.getBytesForTail(text,value);
// 	}
// 	else{
// 		return head.displayFileError(file);
// 	}
// };

// head.giveTextAccordingValueOfLines = function(file,value){
// 	if(fs.existsSync(file)){
// 		text = fs.readFileSync(file, 'utf8');
// 		return lib.getLinesForTail(text,value);
// 	}
// 	else{
// 		return head.displayFileError(file);
// 	}
// };

// head.workWithHeader = function(files,file,verbose){
// 	if((verbose.length==0)&&(files.length>=2)&&fs.existsSync(file)){
// 		return "======>"+ file +"<======" ;
// 	}
// 	else if((verbose[verbose.length-1]=="-v")&&fs.existsSync(file)){
// 		return "======>"+ file +"<======" ;
// 	}
// }

// head.workWithFile = function(files,flags,verbose){
// 	var result = [];
// 	var flagDigit;
// 	var flag;
// 	var faltu ;
// 	if(flags.length>=1){
// 		flagDigit = flags[flags.length-1].match(/\d/g).join("");
// 		flag = flags[flags.length-1].match(/\D/g).join("");
// 	}
// 	if(flagDigit=="0"){
// 		return head.displayFlagError(flags[flags.length-1]);
// 	}
// 	else{
// 		files.forEach(function(file,index){
// 			(head.workWithHeader(files,file,verbose))&&(result.push(head.workWithHeader(files,file,verbose)))
			
// 			flags.length==0? result.push(head.giveText(file)) : charOptions.indexOf(flag)>=0
// 			                 ? result.push(head.giveTextAccordingValueOfChars(file,flagDigit)): lineOptions.indexOf(flag)>=0
// 			                 ? result.push(head.giveTextAccordingValueOfLines(file,flagDigit)) : faltu="" 
// 		});
// 		return result.join("\r\n");
// 	}
// }

// head.workWithOption = function(args){
//     var filterOption = lib.filterTheOption(args);
//     var files = filterOption[0];
//     var flags = filterOption[1];
//     var inValidFlag = lib.findInValidFlag(flags);
//     var validFlag = lib.findValidFlag(flags);
//     var verbose = lib.findVerboseFlag(flags);

//     if(verbose.indexOf("--help")>=0){
//     	return lib.helpTEMPLET();
//     }

// 	(files.length==0)&&console.log("Give a file name because standard input is not working");

// 	if((inValidFlag.length>=1)&&(inValidFlag.length>verbose.length)){
// 		var wrongFlag = lib.findWrongFlag(inValidFlag,verbose)
// 		return head.displayFlagError(wrongFlag[0]);
// 	}
// 	else{
// 		return head.workWithFile(files,validFlag,verbose);
// 	}
// };

// head.displayFileError = function(file){
// 	var error = "head:"+" "+file+": No such file or directory."
// 	return error;
// };

// head.displayFlagError = function(flag){
// 	var error = "head: invalid option "+ flag+"\r\nTry `head --help'for more information."
// 	return error;
// }










//////////////////////////////
		// if(lib.getDigit(ele)){
		// 	validArray.push(ele);
		// }
		// else{
		// 	var ele1 = + ele;
		// 	var ele2 = +flagArray[index+1];
		// 	if((isNaN(ele1))&&(!(isNaN(ele2)))){
		// 		if((verboseOption.indexOf(ele)>=0)){
		// 			validArray.push(ele)	
		// 		}
		// 		else{
		// 			validArray.push(ele+flagArray[index+1])
		// 			delete flagArray[index+1];
		// 		}
		// 	}
		// 	else{
		// 		 validArray.push(ele)
		// 	}
		// }



    // var text = text.split("");
    // var text = text.reverse();
    // text.length = value;
    // var text = text.reverse();
    // return text.join("");



		// var countWords = function(line){
// 	return line.split(/\s+/).filter(isNotEmpty).length;
// };