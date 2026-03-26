/*

"super" keyword
The super keyword is used to access properties and methods of the parent (base) class in a child class.

It is mainly used in inheritance.

NOTE: 
When an object of a child class is created, the child constructor must call super() to execute the parent constructor, which initializes the object that "this" refers to. Only after that can the child class use "this".

But why there is a need to call to parent constructor?

The need to call the parent constructor (super()) comes from how JavaScript creates and initializes the object (this) in derived classes.
1️⃣ Who Creates this?
In a normal class (no inheritance) → the constructor itself creates "this".

2️⃣ What Happens in Inheritance?
When a class extends another class:
class Child extends Parent
JavaScript assumes the parent class is "responsible" for initializing the object first, because the child inherits its structure and properties.
So JavaScript requires:
super()
to let the parent constructor create and initialize "this".
*/

class Person {
    constructor() {
        this.species = "Homo Sapiens"
    }

    eat() {
        console.log("Eat")
    }
    sleep() {
        console.log("Sleep")
    }

    work() {
        console.log("Do nothing")
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve problems and build somehting.")
    }
}
class Doctor extends Person {
    work() {                // method overriding
        console.log("Treat Patients")
    }
}

let e1 = new Engineer();
e1.work()


/*
NOTE:
You only need to call super() when you define a constructor in the CHILD class.

In above code, the child classes do not have constructors, so JavaScript automatically calls the parent constructor for you.
*/

class Animal {
    constructor(name) {
        console.log("Entered animal constructor")
        this.name = name;
        console.log("Exist animal constructor")

    }

    eat() {
        console.log("Eat")
    }
}

class Dog extends Animal {
    constructor(name) {
        console.log("Entered dog constructor")
        super(name)
        // if you dont use this then: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.name = name;
        console.log("Exit dog constructor")
    }
    sound() {
        super.eat()  // if we want before making sound dog must eat (so super can also be used to invoke methods of parent class)
        console.log("Dogs barks")
    }
}

let d = new Dog("Tommy")
console.log(d.name)
// d.eat()
d.sound()
console.log(d)