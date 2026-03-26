// EXPERIMENTING 
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(Number("  123  ")); // 123 (leading and trailing spaces are ignored)
console.log(Number("123abc")); // NaN (Not a Number)
// NaN is a special numeric value that represents an undefined or unrepresentable value in mathematics.
console.log(Number("")); // 0 (empty string is converted to 0)
console.log(Number(" ")); // 0 (string with only spaces is converted to 0)

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN


console.log(Number("0x11")); // 17 
console.log(Number("0b11")); // 3 
console.log(Number("0o11")); // 9
console.log(Number("Infinity")); // Infinity
console.log(Number("  -Infinity  ")); // -Infinity
console.log(Number("123.45")); // 123.45
console.log(Number("123,45")); // NaN (comma is not a valid character in a number)
console.log(Number("12.34.56")); // NaN (multiple decimal points are not allowed)

//converting to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1));   // true (any non-zero number is true)  
console.log(Boolean("hello")); // true (non-empty string is true)
console.log(Boolean("")); // false (empty string is false)
console.log(Boolean(" ")); // true (string with only spaces is true)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// converting to String
console.log(String(123)); // "123"
console.log(String(-123.45)); // "-123.45"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null));  // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN));   // "NaN"
console.log(String([1,2,3])); // "1,2,3"
console.log(typeof String("hello")); // "string"
console.log(typeof (123).toString()); // "string"


let a = 0.2;
let b = 0.1;
console.log(a+b); // 0.30000000000000004 (floating point precision issue)
console.log(a+b == 0.3);  // false
// this is happening because 0.2 and/or 0.1 cannot be represented exactly in binary floating point.

// There are several ways to handle this issue:
// 1. Multiplying and Dividing
console.log((a*10 + b*10)/10); // 0.3

// 2. Using toFixed() method
let x = Number((a+b).toFixed(1));
console.log(x == 0.3);   // true



