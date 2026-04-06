/* 
Using conditionals in ejs.  
TAG:
<% --- %>  'Scriptlet' tag, for control-flow, no output
*/

const express = require("express");
const app = express();

app.set("view system", "ejs");

const port = 8080;

app.listen(port, () => {
    console.log(`App is listening to port number : ${port}`);
})

app.get("/rolldice", (req, res) => {
    console.log("Request recieved!!");
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rollDiceCondi.ejs", {diceVal});
})
