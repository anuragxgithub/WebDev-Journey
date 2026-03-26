// lets solve our problem which we first solved with callback hell and the promise chaining 
// now its time to solve it using "asyn-await"

function getData(dataId) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log("Data:", dataId);
            resolve("Success")
        }, 3000)
    })
}

async function getDataHelper() {
    console.log("Fetching data 1....")
    await getData(1);
    console.log("Fetching data 2....")
    await getData(2);
    console.log("Fetching data 3....")
    await getData(3);
    console.log("Fetching data 4....")
    await getData(4);
}

// getDataHelper()

// NOTE: here we have to make a extra function call 
// so rather than using helper we can use IIFE function
// IMMEDIATELY INVOKED FUNCTION EXPRESSION 
// Called as soon as it is defined   Syntax: (function)();

(async () => {
    console.log("Fetching data 1....")
    await getData(1);
    console.log("Fetching data 2....")
    await getData(2);
    console.log("Fetching data 3....")
    await getData(3);
    console.log("Fetching data 4....")
    await getData(4);
})();
