var r = {};
exports.r = r;
//Dont use for/while/do loops
r.reverseText = function(string){
	return string.split('').reverse().join("");
};
r.welcome = function(operation,num){
var for_undefined=function(x){
	if(toString.call(x)=="[object Array]"){
		return "seeya";}
	if(toString.call(x)=="[object Number]"){
		if(x*0==0){
			if(Math.floor(x)==x)
				return "hey count";
			return "hey decimal";
		}
		if(x/0==Infinity)
			return "get out of the world";
		return "hey dont count";
	};	
	if(toString.call(x)=="[object Function]"){
		return "call that";}
	if(toString.call(x)=="[object String]"){
		 return "hello text";}
	if(toString.call(x)=="[object Undefined]"){
		 return "who is it";}
    if(toString.call(x)=="[object Null]"){
		 return "oh no";}
    if(toString.call(x)=="[object Object]"){
    	if(Object.keys(x).length!=0)
	       return "hi"+" "+(Object.keys(x).join());
	   return "hi";}
	if(toString.call(x)=="[object Boolean]"){
		 return "to be or not to be";}
};
var for_number=function(num_arr){
	if(typeof(num_arr)=="number"){
		return "hey count";};
	return "seeya"+" "+num_arr.join("_");
};
var for_string=function(str,num){
	if(toString.call(str)=="[object Array]")
		return "seeya compute_three_2_0";
	if(toString.call(str)=="[object String]")
		if(num==undefined)
			return "hello text";
	    var arr=[];
	var recu=function(str,num){
		if(num==0)
			return arr;
		arr.push(str+"-");
		num=num-1;
		return recu(str,num)
	};
	recu(str,num);
    var string1=arr.join("");
	return string1.substr(0,string1.length-1);
};
	var operation_obj={
		'undefined':for_undefined,
		 number:for_number,
		 string:for_string,
	};
	var type;
	if(operation==undefined){
		type=undefined;}
	else{
		type = typeof(operation[0]);
		};
		return operation_obj[type](operation,num);
};
r.changeToBinary = function(number){
	 return Number(number.toString(2));
};
r.changeToOctal = function(number){
	 return Number(number.toString(8));
};
r.readBinary = function(bin_no){
	return parseInt(bin_no,2);
}
r.readHex = function(stringno){
	return parseInt(stringno,16);
}
r.changeToHex = function(number){
	return String(number.toString(16));
}
r.readOctal = function(number){
	return parseInt(number,8);
}
r.impose = function(x,y){
	var new_array = [];
		x.forEach(function(ele1,index){
			if(y[index]==undefined)
				y.push(0);
			new_array[index] = ele1 + y[index];
		});
	return new_array;
};
r.add = function(x,y){
	var new_array = [];
	x.forEach(function(data,index){
		new_array.push(data+y);
	});
	return new_array;
};
r.decodeList = function(x){
	var rev_string;
	if(typeof(x)=="object"){
	var string_array=x.join( ).split("").reverse().join("");
	rev_string=string_array.split("").map(function(letter){
		if(letter==","){
			return letter.replace(","," ");
		}
		return letter;
	});
	};
	if(typeof(x)=="string"){
		rev_string = x.split("").reverse();
	}                                
	return rev_string.join("");
};
r.getVowelCount = function(word){
	var vowel_no = 0;
	word.toUpperCase().split("").forEach(function(data){
		if(data=="A"||data=="E"||data=="I"||data=="O"||data=="U"){
				vowel_no=vowel_no+1;
			}
	});
	return vowel_no;
};
r.switch = function(funref,tasks){
	if(typeof(funref)=="string"||typeof(funref)=="number")
	{
		tasks[funref]();
	}
	else{
	 tasks[funref()]();
	 }	
};
r.while = function(countisless){
	if(countisless()){
		return {do:function (incrementCount){
			incrementCount();
			r.while(countisless).do(incrementCount);
			}
		}
	};
	return {do:new Function()};
};
r.Complex = function(no1,no2){
 return Object.create({},{x:{value:no1,enumerable:true,configurable:false,writable:false},
  				   y:{value:no2,enumerable:true,configurable:false,writable:false},
  	               toString:{value:function(){if(no2>0){return no1+"+"+no2+"i"};
  						   return no1+""+no2+"i";},enumerable:false,configurable:false,writable:false},
  			       "-":{value:function(b){return ((this.x-b.x)+''+(this.y-b.y)+'i')},
  			                        enumerable:false,configurable:false,writable:false},
  			       "+":{value:function(b){return ((this.x+b.x)+'+'+(this.y+b.y)+'i')},
  			                        enumerable:false,configurable:false,writable:false},
  			       "*":{value:function(b){return  new r.Complex((this.x*b.x)-(this.y*b.y),(this.x*b.y)+(this.y*b.x))},
  			                        enumerable:false,configurable:false,writable:false},
  			       isEqualTo:{value:function(obj){return (obj.toString()==this.toString());},
  			                        enumerable:false,configurable:false,writable:false}
  			})
 };
