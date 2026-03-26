/*
AJAX: is Asynchronous Javascript and XML
JSON: is Javascript Object Notation

json() method returns a second promise that resolves with the result of parsing
the response body text as JSON. (Input is JSON, output is JS object)
*/

const URL = "https://dogapi.dog/api/facts"

// const getFacts = async () => {
//     let response = await fetch(URL);
//     console.log(response)  // response comes in json format
//     let data = await response.json();  // now this json converts it into js object & returns a promise
//     console.log(data);
//     console.log(data.facts[0])
// }

// getFacts();

// NOTE: WE CAN do the same thing using PROMISE CHAIN
fetch(URL)
    .then((response) => {    // fetch return a promise
        return response.json()         // json() returs a promise
    })
    .then((data) => {
        console.log(data.facts[0]);
    })

/*
Why .json() is async?
.json() → reads and parses the body
Parsing can take time → so it's async
*/