/*
***EXECUTION CONTEXT***
Its two phases:
----- 1. Memory Allocation Phase: -----
a = undefined
b = undefined
addNumber = fnCode (its reference)
sumResult1 = undefined
sumResult2 = undefined

----- 2. Execution Phase: -----
a = 10
b = 20
addNumber = the function code (its reference) is assigned to the variable addNumber.
sumResult1 = 30  (Here again a 'function execution context' will be created for fn: addNumber with params(10,20))
sumResult2 = 9   (Here again another 'function execution context' will be created for fn: addNumber with params(5,4))
*/

// ---- Code: ----  //
/*
console.log(a);  // "undefined"  now you know why this is giving undefined after studying this topic
var a = 10;
var b = 20;

console.log(addNumber);    // [Function: addNumber]   reference
var addNumber = function(num1, num2) {
    var sum = num1+num2;
    return sum;
}

console.log(sumResult1);  // undefined
var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(5,4);
console.log(sumResult1, sumResult2);

*/

// ------ ABOVE IS THE CODE FOR var variables ------- //
// now lets see how execution context is created in case of let and const

/*
----- 1. Memory Allocation Phase: -----
a = <uninitialized>  (in Temporal Dead Zone)
b = <uninitialized>  (in Temporal Dead Zone)
addNumber = <uninitialized> (in Temporal Dead Zone)     ****IMP****
sumResult1 = <uninitialized> (in Temporal Dead Zone)
sumResult2 = <uninitialized> (in Temporal Dead Zone) 

----- 2. Execution Phase: -----
a = 10
b = 20
addNumber = Now the function reference is assigned to addNumber
sumResult1 = 30  (Here function execution context will be created)
sumResult2 = 9   (Here function execution context will be created)
*/




// console.log(a);  // error bcz accessing before initialization
let a = 10
const b = 20

// console.log(addNumber)   // error because declared with const so hoiseted but uninitialized intially
const addNumber = function(num1, num2) {
    const sum = num1+num2;
    return sum;
}

// console.log(sumResult1); // same error can't access before initialization
const sumResult1 = addNumber(a, b);
const sumResult2 = addNumber(5, 4);
console.log(sumResult1, sumResult2);