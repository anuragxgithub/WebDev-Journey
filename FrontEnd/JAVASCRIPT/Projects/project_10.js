const form = document.getElementById('form');
const answers = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const data = new FormData(form);        // captures all input data frin a form
    let finalScore = 0;
    for(let [name,value] of data.entries()) {  // name of input, value of input
        // console.log(name, value);
        if(answers[name] === value)
        finalScore++;
    }
    const output = document.getElementById('output');
    output.textContent = `Your score is ${finalScore} out of 5`;
    form.reset();
})