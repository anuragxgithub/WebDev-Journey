const arr = [10,20,30,40,50];
const [first, second] = arr; // destructuring : nothing only shorthand for assigning values of array to variable
console.log(first, second);
const [f, s, ...num] = arr;
console.log(f, s, num);