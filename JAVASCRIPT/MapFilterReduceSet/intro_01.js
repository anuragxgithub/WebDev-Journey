// forEach()
// array method

const arr = [10, 20, "Rohit", 69, 29]

arr.forEach((num, idx, arrey) => {  // can take atmost 3 args (elements, index, arrayitself)
    console.log(num, idx, arrey);
})
const arr2 = [10, 20, 23, 69, 29]
sum = 0;
arr2.forEach((number) => {
    sum += number;
})
console.log(sum); 