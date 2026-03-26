const body = document.querySelector('body');
const colors = ['red', 'green', 'yellow', 'blue', 'orange', 'pink'];
body.addEventListener('click', (e)=>{
    console.log(e.clientX, e.clientY);
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    circleElement.style.backgroundColor = colors[Math.floor(Math.random()*6)]
    circleElement.textContent = 'hi';
    circleElement.style.top = `${e.clientY -25}px`;
    circleElement.style.left = `${e.clientX -25}px`;

    body.append(circleElement);

    setTimeout(()=> {
        circleElement.remove(); 
    }, 5000);  // after 5 seconds it will run once 
})

