// M_1 manually doing for each element
// const child1 = document.getElementById("child1");
// child1.addEventListener('click', ()=> {
//     child1.textContent = "i am clicked";
// })


// M_2 using loop on each of the children
const parent = document.getElementById("parent");
// console.log(parent.children);
for(let child of parent.children)  {
    child.addEventListener('click', ()=> {
        child.textContent = "i am clicked";
    })
}




// Bubbling and Capturing
const grandParent = document.getElementById("grandparent");
const parentt = document.getElementById("parentt");
const child = document.getElementById("child");

grandParent.addEventListener('click', ()=> {
    console.log("GrandParent is clicked")
}, false)  // by default capture option is false (if you put true in all cases then outer to inner will be printed)
parentt.addEventListener('click', ()=> {
    console.log("Parent is clicked")
}, false)
child.addEventListener('click', ()=> {
    console.log("Child is clicked")
}, false) 

/*
 window
 |
 document
 |
 html
 |
 head<
 |
 body
 |
 grandParent
 |
 paerntt
 |
 child   (capturing starts from top and stops only when target is hit now evenListener start bubbling from bottom to top)

The browser starts from the top (document) → down to target = capturing phase
Then it reaches the target = target phase
Then it goes up again = bubbling phase

NOTE: If you attach an event listener with the capture option set to true, 
it listens in capture phase itself.
*/