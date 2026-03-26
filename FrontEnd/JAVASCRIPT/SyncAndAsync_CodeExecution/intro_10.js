// Promise Chaining

/*
* This was previous code *
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", dataId); 
            resolve("success")
            if(getNextData) {
                getNextData();
            }
        }, 5000)
    })
}

*/

function getData(dataId) {   // now no need for getNextData callback
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log("Data:", dataId);
            resolve("Success")
        }, 3000)
    })
}

/*
// Promise chain
getData(1).then((res) => {
    console.log(res);   // we will call for the 2nd data when 1st data's value came
    getData(2).then((res) => {
        console.log(res);
        getData(3).then((res) => {
            console.log(res);
            getData(4).then((res) => {
                console.log(res);
            })
        })
    })
})
*/
// but the actual way in which promise chain is written is like:
console.log("Fetching Data 1....")
getData(1)
    .then((res) => {  //Note: .then() will wait for the promise to get resolve in bg till then next possible line will be executed
        console.log("Fetching Data 2....")
        return getData(2);  //⭐ getData(2) will bring back a promise, now this promise will be returned and next .then() chain receives that returned promise 
    })
    .then((res) => {
        console.log("Fetching Data 3....")
        return getData(3);
    })
    .then((res) => {
        console.log(res)
    })

/*
happens something like this but above will be executed one after another
const p1 = getData(1);
const p2 = p1.then((res)=>{
    return getData(2);
})
const p3 = p2.then((res)=>{
    return getData(3);
})

*/