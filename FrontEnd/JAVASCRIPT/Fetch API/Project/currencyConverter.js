const BASE_URL = "https://v6.exchangerate-api.com/v6/371994ef4b11950bb8abb997/pair/EUR/GBP"

const selects = document.querySelectorAll(".dropdown select");

for(let select of selects) {
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {  //change event triggers when: User selects a different option from dropdown
        // updateFlag(evt.target)
        // console.log(evt.target.value)
        updateFlag(evt.target);  // event.target refers to the "element" that triggered the event
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];  // IN, US,etc
    let new_src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img")
    img.src = new_src;
}

let btn = document.querySelector("button");
btn.addEventListener("click", (evt) => {
    evt.preventDefault();  // prevent page load on form submission
    updateExchangeRate();
})

const updateExchangeRate = async () => {
    let inputAmount = Number(document.querySelector("input").value);
    if(inputAmount === "" || inputAmount < 1) {
        inputAmount = 1;
        document.querySelector("input").value = 1;
    }
    let fromCurrency = selects[0].value;
    let toCurrency = selects[1].value;
    let response =  await fetch(`https://v6.exchangerate-api.com/v6/371994ef4b11950bb8abb997/pair/${fromCurrency}/${toCurrency}`);
    let data = await response.json();  // converts response json to js object
    let exRate = (data.conversion_rate).toFixed(2);
    let finalAmount = (exRate * inputAmount).toFixed(2);
    console.log(exRate)

    // select msg displayer and dispaly correct message
    let message = document.getElementsByClassName("msg")[0];
    message.innerText = `${inputAmount} ${fromCurrency} = ${finalAmount} ${toCurrency}`;
}


window.addEventListener("load", () => {
    updateExchangeRate();
})