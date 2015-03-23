var lib = {};
exports.lib = lib;
var fs = require('fs');

var validFlag = ["-c","-d","-D","-u"]

var helptemplet = "Usage: uniq [OPTION]... [INPUT [OUTPUT]]\
					\r\nDiscard all but one of successive identical lines from INPUT (or\
					\r\nstandard input), writing to OUTPUT (or standard output).\
					\r\n\
					\r\n  -c, --count           prefix lines by the number of occurrences\
					\r\n  -d, --repeated        only print duplicate lines\
					\r\n  -D, --all-repeated    print all duplicate lines\
					\r\n  -f, --skip-fields=N   avoid comparing the first N fields\
					\r\n  -i, --ignore-case     ignore differences in case when comparing\
 					\r\n  -s, --skip-chars=N    avoid comparing the first N characters\
					\r\n  -u, --unique          only print unique lines\
					\r\n  -w, --check-chars=N   compare no more than N characters in lines\
					\r\n\
					\r\n     --help            display this help and exit\
					\r\n     --version         output version information and exit\
					\r\n\
					\r\nA field is a run of whitespace, then non-whitespace characters.\
					\r\nFields are skipped before chars."

lib.filterUndefined = function(array){
	var result=array.filter(function(item){ return item!=undefined})
	return result;
}

lib.getLine = function(text){
	var lines = text.split('\r\n');
	var uniqline = lines.filter(function(line,index){ return line!=lines[index+1];});
	return  uniqline;
};


lib.reduceDuplicateLine = function(text){                     ///////********* for -d flag.
	var duplicateLineArray = lib.getDuplicateLines(text);
	var seperateArray = duplicateLineArray.filter(function(ele,index){ return ele != duplicateLineArray[index+1];});
	return seperateArray;
}

lib.getDuplicateLines = function(text){             ////************for -D flag.
	var lines = text.split('\r\n'); var count = 0;
	var duplicateline = lines.map(function(line,index){
			if(line==lines[index+1]){  
				count++;return line;}
			else if(count>0){
				count=0; return line;
			}
	})
	duplicateline = lib.filterUndefined(duplicateline);
	return  duplicateline;
}

lib.getDuplicateLineNumber = function(text){          //////////////**************for -c flag.
	var lines = text.split('\r\n'); var count = 0; 
	var duplicatelineWithNum = lines.map(function(line,index){
		count++;
		if(line!=lines[index+1]){  index = count; count =0;
			return "\t"+index+" "+line;
		}
	})
	duplicatelineWithNum = lib.filterUndefined(duplicatelineWithNum);
	return  duplicatelineWithNum;
};

lib.getUniqLines = function(text){                  ///*******************for -u flag.
	var lines = text.split('\r\n');
	var uniqArray = []; var count = 0;
	lines.forEach(function(line,index){
		if(line==lines[index+1]){ delete lines[index]; count++ ;}
		else{
			if(count==0){uniqArray.push(lines[index]);}
			count = 0;
		}
	})
	return  uniqArray;
};

lib.convertCase = function(text){
	var text = text.toLowerCase();
	return lib.getDuplicateLines(text);
};

lib.getMinusI = function(array){
	var minusI = array.filter(function(ele){return ele == "-i"});
	return minusI;
};

lib.getMinus_dOrMinus_u = function(array){
	var result = array.filter(function(ele){return ele=="-u" || ele=="-d"})
	return result;
}

lib.getMinus_wOrMinus_f = function(array){
	var result = array.filter(function(ele){return ele=="-s" || ele=="-w" || ele=="-f"})
	return result;
}

lib.workWithI = function(text){
	return lib.getLine(text).join("\r\n");
}

lib.getValidFlag = function(array){
	var result = []; var flags= [];
	var invalidFlag = []; var i_flags = [];
	array.forEach(function(ele){
			if(ele.match(/^-|^--|[0-9]$/)){
				(validFlag.indexOf(ele)>=0)?flags.push(ele) : (ele=="-i"||ele.match(/[0-9]$/g)) ? i_flags.push(ele):invalidFlag.push(ele)
			}
	});
	result.push(flags,invalidFlag,i_flags);
	return result;
};                                    

lib.getFile = function(array){
	var fileArray = array.map(function(ele){
	if((fs.existsSync(ele))||(!(ele.match(/^-|^--/))))
		return ele;
	})
	fileArray =lib.filterUndefined(fileArray);
	return fileArray;
};

lib.getFlag = function(array){
	var flagArray = array.map(function(ele){
		if(!(fs.existsSync(ele))){return ele;}
	})
	flagArray =lib.filterUndefined(flagArray);
	return flagArray;
};

lib.DisplayError = function(option){
	return "uniq: invalid option "+option +"\r\nTry `uniq --help' for more information."
};

lib.DisplayCountError = function(option){
	return "uniq: printing all duplicated lines and repeat counts is meaningless"+"\r\nTry `uniq --help' for more information."
};

lib.getDuplicateLineNumberMoreThanOne = function(text){
	var lines = text.split('\r\n');
	var takeFirstCharFromLine = lines.filter(function(line){return (line.substr(0,2)>1)})
	return takeFirstCharFromLine;
};

lib.helpTEMPLET = function(){
	return helptemplet;
};

lib.getWrongMinusWord = function(array){
	var result = array.filter(function(ele){
		return ((ele.match(ele.match(/^-/)))&&(ele.match(/[0-9]$/)))&&(!(ele.match(/[f]|[s]|[w]/)))
	})
	return result;
}

lib.getWriteMinusWord = function(array){
	var result = array.filter(function(ele){
		return ((ele.match(ele.match(/^-/)))&&(ele.match(/[0-9]$/)))&&((ele.match(/[f]|[s]|[w]/)))
	})
	return result;
}