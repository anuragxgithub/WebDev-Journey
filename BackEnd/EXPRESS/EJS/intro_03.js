/* 
Passing value to EJS (interpolation)
*/

const express = require("express");
const app = express();

app.set("view engine", "ejs");
const port = 8080;

app.listen(port, ()=> {
    console.log(`App is listening to port number : ${port}`);
})

app.get("/rolldice", (req, res) => {
    console.log("Request received!!")
    let randomNum_1_to_10 = Math.floor(Math.random()*10) + 1;
    res.render("rolldice.ejs", {num : randomNum_1_to_10});
    //OR above line can be written as:
    // res.render("rolldice.ejs", {randomNum_1_to_10 : randomNum_1_to_10});
    // res.render("rolldice.ejs", {randomNum_1_to_10 : randomNum_1_to_10}); // just one value same key and value name
})