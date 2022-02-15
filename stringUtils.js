const camelCase = function(string){
    if (typeof string !== "string" || string === undefined || string === null || string.length <= 0) {
		throw "stringUtils.camelCase error is successful"
	} else {
	string = string.toLowerCase();
	strLen = string.length;
  //  console.log(strLen)
    str = "";
    for(let i=0;i<strLen;i++){
//console.log("this is str:" + str)
        if(string[i]===" "){
            i=i+1;
            str =str +string[i].toUpperCase()
        }
        else {
            
            str = str+string[i]
        }
    }
    return str;
    
	}
}
const replaceChar = function(string){
    if (typeof string !== "string" || typeof(string) === "undefined" || string.length === 0) {
		throw "stringUtils.replaceChar error is successful"
	} else {
		var str = ""+string.charAt(0).toString();
       
        var len = string.length
        var insert = "*";
        var result =str;
        for(i=1;i<len;i++){
            if(string[i].toLowerCase()===str.toLowerCase()){
                result = result +insert
                if(insert==="*"){
                    insert = "$";
                }
                else if(insert==="$"){
                    insert = "*";
                }
            }
            else{
            result = result + string[i];
            }
        }
	}
    return result;
}
const mashUp = function(string1, string2){
    if (typeof(string1) === "undefined" || typeof(string2) === "undefined") {
		throw "stringUtils.mashUp error is successful";
	} else if (typeof(string1) != "string" || typeof(string2) != "string") {
		throw "stringUtils.mashUp error is successful";
	} else if (string1 === " " || string2 === " " || string1.length < 2 || string2.length < 2) {
		throw "stringUtils.mashUp error is successful";
	} else {

        a1 = string1.slice(0,2);
        a2 = string2.slice(0,2);
        str1 = a2.toString();
        str2 = a1.toString();

        return str1 + string1.slice(2) + " " + str2 + string2.slice(2)


		
	}
}


module.exports = {camelCase,replaceChar,mashUp};





