/*
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON#no_really_what_is_json
json -> javascript object notation
it is a format for storing and transporting data
it is often used when data is sent from a server to a web page or vice versa
json syntax is based on javascript object notation syntax
but json format is text only
json data is written as key/value pairs
keys must be strings and values must be a valid json data type
(string, number, object, array, boolean, or null)
json data is usually stored in files with a .json extension

this is used as a common language for transferring data between different systems and applications
almost all programming languages support json format
*/

// js object to json
const user = {
    name: "Anurag Jaiswal",
    age: 21,
    city: "bhopal"
};


const jsonData = JSON.stringify(user);
console.log(jsonData);
console.log(typeof jsonData); // string

// json to js object
const jsonString = `{
    "name" : "Anurag Jaiswal",  
    "age" : 21,
    "city" : "bhopal"
}`;    // note until and unless you make it a string it will act as a js object bcz of the syntax
// keys must be in double quotes

const jsObject = JSON.parse(jsonString);
console.log(jsObject);
console.log(typeof jsObject); // object