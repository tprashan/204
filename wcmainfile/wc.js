var wc = require("./funModule.js").fun;
var wc1 = require("./version2flag.js").fun1;
var arguments = process.argv.slice(2);

var wcCommand =function(filename,flag){
	if(wc.checkFileInDirectory(filename)){
		return wc1.findBytesOrwordsOrlinesWithFlag(filename,flag);
	}
	else{
		console.log('wc:'+ filename+': No such file or directory');
	}
};

var randomCommand = function(arguments){
	var arrayOfFiles = [];   //*******************************************for keeping file name.
	var arrayOfFlags = [];   //*******************************************for keeping flags in it.
	var arrayOfUnusefulThings = [];  //***********************************for keeping other things.

	arguments.forEach(function(word){
		if(wc.checkFileInDirectory(word)){
			arrayOfFiles.push(word);
		}
		else if(wc1.findFlags(word)){
			arrayOfFlags.push(word);
		}
		else{
			arrayOfUnusefulThings.push(word);
		}
	});     //***************************forEach for pushing word into array according their status.


	var arrayOfUniqueFlags = wc.reduceDuplicate(arrayOfFlags);
	    //*******************************for keeping unique flag from flags array into new array.

	var flagsValues ;
	var arrayOfCharWordLine = [];  //*********************array of file's value array.

	
	if(wc.findarrayHavewordStartWithMinus(arrayOfUnusefulThings)){
		console.log("wc: unrecognized option"+ arrayOfUnusefulThings[wc.findarrayHavewordStartWithMinus(arrayOfUnusefulThings)]);
		console.log("Try `wc --help' for more information.")
	}
	else if(!(wc.checkFileInDirectory(arguments[0]))&&(!(wc1.findFlags(arguments[0])))) {
		console.log("invalid option give valid option.");
	}
	else if((wc.checkFileInDirectory(arguments[0]))||((wc1.findFlags(arguments[0])))){
		arrayOfFiles.forEach(function(filename){
		var arrayOfcharinFiles = []
		var arrayOfwordinFiles = [];
		var arrayOflineinFiles = [];
		var arrayOflonglineinFiles = [];
		var arrayOfFileName = [];
		var seperatArr;

		if(arrayOfUniqueFlags.length>0){
			arrayOfUniqueFlags.forEach(function(flag){
			flagsValues = wcCommand(filename,flag);
			if(wc1.findChar(flag) && arrayOfcharinFiles.length==0)
				arrayOfcharinFiles.push(flagsValues);
			if(wc1.findWords(flag) && arrayOfwordinFiles.length==0)
				arrayOfwordinFiles.push(flagsValues);
			if(wc1.findLines(flag) && arrayOflineinFiles.length==0)
				arrayOflineinFiles.push(flagsValues);
			if(wc1.longestLine(flag) && arrayOflonglineinFiles.length==0)
				arrayOflonglineinFiles.push(flagsValues);
			});
		    seperatArr =arrayOflineinFiles.concat(arrayOfwordinFiles).concat(arrayOfcharinFiles).concat(arrayOflonglineinFiles);
		    seperatArr.push(filename);
			arrayOfCharWordLine.push(seperatArr);
		}
		else if(arrayOfUniqueFlags.length==0){
			arrayOfFileName.push(filename)
			arrayOfCharWordLine.push(arrayOfFileName);
			wcCommand(filename);
		}
	});
	         //************************************for taking unique file values in array.
	
	
	arrayOfUnusefulThings.forEach(function(word){
		wcCommand(word);
	});
	           //***********************************for displaying result according their values.
   
    wc.standardDisplay(arrayOfCharWordLine);
    
    var totalOfCount = wc.addArrayofarrayElement(arrayOfCharWordLine);
    wc.displayOfTotal(totalOfCount);
	
  };
};  
   

randomCommand(arguments);





















//var arrayOfUniqueFiles = [];
	// arrayOfFiles.forEach(function(file){
	// 	if(arrayOfUniqueFiles.indexOf(file)<0)
	// 		arrayOfUniqueFiles.push(file);
	// });