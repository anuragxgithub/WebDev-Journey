// Generate a 4 digit random OTP
// So we have to generate a random number between 1000 to 9999
console.log(Math.floor(Math.random()*9000 + 1000));
console.log(Math.floor(Math.random()*(9999-1000 + 1) + 1000));

// NOTE: But we never use Math.random() to generate OTPs because:
/*
lets say you are asked to create a function that gives random number from 0 to 1
whatever logic you think you will perform it on a certain number so evertime you run the
function it will give the same output.
So your seed(input of random fn) is constant.

But in math.random() the seed is system's time i.e, it is constantly changing.
But still it is not preferred because a hacker can predict the time too.
His/her time is also same.

So we have crptography library in js so that seed value is almost unpredictable.
*/

// Trying to generate a number from 0 to 1
// let num = 39;  output will be same every time
const now = new Date();
const ms = now.getMilliseconds();
console.log(typeof ms);
// NOTE: 1s = 1000ms  so ms value can range from 0 999
// if(ms ==)
num = ms;
num = Math.sqrt(num)
num = num * 987;
num = num ** 2;

let a = num / 100000;
let b = a - Math.floor(a);
console.log(b);