var wc = require("./funModule.js").fun;
var wc1 = require("./version2flag.js").fun1;
var wc2 = require("./version3withflag.js").fun2;
var fs = require("fs");
var args = process.argv.slice(2);  

var readline = require('readline');
var r1 = readline.createInterface({input: process.stdin,output: process.stdout});
r1.setPrompt("");

if(args.length<=0 || wc1.findminuswordinArray(args)){
	var args = wc1.findArrayWithoutBothminusWord(args);
	var minus = "-"
	var data='';
	var count = 0;
	process.stdin.on('keypress', function (ch, key) {
		data = data+ch ;
		if(key && key.name== 'return'){
			count++}
		if (key && key.ctrl && key.name== 'a'){
		  	data = data.substr(0,data.length-1);
		  	console.log('\t'+count+'\t'+wc.countWordsinFile(data)+'\t'+wc.countBytesinFile(data)+" "+"-");
		  	process.stdin.pause();
		}
	});

	if(wc1.findFileInArray(args)){
		wc2.randomCommand(args,minus);
	}
}
else if(wc1.findDminuswordinArray(args)){
	var args = wc1.findArrayWithoutFirstminusWord(args);
	var arrayOfarrayOf_lwc =[];
	args.forEach(function(word){
		if(wc.checkFileInDirectory(word)){
			var bytesCount = wc.countBytesinFile(word);
			var wordsCount = wc.countWordsinFile(word);
			var linesCount = wc.countLinesinFile(word);
			var pop = "";
			arrayOfarrayOf_lwc.push([linesCount,wordsCount,bytesCount,pop]);
		    console.log('\t'+linesCount+'\t'+wordsCount+'\t'+bytesCount+" "+word);
		}
		else{
		  console.log('wc:'+" "+ word +': No such file or directory');
		}
	})
	if(arrayOfarrayOf_lwc.length>1){
	    var totalOfCount = wc.addArrayofarrayElement(arrayOfarrayOf_lwc);
	    wc.displayOfTotal(totalOfCount);
	}
	r1.close();
}

else{
	wc2.randomCommand(args);
	r1.close();
};












	// r1.on('line',function(answer) {
	//     data=data+answer+"\n";
	// });