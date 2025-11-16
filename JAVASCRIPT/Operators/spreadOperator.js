/*
The spread operator in JavaScript, denoted by three dots (...), allows an iterable (like an array or string)
or an object's properties to be expanded into individual elements or key-value pairs where multiple elements
or properties are expected. It is a powerful feature for manipulating data structures and passing arguments
to functions. Here are some common uses of the spread operator:
*/

// 1. COPYING ARRAYS AND OBJECTS: The spread operator enables the creation of shallow copies of arrays and objects, 
// preventing direct modification of the original.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // copiedArray is [1, 2, 3]

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // copiedObject is { a: 1, b: 2 }

// 2. MERGING ARRAYS AND OBJECTS: It simplifies the concatenation of arrays and the merging of object properties.

const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2]; // mergedArray is [1, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 }; // mergedObject is { a: 1, b: 2, c: 3, d: 4 }

// 3. PASSING ARGUMENTS TO FUNCTIONS: The spread operator can expand an array into individual arguments for a function.

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // result is 6

// 4. ADDING ELEMENTS TO ARRAYS: It allows for easily adding elements to an existing array at any position.

const fruits = ['apple', 'banana'];
const newFruits = ['orange', ...fruits, 'grape']; // newFruits is ['orange', 'apple', 'banana', 'grape']

// 5. CONVERTING ITERABLES TO ARRAYS: The spread operator can convert other iterable objects, like strings or 
// Set objects, into arrays.

const str = "hello";
const charArray = [...str]; // charArray is ['h', 'e', 'l', 'l', 'o']

const uniqueNumbers = new Set([1, 2, 2, 3]);
const uniqueArray = [...uniqueNumbers]; // uniqueArray is [1, 2, 3]