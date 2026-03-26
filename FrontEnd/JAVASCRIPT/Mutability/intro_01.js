// NOTE: ALL THE 'PRIMITIVES' ARE IMMUTABLE IN JAVASCRIPT
//       (string, number, boolean, null, undefined, symbol, bigint)

let a = 5;
a = 10; // This is not mutating the value of 'a', but reassigning it to a new value
        // a new block of memory is created for the new value 10
console.log(a); // 10

let name = "Anurag"
name[0] = 'R' // This will not change the value of name, because strings are immutable
console.log(name); // Anurag

// NOTE: ALL THE 'OBJECTS' (NON-PREMITIVE DATA TYPES) ARE MUTABLE IN JAVASCRIPT
//       (arrays, functions, objects)

const arr = [1,2,3];
console.log(arr); 
arr[0] = -10;
console.log(arr); // [-10, 2, 3] - The value of arr is mutated

const obj = {
    name: "Anurag",
    age: 21,
    isAdult: true
};
console.log(obj);
obj.name = "Rohan";
console.log(obj); // { name: 'Rohan', age: 21, isAdult: true } - The value of obj is mutated



// PLAYING WITH COPY AND REFERENCE
let x = 5;
let y = x; // y is a copy of the value of x
y = 10; // This will not change the value of x, because y is a copy of the value of x
console.log(x); // it prints 5 because x is not changed
console.log(y); // it prints 10

let arr1 = [1,2,3];
let arr2 = arr1; // arr2 is a reference to the same array as arr1
arr2[0] = -10; // This will change the value of arr1, because arr2 is a reference to the same array as arr1
console.log(arr1); // it prints [-10, 2, 3] because arr1 is changed
console.log(arr2); // it prints [-10, 2, 3]


// Why objects uses reference and not copy?
// Because objects can be very large in size, and copying them would be inefficient
// So, instead of copying the entire object, we just create a reference to the same object in memory
// This way, we can save memory and improve performance