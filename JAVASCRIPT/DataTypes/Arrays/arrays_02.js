// SORTING
const n = ["Bob", "Anurag", "Dibu", "amit", "Charlie"]
n.sort()
// n.reverse();  sort in descending order
console.log(n);

//NOTE: 
let arrr = [101,32,45,67,12, true];
arrr.sort()
console.log(arrr);  // OUTPUT: [ 101, 12, 32, 45, 67 ]
//BUT WHY THE OUPUT IS NOT SORTED COORECTELY???
//Ans: Because in javascript this sort() function first treats every element as string and then compare character by character.
// this is because in js arrays can be heterogeneous can contains data of multiple types so this sorting rule is chosen
// ascii value of 1 -> 31 ,... and 9 -> 39

const arr  = [10,40,29,32,11];
arr.sort((a,b) => a-b);
console.log(arr);


// MULTIDIMENTIONAL ARRAY ()
const arr2 = [10,20,30, [20, [12,32,45], 40,60], 80,90];
// accessing
console.log(arr2[3][1][2]);  // 45
// BUT WHAT IF WE WANT TO TO FLATTENT THE ARRAY (REDUCE THE DIMENSION)
const arr3 = arr2.flat();   // by default it flattens 1 level, you can pass the argument to flatten it at differnt levels
// const arr3 = arr2.flat(Infinity);   // completely flatens the array

console.log(arr3);


/*
************NOTE************
Arrays in JavaScript are objects, not contiguous blocks of memory like in C++ or Java.
Because arrays in JS are heterogeneous, elements can have different data types and sizes.
If we tried to store them contiguously (like in low-level arrays), then updating a value
(especially a longer string or object) would require shifting all subsequent data — which is inefficient.

So instead, JavaScript engines store arrays as objects with numeric keys and an internal
“elements backing store”, where each slot can hold: either a primitive value directly
(for small numbers, booleans, etc.), or a pointer (reference) to a heap object (for strings, arrays, objects, etc.).

For example:
const arr = [234, 9340, "Anurag", { a: 1 }];

In memory (conceptually):

Address	Value Stored	Meaning
1000	234	           Primitive value
1008	9340	       Primitive value
1016	0xadbdce	   Pointer to string "Anurag" in heap
1024	0xabbcde	   Pointer to object {a:1} in heap

So the array’s slots don’t hold data directly for all elements — they hold references (element pointers) for
non-primitive types.
Access by index in JS doesn’t use pointer arithmetic (base + index * size), but rather property lookup
(GetProperty(arr, "2")).
That’s why arrays in JavaScript behave more like Python lists than C arrays.
*/


// array destructuring
const array = [19,22,35,41,56,12];
// const first = array[0];
// const second = array[1];
// destructuring basically makes above code to be written in shorthand
const [first, second] = array;
console.log(first);
console.log(second);