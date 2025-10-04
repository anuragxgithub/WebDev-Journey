// playing with 'let', 'const' and 'var' keywords
var a = 23;
var a = "Anurag";
console.log(a);
if(true) {
    var b = 45;
}
console.log(b);
/*
NOTE: From the above code we can see the absurd behaviour of 'var' keyword like we can re-declare and initialze it
and also it is not block scoped.
Hence it is advised to use 'let' and 'const' keywords instead of 'var' keyword.
*/
const pi = 3.14;
// const pi = 3;   // it will throw an error because we can't re-declare a 'const' variable
let root_two = 1.414;
// let root_two = 1.41;   // it will throw an error because we can't re-declare a 'let' variable
root_two = 1.41;   // but we can re-initialize it



// **DATA TYPES IN JAVASCRIPT** //
// 1. Primitive Data Types
// Number, String, Boolean, BigInt, Undefined, Null, Symbol

// Number
let n1 = 5;
let n2 = 39.6;
console.log(n1, n2);
console.log(typeof n1);  // prints 'number'

// String
let str1 = "Anurag";
let str2 = 'Jaiswal';
console.log(str1, str2);
console.log(typeof str1);  // prints 'string'

// Boolean
let isDriver = true;
const x = false;
console.log(isDriver, x);
console.log(typeof isDriver);


// BigInt
let bigint = 1234567890123456789012345678901234567890n;
console.log(bigint);   // case insensitive you can write bigint or BigInt
console.log(typeof bigint);   // prints 'bigint'


// Undefined
let name;
console.log(name);   // see here if we declare something and doesn't initialize it, it will be undefined by default
console.log(typeof name);   // prints 'undefined'


// Null
const n = null;
console.log(n);   // null is an assignment value. It can be assigned to a variable 'AS A REPRESENTATION OF NO VALUE'
console.log(typeof n);   //** NOTE:  PRINTS 'OBJECT' (THIS IS A BUG IN JAVASCRIPT, IT SHOULD PRINT 'NULL') **

// Symbol  (generates a unique identifier)
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2);   // false because each symbol is unique
console.log(typeof id1);   // prints 'symbol'

// 2. Non-Primitive Data Types
// Array, Object, Function

// Array
let arr = [1,2,4,'Anurag', true];
console.log(arr);
console.log(typeof arr);  // prints 'object' because in javascript array is a type of object

// Object (key-value pairs)
let obj = {
    name: "Anurag",
    age: 21,
    isStudent: true
};
console.log(obj);
console.log(typeof obj);  // prints 'object'

// Function
let funn = function greet() {    // see in javascript we can assign function to a variable.
    console.log("Hello, World!");
}

console.log(funn)
funn();    // NOTE: You can't use greet() here because it is not defined in this scope. It is defined in the scope of funn variable only. 
console.log(typeof funn);   // prints 'function'