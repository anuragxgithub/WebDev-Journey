/*
async-await :

async keyword: when a function is declared with async , it ALWAYS return a PROMISE

await keyword: await pauses the execution of the async function until a promise is resolved
NOTE:
1. 'async' function always returns a Promise.
2. 'await' can only be used inside async functions.  ***
3. 'await' pauses execution until Promise resolves.
4. Makes asynchronous code look like synchronous code.
5. Used mainly with API calls, database requests, timers.

*/

async function hello() {
    console.log("Hello Asynchronous Programming!")
}

console.log(hello)
console.log(hello())   // see promise is returned


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data")
            resolve(200)
        }, 2000)
    });
}

/*
await api(); 
If you try this in older environments: You would get and error
await is only valid in async functions
You are allowed to use await without an async function because you are likely running the code in an environment that supports Top-Level Await.
*/

// so we will do something like this
async function getWeatherInfo() {
    await api();  // until the promise return by api is not resolved other surrounding code will be paused
    await api();
}

getWeatherInfo()

// Now lets see how we can solve previous problem of 'promise chaining' using 'asyn-await'
// so that we don't need to use multiple .then() chains in next intro