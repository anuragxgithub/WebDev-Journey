// lets say this getdata function is an API

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => { // here getData method immediately returns a promise and assure that after 5 seconds i will tell whether the operation is success or fail
        setTimeout(() => {
            console.log("Data:", dataId); // since here one successfull async. operation happend we can put resolve() after it to update its state
            resolve("success")
            if(getNextData) {
                getNextData();
            }
        }, 5000)
    })
}


let promise = getData(123) // since getData API is returning a promise

console.log(promise); // until not run/hit by resolve state will be pending 

setTimeout(() => {
    console.log(promise) // after resolve state will be "resolved"
}, 6000)
// you can see it in browser more properly  
