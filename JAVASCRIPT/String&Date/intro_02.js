// Date
const now = new Date();
console.log(now); // Current date and time
// NOTE: the above line will tell the current time of UTC(Universal Time Coordinate)
/**
AND IST is 5:30 hrs ahead of UTC  (UTC+5:30)
So in order to get our current time (IST) we will simply do this
*/
console.log(now.toString());
// NOTE: this javascript is picking time from our system if you change the time of system it will show that time only
// H.W. As we studied earlier javascript can't accept our system so how it is accessing our system's time?

console.log(now.toISOString());
console.log(now.toLocaleString());

console.log(now.getDay());
// NOTE: Day and Month in js is 0-based indexed : Sun = 0 mon = 1 .. similarly Jan = 0 Feb = 1 ....
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());

console.log(now.getSeconds());
console.log(now.getHours());
console.log(now.getMilliseconds());

// creating object of our own date and time
const noww = new Date(2025, 10, 20, 7, 43, 30, 125);
console.log(noww);   // we know it prints in UTC standard
// 2025-11-20T02:13:30.125Z on printing we get this (UTC)
// see months get incremented by 1 because 0 based indexing
// when we put 10 as month it calculated from 0 to 10 therefore total 11 months
// also since it is showing UTC standard so subtracted 5:30 hrs from our time
console.log(noww.toString()); // now same as our IST

// other way to create date object (Timestamp)
const nowww = Date.now();
// Date.now() is a built-in static method of the Date object in JavaScript.
// it returns the current timestamp-- the number of milliseconds since Jan 1, 1970 (UTC)
/*
🕛 January 1, 1970, 00:00:00 UTC.
That date is called the Unix Epoch (the “starting point” of modern computer time).
*/
console.log(nowww);
/*
| Unit               | Conversion               | Result                |
| ------------------ | ------------------------ | --------------------- |
| 1 second = 1000 ms | 1,738,831,200,000 ÷ 1000 | 1,738,831,200 seconds |
| 1 minute = 60 sec  | 1,738,831,200 ÷ 60       | 28,980,520 minutes    |
| 1 hour = 60 min    | 28,980,520 ÷ 60          | 483,008 hours         |
| 1 day = 24 hrs     | 483,008 ÷ 24             | ≈ **20,125 days**     |
| 1 year ≈ 365 days  | 20,125 ÷ 365             | ≈ **55 years**        |
*/
const date = new Date(nowww);
console.log(date.toString());
const startDate = new Date(0); // i,e., tell the date when the millisecond is 0 ie starting point
console.log(startDate.toString()); 
/**
 NOTE: 
 THIS TIMESTAMP WHICH THE FUNCTION __.now() is returning 
 IN UTC IS VERY CRUCIAL WHEN WE DEAL WITH TIME GLOBALLY BECAUSE
 UTC TIME IS SAME FOR EVERY REGION BROWSER WILL MANAGE/DISPLAY THE TIME ACCORDING TO THE REGION WHEN WE PASS IT WITH THE 
 UTC TIME. 
 */