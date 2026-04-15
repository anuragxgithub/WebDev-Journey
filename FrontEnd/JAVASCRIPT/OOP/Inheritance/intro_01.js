/*
NOTE: "this" is a 'reference' to the 'current object' that is calling the constructor or method.

Inheritance is a mechanism through which we can inherit the properties and methods of
parent class to child class.

It helps in "code reuse" and creating hierarchical relationships between classes.

In JavaScript, inheritance is implemented using the "extends" keyword.
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

const e1 = new Engineer();
e1.eat();   // see engineer inherits person methods

const d1 = new Doctor();
d1.sleep();

d1.work();  // method overriding
// If parent and child both have same method, chil's method will be used.[Mehtod Overriding]