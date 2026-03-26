const orderDetails = {
    orderId: 123123,
    food: ["egg fried rice", "ice cream", "lemonade"],
    cost: 350,
    customerName: "Anurag",
    customerLocation: "Dwarka",
    restaurantLocation: "Delhi"
};


function placeOrder(orderDetails, callback) {
    console.log(`${orderDetails.cost} Your payment is in progress...`)
    setTimeout(() => {
        console.log("Payment is recieved and order get placed.");
        callback(orderDetails);
    }, 3000);
}

function preparingOrder(orderDetails, callback) {
    console.log(`${orderDetails.food} Your food is getting prepared..`)
    setTimeout(()=> {
        console.log("Your food is prepared.")
        callback(orderDetails);
    }, 3000);
}

function pickupOrder(orderDetails, callback) {
    console.log(`Delivery boy is on way to pickup order from ${orderDetails.restaurantLocation}`)
    setTimeout(()=> {
        console.log("Your order is picked up for delivery.")
        callback(orderDetails);
    }, 3000);
}

function deliverOrder(orderDetails) {
    console.log(`I am on my way to deliver order to ${orderDetails.customerLocation}..`)
    setTimeout(()=> {
        console.log(`Order delivered successfully to ${orderDetails.customerName}.`);
    }, 3000);
}



placeOrder(orderDetails, (orderDetails) => {
    preparingOrder(orderDetails, (orderDetails) => {
        pickupOrder(orderDetails, (orderDetails)=> {
            deliverOrder(orderDetails);
        });
    });
})


// see this is callback and see how writing code in such scenario is so complicated...
// also the code is not readable and hard to maintain becuase of dependency of each function on previous one
// in earlier times people used to write code like this only4
// but now a days this is considered as bad practice
// So in order to resolve this issue(callback hell) we have promises and async await
// in javascript.

