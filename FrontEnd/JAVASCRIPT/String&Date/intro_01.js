// String in depth
// Note : string are immutable in javascript (primitive data type)
let str1 = "Hello my name is Anurag";
let str2 = 'Hello my name is Anurag';
day = 5;
let str3 = `Hello my name
is Anurag and today is day ${day}`; 
// Template Literal (ES6 feature) modern way of writing strings
// template literals allow multi line strings and string interpolation
// String interpolation is a programming technique for building new strings by embedding
// variables, expressions, and literals into a string literal, often using a special syntax
// like ${variable} or f"string {variable}".

console.log(str1);
console.log(str2);
console.log(str3);

const s = "Hello World not Wow";
console.log(s.length);  // space will also be counted
console.log(s[0]); // H
console.log(s[5]); // space
// s[0] = 'h'  // error because string are immutable (but flow of program will not be disturbed this is simply ignored)

console.log(s.toUpperCase());  // copied string in uppercase

// searching in string
console.log(s.indexOf('Wo'));
console.log(s.lastIndexOf('Wo'));
console.log(s.includes('not')); // true
console.log(s.includes('Not')); // false (case sensitive)
console.log(s.includes('o'));  // true (if any character is present it will return true)

// slice
console.log(s.slice(0,5)); // NOTE: end index is not included)
console.log(s.slice(6)); // if end index is not given it will slice till end
console.log(s.slice(-5,-2));
console.log(s.slice(-5));

// substring
console.log(s.substring(2,5)); // NOTE: end index is not included
// same as slic but it does not accept negative index

// concatanation
const a = "Anuarg";
const b = "Jaiswal";
console.log(a+ " " + b);

console.log(5 + "Anurag"); // 5 will be converted to string and then concatanated
console.log(5 + "Anurag" + 5); 
console.log(5 + 5 + "Anurag"); // 10Anurag

const str = "Hello coder world coder";
// replace
console.log(str.replace('oder', 'hutiya')); // only first oder will be replaced
console.log(str.replaceAll('oder', 'hutiya')); // all oder will be replaced

// trim
const string = "   Anurag   ";
console.log(string);
console.log(string.trim()); // removes spaces from start and end
console.log(string.trimStart()); // removes spaces from start
console.log(string.trimEnd()); // removes spaces from end

// split
const names = "Anurag,Rahul,Shivam,Aryan,Kartik";
console.log(names.split(","));