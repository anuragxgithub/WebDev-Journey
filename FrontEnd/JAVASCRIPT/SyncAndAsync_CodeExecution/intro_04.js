/*
Callback Hell: 
Callback hell is a programming situation when nested callbacks are stacked
below one another forming a pyramid structure.
(Pyramid of Doom)
The style of programming becomes difficult to understand and manage
*/

function getData(dataId) {
    // lets say this dataId fetches data from db in 2
    console.log("data", dataId);
}

// The problem statement is we want to get data1 first and then data2 and then data3
getData(1);
getData(2);
getData(3);
// but here each one of them appears simultaneously bcz as data1 called it is set to
// wait for 2 second similary for 2 and 3 all happens so suddenly that they almost
// appears just after 2 seconds

// To fix this we can think of something like this

function getDataaa(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId)
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

// getDataaa(1, getDataaa(2))  
// note you can't pass 2nd arg like this because it means that you want to execute the getDataaa() right there with value 2
// so here arrow function helps us

/**
    getDataaa(1, () => {
        getDataaa(2)
    })
 */


// callback hell   (nested callback)
getDataaa(1, () => {
    console.log("getting data 2...")
    getDataaa(2, () => {
        console.log("getting data 3...")
        getDataaa(3, () => {
            console.log("getting data 4...")
            getDataaa(4);
        });
    });
})
