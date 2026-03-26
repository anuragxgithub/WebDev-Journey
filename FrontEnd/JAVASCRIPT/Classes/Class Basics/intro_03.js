/*
What are the different ways in which we can create attributes (data members)
inside a class in JS.
2 Main ways:

1. Using constructor (no prior declaration of attributes needed)
   Properties are usually created inside the constructor using this.
2. Creating attributes directly in class   (ie like in traditional programming)
   JavaScript now allows class fields.
*/

// 1
class MyClass {
    constructor(age) {
        this.age = age;
    }
    setGender(gender) {   // this can also create attribute but this would not common to all objects
        this.gender = gender
    }
}

let obj1 = new MyClass(5);
console.log(obj1) 
obj1.setGender("Male")
console.log(obj1)
let obj2 = new MyClass();
console.log(obj2)




// 2.
class RandomClass {
    age = 12
    speed = 200

    start() {
        console.log("started")
    }
}

let object1 = new RandomClass()
console.log(object1)

// NOTE: we can dynamically add properties/attributes to object

class Car {

}

let c1 = new Car();
c1.speed = 200;   // but won't be common to each object obviously
c1.brand = "Tesla"

console.log(c1)
let c2 = new Car();
console.log(c2)


