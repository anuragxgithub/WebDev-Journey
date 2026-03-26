// LOOPING OVER ITERABLES

// 1. for of loop  -> used for strings/arrays

str = "Anurag"
arr = [23,12,45,67]
const object = {
    "name": "Anurag",
    "age": 21,
    "class": 12
};


for(let char of str) {
    console.log(char)
}
for(let item of arr) {
    console.log(item)
}

// 2. For in loop -> used for objects/arrays

for(let item in arr) {      // here it gives indices
    console.log(arr[item]);    
}
for(let key in object) {      // in case of object it give keys
    console.log(key,":", object[key]);    
}