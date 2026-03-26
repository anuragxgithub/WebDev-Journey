// NOTE: if we associate a function with object thn we call it a method

/*
forEach() method of array     (used for looping)

syntax:
arr.forEach(callbackFunction) {}
NOTE: here call back function can have 3 parameters :
i) value(item)  ii) idx(pos)  iii) array itself               // latter two are option
// also here callback function is executed for each element ⭐


NOTE: 
A callback is a function that is passed as an argument to another function.
*/

const arr = ["anurag", "rahul", "shivam", "kartik"]

arr.forEach(function printVal(value, idx) {   // one by one for each transfers the elements of array in 'value'
    console.log(idx, ":", value)
})

// OR  (we generally use arrow function as callback function)

arr.forEach((value)=> {    
    console.log(value.toUpperCase());
})