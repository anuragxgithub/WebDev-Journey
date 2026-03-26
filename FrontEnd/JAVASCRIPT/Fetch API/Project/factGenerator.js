const URL = "https://dogapi.dog/api/facts";
const factdata = document.querySelector("#fact-data");
const factButton = document.querySelector("#btn");

async function getFact() {
    let response = await fetch(URL);   
    let data = await response.json()
    let fact = data.facts[0];
    factdata.style.textAlign = "center";
    factdata.style.fontSize = "larger";
    factdata.innerText = fact;

}


factButton.addEventListener("click", getFact)