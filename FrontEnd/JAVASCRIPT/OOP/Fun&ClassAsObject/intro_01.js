/*
Every 'Function' in JS is a special kind of object (callable object)

THE SECRET INTERNAL SLOTS:
What makes a function "callable" while a standard object is not? The JavaScript 
engine gives function objects two hidden internal 'properties' (slots) that regular
objects don't have:

[[Call]]: This allows the object to be executed (e.g., myFunc()).
[[Construct]]: This allows the object to be used as a constructor with the new
keyword (e.g., new myFunc()).

Note: Not all functions have [[Construct]]. For example, arrow functions do not have it,
which is why you can't use new with an arrow function.

*/

// 1. Proof
function fun() {}
console.log(typeof fun);   // although type is giving function(special tag) but internally:
console.log(fun instanceof Object);  // true
// instanceof operator : determines whether the given value inherits from this function
// if this function is used as constructor


// 2. Functions can have properties (like objects)
fun.language = "english";
console.log(fun.language)
// console.log(fun)

// 3. Functions have methods (because they inherit)
// Functions inherit from Function.prototype, which itself inherits from Object.prototype.
console.log(fun.toString());
do {
    fun = Object.getPrototypeOf(fun);
    console.log(fun);
} while(fun);



// 4. Functions have a special ability [[Call]]
// Functions are objects + callable behavior           This is what makes them unique.


// 5. ⚠️ Functions are created by a constructor too :)
function foo() {}
/* Internally similar to :
const foo = new Function();     So,
foo.__proto__ = Function.prototype      // sets its prototype
*/





