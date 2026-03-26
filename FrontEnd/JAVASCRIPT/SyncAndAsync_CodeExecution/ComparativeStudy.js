/*
Here we will see how we picked one problem and solved it using "callback hell" then 
using "promise chaining" and lastly by "async-await"
*/

/*
PROBLEM STATEMENT:
You have getData funciton which responds takes 2seconds to respond with the requested data
now you have to ask for 4 different data simultaneouly and the result should come one after 
the other
*/
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}


// getData(1)
// getData(2)
// getData(3)  // won't work returns data simultaneoulsy for all three requests


// USING CALLBACK

// console.log("Fetching Data 1....")
// getData(1, () => {
//     console.log("Fetching Data 2....")
//     getData(2, () => {
//         console.log("Fetching Data 3....")
//         getData(3, () => {
//             console.log("Fetching Data 4....")
//             getData(4)
//         })
//     });
// })

// this situation is called callback hell (nested callbacks stacked over each other)



function getDATA(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success")
        }, 2000);
    })   
}


// USING PROMISES

// console.log("Fetching Data 1....")
// getDATA(1)
//     .then((res) => {  //Note: .then() will wait for the promise to get resolve in bg till then next possible line will be executed
//         console.log("Fetching Data 2....")
//         return getDATA(2)
//     })
//     .then((res) => {
//         console.log("Fetching Data 3....")
//         return getDATA(3)
//     })
//     .then((res) => {
//         console.log("Fetching Data 4....")
//         return getDATA(4)
// })

// this situation is called promise chaining 



// USING ASYNC AWAIT
async function getDataHelper() {
    console.log("Fetching Data 1....")
    await getDATA(1);
    console.log("Fetching Data 2....")
    await getDATA(2)
    console.log("Fetching Data 3....")
    await getDATA(3)
    console.log("Fetching Data 4....")
    await getDATA(4)
}

getDataHelper()