// M_1
// function handleClick() {
//     const element = document.getElementById("first");
//     element.textContent = "Hello world!!";
// }

// M_2  (Writing whole stuff in js file)
// const element = document.getElementById("first");
// element.onclick = function handleClick() {
//     element.textContent = "Hello world!!!!";
// }
// but in this method there is also problem lets say if we apply one more property
// on this element lets say bg color on click then it will override the text changing stuff

// Therefore we use this
const element = document.getElementById("first");
element.addEventListener('click', () => {   // call back function
    element.textContent = "Strike is coming.";
})
// now we can apply multiple event listener
element.addEventListener('click', () => {
    element.style.backgroundColor = "brown";
})