function createCounter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment
}

const counter = createCounter();   // here we got refernce to inner function
console.log(counter()); // 1
console.log(counter());; // 2
console.log(counter());; // 3
// NOTE: THIS IS KNOWN AS CLOSURE IN JAVASCRIPT:
// CLOSURE IS A FEATURE IN JAVASCRIPT WHERE AN INNER FUNCTION HAS ACCESS TO THE 
// OUTER (ENCLOSING) FUNCTION'S "VARIABLES" EVEN AFTER THE OUTER FUNCTION HAS RETURNED/EXECUTED.
/*
What happens behind the scenes:
1. When createCounter is called, a new execution context is created.
2. Inside this context, the variable count is initialized to 0.
3. The inner function increment is defined, which has access to the count variable.
4. When createCounter returns increment, it returns a reference to the inner function(increment).
5. The execution context of createCounter is popped off the call stack, 
   #"BUT when the increment function sees that count variable is used in it then
    THE COUNT VARIABLE REMAINS IN MEMORY(transferred to heap and increment fn has access to it)
    BECAUSE INCREMENT STILL HAS A REFERENCE TO IT."#
6. Each time counter() is called, it increments and returns the count variable, preserving its state between calls.
*/


// ----------------------- //

/*
Same code but different way to print

function createCounter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment
}

const counter1 = createCounter();
console.log(counter1())   // 1
const counter2 = createCounter();   
console.log(counter2())   // 1
const counter3 = createCounter(); 
console.log(counter3())   // 1

*/