/* 
Internally, a class is a function.

Specifically, a class in JavaScript is a special type of function that acts as a 
blueprint for creating objects. While the class syntax (introduced in ES6)
looks like Java or C++, it is actually "syntactic sugar" over JavaScript’s 
existing prototypal inheritance system.
*/

// 1. The Internal Proof
// If you define a class and then use the typeof operator, the engine reveals its true nature:

class myClass {};
console.log(typeof myClass)

// When you write a class, the JavaScript engine essentially creates a constructor function and attaches any methods you define to that function's prototype.
// as we already know each function in js has a property .prototype which is an object itself.

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// INTERNAL EQUIVALENT (PROTOTYPAL)
/*

function User(name) {
    this.name = name;
}
User.prototype.sayHi = () => {
    console.log(this.name);
}

here method sayHi is added in the prototype of User function
*/


/* 
OBJECT VS INSTANCE:
An Object is a generic term. It refers to a standalone unit created in memory that holds data and behavior.

An Instance is used when describing an object's relationship to a specific Class. It represents a concrete realization of that Class.

Eg:
const s1 = new Student();
s1 ek Object hai.
s1, Student class ka ek Instance hai.
*/