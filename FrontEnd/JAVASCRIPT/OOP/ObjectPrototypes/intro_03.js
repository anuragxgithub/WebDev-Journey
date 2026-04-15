/* 
Different ways of setting object's prototype
*/

// 1. Using __proto__  (depricated not recommended)
const Animal = {eats: true};
const dog = {barks: true};

dog.__proto__ = Animal; // prototype of dog will be animal object (dog will inherit from Animal)
console.log(dog.eats);



// 2. Using Constructor + new (Most Common)
function User(name) {
    this.name = name;
}
let u1 = new User("Anurag");  // here User.protoype is set as prototype of u1
console.log(u1); // see in browser
console.log(u1.__proto__ === User.prototype); // this is happening internally


// 3. Using Object.create()   (Best Manual Way)
let cat = Object.create(Animal);  // creates cat object with its prototype as Animal
console.log(cat.__proto__ === Animal);
console.log(cat)
cat.name = "Billa";
console.log(cat)


// 4. Using Object.setPrototypeOf()  (modern alternative)
let rat = {barks: false};
Object.setPrototypeOf(rat, Animal);
console.log(rat.__proto__ === Animal)
console.log(rat.eats);


// 5. Using class (Syntactic Sugar)   This is nothing but No.2 version
// since we know that classes are itslef functions in js.
class Userr {
    constructor(name) {
        this.name = name;
    }
}

let uu1 = new Userr("Anurag");
console.log(uu1.__proto__ === Userr.prototype)
/* 
what actually happening above is:
function Userr(name) {   // this actually happing behind the scene of Class
    this.name = name;
}
*/