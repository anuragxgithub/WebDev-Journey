/*
Lets say we want to create objects for 70 students. So it won't be efficient to create
it manually one by one.
So we define some template for creating objects: 
1. Factory Function  (not memory efficient)
2. Constructon Function + new operator (best)
3. Classes (best)  (same thing under the hood as 2. but syntactic sugar)

1. Factory functions are nothing but a function that is 'used to create objects'.


*/

function PersonMaker(name, age) {
    const Person = {
        name: name,    // we can't use 'this' here because this thing ain't gonna be called/invoked by any obj
        age: age,

        talk() {
            console.log(`Hi, my name is : ${this.name}`);
        }
        // talk jab bhi call hoga to koi object hi invoke krega is function ko
        // that is why we have used 'this'
    }

    return Person;
}

let p1 = PersonMaker("anurag", 12);
let p2 = PersonMaker("rahul", 22);

console.log(p1)

/* 
But there is a problem/DRAWBACK here:
Every time we are creating objects we are creating seperate space for talk() in memory.
*/

console.log(p1.talk === p2.talk);

// SO HERE COMES 'new' keyword     (Constructor Function)


// 2. since this function is used with new so it will act a constructor & can create object
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// To add any method to Person we can do this
Person.prototype.talk = function() { // every object of Person will have this(bcz of prototypal inheritance)
    console.log(`Hello ${this.name}`);  
}

let p3 = new Person("Krishna", 22);
let p4 = new Person("Aman", 45);

console.log(p3);
console.log(p3.talk === p4.talk); // see now, talk() is created only once

/*
"The 'new' keyword is used to create an object (instance) from a constructor function,
whether it is user-defined or built-in. (Array, String, Object, Set, etc)"
*/

// Now lets see classes which is same as constructor function (only syntactic sugar)
// you can see it in Class Basics _intro_01