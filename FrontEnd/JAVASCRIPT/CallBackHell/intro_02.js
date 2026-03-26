function payment(CallBack) {
    console.log("Your payment is in progress...")
    setTimeout(() => {
        console.log("Payment is recieved and order get placed.")
        CallBack();
    }, 3000);
}

function cooking(CallBack) {
    console.log("You food is getting prepared..")
    setTimeout(()=> {
        console.log("Your food is prepared.")
        CallBack();
    }, 3000);
    
}

function delevery() {
    console.log("Order is ready to be picked up for delevery..")
    setTimeout(()=> {
        console.log("Order is out for delevery.")
    }, 3000);
}


// payment(cooking)  // obviously sequence eroor will come fo cooking and delivery
payment(cooking(delevery)) // this won't work because when payment() is getting called first cooking() gets called
// there will be eroor also at line 5 bcz in payment actually no function is getting passed
// rather ultimately a null value



// lets see how we can fix this in next intro


/*
But you might think why to do so much mess why can't we just call cooking() inside payment()
after payment is done i.e, inside setTimeout of payment().
And similary call delivery() inside cooking() after cooking is done.
Yes we can do that but :

Because in real projects, the next step is not always fixed.
For example:
After payment, sometimes you go to cooking
Sometimes to refund
Sometimes to cancel order
Sometimes to retry

So they want to show:
👉 How to choose the next step dynamically
👉 How async functions get difficult when nested deeply
👉 "How we can pass different callbacks at different times"
*/ 