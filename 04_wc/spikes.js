// var wc = require("./funModule.js").fun;
// var wc1 = require("./version2flag.js").fun1;
// var wc2 = require("./version3withflag.js").fun2;
// var fs = require("fs");
// var path = require("path");

// // var readline = require('readline');
// // var r1 = readline.createInterface({input: process.stdin,output: process.stdout});
// // r1.setPrompt("")


var argumentes = process.argv.slice(2); 

var fureadPath = function(filename){
	if(path.normalize(filename))
	 	return filename;
	return false;
};
//var result = argumentes.filter(fureadPath)
	

console.log(fureadPath(argumentes[0]));
// // var fd = fs.openSync('userfile.txt','r+');
// // var data = "kya he be "
// // fs.writeFileSync('userfile.txt', data);
// // var deletedata = "";
// // fs.writeFileSync('userfile.txt', deletedata);
// // fs.writeSync(fd, data.toString("utf-8"));

// // var data='';
// // var line=0;
// // var Question1 = function(ans){
// //     r1.on('line',function(answer) {
// //         data=data+answer+"\n "+"";
// //         line=line+1;
// //         countline(line);
// //     });
// // }
// // var countline = function(line){
// // 	 if(line>4){
// // 	 	data = data.substr(0,data.length);
// //  		fs.writeFileSync('userfile.txt', data);
// //  		wc2.randomCommand(['userfile.txt']);
// //     	r1.close();
// //     	process.exit(0);
// //         }
// // }
// // Question1();
// // console.log(data);

// // var path = fs.realpathSync('userfile.txt');
// // console.log(path);
// // fs.createWriteStream(path)

// // var data='';

// // r1.on('line',function(answer) {
// //     data=data+answer+"\n";
// // });

// // process.stdin.on('keypress', function (ch, key) {
// // 	if (key && key.ctrl && key.name== 'a') {
// // 	   data = data.substr(0,data.length-1);
// // 	   fs.writeFileSync('userfile.txt', data);
// // 	   wc2.randomCommand(['userfile.txt']);
// // 	   process.stdin.pause();
// // 	 }
// // });







// $ node
// > var ar =["--hi","jk","-l"];
// undefined
// > ar.filter(function(x){if(x.match(/-|--/)) return false;})
// []
// > ar.filter(function(x){if(x.match(/-|--/)) return false; retrn true;});
// ...
// > ar.filter(function(x){if(x.match(/-|--/)) return false; return true;});
// [ 'jk' ]
// > ar.filter(function(x){if(x.match(/-[a-z]|--[a-z]/)) return true; return false;});
// [ '--hi', '-l' ]
// > var ar=["-","--hi","--","-c"]
// undefined
// > ar.filter(function(x){if(x.match(/-[a-z]|--[a-z]/)) return true; return false;});
// [ '--hi', '-c' ]
// > var ar=["-","--hi","--","-c","hfh"]
// undefined
// > ar.filter(function(x){if(x.match(/-[a-z]|--[a-z]/)) return true; return false;});
// [ '--hi', '-c' ]
// > ar.filter(function(x){if(x.match(/-[a-z]|--[a-z]|[a-z]/)) return true; return false;});
// [ '--hi', '-c', 'hfh' ]
// > var ar=["-","--hi","--","-c","hfh","one.txt"]
// undefined
// > ar.filter(function(x){if(x.match(/-[a-z]|--[a-z]|[a-z]/)) return true; return false;});
// [ '--hi',
//   '-c',
//   'hfh',
//   'one.txt' ]
// >
// (^C again to quit)
// >