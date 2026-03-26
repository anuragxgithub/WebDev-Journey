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

// let p1 = asyncFun1();
/*
console.log("Fetching Data 1....") 
p1.then((res)=> {
    console.log(res);
    console.log("Fetching Data 2....")
    let p2 = asyncFun2();
    p2.then((res) => {
        console.log(res)
    })
})
*/
// Shorthand for above code is:
console.log("Fetching Data 1....")
asyncFun1().then((res) => {
    console.log(res)
    console.log("Fetching Data 2....")
    asyncFun2().then((res) => [
        console.log(res)
    ])
})

// now lets see how we can make the previously done callback hell code which is comparatively easy
// to understand in next intro

