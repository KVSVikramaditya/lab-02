
const mean = function(array){

	if (Array.isArray(array) === false || array === undefined || array.length <= 0 || array === null) {
		throw "arrayUtils.mean error is successful";
	} 
    else{

        var sum = 0;
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!=="number"){
                throw "arrayUtils.mean error is successful";
            }
            sum= sum + array[i];
        }
        return sum/array.length;
    }

}
const medianSquared = function(array){
    if (!Array.isArray(array) || array === undefined || array.length <= 0 || array === null) {
		throw "arrayUtils.median error is successful";
	} 




    else {

        var len = array.length;
        for(let i=0; i<len;i++){
            if( typeof array[i]!== "number"){
                throw "arrayUtils.median error is successful";
            }
        }
        array.sort();
       
        var median = 0;
        console.log("this is median" + array[0]);
        if(len===1){
            median = array[0];
        }
        else if(len%2===0){
            median = (array[len / 2 - 1] + array[len / 2]) / 2;
        }
        else{
            median = array[(len - 1) / 2];
        }
        var result = median*median;

    }
    return result;
}
const maxElement = function(array){
	if (!Array.isArray(array) || array === undefined || array.length <= 0 || array === null) {
		throw "arrayUtils.maxElement error is successful";
	} else {
		var max = array[0];
        var index= -1;
        var len =array.length;
        for(let i=0; i<len;i++){
            if( typeof array[i]!== "number"){
                throw "arrayUtils.maxElement error is successful";
            }
        }

        for(let i=0;i<len;i++){
            if(max<array[i]){
                max = array[i];
                index= i;
            }
        }
        objMax = {max,index}
      //  console.log(max+"   "+index);
	}
    return objMax
}
const fill = function(end, value){
    if (end === undefined || end <= 0 || isNaN(end) || end === null) {
		throw "arrayUtils.fill error is successful"
	} else {
        var arr = [];
		
        if(value!==undefined){
            for(let i=0;i<end;i++){
                arr.push(value);
            }
        }
        else{
           // console.log("come on");
            for(let i=0;i<end;i++){
                arr[i]=i;
            }
        }
    
	}
    return arr
}
const countRepeating = function(array){
    if (!Array.isArray(array) || array === undefined || array ===null) {
		throw "arrayUtils.countRepeating error is successful";
	} else {
        objResult ={}
		if(array.length===0){
            return objResult;
        }
        for(let i=0;i<array.length;i++){
            if(objResult[array[i]]===undefined){
                objResult[array[i]]=1;
            }
            else{
                if(typeof array[i]==="string"){
                    objResult[array[i]]+=1;
                }
                objResult[array[i]]+=1;
            }
        }
        for (const [key, value] of Object.entries(objResult)) {
          //  console.log(`${key}: ${value}`);
            if(objResult[key]<2||objResult[key]===NaN||objResult[key]===undefined){
                delete objResult[key]
            }
            
          }
	}
    return objResult;
}

const isEqual = function(arrayOne, arrayTwo){
	if (!Array.isArray(arrayOne) || arrayOne === undefined || arrayOne.length === 0 || arrayOne===null||
		!Array.isArray(arrayTwo) || arrayTwo === undefined || arrayTwo.length === 0||arrayTwo===null) {
		throw "arrayUtils.isEqual error is successful";
	} else {
		lena1 = arrayOne.length
        lena2 = arrayTwo.length
        if(lena1 !== lena2){
            return false
        }
        arrayOne.sort()
        arrayTwo.sort()

        const isEq = function(a1, a2){
            a1.sort()
            a2.sort()
  //          console.log("passed in ")
   //         console.log(a1)
            if(a1.length!== a2.length){
                return false
            }
            else{
                for(let i=0;i<a1.length;i++){
           //         console.log(a1[i])
           //         console.log(a2[i])
                    if(a1[i]!==a2[i]){
                        return false
                    }
                }
            }
  //          console.log("passed out ")
            return true;
        }

        for(let i=0;i<lena1;i++){

            if(Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])){
                let bol = isEq(arrayOne[i],arrayTwo[i])
                if (bol === false){
                    return false
                }
            }

            else if(arrayOne[i]!==arrayTwo[i]){
                return false
            }
        }


	}
    return true;
}


module.exports = {mean,medianSquared,maxElement,fill,countRepeating,isEqual};






