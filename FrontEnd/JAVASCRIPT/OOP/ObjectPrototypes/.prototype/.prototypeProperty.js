/* 
Every function that can act as constructor have a default .prototype property.
It is an object attached to a function.

Read notes for its significance (why it exist)?
Basically it tells what objects created with new will inherit.


*/

function User(name) {
    this.name = name;
}

const u1 = new User("Anurag");  // internally u1.__proto__ = User.prototype;

User.prototype.sayHi = function() { // see the whole purpose is this, we can 
    // share methods using .prototype property this makes sure only one copy 
    // of this sayHi function exist in memory regardless of num of objects created.
    // because they all can inherit from their prototye that is User.prototype
    console.log(`Hello ${this.name}`);
}

console.log(u1);
u1.sayHi();