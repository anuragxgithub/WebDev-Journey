/**
Promises in JS:
A promise in Js is an object that represents the eventual completion or failure
of an asynchronous operation & its resulting value.

Promises are needed to handle asynchronous operations like:
1. Api calls
2. Database request
3. File loading
4. Timers


STATES OF A PROMISE
1. Pending -> operation is still running
2. Resolved -> operation completed successfully
3. Rejected -> operation failed

 */

// Creating a promise (ie, an object)
let promise = new Promise((resolve, reject) => { // here resolve and reject are         callbacks provided by js
    resolve("Success");  // after you put this that means promise is resolved()
    console.log("Just a demo");
})

console.log(promise)
/*
On running in browser

Promise {<fulfilled>: 'Success'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "Success"

*/

// similarly for reject("error occurred")


/*
NOTE: 
But in reality we don't create promise object, mostly it comes from any request
like api fetch an all 
lets see in next intro
*/