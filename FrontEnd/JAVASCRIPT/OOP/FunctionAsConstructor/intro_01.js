/* 
A function is considered a constructor when it is used to create objects using new.
*/
function User(name) {
    this.name = name;
}
// This is just a normal function until you do this:

let u1 = new User("Anurag");

// Now: User is acting as a constructor ✅
console.log(u1);