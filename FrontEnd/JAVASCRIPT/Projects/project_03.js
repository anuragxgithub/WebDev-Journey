const form = document.getElementById("form");
form.addEventListener('submit', (e)=> {
    e.preventDefault(); // stop form from refreshing page
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const number = (name1.length+name2.length)**3;
    const para = document.getElementById("output");
    para.textContent = "The love score is " + (number % 101) + "%";
})