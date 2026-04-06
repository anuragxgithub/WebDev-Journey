/* 
Using Loops in ejs
*/

const express = require("express");
const app = express();

app.set("view system", "ejs");

const port = 8080;

app.listen(port, () => {
    console.log(`App is listening to port number : ${port}`);
})

app.get("/ig/:username", (req, res) => {
    console.log("Request recieved!!");
    let {username} = req.params;  // object destructuring
    let names = ["Anurag", "Kartik", "Dhruv", "Shivam"];
    res.render("instagramLoops.ejs", {username, names});
})