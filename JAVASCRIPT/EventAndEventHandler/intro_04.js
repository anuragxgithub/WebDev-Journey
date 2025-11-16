// M_1 manually doing for each element
// const child1 = document.getElementById("child1");
// child1.addEventListener('click', ()=> {
//     child1.textContent = "i am clicked";
// })


// M_2 using loop on each of the children
// const parent = document.getElementById("parent");
// // console.log(parent.children);
// for(let child of parent.children)  {
//     child.addEventListener('click', ()=> {
//         child.textContent = "i am clicked";
//     })
// }

// M_3 using event delegation
const parent = document.getElementById("parent");
parent.addEventListener('click', (e)=> {
    // console.log(e.target);
    e.target.textContent = "i am clicked";  // because of event bubbling (and as e.target tells(gives) which element was clicked)
})



