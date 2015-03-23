var workWithWoption = function(text,option){
	var lines = text.split('\r\n');
	var uniqline = lines.filter(function(line,index){
		var line = line;
		var nextLine = lines[index+1];
		if(nextLine!=undefined)
			return line.substr(0,option)== nextLine.substr(0,option);
	});
	return  uniqline.join("\r\n");
};



console.log(workWithWoption("hi\r\ntrashant\r\ntripathi\r\ntripathi",2))