/*
Promise Chaining
*/

let asyncFun1 = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("success")
        }, 4000);
    })
} 
let asyncFun2 = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("success")
        }, 4000);
    })
}
/*
console.log("Fetching Data 1....")
let p1 = asyncFun1();
p1.then((res) => {
    console.log(res)
})
*/

// okay now i want to call another async function and want out result to first come by 
// async1 fun and then async2, lets try
console.log("Fetching Data 1....")
let p1 = asyncFun1();
p1.then((res) => {
    console.log(res)
})

console.log("Fetching Data 2....")
let p2 = asyncFun2();
p2.then((res) => {
    console.log(res)
})

// but here both data are accessed simultaneously

// So to achieve that we will do promise chaining see in next intro