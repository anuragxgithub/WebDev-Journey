/*
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
1. A javascript object is an entity having state and behaviour (properties and methods).

2. Js objects have special property called "prototype".

3. we can set any object as prototype for other using __proto__   
   then the prototyped object can be called as prototype.

4. *If object and prototype have same method then object's method will be used*

Note every object in js has a "prototype" as a property which is an object itself and
has some by default properties and methods.
*/

const arr = [1,2,3,5];
// since array is an object so it also has prototype as a property u can check on browser
arr.push(5);   // this push method comes from the prototype object


const obj = {
    name: "Anurag",
    marks: 99
};

obj.toString;  // se we havn't any property or method toString in our object
// but still we can use it bcz obj's prototype has this property (check on browser)



const employee = {
    calcTax() {
        console.log("Tax is 10%");
    },
    company : "TCS" 
    // calcTax : function() {
    //     console.log("Tax is 10%");
    // }
}

const Anurag = {
    salary: 100000
}
const Rahul = {
    salary: 50000
}


Anurag.__proto__ = employee;  // this means employee object is set as prototype for Anurag
Rahul.__proto__ = employee

// so you can acess tax for anurag
Anurag.calcTax();
console.log(Anurag.company)
Rahul.calcTax();

console.log(Object.getPrototypeOf(arr))  // it tells the prototype of arr (note not its variable rather it lists down its properties/method)
console.log(Object.getPrototypeOf(employee))  
console.log(Object.getPrototypeOf(Anurag))  

// see in browser