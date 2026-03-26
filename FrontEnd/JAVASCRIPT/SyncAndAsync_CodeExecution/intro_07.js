/*
Handling Promises:
.then() and .catch()

promise.then((res) => {..})     [handles the promise when success result (fulfilled state)]
promise.catch((res) => {..})    [handles the promise when error occurs (rejected state)]
*/
function getPromise() {
    return new Promise((resolve, reject)=> {
        console.log("Hello")
        // resolve("sucess")
        reject("Error Network failure")
    })
}

const promise = getPromise();

promise.then((res) => {
    console.log("Promise fulfilled", res)
})
promise.catch((err) => {
    console.log("Promise failed/rejected", err)
})

