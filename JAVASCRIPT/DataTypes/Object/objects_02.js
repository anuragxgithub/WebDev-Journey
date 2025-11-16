const user = {
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

const user2 = {
    name: "Rahul",
    accountNo: 2001
}
user2.greeting = user.greeting;  // adding greeting function to user2 also
user2.greeting();


user.greeting();



// Nested Objects
const user3 = {
    name: "Anurag",
    "age": 20,
    emailID: "jaiswal@gmail.com",
    amount: 20000,
    2444: 23,
    "home adress": "dwarka",   // you have to acess it using array style
    address: {
        city: "khalilabad",
        state: "Uttar Pradesh"
    }
}
console.log(user3.address.city);



// As we know doing:
// const user4 = user3;
// then user4 has the same reference of object as user3 is having so changes made in object from user4 will also reflect in user3
// therefore to prevent this we can use SPREAD OPERATOR
const user4 = {...user3};
console.log(user4);
user4.name = "Rahul";
console.log(user4);
console.log(user3);

// But but.. it only creates SHALLOW COPY so this not changing stuff will only work on one level that is won't work
// for nested items eg:
user4.address.city = "Gorakhpur";
console.log(user4);
console.log(user3);
// see changes will be reflected to both

// deep copy  (both objects will be independent)
const user5 = structuredClone(user3);   // note this function can't clone objects


// using numbers in object
const nums = {
    name: "Anurag",
    0: 10,
    69: 96
}
console.log(nums.name);
console.log(nums[0]);
console.log(nums["0"])  // both are same


// NOTE: ARRAY BEHIND THE SCENE IS ALSO IMPLEMENTED USING OBJECT eg:
// you can prove it using browser run this below line
const array = [5,6,7,8,9];
const arr = {
    0: 5,
    1: 6,
    2: 7,
    3: 8,
    4: 9,
}
console.log(arr);