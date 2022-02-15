const makeArrays = function(objects) {
    if (!Array.isArray(objects) || objects === undefined || objects.length < 2 || objects===null) {
        throw "objUtils.makeArrays error is successful "
      }
      for (let i = 0; i < objects.length; i++) {
        if (objects[i] === undefined || Object.keys(objects[i]).length === 0
            || typeof objects[i]  !== "object" ) {
                throw "objUtils.makeArrays error is successful "
        }
      }

    
      var result =[]
      var j= 0;
    for (let i = 0; i < objects.length; i++) {
        for (const [key, value] of Object.entries(objects[i])) {
        //   console.log(`${key}: ${value}`);
            result[j] = [key,value];
            j++;
          }
    }


    return result;
  }

const isDeepEqual = function(obj1, obj2){
    let result = true;
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' ) {
        throw "objUtils.isDeepEqual error is successful"
    }
    var obj1Keys = Object.keys(obj1);//return array of keys
    var obj2Keys = Object.keys(obj2);
    if (obj1 === obj2)
        return true
    if (obj1Keys.length !== obj2Keys.length) {
        result =  false;
    }

    obj1Keys.forEach((key) => {
        if (obj2Keys.includes(key)) {  
             if(obj1[key] === obj2[key]) {
                result = true
            }else{
                result = false
            }
        }else if (!obj2Keys.includes(key)){
            result = false;
        }else{
            if (typeof obj1[key] === 'function' || typeof obj2[key] === 'function') { 
                if (obj1[key].toString() !== obj2[key].toString()) {
                    
                    result = false;
                }
            }
            if (!isDeepEqual(obj1[key], obj2[key])) {

                result = false;
            }
        }      
    });

    return result;
}

const computeObject = function(object, func){
    if (typeof object !== "object") {
        throw "objUtils.computeObject error is successful"
      }
      if (!(func instanceof Function)) {
        throw "objUtils.computeObject error is successful"
      }

      
      for (var property in object) {
          if(typeof object[property] === "number"){
              object[property] = func(object[property])
          }else{
            throw "objUtils.computeObject error is successful"
          }
        
      }
      return object;
}

module.exports = {makeArrays,isDeepEqual,computeObject}