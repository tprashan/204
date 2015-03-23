var fun = {};
var fs = require("fs")
exports.fun = fun;

fun.checkText = function(text){
		if(text!="")
			return true;
		return false;
};

fun.checkTextInFile = function(filename){
	var text = fs.readFileSync(filename).toString('utf8');
		if(text!="")
			return true;
		return false;
};

fun.readTextFromFile = function(filename){
	return fs.readFileSync(filename, 'utf8');
};

fun.readPath = function(filename){
		return fs.realpathSync(filename);
};

fun.checkFileInDirectory = function(filename){
		return fs.existsSync(filename);
};

fun.countBytesinFile = function(filename){
	(fun.checkFileInDirectory(filename)) &&  (filename = fun.readTextFromFile(filename))
	return filename.length;
}; 

fun.countWordsinFile = function(filename){
	(fun.checkFileInDirectory(filename)) &&  (filename = fun.readTextFromFile(filename));
	var textsOfFile = filename;
	var linesOfFile = textsOfFile.split(/\s+/);
	var wordArray = [];
	linesOfFile.forEach(function(line){
		var wordsOfLine = line.split(" ").filter(function(word){
		if(word!=" ")
			return word;
	});
		wordArray=wordArray.concat(wordsOfLine);
	});
	return wordArray.length;
};

fun.countLinesinFile = function(filename){
	
	(fun.checkFileInDirectory(filename)) &&  (filename = fun.readTextFromFile(filename));

	var linesOfFile = filename.split("\n").length-1;
	return linesOfFile;
};

fun.longestLine = function(filename){
	var textsOfFile = fun.readTextFromFile(filename);
	var linesOfFile = textsOfFile.split("\r\n");
	var arrayOfLineLength = linesOfFile.map(function(line){
		return line.length;
	});
	return Math.max.apply(null,arrayOfLineLength);
};

fun.reduceDuplicate = function(array){
	var arrayOfUniqueElement = [];
	array.forEach(function(ele){
		if(arrayOfUniqueElement.indexOf(ele)<0)
			arrayOfUniqueElement.push(ele);
	}); 
	return arrayOfUniqueElement;
};

fun.addArrayElement = function(arra1,arra2){
	if(toString.call(arra1)=="[object Array]"){
		var arrayOftotal=arra1.map(function(ele,index){
			return ele+arra2[index];
		});
		return arrayOftotal;
	}
};

fun.addArrayofarrayElement = function(arrOfarr){
	var total = arrOfarr.reduce(function(array1,array2){
					return fun.addArrayElement(array1,array2);
				});
	total.pop();
	return total;
}

fun.displaycount = function(lines,words,bytes,filename){
		console.log('\t'+lines + '\t' + words + '\t' +bytes +' '+ filename);
};

fun.displaycountWithLongestLine = function(lines,words,bytes,longline,filename){
	console.log('\t'+lines + '\t' + words + '\t' +bytes+ '\t' +longline +' '+ filename);
};

fun.displayBytesOrwordsOrlines = function(bytesOrwordsOrline,filename){
	console.log( '\t' +bytesOrwordsOrline +' '+ filename);
};

fun.displayBytesOrwordsOrlinesTwoOfThem = function(bytesOrwordsOrline1,bytesOrwordsOrline2,filename){
		console.log( '\t' +bytesOrwordsOrline1 +'\t '+ bytesOrwordsOrline2+" "+filename);
};


fun.standardDisplay = function(arrayofarray){
	arrayofarray.forEach(function(array){
		if(array.length==5)
			fun.displaycountWithLongestLine(array[0],array[1],array[2],array[3],array[4]);
		if(array.length==4)
			fun.displaycount(array[0],array[1],array[2],array[3]);
		if(array.length==3)
			fun.displayBytesOrwordsOrlinesTwoOfThem(array[0],array[1],array[2]);
		if(array.length==2)
			fun.displayBytesOrwordsOrlines(array[0],array[1]);
	});
	
};

fun.displayOfTotal = function(array){
		if(array.length==4)
			fun.displayTotalcountWithLongestLine(array[0],array[1],array[2],array[3]);
		if(array.length==3)
			fun.displayTotalcount(array[0],array[1],array[2]);
		if(array.length==2)
			fun.displayTotalBytesOrwordsOrlinesTwoOfThem(array[0],array[1]);
		if(array.length==1)
			fun.displayTotalBytesOrwordsOrlines(array[0]);
};

fun.displayTotalcount = function(lines,words,bytes){
		console.log('\t'+lines + '\t' + words + '\t' +bytes +' '+ "total");
};

fun.displayTotalcountWithLongestLine = function(lines,words,bytes,longline){
	console.log('\t'+lines + '\t' + words + '\t' +bytes+ '\t' +longline +' '+ "total");
};

fun.displayTotalBytesOrwordsOrlines = function(bytesOrwordsOrline){
	console.log( '\t' +bytesOrwordsOrline +' '+ "total");
};

fun.displayTotalBytesOrwordsOrlinesTwoOfThem = function(bytesOrwordsOrline1,bytesOrwordsOrline2){
		console.log( '\t' +bytesOrwordsOrline1 +'\t '+ bytesOrwordsOrline2+" "+"total");
};

fun.findwordStartWithMinus = function(string){
	var arrayOfChar = string.split("");
	if(arrayOfChar[0]=="-")
		return true;
	return false;
};

fun.findarrayHavewordStartWithMinus = function(array){
	var result = false;
	array.forEach(function(ele,index){
		if(fun.findwordStartWithMinus(ele))
			result = true;
	});
	return result;
}

fun.findindexOfminusWord = function(array){
	var result = 0;
	array.forEach(function(ele,index){
		if(fun.findwordStartWithMinus(ele))
			result = index;
	});
	return result;
}
