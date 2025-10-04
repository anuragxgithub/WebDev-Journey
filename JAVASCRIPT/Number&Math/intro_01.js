// Number
let a = 12;
let b = 6.78612;
let c = b.toFixed(1); // 6.8 (will round off the number) 
console.log(c);
console.log(typeof c); // string
console.log(b); // 6.78212 (original value of b is not changed bcz it is immutable)

let d = b.toPrecision(3);  // parameter: num of digits should present (this will also round off and convert to string)
console.log(d);
console.log(typeof d);

console.log(b.toString()) // gets a copy of b in string from


let num1 = new Number(123); // creates a Number object
let num2 = new Number(123);
console.log(num1 == num2); // false (b/z we know objects get compared by their memory location)
// but 
num2 = num1; // now both point to same memory location
console.log(num1 == num2); // true 
let num3 = 123; 
console.log(num1 == num3); // true


// NOTE: ANY OBEJCT EITHER IT IS EMPTY OR NOT, WHEN CONVERTED TO BOOLEAN IT WILL ALWAYS BE TRUE
// BECAUSE OBJECTS ARE CHECKED ON THE BASIS OF REFERNCE AND REFERENCE ALWAYS EXIST SO MARKED AS TRUE
console.log(Boolean(0)); // false
console.log(Boolean("")); // false because string is not an object
console.log((Boolean(new Number(0)))); // true because it is an object
console.log((Boolean(new String("")))); // true because it is an object
console.log((Boolean(new Boolean(false)))); // true because it is an object
console.log((Boolean({}))); // true because it is an object
console.log((Boolean([]))); // true because it is an object

console.log((Boolean(null))); // false because null is a kind of object that does not point to anything so no address hence 0

// LEARNING: NON-Primitive values (objects) are always compared by their reference (memory location) and not by their content