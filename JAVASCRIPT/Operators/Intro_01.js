// ** OPERATORS ** //
// Operators are special symbols that perform operations on operands (values and variables).

// 1. Arithmetic Operators
console.log(5+6);
console.log(5-6);
console.log(5*6);
console.log(7/2);   // gives 3.5
console.log(7%2);
console.log(7**2);

// 2. Assignment Operators
let x = 10
let y = 20
x = x+y
console.log(x);

// 3. Comparison Operators
let a = 5;
let b = 6;
console.log(a>b);
console.log(a>=b);
console.log(a==b);
console.log(a<b);
console.log(a<=b);
console.log(a!=b); // true
// NOTE:
let num = "120";
let num_ = Number(num);
console.log(num_);
console.log(typeof num_);

// Now
let num1 = 10;
let num2 = 10;
let num3 = "10";
console.log(num1 == num2);  // true
console.log(num1 == num3);  // TRUE (because == checks 'only value not type')
console.log(num1 === num2); // true 
console.log(num1 === num3); // false (because === checks both value and type)

 
// 4. Logical Operators   (and or not - && || !)
console.log(true && true);   // true
console.log(true && false);   // false
console.log(false && false);   // false
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || false); // false
console.log(!true);

// NOTE: ***IMPORTANT***
let name1 = "anurag";
let name2 = "rohit";
console.log(name1&&name2);  // rohit  (because name1 is true (non-empty string) so:  true && anything = anything)
let n1 = "";  // empty string is considered as false
let n2 = "rohit";
console.log(n1&&n2);  // "" (because n1 is false (empty string) so: false && anything = false)

// similarly
let n_1 = 0;
let n_2 = 10;  // (non-zero number is considered as true)
console.log(n_1||n_2);  // 10 (because n_1 is false (0) so: false || true = true)
console.log(n_1&&n_2);  // 0 (because n_1 is false (0) so: false && anything = false)