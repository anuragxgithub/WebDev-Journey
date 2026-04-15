/* 
We can set set/assign prototype to an object.


👉 An object can have only ONE prototype.
If you assign a new one, the old one is replaced (lost for that object). 
*/

const obj = {};

const newProto = {
  greet() {
    console.log("Hello");
  }
};

console.log(Object.getPrototypeOf(obj))  // will have Object prototype(Root prototype)
Object.setPrototypeOf(obj, newProto);   //OR  obj.__proto__ = newProto;
console.log(Object.getPrototypeOf(obj))  // now have newProto as prototype

// In the next intro we'll what are the different ways of setting object's prototype.