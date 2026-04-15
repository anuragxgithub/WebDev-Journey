/* 
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes

Prerequiste: Read Notes. ⚠️

"The Root Prototype":
- Object.prototype is the base prototype for almost all objects.
- It contains methods like toString() and hasOwnProperty().
- The prototype of Object.prototype is null, marking the ultimate end of any chain.

*/

// see in console by creating array

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};
// type this in console : 'myObject.'  you will see options popping of all properties avail. to myObj




// DIFFERENT WAYS OF 'ACCESSING' Object's prototype
console.log(myObject.__proto__);  // non-standard way of accessing proto. of an obj
console.log(Object.getPrototypeOf(myObject)); // standard way of accessing proto. of an obj