r.validatePositiveNumber = function(number){
	if(number*0==0){
		if(number<0){
		    throw Error('negative')
	        }
		else if((number-Math.floor(number))==0){
		return undefined;}
	throw Error("decimal")
	}
	else{
		throw Error("not a number")
	}
};
r.findWorstVowelWord = function(array){
	var number_array = array.map (function(data){
		var word_len=data.toLowerCase().split("").filter(function(y){
     return (y=='a'||y=='e'||y=='i'||y=='o'||y=='u');

	}).length;
		return word_len;
});
	var vowel = number_array.reduce(function(ele1,ele2){
		return ele1>ele2 ? ele2:ele1 ;
	});
	var index =number_array.indexOf(vowel);
	return array[index];
};
r.Circle = function(arg1,arg2){
	var b={};
	this.arg1=arg1;
	this.arg2=arg2;
	return Object.create(b,{centre:{value:arg1,enumerable:true,configurable:false,writable:false},
		        radius:{value:arg2,enumerable:true,configurable:false,writable:false},
				area:{value:Math.ceil(3.14*arg2*arg2),enumerable:false,configurable:false,writable:false},
				perimeter:{value:Math.ceil(2*3.14*arg2),enumerable:false,configurable:false,writable:false},
			    moveTo:{value:function(newcenter){return new r.Circle(newcenter,arg2);}},
			    covers:{value:function(circlepoint){
			    				var dist = Math.sqrt(Math.pow((arg1.x -circlepoint.x),2) + Math.pow((arg1.y-circlepoint.y),2));
			    									if(dist<arg2){return true;} return false;}},
				toString:{value:function(){return('[Circle @'+arg1.x+','+arg1.y+' '+'radius'+':'+arg2+']'); }},
				hasPoint:{value:function(point){
					     return (Math.sqrt(Math.pow((arg1.x -point.x),2) + Math.pow((arg1.y-point.y),2))==this.radius)}},
			    overlaps:{value:function(c){ 
						return ((Math.sqrt(Math.pow((this.centre.x-c.centre.x),2) + Math.pow((this.centre.y-c.centre.x),2)))<(this.radius+c.radius));			    		
			    	}}
				});                                        
};
r.Line = function(point1,point2){
	this.point1=point1;
	this.point2=point2;
	//var m=((point2.y-point1.y)/(point2.x-point1.x)).toFixed(4);
		return Object.create({},{start:{value:point1,enumerable:true,configurable:false,writable:false},
			end:{value:point2,enumerable:true,configurable:false,writable:false},
			length:{value:Math.sqrt(Math.pow((point2.x - point1.x),2) + Math.pow((point2.y - point1.y),2)),
			enumerable:false,configurable:false,writable:false},
		    toString:{value:function(){ return('[Line from '+this.start.x+','+this.start.y+' to '+this.end.x+','+this.end.y+']');}},
		    findY:{value:function(x_coordinate){
				if(x_coordinate>this.end.x||x_coordinate<this.start.x)
					{return null;}
				else
				  var	m=((this.end.y-this.start.y)/(this.end.x-this.start.x));
				return (m*(x_coordinate-this.start.x)+this.start.y);
				}},
			isParallelTo:{value:function(c){
    			 var	m=((this.end.y-this.start.y)/(this.end.x-this.start.x));
    			 var	m1=((c.end.y-c.start.y)/(c.end.x-c.start.x));
    				if(m==m1)
    				   if(c.hasPoint(this.start)==true || c.hasPoint(this.end)==true||this.hasPoint(c.start)==true || this.hasPoint(c.end)==true){
							return false;} 	
    				else if(m==m1)
    				    return true;
    				return false;
				}},
			findX:{value:function(y_coordinate){
				if(y_coordinate>this.end.y||y_coordinate<this.start.y)
					{return null;}
				else
					var m=((this.end.y-this.start.y)/(this.end.x-this.start.x));
				return ((y_coordinate-this.start.y)/m+this.start.x);
				}},
				hasPoint:{value:function(point){
						return (this.findY(point.x)==point.y)
				}},
				split:{value:function(){
					var lines = [];
					var newpoint={x:(this.end.x-this.start.x)/2,y:(this.end.y-this.start.y)/2};
					   var line1= new r.Line(this.start,newpoint);
					   var line2 = new r.Line(newpoint,this.end);
					   lines.push(line1,line2);
					   return lines;
				}},
				isEqualTo:{value:function(obj){
					return JSON.stringify(this)==JSON.stringify(obj);
				}},
				findPointFromStart:{value:function(dist){
				var	m=((this.end.y-this.start.y)/(this.end.x-this.start.x)).toFixed(3);
				var x_point= ((dist/Math.sqrt(1+Math.pow(m,2)))+this.start.x).toFixed(2);
				var y_point= (((dist*m)/Math.sqrt(1+Math.pow(m,2)))+this.start.y).toFixed(2);
					return {x:x_point,y:y_point};
				}},
				findPointFromEnd:{value:function(dist){
				var	m=((this.end.y-this.start.y)/(this.end.x-this.start.x)).toFixed(3);
				var x_point= (this.end.x-(dist/Math.sqrt(1+Math.pow(m,2)))).toFixed(2);
				var y_point= (this.end.y-((dist*m)/Math.sqrt(1+Math.pow(m,2)))).toFixed(2);
					return {x:x_point,y:y_point};
				}}
		});
};
r.is = {
	the_point_on:function(a){
		return function(point){
			return a.hasPoint(point)
		};
	},
	greater_than_previous_number:function(ele1,ele2){
		return ele1>ele2;
	}
}
r.Point = function(arg1,arg2){
	//this.x=arg1;
	//this.y=arg2;
	Object.defineProperties(this,{x:{value:arg1,enumerable:true},y:{value:arg2,enumerable:true},
								compareDistance:{value:function(point1,point2){
									var dist1=(Math.sqrt(Math.pow((arg1 - point1.x),2) + Math.pow((arg2 - point1.y),2)));
									var dist2=(Math.sqrt(Math.pow((arg1 - point2.x),2) + Math.pow((arg2 - point2.y),2)));
									return dist1-dist2;
										}}
									});
};
r.Point.prototype={
	isEqualTo:function(b){
		return (this.x.toFixed(3) == b.x.toFixed(3) && this.y.toFixed(3) == b.y.toFixed(3));},
	isOn:function(a){
		if(a.radius!=undefined)
			return a.hasPoint({x:this.x,y:this.y});
		return a.findY(this.x)==this.y;
		},
	toString:function(a){
		return '[Point @x:'+this.x+','+'y'+':'+this.y+']';
	}
};
r.distance=function(point){
		return (Math.sqrt(Math.pow((point.x - 0),2) + Math.pow((point.y - 0),2)));
};
r.vowel_array=function(arr_ele){
	var number_array = arr_ele.toLowerCase().split("").filter(function(y){
		 return (y=='a'||y=='e'||y=='i'||y=='o'||y=='u');
	    }).length;
		return number_array;
};
r.compare = {
	numbers_by_total_factors:function(array_ele1,array_ele2){
			return r.factors(array_ele1).length-r.factors(array_ele2).length;},
	strings_by_length:function(array_ele1,array_ele2){
		return (array_ele1.length)-(array_ele2.length);},//return r.sortArray(array_ele1)-r.sortArray(array_ele2);}
	points:function(ele1,ele2){
		return r.distance(ele1)-r.distance(ele2);
	},
	strings_by_vowel_count:function(array_ele1,array_ele2){
		return r.vowel_array(array_ele1)-r.vowel_array(array_ele2);
	},
	numbers:function(array_ele1,array_ele2){
		return array_ele1-array_ele2;
	},
	numbers_descending:function(array_ele1,array_ele2){
		return array_ele2-array_ele1;
	},
	numbers_odd_even:function(array_ele1,array_ele2){
		if (array_ele1% 2 !=array_ele2% 2 ){
  	 		return array_ele2%2;
  		}else {
    		return array_ele1 - array_ele2; 
  		}
	},
	circles:function(circle1,circle2){
		return circle1.area-circle2.area;
	},
	short_strings:function(text,str){
		return str.length - text.length;
	 }	
};
r.finder = function(comparision_function){
 	var str = '';
 	var arr = [];
 	var find = function(text){
 		if(comparision_function == undefined){
 			str = str.toString().length<text.toString().length?text:str;
 			return str;
 		}
 		else{
 			arr.push(""+text);
 			var ans = arr.reduce(function(text,str){
 				var result = comparision_function(text,str);
 				if(result>=0)
 					str=text;
 				return str;
 			});
 			return ans;
 		}
 	}
 	return find;

};
r.range = function(no1,no2,no3){
	if(no3==undefined)
		no3=1;
	var range_array=[];
	var recursion = function(no1,no2,no3){
		if(no1>=no2)
			return range_array;
		range_array.push(no1);
		no1=no1+no3;
		return recursion(no1,no2,no3);
		};
		
	return recursion(no1,no2,no3);//range_array;
};	
r.findBestVowelWord = function(array){
	var number_array = array.map (function(data){
		var word_len=data.toLowerCase().split("").filter(function(y){
     		return (y=='a'||y=='e'||y=='i'||y=='o'||y=='u');
		}).length;
		return word_len;
	});
	var vowel = number_array.reduce(function(ele1,ele2){
		return ele1>ele2 ? ele1:ele2 ;
	});
	var index =number_array.indexOf(vowel);
	return array[index];
};
r.factors = function(number){
	var count=number;
	var array=[];
	var fact=function(num,count){
		if(count==0)
			return array;
		if(num%count==0)
			array.push(count);
		count=count-1;
		return fact(num,count);
	}
	return fact(number,count).reverse();
};
r.until = function(funref){
	if(!funref()){
		return {do:function (incrementCount){
			incrementCount();
			r.until(funref).do(incrementCount);
			}
		}
	};
	return {do:new Function()};
};
r.resizeArray = function(array,value,object){
	if(object == undefined){
		if(toString.call(array)=="[object Array]")
			if(value==undefined){
				return array;
			}
			else{
				array.length=value;
			return array;
			} 
		return undefined; 
	 }
	 if(typeof(object)!='object'&& value==1){
	 	array.pop();
	 		return array;
	 };
	var action=function(){
		array.push(JSON.parse(JSON.stringify(object)))
	};
	var condition =function(){return array.length == value;}
	r.until(condition).do(action);
};
r.fibonacci = function(number){
	if(number<0 || number!=(Math.floor(number)))
		return undefined;
	if(number==1)
		return 0;
	if(number==2)
		return 1;
	return r.fibonacci(number-1) + r.fibonacci(number - 2);
};
r.if = function(funref){
	return {then:function (num1){
					return {else:function(num2){
						if(typeof(funref)=='function'){
							if(funref())
								return num1;
							return num2;
						};
							if(typeof(num1)=='number'){
								if(funref==true)
									return num1;
								return num2;
							}	
							if(typeof(num1)=='function'&&typeof(num2)=='function'){
								if(funref==true)
									return num1();
								return num2();
							}	
							if(typeof(num2)=='string'&&typeof(num1)=='function'){
								if(funref==true)
									return num1();
								return num2;
							}			
			        }
			    }
 			},
 			only_then:function(funref2){
 					if(funref==true)
 						return funref2();
 					return false;
 			}
 		}
};
r.createRectangle = function(point1,point2){
	var len=point2[0]-point1[0];
	var width=point2[1]-point1[1];
var	rect=Object.create({},{length:{value:len,enumerable:true,configurable:false,writable:false},
							width:{value:width,enumerable:true,configurable:false,writable:false},
							area:{value:(len*width),enumerable:true,configurable:false,writable:false},
							perimeter:{value:(2*(len+width)),enumerable:true,configurable:false,writable:false},
							hasPoint:{value:function(point){
							return ((point1[0]<=point[0] && point[0]<=point2[0]) && (point1[1]<=point[1] && point[1]<=point2[1]))
							},configurable:true},
							moveTo:{value:function(newpoint){
								return new r.createRectangle((newpoint),[(newpoint[0]+this.length),(newpoint[1]+this.width)]);
							},enumerable:true,configurable:true}
						}); 
						return rect;
};	
r.initvar = function(init){
	init();
	return function(){
		return;
	};
}
r.for = function(init,check,next){
	var initialise = r.initvar(init);
	  return {do:function (action){
	  	  if(check()){
	  			action();
				next();
				r.for(initialise,check,next).do(action);
				}
			}
	}
	return {do:new Function()};

};
r.createNewArray = function(num,obj){
	var new_array=[];
	if(num==null){
		return new_array;
	}
	if(obj==undefined)
		new_array.length=num;

	var action=function(){
		new_array.push(JSON.parse(JSON.stringify(obj)));
	};
	var condition =function(){return new_array.length == num;}
	r.until(condition).do(action);
	return new_array;
};
r.do = function(incrementCount){
		return {while:function (countisless){
			incrementCount();
			if(countisless())
			r.do(incrementCount).while(countisless);
			},
			if:function(funref){
				if(funref())
				 incrementCount();	
			},
			until:function(countfun){
				incrementCount();
				if(!countfun())
				r.do(incrementCount).until(countfun);
			},
			unless:function(funref){
				if(!funref())
					incrementCount();
			}
    	}
};
r.sumOfDigits = function(number){
	var sum=0;
	var recu = function(number){
		if(number<=0)
			return sum;
		var remainder=number%10;
		sum=sum+remainder;
		number=Math.floor(number/10);
		return recu(number);
	}
	recu(number);
	return sum;
};
r.tidyText = function(string){
	return  string.split(" ").filter(function(x){if(x!=" ")return x;}).join(" ")
};
r.reverseWords = function(text){
	return text.split(" ").map(function(text){return text.split("").reverse().join("")}).join(" ");
};
r.to = {
	day:function(date){
		var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var findday = new Date(date);
		return day[findday.getDay()]; 
	},	
	round_25_paise:function(money){
	var	decimalno=money-Math.floor(money);
	var	multipleof25=Math.floor(decimalno/0.25);
	var	remainder=(decimalno%0.25);
	if(remainder>=0.13)
		return (Math.floor(money)+(multipleof25*0.25)+0.25);
	return (Math.floor(money)+(multipleof25*0.25));
	},
	nextDay:function(date){
		var new_date = new Date(date);
		var dd = new_date.getDate();
		 new_date.setDate(dd+1);
		var nextDate=new_date.getDate();
		var mm = new_date.getMonth()+1;
		var yy = new_date.getFullYear();
		if(mm>10){ 
            if(nextDate>10)
                return yy+'-'+mm+'-'+nextDate; 
            else
               	return yy+'-'+mm+'-0'+nextDate;
        }
        if(nextDate>10){
         	return yy+'-'+mm+'-'+nextDate;
        }     
		return yy+"-0"+mm+"-0"+nextDate ;
	}

 };
