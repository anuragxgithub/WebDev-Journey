// lets understadn callback hell with an example
// we will build zomato like food ordering system

function payment(CallBack) {
    console.log("Your payment is in progress...")
    setTimeout(() => {
        console.log("Payment is recieved and order get placed.")
        CallBack();
    }, 3000);
}

function cooking() {
    console.log("You food is getting prepared..")
    setTimeout(()=> {
        console.log("Your food is prepared.")
    }, 3000);
}

// payment();
// cooking();   // this will give wrong sequencing obviously

payment(cooking) // this is working


// lets continue this in intro 2
