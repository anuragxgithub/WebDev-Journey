// removing an event listener
// NOTE: sometimes people use this way to revomve event listener but this will not work because 
// parent.removeEventListener('click', ()=> {
//     console.log("clicked");
// })  // this will not work because the function is different from the one used in addEventListener because both will be assigned different memory locations
// to remove an event listener we have to use the same function reference

function handleClick() {
    console.log("clicked");
}
parent.addEventListener('click', handleClick);// adding the event listener using the function reference{
    
// to remove the event listener
parent.removeEventListener('click', handleClick);  // this will work because the same function reference is used