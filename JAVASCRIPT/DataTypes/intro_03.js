// These are some absurd behaviors of JavaScript

// 1. null is loosely equal to undefined but not strictly equal
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == 0); // false   
console.log(null == false); // false
console.log(null == ""); // false

// 2. < , >, <=, >= (when used with null then null is converted to number and we know its equivalent number is 0)
// (and undefined is converted to NaN and any comparison with NaN is false)
// in short: < , >, <=, >= (null ----> number (0) ; undefined ----> NaN)

console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null > 0); // false
console.log(null <= 0); // true
console.log(null < 0); // false

console.log(undefined == 0); // false
console.log(undefined >= null); // false

// 3. 
console.log("Rohit" == "Rohit"); // true
console.log(new String("Rohit") == new String("Rohit")); // false
// because new String() creates a string object and two different objects are never equal
console.log("Rohit" > "mohit") // false (because "R" has greater ASCII value than "m")
// in java script strings are compared lexicographically based on the Unicode values of their characters

console.log(10>"10") // false (string "10" is converted to number 10)
console.log(10>="10") // true
console.log(10<"2") // true (string "2" is converted to number 2)
console.log(10 >= true) // true (true is converted to number 1)
console.log(10 <= false) // false (false is converted to number 0)
console.log(10 < null) // false (null is converted to number 0)
console.log(1 == true) // true (true is converted to number 1)

console.log(null >= "") // true ("" is converted to number 0 and null is also converted to number 0)

// SO FROM ABOVE EXAMPLES WE CAN CONCLUDE THAT:
// WHENEVER COMPARISON BETWEEN DIFFERENT DATA TYPES IS DONE USING < , >, <=, >= OPERATORS THEN:
// FIRST THE DATA TYPES ARE CONVERTED TO NUMBER(COMMON GROUND) AND THEN COMPARISON IS DONE.

console.log(NaN == NaN); // false
// because NaN is not equal to anything including itself