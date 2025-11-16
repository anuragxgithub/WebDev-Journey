// map()
// array method
// map() creates a new array from calling a function for every array element.

arr = [10, 20, 30, 55, 16, 87];
const newArr = arr.map((number) => number * 2)
console.log(newArr);


// making custom map() method

Array.prototype.mapping = function(rule) {  // adding this mapping method to every array we will create
    const ans = []
    for(let num of this) {
        const item = rule(num)
        ans.push(item);
    }
    return ans;
}

const newArray = arr.mapping((num) => num * 2);
console.log(newArray);