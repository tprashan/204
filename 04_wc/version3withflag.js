var wc = require("./funModule.js").fun;
var wc1 = require("./version2flag.js").fun1;
var fun2 = {};
exports.fun2 = fun2;

fun2.wcCommand =function(filename,flag){
	if(wc.checkFileInDirectory(filename)){
		return wc1.findBytesOrwordsOrlinesWithFlag(filename,flag);
	}
	else{
		console.log('wc:'+ filename+': No such file or directory or valid option');
	}
};

fun2.randomCommand = function(arguments,minus){
	var arrayOfFiles = [];   //*******************************************for keeping file name.
	var arrayOfFlags = [];   //*******************************************for keeping flags in it.
	var arrayOfUnusefulThings = [];  //***********************************for keeping other things.

	var flagsValues ;              //*********************for use of forEach.
	var arrForfilesCount=[];       //*********************for use of forEach.
	var arrayOfCharWordLineLongLine = [];  //*********************array of file's value array.
	var arrarForTotalWithoutLongLine=[];
    var mixFlag = [];

	arguments.forEach(function(word){
	(wc.checkFileInDirectory(word)) ? arrayOfFiles.push(word):(wc1.findFlags(word))?arrayOfFlags.push(word)
	                                                                      :((wc1.findInvalidflagFromMixFlag(word)))?mixFlag.push(word)
																		  :arrayOfUnusefulThings.push(word)
	});    
    //***************************forEach for pushing word into array according their status.
    arrayOfFlags = arrayOfFlags.concat(wc1.findValidFlag(mixFlag));
	var arrayOfUniqueFlags = wc.reduceDuplicate(arrayOfFlags);
    //*******************************for keeping unique flag from flags array into new array.
	arrayOfFiles.forEach(function(filename){
		var arrayOfcharinFiles = [];
		var arrayOfwordinFiles = [];
		var arrayOflineinFiles = [];
		var arrayOflonglineinFiles = [];
		var arrayOfFileName = [];
		var seperatArr;
		var seperatArrWithoutlongLine;

		if(arrayOfUniqueFlags.length>0){
			arrayOfUniqueFlags.forEach(function(flag){
			flagsValues = fun2.wcCommand(filename,flag);
			if(wc1.findChar(flag) && arrayOfcharinFiles.length==0)
				arrayOfcharinFiles.push(flagsValues);
			if(wc1.findWords(flag) && arrayOfwordinFiles.length==0)
				arrayOfwordinFiles.push(flagsValues);
			if(wc1.findLines(flag) && arrayOflineinFiles.length==0)
				arrayOflineinFiles.push(flagsValues);
			if(wc1.longestLine(flag) && arrayOflonglineinFiles.length==0)
				arrayOflonglineinFiles.push(flagsValues);
			});
		    seperatArrWithoutlongLine=arrayOflineinFiles.concat(arrayOfwordinFiles).concat(arrayOfcharinFiles);
		    seperatArr =arrayOflineinFiles.concat(arrayOfwordinFiles).concat(arrayOfcharinFiles).concat(arrayOflonglineinFiles);
		    seperatArr.push(filename);
		    seperatArrWithoutlongLine.push(filename);
			arrayOfCharWordLineLongLine.push(seperatArr);
			arrarForTotalWithoutLongLine.push(seperatArrWithoutlongLine);
		}
		else if(arrayOfUniqueFlags.length==0){
			arrayOfFileName.push(filename)
			arrayOfCharWordLineLongLine.push(arrayOfFileName);
			var fileCount=fun2.wcCommand(filename);
			arrForfilesCount.push(fileCount);
		}
	});         //************************************for taking unique file values in array.

	//var arrayOflongLine=wc1.findDiffIndValueFromArrayOfarray(arrayOfCharWordLineLongLine,arrarForTotalWithoutLongLine);
	//var maxOfLongLine = wc1.findmaxValueInArray(arrayOflongLine);

	if(wc.findarrayHavewordStartWithMinus(arrayOfUnusefulThings)){
		console.log("wc: unrecognized option"+" "+arrayOfUnusefulThings[wc.findindexOfminusWord(arrayOfUnusefulThings)]);
		console.log("for more information,Try `wc --help ke liye mat kahna abhi banaya nahi he' .")
	}

	else if(!(wc.checkFileInDirectory(arguments[0]))&&(!(wc1.findFlags(arguments[0])))&&arguments.length>=1&&arrayOfFiles.length==0) {
		console.log("invalid option give valid option.");
	}
	else if(arrForfilesCount.length==1){
		wc.standardDisplay(arrForfilesCount);
	}
	else if(arrForfilesCount.length>=2&&minus=="-"){
		wc.standardDisplay(arrForfilesCount);
	}
	else if(arrForfilesCount.length>=2){
		wc.standardDisplay(arrForfilesCount);
		var totalOfCount = wc.addArrayofarrayElement(arrForfilesCount);
	    wc.displayOfTotal(totalOfCount);
	}
	else if(arrayOfCharWordLineLongLine.length==1){
		wc.standardDisplay(arrayOfCharWordLineLongLine);
	}
	else if(minus=="-"){
		wc.standardDisplay(arrayOfCharWordLineLongLine);
	}
	else {
	    wc.standardDisplay(arrayOfCharWordLineLongLine);
	    var totalOfCount = wc.addArrayofarrayElement(arrarForTotalWithoutLongLine);
	    wc.displayOfTotal(totalOfCount);
		
	}
	arrayOfUnusefulThings.forEach(function(word){
		if(!(wc.findarrayHavewordStartWithMinus(arrayOfUnusefulThings)))
			fun2.wcCommand(word);
	});
	//***********************************for displaying result according their values.
};  


	





// if(arrayOfCharWordLineLongLine.length>1){
		    // var totalOfCount = wc.addArrayofarrayElement(arrayOfCharWordLineLongLine);
		    // wc.displayOfTotal(totalOfCount);
		//}