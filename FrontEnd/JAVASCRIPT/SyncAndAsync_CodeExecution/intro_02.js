/*
Asynchronous code execution means some instruction may execute in background,
and js doesn't wait for them to finish before moving to the next line.

Common Asynchronous features are:
1. setTimeOut()
2. setInterval()
3. Promises
4. async await
5. fetch [api calls]
*/

console.log(1)
console.log(2)
setTimeout(() => {
    console.log(3)
},2000)
// now this time js won't wait for the console.log to print 3 if it takes more time
// it will be skipped and let it run in background for time being next instructions will run
console.log(4)
console.log(5)