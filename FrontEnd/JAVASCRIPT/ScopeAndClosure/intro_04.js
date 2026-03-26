// HIGHER ORDER FUNCTION
/*
A higher-order function is a function that does one of the following:

- Takes another function as an argument.
- Returns another function as its result.
*/

function double(value) {
    return function execute(num) {
        return num*value;
    }
}

const n = double(20);
console.log(n(5));
// same as 🔽
// const n = double(20)(5);
// console.log(n);