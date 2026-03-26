// Second Exampe to illustrate Microtask vs Macrotask
console.log("start");
setTimeout(() => {  // this(callback) will be transferred macrootask queue by web api
    console.log("Timeout");
}, 5000);

Promise.resolve().then(() => { // this callback will be moved to Microtask queue by web api
    console.log("Promise resolved");
});
console.log("end");