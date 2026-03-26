/*
Fetch API:
The Fetch API is a built-in javascript feature which provides an interface for fetching(sending/receiving) resources.

-> It uses 'RESQUEST' and 'RESPONSE' objects.
-> The fetch() method is used to fetch a resource(data)  [sends request]
   It returns a Promise.

Syntax: 
let promise = fetch(url, [options])   by default option is getResquest
*/




const URL = "https://dogapi.dog/api/facts";

/*
let promise = fetch(URL)   // fetch is asynchronous ie won't block the flow while waiting for a result

console.log(promise)   

*/
/*
Here you may ask that in browser it is showing status fulfilled of promise but here in vs code 
it is showing pending why?


1. In VS Code (Node.js)
-fetch() is asynchronous
-It immediately returns a pending Promise
-console.log() runs before the request completes
Promise { <pending> }
Because the API call is still in progress.

2. In Browser (DevTools)
-Browsers do something tricky :
-They log the reference of the Promise
-Then later, when it resolves, DevTools updates its state

*/

// since fetch() is asynchronous so lets handle it using async await

const getFacts = async () => {
    console.log("Getting data....")
    let response = await fetch(URL)    // response is basically a promise obviously
    console.log(response) // see now resonse is logged after it got completed because of await
    console.log(response.status)
}

getFacts();
// but here we are not getting the desired response format 
// in modern days most of the response comes in JSON format
// for that we have to study some terms like : AJAX and JSON

/*
AJAX: is Asynchronous Javascript and XML
JSON: is Javascript Object Notation

json() method returns a second promise that resolves with the result of parsing 
the response body text as JSON. (Input is JSON, output is JS object)
*/