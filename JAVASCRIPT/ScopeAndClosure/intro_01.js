// Scope and Closure  , HOF (Higher Order Functions) in JavaScript
// 1. Global Scope -> Accessible from anywhere in the code
// 2. Functional Scope -> Accessible only within the function
// 3. Block Scope -> Accessible only within the block (e.g., inside { } )


function sum() {
    let a = 5;      // functional scope
    console.log(a);
    console.log(typeof a);
}

sum();
// console.log(a);  // will give error  'a' is not defined

if(true) {
    var b = 65;
    console.log(b);
}
    
// NOTE: 'var' do not respect block level scope, other two are respected
console.log(b);  // won't give error 


console.log("--------------------------------------------------")

// NOTE: if the variable which we are accessing is not present in that block it will look up to just out block of it.. and so on..
let global = 40;
function greet() {
    let global = 34;
    function greety() {
        console.log(global);   // print 34
    }
    greety();
    console.log(global); // print 34
}
greet()
console.log(global);
