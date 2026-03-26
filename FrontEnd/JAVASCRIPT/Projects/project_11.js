const button = document.querySelector("#switch")

let isDark = false;

button.addEventListener("click", () => {

    if (!isDark) {
        button.innerText = "Light Mode";
        button.style.backgroundColor = "white";
        button.style.color = "black";
        document.body.style.backgroundColor = "black";
        isDark = true;
        button.style.boxShadow = "0 5px 10px rgba(255, 255, 255, 0.34)";
    } else {
        button.innerText = "Dark Mode";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        document.body.style.backgroundColor = "white";
        isDark = false;
    }

});