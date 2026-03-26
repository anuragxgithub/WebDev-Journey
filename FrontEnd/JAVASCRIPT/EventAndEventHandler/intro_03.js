// NOTE: 
// When an event occurs, the browser passes an 'Event' object to the listener’s callback function,
// which contains information about the event.

const grandParent = document.getElementById("grandparent");
const parentt = document.getElementById("parentt");
const child = document.getElementById("child");

grandParent.addEventListener('click', (e)=> {   // 'e' is the Event object
    console.log(e);  // Logs the Event object
    console.log(e.target); // Logs the element that triggered the event
    console.log(e.currentTarget); // Logs the element whose listener is currently executing
})
parentt.addEventListener('click', (e)=> {
    console.log(e);
})
child.addEventListener('click', (e)=> {
    console.log(e);
    // e.stopPropagation(); // stops the event from propagating further
},)

// when you click on the 'child' element, the console will log the Event object three times,
// once for each listener in the propagation path (child, parent, grandparent).
// to fix this we can use e.stopPropagation() method to stop the event from propagating further.

// If we use e.target, it will give us the element that triggered the event.
// If we use e.currentTarget, it will give us the element to which the event listener is attached.


// Now you can see in the next intro how you can use e.target to optimise event handling
// on the problem which we did in intro_02.js