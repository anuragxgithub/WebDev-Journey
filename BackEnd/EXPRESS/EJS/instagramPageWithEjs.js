/* 
Making instagram page, not as it is.
Here we assume that we get lots of data from db for that page.
So here the data is store in data.json file.
*/

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.listen(port, ()=> {
    console.log(`App is listening to port number: ${port}`);
})

app.get("/ig/:username", (req, res) => {
    console.log("Request recieved!!");
    const {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instaPageWithEjs.ejs", {data});
})
