/*
Callbacks : 
Callback is a function passed as an argument to another function.
*/

function calculateSum(a, b) {
    return a+b;
}

function calculator(a, b, callBackFunction) {
    return callBackFunction(a,b);
}

console.log(calculator(2,4, calculateSum));

// Instead of passing the already defined function you can pass its definition on the
// go while passing argument

function calSum(a, b, callback) {
    return callback(a,b);
}

console.log(calSum(9,8, (a,b) => {
    return a+b;
}))

// NOTE: These are callback of synchronous programming


// Now we'll see callback in asynchronous programming 
const hello = () => {
    console.log("Hello")
}
setTimeout(hello, 2000)  // here hello is callback passed to setTimeout fn
console.log("Bye")
