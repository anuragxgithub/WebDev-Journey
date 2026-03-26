const body = document.querySelector('body');

// M_1
// const button1 = document.getElementById("b1");
// button1.addEventListener('click', ()=> {
//     body.style.backgroundColor = button1.style.backgroundColor;
// })
// const button2 = document.getElementById("b2");
// button2.addEventListener('click', ()=> {
//     body.style.backgroundColor = button2.style.backgroundColor;
// })
// const button3 = document.getElementById("b3");
// button3.addEventListener('click', ()=> {
//     body.style.backgroundColor = button3.style.backgroundColor;
// })
// const button4 = document.getElementById("b4");
// button4.addEventListener('click', ()=> {
//     body.style.backgroundColor = button4.style.backgroundColor;
// })
// const button5 = document.getElementById("b5");
// button5.addEventListener('click', ()=> {
//     body.style.backgroundColor = button5.style.backgroundColor;
// })


// M_2
const container = document.getElementById("container");
container.addEventListener('click', (e)=> {
    // body.style.backgroundColor = e.target.style.backgroundColor;
    // or 
    body.style.backgroundColor = e.target.id;
})