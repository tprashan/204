var wc = {}; //*****************************************try to give real name as wc,wc1 ect.
var fs = require("fs")
exports.wc = wc;

wc.checkText = function(text){
		if(text!="")
			return true;
		return false;
};

wc.checkTextInFile = function(filename){
	var text = fs.readFileSync(filename).toString('utf8');
		if(text!="")
			return true;
		return false;
};

wc.readTextFromFile = function(filename){
	return fs.readFileSync(filename, 'utf8');
};

wc.readPath = function(filename){
		return fs.realpathSync(filename);
};

wc.checkFileInDirectory = function(filename){
		return fs.existsSync(filename);
};

wc.countBytes = function(text){
	return text.length;
};

wc.countWords = function(text){
	var linesInText = text.split(/\s+/);
	return linesInText.length;
};

wc.countLines = function(text){
	var newLinesInText = text.split("\n").length-1;
	return newLinesInText;
};

wc.longestLine = function(filename){
	var textsOfFile = wc.readTextFromFile(filename);
	var linesOfFile = textsOfFile.split("\r\n");
	var arrayOfLineLength = linesOfFile.map(function(line){
		return line.length;
	});
	return Math.max.apply(null,arrayOfLineLength);
};

wc.reduceDuplicate = function(array){
	var arrayOfUniqueElement = [];
	array.forEach(function(ele){
		if(arrayOfUniqueElement.indexOf(ele)<0)
			arrayOfUniqueElement.push(ele);
	}); 
	return arrayOfUniqueElement;
};

wc.addArrayElement = function(arra1,arra2){
	if(toString.call(arra1)=="[object Array]"){
		var arrayOftotal=arra1.map(function(ele,index){
			return ele+arra2[index];
		});
		return arrayOftotal;
	}
};

wc.addArrayofarrayElement = function(arrOfarr){
	var total = arrOfarr.reduce(function(array1,array2){
					return wc.addArrayElement(array1,array2);
				});
	total.pop();
	return total;
}

wc.displaycount = function(lines,words,bytes,filename){
		console.log('\t'+lines + '\t' + words + '\t' +bytes +' '+ filename);
};

wc.displaycountWithLongestLine = function(lines,words,bytes,longline,filename){
	console.log('\t'+lines + '\t' + words + '\t' +bytes+ '\t' +longline +' '+ filename);
};

wc.displayBytesOrwordsOrlines = function(bytesOrwordsOrline,filename){
	console.log( '\t' +bytesOrwordsOrline +' '+ filename);
};

wc.displayBytesOrwordsOrlinesTwoOfThem = function(bytesOrwordsOrline1,bytesOrwordsOrline2,filename){
		console.log( '\t' +bytesOrwordsOrline1 +'\t '+ bytesOrwordsOrline2+" "+filename);
};


wc.standardDisplay = function(arrayofarray){
	arrayofarray.forEach(function(array){
		if(array.length==5)
			wc.displaycountWithLongestLine(array[0],array[1],array[2],array[3],array[4]);
		if(array.length==4)
			wc.displaycount(array[0],array[1],array[2],array[3]);
		if(array.length==3)
			wc.displayBytesOrwordsOrlinesTwoOfThem(array[0],array[1],array[2]);
		if(array.length==2)
			wc.displayBytesOrwordsOrlines(array[0],array[1]);
	});
	
};

wc.displayOfTotal = function(array,maxOfLongLine){
		if(array.length==4)
			wc.displayTotalcountWithLongestLine(array[0],array[1],array[2],array[3],maxOfLongLine);
		if(array.length==3)
			wc.displayTotalcount(array[0],array[1],array[2],maxOfLongLine);
		if(array.length==2)
			wc.displayTotalBytesOrwordsOrlinesTwoOfThem(array[0],array[1],maxOfLongLine);
		if(array.length==1)
			wc.displayTotalBytesOrwordsOrlines(array[0],maxOfLongLine);
};

wc.displayTotalcount = function(lines,words,bytes,maxOfLongLine){
		console.log('\t'+lines + '\t' + words + '\t' +bytes +maxOfLongLine+' '+ "total");
};

wc.displayTotalcountWithLongestLine = function(lines,words,bytes,longline,maxOfLongLine){
	console.log('\t'+lines + '\t' + words + '\t' +bytes+ '\t' +longline+maxOfLongLine +' '+ "total");
};

wc.displayTotalBytesOrwordsOrlines = function(bytesOrwordsOrline,maxOfLongLine){
	console.log( '\t' +bytesOrwordsOrline +maxOfLongLine+' '+ "total");
};

wc.displayTotalBytesOrwordsOrlinesTwoOfThem = function(bytesOrwordsOrline1,bytesOrwordsOrline2,maxOfLongLine){
		console.log( '\t' +bytesOrwordsOrline1 +'\t '+ bytesOrwordsOrline2+" "+"total");
};

wc.findwordStartWithMinus = function(string){
	var arrayOfChar = string.split("");
	if(arrayOfChar[0]=="-")
		return true;
	return false;
};

wc.findarrayHavewordStartWithMinus = function(array){
	var result = false;
	array.forEach(function(ele,index){
		if(wc.findwordStartWithMinus(ele))
			result = true;
	});
	return result;
}

wc.findindexOfminusWord = function(array){
	var result = 0;
	array.forEach(function(ele,index){
		if(wc.findwordStartWithMinus(ele))
			result = index;
	});
	return result;
}
