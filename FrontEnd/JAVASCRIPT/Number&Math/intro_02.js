// Math
console.log(Math.abs(-2));          // give its positive value
console.log(Math.abs(-2.57));

console.log(Math.PI);
console.log(Math.sqrt(36));
console.log(Math.LN10);
console.log(Math.ceil(2.2));
console.log(Math.floor(2.2));
console.log(Math.log10(1000));
console.log(Math.max(23,223,232,45456,757,97972))


console.log(Math.random());   // generates a random number [0, 1)

// Task: Generate a game where a player selects number from 0 to 9 
// and if the selected number is lucky number then he/she will win the lucky draw

let lucky_num = Math.floor(Math.random()*10);
console.log(lucky_num);
// what if you area told to select a number between 1 to 10 
// simply add +1
lucky_num = Math.floor(Math.random()*10) + 1;
console.log(lucky_num);

// now what if you are told to select a number between 0 to 6
lucky_num = Math.floor(Math.random()*10) % 7;
console.log(lucky_num);

// ********* BUT THERE IS A PROBLEM IN THIS APPRROACH ***********
/*
Here’s the catch:
The numbers 0–9 are equally likely initially.
After % 7:
0 → {0, 7} → 2 ways
1 → {1, 8} → 2 ways
2 → {2, 9} → 2 ways
3 → {3} → 1 way
4 → {4} → 1 way
5 → {5} → 1 way
6 → {6} → 1 way
So distribution is not uniform:
0,1,2 each have probability 2/10 = 20%
3,4,5,6 each have probability 1/10 = 10%
*/

// So we will consider this formula/appraoch but is valid for generating numbers from 1-n
console.log(Math.floor(Math.random()*6) + 1);

// ******* GENERAL FORMULA *******
/*
----- Math.floor(Math.random()*totalNumberOfOutcomes)+shift ------ 
Online you'll find:
----- Math.floor(Math.random()*(max-min +1))+min

 HOW IS IT WORKING ??
---> [0,1) * n = [0, n)
Eg.: [0,1) * 11 = [0, 11)
     [0,1) * 6 = [0, 6)
So lets say we want random number from 15 to 25
Now, one thing we already know we can generate any number from [0 to n) by multiplying n
so here if we get numbers from [0 to 10) and then we add lowerNumber to it we get a range of
[15 to 25).
So jitna gap hai numbers ke beech utna tak ka random num generate kr lo and then add lowerNumber it 
to get the required range

*/
// Que) Generate a random number between 15 to 25 where 15 is included
console.log(Math.floor(Math.random()*11 + 15));