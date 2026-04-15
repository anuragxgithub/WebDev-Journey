/* 
Classes in JavaScript are actually functions under the hood.
And all functions are object in JS.

Class = Function + Prototype + Better syntax
We can think of it as a syntactic sugar over constructor function + prototypes


*/

// 1. Proof
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}
console.log(typeof Person); // function
/*
Internally JS treats it almost like:

function Person(name) {
    this.name = name;
}
Person.prototype.greet = () {
    console.log(`Hello ${this.name}
)}

Clearly mehods go on the prototype object so created only once, all instances share them.
*/




/* 2. Key Differences:

-Even though a class is internally a function, it isn't exactly the same as a standard function. There are some "under the hood" protections:

-[[IsClassConstructor]] Internal Flag: Classes are marked with a special internal property. This is why you must use the new keyword. If you try to call a class like a normal function (User()), it throws a TypeError.

-Strict Mode: All code inside a class block is automatically executed in strict mode.

-Non- enumerable Methods: Methods defined inside a class (like greet() above) are set to enumerable: false by default, meaning they won't show up in a for...in loop. */

/* 
| Feature            | Class   | Function  |
| ------------------ | ------- | --------- |
| Hoisting           | ❌ No    | ✅ Yes     |
| Call without `new` | ❌ Error | ✅ Allowed |
| Syntax             | Clean   | Verbose   |
| Strict mode        | Always  | Optional  |

*/