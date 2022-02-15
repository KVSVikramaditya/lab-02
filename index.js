const arrayUtils = require('./arrayUtils');
const stringUtils = require('./stringUtils');
const objUtils = require('./objUtils');

//---------------------------------arrayUtils.mean--------------------------

try {
	// Should Pass
	const meanOne = arrayUtils.mean([1, 2, 3]);// Returns: 2
	console.log('mean passed successfully', meanOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const meanTwo = arrayUtils.mean(1234);//throws an error
	console.error('arrayUtils.mean not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const meanTwo = arrayUtils.mean([]) // throws an error
	console.error('arrayUtils.mean not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const meanTwo = arrayUtils.mean("banana"); // throws an error
	console.error('arrayUtils.mean not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const meanTwo = arrayUtils.mean(["guitar", 1, 3, "apple"]); // throws an error
	console.error('arrayUtils.mean not errored!');
} catch (e) {
	console.log(e);
}
try {
	// Should Fail
	const meanTwo = arrayUtils.mean(); // throws an error
	console.error('arrayUtils.mean not errored!');
} catch (e) {
	console.log(e);
}


//--------------------------------------Median---------------------------------------------------------

try {
	// Should Pass
	const meadianOne = arrayUtils.medianSquared([4, 1, 2]); // Returns: 4
	console.log('median passed successfully', meadianOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const meadianTwo = arrayUtils.medianSquared([]) // throws an error
	console.error('median not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const meadianTwo = arrayUtils.medianSquared("banana"); // throws an error
	console.error('median not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const meadianTwo = arrayUtils.medianSquared(1,2,3); // throws an error
	console.error('median not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const meadianTwo = arrayUtils.medianSquared(["guitar", 1, 3, "apple"]); // throws an error
	console.error('median not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const meadianTwo = arrayUtils.medianSquared(); // throws an error
	console.error('median not errored!');
} catch (e) {
	console.log(e);
}
//----------------------------------------arrayUtils.maxElement----------------------------


try {
	// Should Pass
	const maxElementOne = arrayUtils.maxElement([5, 6, 7]); // Returns: {'7': 2}
	console.log('maxElement passed successfully', maxElementOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const maxElementTwo = arrayUtils.maxElement(5, 6, 7); // throws error
	console.error('maxElement not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const maxElementTwo = arrayUtils.maxElement([]); // throws error
	console.error('maxElement not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const maxElementTwo = arrayUtils.maxElement(); // throws error
	console.error('maxElement not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const maxElementTwo = arrayUtils.maxElement("test"); // throws error
	console.error('maxElement not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const maxElementTwo = arrayUtils.maxElement([1,2,"nope"]); // throws error
	console.error('maxElement not errored!');
} catch (e) {
	console.log(e);
}


//----------------------------------------arrayUtils.fill----------------------------

try {
	// Should Pass
	const fillOne = arrayUtils.fill(6); // Returns: [0, 1, 2, 3, 4, 5]
	console.log('Fill passed successfully', fillOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const fillTwo = arrayUtils.fill(3, 'Welcome'); // Returns: ['Welcome', 'Welcome', 'Welcome']
	console.error('Fill passed successfully',fillTwo);
} catch (e) {
	console.log(e);
}

try {
	// Should Pass
	const fillOne = arrayUtils.fill(); // Throws error
	console.log('Fill not errored!', fillOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const fillTwo = arrayUtils.fill(0); // Throws Error
	console.error('Fill not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Pass
	const fillOne = arrayUtils.fill("test"); // Throws error
	console.log('Fill not errored!', fillOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const fillTwo = arrayUtils.fill(-4); // Throws Error
	console.error('Fill not errored!');
} catch (e) {
	console.log(e);
}
//------------------------------------arrayUtils.countRepeating--------------------

try {
	// Should Pass
	const countRepeatingOne = arrayUtils.countRepeating([7, '7', 13, true, true, true, "Hello", "Hello", "hello"]);
	console.log('countRepeating passed successfully', countRepeatingOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const countRepeatingOneTwo = arrayUtils.countRepeating("foobar")  //throws an error
	console.error('countRepeating not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const countRepeatingOneTwo = arrayUtils.countRepeating()   //throws an error
	console.error('countRepeating not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const countRepeatingOneTwo = arrayUtils.countRepeating([]) //returns {}
    console.log('countRepeating passed successfully', countRepeatingOneTwo);
	//console.error('countRepeating not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const countRepeatingOneTwo = arrayUtils.countRepeating({a: 1, b: 2, c: "Patrick"}) //throws an error
	console.error('countRepeating not errored!');
} catch (e) {
	console.log(e);
}






//----------------------------------------arrayUtils.isEqual-----------------------------


try {
	
	const isEqualOne = arrayUtils.isEqual([1, 2, 3], [3, 1, 2]); // Returns: true
	console.log('isEqual passed successfully', isEqualOne);
} catch (e) {
	console.error(e);
}
try {
	
	const isEqualTwo = arrayUtils.isEqual();
	console.error('isEqual not errored!! ');
} catch (e) {
	console.log(e);
}
//----------------------------------------stringUtils.camelCase-----------------------------


try {

 	const camelCaseOne = stringUtils.camelCase('my function rocks'); // Returns: "myFunctionRocks"
	console.log('camelCase passed successfully', camelCaseOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const camelCaseTwo = stringUtils.camelCase(["Hello", "World"]); // Throws Error
	console.error('camelCase not errored!!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const camelCaseTwo = stringUtils.camelCase(); // Throws Error
	console.error('camelCase not errored!!');
} catch (e) {
	console.log(e);
}
try {
	// Should Fail
	const camelCaseTwo = stringUtils.camelCase(''); // Throws Error
	console.error('camelCase not errored!!');
} catch (e) {
	console.log(e);
}
try {
	// Should Fail
	const camelCaseTwo = stringUtils.camelCase(123); // Throws Error
	console.error('camelCase not errored!!');
} catch (e) {
	console.log(e);
}

//----------------------------------------stringUtils.replaceChar-----------------------------


try {
	// Should Pass  
	const replaceCharOne = stringUtils.replaceChar("Hello, How are you? I hope you are well");
	console.log('replaceChar passed successfully', replaceCharOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const replaceCharTwo = stringUtils.replaceChar(123);
	console.error('replaceChar not errored!!');
} catch (e) {
	console.log(e);
}


try {
	// Should Fail
	const replaceCharTwo = stringUtils.replaceChar(""); // Throws Error
	console.error('replaceChar not errored!!');
} catch (e) {
	console.log(e);
}

//----------------------------------------stringUtils.mashUp-----------------------------


try {
	// Should Pass   
	const mashUpOne = stringUtils.mashUp("Patrick", "Hill");
	console.log('mashUp passed successfully', mashUpOne);
} catch (e) {
	console.error(e);
}
try {
	// Should Pass   
	const mashUpOne = stringUtils.mashUp("hello", "world"); //Returns "wollo herld"
	console.log('mashUp passed successfully', mashUpOne);
} catch (e) {
	console.error(e);
}

try {
	// Should Fail
	const mashUpTwo = stringUtils.mashUp("Patrick", ""); //Throws error
	console.error('mashUp not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const mashUpTwo = stringUtils.mashUp(); // Throws Error
	console.error('mashUp not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const mashUpTwo = stringUtils.mashUp("John") // Throws error
	console.error('mashUp not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const mashUpTwo = stringUtils.mashUp ("h", "Hello") // Throws Error
	console.error('mashUp not errored!');
} catch (e) {
	console.log(e);
}

try {
	// Should Fail
	const mashUpTwo = stringUtils.mashUp ("h","e") // Throws Error
	console.error('mashUp not errored!');
} catch (e) {
	console.log(e);
}

//----------------------------------------objUtils.makeArrays-----------------------------


try {

const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

	const firstSecondThird = objUtils.makeArrays([first, second,third]);
	console.log('makeArrays passed successfully', firstSecondThird);

} catch (e) {
	console.error(e);
}
try {

    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    
    const secondThird = objUtils.makeArrays([second, third]);
        console.log('makeArrays passed successfully', secondThird);
        
    } catch (e) {
        console.error(e);
    }
    try {

        const first = { x: 2, y: 3};
        const second = { a: 70, x: 4, z: 5 };
        const third = { x: 0, y: 9, q: 10 };
        
        const thirdFirstSecond = objUtils.makeArrays([third, first, second]);
            console.log('makeArrays passed successfully', thirdFirstSecond);
            
        } catch (e) {
            console.error(e);
        }

try {
	// Should Fail
	const first = {
		x: 2,
		y: 3
	};
	const second = {
		a: 70,
		x: 4,
		z: 5
	};

	const third = 1;
	const firstSecondThird = objUtils.makeArrays([third, first, second]);
	console.error('makeArrays did not error');
} catch (e) {
	console.log(e);
}



//----------------------------------------objUtils.isDeepEqual-----------------------------


try {
	const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}

	const isDeepEqualOne = objUtils.isDeepEqual(first, second);
	const isDeepEqualTwo = objUtils.isDeepEqual(forth, fifth)
	const isDeepEqualThree = objUtils.isDeepEqual(forth, third);
  //  console.log(isDeepEqual({}, {})); // true
    const isDeepEqualFour = objUtils.isDeepEqual({}, {}); // true
	 console.log("isDeepEqual passed successfully ", isDeepEqualOne); // false
    console.log("isDeepEqual passed successfully ", isDeepEqualTwo); // false
    console.log("isDeepEqual passed successfully ", isDeepEqualThree); // false
    console.log("isDeepEqual passed successfully ", isDeepEqualFour); // true
    
} catch (e) {
	console.error(e);
}
try {
	// Should Fail
	const isDeepEqualFail = objUtils.isDeepEqual("foo", "bar");
	console.error('isDeepEqual did not error');
} catch (e) {
	console.error(e);
}

    try {
        // Should Fail
        const isDeepEqualFail = objUtils.isDeepEqual([1,2,3], [1,2,3]);
        console.error('isDeepEqual did not error');
    } catch (e) {
        console.error(e);
    }

//----------------------------------------objUtils.computeObject-----------------------------

try {
	
	const computeObjectOne = objUtils.computeObject({
		a: 3,
		b: 7,
		c: 5
	}, n => n * 2);
	console.log('computeObject of objects and function', computeObjectOne);
} catch (e) {
	console.error(e);
}
try {
	
	const computeObjectThree = objUtils.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2);
	console.error('computeObject did not error');
} catch (e) {
	console.log(e);
}