/* 
Different Ways of creating an object in JS.
| Method               | Use                |
| -------------------- | ------------------ |
| Object literal       | Most common        |
| new Object()         | Rare               |
| Constructor function | Structured objects |
| Object.create()      | Prototype control  |
| Class                | Modern approach    |
| Factory function     | Flexible creation  |

*/

// 1. Object Literal
const obj = {
    name: "Anurag",
}


// 2. new Object()                    Rarely used (not preferred)
const obj2 = new Object();
obj2.name = "Rahul";
// console.log(obj2)


// 3. using constructor function  (we can create object from any function using new keyword)
function User(name) {
    this.name = name;  // this refers to the object created so basically u1. = name
    // so we can say that this name property belongs to the object itself.
}
let u1 = new User("anurag"); 
// internally doing this
console.log(u1.__proto__ === User.prototype);
// basically creating an object u1 and linking the object's internal [[Prototype]] to User.prototype
console.log(u1);


// 4. Using Object.create()
let proto = {
    greet() {
        console.log("Hello");
    }
};
let obj3 = Object.create(proto); // created obj3 and linking the objects internal [[prototype]] to proto
// ✔ Direct control over prototype
// NOTE: ⚠️ Unlike 

