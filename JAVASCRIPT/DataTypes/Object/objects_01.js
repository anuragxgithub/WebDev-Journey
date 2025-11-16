// object
// key value pair
const user = {
    name: "Anurag",
    "age": 20,
    emailID: "jaiswal@gmail.com",
    amount: 20000,
    2444: 23,
    "home adress": "dwarka"   // you have to acess it using array style
}
console.log(user);
console.log(typeof user);

// Accessing items
console.log(user.name);
/*
NOTE: These keys in the key value pair is actually stored as string
So other way to access the values is:
*/
console.log(user["name"]);
console.log(user["age"]);
console.log(user["home adress"]);

// update (adding items)
user.aadhar = 1234;
console.log(user);

// update (update existing value)
user.amount = 696969;
console.log(user);

// delete item
delete user.emailID;
console.log(user);

// ****listing down items****
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// object destructuring  (basically shorthand for assigning variables to any value from the entries)

const {name, age:Umar, amount} = user;
console.log(name);
console.log(Umar);  // you can specify the variable name too usign colon



// looping 
// 1. (for in loop)  not recommended
for(let key in user) {
    console.log(key, user[key]);
}
// 2. (for of loop)   NOTE: for of loop works on arrays
for(let key of Object.keys(user)) {
    console.log(key);
}
// 3. (for of loop) this time using destructuring
const keyValArray = Object.entries(user);
console.log(keyValArray)
for(let [key,value] of Object.entries(user)) {
    console.log(key, value);
}



// you can also define fucntion inside object
const user3 = {
    name: "Anurag",
    "age": 20,
    emailID: "jaiswal@gmail.com",
    amount: 20000,
    2444: 23,
    "home adress": "dwarka",   // you have to acess it using array style
    greeting: function() {
        console.log(`I am having headache ${this.name}`);   // note you can also write user.name in place of this.name but this can cause problem eg below if we create user2 lets say
        return 20;
    }
}

const returnValue = user3.greeting();
console.log(returnValue);