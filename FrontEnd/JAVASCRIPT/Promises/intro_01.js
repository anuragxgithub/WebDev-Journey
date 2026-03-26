/*
The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value.

A Promise is in one of these states:
-pending: initial state, neither fulfilled nor rejected.
-fulfilled: meaning that the operation was completed successfully.
-rejected: meaning that the operation failed.

A promise is said to be settled if it is either fulfilled or rejected, but not pending

*/

console.log("Hello, World! Start")


const p1 = fetch('https://api.github.com/users');
console.log(p1)    // here p1 is a Promise object in pending state

p1.then((response) => {
    console.log(response);  // here p1 is a Promise object in either fulfilled or rejected state
})

console.log("Hello, World! End")

// but how to actually print the content of response?
// we can use another .then() to parse the response as JSON
// in intro_02.js