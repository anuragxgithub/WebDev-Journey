/*
A class is a blueprint/template for creating objects.

Those objects will have state and behaviours

*/

class Car {
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

const tesla = new Car();  // tesla here is an object (NOTE: Object is of type class)
console.log(tesla)
tesla.start()
tesla.stop()

let audi = new Car();
audi.setBrand("Audi")
console.log(audi)    // now this object will have a property of brand like (brand: 'Audi')
