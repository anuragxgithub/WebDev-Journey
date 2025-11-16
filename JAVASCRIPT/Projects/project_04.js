const form = document.getElementById('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const income = parseInt(document.getElementById('income').value);
    const output = document.getElementById('output');
    let totalTax;
    if(income <= 1200000) {
        totalTax = 0;
    } else if(income <= 1600000) {
        totalTax = (income-1200000)*0.15;
    } else if(income <= 2000000) {
        totalTax = (income - 1600000)*0.20 + 60000;
    } else if(income <= 2400000) {
        totalTax = (income - 2000000)*0.25 + 60000 + 80000;
    } else {
        totalTax = (income-2400000)*0.30 + 60000 + 80000 + 100000;
    }
    // output.textContent = "Tax amount is : ₹"+totalTax;
    output.textContent = `Tax amount is : ₹${totalTax}`;
})