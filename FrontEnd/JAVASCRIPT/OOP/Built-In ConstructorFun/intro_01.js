/* 
built-in constructor functions are predefined functions provided by the language
to create and initialize specific types of native objects. While many data types can 
be created using literals (like [] or {}), these constructors offer an alternative way
to instantiate them using the new keyword.

Here we will cover three such constructor funciton:
1. Array
2. Function
3. Object
4. String

others are : Date, Map, Set, Promise ...etc
*/

/* 1. Array
Array is a built-in constructor used to create arrays.
Both work, but array literals ([]) are preferred. bcz more readable and syntactically better*/
const arr1 = new Array(1, 2, 3);
const arr2 = [1, 2, 3]; // preferred way

console.log(arr1); // [1, 2, 3]

/* 
2. Function
Function is a built-in constructor used to create new functions dynamically.
Though valid, using the Function constructor is rare and generally discouraged (it behaves like eval and can be unsafe or slower).
*/
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3)); // 5

/* 
3. Object
Object is a built-in constructor used to create objects.
👉 Again, object literals ({}) are preferred.
*/

const obj1 = new Object();  // creates an empty object
obj1.name = "Anurag";

const obj2 = {name: "Anurag"};  // preferred


console.log(global.Array)
console.log(globalThis.Array)

/* 
4. Yes, String is a built-in constructor in JavaScript. It is used to create and manipulate
textual data and can be used in two distinct ways: 
 
i) As a Constructor (with new): It creates a String object wrapper around a primitive 
string value. For example, new String("hello") returns an object of type "object" 
rather than a primitive string.
ii) As a Function (without new): It performs type conversion, converting the provided
value into a primitive string. For example, String(123) returns the primitive string.
*/

let str = new String();
console.log(str);



/* 
NOTE: ⚠️
These built-in constructors are present on the 'global object.'

In browser:
console.log(window.Array);
console.log(window.Object);
console.log(window.Function);
In Node.js:
console.log(global.Array);

Global Object Explained

(Below are the ways to access them)
Browser → window
Node.js → global
Modern JS → globalThis (standard)

Internally:
These constructors are properties of the global environment
*/

console.log(globalThis.Function)
console.log(globalThis.Object)


// Study about the Global Objects
/* 
- Predefined objects
- It is automatically initialized by the JavaScript engine when the script starts.
- Universal scope : Anything stored in the global object is in the "global scope,"
- Has built-in Properties (ParseInt),.. and built-in Constructors : Array, Object, Date, Promise, etc


| Environment        | Global Object Name | Key Features Provided                                |
| ------------------ | ------------------ | ---------------------------------------------------- |
| Web Browser        | `window`           | DOM (`document`), `alert()`, `fetch`, `localStorage` |
| Node.js            | `global`           | `process`, `Buffer`, `__dirname`, `__filename`       |
| Web Workers        | `self`             | Isolated background task context                     |
| Universal (ES2020) | `globalThis`       | Works across all environments                        |

*/