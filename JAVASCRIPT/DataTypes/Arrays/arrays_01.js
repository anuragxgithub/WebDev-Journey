const arr = [1,2,4,5, "Anurag", 2.5];
// arr = [1,2,3]; NOTE: THIS IS NOT ALLOWED B/Z WE CAN'T REINITIALIZE OR REDECLARE THE CONST i.e,(we  once the address is assigned to cont it can't be changed)
console.log(typeof arr);
arr[0] = 5; // we can do this bz address is not changing
console.log(arr);  // Note: objects type in java are mutable

let marks = [45,64,100,80,98];
// LENGTH
console.log(marks.length);

// PUSH AND POP
// console.log(marks.pop());  give ans 98
// console.log(marks.push(23));  // give index at which element is pushed

// ADDING/DELETING ELEMENT AT STARTING
marks.unshift(69);  // adds the given element at the start
console.log(marks);
marks.shift();
console.log(marks); // deletes the element from starting of the array
// NOTE: shift and unshift are not advisable to use b/z efficiency reduces



// ITERATING OVER AN ARRAY

// 1.
// let array = [1,2,4,"Anurag", "Rahul", 2.5];
// for(let i = 0; i< arr.length; i++) {
//     console.log(array[i], end = " ");
// }

// 2. for of loop
for(let item of marks) {
    console.log(item)
}

let marks2 = marks;
// NOTE: now marks2 is poiting to the same memory address as of marks so making changes in marks2 will also reflect in marks array
marks2.push(66);
console.log(marks);

// TRIMMING OR SLICING
const a = [10,20,30,40,50,49];
const b = a.slice(2,4);  // end idx is not included
console.log(b);

// what if we want to actually remove some continuous portion from ORIGINAL array?
const removed = console.log(a.splice(2,4)); // end idx is also included
console.log(a);
// NOTE: you can trim out and insert both at the same time
const arr1 = [10,20,30,40,50,49];
const arr2 = arr1.splice(1,3, "Anurag", 69);
console.log(arr1);

// slice -> accessing a slice of array without changing the original array
// splice -> accessing and modifying the elements of original array


// ADDING ARRAY TO AN ARRAY
const arr3 = [123,4,3,5,56,98,637];
const arr4 = ["Rohit",34];
// arr3.push(arr4)   // will add as an single element
const arr5 = arr3.concat(arr4);  // concat extends the elements but gives new array
console.log(arr5);
const arr6 = [arr3, arr4, arr5];  // again each array will be treated as single element
console.log(arr6);
// *********IMP**********
// spread operator
const arr7 = [...arr3, ...arr4, ...arr5];
console.log(arr7);



const names = ["Alice","bob", "Anurag"]
console.log(names.toString()); // converts the array to string
console.log(names.join("-")); // sames as toString() convert the array in string but we can chose how to seperate


// SEARCHING INDEX
const nums  = ["anurag", 23, 243,47,9873, 32,23];
console.log(nums.indexOf(23));  // give idx of first occurent
console.log(nums.lastIndexOf(23));
console.log(nums.includes("anurag")); // true



