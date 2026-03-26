// filter()   -> array method
/*
filter()  creates a new array of elements that return true for a condition by callback fn.
Layman: value pe koi condition lagegi in callback agar vo condition true hoga then added
to new array
*/
arr = [10, 20, 30, 55, 16, 87];

const newArr = arr.filter((value) => {
    return value < 25;
})
console.log(newArr);

//---------------------------------------------------------------------------------------//
// Lets see how it is working behind the scene by implementing our own filter method

// const compare = (number) => number < 25;

arr.filtering = function(compare) {    
    const ans = []
    for(let num of this) {  // this or you can write arr itself
        if(compare(num)) {
            ans.push(num);
        }
    }
    return ans;
}

const ans = arr.filtering((number) => number < 25)  // note this arrow function will be passed as compare function
console.log(ans)


/*
What actually code represents is :
(a) arr.filtering = function(compare) {...}

You are adding a new method named filtering to your array object arr.
compare is a callback function (it decides which items to keep).
this refers to the array on which .filtering() is called.
You loop over each element (num) of that array.

(b) Inside the function:
For each number:
Call compare(num)
If it returns true, add that num to the ans array.
Finally, return the ans array.

(c) This line:
The arrow function (number) => number < 25 is passed as compare.
For each element of arr, it checks:
👉 “Is this number less than 25?”
If yes, it’s added to the ans array.

*/


// NOTE: BUT THIS ONLY APPLICABLE TO THIS PARTICULAR ARRAY arr
// BECUASE WE HAVE DEFINED filtering METHOD ONLY FOR THIS ARRAY OBJECT
// TO MAKE IT AVAILABLE FOR ALL ARRAYS WE HAVE TO ADD IT TO PROTOTYPE OF ARRAY
// just put Array.prototype.filtering INSTEAD OF arr.filtering
// now if you create any array you can use filtering method on it