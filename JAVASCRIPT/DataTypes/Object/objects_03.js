/*
NOTE: As we studied key is basically stored as a string internally in object key value pair.
But from 2015 key can be STRING OR SYMBOL. 
*/
const sym = Symbol("id")
const user = {
    name: "Anurag",
    "age": 20,
    emailID: "jaiswal@gmail.com",
    amount: 20000,
    2444: 23,
    "home adress": "dwarka",
    [sym]: "Hello Ji"
}

console.log(user[sym]);

/*
**************NOTE**************
Its detailed explanation is present in the notion notes.
Must read.
*/