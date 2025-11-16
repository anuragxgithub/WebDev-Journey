// Data Structure: Map
// NOTE: in object the "keys" can be only string or symbol/

// A Map object holds key-value pairs where the keys can be any datatype.
// A Map also remembers the original insertion order of the keys.

const m1 = new Map([
    [1, "Anurag"],
    ["anurag", 8],
    [true, 11],
    [[10,11,12], "Mohit"],
    [{name: "Anurg", location: "bhopal"}, "info"]
])
console.log(m1);
m1.set("User1", {lastLogin: "12/08/2016"})
console.log(m1);
console.log(m1.size)


for(let [key, value] of m1){
    console.log(`Key is: ${key} and value is: ${value}`);
}