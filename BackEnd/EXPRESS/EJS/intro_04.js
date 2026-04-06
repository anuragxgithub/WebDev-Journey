/* 
Instagram EJS
*/

const express = require("express");
const app = express();

app.set("view system", "ejs");

const port = 8080;

app.listen(port, () => {
    console.log(`App is listening to port number : ${port}`);
})

app.get("/ig/:username", (req, res) => {
    console.log("Request recieved!!")
    let {username} = req.params;
    console.log(username);
    res.render("instagram.ejs", {username})
})