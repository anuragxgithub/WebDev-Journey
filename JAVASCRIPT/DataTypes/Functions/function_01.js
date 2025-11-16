// significance : reusability

function greeting() {
    console.log("Hello World");
}

greeting();
console.log(greeting());  // will print undefined bcz no return value

function sum(num1, num2) {
    const sum = num1+num2;
    console.log(sum);
}

sum(2,7);
sum(5,7,8); // will work sum only takes first two values

function sum2(num1, num2, num3 = 0, num4 = 0) {
    const sum = num1+num2+num3+num4;
    console.log(sum);
}

sum2(1);   // NaN
// below all will work
sum2(1,2);
sum2(1,2,3);
sum2(1,2,5,7);


// ***  rest operator ***  //
// used when we are not aware(in prior) about the number of arguments we will take
function sum3(...num) {
    console.log(num);
    let sum = 0;
    for(let n of num) {
        sum += n;
    }
    console.log(sum);
}

// It seems like the spread operator b/z of same syntax but it is not 
// here it is rest operator in functions it put all arguments in list
sum3(23,3,13,33);
sum3(1,2,4,5,6,7,9);

// other use
const arr = [10,20,30,40,50];
const [first, second] = arr; // destructuring : nothing only shorthand for assigning values of array to variable
console.log(first, second);
const [f, s, ...num] = arr;
console.log(f, s, num);

// note : spread operator merges two arrays by opening each elements


// 2. FUNCTION AS EXPRESSION
const addNumber = function(num1, num2) {
    return num1+num2;
}
console.log(addNumber(3,4));

// NOTE : WHAT IS THE DIFFERENCE BETWEEN THESE TWO FUCNTION DECLARATIONS??
// ANS: In function as a expression you can't call it before it is initialized.

// 3. ARROW FUNCTION
const greet = ()=> {
    console.log("Hello ji");
}

greet();

// in case if you want a function that only return a value
// const add = (n1, n2)=> {
//     return n1+n2;
// }
// shorthand for this can be
const add = (n1, n2) => n1+n2;   // no need to write return and put curly braces

console.log(add(2,6));

// if there i only single argument and only return is used in function you can write like this using arrow function
const square = num => num*num;
console.log(square(5));

const Greeting = () => ({name: "Anurag", age: 20}) // returning object but we have to put parenthesis otherwise it will consider it as normal arraow function with curly braces