r.factorial = function(number){
	if(number==1)
		return 1;
	return ((number)*r.factorial(number-1));
};
r.calculate = function(equation){
	return eval(equation).toString();
};
r.what_are_these = function(a,b,c,d){
	var obj={};
	var str="";
	Array.prototype.forEach.call(arguments,function(x){Object.defineProperty(obj,""+x,{enumerable:true});});
	Object .keys(obj).forEach(function(x){str +=x+' | '});
	return str.slice(0,str.length-3);
};
r.Template = function(str){
	 var template = function(array){
     var temp_array = Object.keys(array); 
     var split_str = str.split(" "); 
     temp_array.forEach(function(data){ 
     split_str.forEach(function(word,index){ 
     split_str[index] = word.replace(data,array[data]); }); });
     var finalStr = split_str.join(" "); return finalStr; };
     Object.defineProperty(template,"apply",{
     value:function(array){ return template(array); },enumerable:false});
      return template;
};
r.Set = function(){
	var obj={};
	var arg=arguments;
	var value_of_object=Object.keys(arg).map(function(ele){return arg[ele];});
	value_of_object.forEach(function(ele){ Object.defineProperty(obj,ele,{enumerable:true})});

	Object.defineProperties(obj,{union:{value:function(object){
		                         var result= Object.keys(this).concat(Object.keys(object));
		                         return r.Set.apply(null,result);
		                     },enumerable:false},
		                     isEqualTo:{value:function(object){
		                     		return Object.keys(this)==Object.keys(object).toString();
		                     }},
		                    intersection:{value:function(object){
		                    	var a_arr=Object.keys(this);
		                    	var b_arr=Object.keys(object);
		                    	var another_arr= [];
		                    	b_arr.forEach(function(ele){
		                    		if(a_arr.indexOf(ele)>=0)
		                    			another_arr.push(ele);
		                    	});
		                    	return r.Set.apply(null,another_arr);
		                    },enumerable:false},
		                    cardinality:{value:function(){
		                    	var arr=[]
		                    	value_of_object.forEach(function(object){
		                    	if(arr.indexOf(object)<0)
		                    		arr.push(object)
		                    })
		                    	return arr.length;
		                    }()},
		                    toString:{value:function(){
		                    	return "Set{"+value_of_object.join("; ")+"}";
		                    }}
		                     })	                
	return obj;
};
r.Sets={
	phi:new r.Set()
};
r.operate = function(){
	var object=arguments[0];
	var funref=arguments[1];
	if(typeof(funref)=="string")
		funref = object[funref];
	var arr=[];
	Array.prototype.forEach.call(arguments,function(ele,index,array){
		if(index>1)
			arr.push(ele);
	});
	if(toString.call(object)=="[object Array]")
		return object[funref].apply(null,arr);
	return funref.apply(object,arr);
};
r.accumulator = function(argu){
	var ob = {};
	ob.value = 0;
	if(argu != undefined)
		ob.value=argu;
	ob.add=function(){
		var arg=arguments;
		var value_of_object=Object.keys(arg).map(function(ele){return arg[ele];});
		var add = value_of_object.reduce(function(x,y){
					return x+y; });
		
		ob.value=ob.value+add;
	}
	ob.remove=function(){
		var arg=arguments;
		var value_of_object=Object.keys(arg).map(function(ele){return arg[ele];});
		var sub= value_of_object.forEach(function(x){
					ob.value -= x; });
	}
	ob.getValue=function(){
		return ob.value;
	}
	return ob;
}
