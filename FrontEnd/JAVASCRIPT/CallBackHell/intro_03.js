function payment(CallBack) {
    console.log("Your payment is in progress...")
    setTimeout(() => {
        console.log("Payment is recieved and order get placed.")
        CallBack();
    }, 3000);
}

function cooking(CallBack) {
    console.log("Your food is getting prepared..")
    setTimeout(()=> {
        console.log("Your food is prepared.")
        CallBack();
    }, 3000);
}

function delivery() {
    console.log("Order is ready to be picked up for delivery..")
    setTimeout(()=> {
        console.log("Order is out for delivery.")
    }, 3000);
}


// if we pass function in arrow representation then the previous issue can be resolved
payment(()=> {
    cooking(()=> {
        delivery();
    });
})

// Note: this is actually a callback hell.
/*
Callback hell, also known as the "Pyramid of Doom," is a common problem encountered in
JavaScript when dealing with asynchronous operations, especially when using callbacks to
handle their results. It occurs when multiple asynchronous operations are dependent on
each other, leading to deeply nested callback functions
*/


// now lets increase the complexity in next file