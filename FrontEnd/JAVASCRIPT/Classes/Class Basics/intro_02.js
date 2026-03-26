/*
Constructors is a 'special method' in a class that is executed automatically
when an object is created using "new" keyword.

It is mainly used to initialize objects.
*/

class Car {
    mileage            // this is attribute or property or data member created like this in js no const/let
    constructor() {
        console.log("New object created")
        this.mileage = 69;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;  // note here brand is not a data member but still we can use it
    }
}

const tesla = new Car();
/*
See in browser, this tesla obj will have a constructor property(in its prototype) even though we
haven't defiend it yet
*/

const audi = new Car();
console.log(audi.mileage)