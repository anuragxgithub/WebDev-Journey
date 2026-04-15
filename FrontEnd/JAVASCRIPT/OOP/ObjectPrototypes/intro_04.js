/* 
We can modify the existing method/property in any object.
But not advisable or recommended.
can lead to unwanted behaviours in some cases
*/

const arr = [1,2,3,4];
console.log(arr.__proto__)

arr.push(5);
console.log(arr)
arr.__proto__.push = (n) =>{
    console.log(`Push disabled can't push given value ${n}`);
}

arr.push(6);